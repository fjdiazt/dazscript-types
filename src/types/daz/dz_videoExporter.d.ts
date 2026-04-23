/**
 * Base class for all image exporters.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/videoexporter_dz
 */
declare class DzVideoExporter extends DzFileIO {

    /* Methods */

    /**
     * @returns string A description of the exporter that can be placed in a file type selection combo box (e.g. “AVI Format”)
     */
    getDescription(): string; // String

    /**
     * @returns string The extension that this exporter will force filenames to (excluding the preceeding '.').
     */
    getExtension(): string; // String

    /**
     * @returns boolean true if this exporter writes to a 'real' file. Derived classes should override this to indicate whether or not they are writing out to a real file. Exporters can, if they want to, write to entities other than files (e.g. sockets, pipes, etc.)
     */
    isFileExporter(): boolean; // Boolean

    /**
     * Writes the file.
     * @param filename string - The name of the file to save the video to.
     * @param clip DzVideoClip - Video clip to save to file.
     * @returns DzError DZ_NO_ERROR on success, otherwise an error code.
     */
    saveClip(filename: string, clip: DzVideoClip): DzError;

    /**
     * Writes the file.
     * @param filename string - The name of the file to save the video to.
     * @param clip DzVideoClip - Video clip to save to file.
     * @param options DzFileIOSettings
     * @returns DzError DZ_NO_ERROR on success, otherwise an error code.
     */
    saveClip(filename: string, clip: DzVideoClip, options: DzFileIOSettings): DzError;
}
