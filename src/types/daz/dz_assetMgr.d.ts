/**
 * Manager responsible for database records associated with “content.”.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/assetmgr_dz
 */
declare class DzAssetMgr extends DzBase {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of CompatibilityBaseType.
     */
    static NoCompatibility: number;

    /**
     * DAZ enum member of CompatibilityBaseType.
     */
    static CompatibilityBase: number;

    /**
     * DAZ enum member of CompatibilityBaseType.
     */
    static CompatibilityFilter: number;

    /**
     * DAZ enum member of CompatibilityBaseType.
     */
    static CompatibilityBaseAndFilter: number;

    /**
     * DAZ enum member of MetadataType.
     */
    static NoData: number;

    /**
     * DAZ enum member of MetadataType.
     */
    static UserData: number;

    /**
     * DAZ enum member of MetadataType.
     */
    static VendorData: number;

    /**
     * DAZ enum member of MetadataType.
     */
    static UserAndVendorData: number;

    /**
     * DAZ enum member of SearchOptions.
     */
    static None: number;

    /**
     * DAZ enum member of SearchOptions.
     */
    static WholeWord: number;

    /**
     * DAZ enum member of SearchOptions.
     */
    static RegExp: number;

    /**
     * DAZ enum member of SearchOptions.
     */
    static NativeScenes: number;

    /**
     * DAZ enum member of SearchOptions.
     */
    static NativeScripts: number;

    /**
     * DAZ enum member of SearchOptions.
     */
    static PoserFigures: number;

    /**
     * DAZ enum member of SearchOptions.
     */
    static PoserPoses: number;

    /**
     * DAZ enum member of SearchOptions.
     */
    static PoserProps: number;

    /**
     * DAZ enum member of SearchOptions.
     */
    static PoserHair: number;

    /**
     * DAZ enum member of SearchOptions.
     */
    static PoserFaces: number;

    /**
     * DAZ enum member of SearchOptions.
     */
    static PoserLights: number;

    /**
     * DAZ enum member of SearchOptions.
     */
    static PoserCameras: number;

    /**
     * DAZ enum member of SearchOptions.
     */
    static PoserHands: number;

    /**
     * DAZ enum member of SearchOptions.
     */
    static PoserMaterials: number;

    /**
     * DAZ enum member of SearchOptions.
     */
    static PoserScenes: number;

    /**
     * DAZ enum member of SearchOptions.
     */
    static ImportFiles: number;

    /**
     * DAZ enum member of SearchOptions.
     */
    static AllNativeFiles: number;

    /**
     * DAZ enum member of SearchOptions.
     */
    static NoNativeFilesMask: number;

    /**
     * DAZ enum member of SearchOptions.
     */
    static AllPoserFiles: number;

    /**
     * DAZ enum member of SearchOptions.
     */
    static NoPoserFilesMask: number;

    /**
     * DAZ enum member of SearchOptions.
     */
    static AllFiles: number;

    /**
     * DAZ enum member of SearchOptions.
     */
    static DefaultOptions: number;

    /**
     * DAZ enum member of StopModeCMS.
     */
    static SM_Smart: number;

    /**
     * DAZ enum member of StopModeCMS.
     */
    static SM_Fast: number;

    /**
     * DAZ enum member of StopModeCMS.
     */
    static SM_Immediate: number;

    /* Static Methods */

    /**
     * @param node DzNode - A node to look for scene assets on.
     * @param options Object - Options to control what and how assets are gathered. Currently only supports a bool option named “selected”, which the value of is used to indicate whether to only consider selected nodes or all nodes (default).
     * @returns any[] A list of paths to scene assets for the given node (if any).
     * @since 4.20.0.11
     */
    static captureSceneAssetPathsList(node: DzNode, options?: Object): any[]; // Array

    /**
     * @param options Object - Options to control what and how assets are gathered. Currently only supports a bool option named “selected”, which the value of is used to indicate whether to only consider selected nodes or all nodes (default).
     * @returns any[] A list of paths to scene assets (if any).
     * @since 4.20.0.11
     */
    static captureSceneAssetPathsList(options?: Object): any[]; // Array

    /**
     * @param searchTerm string - The search term to be escaped.
     * @returns string An escaped version of searchTerm
     */
    static escapeSearchTerm(searchTerm: string): string; // String

    /**
     * @param relativePath string - The relative path of the file to convert to a key.
     * @returns string The normalized, lowercase, leading '/' removed, version of relativePath that should be used to look up relativePath in the database.
     * @since 4.16.1.32
     */
    static fileKeyForFilename(relativePath: string): string; // String

    /**
     * @param categoryPaths any[] - The list of category paths to find a common path in. This can be a list of strings, or a list of lists of strings.
     * @param flatten boolean - If true, the categories are processed as if they are a single list. If false (default), the deepest path common to all lists will be chosen. In either case, non-default categorization is preferred over default categorization.
     * @returns string A string representing the portion of categoryPaths that is common.
     * @since 4.9.2.68
     */
    static findCommonBaseCategoryPath(categoryPaths: any[], flatten?: boolean): string; // String

    /**
     * @param node DzNode - The node to get the asset URI for.
     * @returns string The asset URI for node, or an empty string if node is null.
     */
    static getAssetUriForNode(node: DzNode): string; // String

    /**
     * @returns string An identifier for the top level categories container.
     */
    static getCategoriesID(): string; // String

    /**
     * @param node DzNode - The node to get compatibility base for.
     * @returns string A slash (“/”) delimited string version of the node's compatibility base path (if any), otherwise an empty string.
     */
    static getCompatibilityBasePathForNode(node: DzNode): string; // String

    /**
     * @returns string An identifier for the top level compatibility bases container.
     * @since 4.11.0.93
     */
    static getCompatibilityBasesID(): string; // String

    /**
     * @returns number The 64-bit integer used to represent the store id for the Daz 3D store.
     * @since 4.20.0.11
     */
    static getDAZ3DStoreID(): number; // Number

    /**
     * @returns string An identifier for the top level import formats container.
     */
    static getImportDirID(): string; // String

    /**
     * @returns string An identifier for the top level Poser formats container.
     */
    static getPoserDirID(): string; // String

    /**
     * @returns any[] The identifier for the virtual folder container within the top level Poser formats container.
     * @since 4.9.2.68
     */
    static getPoserVirtualDirID(): any[]; // Array

    /**
     * Prompts the user for a valid product name.
     * @param name string - The product name (if any) to use if a product with the same name does not already exist in the database. An empty string, or a non-unique name, will cause the user to be prompted for a unique name.
     * @param choices any[] - A list of pre-defined choices (if any) to provide the user.
     * @param allowEmpty boolean - If true, an empty value is considered acceptable.
     * @returns string A string that represents a valid product name (if allowEmpty is false - default), otherwise an empty string.
     * @since 4.12.1.100
     */
    static getProductName(name: string, choices?: any[], allowEmpty?: boolean): string; // String

    /**
     * @param filenames any[] - A list of filenames to find products for.
     * @returns Object An object with the following members (if no errors):
     * @since 4.20.0.11
     */
    static getProductsForFiles(filenames: any[]): Object;

    /**
     * @returns string An identifier for the top level products container.
     */
    static getProductsID(): string; // String

    /**
     * @param path string - The path to the file/folder that real, on disk, casing is desired for.
     * @param search string - A file/folder in the path to get the on disk casing for.
     * @returns string A string path/search combination or empty string if search is not in path.
     */
    static getRealPathCasing(path: string, search: string): string; // String

