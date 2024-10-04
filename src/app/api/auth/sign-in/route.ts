import { connect } from "@/config/dbConnect";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const { email, password } = reqBody;

    //validate i/p

    if (!email || !password) {
      return NextResponse.json(
        { error: "All fields ( email, password) are required." },
        { status: 400 }
      );
    }

    //find user

    const user = await User.findOne({ email: email });
    if (!user) {
      return NextResponse.json(
        {
          error: "User not found",
        },
        {
          status: 404,
        }
      );
    }

    const getPassword = user.password;
    const isValid = await bcrypt.compare(password, getPassword);
    if (!isValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid password",
        },
        {
          status: 401,
        }
      );
    }
    // Create the token data
    const tokenData = {
      id: user._id,
      email: user.email,
    };
    const token = jwt.sign(
      tokenData,
      process.env.TOKEN_SECRET || "defaultsecret",
      {
        expiresIn: "1d",
      }
    );
    const response = NextResponse.json(
      {
        success: true,
        message: "Login successful",
      },
      {
        status: 200,
      }
    );
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
    console.log("login Done");
    return response;
  } catch (error:any) {
    console.error("Error during login process:", error);
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
