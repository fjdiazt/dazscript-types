/**
 * Manager responsible for the save filters that produce script-based presets. (deprecated).
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/savefiltermgr_dz
 */
declare class DzSaveFilterMgr extends QObject {

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

    /* Static Methods */

    /**
     * @param className string - The class name of the save filter to find.
     * @returns number The index of the save filter with the given class name.
     */
    static findFilter(className: string): number; // Number

    /**
     * @param i number - The index of the save filter to get.
     * @returns DzSaveFilter A new instance of the i'th exporter in the list.
     */
    static getFilter(i: number): DzSaveFilter;

    /**
     * @param i number - The index of the save filter to get the name of.
     * @returns string The name of the i'th filter.
     */
    static getFilterName(i: number): string; // String

    /**
     * @returns number The number of save filters currently supported.
     */
    static getNumFilters(): number; // Number

    /* Methods */

    /**
     * Save the scene contents to a file with the given save filter. Prompts the user for a file to save to.
     * @param filterIndex number - The index of the save filter class to use.
     * @param dir string - The directory to start the file dialog in, if empty, the current load/save directory is used.
     * @returns DzError DZ_NO_ERROR if the file export was successful.
     */
    doSave(filterIndex: number, dir?: string): DzError;

    /**
     * @returns string Last directory that files were saved to.
     */
    getSavePath(): string; // String

    /**
     * Save the scene contents to a file with the given save filter.
     * @param mode number - The file mode for saving the script
     * @param fileName string - The name of the file to export to.
     * @param filterName string - Optional argument. Class name of the filter to use, or no argument to show a choose filter dialog.
     * @returns DzError DZ_NO_ERROR if the file export was successfull.
     */
    writeFile(mode: number, fileName: string, filterName?: string): DzError;
}
