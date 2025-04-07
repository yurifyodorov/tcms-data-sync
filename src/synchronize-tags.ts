import { TestData } from './types';
import { collectTags } from "./collect-tags";
import {getDbClient} from "./utils/db";

export async function synchronizeTags(testData: TestData, databaseUrl: string): Promise<void> {
    const dbClient = getDbClient(databaseUrl);

    if (!dbClient) {
        throw new Error('dbClient is not initialized.');
    }

    const tagsFromTests = collectTags(testData);
    const tagsSetFromTests = new Set<string>(tagsFromTests.map(tag => tag.name.trim()));

    const tagsInDb = await dbClient.tag.findMany();
    const tagMapFromDb = new Map<string, string>();
    tagsInDb.forEach(tag => {
        tagMapFromDb.set(tag.name.trim(), tag.id);
    });

    const tagsToDelete = tagsInDb.filter(tag => !tagsSetFromTests.has(tag.name.trim()));

    if (tagsToDelete.length > 0) {
        await dbClient.featureTag.deleteMany({
            where: { tagId: { in: tagsToDelete.map(tag => tag.id) } },
        });

        await dbClient.scenarioTag.deleteMany({
            where: { tagId: { in: tagsToDelete.map(tag => tag.id) } },
        });

        await dbClient.tag.deleteMany({
            where: { id: { in: tagsToDelete.map(tag => tag.id) } },
        });
    }

    const newTagsToAdd = Array.from(tagsSetFromTests)
        .filter(tagName => !tagMapFromDb.has(tagName))
        .map(tagName => ({ name: tagName }));

    if (newTagsToAdd.length > 0) {
        await dbClient.tag.createMany({
            data: newTagsToAdd,
            skipDuplicates: true,
        });
    }

    const updatedTagsInDb = await dbClient.tag.findMany();
    const updatedTagMap = new Map<string, string>();
    updatedTagsInDb.forEach(tag => {
        updatedTagMap.set(tag.name.trim(), tag.id);
    });

    const existingTags = updatedTagsInDb.filter(tag => tagsSetFromTests.has(tag.name.trim()));

    if (existingTags.length > 0) {
        await dbClient.featureTag.deleteMany({
            where: { tagId: { in: existingTags.map(tag => tag.id) } },
        });

        await dbClient.scenarioTag.deleteMany({
            where: { tagId: { in: existingTags.map(tag => tag.id) } },
        });
    }

    await dbClient.$disconnect();
}
