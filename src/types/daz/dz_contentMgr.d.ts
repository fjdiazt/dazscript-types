/**
 * Manager responsible for folders and files associated with “content.”.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/contentmgr_dz
 */
declare class DzContentMgr extends DzBase {

    /* Properties */

    /**
     * Holds whether or not the content manager automatically refreshes itself.
     */
    autoRefresh: boolean; // Boolean

    /**
     * Holds the maximum length of the File > Open Recent submenu, in the main menu bar.
     */
    maxRecentFiles: number; // Number

    /**
     * Holds the path of the scene that will load when the scene is cleared (if any).
     * @since 4.9.3.68
     */
    newScene: string; // String

    /**
     * Holds whether or not the built-in content is shown in the content panes.
     */
    showBuiltInContent: boolean; // Boolean

    /**
     * Holds the path of the scene that will load on startup (if any).
     */
    startupScene: string; // String

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of DirectoryTypes.
     */
    static NativeDirs: number;

    /**
     * DAZ enum member of DirectoryTypes.
     */
    static PoserDirs: number;

    /**
     * DAZ enum member of DirectoryTypes.
     */
    static ImportDirs: number;

    /**
     * DAZ enum member of DirectoryTypes.
     */
    static BuiltInDirs: number;

    /**
     * DAZ enum member of DirectoryTypes.
     */
    static MDLDirs: number;

    /**
     * DAZ enum member of DirectoryTypes.
     */
    static CloudDB: number;

    /**
     * DAZ enum member of DirectoryTypes.
     */
    static CloudDir: number;

    /**
     * DAZ enum member of DirectoryTypes.
     */
    static NativeAndBuiltInDirs: number;

    /**
     * DAZ enum member of DirectoryTypes.
     */
    static CloudNativeAndBuiltInDirs: number;

    /**
     * DAZ enum member of DirectoryTypes.
     */
    static AllLocalNonCloudDirs: number;

    /**
     * DAZ enum member of DirectoryTypes.
     */
    static AllLocalDirs: number;

    /**
     * DAZ enum member of DirectoryTypes.
     */
    static AllDirs: number;

    /**
     * DAZ enum member of DirectoryTypes.
     */
    static AllDirsAndCloud: number;

    /* Static Methods */

    /**
     * @returns string Prefix where cloud places installed products.
     * @since 4.9.0.46
     */
    static getCloudPathPrefix(): string; // String

    /**
     * Checks the given node for a source file data item, and returns the path of the source file if one is found.
     * @param node DzNode - The scene node to get the source file of.
     * @returns string The path of the source file for the node if the node contains a source file data item, otherwise an empty string.
     */
    static getContentPath(node: DzNode): string; // String

    /* Methods */

    /**
     * Adds a native content directory to the list.
     * @param directory string - The path of the native content directory to add.
     * @param saveSetting boolean - If true, causes the native content directory mappings to be saved immediately instead of when the application is closed.
     */
    addContentDirectory(directory: string, saveSetting?: boolean): void;

    /**
     * Adds an import directory to the list.
     * @param directory string - The name of the directory to add.
     * @param saveSetting boolean - If true, causes the Import directory mappings to be saved immediately instead of when the application is closed.
     */
    addImportDirectory(directory: string, saveSetting?: boolean): void;

    /**
     * Adds a directory where MDL files can reside to the list.
     * @param directory string - The name of the directory to add.
     * @param saveSetting boolean - If true, causes the MDL directory mappings to be saved immediately instead of when the application is closed.
     * @since 4.8.0.23
     */
    addMDLDirectory(directory: string, saveSetting?: boolean): void;

    /**
     * Adds a Poser import content directory to the list.
     * @param directory string - The Poser content directory to add.
     * @param saveSetting boolean - If true, causes the Poser directory mappings to be saved immediately instead of when the application is closed.
     */
    addPoserDirectory(directory: string, saveSetting?: boolean): void;

    /**
     * Adds a file to the list of recent open files.
     * @param filename string - The path of the file to add.
     */
    addRecentFile(filename: string): void;

    /**
     * Clears the list of recent open files.
     */
    clearRecentFileList(): void;

