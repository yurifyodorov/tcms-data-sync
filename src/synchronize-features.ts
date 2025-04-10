import { getDbClient } from './utils/db';
import { Feature } from './types';

export async function synchronizeFeatures(testData: Feature[], databaseUrl: string): Promise<void> {
    const dbClient = getDbClient(databaseUrl);

    const featureNamesFromTestData = testData.map((feature: Feature) => feature.name.trim());

    const featuresInDb = await dbClient.feature.findMany();

    const featureMapFromDb = new Map<string, string>();
    featuresInDb.forEach((feature) => {
        const trimmedName = feature.name.trim();
        featureMapFromDb.set(trimmedName, feature.id);
    });

    const featuresToDelete = featuresInDb.filter(
        (feature) => !featureNamesFromTestData.includes(feature.name.trim())
    );

    if (featuresToDelete.length > 0) {
        await dbClient.feature.deleteMany({
            where: {
                id: {
                    in: featuresToDelete.map((feature) => feature.id),
                },
            },
        });
    }

    for (const feature of testData) {
        const trimmedFeatureName = feature.name.trim();
        const existingFeatureId = featureMapFromDb.get(trimmedFeatureName);

        if (existingFeatureId) {
            await dbClient.feature.update({
                where: { id: existingFeatureId },
                data: {
                    description: feature.description || '',
                },
            });
        } else {
            const newFeature = await dbClient.feature.create({
                data: {
                    name: feature.name,
                    keyword: feature.keyword,
                    description: feature.description || '',
                },
            });

            featureMapFromDb.set(newFeature.name.trim(), newFeature.id);
        }
    }

    await dbClient.$disconnect();
}
