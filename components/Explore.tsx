import React from "react";
import ChallengeCard from "./ChallengeCard";
import { Button } from "./ui/button";

const Explore = () => {
  return (
    <div className="min-h-screen md:mt-14">
      <div className="flex flex-col gap-14">
        <div className="flex flex-col items-center gap-7">
          <h1 className="text-2xl md:text-4xl text-darktext text-center tracking-tight font-bold">
            Explore Challenges and Hackathons
          </h1>
          <p className="px-2 md:p-0 text-sm text-mutedtext max-w-[550px] text-center">
            Join Skills Challenges Program to accelerate your career growth and
            become part of Africa&apos;s largest workforce of digital
            professionals.
          </p>
        </div>
        <div className="w-full px-3 lg:grid-cols-2 xl:max-w-[1100px] grid grid-cols-1 xl:grid-cols-3 gap-3 h-full mx-auto">
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
        <div className="text-center">
          <Button
            variant="outline"
            className="w-[200px] border-primary text-primary"
          >
            View More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
