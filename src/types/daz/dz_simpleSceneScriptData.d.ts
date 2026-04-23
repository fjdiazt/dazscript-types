/**
 * A DzSimpleSceneData implementation that executes a script after the scene has been loaded.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/simplescenescriptdata_dz
 */
declare class DzSimpleSceneScriptData extends DzSimpleSceneData {

    /* Constructors */

    /**
     * @param name string
     * @param persistent boolean
     */
    constructor(name: string, persistent?: boolean);

    /* Methods */

    /**
     * @returns string The file path of the script for this data item (if any), otherwise an empty string.
     */
    getScriptFilePath(): string; // String

    /**
     * Sets the file path of the script for this data item.
     * @param script string - The file path of the script.
     */
    setScriptFilePath(script: string): void;
}
