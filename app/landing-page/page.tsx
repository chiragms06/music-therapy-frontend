import Navbar from "@/Components/Navbar";
import Image from "next/image";

export default function LandingPage() {
  return (
    // className="bg-cover bg-[url('/images/bg-landing-page-edited.jpg')]"
    <>
      <div className="bg-cover bg-[url('/images/bg-landing-page-edited.jpg')] h-screen">
        <Navbar />
        <div className="flex p-20 justify-center align-middle">
          {/* content */}
          <div className="flex flex-col">
            <h1 className="text-8xl mb-8 font-serif">Welcome!</h1>
            <h3 className="text-3xl mb-8 font-sans font-thin">
              Access or create your account to get started on your journey of
              self-improvement!
            </h3>
            <div className="flex space-x-10">
              <button className="bg-[#462749] text-white rounded-full px-10 py-2 font-sans">My Account</button>
              <button className="bg-[#E2A7B9] text-[#100B00] rounded-full px-10 py-2 font-sans">Get Started</button>
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
      </div>
    </>
  );
}
