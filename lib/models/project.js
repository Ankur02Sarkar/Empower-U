import mongoose, { Schema, models } from "mongoose";

const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    totalFunding: {
      type: Number,
      required: true,
    },
    thumbnailLink: {
      type: String,
      required: true,
    },
    gitLink: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Project = models?.Project || mongoose.model("Project", projectSchema);
export default Project;
