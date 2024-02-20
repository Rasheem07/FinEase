import { fetchUser } from "@/app/middlewares/fetchUser";
import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest) {
    try {

        const {id} = await req.json();
       
        // // Fetch the user ID using the fetchUser middleware
        const user = await fetchUser() as string;

        if (!id) {
            return Response.json({error: "card with this id doesnt exist"}, {status: 404})
        }
        // Delete the account using Prisma
        const deletedCard = await prisma.accounts.delete({
            where: {
                userID: user,
                id: id as string
            }
        });

        // // Return the deleted account in the response
        return Response.json({message: "heello"}, { status: 200 });
    } catch (error) {
        console.error("Error deleting account:", error);

        // Return an error response if deletion fails
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }
}
