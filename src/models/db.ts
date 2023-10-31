import prisma from "../../prisma/index";

export async function connectToDB() {

    try {
        await prisma.$connect();
        console.log("Connected to database");
    } catch (error: any) {
        throw new Error(error);
    }
}