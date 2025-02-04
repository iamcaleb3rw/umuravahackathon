import List from "@/components/List";

import { fetchHackathons } from "@/lib/actions/hackathon";

import React from "react";

const Hackathons = async () => {
  const hackathons = await fetchHackathons();
  return (
    <div className="p-2">
      <div>
        <h1 className="text-xl font-semibold">Challenges</h1>
        <p className="text-mutedtext">
          Join a challenge or a hackathon to gain valuable work experience
        </p>
      </div>
      <List hackathons={hackathons} />
    </div>
  );
};

export default Hackathons;
