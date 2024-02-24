import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
    const accountID = req.headers.get('accountID') as string;

    const bills = await prisma.upcommingBills.findMany({
        where: {
            accountID: accountID
        }
    })

    return Response.json(bills, {status: 201});
}