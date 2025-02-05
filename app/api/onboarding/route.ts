import connect from "@/lib/db";
import User from "@/lib/modals/user";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const { role } = await req.json();
    console.log(role);
    await connect();

    const updated = await User.findOneAndUpdate(
      {
        clerkId: userId,
      },
      {
        $set: {
          role: role,
        },
      },
      { new: true, upsert: true }
    );
    console.log(updated);
    return NextResponse.json(updated);
  } catch (error) {
    console.error("Error processing PATCH request:", error);
    return new NextResponse("Error processing PATCH request", { status: 500 });
  }
}
