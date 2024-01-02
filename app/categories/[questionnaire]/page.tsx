"use client";

import _ from "lodash";
import Drawer from "@/Components/Drawer";
import categoriesArray from "@/data/categories";
// import questionsArray from "@/data/questions";
import QuestionsList from "@/Components/QuestionsList";
import Link from "next/link";
import { QuestionType } from "@/app/interfaces/interfaces";
import { fetchQuestions } from "@/services/api";
import { useState, useEffect } from "react";

export default function Questionnaire({
  params,
}: {
  params: { questionnaire: string };
}) {
  const currCategory = _.startCase(params.questionnaire);
  const currCategoryDescription = categoriesArray.find(
    (category) => category.name === currCategory
  );

  // const questionsData = questionsArray.filter((question) => {
  //   return question.category === currCategory;
  // });

  const [questionsArray, setQuestionsArray] = useState<Array<QuestionType>>([]);

  useEffect(() => {
    async function getQuestions() {
      try {
        setQuestionsArray(await fetchQuestions());
        setQuestionsArray(questionsArray.filter((question) => {
          return question.type === currCategory;
        }));
      } catch (error) {
        console.log(error);
      }
    }
    getQuestions();
  }, []);

  console.log(currCategory);
  console.log(currCategoryDescription);
  console.log(questionsArray);

  return (
    <section>
      <div className="flex text-slate-700">
        <div className="w-1/4 min-h-screen mt-10">
          <Drawer currCategory={currCategoryDescription} />
        </div>
        <div className="flex flex-col px-10 py-8 w-3/4 data-te-perfect-scrollbar-init">
          {/* <h1 className="text-3xl text-center font-sans text-white mt-2 font-semibold">
            {currCategory}
          </h1> */}
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
