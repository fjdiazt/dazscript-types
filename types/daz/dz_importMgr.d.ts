declare class DzImportMgr extends QObject {

    /* Properties */

    /* Methods */
    fileImportStarting(): void;
    fileImported(): void;
    readFile(filename: QString, importerIdx?: number, filter?: DzFileLoadFilter): DzError;
    readFile(filename: QString, importerIdx?: number, options?: DzFileIOSettings, filter?: DzFileLoadFilter): DzError;
    readGeometry(filename: QString, shape: DzShape, importerIdx: number): DzError;
    readGeometry(filename: QString, shape: DzShape, importerIdx: number, options: DzFileIOSettings): DzError;
    readGeometry(filename: QString, importerIdx: number): DzShape;
    readGeometry(filename: QString, importerIdx: number, options: DzFileIOSettings): DzShape;
    readGeometry(filename: QString, shape: DzShape, importerIdx: number): DzError;
    readGeometry(filename: QString, shape: DzShape, importerIdx: number, options: DzFileIOSettings): DzError;
    readGeometry(filename: QString, importerIdx: number): DzShape;
    readGeometry(filename: QString, importerIdx: number, options: DzFileIOSettings): DzShape;
    readGeometry(filename: QString, shape: DzShape, importerIdx: number): DzError;
    readGeometry(filename: QString, shape: DzShape, importerIdx: number, options: DzFileIOSettings): DzError;
    readGeometry(filename: QString, importerIdx: number): DzShape;
    readGeometry(filename: QString, importerIdx: number, options: DzFileIOSettings): DzShape;
    isImporting(): boolean;
    getImportPath(): QString;
    setImportPath(path: QString): void;
    getImportFileName(): QString;
    setImportFileName(fileName: QString): void;
    getNumImporters(): number;
    getImporter(i: number): DzImporter;
    canImport(filename: QString): boolean;
    findImporterIndex(filename: QString): number;
    findImporter(filename: QString): DzImporter;
    findImporterByClassName(className: QString): DzImporter;
    makeImportFileFilter(filter: DzFileFilter): void;
    makeImportFileFilter(filter: DzFileFilter): void;
    makeImportFileFilter(filter: DzFileFilter): void;
    makeGeometryFileFilter(filter: DzFileFilter): void;
    makeGeometryFileFilter(filter: DzFileFilter): void;
    makeGeometryFileFilter(filter: DzFileFilter): void;
}