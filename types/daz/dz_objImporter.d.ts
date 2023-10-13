declare class DzObjImporter extends DzImporter {
    nameChanged(name: string): any;
    makePersistent(): any;
    iskindof(kind: string): any;
    getName(): string;
    getDefaultOptions(settings: DzFileIOSettings): any;
    getOptions(settings: DzFileIOSettings, flag: boolean, name: string): void;
    showOptions(): any;
    readFile(file: string, settings?: DzFileIOSettings): any;
    setLoadFilter(filter: DzFileLoadFilter): any;
    getFileLoadFilter(): any;
    addNodetoFilter(node: DzNode): any;
    finishFilter(): any;
    recognize(value: string): any;
    getNumExtensions(): any;
    getExtension(index: number): any;
    getDescription(): string;
    readFile(file: string, shape: DzShape, settings: DzFileIOSettings): any;
}