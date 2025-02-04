import { registerParticipant } from "@/lib/actions/hackathon";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  try {
    const { id, clerkId, firstName, email, avatarUrl } = await req.json();
    console.log("Received data:", { id, clerkId, firstName, email, avatarUrl });

    if (!id || !clerkId || !firstName || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const participantData = { clerkId, firstName, email };

    const hackathonWithParticipants = await registerParticipant(
      id,
      clerkId,
      firstName,
      email,
      avatarUrl
    );
    return NextResponse.json(hackathonWithParticipants);
  } catch (error) {
    console.error("Error registering participants", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