    /**
     * Attempts to locate dirPath among the mapped native content directories.
     * @param dirPath string - The directory path to locate.
     * @returns boolean true if the directory is mapped as a native content directory, otherwise false.
     * @since 4.5.0.124
     */
    contentDirectoryIsMapped(dirPath: string): boolean; // Boolean

    /**
     * Displays a dialog to the user to perform a Poser content search on the local machine.
     * @returns boolean true if the user accepted and a search was performed, otherwise false.
     */
    doContentSearch(): boolean; // Boolean

    /**
     * Causes the content manager to check the number of mapped content directories, and display a warning to the user if it is excessive.
     */
    doDirNumCheck(): void;

    /**
     * Notifies the content manager that a new content file has been saved.
     * @param filename string
     */
    fileCreated(filename: string): void;

    /**
     * Given an absolute path, this method traverses the content directories and attempts to find the base (mapped) folder.
     * @param dirTypes number - Bitwise OR of flags for which directory types to search.
     * @param path string - The absolute path.
     * @returns DzContentFolder The given content folder if successful, otherwise NULL.
     * @since 4.8.1.51
     */
    findBaseDirectory(dirTypes: number, path: string): DzContentFolder;

    /**
     * Given an absolute path, this method traverses the content directories and attempts to find the base (mapped) folder.
     * @param path string - The absolute path.
     * @param useImportFolders boolean - If true, the import folders will also be searched.
     * @returns DzContentFolder The given content folder if successful, otherwise NULL.
     */
    findBaseDirectory(path: string, useImportFolders: boolean): DzContentFolder;

    /**
     * Given a partial path (a file path that is relative to a content directory) this function traverses all folders of the specified mapped directory types in the following order (CloudDB, CloudDir, NativeDirs, PoserDirs, ImportDirs, MDLDirs, BuiltInDirs)
     * @param partialPath string - The relative path to the file to find.
     * @param dirTypes number - Bitwise OR of flags for which directory types to search.
     * @returns string The full path to the file if successful, otherwise an empty string.
     */
    findFile(partialPath: string, dirTypes?: number): string; // String

    /**
     * Finds the source path for a node in the scene.
     * @param sceneNode DzNode - The node to find the source path for.
     * @returns string The source path of the node.
     */
    findSourcePathForNode(sceneNode: DzNode): string; // String

    /**
     * Attempts to locate relativePath by pre-pending the path information for each mapped content directory.
     * @param dirTypes number - Bitwise OR of flags for which directory types to search.
     * @param relativePath string - The relative path to find.
     * @param preferredPath string - (Optional) If provided, first directory to check for.
     * @returns string The absolute path for the file if it can be found, otherwise an empty string.
     * @since 4.8.1.51
     */
    getAbsolutePath(dirTypes: number, relativePath: string, preferredPath?: string): string; // String

    /**
     * Attempts to locate relativePath by pre-pending the path information for each mapped content directory.
     * @param relativePath string - The relative path to find.
     * @param useImportFolders boolean - If true, the mapped import folders will also be searched.
     * @param preferredPath string - (Optional) If provided, first directory to check for.
     * @returns string The absolute path for the file if it can be found, otherwise an empty string.
     */
    getAbsolutePath(relativePath: string, useImportFolders: boolean, preferredPath?: string): string; // String

    /**
     * Attempts to locate relativePath by pre-pending the path information for each mapped content directory.
     * @param dirTypes number - Bitwise OR of flags for which directory types to search.
     * @param relativePath string - The relative path to find.
     * @returns any[] A list of absolute paths for the file if it can be found, otherwise an empty list.
     * @since 4.8.1.51
     */
    getAbsolutePaths(dirTypes: number, relativePath: string): any[]; // Array

    /**
     * Attempts to locate relativePath by pre-pending the path information for each mapped directory.
     * @param relativePath string - The relative path to find.
     * @param useImportFolders boolean - If true, the mapped import folders will also be searched.
     * @returns any[] A list of absolute paths for the file if it can be found, otherwise an empty list.
     */
    getAbsolutePaths(relativePath: string, useImportFolders: boolean): any[]; // Array

