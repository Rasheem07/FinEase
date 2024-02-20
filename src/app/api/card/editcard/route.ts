import { PrismaClient } from "@prisma/client";
import { fetchUser } from "@/app/middlewares/fetchUser";

const prisma = new PrismaClient();

export async function PUT(req: Request, res: Response) {
  try {
    const reqData = await req.json();

    const user = await fetchUser() as string;

    const updatedAccount = await prisma.accounts.update({
      where: { id: reqData.id as string, userID: user }, // Move id to the where object
      data: { ...reqData, id: undefined } // Remove id from data object
    });

    return Response.json(updatedAccount, {status: 201}) // Use res instead of Response
  } catch (error) {
    console.log(error);
    return Response.json({error: "internal server error"}, {status: 500}) // Use res instead of Response
  }
}