    /**
     * @param store string - The store ID for the product.
     * @param token string - The token for the product.
     * @param title string - The title of the product.
     * @param extension string - The extension of the meta file.
     * @returns string The relative metadata file path.
     * @since 4.9.4.31
     */
    static getRelativeProductMetafilePath(store: string, token: string, title: string, extension?: string): string; // String

    /**
     * @returns any[] A list of the folder names that are considered special, and thus handled in specific ways, in a Poser runtime.
     */
    static getSpecialPoserFolders(): any[]; // Array

    /**
     * @returns string An identifier for the top level DAZ Studio formats container.
     */
    static getStudioDirID(): string; // String

    /**
     * @returns any[] A list of the folder names excluded when building the native user-facing folder structure.
     */
    static getStudioExcludes(): any[]; // Array

    /**
     * @returns any[] The identifier for the virtual folder container within the top level DAZ Studio formats container.
     * @since 4.9.2.68
     */
    static getStudioVirtualDirID(): any[]; // Array

    /**
     * @param type string - The path/type to be normalized.
     * @param relative boolean - Whether or not this is a relative (or absolute) path.
     * @returns string A normalized version of type.
     */
    static normalizePath(type: string, relative?: boolean): string; // String

    /**
     * Saves user owned metadata to an XML file (or a series of XML files).
     * @param dirPath string - The path to save user metadata files in.
     * @param filePrefix string - The prefix for the filename sequence.
     * @returns DzError DZ_NO_ERROR on success, otherwise an error code.
     */
    static saveUserDBData(dirPath: string, filePrefix: string): DzError;

    /**
     * Sets the compatibility base for a URI.
     * @param uri string - The asset URI to set the compatibility base for.
     * @param id number - The 64-bit integer used to identify the compatibility base.
     * @param markAsVendor boolean - If true, the compatibility base is marked as being owned by a vendor.
     * @returns boolean true if the compatibility base is set, otherwise false.
     * @since 4.11.0.183
     */
    static setCompatibilityBaseID(uri: string, id: number, markAsVendor: boolean): boolean; // Boolean

    /**
     * Sets the compatibility base for a URI.
     * @param uri string - The asset URI to set the compatibility base for.
     * @param compatibilityBasePath string - The slash (“/”) delimited path of the compatibility base to set.
     * @param markAsVendor boolean - If true, the compatibility base is marked as being owned by a vendor.
     * @param create boolean - If true, creates the compatibility base if it does not already exist.
     * @returns boolean true if the compatibility base is set, otherwise false.
     * @since 4.11.0.183
     */
    static setCompatibilityBasePath(uri: string, compatibilityBasePath: string, markAsVendor: boolean, create?: boolean): boolean; // Boolean

    /**
     * Sets the metadata associated with a file.
     * @param filepath string - The path of the file to set the metadata on.
     * @param contentType string - The content type to set.
     * @param compatibleWith string - The compatibility base the asset is an add-on for.
     * @param category string - The category to put the asset in.
     * @param assetNode DzNode - The node to get the compatibility base from.
     * @param compatibilityBase string - The compatibility base to set; for add-ons to target.
     * @since 4.9.0.17
     */
    static setFileMetadata(filepath: string, contentType: string, compatibleWith: string, category: string, assetNode?: DzNode, compatibilityBase?: string): void;

    /* Methods */

    /**
     * @param filenames any[] - The list of relative file paths to find the minimum product set for.
     * @param products any[] - The list of products to limit the search for filenames to - can be expressed as GUID strings, DzProductAssetContainer instances, or DzScriptHandle instances that hold DzProductAssetContainer instances.
     * @returns Object A map consisting of a list of GUIDs (“product_guids”) for the products that represent the minimum set to satisfy the list of filenames specified, and a map of product GUIDs and the files each product respectively provides (“product_found_files”).
     * @since 4.16.1.33
     */
    buildMinimumProductSetForFiles(filenames: any[], products: any[]): Object;

    /**
     * @param filenames any[] - The list of relative file paths to find the minimum product set for.
     * @returns Object A map consisting of a list of GUIDs (“product_guids”) for the products that represent the minimum set to satisfy the list of filenames specified, a map of product GUIDs and the files each product respectively provides (“product_found_files”), and a list of the files specified in filenames that could not be associated with a product (“unknown”).
     * @since 4.16.1.33
     */
    buildMinimumProductSetForFiles(filenames: any[]): Object;

    /**
     * @returns boolean true if the currently connected Content Management Service (CMS) is of the type that can be started and stopped, otherwise false.
     */
    canStartAndStopCMS(): boolean; // Boolean

    /**
     * Checks for new metadata scripts within the RunOnce directories.
     */
    checkforNewMetadataScripts(): void;

    /**
     * Removes all groups from all assets.
     * @param notify boolean - If true, causes product and category containers to update.
     */
    clearAllGroupIDs(notify?: boolean): void;

    /**
     * Clears the metadata queue.
     */
    clearDBMetaFileQueue(): void;

    /**
     * Presents the user with a category path creation dialog.
     * @param paths string - The category path (if any) to set - separate multiple paths with commas.
     * @param settingsName string - The base name of the settings to store to/restore from. If set to an empty string (default), the default will be used.
     * @since 4.15.0.16
     */
    createCategoryPaths(paths: string, settingsName?: string): void;

    /**
     * Creates a compatibility base.
     * @param base string - The compatibility base to create.
     * @returns number An integer used to identify base.
     */
    createCompatibilityBase(base: string): number; // Number

    /**
     * Creates a new product.
     * @param name string - The name for the product - used if a product with the storeID and token specified does not already exist in the database to name the product.
     * @param storeID string - The identifier (e.g., “DAZ 3D”) of the store for the product. If the store does not exist in the database or this argument is an empty string (default), the “LOCAL USER” store will be used.
     * @param token string - The token (i.e., SKU) used to identify the product in the storeID store.
     * @returns DzProductAssetContainer The product named name, from store storeID, with the token token. If a product with the storeID and token already exists, a new product will not be created and the existing product will be returned instead.
     * @since 4.9.3.39
     */
    createProduct(name: string, storeID?: string, token?: string): DzProductAssetContainer;

    /**
     * Creates a new product from a list of assets.
     * @param assets any[] - The list of assets to create the product from.
     * @param name string - The name for the product. If empty (default), the user will be prompted to provide a name.
     * @returns DzProductAssetContainer
     * @since 4.9.3.41
     */
    createProductFromAssets(assets: any[], name?: string): DzProductAssetContainer;

    /**
     * Creates a new product from container and its children.
     * @param container DzAbstractAssetContainer - The asset container to create the product from.
     * @param name string - The name for the product. If empty (default), the user will be prompted to provide a name.
     * @returns DzProductAssetContainer
     * @since 4.9.3.39
     */
    createProductFromContainer(container: DzAbstractAssetContainer, name?: string): DzProductAssetContainer;

    /**
     * Attempts to create a store in the database.
     * @param storeID string - The identifier of the store (e.g., “DAZ 3D”) to create.
     * @param token string - The value within url to be replaced by a product's identifier (e.g., SKU) within that store when the product's final URL is constructed.
     * @param url string - The URL for the store.
     * @returns boolean true if the store is successfully created, otherwise false.
     */
    createStore(storeID: string, token: string, url: string): boolean; // Boolean

