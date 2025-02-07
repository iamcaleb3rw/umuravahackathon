import Breadcrumb from "@/components/Breadcrumb";
import ChallengeCard from "@/components/ChallengeCard";
import { numberedHackathons } from "@/lib/actions/hackathon";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hackathons = async () => {
  const hackathons = await numberedHackathons(9);
  return (
    <div className="border-t py-3 md:py-24 px-2 sm:px-6 md:px-16">
      <Breadcrumb backRoute={"/"} currentRoute={"Hackathons & Challenges"} />
      <div className="my-4 md:my-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 gap-3">
        {hackathons.map((hackathon: any) => (
          <ChallengeCard
            status={"Open"}
            title={"Design a dashboard for SokoFund"}
            level="(Junior, Intermediate, Senior)"
            timeline="15 Days"
            id={hackathon._id.toString()}
          />
        ))}
      </div>
    </div>
  );
};

export default Hackathons;
