import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(req: Request) {
    const id = req.headers.get('billID');
    const accountID = req.headers.get('accountID');
    const {dueDate, item, itemDesc, amount} = await req.json();
    const updatedBill = await prisma.upcommingBills.update({
        where: {
            id: id as string,
            accountID: accountID as string
        },
        data: {
            dueDate, item, itemDesc, amount
        }  
    })
    

    return Response.json(updatedBill, {status: 201});

}