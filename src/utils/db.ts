import { PrismaClient } from "../../prisma-client";

let dbClient: PrismaClient | null = null;

/**
 * Возвращает singleton PrismaClient
 * с поддержкой передачи databaseUrl
 */

export const getDbClient = (databaseUrl?: string): PrismaClient => {
    if (!dbClient) {
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
    }
    return dbClient;
};