    /**
     * Attempts to locate relativePath by pre-pending the path information for each mapped content directory.
     * @param dirTypes number - Bitwise OR of flags for which directory types to search.
     * @param relativePath string - The relative path to find.
     * @param preferredPath string - (Optional) If provided, first directory to check for.
     * @returns DzUri The URI for the file if it can be found, otherwise an empty URI.
     * @since 4.9.0.38
     */
    getAbsoluteUri(dirTypes: number, relativePath: string, preferredPath?: string): DzUri;

    /**
     * @returns DzContentFolder The built-in content directory used for content and utilities that are shipped with the application.
     */
    getBuiltInContentDirectory(): DzContentFolder;

    /**
     * @returns string The path of the built-in content directory used for content and utilities that are shipped with the application.
     */
    getBuiltInContentDirectoryPath(): string; // String

    /**
     * @param which number - The index of the built in MDL directory to return.
     * @returns DzContentFolder The given built in MDL directory.
     * @since 4.8.0.23
     */
    getBuiltInMDLDirectory(which: number): DzContentFolder;

    /**
     * @param which number - The index of the built in MDL directory to return the path of.
     * @returns string The path of the given MDL directory.
     * @since 4.8.0.23
     */
    getBuiltInMDLDirectoryPath(which: number): string; // String

    /**
     * Attempts to locate relativePath by pre-pending the path information for the mapped cloud directory.
     * @param relativePath string - The relative path to find.
     * @returns string The absolute path for the file, or an empty string if the file cannot be found.
     * @since 4.9.0.33
     */
    getCloudAbsolutePath(relativePath: string): string; // String

    /**
     * @returns DzContentFolder The directory used for content that is downloaded and installed through the application.
     * @since 4.9.0.33
     */
    getCloudContentDirectory(): DzContentFolder;

    /**
     * @returns string The path of the content directory used for content and utilities that are downloaded and installed through the application.
     * @since 4.9.0.33
     */
    getCloudContentDirectoryPath(): string; // String

    /**
     * Attempts to shorten absolutePath to a path that is relative to the cloud directory. If the path cannot be shortened, the original string is returned.
     * @param absolutePath string - The path to make relative.
     * @returns string A relative path to the file if one can be made, otherwise the original path.
     * @since 4.9.0.33
     */
    getCloudRelativePath(absolutePath: string): string; // String

    /**
     * @param which number - The index of the content directory to be returned.
     * @returns DzContentFolder The given content directory.
     */
    getContentDirectory(which: number): DzContentFolder;

    /**
     * @param which number - The index of the content directory to return the path of.
     * @returns string The path of the given content directory.
     */
    getContentDirectoryPath(which: number): string; // String

    /**
     * @returns DzContentReplaceMgr The content replace manager that belongs to the DzContentMgr.
     */
    getContentReplaceMgr(): DzContentReplaceMgr;

    /**
     * @returns string The path of the default user content directory.
     */
    getDefaultContentDirectoryPath(): string; // String

    /**
     * @returns string The path of the default public/shared content directory.
     * @since 4.11.0.248
     */
    getDefaultSharedContentDirectoryPath(): string; // String

    /**
     * @param dirTypes number - Bitwise OR of flags for which directory types to search.
     * @param relativeDirPaths any[] - The relative directory paths to list from.
     * @param fileSuffixes any[] - The list of filename suffixes to filter by. This should not be interpreted to mean file extension alone - it can be the extension, with or without the dot, or even extend into trailing characters of the file path, e.g., dsf, .dsf, _HD.dsf, etc.
     * @returns any[] A list of the URIs for the files in the specified relative paths.
     * @since 4.9.0.38
     */
    getDirectoryContentsUrisList(dirTypes: number, relativeDirPaths: any[], fileSuffixes: any[]): any[]; // Array

    /**
     * Attempts to locate a file with the given relative path by pre-pending the path information for each mapped import directory, finally falling back to the Built-In content directory.
     * @param relativePath string - The relative path to find.
     * @returns string The absolute path for the file, or an empty string if the file cannot be found.
     */
    getImportAbsolutePath(relativePath: string): string; // String

    /**
     * @param which number - The index of the import directory to return.
     * @returns DzContentFolder The given import directory.
     */
    getImportDirectory(which: number): DzContentFolder;

    /**
     * @param which number - The index of the import directory to return the path of.
     * @returns string The path of the given import directory.
     */
    getImportDirectoryPath(which: number): string; // String

