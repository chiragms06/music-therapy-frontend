import _ from "lodash";
import Drawer from "@/Components/Drawer";
import categoriesArray from "@/data/categories";
import questionsArray from "@/data/questions";
import QuestionsList from "@/Components/QuestionsList";
import Link from "next/link";

export default function Questionnaire({
  params,
}: {
  params: { questionnaire: string };
}) {
  const currCategory = _.startCase(params.questionnaire);
  const currCategoryData = categoriesArray.find(
    (category) => category.name === currCategory
  );

  const questionsData = questionsArray.filter((question) => {
    return question.category === currCategory;
  });

  return (
    <section>
      <div className="flex text-slate-700">
        <div className="w-1/4 min-h-screen mt-10" >
          <Drawer currCategory={currCategoryData}/>
        </div>
        <div className="flex flex-col px-10 py-8 w-3/4 data-te-perfect-scrollbar-init">
          {/* <h1 className="text-3xl text-center font-sans text-white mt-2 font-semibold">
            {currCategory}
          </h1> */}
          <div className="flex flex-col justify-center align-middle">
            <QuestionsList questions={questionsData} />
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