    /**
     * Creates a (folder/category/compatibility base) sub-container.
     * @param parentContainer DzAbstractAssetContainer - The container to create a sub-container on.
     * @param name string - The name of the sub-container to create. If set to an empty string (default), the user will be prompted.
     * @param settingsName string - The base name of the settings to store to/restore from. If set to an empty string (default), the default will be used.
     * @returns DzAbstractAssetContainer
     * @since 4.15.0.16
     */
    createSubContainer(parentContainer: DzAbstractAssetContainer, name?: string, settingsName?: string): DzAbstractAssetContainer;

    /**
     * Creates a content type.
     * @param type string - The content type to create.
     * @param defaultOpen boolean - If true, assets that the type is assigned to will be opened by default; the contents of the scene will be cleared prior to loading the asset. If false , assets that the type is assigned to will be merged by default; the asset will be added to the existing scene.
     * @returns number An integer used to identify type.
     */
    createType(type: string, defaultOpen: boolean): number; // Number

    /**
     * Causes the category identified by idPath to update.
     * @param idPath any[] - The id path of the category to update.
     */
    emitCategoryChanged(idPath: any[]): void;

    /**
     * @param fileName string - The short name of the file to find the asset path for.
     * @returns string If fileName can be found, the physical path of the asset on disk, otherwise an empty string.
     */
    findAssetPathFromShortFilename(fileName: string): string; // String

    /**
     * @param relativePath string - The relative path of a file to find assets for.
     * @param userFacing boolean - Whether or not the file is user-facing.
     * @param installed boolean - Whether or not the file is installed.
     * @returns any[] A list of assets that relativePath refers to.
     * @since 4.9.2.69
     */
    findAssetsForFile(relativePath: string, userFacing: boolean, installed: boolean): any[]; // Array

    /**
     * @param audience string
     * @returns number The id used to identify audience.
     */
    findAudienceID(audience: string): number; // Number

    /**
     * @param categoryPath string - The full path of the category to find.
     * @param isVendor boolean - If true, the category is marked as being owned by a vendor.
     * @param create boolean - If true, the category is created if it cannot be found.
     * @returns number A 64-bit integer used to identify the category (if any), otherwise -1.
     * @since 4.15.0.16
     */
    findCategoryID(categoryPath: string, isVendor: boolean, create?: boolean): number; // Number

    /**
     * Attempts to find a compatibility base, and potentially create it if it does not already exist.
     * @param base string - The compatibility base to find (or create).
     * @param create boolean - If true, the compatibility base is created if it cannot be found.
     * @returns number An integer used to identify base.
     */
    findCompatibilityBaseID(base: string, create?: boolean): number; // Number

    /**
     * @param guid string - The Globally Unique Identifier (GUID) of the product to find.
     * @returns DzProductAssetContainer The product with the globally unique identifier guid, otherwise null.
     * @since 4.9.2.69
     */
    findProductByGuid(guid: string): DzProductAssetContainer;

    /**
     * @param storeID string - The identifier of the store (e.g., “DAZ 3D”) for the product.
     * @param token string - The token (i.e., SKU) used to identify the product in the storeID store.
     * @returns DzProductAssetContainer The product from storeID store with the token token, otherwise null.
     * @since 4.9.3.39
     */
    findProductByStoreToken(storeID: string, token: string): DzProductAssetContainer;

    /**
     * @param name string - The name of the products to find.
     * @returns any[] A list of products (if any) that are named name.
     * @since 4.9.3.39
     */
    findProductsByName(name: string): any[]; // Array

    /**
     * @param relativePath string - The relative path of a file to find products that contain it.
     * @returns any[] A list of products that contain relativePath in their respective list of assets.
     * @since 4.8.1.73
     */
    findProductsForFile(relativePath: string): any[]; // Array

    /**
     * Attempts to find the identifier used to identify a content type.
     * @param type string - The content type to find.
     * @param create boolean - If true, the content type is created if it cannot be found.
     * @param defaultOpen boolean - If true, assets that the type is assigned to will be opened by default; the contents of the scene will be cleared prior to loading the asset. If false , assets that the type is assigned to will be merged by default; the asset will be added to the existing scene.
     * @returns number An integer used to identify type.
     */
    findTypeID(type: string, create?: boolean, defaultOpen?: boolean): number; // Number

    /**
     * @param id number - The unsigned 32-bit integer used to identify the audience.
     * @returns string The audience identified by id.
     */
    getAudience(id: number): string; // String

    /**
     * @returns any[] The list of available audiences.
     */
    getAudiences(): any[]; // Array

    /**
     * @returns DzCategoryAssetContainer A top-level container with child containers that match the hierarchy of categories in the content database.
     */
    getCategories(): DzCategoryAssetContainer;

    /**
     * @param includeHeader boolean - If true (default), the first list in the return value will contain descriptors for the values in all subsequent lists.
     * @param dataType MetadataTypes - The type of data to retrieve.
     * @returns any[] A two dimensional list of the raw data that defines categories.
     * @since 4.15.0.16
     */
    getCategoryData(includeHeader?: boolean, dataType?: MetadataTypes): any[]; // Array

    /**
     * @param id number - The 64-bit integer used to identify the category.
     * @returns string The full slash (“/”) delimited path of the category (if any), otherwise an empty string.
     * @since 4.9.3.11
     */
    getCategoryPath(id: number): string; // String

    /**
     * @param create boolean - If true, creates any folders in the returned path that do not currently exist.
     * @returns string The base path for the Content Management Service (CMS).
     * @since 4.11.0.248
     */
    getCMSBasePath(create?: boolean): string; // String

    /**
     * @returns Object A JSON object consisting of options for the currently connected Content Management Service (CMS).
     */
    getCMSOptions(): Object;

    /**
     * @returns number The port for communicating with the Content Management Service (CMS).
     * @since 4.11.0.248
     */
    getCMSPort(): number; // Number

    /**
     * @param id number - The integer used to identify the compatibility base.
     * @returns string The compatibility base identified by id.
     */
    getCompatibilityBase(id: number): string; // String

    /**
     * @param includeHeader boolean - If true (default), the first list in the return value will contain descriptors for the values in all subsequent lists.
     * @param baseType CompatibilityBaseTypes - The type of compatibility bases to retrieve.
     * @param dataType MetadataTypes - The type of data to retrieve.
     * @returns any[] A two dimensional list of the raw data that defines compatibility bases.
     * @since 4.15.0.16
     */
    getCompatibilityBaseData(includeHeader?: boolean, baseType?: CompatibilityBaseTypes, dataType?: MetadataTypes): any[]; // Array

    /**
     * @param includeFilters boolean - If true (default), child containers for filters (filter) will be included.
     * @returns DzCompatibilityBaseAssetContainer A top-level container (if the content database is active) with child containers that match the hierarchy of compatibility bases in the content database, otherwise null.
     * @since 4.11.0.94
     */
    getCompatibilityBases(includeFilters?: boolean): DzCompatibilityBaseAssetContainer;

    /**
     * Presents the user with a (folder/category/compatibility base) sub-container creation dialog.
     * @param title string - The container to create a sub-container for- only supports DzFolderAssetContainer, DzCompatibilityBaseAssetContainer, and DzCategoryAssetContainer.
     * @param placeHolder string - The text to display as a hint to the user. If set to an empty string (default), the default will be used.
     * @param settingsName string - The base name of the settings to store to/restore from. If set to an empty string (default), the default will be used.
     * @returns string
     * @since 4.15.0.16
     */
    getContainerName(title: string, placeHolder?: string, settingsName?: string): string; // String

