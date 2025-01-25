import ChallengeCard from "@/components/ChallengeCard";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hackathons = () => {
  return (
    <div className="border-t py-3 md:py-24 px-2 sm:px-6 md:px-16">
      <div className="flex gap-4">
        <div className="flex items-center gap-2 group">
          <div className="w-fit p-1 rounded-md flex items-center transition-transform justify-center group-hover:-translate-x-1">
            <MoveLeft className="h-3 w-3 text-muted-foreground" />
          </div>
          <Link href={"/"}>
            <div>
              <p className="text-sm text-mutedtext">Go Back</p>
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-1">
          <div className="text-mutedtext">/</div>
          <div>
            <p className="text-sm text-primary">Challenges & Hackathons</p>
          </div>
        </div>
      </div>
      <div className="border my-4 md:my-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 gap-3">
        <ChallengeCard
          status={"Open"}
          title={"Design a dashboard for SokoFund"}
          level="(Junior, Intermediate, Senior)"
          timeline="15 Days"
        />
        <ChallengeCard
          status={"Open"}
          title={"Design a dashboard for SokoFund"}
          level="(Junior, Intermediate, Senior)"
          timeline="15 Days"
        />
        <ChallengeCard
          status={"Open"}
          title={"Design a dashboard for SokoFund"}
          level="(Junior, Intermediate, Senior)"
          timeline="15 Days"
        />
        <ChallengeCard
          status={"Open"}
          title={"Design a dashboard for SokoFund"}
          level="(Junior, Intermediate, Senior)"
          timeline="15 Days"
        />
        <ChallengeCard
          status={"Open"}
          title={"Design a dashboard for SokoFund"}
          level="(Junior, Intermediate, Senior)"
          timeline="15 Days"
        />
        <ChallengeCard
          status={"Open"}
          title={"Design a dashboard for SokoFund"}
          level="(Junior, Intermediate, Senior)"
          timeline="15 Days"
        />
        <ChallengeCard
          status={"Open"}
          title={"Design a dashboard for SokoFund"}
          level="(Junior, Intermediate, Senior)"
          timeline="15 Days"
        />
        <ChallengeCard
          status={"Open"}
          title={"Design a dashboard for SokoFund"}
          level="(Junior, Intermediate, Senior)"
          timeline="15 Days"
        />
      </div>
    </div>
  );
};

export default Hackathons;
