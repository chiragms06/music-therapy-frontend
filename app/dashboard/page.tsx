"use client";

import React, { useState } from "react";
import Navbar from "@/Components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const userSession = sessionStorage.getItem('user');

  if (!user && !userSession) {
    router.push("/login");
  }

  const [casesArray, setCasesArray] = useState([
    {
      id: 1,
      name: "Adam Lorry",
    },
    {
      id: 2,
      name: "Bob Marshell",
    },
    {
      id: 3,
      name: "Clair Johnson",
    },
    {
      id: 4,
      name: "Dan Brown",
    },
  ]);

  const newCaseHandler = () => {
    //get new id
    const newCase = {
      id: Math.floor(Math.random() * 1000 + casesArray.length),
      name: "New Case",
    };
    setCasesArray([...casesArray, newCase]);
  };

  const deleteCaseHandler = (key: number) => {
    const newCasesArray = casesArray.filter((item) => item.id !== key);
    setCasesArray(newCasesArray);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg-dashboard.jpg')" }}
    >
      <Navbar />
      <h1 className="my-8 text-3xl text-center font-sans text-white font-semibold">
        Dashboard
      </h1>
      <div className="flex items-center justify-center">
        <div className="sticky px-6 bg-white rounded-xl">
          <div className="flex flex-col py-12 px-4">
            <div className="flex items-center justify-center">
              <Image
                src="/images/blank-profile-photo.jpeg"
                alt="abstract-image"
                className="rounded-md"
                width="200"
                height="200"
              />
            </div>
            <h1 className="text-[#462749] text-2xl font-medium mt-8 mb-4">
              {sessionStorage.getItem("therapistName")}
            </h1>
            <div className="flex text-slate-600 text-sm">
              <Image
                src="/email.svg"
                alt="email"
                width={20}
                height={20}
              ></Image>
              {sessionStorage.getItem("therapistEmail")}
            </div>
            <div className="flex mt-4 text-slate-600 text-sm">
              <Image
                src="/phone.svg"
                alt="phone no."
                width={20}
                height={20}
              ></Image>

              {sessionStorage.getItem("therapistPhoneNo")}
            </div>
          </div>
        </div>

        <div className="flex flex-col px-48 py-8 items-start">
          <div
            className="mb-6 p-4 bg-[#7586FC] hover:bg-[#5c6dd9] text-white rounded-xl shadow-md shadow-[#24272B]/40 hover:cursor-pointer"
            onClick={newCaseHandler}
          >
            + New Case
          </div>
          <div className="flex flex-col items-center justify-center">
            <div>
              {casesArray.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className="grid grid-cols-3 gap-8 mt-4 px-8 py-4 min-w-fit bg-white rounded-xl shadow-md shadow-[#24272B]/40 hover:bg-slate-100"
                  >
                    <div className="flex">{item.name}</div>
                    <div className="flex justify-center text-slate-400">
                      id: {item.id}
                    </div>
                    <div className="flex grid-cols-3 gap-4">
                      <span className="text-[#7586FC] hover:text-[#4856ac] hover:cursor-pointer">
                        Summary
                      </span>
                      <Link href="/categories" passHref>
                        <span className="text-[#7586FC] hover:text-[#4856ac] hover:cursor-pointer">
                          Edit
                        </span>
                      </Link>
                      <span
                        className="text-red-500 hover:text-red-800 hover:cursor-pointer"
                        onClick={() => deleteCaseHandler(item.id)}
                      >
                        Delete
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
