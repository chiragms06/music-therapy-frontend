import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="flex w-full">
      <div className="w-11/20">
        <Image
          src="/images/bg-signup.jpg"
          alt="abstract-image"
          width="800"                                                                                                                                                                                                                      
          height="800"
        />
      </div>
      <div className="justify-center w-9/20 pt-8 pb-6 px-8 bg-white rounded-xl shadow-md shadow-[#24272B]/40">
        <div className="flex flex-col h-2/7 w-60">
          <h3 className="text-[#462749] text-2xl font-medium mt-4 mb-2">
            Header
          </h3>
          <p className="text-slate-500 text-sm">Description</p>
        </div>

        {/* <div className="flex justify-center space-x-5 mt-8 h-1/7 w-60">
        <Link href={`${props.linked}`} passHref className="h-fit w-fit">
          <button className="bg-[#F7F2FA] hover:bg-white rounded-xl px-8 py-2 font-sans shadow-md shadow-[#24272B]/40">
            Answer
          </button>
        </Link>
        <button className="bg-[#7586FC] hover:bg-[#5c6dd9] text-white hover:text- rounded-xl px-8 py-2 font-sans shadow-md shadow-[#24272B]/40">
          Submit
        </button>
      </div> */}
      </div>
    </div>
  );
}
