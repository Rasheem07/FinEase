import { PrismaClient } from "@prisma/client"
import { connect } from "http2";

const prisma = new PrismaClient();
export async function POST(req: Request) {
    try {
        // id        String   @id @default(auto()) @map("_id") @db.ObjectId
        // item      String
        // shop      String
        // date      DateTime
        // method    String
        // amount    Float
        // categroy  String
        // account   Accounts @relation(fields: [accountID], references: [id])
        // accountID String   @db.ObjectId
        
        const accountID = req.headers.get('AccountID') as string;
        const {item, shop, method, amount, categroy} = await req.json();
        
        const newTransaction = await prisma.transactions.create({
            data: {
                item, shop, method, amount, categroy, account: {connect: {id: accountID}}
            }
        })

        return Response.json(newTransaction, {status: 201})
        
    } catch (error) {
        return Response.json({error}, {status: 500})
    }
}