    /**
     * @returns DzTopLevelAssetContainer A top-level container with all of the mapped native content directories.
     */
    getContentDirs(): DzTopLevelAssetContainer;

    /**
     * @returns string The Data Source Name (DSN) -i.e. “connection string”- for the PostgreSQL server if the server version is valid, otherwise an empty string.
     * @since 4.9.0.17
     */
    getDatabaseDsn(): string; // String

    /**
     * @returns string The path on disk where database files are located; for backup purposes.
     */
    getDatabaseFilePath(): string; // String

    /**
     * @returns any[] A list of metadata files queued for processing.
     */
    getDBMetaFileQueue(): any[]; // Array

    /**
     * @param prefix string - If non-empty, this value is used to replace the leading root “Default” category in the values returned by getRootCategoryStrings(), otherwise the return value will be the same as calling getRootCategoryStrings() directly.
     * @param append boolean - If true and root is not an empty string, the modified values are appended to the end of the getRootCategoryStrings() list - if root is an empty string, this parameter has no affect. If false (default) and is a non-empty string, only the modified values are returned.
     * @returns any[] A list of 'default' category paths.
     * @since 4.15.0.15
     */
    getDefaultCategoryPaths(prefix?: string, append?: boolean): any[]; // Array

    /**
     * @returns string The default base path for the Content Management Service (CMS).
     * @since 4.11.0.248
     */
    getDefaultCMSBasePath(): string; // String

    /**
     * @returns number The default port for communicating with the Content Management Service (CMS).
     * @since 4.11.0.248
     */
    getDefaultCMSPort(): number; // Number

    /**
     * @param assetPath string - The path of the asset to find the first category for.
     * @param preferredCategory string - The path of the category preferred if it exists and the asset at assetPath is assigned to it.
     * @param installed boolean - If true, assetPath is only tested against files that are installed. If false , assetPath is only tested against files that are not installed. (since 4.11.0.88)
     * @returns string The full path of the first category that the file at assetPath is assigned to.
     */
    getFirstCategory(assetPath: string, preferredCategory: string, installed?: boolean): string; // String

    /**
     * @returns boolean true if new products should be assigned to the “New” group, otherwise false.
     * @since 4.9.0.23
     */
    getGroupNewProductsAsNew(): boolean; // Boolean

    /**
     * @returns DzTopLevelAssetContainer A top-level container with all of the mapped import content directories.
     */
    getImportDirs(): DzTopLevelAssetContainer;

    /**
     * @returns number The maximum number of items returned by a file search.
     * @since 4.9.0.15
     */
    getMaxFileSearchResultSize(): number; // Number

    /**
     * @returns number The maximum number of items to show per page.
     */
    getNumMaxItemsPerPage(): number; // Number

    /**
     * @returns DzTopLevelAssetContainer A top-level container with all of the mapped Poser directories.
     */
    getPoserDirs(): DzTopLevelAssetContainer;

    /**
     * @returns DzTopLevelAssetContainer A top-level container with child containers for intermediate alpha-numeric organization of products by name. Each intermediate container then has its respective children for the products in the content database.
     */
    getProducts(): DzTopLevelAssetContainer;

    /**
     * Attempts to shorten absolutePath to a list of paths that are relative to one of the mapped content directories.
     * @param absolutePath string - The path to make relative.
     * @param useImportFolders boolean - If true, the mapped import folders will also be searched.
     * @returns any[] A list of relative paths to the file if one can be made, otherwise and empty list
     */
    getRelativePaths(absolutePath: string, useImportFolders: boolean): any[]; // Array

    /**
     * @returns any[] A list of root category paths.
     */
    getRootCategoryStrings(): any[]; // Array

    /**
     * @returns boolean true if hidden vendor categorizations are shown, otherwise false.
     * @since 4.9.3.4
     */
    getShowHiddenVendorCategorization(): boolean; // Boolean

    /**
     * @returns any[] A list of store identifiers.
     */
    getStoresIDs(): any[]; // Array

    /**
     * @param storeID string - The identifier of the store (e.g., “DAZ 3D”) to get the token for.
     * @returns string The token used in the URL for the storeID store, which is to be replaced by a product's identifier (e.g., SKU) within that store when the product's final URL is constructed.
     */
    getStoreToken(storeID: string): string; // String

    /**
     * @param storeID string
     * @returns string The URL for the storeID store.
     */
    getStoreUrl(storeID: string): string; // String

    /**
     * @param id number - The integer used to identify the content type.
     * @returns string The content type identified by id.
     */
    getType(id: number): string; // String

    /**
     * Performs a database lookup on a user-facing content file to get its content type.
     * @param path string - The path of the file to get the content type for.
     * @returns string The content type of the file if the file is in the content database and is user-facing, otherwise an empty string.
     */
    getTypeForContentFile(path: string): string; // String

    /**
     * Checks the given node for content type in its presentation (if any), falls back to a source file data item and performs a content database lookup on the path it specifies (if any), and finally falls back to the content file path of the node (if any) to find its content type.
     * @param node DzNode - The node in the scene to get the content type of.
     * @returns string The content type for the node (if any), otherwise an empty string.
     */
    getTypeForNode(node: DzNode): string; // String

    /**
     * @returns any[] A list of hierarchical, slash (“/”) delimited, content types
     */
    getTypes(): any[]; // Array

    /**
     * @param categoryPath string - The full path of the parent category to check.
     * @param name string - The name to check for uniqueness.
     * @returns string A unique name for the child category. If name is unique, the same value us returned. If categoryPath is invalid, an empty string is returned. If name is not unique, a dialog is
     * @since 4.15.0.16
     */
    getUniqueChildCategoryName(categoryPath: string, name: string): string; // String

    /**
     * @returns boolean true if the PostgreSQL server version is valid and the DSN is non-empty, otherwise false.
     * @since 4.9.0.17
     */
    haveDatabase(): boolean; // Boolean

    /**
     * Causes metadata files at absoluteProductPaths to be imported.
     * @param absoluteProductPaths any[] - The list of absolute paths to import product metadata from.
     * @param runSilent boolean - If true, the progress dialog will not be shown.
     * @param markAsVendor boolean - If true, the data is considered vendor owned.
     * @returns any[]
     */
    importMetadataFiles(absoluteProductPaths: any[], runSilent?: boolean, markAsVendor?: boolean): any[]; // Array

    /**
     * Installs the assets specified if a product they belong to can be found.
     * @param filenames any[] - The list of relative file names to install. It is the developer's responsibility to verify that the file names passed in are not already in a mapped content directory.
     * @param noPrompt boolean - If true, installation of any product(s) found begins immediately without prompting the user; this does not prevent progress from being reported. The default is false , which prompts the user and waits for a response.
     * @param productMsg string - The message to display above the installable products list. If this is an empty string (default), a default string will be used.
     * @param unknownMsg string - The message to display above the unknown files list. If this is an empty string (default), a default string will be used.
     * @returns Object A JSON object consisting of a list of any products that were found to contain the missing files, a list of the files that were found per product (since 4.16.1.32), a list of the files that were not found in any product, and a list of the products that were selected for installation.
     * @since 4.11.0.116
     */
    installMissingAssets(filenames: any[], noPrompt?: boolean, productMsg?: string, unknownMsg?: string): Object;

