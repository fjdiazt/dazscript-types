/**
 * Base class for filters that save DSON-based scene settings.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/assetiofilter_dz
 */
declare class DzAssetIOFilter extends DzFileIO {

    /* Methods */

    /**
     * Saves to a file.
     * @param filename string
     * @param startingDir string - The initial directory to start the save dialog in.
     * @returns DzError DZ_NO_ERROR on success, otherwise an error code.
     */
    doSave(filename: string, startingDir: string): DzError;

    /**
     * Saves to a file.
     * @param options DzFileIOSettings - The options for the save.
     * @param filename string
     * @param startingDir string - The initial directory to start the file browse.
     * @returns DzError DZ_NO_ERROR on success, otherwise an error code.
     */
    doSave(options: DzFileIOSettings, filename: string, startingDir: string): DzError;

    /**
     * @param base DzBase
     * @returns DzUri The URI to use when referring to the given asset from a definition.
     */
    getAssetDefinitionUri(base: DzBase): DzUri;

    /**
     * @param base DzBase
     * @returns DzUri The URI to use when referring to the given asset from an instance.
     */
    getAssetInstanceUri(base: DzBase): DzUri;

    /**
     * @returns string The compatibility base of the saved file.
     */
    getCompatiblityBase(): string; // String

    /**
     * @returns string The content type of the saved file.
     */
    getContentType(): string; // String

    /**
     * @returns string The name of the filter.
     */
    getDescription(): string; // String

    /**
     * @returns string The path of the saved file.
     */
    getDoSavePath(): string; // String

    /**
     * @returns string The last path used to load/save files with the filter.
     */
    getLoadSavePath(): string; // String

    /**
     * @returns string The path to use for settings of this filter.
     * @since 4.21.1.7
     */
    getSettingsPath(): string; // String

    /**
     * @returns string The default relative path for saving files with this filter.
     */
    getStandardSaveRelativePath(): string; // String

    /**
     * @returns boolean true if this filter saves support files, otherwise false.
     */
    isSupportAssetFilter(): boolean; // Boolean

    /**
     * Sets the path to use for loading/saving files with this filter.
     * @param path string - The path to set.
     */
    setLoadSavePath(path: string): void;
}
