/**
 * Manager responsible for the asset filters that load/save DSON files.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/assetiomgr_dz
 */
declare class DzAssetIOMgr extends QObject {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of DzOpenMethod.
     */
    static DefaultMethod: number;

    /**
     * DAZ enum member of DzOpenMethod.
     */
    static OpenNew: number;

    /**
     * DAZ enum member of DzOpenMethod.
     */
    static MergeFile: number;

    /* Static Methods */

    /**
     * @returns DzAssetIOFilter The current save filter (if any), otherwise null.
     * @since 4.15.0.16
     */
    static currentSaveFilter(): DzAssetIOFilter;

    /**
     * @param className string - The classname of the asset filter to find.
     * @returns number The index of the asset filter with the given classname (if any), otherwise -1.
     * @since 4.11.0.225
     */
    static findAssetFilterIndex(className: string): number; // Number

    /**
     * Deprecated
     * @param className string
     * @returns number
     */
    static findFilter(className: string): number; // Number

    /**
     * @param uri DzUri - The URI of an asset instance to find during file load.
     * @returns QObject The object for the specified URI (if any), otherwise null.
     * @since 4.9.4.111
     */
    static findObjectInstance(uri: DzUri): QObject;

    /**
     * @param i number - The index of the asset filter to get.
     * @returns DzAssetIOFilter A new instance of the i'th asset filter in the list (if valid), otherwise null.
     * @since 4.11.0.225
     */
    static getAssetFilter(i: number): DzAssetIOFilter;

    /**
     * @param i number - The index of the asset filter to get the name of.
     * @returns string The name of the i'th asset filter (if valid), otherwise an empty string.
     * @since 4.11.0.225
     */
    static getAssetFilterName(i: number): string; // String

    /**
     * Deprecated
     * @param i number
     * @returns DzAssetIOFilter
     */
    static getFilter(i: number): DzAssetIOFilter;

    /**
     * Deprecated
     * @param i number
     * @returns string
     */
    static getFilterName(i: number): string; // String

    /**
     * @returns number The number of save filters currently supported.
     * @since 4.11.0.225
     */
    static getNumAssetFilters(): number; // Number

    /**
     * Deprecated
     * @returns number
     */
    static getNumFilters(): number; // Number

    /**
     * @returns boolean if data is currently being read, otherwise false.
     * @since 4.15.0.16
     */
    static isReading(): boolean; // Boolean

    /**
     * @returns boolean if data is currently being read or written, otherwise false.
     * @since 4.15.0.16
     */
    static isReadingOrWriting(): boolean; // Boolean

    /**
     * @returns boolean if data is currently being written, otherwise false.
     * @since 4.15.0.16
     */
    static isWriting(): boolean; // Boolean

    /* Methods */

    /**
     * Loads an asset file.
     * @param filename string - The full name of the file to load.
     * @param method number - The method to use for loading.
     * @param filter DzFileLoadFilter - The filter to use.
     * @returns DzError DZ_NO_ERROR if the file load was successful, otherwise an appropriate error code.
     */
    doLoad(filename: string, method?: number, filter?: DzFileLoadFilter): DzError;

    /**
     * Save the scene contents to a file with the given asset filter. Prompts the user for a file to save to.
     * @param filterIndex number - The index of the asset filter to use.
     * @returns DzError DZ_NO_ERROR if the file save was successful, otherwise an appropriate error code.
     */
    doSave(filterIndex: number): DzError;

    /**
     * Save the scene contents to a file with the given asset filter. Prompts the user for a file to save to.
     * @param filter DzAssetIOFilter - The filter to use.
     * @param options DzFileIOSettings - The options to use.
     * @param saveOnly boolean - Whether to only save the file, or to also create an associated icon and assign metadata.
     * @param filename string - The full name of the file to save to.
     * @param startingDir string - The path of the directory to start the save dialog in.
     * @param category string - The category to assign the saved file to.
     * @returns DzError DZ_NO_ERROR if the file save was successful, otherwise an appropriate error code.
     */
    doSaveWithOptions(filter: DzAssetIOFilter, options: DzFileIOSettings, saveOnly?: boolean, filename?: string, startingDir?: string, category?: string): DzError;

    /**
     * Save the scene contents to a file. Prompts the user for a file to save to.
     * @returns DzError DZ_NO_ERROR if the file save was successful, otherwise an appropriate error code.
     */
    doSceneSaveAs(): DzError;

    /**
     * @returns DzAuthor If isReadingOrWriting() is false, an invalid DzAuthor. If isReading() is true, the contributor for the file being read. If isWriting() is true, the contributor for the file being written.
     * @since 4.15.0.16
     */
    getCurrentAssetContributor(): DzAuthor;

    /**
     * @returns string If isReadingOrWriting() is false, an empty string. If isReading() is true, the asset identifier for the file being read. If isWriting() is true, the asset identifier for the file being written.
     * @since 4.15.0.16
     */
    getCurrentAssetId(): string; // String

    /**
     * @returns DzVersion If isReadingOrWriting() is false, an invalid DzVersion. If isReading() is true, the revision for the file being read. If isWriting() is true, the revision for the file being written.
     * @since 4.15.0.16
     */
    getCurrentAssetRevision(): DzVersion;

