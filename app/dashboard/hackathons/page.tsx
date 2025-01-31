import ChallengeCard from "@/components/ChallengeCard";
import { Button } from "@/components/ui/button";
import { fetchHackathons } from "@/lib/actions/hackathon";
import Link from "next/link";
import React from "react";

const Hackathons = async () => {
  const hackathons = await fetchHackathons();
  return (
    <div className="">
      <div>
        <Link href="/dashboard/create">
          <Button>Create a Challenge</Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {hackathons?.map((hackathon) => (
          <div key={hackathon.id}>
            <ChallengeCard
              status={hackathon.status}
              title={hackathon.title}
              level={"(Intermediate, Senior)"}
              timeline={hackathon.duration}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hackathons;
