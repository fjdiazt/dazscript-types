/**
 * Manager responsible for scene file importers.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/importmgr_dz
 */
declare class DzImportMgr extends QObject {

    /* Static Methods */

    /**
     * Calls recognize() on each of the importers and attempts to match an importer with the filename.
     * @param filename string - The name of the file to try to find an importer for.
     * @returns boolean true if an importer was found that can read the given file.
     */
    static canImport(filename: string): boolean; // Boolean

    /**
     * Calls recognize() on each of the importers and attempts to match an importer with the filename.
     * @param filename string - The name of the file to try to find an importer for.
     * @returns DzImporter A new instance of the matching importer, or NULL if none was found. The caller takes ownership of this pointer and is responsible for deleting it.
     */
    static findImporter(filename: string): DzImporter;

    /**
     * Attempts to locate an importer class type by name.
     * @param className string - The class name of the importer to find.
     * @returns DzImporter A new instance of the matching importer, or NULL if none was found. The caller takes ownership of this pointer and is responsible for deleting it.
     */
    static findImporterByClassName(className: string): DzImporter;

    /**
     * Calls recognize() on each of the importers and attempts to match an importer with the filename.
     * @param filename string - The name of the file to try to find an importer for.
     * @returns number The index of a matching importer, or -1 if none was found.
     */
    static findImporterIndex(filename: string): number; // Number

    /**
     * @returns number The number of importers currently supported.
     */
    static getNumImporters(): number; // Number

    /**
     * Populates the given filter with all the geometry types recognized by the import manager.
     * @param filter DzFileFilter - The filter to populate
     * @param defaultFilter string - The filter to set as the default
     * @param makeAllFilesEntry boolean - If true, an extra filter is appended to the list that matches all the valid extensions.
     */
    static makeGeometryFileFilter(filter: DzFileFilter, defaultFilter?: string, makeAllFilesEntry?: boolean): void;

    /**
     * Populates the given filter with all the types recognized by the import manager.
     * @param filter DzFileFilter - The filter to populate
     * @param defaultFilter string - The filter to set as the default
     * @param makeAllFilesEntry boolean - If true, an extra filter is appended to the list that matches all the valid extensions.
     */
    static makeImportFileFilter(filter: DzFileFilter, defaultFilter?: string, makeAllFilesEntry?: boolean): void;

    /* Methods */

    /**
     * Gets the full import file name.
     * @returns string The full import file name.
     */
    getImportFileName(): string; // String

    /**
     * Gets the default import directory - this is typically the last directory that the user imported a file from, and will be the directory that user will be taken to next time the file import dialog is displayed.
     * @returns string The current default directory that files are imported from.
     */
    getImportPath(): string; // String

    /**
     * @returns boolean true if there is currently a file being imported, otherwise false.
     */
    isImporting(): boolean; // Boolean

    /**
     * Import the contents of a file into the scene.
     * @param filename string - The name of the file to import. This must be the full filename including the path to the file.
     * @param importerIdx number - The index of the importer class to use. If this is less than 0, then the recognize function of the importer classes will be called with the fileName to attempt to find an appropriate importer.
     * @returns DzError DZ_NO_ERROR if the file import was successful.
     */
    readFile(filename: string, importerIdx?: number): DzError;

    /**
     * Import the contents of a file into the scene.
     * @param filename string - The name of the file to import. This must be the full filename including the path to the file.
     * @param importerIdx number - The index of the importer class to use. If this is less than 0, then the recognize function of the importer classes will be called with the fileName to attempt to find an appropriate importer.
     * @param options DzFileIOSettings - The options to use while importing the file.
     * @returns DzError DZ_NO_ERROR if the file import was successful.
     */
    readFile(filename: string, importerIdx: number, options: DzFileIOSettings): DzError;

    /**
     * Reads the geometry file into a new shape.
     * @param filename string - The full path of the file to import.
     * @param importerIdx number - The index of the importer to use, if invalid (<0) the file's extension will be used to select an appropriate importer.
     * @param options DzFileIOSettings - The options to use while importing the file.
     * @returns DzShape The new shape that the geometry was read into, NULL on failure.
     */
    readGeometry(filename: string, importerIdx: number, options: DzFileIOSettings): DzShape;

    /**
     * Reads the geometry file into a new shape.
     * @param filename string - The full path of the file to import.
     * @param importerIdx number - The index of the importer to use, if invalid (<0) the file's extension will be used to select an appropriate importer.
     * @returns DzShape The new shape that the geometry was read into, NULL on failure.
     */
    readGeometry(filename: string, importerIdx?: number): DzShape;

    /**
     * Sets the import file name - this is the full file name that file was import
     * @param fileName string - The full file name.
     */
    setImportFileName(fileName: string): void;

    /**
     * Sets the default import directory - this is the directory that user will be taken to next time the file import dialog is displayed.
     * @param path string - The new default path for importing files.
     */
    setImportPath(path: string): void;

    /* Signals */

    /**
     * Emitted after importing a file. This may not always be emitted after every fileImportStarting() signal if there were errors during file loading.
     */
    fileImported: ISignal<void>;

    /**
     * Emitted just before importing a file.
     */
    fileImportStarting: ISignal<void>;

    /* Undocumented Augment Members */

    /** @undocumented */
    getImporter(i: number): DzImporter;
}
