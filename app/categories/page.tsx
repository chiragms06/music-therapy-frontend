import ModuleList from "@/Components/ModuleList";
import categoriesArray from "@/data/categories";

export default function Categories() {
  return (
    <div className="py-6 text-slate-700">
        <h1 className="text-3xl text-center font-sans text-white font-semibold">
          Information Modules
        </h1>
        <div className="flex p-10 justify-center align-middle">
          <ModuleList modules={categoriesArray} />
        </div>
    </div>
  );
}
