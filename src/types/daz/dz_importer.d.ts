/**
 * Base class for all file importers.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/importer_dz
 */
declare class DzImporter extends DzFileIO {

    /* Methods */

    /**
     * @returns string A description of the importer that can be placed in a file type selection combobox (e.g. “Acclaim Skeleton”).
     */
    getDescription(): string; // String

    /**
     * @param i number
     * @returns string The i'th file extension (excluding the preceding dot) supported by this importer.
     */
    getExtension(i: number): string; // String

    /**
     * @param i number - The index of the imported node to get.
     * @returns DzNode The imported node at the given index (if valid), otherwise an empty string.
     * @since 4.11.0.254
     */
    getImportedNode(i: number): DzNode;

    /**
     * @returns number The number of supported file extensions for this importer.
     */
    getNumExtensions(): number; // Number

    /**
     * @returns number The number of nodes that were imported.
     * @since 4.11.0.254
     */
    getNumImportedNodes(): number; // Number

    /**
     * Imports from a file.
     * @param filename string - The full path of the file to import.
     * @param options DzFileIOSettings - The options to use while importing the file.
     * @returns DzError DZ_NO_ERROR on success, or an error code if the import failed.
     */
    readFile(filename: string, options: DzFileIOSettings): DzError;

    /**
     * Imports from a file.
     * @param filename string - The name of the file to import.
     * @returns DzError DZ_NO_ERROR on success, or an error code if the import failed.
     */
    readFile(filename: string): DzError;

    /**
     * Test the given filename and file contents to see if this importer can read it.
     * @param filename string - The name of the file to test.
     * @returns boolean true if the importer can import the file, otherwise false.
     */
    recognize(filename: string): boolean; // Boolean
}
