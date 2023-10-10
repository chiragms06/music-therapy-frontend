import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Module(props: any) {
  return (
    <div className="flex flex-col justify-center text-center py-10 px-10 mx-12 bg-white rounded-xl shadow-md shadow-[#24272B]/40">
      <div className="flex justify-center">
        <Image
          src={props.image}
          alt="abstract-image"
          width="150"
          height="150"
        />
      </div>
      <h3 className="text-[#462749] text-2xl font-medium my-5">{props.name}</h3>
      <p className="text-black text-sm mb-11">{props.description}</p>
      <div className="flex justify-center space-x-5 object-bottom">
        <Link href="/categories" passHref>
          <button className="bg-[#F7F2FA] hover:bg-white text-[#100B00] rounded-xl px-10 py-2 font-sans shadow-md shadow-[#24272B]/40">
            Answer
          </button>
        </Link>
        <button className="bg-[#F7F2FA] hover:bg-white text-[#100B00] rounded-xl px-10 py-2 font-sans shadow-md shadow-[#24272B]/40">
          Submit
        </button>
      </div>
    </div>
  );
}
