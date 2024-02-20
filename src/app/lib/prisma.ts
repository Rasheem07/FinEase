import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

export async function db() {
    if (!prisma) {
        prisma = new PrismaClient();
    }
    
    return prisma;  
}
