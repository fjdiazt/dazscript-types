/**
 * Manager responsible for multimedia (audio/video) exporters/importers.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/multimediamgr_dz
 */
declare class DzMultiMediaMgr extends QObject {

    /* Static Methods */

    /**
     * Uses the filename extension to find an appropriate audio importer.
     * @param filename string
     * @returns DzAudioImporter An appropriate importer for the given file name, or NULL if none is found. The caller takes ownership of this object and is responsible for deleting it.
     */
    static findAudioImporter(filename: string): DzAudioImporter;

    /**
     * Uses the filename extension to find an appropriate video exporter.
     * @param filename string
     * @returns DzVideoExporter An appropriate exporter for the given file name, or NULL if none is found. The caller takes ownership of this object and is responsible for deleting it.
     */
    static findVideoExporter(filename: string): DzVideoExporter;

    /**
     * @param i number
     * @returns DzAudioImporter A new instance of the i'th audio importer in the list. The caller takes ownership of this object and is responsible for deleting it.
     */
    static getAudioImporter(i: number): DzAudioImporter;

    /**
     * @returns number The number of audio importers currently supported.
     */
    static getNumAudioImporters(): number; // Number

    /**
     * @returns number The number of video exporters currently supported.
     */
    static getNumVideoExporters(): number; // Number

    /**
     * @param i number - The index of the exporter to create.
     * @returns DzVideoExporter A new instance of the i'th video exporter in the list. The caller takes ownership of this object and is responsible for deleting it.
     */
    static getVideoExporter(i: number): DzVideoExporter;

    /**
     * Populates the given filter with all the audio types recognized by the multimedia manager.
     * @param filter DzFileFilter - The filter to populate
     * @param defaultFilter string - The filter to set as the default
     * @param makeAllFilesEntry boolean - If true, and additional filter is created for all recognized file extensions.
     */
    static makeAudioImportFileFilter(filter: DzFileFilter, defaultFilter?: string, makeAllFilesEntry?: boolean): void;

    /**
     * Populates the given filter with all the video types recognized by the multimedia manager.
     * @param filter DzFileFilter - The filter to populate
     * @param defaultFilter string - The filter to set as the default
     */
    static makeVideoExportFileFilter(filter: DzFileFilter, defaultFilter?: string): void;

    /* Methods */

    /**
     * Export the clip to a video file.
     * @param fileName string
     * @param clip DzVideoClip - An instance of DzVideoClip containing the data to save.
     * @param exporterIndex number - The index of the exporter class to use. If this is less than 0, then the extension of fileName is used to attempt to find an appropriate exporter.
     * @returns DzError DZ_NO_ERROR if the file export was successful.
     */
    exportVideoClip(fileName: string, clip: DzVideoClip, exporterIndex?: number): DzError;

    /**
     * @returns string Last directory that audio files were imported from.
     */
    getAudioClipLoadPath(): string; // String

    /**
     * @returns string Last directory that video files were exported to.
     */
    getVideoClipSavePath(): string; // String

    /**
     * Import an audio clip from a file.
     * @param fileName string
     * @param clip DzAudioClip - A pointer to a DzAudioClip instance to import the data into.
     * @param importerIndex number - The index of the importer class to use. If this is less than 0, then the extension of fileName is used to attempt to find an appropriate exporter.
     * @returns DzError DZ_NO_ERROR if the file import was successful.
     */
    importAudioClip(fileName: string, clip: DzAudioClip, importerIndex?: number): DzError;
}