    /**
     * @returns string If isReadingOrWriting() is false, an empty string. If isReading() is true, the asset type for the file being read. If isWriting() is true, the asset type for the file being written.
     * @since 4.15.0.16
     */
    getCurrentAssetType(): string; // String

    /**
     * @returns Object If isReadingOrWriting() is false, an empty object. If isReading() is true, an object containing “file_version” and “asset_info” for the file being read. If isWriting() is true, an object containing “file_version” and “asset_info” for the file being written.
     * @since 4.15.0.16
     */
    getCurrentFileInfo(): Object;

    /**
     * @returns string The full name of the file that is currently being read from or written to (if any), otherwise an empty string.
     * @since 4.15.0.16
     */
    getCurrentFilename(): string; // String

    /**
     * @returns DzVersion If isReadingOrWriting() is false, an invalid DzVersion. If isReading() is true, the “file_version” for the file being read. If isWriting() is true, the “file_version” for the file being written.
     * @since 4.15.0.16
     */
    getCurrentFileVersion(): DzVersion;

    /**
     * @returns string The default path for the DSON assets cache.
     */
    getDefaultDSONAssetCachePath(): string; // String

    /**
     * @returns string The path that the DSON assets cache resides in.
     */
    getDSONAssetCachePath(): string; // String

    /**
     * @param filename string - The full name of the file to retrieve the information from.
     * @returns DzAuthor The “asset_info” contributor embedded in an asset file (if any), otherwise an invalid DzAuthor.
     * @since 4.15.0.16
     */
    getFileAssetContributor(filename: string): DzAuthor;

    /**
     * @param filename string - The full name of the file to retrieve the information from.
     * @returns string The “asset_info” type embedded in an asset file (if any), otherwise an empty string.
     * @since 4.15.0.16
     */
    getFileAssetType(filename: string): string; // String

    /**
     * @param filename string - The full name of the file to retrieve the information from.
     * @returns Object An object containing the “file_version” and “asset_info” embedded in the specified asset file (if any), otherwise an empty object. The “asset_info” only contains “type” and “contributor” values - it does not include the “id”, “revision”, or “modified” values.
     * @since 4.15.0.16
     */
    getFileInfo(filename: string): Object;

    /**
     * @param filename string - The full name of the file to retrieve the information from.
     * @returns DzVersion The “file_version” embedded in an asset file (if any), otherwise an invalid DzVersion.
     * @since 4.15.0.16
     */
    getFileVersion(filename: string): DzVersion;

    /**
     * @returns string The path of the last directory that files were loaded from.
     */
    getLoadPath(): string; // String

    /**
     * @returns string The path of the last directory that files were saved to.
     */
    getSavePath(): string; // String

    /**
     * Loads an asset from URI.
     * @param fileUri DzUri - The URI of the file to load.
     * @param method number - The method to use for loading.
     * @param filter DzFileLoadFilter - The filter to use.
     * @returns DzError DZ_NO_ERROR if the file load was successful, otherwise an appropriate error code.
     */
    loadFromUri(fileUri: DzUri, method?: number, filter?: DzFileLoadFilter): DzError;

    /**
     * Sets the path for the DSON asset cache.
     * @param cacheFullPath string - The path to set.
     */
    setDSONAssetCachePath(cacheFullPath: string): void;

    /* Signals */

    /**
     * Emitted when an asset has been loaded.
     */
    assetImported: ISignal<void>;

    /**
     * Emitted when an asset load is starting.
     */
    assetImportStarting: ISignal<void>;

    /**
     * Emitted when an asset load error occures.
     * @param filename string - The relative path of the asset.
     * @since 4.15.0.16
     */
    assetLoadError: ISignal<string>;

    /**
     * Emitted when an asset load is finished.
     * @param filename string - The relative path of the asset.
     * @since 4.15.0.16
     */
    assetLoadFinished: ISignal<string>;

    /**
     * Emitted when an asset load has started.
     * @param filename string - The relative path of the asset.
     * @since 4.15.0.16
     */
    assetLoadStarted: ISignal<string>;

    /**
     * Emitted when an asset has been saved.
     */
    assetSaved: ISignal<void>;

    /**
     * Emitted when an asset save error occurs.
     * @param filename string - The path of the asset.
     * @since 4.15.0.16
     */
    assetSaveError: ISignal<string>;

    /**
     * Emitted when an asset save is finished.
     * @param filename string - The path of the asset.
     * @since 4.15.0.16
     */
    assetSaveFinished: ISignal<string>;

    /**
     * Emitted when an asset save has started.
     * @param filename string - The path of the asset.
     * @since 4.15.0.16
     */
    assetSaveStarted: ISignal<string>;

    /* Undocumented Augment Members */

    /** @undocumented */
    doScopedLoad(): any; // TODO ;

    /** @undocumented */
    doScopedLoad(): any; // TODO ;

    /** @undocumented */
    doSceneSave(filePath: QString, category: QString): DzError;

    /** @undocumented */
    doSceneSave(filePath: QString, category: QString): DzError;
}
