import categoriesArray from "@/data/categories";
import Module from "@/Components/Module";
import { ModuleCategory } from "@/app/interfaces/interfaces";
import _ from "lodash";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

export default function Categories({
  params,
}: {
  params: { categories: string };
}) {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const userSession = sessionStorage.getItem("user");

  if (!user && !userSession) {
    router.push("/login");
  }
  
  const caseName = _.startCase(params.categories);
  return (
    <div className="py-6 text-slate-700">
      <h1 className="flex justify-start px-32 text-3xl text-center font-sans text-white font-semibold">
        {caseName}
      </h1>
      <div className="mt-8 flex items-center justify-center">
        <div className="grid grid-flow-row grid-cols-4 gap-y-8 gap-x-4">
          {categoriesArray.map((module: ModuleCategory) => {
            return (
              <Module
                key={module.id}
                name={module.name}
                description={module.description}
                image={module.image}
                linked={module.linked}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
