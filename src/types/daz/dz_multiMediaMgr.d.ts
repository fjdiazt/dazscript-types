declare class DzMultiMediaMgr extends QObject {

    /* Properties */

    /* Methods */
    exportVideoClip(fileName: QString, clip: DzVideoClip, exporterIndex: number): DzError;
    exportVideoClip(fileName: QString, clip: DzVideoClip, exporterIndex: number): DzError;
    importAudioClip(fileName: QString, clip: DzAudioClip, importerIndex: number): DzError;
    importAudioClip(fileName: QString, clip: DzAudioClip, importerIndex: number): DzError;
    getVideoClipSavePath(): QString;
    getAudioClipLoadPath(): QString;
    getNumVideoExporters(): number;
    getVideoExporter(i: number): DzVideoExporter;
    findVideoExporter(filename: QString): DzVideoExporter;
    getNumAudioImporters(): number;
    getAudioImporter(i: number): DzAudioImporter;
    findAudioImporter(filename: QString): DzAudioImporter;
    makeAudioImportFileFilter(filter: DzFileFilter): void;
    makeAudioImportFileFilter(filter: DzFileFilter): void;
    makeAudioImportFileFilter(filter: DzFileFilter): void;
    makeVideoExportFileFilter(filter: DzFileFilter): void;
    makeVideoExportFileFilter(filter: DzFileFilter): void;
}