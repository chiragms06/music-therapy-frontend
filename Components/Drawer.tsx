import Image from "next/image";
import Link from "next/link";

export default function Drawer(props: any) {
  const currCategory = props.currCategory;

  const moduleImage = currCategory.image;
  const moduleName = currCategory.name;
  const moduleDescription = currCategory.description;

  return (
    <div className="sticky top-24 h-fit rounded-r-xl py-8 px-6 bg-white shadow-lg shadow-[#24272B]/50">
      <Image
        src={moduleImage}
        alt="abstract-image"
        className="rounded-md"
        width="300"
        height="300"
      />
      <h1 className="text-[#462749] text-2xl font-medium mt-4 mb-2">
        {moduleName}
      </h1>
      <p className="text-black text-sm">{moduleDescription}</p>
      <div className="flex gap-3">
        <Link href="/categories" passHref>
          <button className="mt-6 p-4 bg-white rounded-xl shadow-md shadow-[#24272B]/40 hover:bg-slate-100">
            <Image src="/back.svg" alt="go-back" width={25} height={25}></Image>
          </button>
        </Link>
        <Link href="/categories" passHref className="w-fit">
          <button className="mt-6 p-4 bg-white rounded-xl shadow-md shadow-[#24272B]/40 hover:bg-slate-100">
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
}
