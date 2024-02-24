import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(req: Request) {
  const id = req.headers.get("billID");
  const accountID = req.headers.get("accountID");

  if (!accountID) {
    throw new Error("Account ID is missing");
  }

  try {
    // Delete the UpcomingBill based on accountID
    const deletedBill = await prisma.upcommingBills.delete({
      where: {
        accountID: accountID,
        id: id as string,
      },
    });

    return Response.json(deletedBill, { status: 201 });
  } catch (error) {}
}
