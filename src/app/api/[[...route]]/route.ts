import { Hono } from "hono";
import { handle } from "hono/vercel";
import dbConnect from "@/lib/dbConnect";
import Subject from "@/schema/addNoteSchema";
export const runtime = "edge";

const app = new Hono().basePath("/api");

app.post("/hello", async (c) => {
  // await dbConnect();
  console.log(c);
  await Subject.create({
    title: "Hello",
    subjectFullName: "Hello",
    sortName: "title",
    credit: "credit",
    subCode: "123",
    year: "2014",
    semester: "semester",
    pdfLine: "pdfLine",
  });
  // await newSubject.save();
  return c.json({
    message: "Hello from Hono!",
  });
});


export const GET = handle(app);
export const POST = handle(app);
