import ChallengeCard from "@/components/ChallengeCard";
import TagComponent from "@/components/TagComponent";
import { Button } from "@/components/ui/button";
import { fetchHackathons } from "@/lib/actions/hackathon";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hackathons = async () => {
  const hackathons = await fetchHackathons();
  return (
    <div className="">
      <div className="">
        <h1 className="text-xl font-semibold">Challenges</h1>
        <p className="text-mutedtext">
          Join a challenge or a hackathon to gain valuable work experience
        </p>
      </div>
      <div className="mt-6 flex justify-between">
        <div className="flex gap-2">
          <TagComponent name={"All challenges"} count={3} />
          <TagComponent name={"Completed challenges"} count={3} />
          <TagComponent name={"Open challenges"} count={3} />
          <TagComponent name={"Ongoing challenges"} count={3} />
        </div>
        <Link href="/dashboard/create">
          <Button>
            <PlusIcon />
            Create a Challenge
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-3">
        {hackathons?.map((hackathon) => (
          <div key={hackathon.id}>
            <ChallengeCard
              status={hackathon.status}
              title={hackathon.title}
              level={"(Intermediate, Senior)"}
              timeline={hackathon.timeline}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hackathons;
