import { PrismaClient } from "../../prisma-client";

let prisma: PrismaClient | null = null;

export const getDbClient = (databaseUrl: string): PrismaClient => {
    if (!prisma) {
        prisma = new PrismaClient({
            datasources: {
                db: { url: databaseUrl },
            },
        });
    }
    return prisma;
};