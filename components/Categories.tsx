import React from "react";

import { categories, categoriesTwo, categoriesThree } from "@/categories";

import CategoryButton from "./CategoryButton";
import Carousel from "./Carousel";
import dashboardImg from "@/public/homepage/dashboard.png";
import sfLogo from "@/public/homepage/sfLogo.png";

const slides = [
  {
    logo: sfLogo,
    description:
      "The Embedded Finance Platform and Payroll Management Software Solutions for your organization and Workforce.",
    path: "/",
    img: dashboardImg,
  },
  {
    logo: sfLogo,
    description:
      "The Embedded Finance Platform and Payroll Management Software Solutions for your organization and Workforce.",
    path: "/",
    img: dashboardImg,
  },
];

const Categories = () => {
  return (
    <div className="py-14 min-h-screen flex flex-col gap-12">
      <div className="flex flex-col gap-3 items-center px-2">
        <h1 className="text-darktext text-2xl md:text-4xl tracking-tight font-bold max-w-[860px] text-center">
          Skills Challenges Cover various in-demand skills and Careers for the
          digital economy
        </h1>
        <p className="text-mutedtext text-sm text-center">
          Explore the projects that various talents are working on.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-wrap gap-4 text-center">
          {categories.map((category, index) => (
            <CategoryButton
              buttonText={category.label}
              key={index}
              className={
                "bg-muted text-mutedtext font-thin hover:bg-muted-foreground/30"
              }
            />
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {categoriesTwo.map((category, index) => (
            <CategoryButton
              buttonText={category.label}
              key={index}
              className={"bg-muted text-mutedtext font-thin"}
            />
          ))}
        </div>
        <div className="flex items-center flex-wrap justify-center gap-3 md:gap-6">
          {categoriesThree.map((category, index) => (
            <CategoryButton
              buttonText={category.label}
              key={index}
              className={"bg-muted text-mutedtext font-thin"}
            />
          ))}
        </div>
      </div>
      <div className="max-w-[1000px] mx-auto w-full height-[600px]">
        <Carousel slides={slides} />
      </div>
    </div>
  );
};

export default Categories;
