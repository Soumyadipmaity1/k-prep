import { connect } from "@/config/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user.model";
import jwt from "jsonwebtoken";
import { sendPasswordResetEmail } from "@/lib/sendMail";
connect();

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, role } = await request.json();

    // Validate input data
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create user
    const addUser = await User.create({
      firstName,
      lastName,
      email,
      role,
    });

    const data = {
      userId: addUser._id,
      email: addUser.email,
    };

    const secret = process.env.TOKEN_SECRET;
    const url = process.env.CLIENT_URL!;
    if (!secret) {
      console.error("TOKEN_SECRET is not defined.");
      return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
    const subject = "Change Your Password";
    // Add expiration to token
    const token = jwt.sign({ data }, secret, { expiresIn: "1h" });
    const resetLink = `${url}/change-password?token=${token}`;
    // const response = await fetch("/api/mail", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email, subject, resetLink }),
    // });
    await sendPasswordResetEmail(email, subject, resetLink);
    // const info = await response.json();
    // if (info.ok) {
    return NextResponse.json({ user: addUser, token }, { status: 201 });
    // } else {
    //   return NextResponse.json({ message: "Error" }, { status: 409 });
    // }

    // Return user data and token
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
