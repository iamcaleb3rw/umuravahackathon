import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface StepComponentsProps {
  image?: StaticImport | string | null;
  title: string;
  description: string;
  badge: string;
}

const StepComponents = ({
  image,
  title,
  description,
  badge,
}: StepComponentsProps) => {
  return (
    <div className="bg-white flex flex-col gap-4 h-full relative overflow-hidden rounded-2xl px-6 py-8">
      <div className="bg-primary w-fit px-[12px] py-[6px] text-xs font-normal text-white rounded-md">
        {badge}
      </div>
      <div className="ml-3 flex flex-col gap-3 z-20">
        <h1 className="font-bold text-[18px]">{title}</h1>
        <p className="text-sm">{description}</p>
      </div>
      {image && (
        <Image
          src={image}
          alt="Step Image"
          className="absolute bottom-0 right-0 hidden sm:block"
        />
      )}
    </div>
  );
};

export default StepComponents;
