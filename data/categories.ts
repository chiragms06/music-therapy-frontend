import {ModuleCategory } from "@/app/interfaces/module-interface";

const categoriesArray: Array<ModuleCategory> = [
    {
      id: 1,
      name: "Basic Information",
      description: "Welcome to the first step of your mental health journey! We are glad you are here. Let us get to know you better!",
      image: "/images/img2.jpg",
      linked: "/categories/basic-information"
    },
    {
      id: 2,
      name: "Nature",
      description: "You are a unique and wonderful person. Let us discover more about your personality and how it shapes your mental health!",
      image: "/images/img1.jpg",
      linked: "/categories/nature"
    },
    {
      id: 3,
      name: "Family",
      description: "Family is an important part of our lives. It can be a source of support or stress. Let us explore how your family affects your mental health!",
      image: "/images/img3.jpg",
      linked: "/categories/family"
    }
  ];

export default categoriesArray;