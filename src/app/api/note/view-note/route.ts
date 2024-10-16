import { NextRequest, NextResponse } from "next/server";
import Resource from "@/models/note.model";
import { connect } from "@/config/dbConnect";

// Establish database connection before handling the request
connect();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    // console.log(searchParams);
    let year = searchParams.get("year");
    let sem = searchParams.get("sem");
    let scheme = searchParams.get("scheme");
    let id = searchParams.get("id");
    if (year && scheme) {
      const notes = await Resource.find({
        year: year,
        scheme: scheme,
      });
      return NextResponse.json(
        {
          success: true,
          notes,
        },
        {
          status: 200,
        }
      );
    } else if (year && sem) {
      const notes = await Resource.find({
        year: year,
        semister: new RegExp(sem),
      });
      return NextResponse.json(
        {
          success: true,
          notes,
        },
        {
          status: 200,
        }
      );
    } else if (year) {
      const notes = await Resource.find({
        year: year,
      });
      return NextResponse.json(
        {
          success: true,
          notes,
        },
        {
          status: 200,
        }
      );
    } else if (id) {
      const notes = await Resource.findById(id);
      return NextResponse.json(
        {
          notes,
        },
        {
          status: 200,
        }
      );
    } else {
      const notes = await Resource.find()
        .select("subjectFullname year semister")
        .sort({ createdAt: -1 });

      return NextResponse.json(
        {
          success: true,
          notes,
        },
        {
          status: 200,
        }
      );
    }
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
