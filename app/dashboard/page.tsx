import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const page = async () => {
  const user = await currentUser();
  return (
    <div>
      <h1 className="text-xl font-semibold">Welcome back {user?.firstName},</h1>
      <p className="text-mutedtext">
        Build work experience through skills challenge
      </p>
    </div>
  );
};

export default page;
