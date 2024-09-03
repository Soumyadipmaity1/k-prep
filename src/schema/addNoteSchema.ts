// models/Subject.ts

import mongoose, { Document, Schema, Model } from 'mongoose';

// Define the interface for the Subject document
export interface ISubject extends Document {
  title: string;
  subjectFullName: string;
  sortName: string;
  credit: string;
  subCode: string;
  year: number;
  semester: number;
  pdfLine: string;
}

// Define the schema for the Subject model
const SubjectSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  subjectFullName: {
    type: String,
    required: true,
  },
  sortName: {
    type: String,
    required: true,
  },
  credit: {
    type: Number,
    required: true,
  },
  subCode: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  semester: {
    type: Number,
    required: true,
  },
  pdfLine: {
    type: String,
    required: true,
  },
});


export default mongoose.model('Subjects', SubjectSchema);

