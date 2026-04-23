/**
 * Manager responsible for scene file exporters.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/exportmgr_dz
 */
declare class DzExportMgr extends QObject {

    /* Static Methods */

    /**
     * Uses the extension from each of the exporters and attempts to match an exporter with the extension of the filename.
     * @param filename string - The name of the file to try to find an exporter for.
     * @returns boolean true if an exporter was found that can write the given file.
     */
    static canExport(filename: string): boolean; // Boolean

    /**
     * Uses the extension from each of the exporters and attempts to match an exporter with the extension of the filename.
     * @param filename string - The name of the file to try to find an exporter for.
     * @returns DzExporter A new instance of the matching exporter, or NULL if none was found. The caller takes ownership of this pointer and is responsible for deleting it.
     */
    static findExporter(filename: string): DzExporter;

    /**
     * Uses the class name of each of the exporters and attempts to find an exporter with the given class name.
     * @param className string - The name of the exporter class to find.
     * @returns DzExporter A new instance of the matching exporter, or NULL if none was found. The caller takes ownership of this pointer and is responsible for deleting it.
     */
    static findExporterByClassName(className: string): DzExporter;

    /**
     * Uses the extension from each of the exporters and attempts to match an exporter with the extension of the filename.
     * @param filename string - The name of the file to try to find an exporter for.
     * @returns number The index of a matching exporter, or -1 if none was found.
     */
    static findExporterIndex(filename: string): number; // Number

    /**
     * @param exporterIdx number - The index of the exporter to get an instance of.
     * @returns DzExporter A new instance of the i'th exporter in the list. The caller takes ownership of this pointer and is responsible for deleting it when finished.
     */
    static getExporter(exporterIdx: number): DzExporter;

    /**
     * @returns number The number of exporters currently supported.
     */
    static getNumExporters(): number; // Number

    /**
     * Populates the given filter with all the types recognized by the export manager.
     * @param filter DzFileFilter - The filter to populate
     * @param defaultFilter string - The filter to set as the default
     */
    static makeExportFileFilter(filter: DzFileFilter, defaultFilter?: string): void;

    /* Methods */

    /**
     * Export the scene contents to a file.
     * @param fileName string
     * @param exporterIdx number - The index of the exporter class to use. If this is less than 0, then the extension of fileName is used to attempt to find an appropriate exporter.
     * @returns DzError DZ_NO_ERROR if the file export was successful.
     */
    exportFile(fileName: string, exporterIdx: number): DzError;

    /**
     * Export the scene contents to a file.
     * @param fileName string
     * @param exporterIdx number - The index of the exporter class to use. If this is less than 0, then the extension of fileName is used to attempt to find an appropriate exporter.
     * @param options DzFileIOSettings - The options to use while exporting the file.
     * @returns DzError DZ_NO_ERROR if the file export was successful.
     */
    exportFile(fileName: string, exporterIdx: number, options: DzFileIOSettings): DzError;

    /**
     * Gets the default export directory - this is typically the last directory that the user exported a file to, and will be the directory that user will be taken to next time the file export dialog is displayed.
     * @returns string The current default directory that files are exported to.
     */
    getExportPath(): string; // String

    /**
     * @returns boolean true if there is currently a file being exported, otherwise false.
     */
    isExporting(): boolean; // Boolean

    /**
     * Sets the default export directory - this is the directory that user will be taken to next time the file export dialog is displayed.
     * @param path string - The new default path for exporting files.
     */
    setExportPath(path: string): void;

    /* Signals */

    /**
     * Emitted when a file export operation is finished
     */
    fileExported: ISignal<void>;

    /**
     * Emitted when a file export operation is started
     */
    fileExportStarting: ISignal<void>;
}
