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

export type QuestionType = {
  id: number;
  type: string;
  description: string;
  responseType: string;
  options?: Array<OptionType>;
}

export type OptionType = {
  optionId: number;
  description: string;
}