import mongoose, { Schema } from "mongoose";

const participantSchema = new Schema({
  clerkId: { type: String, required: true },
  firstName: { type: String, required: true },
  email: { type: String, required: true },
  avatarUrl: { type: String, required: true },
});

const hackathonSchema = new Schema(
  {
    title: { type: String, required: true },
    projectDescription: {
      type: String,
      maxlength: 1000,
    },
    projectBrief: {
      type: String,
      maxlength: 1500,
    },
    projectTasks: {
      type: String,
      maxlength: 1500,
    },
    contactEmail: { type: String, required: true },
    timeline: { type: String, required: true },
    endDate: { type: Date, required: true },
    startDate: { type: Date, required: true },
    deadline: { type: Date, required: true },
    createdBy: { type: String, required: true },
    participants: [participantSchema],
    prize: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual field to compute the hackathon status dynamically
hackathonSchema.virtual("status").get(function () {
  const now = new Date();

  if (now < this.startDate) {
    return "Open"; // Hackathon is accepting participants
  } else if (now >= this.startDate && now <= this.endDate) {
    return "Ongoing"; // Hackathon is in progress
  } else {
    return "Closed"; // Hackathon is finished
  }
});

const Hackathon =
  mongoose.models.Hackathon || mongoose.model("Hackathon", hackathonSchema);

export default Hackathon;
