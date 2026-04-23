/**
 * A static (non-animatable) string property that holds a file path.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/fileproperty_dz
 */
declare class DzFileProperty extends DzStringProperty {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of FileType.
     */
    static FileSave: number;

    /**
     * DAZ enum member of FileType.
     */
    static FileOpen: number;

    /**
     * DAZ enum member of FileType.
     */
    static Dir: number;

    /**
     * DAZ enum member of FileType.
     */
    static FileLoad: number;

    /* Constructors */

    constructor();

    /**
     * @param name string
     * @param isUserProperty boolean
     */
    constructor(name: string, isUserProperty: boolean);

    /* Methods */

    /**
     * @param path string - The (relative) path of the file.
     * @returns string The absolute path of the file specified by the given path
     */
    getAbsolutePath(path: string): string; // String

    /**
     * @returns string The display text for this property (if any), otherwise an empty string.
     * @since 4.20.0.3
     */
    getDisplayText(): string; // String

    /**
     * Gets the filter value.
     * @returns string
     */
    getFilter(): string; // String

    /**
     * Gets the file type.
     * @returns number
     */
    getType(): number; // FileType

    /**
     * Causes the file specified in the value of this property to be loaded.
     * @returns boolean true if the file is load successfully, otherwise false.
     * @since 4.20.0.3
     */
    loadFile(): boolean; // Boolean

    /**
     * @param text string
     */
    setDisplayText(text: string): void;

    /**
     * Sets the value to use as a file extension filter.
     * @param filter string - The filter to set. This should be in the form “FilterName (*.ext1 *.ext2 *.ext3)”.
     */
    setFilter(filter: string): void;

    /**
     * Sets the file type for the property.
     * @param type number - The file type to set.
     */
    setType(type: number): void;

    /* Signals */

    /**
     * Emitted when the display text for the property changes.
     */
    displayTextChanged: ISignal<void>;

    /**
     * Emitted when the filter for the property changes.
     */
    filterChanged: ISignal<void>;
}
