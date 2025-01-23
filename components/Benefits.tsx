import React from "react";
import BenefitComponent from "./BenefitComponent";
import { Heart } from "lucide-react";
import bannerImg from "@/public/homepage/banner_img 1.png";
import Image from "next/image";
const Benefits = () => {
  return (
    <div className="flex flex-col gap-14 bg-muted min-h-screen py-16">
      <div className="flex flex-col gap-4">
        <h1 className=" text-2xl md:text-4xl font-bold text-darktext max-w-[700px] mx-auto text-center">
          What else can I gain from participating in Skills Challenges ?
        </h1>
        <p className="max-w-[700px] mx-auto text-center text-sm text-mutedtext">
          Join Skills Challenges Program to accelerate your career growth and
          become part of Africa&apos;s largest workforce of digital
          professionals.
        </p>
      </div>
      <div className="px-3 xl:px-14 flex flex-col lg:flex-row gap-5 items-start sm:items-center justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <BenefitComponent
            icon={Heart}
            title={"Enhance Your Employment Path"}
            description={
              "Network with other talented individuals and learn from their experiences"
            }
          />

          <BenefitComponent
            icon={Heart}
            title={"Enhance Your Employment Path"}
            description={
              "Network with other talented individuals and learn from their experiences"
            }
          />
          <BenefitComponent
            icon={Heart}
            title={"Enhance Your Employment Path"}
            description={
              "Network with other talented individuals and learn from their experiences"
            }
          />
          <BenefitComponent
            icon={Heart}
            title={"Enhance Your Employment Path"}
            description={
              "Network with other talented individuals and learn from their experiences"
            }
          />
        </div>
        <div>
          <Image
            src={bannerImg}
            alt="bannerImg"
            className="max-w-[450px] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
