import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function POST(req: Request, res: Response) {
  try {
    if (req.method !== "POST") {
      return NextResponse.json(
        { error: "method not allowed" },
        { status: 405 }
      );
    }

    const { name, email, password } = await req.json();

    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegEx.test(email)) {
      return NextResponse.json(
        {
          error: {
            type: "email",
            message: "enter a valid email address!",
          },
        },
        { status: 403 }
      );
    }

    if (password < 4) {
      return NextResponse.json(
        {
          error: {
            type: "password",
            message: "password must be atleast 4 chararacters!",
          },
        },
        { status: 403 }
      );
    }

    if (name === '') {
      return NextResponse.json(
        {
          error: {
            type: "name",
            message: "name cannot be left blank!",
          },
        },
        { status: 403 }
      );
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Check if user with the same email already exists
    const existingUser = await prisma.user.findFirst({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          error: {
            type: "email",
            message: "User with this email already exists",
          }
        },
        { status: 403 }
      );
    }

    // Create the new user
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const JWT_secret = JSON.stringify(process.env.JWT_SECRET);

    const data = {
      user: {
        id: newUser.id,
      },
    };

    const authtoken = jwt.sign(data, JWT_secret);

    return NextResponse.json({ newUser, authtoken }, { status: 200 });
  } catch (error) {
    console.error("Error handling request:", error);
    return NextResponse.json(
      { error: "internal server error!" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
