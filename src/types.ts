export interface Step {
    id: string;
    name: string;
    media: string;
    keyword: string;
    contentHash: string;
}

export interface StepResult extends Step {
    result: {
        status: string;
        duration: number;
        error_message?: string;
    };
}

export interface Scenario {
    id: string;
    featureId: string;
    description: string;
    keyword: string;
    name: string;
    tags: Tag[];
    steps: Step[];
    type: string;
}


export interface ParsedScenario {
    id: string;
    featureId: string;
    keyword: string;
    name: string;
    description: string;
    tags?: { connect: { id: string }[] };
}

export interface Feature {
    description: string;
    elements: Scenario[];
    id: string;
    keyword: string;
    name: string;
    tags: Tag[];
}


export interface Tag {
    id: string;
    name: string;
}

export type TestData = Feature[];
