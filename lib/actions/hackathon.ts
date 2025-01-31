import connect from "../db";
import Hackathon from "../modals/hackathon";

export const fetchHackathons = async () => {
  try {
    await connect();
    const hackathons = await Hackathon.find();
    return hackathons;
  } catch (error) {
    console.log("Error fetching hackathons", error);
  }
};

fetchHackathons();