    /**
     * @returns any[] A list of the extensions for files that can be imported.
     * @since 4.9.4.64
     */
    getImportFileExtensions(): any[]; // Array

    /**
     * Attempts to extract the mapped directory portion of path.
     * @param path string - An absolute or relative path to find a corresponding content path for.
     * @param useImportFolders boolean - If true, the import folders will also be searched.
     * @param isRelative boolean - If true, path is treated as a relative path. If false, path is treated as an absolute path.
     * @returns string The portion of the absolute path that matches a mapped content directory, or an empty string if no match was found.
     */
    getMappedPath(path: string, useImportFolders: boolean, isRelative: boolean): string; // String

    /**
     * Attempts to extract the mapped directory portion of path.
     * @param dirTypes number - Bitwise OR of flags for which directory types to search
     * @param path string - An absolute or relative path to find a corresponding content path for.
     * @param isRelative boolean - If true, path is treated as a relative path. If false, path is treated as an absolute path.
     * @returns string The portion of the absolute path that matches a mapped content directory, or an empty string if no match was found.
     */
    getMappedPath(dirTypes: number, path: string, isRelative: boolean): string; // String

    /**
     * Attempts to locate a file with the given relative path by pre-pending the path information for each mapped MDL directory, as well as the built-in MDL directories, finally falling back to the built-in content directory.
     * @param relativePath string - The relative path to find.
     * @returns string The absolute path for the file, or an empty string if the file cannot be found.
     */
    getMDLAbsolutePath(relativePath: string): string; // String

    /**
     * @param which number - The index of the MDL directory to return.
     * @returns DzContentFolder The given MDL directory.
     * @since 4.8.0.23
     */
    getMDLDirectory(which: number): DzContentFolder;

    /**
     * @param which number - The index of the MDL directory to return the path of.
     * @returns string The path of the given MDL directory.
     * @since 4.8.0.23
     */
    getMDLDirectoryPath(which: number): string; // String

    /**
     * Attempts to shorten absolutePath to a path that is relative to one of the mapped MDL directories. If the path cannot be shortened, the original string is returned.
     * @param absolutePath string - The path to make relative.
     * @returns string A relative path to the file if one can be made, otherwise the original path.
     * @since 4.8.0.35
     */
    getMDLRelativePath(absolutePath: string): string; // String

    /**
     * Attempts to locate relativePath by pre-pending the path information for each mapped native directory, finally falling back to the Built-In content directory.
     * @param relativePath string - The relative path to find.
     * @returns string The absolute path for the file, or an empty string if the file cannot be found.
     */
    getNativeAbsolutePath(relativePath: string): string; // String

    /**
     * @returns any[] A list of the folder names that are excluded when building the native user-facing folder structure.
     * @since 4.9.4.64
     */
    getNativeBaseUserFacingExcludedDirs(): any[]; // Array

    /**
     * @returns any[] A list of the native file extensions.
     * @since 4.9.4.64
     */
    getNativeFileExtensions(): any[]; // Array

    /**
     * @returns number The number of content directories for imported content.
     * @since 4.8.0.23
     */
    getNumBuiltInMDLDirectories(): number; // Number

    /**
     * @returns number The number of content directories.
     */
    getNumContentDirectories(): number; // Number

    /**
     * @returns number The number of content directories for imported content.
     */
    getNumImportDirectories(): number; // Number

    /**
     * @returns number The number of content directories for imported content.
     * @since 4.8.0.23
     */
    getNumMDLDirectories(): number; // Number

    /**
     * @returns number The number of stored paths to Poser content directories.
     */
    getNumPoserDirectories(): number; // Number

    /**
     * Attempts to locate a file with the given relative path by pre-pending the path information for each mapped Poser directory, finally falling back to the Built-In content directory.
     * @param relativePath string - The relative path to find.
     * @returns string The absolute path for the file, or an empty string if the file cannot be found.
     */
    getPoserAbsolutePath(relativePath: string): string; // String

    /**
     * @returns any[] A list of the folder names within a Poser runtime folder that are considered user-facing.
     * @since 4.9.4.64
     */
    getPoserBaseUserFacingDirs(): any[]; // Array

