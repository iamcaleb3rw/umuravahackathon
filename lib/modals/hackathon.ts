import mongoose, { Schema } from "mongoose";
import User from "./user";
import { RequiredError } from "svix/dist/openapi";

const hackathonSchema = new Schema(
  {
    title: { type: "string", required: true },
    projectDescription: {
      type: "string",
      maxlength: 1000,
    },
    projectBrief: {
      type: "string",
      maxlength: 1500,
    },
    projectTasks: {
      type: "string",
      maxlength: 1500,
    },
    contactEmail: { type: "string", required: true },
    timeline: { type: "string", required: true },
    endDate: { type: Date, required: true },
    startDate: { type: Date, required: true },
    deadline: { type: Date, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: User, required: true },
    participants: [{ type: Schema.Types.ObjectId, ref: User, default: [] }],
    status: {
      type: String,
      enum: ["Open", "Ongoing", "Closed"],
      default: "Open",
    },
    prize: { type: "string", required: true },
  },
  {
    timestamps: true,
  }
);
const Hackathon =
  mongoose.models.Hackathon || mongoose.model("Hackathon", hackathonSchema);

export default Hackathon;
