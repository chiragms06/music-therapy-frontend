export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="flex items-center justify-center p-2 text-slate-600">
      <h3>
        ©️ music.therapy - {year}
      </h3>
    </div>
  );
}