    /**
     * @param which number - The index of the Poser directory to return.
     * @returns DzContentFolder The given Poser content directory, otherwise null.
     */
    getPoserDirectory(which: number): DzContentFolder;

    /**
     * @param which number - The index of the Poser directory to return the path of.
     * @returns string The path of the given Poser content directory, otherwise an empty string.
     */
    getPoserDirectoryPath(which: number): string; // String

    /**
     * @returns any[] A list of the supported Poser file extensions.
     * @since 4.9.4.64
     */
    getPoserFileExtensions(): any[]; // Array

    /**
     * @returns any[] A list of recent open files.
     */
    getRecentFileList(): any[]; // Array

    /**
     * Attempts to shorten absolutePath to a path that is relative to one of the mapped content directories. If the path cannot be shortened, the original string is returned.
     * @param absolutePath string - The path to make relative.
     * @param useImportFolders boolean - If true, the mapped import folders will also be searched.
     * @returns string A relative path to the file if one can be made, otherwise absolutePath.
     */
    getRelativePath(absolutePath: string, useImportFolders: boolean): string; // String

    /**
     * Attempts to shorten absolutePath to a path that is relative to one of the mapped content directories. If the path cannot be shortened, the original path is returned.
     * @param dirTypes number - Bitwise OR of flags for which directory types to search.
     * @param absolutePath string - The path to make relative.
     * @returns string A relative path to the file if one can be made, otherwise absolutePath.
     * @since 4.8.1.51
     */
    getRelativePath(dirTypes: number, absolutePath: string): string; // String

    /**
     * Attempts to shorten absolutePath to a list of paths that are relative to one of the mapped content directories.
     * @param dirTypes number - Bitwise OR of flags for which directory types to search.
     * @param absolutePath string - The path to make relative.
     * @returns any[] A list of relative paths to the file if one can be made, otherwise absolutePath.
     * @since 4.8.1.51
     */
    getRelativePaths(dirTypes: number, absolutePath: string): any[]; // Array

    /**
     * Attempts to shorten absolutePath to a list of paths that are relative to one of the mapped content directories.
     * @param absolutePath string - The path to make relative.
     * @param useImportFolders boolean - If true, the mapped import folders will also be searched.
     * @returns any[] A list of relative paths to the file if one can be made, otherwise an empty list.
     */
    getRelativePaths(absolutePath: string, useImportFolders: boolean): any[]; // Array

    /**
     * @param dirTypes number - Bitwise OR of flags for which directory types to search.
     * @param relDirPaths any[] - The relative directory paths to list from.
     * @param filters number - Bitwise OR of filtering option flags.
     * @param suffixes any[] - The list of path suffixes to filter by. This should not be interpreted to mean file extension alone - it can be the extension, with or without the dot, or even extend into trailing characters of the file path, e.g., dsf, .dsf, _HD.dsf, etc.
     * @param recurse boolean - Whether or not to recurse folder hierarchies.
     * @returns any[] A list of the URIs for the entries in the specified relative paths.
     * @since 4.11.0.120
     */
    getRelativeUrisList(dirTypes: number, relDirPaths: any[], filters: number, suffixes: any[], recurse: boolean): any[]; // Array

    /**
     * Attempts to locate dirPath among the mapped import directories.
     * @param dirPath string - The directory path to locate.
     * @returns boolean true if the directory is mapped as an import directory, otherwise false.
     * @since 4.5.0.124
     */
    importDirectoryIsMapped(dirPath: string): boolean; // Boolean

    /**
     * Imports the file at the given path. A companion file (a DAZ Script file with the same name as the file being imported, or a DUF file if a DAZ Script does not exist) will be executed if one exists. This function should only be used in special circumstances. Use openFile() instead.
     * @param path string
     * @returns boolean true if the file was imported successfully, otherwise false.
     */
    importFile(path: string): boolean; // Boolean

    /**
     * @param directory string - The path of the directory to check.
     * @returns boolean true if directory is mapped, otherwise false.
     */
    isDirectoryMapped(directory: string): boolean; // Boolean

