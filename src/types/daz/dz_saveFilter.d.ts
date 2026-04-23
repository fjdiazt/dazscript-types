/**
 * Base class for filters that save script-based scene settings. (deprecated).
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/savefilter_dz
 */
declare class DzSaveFilter extends DzFileIO {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of ScriptFileMode.
     */
    static UseExtension: number;

    /**
     * DAZ enum member of ScriptFileMode.
     */
    static TextScriptFile: number;

    /**
     * DAZ enum member of ScriptFileMode.
     */
    static DAZScriptFile: number;

    /**
     * DAZ enum member of ScriptFileMode.
     */
    static EncDAZScriptFile: number;

    /* Methods */

    /**
     * @returns string The name of the filter.
     */
    getDescription(): string; // String

    /**
     * @returns string
     */
    getLoadSavePath(): string; // String

    /**
     * @param path string
     */
    setLoadSavePath(path: string): void;

    /**
     * Saves to a file.
     * @param filename string - Name of the file to export to.
     * @param mode number - The type of file to save.
     * @returns DzError DZ_NO_ERROR on success, otherwise an error code.
     */
    writeFile(filename: string, mode: number): DzError;

    /**
     * Saves to a file.
     * @param filename string - Name of the file to export to.
     * @param mode number - The type of file to save.
     * @param options DzFileIOSettings - The options for the save filter.
     * @returns DzError DZ_NO_ERROR on success, otherwise an error code.
     */
    writeFile(filename: string, mode: number, options: DzFileIOSettings): DzError;
}
