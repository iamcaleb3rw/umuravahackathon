import React from "react";
import Badge from "./Badge";
import whiteLogo from "@/public/homepage/whitelogo.png";
import Image from "next/image";
import SkillTag from "./SkillTag";
import { Button } from "./ui/button";
import Link from "next/link";
interface ChallengeCardProps {
  status: string;
  title: string;
  level: string;
  timeline: string;
  path: string;
}

const ChallengeCard = ({
  status,
  title,
  level,
  timeline,
  path,
}: ChallengeCardProps) => {
  return (
    <div className="w-full py-3 border rounded-2xl">
      <div className="px-3">
        <div className="h-[200px] w-full bg-primary flex rounded-xl mb-2 flex-col p-2 relative">
          <Badge text={status} />
          <div className="h-[90%] flex justify-center items-center">
            <Image src={whiteLogo} alt="Logo" width={200} />
          </div>
        </div>
      </div>
      <div className="px-3 border-b">
        <h1 className="font-[600] tracking-tight my-3">{title}</h1>
        <p className="text-xs font-semibold">Skills needed:</p>
        <div className="flex gap-1 mt-1">
          <SkillTag skill={"UI/UX Design"} />
          <SkillTag skill={"UI/UX Design"} />
          <SkillTag skill={"UI/UX Design"} />
        </div>
        <div className="text-xs font-semibold my-2">
          Seniority level:{" "}
          <span className="text-mutedtext font-thin">{level}</span>
        </div>

        <div className="text-xs font-semibold my-2">
          Timeline: <span className="text-mutedtext font-thin">{timeline}</span>
        </div>
      </div>
      <div className="pt-3 px-4">
        <Link href={`/dashboard/hackathons/${path}`}>
          <Button className="h-8">View Challenge</Button>
        </Link>
      </div>
    </div>
  );
};

export default ChallengeCard;
