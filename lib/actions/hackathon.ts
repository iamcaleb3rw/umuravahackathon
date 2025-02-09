import connect from "../db";
import Hackathon from "../modals/hackathon";

export const fetchHackathons = async () => {
  try {
    await connect();
    const hackathons = await Hackathon.find();
    return JSON.parse(JSON.stringify(hackathons));
  } catch (error) {
    console.log("Error fetching hackathons", error);
  }
};

export const numberedHackathons = async (limit: number) => {
  try {
    await connect();
    const hackathons = await Hackathon.find().limit(limit);
    return JSON.parse(JSON.stringify(hackathons));
  } catch (error) {
    console.log("Error fetching hackathons", error);
  }
};

export const fetchHackathonsById = async (id: string) => {
  try {
    await connect();
    const hackathon = await Hackathon.findOne({ _id: id });
    return JSON.parse(JSON.stringify(hackathon));
  } catch (error) {
    console.log("Error fetching single Hackathon", error);
  }
};

export const fetchHackathonsByTitle = async (query: string) => {
  try {
    await connect();

    // Escape special regex characters in the query
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    // Perform a case-insensitive partial match search
    const hackathons = await Hackathon.find({
      title: { $regex: escapedQuery, $options: "i" },
    });

    return JSON.parse(JSON.stringify(hackathons));
  } catch (error) {
    console.log("Error querying hackathons", error);
  }
};

export const getTotalParticipants = async (id: string) => {
  try {
    await connect();
    const hackathons = await Hackathon.find({ createdBy: id });
    const totalParticipants = hackathons.reduce(
      (sum, hackathon) => sum + hackathon.participants.length,
      0
    );
    return totalParticipants;
  } catch (error) {
    console.log("Error getting total participants", error);
  }
};

export const registerParticipant = async (
  id: string,
  clerkId: string,
  firstName: string,
  email: string,
  avatarUrl: string
) => {
  try {
    await connect();
    const updatedHackathon = await Hackathon.findOneAndUpdate(
      { _id: id },
      {
        $addToSet: {
          participants: { clerkId, firstName, email, avatarUrl },
        },
      },
      { new: true, upsert: true }
    );

    if (!updatedHackathon) {
      throw new Error("Hackathon not found");
    }

    return JSON.parse(JSON.stringify(updatedHackathon));
  } catch (error) {
    console.error("Error registering participant", error);
    throw error;
  }
};

export const getRole = async (id: string) => {
  try {
  } catch (error) {
    console.log("Error getting user role");
  }
};

export const deleteHackathonById = async (id: string) => {
  try {
    await connect();
    const deletedHackathon = await Hackathon.findOneAndDelete({ _id: id });
    return JSON.parse(JSON.stringify(deletedHackathon));
  } catch (error) {
    console.log("Error deleting Hackathon", error);
  }
};
