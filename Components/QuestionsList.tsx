import Question from "@/Components/Question";
import { QuestionType } from "@/app/interfaces/interfaces";

export default function QuestionsList(props: any) {
  return props.questions.map((question: QuestionType, index : number) => {
    return (
      <div className="flex justify-center my-2 min-w-max">
        <Question
          key={question.id}
          id={index + 1}
          description={question.description}
          category={question.type}
          type={question.responseType}
          options={question.options}
        />
      </div>
    );
  });
}
