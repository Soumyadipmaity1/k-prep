import { NextRequest, NextResponse } from "next/server";
import Resource from "@/models/note.model";
import { connect } from "@/config/dbConnect";

// Establish database connection before handling the request
connect();

export async function GET(request: NextRequest) {
  try {
    const notes = await Resource.find();

    return NextResponse.json(
      {
        success: true,
        notes,
      },
      {
        status: 200,
      }
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
