import React from "react";
import Icon from "./Icon";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard = ({ title, description }: FeatureCardProps) => {
  return (
    <div className="p-10 bg-primary w-full  rounded-[12px] flex flex-col gap-4">
      <Icon />
      <h1 className="text-white text-lg tracking-tight font-bold">{title}</h1>
      <p className="text-white text-xs">{description}</p>
    </div>
  );
};

export default FeatureCard;
