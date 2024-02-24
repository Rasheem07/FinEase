import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {

    try {
        const accountID = req.headers.get('accountID');
        const {dueDate, item, itemDesc, lastCharge, amount} = await req.json();
    
        const bill = await prisma.upcommingBills.create({
            data: {
                dueDate, item, itemDesc, lastCharge, amount, account: {connect: {id: accountID as string}}
            }
        })
    
        return Response.json(bill, {status: 201}); 
    } catch (error) {
        
        return Response.json({error}, {status: 500})
    }
}