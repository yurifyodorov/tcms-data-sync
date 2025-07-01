import { PrismaClient } from "../../prisma-client";

export const getDbClient = (databaseUrl: string): PrismaClient => {
    if (!databaseUrl) {
        throw new Error("databaseUrl is not provided");
    }

    return new PrismaClient({
        datasources: {
            db: {
                url: databaseUrl,
            },
        },
    });
};