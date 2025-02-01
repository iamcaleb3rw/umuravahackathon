import { ObjectId } from "mongoose";

export interface Hackathon {
  _id: ObjectId; // Mongoose ObjectId
  title: string;
  projectDescription?: string; // Optional
  projectBrief?: string; // Optional
  projectTasks?: string; // Optional
  contactEmail: string;
  timeline: string;
  endDate: Date;
  startDate: Date;
  deadline: Date;
  createdBy: ObjectId; // Reference to User
  participants: ObjectId[]; // Array of User references
  status: "Open" | "Ongoing" | "Closed"; // Enum
  prize: string;
  createdAt?: Date; // Optional, added by timestamps
  updatedAt?: Date; // Optional, added by timestamps
}
