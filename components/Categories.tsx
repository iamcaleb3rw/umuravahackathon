import React from "react";

import { categories, categoriesTwo, categoriesThree } from "@/categories";

import CategoryButton from "./CategoryButton";

const Categories = () => {
  return (
    <div className="py-14 min-h-screen flex flex-col gap-8">
      <div className="flex flex-col gap-3 items-center">
        <h1 className="text-darktext text-4xl tracking-tight font-bold max-w-[860px] text-center">
          Skills Challenges Cover various in-demand skills and Careers for the
          digital economy
        </h1>
        <p className="text-mutedtext text-sm">
          Explore the projects that various talents are working on.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-4 text-center">
          {categories.map((category, index) => (
            <CategoryButton
              buttonText={category.label}
              key={index}
              className={index === 0 ? undefined : "bg-muted text-mutedtext"}
            />
          ))}
        </div>
        <div className="flex gap-4">
          {categoriesTwo.map((category, index) => (
            <CategoryButton
              buttonText={category.label}
              key={index}
              className={"bg-muted text-mutedtext"}
            />
          ))}
        </div>
        <div className="flex gap-6">
          {categoriesThree.map((category, index) => (
            <CategoryButton
              buttonText={category.label}
              key={index}
              className={"bg-muted text-mutedtext"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
