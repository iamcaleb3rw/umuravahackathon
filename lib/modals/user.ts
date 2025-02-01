import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: { type: "string", required: true, unique: true },
    clerkId: { type: "string", required: true, unique: true },
    username: { type: "string", required: true, unique: true },
    password: { type: "string", required: true },
    avatar: { type: "string", default: "" },
    hackathons: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hackathon",
      },
    ],
    participations: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hackathon",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