    /**
     * @param dirTypes number - Bitwise OR of flags for which directory types to search.
     * @param relativePath string - The relative path to find.
     * @returns boolean true if relativePath is considered “user facing” for the given directory type.
     * @since 4.9.4.64
     */
    isUserFacingDirectoryPath(dirTypes: number, relativePath: string): boolean; // Boolean

    /**
     * @param dirTypes number - Bitwise OR of flags for which directory types to search.
     * @param relativePath string - The relative path to find.
     * @returns boolean true if relativePath is considered “user facing” for the given directory type.
     * @since 4.9.4.64
     */
    isUserFacingFilePath(dirTypes: number, relativePath: string): boolean; // Boolean

    /**
     * Loads an asset into the scene.
     * @param asset DzAsset - The asset to load.
     * @param merge boolean - If true, combine the new asset with the existing scene. Othererwise, replace the existing scene with the new asset.
     * @returns boolean true if asset is loaded successfully, otherwise false. (since 4.9.3.68)
     * @since 4.9.3.41
     */
    loadAsset(asset: DzAsset, merge: boolean): boolean; // Boolean

    /**
     * Loads an asset as a new scene.
     * @param asset DzAsset - The asset to load.
     * @returns boolean true if asset is loaded successfully, otherwise false. (since 4.9.3.68)
     * @since 4.9.3.41
     */
    loadAsset(asset: DzAsset): boolean; // Boolean

    /**
     * Attempts to locate dirPath among the mapped MDL directories.
     * @param dirPath string - The directory path to locate.
     * @returns boolean true if the directory is mapped as a MDL directory, otherwise false.
     * @since 4.8.0.23
     */
    mdlDirectoryIsMapped(dirPath: string): boolean; // Boolean

    /**
     * Merges the contents of a list of files, either as native files or imported files, into the existing scene by calling openNativeFile() or importFile() based on the file extension. For file imports, a companion file (a DAZ Script file with the same name as the file being imported, or a DUF file if a DAZ Script does not exist) will be executed if one exists.
     * @param filenames any[] - A list of the names of the files to merge into the current scene.
     * @returns boolean true if the file was loaded successfully, otherwise false.
     */
    mergeFiles(filenames: any[]): boolean; // Boolean

    /**
     * Loads the contents of a file, either as a native file or an imported file, by calling openNativeFile() or importFile() based on the file extension. For file imports, a companion file (a DAZ Script file with the same name as the file being imported, or a DUF file if a DAZ Script does not exist) will be executed if one exists.
     * @param filename string - The name of the file to load.
     * @param merge boolean - If true, the contents of the file will be merged into the existing scene. If false, the scene will be cleared and the contents of the file will be opened in a new scene. (applies only for native files)
     * @returns boolean true if the file was loaded successfully, otherwise false.
     */
    openFile(filename: string, merge?: boolean): boolean; // Boolean

    /**
     * Loads the contents of a native format file into the scene. This function should only be used in special circumstances. Use openFile() instead.
     * @param filename string - The path to the native format file to open.
     * @param merge boolean - If true, the contents of the file will be merged into the existing scene. If false, the scene will be cleared and the contents of the file will be opened in a new scene.
     * @returns boolean true if the file was loaded successfully, otherwise false.
     */
    openNativeFile(filename: string, merge?: boolean): boolean; // Boolean

    /**
     * Loads the contents of a native format file into the scene. This function should only be used in special circumstances. Use openFile() instead.
     * @param uri DzUri - The URI of the native format file to open. This can be empty if a filename is supplied.
     * @param filename string - The path to the native format file to open. This can be empty if a valid URI is supplied.
     * @param merge boolean - If true, the contents of the file will be merged into the existing scene. If false, the scene will be cleared and the contents of the file will be opened in a new scene.
     * @returns boolean true if the file was loaded successfully, otherwise false.
     */
    openNativeUri(uri: DzUri, filename?: string, merge?: boolean): boolean; // Boolean

