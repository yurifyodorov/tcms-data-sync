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
export function simplifyTestData(filePath: string | string[], encoding: BufferEncoding = 'utf8') {
    console.log("Received filePath:", filePath);

    const pathToUse = Array.isArray(filePath) ? filePath[0] : filePath;

    if (typeof pathToUse !== 'string') {
        throw new Error('The provided filePath must be a string or an array of strings.');
    }

    console.log("Using file path:", pathToUse);

    let fileContent;
    try {
        fileContent = fs.readFileSync(pathToUse, encoding);
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(`Failed to read file at path: ${pathToUse}. Error: ${error.message}`);
        } else {
            throw new Error(`Unknown error occurred while reading the file at path: ${pathToUse}`);
        }
    }

    let testData;
    try {
        testData = JSON.parse(fileContent);
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(`Failed to parse JSON from file at path: ${pathToUse}. Error: ${error.message}`);
        } else {
            throw new Error(`Unknown error occurred while parsing the JSON from file at path: ${pathToUse}`);
        }
    }

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
