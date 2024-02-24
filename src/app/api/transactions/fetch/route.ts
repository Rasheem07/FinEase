import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {

    try {
        const accountID = req.headers.get('accountID');
    
        const transactions = await prisma.transactions.findMany({
            where: {
                accountID: accountID as string
            }
        })
    
        return Response.json(transactions, {status: 201});        
    } catch (error) {
         return Response.json({error}, {status: 500});
    }

}
