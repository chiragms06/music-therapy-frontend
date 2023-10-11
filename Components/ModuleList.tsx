import React from "react";
import Image from "next/image";
import Module from "./Module";
import { ModuleCategory } from "@/app/interfaces/module-interface";

export default function ModuleList(props: any) {
  return props.modules.map((module: ModuleCategory) => {
    return (
      <div className="flex justify-center mx-6 min-w-min">
        <Module
          key={module.id}
          name={module.name}
          description={module.description}
          image={module.image}
          // ref={module.linked}
        />
      </div>
    );
  });
}
