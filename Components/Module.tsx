import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Module(props: any) {
  return (
    <div className="container justify-center max-w-min min-h-full py-8 px-8 bg-white rounded-xl shadow-md shadow-[#24272B]/40">
      <Image
        src={props.image}
        alt="abstract-image"
        className="rounded-lg"
        layout="responsive"
        width="200"
        height="200"
      />
      <div className="flex flex-col">
        <h3 className="text-[#462749] text-2xl font-medium mt-4 mb-2">
          {props.name}
        </h3>
        <p className="text-black text-sm">{props.description}</p>
        <div className="flex justify-center space-x-5 mt-11">
          {/* <Link href={props.linked} passHref> */}
            <button className="bg-[#F7F2FA] hover:bg-white text-[#100B00] rounded-xl px-10 py-2 font-sans shadow-md shadow-[#24272B]/40">
              Answer
            </button>
          {/* </Link> */}
          <button className="bg-[#F7F2FA] hover:bg-white text-[#100B00] rounded-xl px-10 py-2 font-sans shadow-md shadow-[#24272B]/40">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
