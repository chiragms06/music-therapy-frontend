export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="flex justify-center py-1 bg-slate-500 text-white">
      <h3>
        ©️ music.therapy - {year}
      </h3>
    </div>
  );
}
