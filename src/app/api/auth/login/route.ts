import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function POST(req: Request, res: Response) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "method not allowed!" }, { status: 405 });
  }

  try {
    const { email, password } = await req.json();

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

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

    if (password.length < 4) {
      return NextResponse.json(
        {
          error: {
            type: "password",
            message: "password must be atleast 4 characters!",
          },
        },
        { status: 403 }
      );
    }

    if (!user) {
      return NextResponse.json(
        {
          error: {
            type: "email",
            message: "user does not exists!",
          },
        },
        { status: 404 }
      );
    }

    const passwordCompare = bcrypt.compareSync(password, user.password);

    if (!passwordCompare) {
      return NextResponse.json(
        {
          error: {
            type: "password",
            message: "please enter the correct user credentials!",
          },
        },
        { status: 401 }
      );
    }

    const JWT_secret = JSON.stringify(process.env.JWT_SECRET);
    const data = {
      user: {
        id: user.id,
      },
    };

    const authtoken = jwt.sign(data, JWT_secret);

    return NextResponse.json({ user, authtoken }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "internal server error!" },
      { status: 500 }
    );
  }
}
