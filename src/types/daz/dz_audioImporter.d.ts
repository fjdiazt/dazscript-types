/**
 * Base class for all audio clip importers.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/audioimporter_dz
 */
declare class DzAudioImporter extends DzFileIO {

    /* Methods */

    /**
     * @returns string A description of the importer that can be placed in a file type selection combo box (e.g. “WAV Format”).
     */
    getDescription(): string; // String

    /**
     * @returns string The file extension (excluding the preceding dot) supported by this importer.
     */
    getExtension(): string; // String

    /**
     * @param filename string
     * @param clip DzAudioClip
     * @param options DzFileIOSettings
     * @returns DzError
     */
    loadAudio(filename: string, clip: DzAudioClip, options: DzFileIOSettings): DzError;

    /**
     * Reads the file.
     * @param filename string - Name of the file to be read.
     * @param clip DzAudioClip - Audio clip to read data into.
     * @returns DzError DZ_NO_ERROR on success, otherwise an error code.
     */
    loadAudio(filename: string, clip: DzAudioClip): DzError;

    /**
     * Test the given filename and file contents to see if this importer can read it.
     * @param filename string - The name of the file to test.
     * @returns boolean true if the importer can import the file, otherwise false.
     */
    recognize(filename: string): boolean; // Boolean
}
