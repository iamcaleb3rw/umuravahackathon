"use server";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

export const getName = async () => {
  const user = await currentUser();
  return user?.firstName;
};
