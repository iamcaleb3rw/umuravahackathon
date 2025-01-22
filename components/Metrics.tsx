import React from "react";
import ellipseImage from "@/public/homepage/ellipse.svg";
import Image from "next/image";
import Statline from "./Statline";

const Metrics = () => {
  return (
    <div className="px-2 xl:px-[110px] flex flex-col w-full border items-center justify-center py-[50px]  min-h-[50vh]">
      <div className="relative min-h-[260px] w-full flex items-center justify-center xl:px-[75px] bg-primary rounded-[26px] overflow-hidden">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 place-items-center text-center xl:flex md:grid md:grid-cols-2 md:gap-3 py-7  justify-between w-full">
          <Statline number={"1"} title={"Year"} />
          <Statline number={"500+"} title={"Challenges completed"} />
          <Statline number={"10K+"} title={"Users"} />
          <Statline number={"6+"} title={"Countries"} />
        </div>
        <Image
          src={ellipseImage}
          alt="Ellipse Image"
          className="absolute -left-10 -bottom-[410px]"
        />
        <Image
          src={ellipseImage}
          alt="Ellipse Image"
          className="absolute -right-60 -top-[300px]"
        />
      </div>
    </div>
  );
};

export default Metrics;
