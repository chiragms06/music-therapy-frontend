"use client"

import Navbar from "@/Components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

export default function Registration() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const userSession = sessionStorage.getItem("user");

  if (!user && !userSession) {
    router.push("/login");
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg-login.jpg')" }}
    >
      <Navbar />
      <h1 className="my-8 text-4xl text-center font-sans text-white font-semibold">
        Registration
      </h1>

      <div className="flex items-center justify-center gap-8">
        <div className="p-8 bg-white rounded-xl shadow-md shadow-[#24272B]/40">
          <div className="flex items-center justify-center">
            <Image
              src="/images/patient-registration.jpeg"
              alt="abstract-image"
              className="rounded-md"
              width="300"
              height="300"
            />
          </div>
          <div className="flex w-full items-center justify-center mt-8">
            <Link href="/registration/patient">
              <button className=" bg-[#7586FC] hover:bg-[#5c6dd9] text-white rounded-xl px-8 py-2 font-sans shadow-md shadow-[#24272B]/40">
                Patient
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center gap-8">
          <div className="p-8 bg-white rounded-xl shadow-md shadow-[#24272B]/40">
            <div className="flex items-center justify-center">
              <Image
                src="/images/therapist-registration.jpeg"
                alt="abstract-image"
                className="rounded-md"
                width="300"
                height="300"
              />
            </div>
            <div className="flex w-full items-center justify-center mt-8">
              <Link href="/registration/therapist">
                <button className=" bg-[#FA1C4B] hover:bg-[#d81C4B] text-white rounded-xl px-8 py-2 font-sans shadow-md shadow-[#24272B]/40">
                  Therapist
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
