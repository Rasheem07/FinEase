import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { fetchUser } from "@/app/middlewares/fetchUser";

export async function GET(req: Request, res: Response) {
 
    const user = await fetchUser();

    try {
        const cards = await prisma.accounts.findMany({
            where: {
                userID: user as string
            }
        })

        return Response.json(cards, {status: 201});
    } catch (error) {
        return Response.json({error: "internal server error", message: error as string}, {status: 500})
    }
}