    /**
     * @param type string - The content type to test.
     * @returns boolean true if type is of the base type of Clothing, otherwise false.
     */
    isClothingType(type: string): boolean; // Boolean

    /**
     * @returns boolean true if the Content Management Service (CMS) is currently connected, otherwise false.
     */
    isConnectedToCMS(): boolean; // Boolean

    /**
     * @param type string - The content type to test.
     * @returns boolean true if type is of the base type of Figure, otherwise false.
     */
    isFigureType(type: string): boolean; // Boolean

    /**
     * @param type string - The content type to test.
     * @returns boolean true if type is of a following type, otherwise false.
     */
    isFollowingType(type: string): boolean; // Boolean

    /**
     * @param type string - The content type to test.
     * @returns boolean true if type is of the base type of Hair, otherwise false.
     */
    isHairType(type: string): boolean; // Boolean

    /**
     * @param type string - The content type to test.
     * @returns boolean true if type is of a type that needs a base figure, otherwise false.
     */
    isNeedsBaseFigureType(type: string): boolean; // Boolean

    /**
     * @param type string - The content type to test.
     * @returns boolean true if type is a Preset for a Figure, otherwise false.
     */
    isPresetForFigureType(type: string): boolean; // Boolean

    /**
     * @param type string - The content type to test.
     * @returns boolean true if type is of the base type of Preset, otherwise false.
     */
    isPresetType(type: string): boolean; // Boolean

    /**
     * @param type string - The content type to test.
     * @returns boolean true if type is of the base type of Prop, otherwise false.
     */
    isPropType(type: string): boolean; // Boolean

    /**
     * @param type string - The content type to test.
     * @returns boolean true if type is of a replaceable type, otherwise false.
     */
    isReplaceableType(type: string): boolean; // Boolean

    /**
     * @returns boolean true if the connected PostgreSQL database is currently being reset, otherwise false.
     * @since 4.9.0.17
     */
    isResettingDatabase(): boolean; // Boolean

    /**
     * 4.9.3.71
     * @returns boolean true if the database is currently synchronizing, otherwise false.
     */
    isSynchronizing(): boolean; // Boolean

    /**
     * Signals that categories need to be updated.
     */
    markCategoriesChanged(): void;

    /**
     * Signals that products need to be updated.
     */
    markProductsChanged(): void;

    /**
     * Causes the metadata file at productRelativePath to be processed and category containers to update.
     * @param productRelativePath string - The relative product path to import metadata from.
     * @param runSilent boolean - If true, the progress dialog will not be shown.
     * @param markAsVendor boolean - If true, the data is considered vendor owned.
     * @param groupAsNew boolean - If true, the product/assets are grouped as “New”.
     * @returns any[]
     */
    processDBMetaFile(productRelativePath: string, runSilent?: boolean, markAsVendor?: boolean, groupAsNew?: boolean): any[]; // Array

    /**
     * Causes the metadata file at productRelativePath to be processed, without causing category containers to update.
     * @param productRelativePath string - The relative product path to import metadata from.
     * @param runSilent boolean - If true, the progress dialog will not be shown.
     * @param markAsVendor boolean - If true, the data is considered vendor owned.
     * @param groupAsNew boolean - If true, the assets are grouped as “New”.
     * @returns any[]
     */
    processDBMetaFileNoEmit(productRelativePath: string, runSilent?: boolean, markAsVendor?: boolean, groupAsNew?: boolean): any[]; // Array

    /**
     * If metadata files are queued, causes the metadata import dialog to be displayed and allows the user to select which products to process metadata for, then starts the import process on the selected products.
     */
    processDBMetaFileQueue(): void;

    /**
     * Adds the file at productRelativePath to the metadata queue.
     * @param productRelativePath string
     */
    queueDBMetaFile(productRelativePath: string): void;

    /**
     * Causes the internal list of root categories to be rebuilt.
     */
    refreshCategoryRoots(): void;

    /**
     * Causes the internal list of stores to be rebuilt.
     */
    refreshStores(): void;

    /**
     * Causes the internal list of content types to be rebuilt
     */
    refreshTypes(): void;

    /**
     * Causes all *.dsx metadata files in the “./Runtime/Support” folder of each mapped native and Poser content directory to be queued, and then imported.
     */
    reimportDBMetaFiles(): void;

    /**
     * Removes assets in list that have been orphaned (no longer exist) from the database.
     * @param list any[] - The list of DzAsset to check whether the files still exist.
     * @since 4.9.0.17
     */
    removeOrphanedAssetReferences(list: any[]): void;

    /**
     * Attempts to remove a store from the database.
     * @param storeID string - The identifier of the store (e.g., “DAZ 3D”) to remove.
     * @returns boolean true if the store is successfully removed, otherwise false.
     * @since 4.9.1.24
     */
    removeStore(storeID: string): boolean; // Boolean

    /**
     * Triggers the connected PostgreSQL server to reset (delete) the current database and re-establish the default content types, compatibility bases, and categories.
     * @since 4.9.0.17
     */
    resetDatabase(): void;

    /**
     * Performs a user-facing file scan, ultimately mapping any directories found to contain compatible content.
     * @param options number - A bitwise OR of the options to use for filtering the file scan.
     * @param assignToGroup boolean - If true, groups any found files as “New”.
     * @param addToCategory boolean - If true, found files are assigned to the “Scan Results” category.
     * @param onlyNewToCategory boolean - If true, only “new” files are assigned to the “Scan Results” category.
     */
    scanFiles(options: number, assignToGroup: boolean, addToCategory: boolean, onlyNewToCategory: boolean): void;

    /**
     * Performs a user-facing file search on the mapped content directories.
     * @param filename string - The name of the file to search for.
     * @param options number - A bitwise OR of the options to use for filtering the results.
     * @returns DzSearchContainer A container consisting of DzAsset instances for any files found during the search.
     */
    searchFiles(filename: string, options: number): DzSearchContainer;

    /**
     * Performs a user-facing asset search on the content database, where the results are confined to those that indicate they are compatible with the compatibility base of the specified asset.
     * @param asset DzAsset - The context asset; the asset to find addons for.
     * @param filterText string - The text to use for filtering the results.
     * @param categories any[] - A list of category paths to use for filtering the results.
     * @param sorting SortType - The sorting filter index to use for ordering the results.
    
     0 = None,
    
     1 = Name,
    
     2 = Date Purchased,
    
     3 = Date Installed,
    
     4 = Date Created,
    
     5 = Release Date,
    
     6 = Last Update,
    
     7 = Group ID,
    
     8 = Product ID (SKU),
    
     For Descending add 0x80000000 to the value
     * @returns DzSearchContainer A container consisting of any DzAsset instances found during the search.
     * @since 4.9.0.32
     */
    searchForAssetAddOns(asset: DzAsset, filterText: string, categories: any[], sorting: SortType): DzSearchContainer;

