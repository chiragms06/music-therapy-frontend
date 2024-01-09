import Navbar from "@/Components/Navbar";

export default function CategoriesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <main className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/bg-questionnaire.jpg')" }}>
        <Navbar />
        {children}
      </main>
    </section>
  );
}
