import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log("Already connected!");
    return;
  }

  if (connectionState === 2) {
    console.log("Connecting.....");
    return;
  }

  try {
    mongoose.connect(MONGODB_URI!, {
      dbName: "umuravadb",
      bufferCommands: true,
    });
    console.log("Connected to MongoDB!");
  } catch (e: any) {
    console.error("Failed to connect to MongoDB", e);
    throw new Error("Failed to connect to MongoDB", e);
  }
};

export default connect;
