import connect from "../db";
import Hackathon from "../modals/hackathon";

export const fetchHackathons = async () => {
  try {
    await connect();
    const hackathon = await Hackathon.find();
    console.log(hackathon);
    return hackathon;
  } catch (error) {
    console.log("Error fetching hackathons", error);
  }
};

fetchHackathons();
