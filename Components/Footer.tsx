export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="flex justify-center pt-4 text-white">
      <h3>
        ©️ music.therapy - {year}
      </h3>
    </div>
  );
}
