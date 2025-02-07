import {
  fetchHackathonsById,
  registerParticipant,
} from "@/lib/actions/hackathon";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  try {
    const { id, clerkId, firstName, email, avatarUrl } = await req.json();

    if (!id || !clerkId || !firstName || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Fetch the hackathon document
    const hackathon = await fetchHackathonsById(id);

    // Check if hackathon exists
    if (!hackathon) {
      return NextResponse.json(
        { error: "Hackathon not found" },
        { status: 404 }
      );
    }

    // Check if user is already registered
    const isAlreadyRegistered = hackathon.participants.some(
      (participant: any) => participant.clerkId === clerkId
    );

    if (isAlreadyRegistered) {
      return NextResponse.json(
        { error: "User already registered for this hackathon" },
        { status: 409 } // 409 Conflict is appropriate for duplicate resource
      );
    }

    // Proceed with registration if not already registered
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
