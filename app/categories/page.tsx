import ModuleList from "@/Components/ModuleList";
import Navbar from "@/Components/Navbar";
import Image from "next/image";
import { ModuleCategory } from "@/app/interfaces/module-interface";

// bg-gradient-to-br from-[#4C83F7] to-[#E2A7B9]

export default function Categories() {
  const categories: Array<ModuleCategory> = [
    {
      id: 1,
      name: "Basic Information",
      description:
        "Welcome to the first step of your mental health journey! We are glad you are here. Let us get to know you better.",
      image: "/images/basic-info-abstract.png",
    },
    {
      id: 2,
      name: "Nature",
      description:
        "You are a unique and wonderful person. Let us discover more about your personality and how it shapes your mental health.",
      image: "/images/nature-abstract.png",
    },
    {
      id: 3,
      name: "Family",
      description:
        "Family is an important part of our lives. It can be a source of support or stress. Let us explore how your family affects your mental health.",
      image: "/images/family-abstract.png",
    },
  ];

  return (
    <>
      <main className="bg-gradient-to-br from-[#4C83F7] to-[#E2A7B9] min-h-screen">
        <Navbar />
        <h1 className="text-4xl text-center font-sans text-white mt-4 font-semibold">
          Information Modules
        </h1>
        <div className="flex p-10 justify-center align-middle">
          <ModuleList modules={categories} />
        </div>
      </main>
    </>
  );
}
