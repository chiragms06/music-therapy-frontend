"use client";

import _ from "lodash";
import Drawer from "@/Components/Drawer";
import categoriesArray from "@/data/categories";
import QuestionsList from "@/Components/QuestionsList";
import Link from "next/link";
import { QuestionType } from "@/app/interfaces/interfaces";
import { fetchQuestions } from "@/services/api";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

export default function Questionnaire({
  params,
}: {
  params: { questionnaire: string };
}) {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const userSession = sessionStorage.getItem("user");

  if (!user && !userSession) {
    router.push("/login");
  }

  const currCategory = _.startCase(params.questionnaire);
  const currCategoryDescription = categoriesArray.find(
    (category) => category.name === currCategory
  );

  const [questionsArray, setQuestionsArray] = useState<Array<QuestionType>>([]);

  useEffect(() => {
    async function getQuestions() {
      try {
        const fetchedQuestions = await fetchQuestions();
        const filteredQuestions = fetchedQuestions.filter(
          (question: QuestionType) => {
            return question.type === currCategory;
          }
        );
        setQuestionsArray(filteredQuestions);
      } catch (error) {
        console.log(error);
      }
    }
    getQuestions();
  }, [currCategory]);

  return (
    <section>
      <div className="flex text-slate-700">
        <div className="w-1/4 min-h-screen">
          <Drawer currCategory={currCategoryDescription} />
        </div>
        <div className="flex flex-col px-10 py-8 w-3/4 data-te-perfect-scrollbar-init">
          <div className="flex flex-col justify-center align-middle">
            <QuestionsList questions={questionsArray} />
          </div>
          <div className="flex justify-center">
            <Link href="/categories" passHref className="w-fit">
              <button className="mt-6 p-4 bg-[#7586FC] hover:bg-[#5c6dd9] text-white rounded-xl shadow-md shadow-[#24272B]/40">
                Submit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
