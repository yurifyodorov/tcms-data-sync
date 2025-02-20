import * as fs from 'fs';

/**
 * This function simplifies test data in JSON format.
 * It reads the file content from the given file path, parses it as JSON, and recursively removes any fields with the key 'embeddings'.
 *
 * The 'embeddings' fields may contain large data (e.g., images) that are not needed for further processing or reporting.
 * This function helps exclude them from the report before sending the data to a system or database.
 *
 * @param filePath The path to the file containing the test data in JSON format.
 * @param encoding The file encoding, default is 'utf8'.
 * @returns Simplified test data with the 'embeddings' fields removed.
 */

export function simplifyTestData(filePath: string, encoding: BufferEncoding = 'utf8') {
    const fileContent = fs.readFileSync(filePath, encoding);

    const testData = JSON.parse(fileContent);

    const removeEmbeddings = (data: any): any => {
        if (Array.isArray(data)) {
            return data.map(removeEmbeddings);
        }

        if (data && typeof data === 'object') {
            const newObj: any = {};
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    if (key === 'embeddings') {
                        continue;
                    }
                    newObj[key] = removeEmbeddings(data[key]);
                }
            }
            return newObj;
        }

        return data;
    };

    return removeEmbeddings(testData);
}
