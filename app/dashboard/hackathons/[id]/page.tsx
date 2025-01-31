import React from "react";

const HackathonPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const hackathonId = (await params).id;

  return <div>HackathonPage id: {hackathonId}</div>;
};

export default HackathonPage;
