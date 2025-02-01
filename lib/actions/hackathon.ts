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

export const fetchHackathonsById = async (id: string) => {
  try {
    await connect();
    const hackathon = await Hackathon.findOne({ _id: id });
    return JSON.parse(JSON.stringify(hackathon));
  } catch (error) {
    console.log("Error fetching single Hackathon", error);
  }
};

fetchHackathonsById("679e4cff1374a2be0ec4ad9c");
