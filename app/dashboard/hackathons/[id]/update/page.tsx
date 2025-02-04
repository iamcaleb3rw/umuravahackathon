import Breadcrumb from "@/components/Breadcrumb";
import Updateform from "@/components/Updateform";
import { fetchHackathonsById } from "@/lib/actions/hackathon";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const Update = async ({ params }: { params: Promise<{ id: string }> }) => {
  const hackathonId = (await params).id;
  const { userId } = await auth();
  const getHackathon = async () => {
    return await fetchHackathonsById(hackathonId);
  };

  const hackathon = await getHackathon();

  if (!hackathon) {
    return redirect("/dashboard/hackathons");
  }

  const isAuthor = hackathon.createdBy === userId;
  if (!isAuthor) {
    return redirect("/dashboard");
  }
  return (
    <div>
      <Breadcrumb
        backRoute="/dashboard"
        currentRoute="Edit a Challenge"
        className="border-b"
      />
      <Updateform hackathon={hackathon} />
    </div>
  );
};

export default Update;
