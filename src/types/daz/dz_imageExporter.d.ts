/**
 * Base class for all image exporters.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/imageexporter_dz
 */
declare class DzImageExporter extends DzFileIO {

    /* Methods */

    /**
     * @returns string A description of the exporter that can be placed in a file type selection combo box (e.g. “JPEG Format”)
     */
    getDescription(): string; // String

    /**
     * @returns string The extension that this exporter will force filenames to.
     */
    getExtension(): string; // String

    /**
     * @returns boolean true if this exporter writes to a 'real' file. Derived classes should override this to indicate whether or not they are writing out to a real file. Exporters can, if they want to, write to entities other than files (e.g. sockets, pipes, etc.)
     */
    isFileExporter(): boolean; // Boolean

    /**
     * Writes the file.
     * @param filename string - The name of the file to save the image to.
     * @param image DzImage - Image to save to file.
     * @returns DzError DZ_NO_ERROR on success, otherwise an error code.
     */
    saveImage(filename: string, image: DzImage): DzError;

    /**
     * Writes the file.
     * @param filename string - The name of the file to save the image to.
     * @param image DzImage - Image to save to file.
     * @param options DzFileIOSettings - The options for the exporter.
     * @returns DzError DZ_NO_ERROR on success, otherwise an error code.
     */
    saveImage(filename: string, image: DzImage, options: DzFileIOSettings): DzError;
}
