// pages/api/changePassword.js
import { connect } from "@/config/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  const { token, newPassword } = await request.json();

  try {
    // Validate input
    if (!token || !newPassword) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        {
          status: 400,
        }
      );
    }

    // Decode and verify the token
    const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);
    console.log(decodedToken);
    // Extract the email from the decoded token
    const email: any = decodedToken?.data.email!;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found.",
        },
        {
          status: 404,
        }
      );
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password
    user.password = hashedPassword;
    await user.save();

    return NextResponse.json(
      {
        success: true,
        message: "Password changed successfully.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error changing password:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Invalid token or server error.",
      },
      {
        status: 500,
      }
    );
  }
}
