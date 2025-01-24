import { LucideIcon } from "lucide-react";
import React from "react";
import { IconType } from "react-icons/lib";

interface SocialMediaProps {
  icon: LucideIcon | IconType;
  className?: string;
}

const SocialMedia = ({ icon: Icon, className }: SocialMediaProps) => {
  return (
    <div>
      <div className="h-9 w-9 bg-white flex items-center justify-center rounded-full">
        <Icon fill="#001A40" color="transparent" className={`${className}`} />
      </div>
    </div>
  );
};

export default SocialMedia;