    /**
     * Performs a user-facing asset search on the content database.
     * @param filterText string - The text to use for filtering the results.
     * @param categories any[] - A list of category paths to use for filtering the results.
     * @param compatibilityBases any[] - A list of compatibility bases to use for filtering the results.
     * @param contentTypes any[] - A list of content types to use for filtering the results.
     * @param sorting SortType - The sorting filter index to use for ordering the results.
    
     0 = None,
    
     1 = Name,
    
     2 = Date Purchased,
    
     3 = Date Installed,
    
     4 = Date Created,
    
     5 = Release Date,
    
     6 = Last Update,
    
     7 = Group ID,
    
     8 = Product ID (SKU),
    
     For Descending add 0x80000000 to the value
     * @returns DzSearchContainer A container consisting of any DzAsset instances found during the search.
     * @since 4.9.0.32
     */
    searchForAssets(filterText: string, categories: any[], compatibilityBases: any[], contentTypes: any[], sorting: SortType): DzSearchContainer;

    /**
     * Performs a user-facing asset search on the content database.
     * @param keywords string - The keywords to use for filtering the results.
     * @param options number - A bitwise OR of the options to use for filtering the results.
     * @param sorting SortType - The sorting filter index to use for ordering the results.
    
     0 = None,
    
     1 = Name,
    
     2 = Date Purchased,
    
     3 = Date Installed,
    
     4 = Date Created,
    
     5 = Release Date,
    
     6 = Last Update,
    
     7 = Group ID,
    
     8 = Product ID (SKU),
    
     For Descending add 0x80000000 to the value
     * @returns DzSearchContainer A container consisting of any DzAsset instances found during the search.
     * @since 4.9.0.32
     */
    searchForAssetsByKeywords(keywords: string, options: number, sorting: SortType): DzSearchContainer;

    /**
     * @param categoryPath string - The full path of the category to search for assets.
     * @param userFacing boolean - Whether or not to limit the search to user-facing assets. (since 4.9.3.56)
     * @param installed boolean - Whether or not to limit the search to installed assets. (since 4.9.3.56)
     * @returns DzSearchContainer A search container containing the assets matching the criteria specified.
     * @since 4.9.1.17
     */
    searchForAssetsInCategory(categoryPath: string, userFacing?: boolean, installed?: boolean): DzSearchContainer;

    /**
     * Performs a user-facing asset search on the content database, where the results are confined to those that indicate they are the compatibility base of the specified asset.
     * @param asset DzAsset - The context asset; the asset to find targets for.
     * @param filterText string - The text to use for filtering the results.
     * @param categories any[] - A list of category paths to use for filtering the results.
     * @param sorting SortType - The sorting filter index to use for ordering the results.
    
     0 = None,
    
     1 = Name,
    
     2 = Date Purchased,
    
     3 = Date Installed,
    
     4 = Date Created,
    
     5 = Release Date,
    
     6 = Last Update,
    
     7 = Group ID,
    
     8 = Product ID (SKU),
    
     For Descending add 0x80000000 to the value
     * @returns DzSearchContainer A container consisting of any DzAsset instances found during the search.
     * @since 4.9.0.32
     */
    searchForAssetTargets(asset: DzAsset, filterText: string, categories: any[], sorting: SortType): DzSearchContainer;

    /**
     * Performs a user-facing asset search on the content database, where the results are confined to a specified product.
     * @param product DzProductAssetContainer - The context product; the product to filter results by.
     * @param filterText string - The text to use for filtering the results.
     * @param categories any[] - A list of category paths to use for filtering the results.
     * @param compatibilityBases any[] - A list of compatibility bases to use for filtering the results.
     * @param contentTypes any[] - A list of content types to use for filtering the results.
     * @param sorting SortType - The sorting filter index to use for ordering the results.
    
     0 = None,
    
     1 = Name,
    
     2 = Date Purchased,
    
     3 = Date Installed,
    
     4 = Date Created,
    
     5 = Release Date,
    
     6 = Last Update,
    
     7 = Group ID,
    
     8 = Product ID (SKU),
    
     For Descending add 0x80000000 to the value
     * @returns DzSearchContainer A container consisting of any DzAsset instances found during the search.
     * @since 4.9.0.32
     */
    searchForProductAssets(product: DzProductAssetContainer, filterText: string, categories: any[], compatibilityBases: any[], contentTypes: any[], sorting: SortType): DzSearchContainer;

    /**
     * @param filterText string - The text to use for filtering the results.
     * @param categories any[] - A list of category paths to use for filtering the results.
     * @param compatibilityBases any[] - A list of compatibility bases to use for filtering the results.
     * @param contentTypes any[] - A list of content types to use for filtering the results.
     * @param installStateFlags ProductInstallStates - The install state flags to use for filtering the results.
    
     None = 0x0,
    
     Installed = 0x1,
    
     NotInstalled = 0x2,
    
     Damaged = 0x4,
    
     NeedsUpdate = 0x8,
    
     Pending = 0x10,
    
     Any = Installed | NotInstalled | Damaged | NeedsUpdate | Pending
     * @param sorting SortType - The sorting filter index to use for ordering the results.
    
     0 = None,
    
     1 = Name,
    
     2 = Date Purchased,
    
     3 = Date Installed,
    
     4 = Date Created,
    
     5 = Release Date,
    
     6 = Last Update,
    
     7 = Group ID,
    
     8 = Product ID (SKU),
    
     For Descending add 0x80000000 to the value
     * @returns DzProductHolderContainer An asset container where child containers are the DzProductAssetContainer instances found during the search. DzTopLevelAssetContainer::getState() should be called, in a while loop, on the return value and compared for equality with the DzTopLevelAssetContainer::csBusy state. While the state is busy, results of the search are still being added.
     * @since 4.9.0.32
     */
    searchForProducts(filterText: string, categories: any[], compatibilityBases: any[], contentTypes: any[], installStateFlags: ProductInstallStates, sorting: SortType): DzProductHolderContainer;

    /**
     * Presents the user with a category selection dialog.
     * @param multiSelect boolean - Whether or not to allow multiple selection.
     * @param startWith any[] - A list of the category paths (if any) to start with. If multiSelect is false, the first element in the list is used.
     * @param title string - The text to display for the title of the dialog. If set to an empty string (default), the default title for the dialog will be used.
     * @param settingsName string - The base name of the settings to store to/restore from. If set to an empty string (default), the default will be used.
     * @returns any[] A list of the selected category path(s).
     * @since 4.15.0.16
     */
    selectCategoryPaths(multiSelect?: boolean, startWith?: any[], title?: string, settingsName?: string): any[]; // Array

    /**
     * Presents the user with a compatibility base selection dialog.
     * @param showFilters boolean - Whether or not to include compatibility filters.
     * @param multiSelect boolean - Whether or not to allow multiple selection.
     * @param startWith any[] - A list of the compatibility paths (if any) to start with. If multiSelect is false, the first element in the list is used.
     * @param title string - The text to display for the title of the dialog. If set to an empty string (default), the default title for the dialog will be used.
     * @param settingsName string - The base name of the settings to store to/restore from. If set to an empty string (default), the default will be used.
     * @returns any[] A list of the selected compatibility base(s).
     * @since 4.15.0.16
     */
    selectCompatibilityBasePaths(showFilters?: boolean, multiSelect?: boolean, startWith?: any[], title?: string, settingsName?: string): any[]; // Array

    /**
     * Sets the options for the Content Management Service (CMS), if it is of the type that can accept options.
     * @param clusterDirectory string - The path of the directory that contains the database files.
     * @param port number - The port number to use for connecting to the database server.
     */
    setCMSOptions(clusterDirectory: string, port: number): void;

