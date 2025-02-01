"use server";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";

const UserAvatar = async () => {
  const user = await currentUser();
  return (
    <div>
      <div>
        {user?.imageUrl ? (
          <Image
            src={user.imageUrl}
            width={35}
            height={35}
            alt="Image"
            className="rounded-full"
          />
        ) : (
          <div className="h-8 w-8 bg-pink rounded-full" />
        )}
      </div>
    </div>
  );
};

export default UserAvatar;
