import { QuestionInterface } from "@/app/interfaces/interfaces";

const questionsArray: Array<QuestionInterface> = [
  {
    id: 1,
    question: "What is your name?",
    category: "Basic Information",
    type: "text",
    options: [],
  },
  {
    id: 2,
    question: "What is your date of birth?",
    category: "Basic Information",
    type: "date",
    options: [],
  },
  {
    id: 3,
    question: "What is your age group?",
    category: "Basic Information",
    type: "radio",
    options: ["<13", "13-23", "24-35", "36-50", ">50"],
  },
  {
    id: 4,
    question: "What is your gender?",
    category: "Basic Information",
    type: "radio",
    options: ["Male", "Female", "Transgender"],
  },
  {
    id: 5,
    question: "Which background do you belong to?",
    category: "Basic Information",
    type: "radio",
    options: ["Rural", "Urban", "Metropolitian city", "NRI"],
  },
  {
    id: 6,
    question: "What is your marital status?",
    category: "Basic Information",
    type: "radio",
    options: ["Married", "Unmarried", "Divorcee"],
  },
  {
    id: 7,
    question: "How many children do you have?",
    category: "Basic Information",
    type: "number",
    options: [],
  },
  {
    id: 8,
    question: "Are you physically handicapped?",
    category: "Basic Information",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    id: 9,
    question: "What is your profession?",
    category: "Basic Information",
    type: "radio",
    options: [
      "Business",
      "Salaried",
      "Unemployed",
      "Housewife",
      "Recently left",
      "Part time",
    ],
  },
  {
    id: 10,
    question: "What is your education level?",
    category: "Basic Information",
    type: "radio",
    options: [
      "Primary",
      "Secondary",
      "Graduation",
      "Postgraduation",
      "Doctorate",
    ],
  },
  {
    id: 11,
    question: "What is your height in inches?",
    category: "Basic Information",
    type: "number",
    options: [],
  },
  {
    id: 12,
    question: "What is your weight in Kg?",
    category: "Basic Information",
    type: "number",
    options: [],
  },
  {
    id: 13,
    question: "How many members are there in your family?",
    category: "Basic Information",
    type: "number",
    options: [],
  },
  {
    id: 14,
    question: "What type of family do you belong to?",
    category: "Basic Information",
    type: "radio",
    options: ["Nuclear", "Joint", "Alone"],
  },
  {
    id: 15,
    question: "How would you describe your character?",
    category: "Nature",
    type: "radio",
    options: [
      "Extrovert",
      "Introvert",
      "Ambivert",
      "Stubborn",
      "Short Tempered",
    ],
  },
  {
    id: 16,
    question: "How would you describe your personality?",
    category: "Nature",
    type: "radio",
    options: [
      "Outspoken",
      "Perso",
      "Diplomatic",
      "People Pleaser",
      "Overthinker",
    ],
  },
  {
    id: 17,
    question: "Which of the following best describes your way of thinking?",
    category: "Nature",
    type: "radio",
    options: ["Optimistic", "Pessimistic", "Realistic", "Idealistic"],
  },
  {
    id: 18,
    question: "Which of the following best describes your behaviour?",
    category: "Nature",
    type: "radio",
    options: [
      "Risk Taker/Adventurer",
      "Adventurer or Risk with care",
      "Prefer not to venture",
      "In comfort zone",
    ],
  },
  {
    id: 19,
    question: "How are your time management skills?",
    category: "Nature",
    type: "radio",
    options: [
      "Procrastinator/lazy",
      "Well Planned but not managed with time",
      "Well managed with time",
    ],
  },
  {
    id: 20,
    question: "What is your usual level kindness?",
    category: "Nature",
    type: "radio",
    options: ["Forgive yourself/others", "Hard to Forgive Others", "Punish"],
  },
  {
    id: 21,
    question: "Do you like to take responsibilities?",
    category: "Nature",
    type: "radio",
    options: ["Yes", "No", "Sometimes"],
  },
  {
    id: 22,
    question: "How would you rate your memory?",
    category: "Nature",
    type: "radio",
    options: [
      "Forget day to day things",
      "Remember old time stuff",
      "Gets over things easily",
    ],
  },
  {
    id: 23,
    question: "Do you like to take leadership?",
    category: "Nature",
    type: "radio",
    options: ["Yes", "No", "Sometimes"],
  },
  {
    id: 24,
    question: "Do you like to work in a team?",
    category: "Nature",
    type: "radio",
    options: ["Yes", "No", "Sometimes"],
  },
  {
    id: 25,
    question: "Do you get frustrated if things do not go as planned?",
    category: "Nature",
    type: "radio",
    options: ["Yes", "No", "Sometimes"],
  },
  {
    id: 26,
    question: "Are you staying with your family?",
    category: "Family",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    id: 27,
    question: "What does your family mean to you?",
    category: "Family",
    type: "textarea",
    options: [],
  },
  {
    id: 28,
    question: "How would you describe your bonding with family members?",
    category: "Family",
    type: "radio",
    options: ["Strong", "Cordial", "Connected", "Just ok", "Not ok"],
  },
  {
    id: 29,
    question: "How is your family atmosphere?",
    category: "Family",
    type: "radio",
    options: ["Open", "Moderate", "Conservative"],
  },
  {
    id: 30,
    question: "How do you feel when family member gives instructions?",
    category: "Family",
    type: "radio",
    options: ["Like", "Don't like", "Sometimes ok"],
  },
  {
    id: 31,
    question:
      "Is there anyone in family with whom you can discuss your trouble/problem?",
    category: "Family",
    type: "radio",
    options: ["Yes", "No"],
  },
];

export default questionsArray;
