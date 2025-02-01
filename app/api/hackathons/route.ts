import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Hackathon from "@/lib/modals/hackathon";
import connect from "@/lib/db";
import { findUser } from "@/lib/actions/user";

// Connect to MongoDB (ensure this is done once in your app)

export async function POST(req: Request) {
  try {
    // Authenticate the user
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Parse the request body
    const {
      title,
      deadline,
      startDate,
      endDate,
      duration,
      moneyPrize,
      contactEmail,
      projectDescription,
      projectBrief,
      projectTasks,
    } = await req.json();

    // Validate required fields (basic validation)
    if (
      !title ||
      !deadline ||
      !startDate ||
      !endDate ||
      !duration ||
      !moneyPrize ||
      !contactEmail
    ) {
      console.log("missing fields");
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Connect to the database
    await connect();

    const user = await findUser(userId);

    // Create a new Hackathon document
    const hackathon = new Hackathon({
      title: title,
      projectBrief: projectBrief,
      projectDescription: projectDescription,
      projectTasks: projectTasks,
      contactEmail: contactEmail,
      timeline: duration,
      startDate: startDate,
      endDate: endDate,
      deadline: deadline,
      createdBy: userId,
      prize: moneyPrize,
    });

    // Save the hackathon to the database
    await hackathon.save();

    // Return a success response
    return NextResponse.json(
      { message: "Hackathon created successfully", hackathon },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating hackathon:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
