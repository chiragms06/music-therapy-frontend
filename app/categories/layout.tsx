import Navbar from "@/Components/Navbar";

export default function CategoriesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* <main className="bg-gradient-to-br bg-fixed from-[#4C83F7] to-[#E2A7B9] min-h-screen"> */}
      <main className="bg-cover bg-[url('/images/bg-questionnaire.jpg')] h-full">
        {/* Include shared UI here e.g. a header or sidebar */}
        <Navbar />
        {children}
      </main>
    </section>
  );
}
