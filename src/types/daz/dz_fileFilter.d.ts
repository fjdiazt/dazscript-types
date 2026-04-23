/**
 * Encapsulates one or more file filters to be chosen from in a file dialogs.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/filefilter_dz
 */
declare class DzFileFilter extends QObject {

    /* Constructors */

    constructor();

    /**
     * @param description string
     * @param extensions any[]
     */
    constructor(description: string, extensions: any[]);

    /**
     * @param description string
     * @param extension string
     */
    constructor(description: string, extension: string);

    /* Methods */

    /**
     * Adds a file extension to the current filter.
     * @param extension string - A file extension that this filter will open/save e.g. “duf”
     */
    addExtension(extension: string): void;

    /**
     * Adds file extensions to the current filter.
     * @param extensions any[] - A list of file extensions that this filter will open/save
     */
    addExtensions(extensions: any[]): void;

    /**
     * @returns number The default filter index, returns -1 if no default is set.
     */
    getDefaultFilter(): number; // Number

    /**
     * @param filterIdx number - The index of the filter to return an extension for.
     * @param extensionIdx number - The index of the extension to return.
     * @returns string The extension of the filter at the given index.
     */
    getExtension(filterIdx: number, extensionIdx: number): string; // String

    /**
     * @param filterIdx number - The index of the filter to return a description for.
     * @returns string The description of the filter at the given index.
     */
    getFilterDescription(filterIdx: number): string; // String

    /**
     * @param filterIdx number - The index of the filter to get the number of extensions for.
     * @returns number The number of extensions in the filter at the given index.
     */
    getNumExtensions(filterIdx: number): number; // Number

    /**
     * @returns number The number of filters.
     */
    getNumFilters(): number; // Number

    /**
     * Starts a new filter with the given description.
     * @param description string - The description of files this filter will open/save e.g. “DAZ Studio files”
     */
    newFilter(description: string): void;

    /**
     * Sets the default filter index - by default this is 0.
     * @param filterIdx number - The index of the filter to become the default - if the index is invalid the default is not changed.
     */
    setDefaultFilter(filterIdx: number): void;
}
