import { NextRequest, NextResponse } from "next/server";
import Resource from "@/models/note.model";
import { connect } from "@/config/dbConnect";

// Establish database connection before handling the request
connect();

export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const getId = searchParams.get("id");

    if (!getId) {
      return NextResponse.json(
        {
          error: "Notes id required",
        },
        {
          status: 404,
        }
      );
    }

    // Parse the JSON body for the updated note data
    const body = await request.json();

    // Find the resource by id and update it with the new data
    const updatedResource = await Resource.findByIdAndUpdate(getId, body, {
      new: true, // Return the updated document
      runValidators: true, // Ensure the updated data is validated against the schema
    });

    if (!updatedResource) {
      return NextResponse.json(
        {
          success: false,
          message: "Note not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Notes updated successfully",
        data: updatedResource,
      },
      { status: 200 }
    );
  } catch (error: any) {
    // Handle errors and return a failure response
    return NextResponse.json(
      {
        success: false,
        message: `Failed to update resource: ${error.message}`,
      },
      { status: 400 }
    );
  }
}
