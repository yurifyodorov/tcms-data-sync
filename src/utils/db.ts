import { PrismaClient } from '@prisma/client';

export function getDbClient(databaseUrl: string): PrismaClient {
    process.env.DATABASE_URL = databaseUrl;
    return new PrismaClient();
}

export let dbClient: PrismaClient | null = null;

export function setDbClient(databaseUrl: string) {
    dbClient = getDbClient(databaseUrl);
}