    /**
     * Loads the contents of a file, either as a native file or an imported file, by calling openNativeFile() or importFile() based on the file extension. For file imports, a companion file (a DAZ Script file with the same name as the file being imported, or a DUF file if a DAZ Script does not exist) will be executed if one exists.
     * @param uri DzUri - The URI of the file to load. This can be empty if a valid filename is supplied.
     * @param filename string - The name of the file to load. This can be empty if a valid uri is supplied.
     * @param merge boolean - If true, the contents of the file will be merged into the existing scene. If false, the scene will be cleared and the contents of the file will be opened in a new scene. (applies only to native files).
     * @returns boolean true if the file was loaded successfully, otherwise false.
     */
    openUri(uri: DzUri, filename?: string, merge?: boolean): boolean; // Boolean

    /**
     * Attempts to locate dirPath path among the mapped Poser content directories.
     * @param dirPath string - The directory path to locate.
     * @returns boolean true if the directory is mapped as a Poser directory, otherwise false.
     */
    poserDirectoryIsMapped(dirPath: string): boolean; // Boolean

    /**
     * Refreshes any currently loaded content directories. Call this after any operation that makes changes to the file system, e.g. saving or deleting files, etc.
     * @param reloadIcons boolean - If true, all file icons will be reloaded - good for updating the current content directory when a file has been saved over, etc.
     */
    refresh(reloadIcons?: boolean): void;

    /**
     * Causes assets for a given node in the scene to be reloaded, using the given settings, from source files at the given path.
     * @param sceneNode DzNode - sceneNode -
     * @param settings DzSettings - settings -
     * @param srcFilePath string - srcFilePath -
     * @returns DzError
     */
    reloadAssetsFromSource(sceneNode: DzNode, settings: DzSettings, srcFilePath?: string): DzError;

    /**
     * Causes the assets for all nodes in the scene to be reloaded from their respective source files.
     * @param settings DzSettings - settings -
     * @returns boolean
     */
    reloadSceneAssetsFromSource(settings: DzSettings): boolean; // Boolean

    /**
     * Removes all native content mapped directories.
     */
    removeAllContentDirectories(): void;

    /**
     * Removes all import content directory mappings from the list.
     */
    removeAllImportDirectories(): void;

    /**
     * Removes all MDL directory mappings from the list.
     * @since 4.8.0.23
     */
    removeAllMDLDirectories(): void;

    /**
     * Removes all Poser import content directory mappings from the list.
     */
    removeAllPoserDirectories(): void;

    /**
     * Removes a native content directory mapping from the list.
     * @param directory string - The path of the native content directory to remove.
     * @returns boolean true if the directory was removed, false if the given directory is not in the list.
     */
    removeContentDirectory(directory: string): boolean; // Boolean

    /**
     * Removes an import content directory mapping from the list.
     * @param directory string - The path of the import content directory to remove.
     * @returns boolean true if the directory was removed, false if the given directory is not in the list.
     */
    removeImportDirectory(directory: string): boolean; // Boolean

    /**
     * Removes a MDL directory mapping from the list.
     * @param directory string - The path of the MDL directory to remove.
     * @returns boolean true if the directory was removed, false if the given directory is not in the list.
     * @since 4.8.0.23
     */
    removeMDLDirectory(directory: string): boolean; // Boolean

    /**
     * Removes a Poser import content directory mapping from the list.
     * @param directory string - The path of the Poser import content directory to remove.
     * @returns boolean true if the directory was removed, false if the given directory is not in the list.
     */
    removePoserDirectory(directory: string): boolean; // Boolean

    /**
     * Saves all currently mapped directories to application settings.
     */
    saveAllMappedDirectories(): void;

    /**
     * Deprecated
     * @param useCheckCompatibility boolean
     */
    setCheckCompatibilityOn(useCheckCompatibility: boolean): void;

    /**
     * Sets the directory for content and utilities downloaded and installed through the application.
     * @param directory string - The path of the directory to add.
     * @param saveSetting boolean - Whether or not to save the setting immediately or wait until the application exits.
     * @since 4.9.0.33
     */
    setCloudContentDirectory(directory: string, saveSetting?: boolean): void;

    /**
     * Sets the list of directories for native format files.
     * @param directories any[] - The list of directory paths to set.
     * @param saveSettings boolean - Whether or not to save the settings immediately or wait until the application exits.
     * @since 4.9.0.35
     */
    setContentDirectories(directories: any[], saveSettings?: boolean): void;

