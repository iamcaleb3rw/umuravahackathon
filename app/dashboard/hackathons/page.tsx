import List from "@/components/List";

import {
  fetchHackathons,
  fetchHackathonsByTitle,
} from "@/lib/actions/hackathon";

import React, { Suspense } from "react";

const Hackathons = async (props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const hackathons = await fetchHackathonsByTitle(query);
  return (
    <div className="p-2">
      <div>
        <h1 className="text-xl font-semibold">Challenges</h1>
        <p className="text-mutedtext">
          Join a challenge or a hackathon to gain valuable work experience
        </p>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <List hackathons={hackathons} />
      </Suspense>
    </div>
  );
};

export default Hackathons;
