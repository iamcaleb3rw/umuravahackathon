import React from "react";
import Icon from "./Icon";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="p-12 bg-primary w-full rounded-[12px] flex flex-col gap-6">
      <Icon />
      <h1 className="text-white text-xl tracking-tight font-bold">{title}</h1>
      <p className="text-white text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
