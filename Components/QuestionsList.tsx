import Question from "@/Components/Question";
import { QuestionInterface } from "@/app/interfaces/module-interface";

export default function QuestionsList(props: any) {
  return props.questions.map((question: QuestionInterface, index : number) => {
    return (
      <div className="flex justify-center my-2 min-w-max">
        <Question
          key={question.id}
          id={index + 1}
          description={question.question}
          category={question.category}
          type={question.type}
          options={question.options}
        />
      </div>
    );
  });
}
