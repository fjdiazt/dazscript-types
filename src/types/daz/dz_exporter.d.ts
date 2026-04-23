/**
 * Base class for all scene file exporters.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/exporter_dz
 */
declare class DzExporter extends DzFileIO {

    /* Methods */

    /**
     * @returns string A description of the exporter that can be placed in a file type selection combobox (e.g. “Acclaim Skeleton”)
     */
    getDescription(): string; // String

    /**
     * @returns string The extension that this exporter will force filenames to (excluding the preceeding '.').
     */
    getExtension(): string; // String

    /**
     * @returns boolean true if this exporter writes to a 'real' file, otherwise false.
     */
    isFileExporter(): boolean; // Boolean

    /**
     * Exports to a file.
     * @param filename string - Name of the file to export to.
     * @returns DzError DZ_NO_ERROR on success, or an error code if the export failed.
     */
    writeFile(filename: string): DzError;

    /**
     * Exports to a file.
     * @param filename string - The full path of the file to export to.
     * @param options DzFileIOSettings - The options to use while exporting the file.
     * @returns DzError DZ_NO_ERROR on success, or an error code if the export failed.
     */
    writeFile(filename: string, options: DzFileIOSettings): DzError;
}
