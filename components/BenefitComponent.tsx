import { LucideIcon } from "lucide-react";
import React from "react";

interface BenefitComponentProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const BenefitComponent = ({
  icon: Icon,
  title,
  description,
}: BenefitComponentProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="bg-primary h-14 w-14 rounded-lg content-center align-center justify-items-center">
        <Icon className="font-thin h-6 w-6" color="white" strokeWidth={1.4} />
      </div>
      <div>
        <h1 className="text-xl sm:text-sm  font-bold">{title}</h1>
      </div>
      <div>
        <p className="text-xs text-mutedtext max-w-[270px]">{description}</p>
      </div>
    </div>
  );
};

export default BenefitComponent;
