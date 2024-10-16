import { NextRequest, NextResponse } from "next/server";
import Resource from "@/models/note.model";
import { connect } from "@/config/dbConnect";

// Establish database connection before handling the request
connect();

export async function POST(request: NextRequest) {
  try {
    // Parse JSON request body
    const {
      subjectFullname,
      pdflink,
      resourcestitle,
      subjectsortname,
      credit,
      subjectcode,
      year,
      semister,
    } = await request.json();
    if (
      !subjectFullname ||
      !pdflink ||
      !resourcestitle ||
      !subjectsortname ||
      credit === undefined || // Check for credit as a number field
      !subjectcode ||
      !year ||
      !semister
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 }
      );
    }
    // Create and save new resource document
    const newResource = new Resource({
      subjectFullname,
      pdflink,
      resourcestitle,
      subjectsortname,
      credit,
      subjectcode,
      year,
      semister,
    });

    await newResource.save();

    // Return a success response
    return NextResponse.json(
      {
        success: true,
        message: "Resource added successfully",
        resource: newResource,
      },
      { status: 201 }
    );
  } catch (error: any) {
    // Handle errors and return a failure response
    return NextResponse.json(
      {
        success: false,
        message: `Failed to add resource: ${error.message}`,
      },
      { status: 400 }
    );
  }
}
