export type ModuleCategory = {
  id: number;
  name: string;
  description: string;
  image: string;
  linked: string;
};

export type QuestionInterface = {
  id: number;
  question: string;
  category: string;
  type: string;
  options: Array<string>;
};