    /**
     * Sets the list of directories for other import format files.
     * @param directories any[] - The list of directory paths to set.
     * @param saveSettings boolean - Whether or not to save the settings immediately or wait until the application exits.
     * @since 4.9.0.35
     */
    setImportDirectories(directories: any[], saveSettings?: boolean): void;

    /**
     * Sets the list of directories for Poser format files.
     * @param directories any[] - The list of directory paths to set.
     * @param saveSettings boolean - Whether or not to save the settings immediately or wait until the application exits.
     * @since 4.9.0.35
     */
    setPoserDirectories(directories: any[], saveSettings?: boolean): void;

    /**
     * Sets whether or not to use the database.
     * @param useDatabase boolean
     */
    setUseDatabaseSearch(useDatabase: boolean): void;

    /**
     * Given the filename, determines if the file should be treated as a 'merge' or an 'open' when loaded. This is determined first by content type. If that does not exist and the file is a .duf, it will attempt to retrieve the type from within the file.
     * @param filename string - The name of the file to check.
     * @returns boolean true if the file should be merged, otherwise false.
     */
    shouldMerge(filename: string): boolean; // Boolean

    /**
     * Deprecated
     * @returns boolean
     */
    usingCheckCompatibility(): boolean; // Boolean

    /**
     * @returns boolean true if database use is turned on, otherwise false.
     */
    usingDatabaseSearch(): boolean; // Boolean

    /* Signals */

    /**
     * Emitted when the enabled state of the auto refresh has changed.
     * @param onOff boolean - The new state of auto refresh.
     */
    autoRefreshChanged: ISignal<boolean>;

    /**
     * Emitted when the cloud content directory has changed.
     */
    cloudContentDirectoryChanged: ISignal<void>;

    /**
     * Emitted when a content directory is added or removed.
     */
    contentDirectoryListChanged: ISignal<void>;

    /**
     * Emitted when the currently loaded tree of folders has changed and needs to be rebuilt. Usually a result of a call to refresh(), or when one of the content directory lists has changed.
     */
    folderTreeChanged: ISignal<void>;

    /**
     * Emitted when an import directory is added or removed.
     */
    importDirectoryListChanged: ISignal<void>;

    /**
     * Emitted when the loading of a script has failed, or when the execution of a script has finished or failed.
     * @since 4.6.4.62
     */
    loadScriptFinished: ISignal<void>;

    /**
     * Emitted when the loading of a script is starting.
     * @since 4.6.2.103
     */
    loadScriptStarting: ISignal<void>;

    /**
     * Emitted when a MDL directory is added or removed.
     */
    mdlDirectoryListChanged: ISignal<void>;

    /**
     * Emitted when a new content file has been created.
     * @param filename string
     */
    newFileCreated: ISignal<string>;

    /**
     * Emitted when the file that is loaded on 'new' has been changed.
     * @param filename string
     */
    onNewSceneChanged: ISignal<string>;

    /**
     * Emitted when a poser import directory is added or removed.
     */
    poserDirectoryListChanged: ISignal<void>;

    /**
     * Emitted when a recent file is added or removed.
     */
    recentFileListChanged: ISignal<void>;

    /**
     * Emitted when the execution of a script fails.
     * @param filename string
     * @since 4.6.4.62
     */
    scriptFailed: ISignal<string>;

    /**
     * Emitted when the execution of a script has finished.
     * @param filename string
     * @since 4.6.4.62
     */
    scriptFinished: ISignal<string>;

    /**
     * Emitted when the loading of a script fails.
     * @param filename string
     * @since 4.6.4.62
     */
    scriptLoadFailed: ISignal<string>;

    /**
     * Emitted when the loading of a script is starting.
     * @param filename string
     * @since 4.6.4.62
     */
    scriptLoadStarting: ISignal<string>;

    /**
     * Emitted when the execution of a script is starting.
     * @param filename string
     * @since 4.6.4.62
     */
    scriptStarting: ISignal<string>;

    /**
     * Emitted when the startup scene file has changed.
     * @param filename string - The new startup scene file.
     */
    startupSceneChanged: ISignal<string>;

    /* Undocumented Augment Members */

    /** @undocumented */
    getDefaultContentDir(): any;

    /** @undocumented */
    getName(): any;

    /** @undocumented */
    iskindof(p0: QString): any;
}
