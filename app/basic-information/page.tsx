import Navbar from "@/Components/Navbar";

export default function BasicInformation() {
  return (
    <>
      <main className="bg-gradient-to-br from-[#4C83F7] to-[#E2A7B9] min-h-screen">
        <Navbar />
        <h1 className="text-3xl text-center font-sans text-white mt-2 font-semibold">
          Basic Information
        </h1>
        <div className="flex p-10 justify-center align-middle">Questions</div>
      </main>
    </>
  );
}
