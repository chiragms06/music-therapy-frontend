"use client";

import React, { useState, useEffect, FormEvent } from "react";
import Logo from "@/Components/Logo";
import { registerTherapist } from "@/services/api";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

export default function TherapistRegistration() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const userSession = sessionStorage.getItem("user");

  if (!user && !userSession) {
    router.push("/login");
  }

  async function registrationHandler(
    fname: string,
    lname: string,
    email: string,
    contact: string
  ) {
    try {
      const response = await registerTherapist(
        fname,
        lname,
        email,
        contact
      );

      sessionStorage.setItem(
        "therapistName",
        fname + " " + lname
      );
      sessionStorage.setItem("therapistEmail", email);
      sessionStorage.setItem("therapistPhoneNo", contact);
      console.log(response);

      console.log("Registered successfully!");
      setIsRegistered(true);
    } catch (error) {
      console.log(error);
      setIsRegistered(false);
      alert("Registration failed!");
    } finally {
      setIsLoading(false);
    }
  }

  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);

    const response = await registrationHandler(
      formData.get("firstname") as string,
      formData.get("lastname") as string,
      formData.get("email") as string,
      formData.get("contact") as string
    );

    console.log(response);
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg-login.jpg')" }}
    >
      <h1 className="mb-8 text-5xl text-center font-sans text-white font-semibold">
        Therapist Registration
      </h1>

      <div className="p-8 bg-white rounded-xl shadow-md shadow-[#24272B]/40">
        <div className="mb-10 flex justify-center">
          <Logo />
        </div>

        <form onSubmit={onSubmit}>
          <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-8">
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                className="mb-8 border-2 border-b-4 border-b-[#c2c9fa] border-gray-200 rounded-lg px-4 py-2 font-sans"
              />
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                className="mb-8 border-2 border-b-4 border-b-[#c2c9fa] border-gray-200 rounded-lg px-4 py-2 font-sans"
              />
            </div>
            <div className="col-span-2">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full mb-8 border-2 border-b-4 border-b-[#c2c9fa] border-gray-200 rounded-lg px-4 py-2 font-sans"
              />
            </div>
            <div className="col-span-2">
              <input
                type="number"
                name="contact"
                placeholder="Contact No."
                className="w-full mb-8 border-2 border-b-4 border-b-[#c2c9fa] border-gray-200 rounded-lg px-4 py-2 font-sans"
              />
            </div>

            <button
              type="submit"
              className="mt-8 bg-[#7586FC] hover:bg-[#5c6dd9] text-white rounded-xl px-8 py-2 font-sans shadow-md shadow-[#24272B]/40"
              disabled={isLoading}
              hidden={isRegistered}
            >
              {isLoading ? (
                <span className="text-slate-400">Submit</span>
              ) : (
                "Submit"
              )}
            </button>

            <button
              className="mt-8 bg-[#FA1C4B] hover:bg-[#d81C4B] text-white rounded-xl px-8 py-2 font-sans shadow-md shadow-[#24272B]/40"
              disabled={!isRegistered}
              hidden={!isRegistered}
            >
              <Link href="/dashboard" passHref>
                Go to Dashboard
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
