import { PrismaClient } from "../../prisma-client";

declare global {
    // eslint-disable-next-line no-var
    var __dbClient: PrismaClient | undefined;
}

export const getDbClient = (databaseUrl: string): PrismaClient => {
    if (!databaseUrl) {
        throw new Error("databaseUrl is not provided");
    }

    if (global.__dbClient) {
        return global.__dbClient;
    }

    const client = new PrismaClient({
        datasources: {
            db: {
                url: databaseUrl,
            },
        },
    });

    global.__dbClient = client;

    return client;
};