    /**
     * @param onOff boolean - If true, new products will be assigned to the “New” group.
     * @since 4.9.0.23
     */
    setGroupNewProductsAsNew(onOff: boolean): void;

    /**
     * @param maxNum number - The maximum number of items to return from a standard file search.
     * @since 4.9.0.15
     */
    setMaxFileSearchResultSize(maxNum: number): void;

    /**
     * @param maxNum number - The maximum number of items to show on a page in the content view
     */
    setMaxItemsPerPage(maxNum: number): void;

    /**
     * Sets the group identifier on products and/or files, for a list of products.
     * @param guids any[] - A list of guids for the products to set the group identifier on.
     * @param groupId number - The group identifier to set.
     * @param groupProduct boolean - If true, sets the group identifier on the product.
     * @param groupFiles boolean - If true, sets the group identifier on the user-facing files in the product.
     * @since 4.9.0.25
     */
    setProductGroupIDs(guids: any[], groupId: number, groupProduct?: boolean, groupFiles?: boolean): void;

    /**
     * @param onOff boolean - Whether or not to show tool tips on assets.
     */
    setShowAssetToolTip(onOff: boolean): void;

    /**
     * @param onOff boolean - Whether or not to show extensions on assets.
     */
    setShowExtensions(onOff: boolean): void;

    /**
     * Sets whether or not hidden vendor categorizations are shown.
     * @param shown boolean - If true, hidden vendor categorizations are shown.
     * @since 4.9.3.4
     */
    setShowHiddenVendorCategorization(shown: boolean): void;

    /**
     * @param onOff boolean - Whether or not to show large icons.
     */
    setShowLargeIcons(onOff: boolean): void;

    /**
     * @returns boolean true if showing asset tool tips, otherwise false.
     */
    showAssetToolTip(): boolean; // Boolean

    /**
     * Causes the Content DB Editor to be displayed, allowing the user to view/edit metadata for products and/or assets all within a centralized dialog.
     * @param assetContainer DzAbstractAssetContainer - The asset container to load into the editor. If the asset container is a DzProductAssetContainer, the dialog will display two pages: one for the product specific data, and one for the asset specific data. If the asset container is any other type, only the page for the asset specific data is displayed.
     * @returns boolean true if the dialog is accepted, otherwise false.
     */
    showDatabaseEditor(assetContainer: DzAbstractAssetContainer): boolean; // Boolean

    /**
     * @returns boolean true if showing asset file extensions, otherwise false.
     */
    showExtensions(): boolean; // Boolean

    /**
     * @returns boolean true if showing large asset icons, otherwise false.
     */
    showLargeIcons(): boolean; // Boolean

    /**
     * Executes a script named after the store associated with product, in the ./resources/stores directory. A single anonymous JSON object is passed to the script, which can be retrieved using the global “getArguments()” function. The properties on the Object consist of values stored in the content database.
     * @param product DzProductAssetContainer - The product to show more information for.
     * @since 4.8.1.70
     */
    showMoreProductInfo(product: DzProductAssetContainer): void;

    /**
     * Starts the Content Management Service (CMS), if it is not already running.
     */
    startCMS(): void;

    /**
     * Stops all searches that were started by any of the search* methods on DzAssetMgr.
     */
    stopAllSearches(): void;

    /**
     * Stops the Content Management Service (CMS), if it is running and is of the type that can be stopped.
     * @param mode number - The mode to use to stop the service.
     * @param wait boolean - Whether or not to wait for the CMS to stop before continuing.
     * @param timeout number - The number of seconds to wait for the service to stop before continuing.
     */
    stopCMS(mode: number, wait: boolean, timeout?: number): void;

    /**
     * Stops any searches that were started by DzAssetMgr::scanFiles().
     */
    stopFileScan(): void;

    /**
     * Stops any searches that were started by DzAssetMgr::searchFiles().
     */
    stopFileSearch(): void;

    /**
     * Stops any searches that were started by DzAssetMgr::searchForAssetAddOns().
     */
    stopSearchForAssetAddOns(): void;

    /**
     * Stops any searches that were started by DzAssetMgr::searchForAssets(), DzAssetMgr::searchForAssetsByKeywords() or DzAssetMgr::searchForProductAssets().
     */
    stopSearchForAssets(): void;

    /**
     * Stops any searches that were started by DzAssetMgr::searchForAssetTargets().
     */
    stopSearchForAssetTargets(): void;

    /**
     * Stops any searches that were started by DzAssetMgr::searchForProducts().
     */
    stopSearchForProducts(): void;

    /**
     * Triggers an update to asset containers within the Categories top-level container.
     * @since 4.8.1.65
     */
    updateCategoryContainers(): void;

    /**
     * Triggers an update to asset containers within the native formats top-level container.
     * @since 4.8.1.65
     */
    updateContentContainers(): void;

    /**
     * Triggers an update to asset containers within the folder based top-level containers.
     * @since 4.8.1.65
     */
    updateFolderBasedContainers(): void;

    /**
     * Triggers an update to asset containers within the other import formats top-level container.
     * @since 4.8.1.65
     */
    updateImportContainers(): void;

    /**
     * Triggers an update to asset containers within the Poser formats top-level container.
     * @since 4.8.1.65
     */
    updatePoserContainers(): void;

    /**
     * Triggers an update to asset containers within the Products top-level container.
     */
    updateProductContainers(): void;

    /**
     * Reclaims space in the database previously occupied by deleted or updated data.
     * @returns boolean true if the operation was successful, otherwise false.
     */
    vacuumDatabase(): boolean; // Boolean

    /* Signals */

    /**
     * Emitted when the base paths list has changed.
     */
    basePathsChanged: ISignal<void>;

    /**
     * Emitted when a category has been changed.
     * @param idPath any[] - The list of ids leading to the changed category.
     */
    categoryUpdate: ISignal<any[]>;

    /**
     * Emitted when the Data Source Name (DSN) for the Content Management Service (CMS) has changed.
     */
    cmsDSNChanged: ISignal<void>;

    /**
     * Emitted when the Content Management Service (CMS) has started.
     */
    cmsStarted: ISignal<void>;

    /**
     * Emitted when the Content Management Service (CMS) has stopped.
     */
    cmsStopped: ISignal<void>;

    /**
     * Emitted when the compatibility base list has changed.
     */
    compatibilityBaseListChanged: ISignal<void>;

    /**
     * Emitted when a container has been changed.
     * @param idPath any[] - The list of ids leading to the changed container.
     */
    containerUpdate: ISignal<any[]>;

    /**
     * Emitted when getGroupNewProductsAsNew() will return a new value.
     */
    groupNewProductsAsNewChanged: ISignal<void>;

    /**
     * Emitted when itemsPerPage() will return a new value.
     * @param newPerPage number - The number of items to show per page.
     */
    itemsPerPageChanged: ISignal<number>;

    /**
     * Emitted when the maximum file search result size has changed.
     * @param maxFileSearchResultSize number - The new maximum.
     */
    maxFileSearchResultSizeChanged: ISignal<number>;

    /**
     * Emitted when a product has been created.
     * @param guid string - The Globally Unique Identifier (GUID) for the created product.
     */
    productCreated: ISignal<string>;

    /**
     * Emitted when showAssetToolTipChanged() will return a new value.
     */
    showAssetToolTipChanged: ISignal<void>;

    /**
     * Emitted when showExtensions() will return a new value.
     */
    showExtensionsChanged: ISignal<void>;

