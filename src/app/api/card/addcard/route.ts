import { fetchUser } from "@/app/middlewares/fetchUser";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request, res: Response) {
  if (req.method !== "POST") {
    return Response.json({ error: "method not allowed!" }, { status: 405 });
  }

  try {
    // Parse the request body
    const {bank, branch, accountNo, type, totalAmount } = await req.json();
    
    // Log the received request body
    
    // Check if required fields are missing
    if (!accountNo || !type || !totalAmount) {
      return Response.json({ error: "Missing required fields!" }, { status: 400 });
    }
    
    const userID = await fetchUser() as string;
    
    // Assuming accountNo is a number, parse it
    const parsedAccountNo = parseInt(accountNo, 10);
    
    // Create a new account using PrismaClient
    const newAccount = await prisma.accounts.create({
      data: {
        bank,
        branch,
        accountNo: parsedAccountNo,
        type,
        totalAmount,
        user: {connect: {id: userID}} 
      },
    });
    
    console.log(newAccount);
    // Return the new account information
    return Response.json(newAccount, { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return Response.json(
      { error: "internal server error", message: error },
      { status: 500 }
    );
  }
}
