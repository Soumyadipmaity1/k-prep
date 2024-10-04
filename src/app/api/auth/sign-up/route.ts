import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user.model";
import { connect } from "@/config/dbConnect";

connect();

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const { firstName, lastName, email, password } = await request.json();

    // Basic validation
    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json(
        { error: "All fields (firstName, lastName, email, password) are required." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "This email is already in use. Please try another one." },
        { status: 409 } 
      );
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    
    const { password: _, ...userDetails } = newUser.toObject();

    // Send success response



    return NextResponse.json({
      message: "User created successfully",
      success: true,
      user: userDetails, // Responding without password
    });
  } catch (error: any) {
    // Catch any error and return server error response
    console.log(error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}




