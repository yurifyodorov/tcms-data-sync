import { PrismaClient } from "../../prisma-client";

declare global {
    // eslint-disable-next-line no-var
    var __dbClient: PrismaClient | undefined;
}

let dbClient: PrismaClient;

export const getDbClient = (databaseUrl?: string): PrismaClient => {
    if (global.__dbClient) {
        return global.__dbClient;
    }

    if (!databaseUrl) {
        throw new Error("databaseUrl is not provided");
    }

    dbClient = new PrismaClient({
        datasources: {
            db: {
                url: databaseUrl,
            },
        },
    });

    global.__dbClient = dbClient;

    return dbClient;
};
