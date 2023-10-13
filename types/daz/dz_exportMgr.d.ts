declare class DzExportMgr extends QObject {

    /* Properties */

    /* Methods */
    fileExportStarting(): void;
    fileExported(): void;
    exportFile(fileName: QString, exporterIndex: number): DzError;
    exportFile(fileName: QString, exporterIndex: number, options: DzFileIOSettings): DzError;
    exportFile(fileName: QString, exporterIndex: number): DzError;
    exportFile(fileName: QString, exporterIndex: number, options: DzFileIOSettings): DzError;
    getExportPath(): QString;
    setExportPath(path: QString): void;
    isExporting(): boolean;
    getNumExporters(): number;
    getExporter(i: number): DzExporter;
    canExport(filename: QString): boolean;
    findExporterIndex(filename: QString): number;
    findExporter(filename: QString): DzExporter;
    findExporterByClassName(className: QString): DzExporter;
    makeExportFileFilter(filter: DzFileFilter): void;
    makeExportFileFilter(filter: DzFileFilter): void;
}