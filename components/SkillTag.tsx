import React from "react";

interface SkillTagProps {
  skill: string;
}

const SkillTag = ({ skill }: SkillTagProps) => {
  return (
    <div className="text-[9px] text-primary py-[3px] px-1 border border-primary w-fit rounded-2xl">
      {skill}
    </div>
  );
};

export default SkillTag;
