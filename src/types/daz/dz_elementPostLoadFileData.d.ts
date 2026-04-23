/**
 * A DzElementData implementation that associates a file with an element after the element has been loaded into the scene.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/elementpostloadfiledata_dz
 */
declare class DzElementPostLoadFileData extends DzElementData {

    /* Constructors */

    /**
     * @param name string
     * @param persistent boolean
     */
    constructor(name: string, persistent?: boolean);

    /* Methods */

    /**
     * @returns string The file path of the file for this data item (if any), otherwise an empty string.
     */
    getPostLoadFilePath(): string; // String

    /**
     * Sets the file path of the file for this data item.
     * @param script string
     */
    setPostLoadFilePath(script: string): void;
}
