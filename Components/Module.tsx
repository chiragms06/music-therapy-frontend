import Image from "next/image";
import Link from "next/link";

export default function Module(props: any) {
  return (
    <div className="justify-center h-fit pt-8 pb-6 px-8 bg-white rounded-xl shadow-md shadow-[#24272B]/40">
      <div className="w-full h-4/7">
        <Image
          src={props.image}
          alt="abstract-image"
          className="rounded-lg"
          width="250"
          height="250"
        />
      </div>

      <div className="flex flex-col h-2/7 w-60">
        <h3 className="text-[#462749] text-2xl font-medium mt-4 mb-2">
          {props.name}
        </h3>
        <p className="text-slate-500 text-sm">{props.description}</p>
      </div>

      <div className="flex justify-center space-x-5 mt-8 h-1/7 w-60">
        <Link href={`${props.linked}`} passHref className="h-fit w-fit">
          <button className="bg-[#F7F2FA] hover:bg-white rounded-xl px-8 py-2 font-sans shadow-md shadow-[#24272B]/40">
            Answer
          </button>
        </Link>
        <button className="bg-[#7586FC] hover:bg-[#5c6dd9] text-white hover:text- rounded-xl px-8 py-2 font-sans shadow-md shadow-[#24272B]/40">
          Submit
        </button>
      </div>
    </div>
  );
}
