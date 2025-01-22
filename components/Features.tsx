import React from "react";
import FeatureCard from "./FeatureCard";
import { BriefcaseBusiness } from "lucide-react";

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4 items-center xl:py-[76px] xl:px-[183px] bg-[#F9FAFB]">
      <div className="max-w-[530px] flex flex-col gap-3">
        <h1 className="-tracking-[0.5px] text-darktext text-center text-3xl font-bold">
          Experience a New Way of Building Work Experience
        </h1>
        <p className="text-sm text-center text-mutedtext">
          Join Skills Challenges Program to accelerate your career growth and
          become part of Africa&apos;s largest workforce of digital
          professionals.
        </p>
      </div>
      <div className="flex flex-col gap-3 w-full mt-14">
        <FeatureCard
          title={"Build a Strong Portfolio and Hand-On Experience"}
          description={
            "Tackle real-world projects through challenges and hackathons that mirror real world challenges faced by businesses and organizations. Therefore, showcase your skills and accomplishments to potential employers and clients through a portofolio of completed projects."
          }
        />

        <div className="w-full flex gap-3">
          <FeatureCard
            title={"Enhance Your Employment Path"}
            description={
              "elop the in-demand skills and build a strong portofolio to increase your chances of landing your dream job or contract."
            }
          />
          <FeatureCard
            title={"Earn Recognition and Prizes"}
            description={
              "Earn both Money and Knowledge Prizes by participating in various contests and competitions by working on real world projects and hackathons from our partner companies & organizations"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