    /**
     * Emitted when getShowHiddenVendorCategorization() will return a new value.
     */
    showHiddenVendorCategorizationChanged: ISignal<void>;

    /**
     * Emitted when showLargeIcons() will return a new value.
     */
    showLargeIconsChanged: ISignal<void>;

    /**
     * Emitted when the store list has changed.
     */
    storeListChanged: ISignal<void>;

    /**
     * Emitted when the type list has changed.
     */
    typeListChanged: ISignal<void>;

    /**
     * Emitted when the user interface is about to perform a database query.
     * @param sender QObject - The UI component that invoked the query.
     * @param text string - The search text entered by the user.
     * @param categories any[] - The categories to limit the query to.
     * @param compatibilityBases any[] - The compatibility bases to limit the query to.
     * @param contentTypes any[] - The content types to limit the query to.
     */
    uiAboutToSearch: ISignal<QObject, string, any[], any[], any[]>;

    /* Undocumented Augment Members */

    /** @undocumented */
    markFoldersContainingNewContentChanged(): void;

    /** @undocumented */
    getMetaHost(): QString;

    /** @undocumented */
    setCompatibilityBase(uri: QString, compatibility: DzDBCompatibilityBaseTable, isVendor: boolean): boolean;

    /** @undocumented */
    setTopLevelPoserNameOnContainer(name: QString, cont: DzFolderAssetContainer): void;

    /** @undocumented */
    updateUserMetadata(): void;

    /** @undocumented */
    getMaxChunkSize(): number;

    /** @undocumented */
    getMarkFoldersContainingNewContent(): boolean;

    /** @undocumented */
    setMarkFoldersContainingNewContent(onOff: boolean): void;

    /** @undocumented */
    setMaxChunkSize(maxSize: number): void;

    /** @undocumented */
    findTypeRowID(): any; // TODO ;

    /** @undocumented */
    findTypeRowID(): any; // TODO ;

    /** @undocumented */
    findTypeRowID(): any; // TODO ;

    /** @undocumented */
    createTypeWithRowID(): any; // TODO ;

    /** @undocumented */
    getTypeByRowID(): any; // TODO ;

    /** @undocumented */
    findCompatibilityBaseTable(plat: QString, create: boolean): DzDBCompatibilityBaseTable;

    /** @undocumented */
    findCompatibilityBaseTable(plat: QString, create: boolean): DzDBCompatibilityBaseTable;

    /** @undocumented */
    findCompatibilityBaseRowID(): any; // TODO ;

    /** @undocumented */
    findCompatibilityBaseRowID(): any; // TODO ;

    /** @undocumented */
    createCompatibilityBaseWithRowID(): any; // TODO ;

    /** @undocumented */
    getCompatibilityBaseByRowID(): any; // TODO ;

    /** @undocumented */
    refreshBasePaths(): void;

    /** @undocumented */
    getBasePaths(): String[];

    /** @undocumented */
    findBasePathID(basePath: QString, create: boolean): number;

    /** @undocumented */
    findBasePathID(basePath: QString, create: boolean): number;

    /** @undocumented */
    createBasePath(basePath: QString): number;

    /** @undocumented */
    getBasePath(id: number): QString;

    /** @undocumented */
    removeAndCleanBasePath(id: number): void;

    /** @undocumented */
    findBasePathRowID(): any; // TODO ;

    /** @undocumented */
    findBasePathRowID(): any; // TODO ;

    /** @undocumented */
    createBasePathWithRowID(): any; // TODO ;

    /** @undocumented */
    getBasePathByRowID(): any; // TODO ;

    /** @undocumented */
    removeAndCleanBasePathByRowID(): any; // TODO ;

    /** @undocumented */
    getUnMappedBasePaths(): String[];

    /** @undocumented */
    stopDBSearch(): void;

    /** @undocumented */
    stopProductSyncThread(): void;

    /** @undocumented */
    stopSearchForFileAssociations(): void;

    /** @undocumented */
    stopStoreSearch(): void;

    /** @undocumented */
    searchDB(str: QString, opts: number, finishObj: QObject): DzSearchContainerPtr;

    /** @undocumented */
    searchDB(str: QString, categories: String[], compatibilityBases: String[]): DzSearchContainerPtr;

    /** @undocumented */
    searchDB(str: QString, opts: number, finishObj: QObject): DzSearchContainerPtr;

    /** @undocumented */
    searchDB(str: QString, categories: String[], compatibilityBases: String[]): DzSearchContainerPtr;

    /** @undocumented */
    searchDB(str: QString, opts: number, finishObj: QObject): DzSearchContainerPtr;

    /** @undocumented */
    searchDB(str: QString, categories: String[], compatibilityBases: String[]): DzSearchContainerPtr;

    /** @undocumented */
    searchDB(str: QString, opts: number, finishObj: QObject): DzSearchContainerPtr;

    /** @undocumented */
    searchDB(str: QString, categories: String[], compatibilityBases: String[]): DzSearchContainerPtr;

    /** @undocumented */
    searchDB(str: QString, opts: number, finishObj: QObject): DzSearchContainerPtr;

    /** @undocumented */
    searchDB(str: QString, categories: String[], compatibilityBases: String[]): DzSearchContainerPtr;

    /** @undocumented */
    searchDB(str: QString, opts: number, finishObj: QObject): DzSearchContainerPtr;

    /** @undocumented */
    searchDB(str: QString, categories: String[], compatibilityBases: String[]): DzSearchContainerPtr;

    /** @undocumented */
    searchDB(str: QString, opts: number, finishObj: QObject): DzSearchContainerPtr;

    /** @undocumented */
    searchDB(str: QString, categories: String[], compatibilityBases: String[]): DzSearchContainerPtr;

    /** @undocumented */
    productSearchDB(str: QString, categories: String[]): DzProductHolderContainerPtr;

    /** @undocumented */
    productSearchDB(str: QString, categories: String[]): DzProductHolderContainerPtr;

    /** @undocumented */
    productSearchDB(str: QString, categories: String[]): DzProductHolderContainerPtr;

    /** @undocumented */
    storeSearch(str: QString, types: String[]): DzProductHolderContainerPtr;

    /** @undocumented */
    storeSearch(str: QString, types: String[]): DzProductHolderContainerPtr;

    /** @undocumented */
    storeSearch(str: QString, types: String[]): DzProductHolderContainerPtr;

    /** @undocumented */
    markAllContentSeen(notify: boolean): void;

    /** @undocumented */
    markAllContentSeen(notify: boolean): void;

    /** @undocumented */
    syncFileMetadata(relativeFilePaths: String[], prepend: boolean): void;

    /** @undocumented */
    syncFileMetadata(relativeFilePaths: String[], prepend: boolean): void;

    /** @undocumented */
    prependToMetadataSyncList(productGuid: QString): void;

    /** @undocumented */
    prependToMetadataSyncList(productGuidList: String[]): void;

    /** @undocumented */
    prependToMetadataSyncList(productGuid: QString): void;

    /** @undocumented */
    prependToMetadataSyncList(productGuidList: String[]): void;

    /** @undocumented */
    processSyncList(): void;

    /** @undocumented */
    getBaseAndRelativePath(absolutePath: QString, rPath: QString, basePath: QString): void;

    /** @undocumented */
    findCategoryAndAssetFromShortFilename(): any; // TODO ;

    /** @undocumented */
    convertFromValentina(): any; // TODO ;
}
