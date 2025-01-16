declare class DzFileProperty extends DzStringProperty {
    constructor(name: String);
    // FileType enum
    static FileSave: number;
    static FileOpen: number;
    static Dir: number;

    FileSave: number;
    FileOpen: number;
    Dir: number;

    static className(): string;
    className(): string;

    getFilter(): string;
    getType(): number;
    setFilter(filter: String): void;
    setType(type: number): void;
}