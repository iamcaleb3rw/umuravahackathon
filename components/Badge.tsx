import React from "react";

interface BadgeProps {
  text: string;
}

const Badge = ({ text }: BadgeProps) => {
  return (
    <div className="p-1 bg-green-600 text-sm flex items-center justify-center rounded-full absolute right-3 text-white w-20">
      {text}
    </div>
  );
};

export default Badge;
