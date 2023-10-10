import Image from "next/image";
import Navbar from "@/Components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-cover bg-[url('/images/bg-landing-page.jpg')] min-h-screen">
      <Navbar />
      <div className="flex p-20 justify-center align-middle">
        {/* content */}
        <div className="flex flex-col px-20">
          <h1 className="text-8xl mb-10 font-serif text-[#24272B]">Welcome!</h1>
          <h3 className="text-3xl mb-10 font-sans font-thin text-[#24272B]">
            Access or create your account 
            to get started on your journey of self-improvement!
          </h3>
          <div className="flex space-x-8">
            <button className="bg-[#462749] text-white rounded-full px-10 py-2 font-sans shadow-md shadow-[#24272B]/40">
              My Account
            </button>
            <Link href="/categories" passHref>
              <button className="bg-white hover:bg-slate-100 text-[#100B00] rounded-full px-10 py-2 font-sans shadow-md shadow-[#24272B]/40">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        {/* hero image */}
        <div className="ml-20 align-middle">
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
