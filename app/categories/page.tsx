"use client"

import categoriesArray from "@/data/categories";
import Module from "@/Components/Module";
import { ModuleCategory } from "@/app/interfaces/interfaces";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

export default function Categories() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const userSession = sessionStorage.getItem("user");

  if (!user && !userSession) {
    router.push("/login");
  }

  return (
    <div className="py-6 text-slate-700">
      <h1 className="text-3xl text-center font-sans text-white font-semibold">
        Information Modules
      </h1>
      <div className="mt-8 flex items-center justify-center">
        <div className="grid grid-flow-row grid-cols-4 gap-y-8 gap-x-6">
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
