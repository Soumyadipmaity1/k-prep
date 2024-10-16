import mongoose, { Schema, model, models } from "mongoose";

// TypeScript interface to define the document structure
interface IResource {
  subjectFullname: string;
  pdflink: string;
  resourcestitle: string;
  subjectsortname: string;
  credit: number;
  subjectcode: string;
  year: string;
  semister: string;
}

// Define Mongoose Schema
const ResourceSchema = new Schema<IResource>(
  {
    subjectFullname: {
      type: String,
      required: [true, "Please provide the full name of the subject."],
    },
    pdflink: {
      type: String,
      required: [true, "Please provide a link to the PDF resource."],
    },
    resourcestitle: {
      type: String,
      required: [true, "Please provide the resource title."],
    },
    subjectsortname: {
      type: String,
      required: [true, "Please provide the short name of the subject."],
    },
    credit: {
      type: Number,
      required: [true, "Please provide the credit value for the subject."],
    },
    subjectcode: {
      type: String,
      required: [true, "Please provide the subject code."],
    },
    year: {
      type: String,
      required: [true, "Please specify the year."],
    },
    semister: {
      type: String,
      required: [true, "Please specify the semester."],
    },
  },
  {
    timestamps: true,
  }
);

// Create the model only if it doesn't already exist
const Resource =
  models.Resource || model<IResource>("Resource", ResourceSchema);

export default Resource;
