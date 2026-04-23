/**
 * Base class for all image importers.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/imageimporter_dz
 */
declare class DzImageImporter extends DzFileIO {

    /* Methods */

    /**
     * @returns string A description of the importer that can be placed in a file type selection combo box (e.g. “JPEG Format”).
     */
    getDescription(): string; // String

    /**
     * @param i number
     * @returns string The file extension (excluding the preceding dot) supported by this importer.
     */
    getExtension(i: number): string; // String

    /**
     * @returns number The number of supported file extensions for this importer.
     */
    getNumExtensions(): number; // Number

    /**
     * Reads the file.
     * @param filename string - The name of the file to read.
     * @param image DzImage - Image to read data into.
     * @param options DzFileIOSettings
     * @returns DzError
     */
    loadImage(filename: string, image: DzImage, options: DzFileIOSettings): DzError;

    /**
     * Reads the file.
     * @param filename string - The name of the file to read.
     * @param image DzImage - Image to read data into.
     * @returns DzError
     */
    loadImage(filename: string, image: DzImage): DzError;

    /**
     * Test the given filename and file contents to see if this importer can read it.
     * @param filename string
     * @returns boolean true if the importer can import the file, otherwise false.
     */
    recognize(filename: string): boolean; // Boolean
}
