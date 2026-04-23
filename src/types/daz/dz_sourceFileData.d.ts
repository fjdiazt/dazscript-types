/**
 * A DzElementData implementation that stores the source file of an imported object on the element.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/sourcefiledata_dz
 */
declare class DzSourceFileData extends DzElementData {

    /* Properties */

    /**
     * The path to the source file.
     */
    sourceFilePath: string; // String

    /* Constructors */

    /**
     * @param filePath string
     */
    constructor(filePath?: string);

    /* Methods */

    /**
     * @returns boolean true if the source geometry has changed, otherwise false.
     */
    getGeometryChanged(): boolean; // Boolean

    /**
     * Attempts to convert the source path into a “Poser” style Runtime-relative path (i.e., “:Runtime:Libraries:Character:FileName.cr2”).
     * @returns string The converted source path (if conversion succeeds), otherwise an empty string.
     */
    getPoserRuntimeRelativePath(): string; // String

    /**
     * Sets whether or not the source geometry has changed.
     * @param onoff boolean
     */
    setGeometryChanged(onoff: boolean): void;
}
