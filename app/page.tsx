"use client";

import Image from "next/image";
import Navbar from "@/Components/Navbar";
import Link from "next/link";
import Login from "@/Components/Login";

export default function Home() {
  return (
    <main className="bg-cover bg-[url('/images/bg-landing-page.jpg')] min-h-screen">
      <Navbar />
      <div className="flex pt-20 px-20 justify-center">
        {/* content */}
        <div className="flex flex-col px-20 py-20 w-2/3">
          <h1 className="text-8xl mb-10 font-serif text-[#24272B]">Welcome!</h1>
          <h3 className="text-3xl mb-10 font-sans font-thin text-[#24272B]">
            Access or create your account to get started on your journey of
            self-improvement!
          </h3>
          <div className="flex space-x-8">
            <button className="bg-[#462749] text-white rounded-full px-10 py-2 font-sans shadow-md shadow-[#24272B]/40">
              Sign-up
            </button>
            <Link href="/categories" passHref>
              <Login />
            </Link>
          </div>
        </div>
        {/* hero image */}
        <div className="ml-20 align-middle w-1/3">
          <Image
            src="/images/meditation.png"
            alt="hero"
            width="500"
            height="500"
          />
        </div>
      </div>
    </main>
  );
}
