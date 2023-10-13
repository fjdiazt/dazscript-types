declare class DzSimpleSceneData extends DzSceneData {
    static className(): string;
    constructor(name: string, persistent?: boolean);

    name: string;	// test
    objectName: string;	// test
    className(): string;

    getSettings(): DzSettings;
}