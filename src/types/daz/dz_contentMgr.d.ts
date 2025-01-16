declare class DzContentMgr extends DzBase {
    static AllDirs: number;	// 15
    static AllDirsAndCloud: number;	// 127
    static AllLocalDirs: number;	// 95
    static AllLocalNonCloudDirs: number;	// 31
    static BuiltInDirs: number;	// 8
    static CloudDB: number;	// 32
    static CloudDir: number;	// 64
    static CloudNativeAndBuiltInDirs: number;	// 105
    static ImportDirs: number;	// 4
    static MDLDirs: number;	// 16
    static NativeAndBuiltInDirs: number;	// 9
    static NativeDirs: number;	// 1
    static PoserDirs: number;	// 2
    autoRefresh: boolean;	// true
    maxRecentFiles: number;	// 10
    name: string;	// Content Manager
    newScene: string;	//
    objectName: string;	// Content Manager
    showBuiltInContent: boolean;	// false
    startupScene: string;	//
    addContentDirectory(p0: QString): any;
    addContentDirectory(p0: QString, p1: boolean): any;
    addImportDirectory(p0: QString): any;
    addImportDirectory(p0: QString, p1: boolean): any;
    addMDLDirectory(p0: QString): any;
    addMDLDirectory(p0: QString, p1: boolean): any;
    addPoserDirectory(p0: QString): any;
    addPoserDirectory(p0: QString, p1: boolean): any;
    addRecentFile(p0: QString): any;
    autoRefreshChanged(p0: boolean): void;
    className(): any;
    className(): any;
    clearRecentFileList(): any;
    cloudContentDirectoryChanged(): void;
    contentDirectoryIsMapped(p0: QString): void;
    contentDirectoryListChanged(): void;
    deleteLater(): any;
    destroyed(p0?: QObject): void;
    doContentSearch(): any;
    doDirNumCheck(): any;
    fileCreated(p0: QString): void;
    findBaseDirectory(directoryTypes: number, p1: QString): string;
    findBaseDirectory(p0: QString, p1: boolean): string;
    findFile(p0: QString, directoryTypes?: number): string;
    findSourcePathForNode(p0: DzNode): any;
    folderTreeChanged(): void;
    getAbsolutePath(directoryTypes: number, p1: QString): any;
    getAbsolutePath(p0: QString, p1: boolean): any;
    getAbsolutePath(directoryTypes: number, p1: QString, p2: QString): any;
    getAbsolutePath(p0: QString, p1: boolean, p2: QString): any;
    getAbsolutePaths(directoryTypes: number, p1: QString): any;
    getAbsolutePaths(p0: QString, p1: boolean): any;
    getAbsoluteUri(directoryTypes: number, p1: QString): any;
    getAbsoluteUri(directoryTypes: number, p1: QString, p2: QString): any;
    getBuiltInContentDirectory(): any;
    getBuiltInContentDirectoryPath(): any;
    getBuiltInMDLDirectory(p0: number): any;
    getBuiltInMDLDirectoryPath(p0: number): any;
    getCloudAbsolutePath(p0: QString): any;
    getCloudContentDirectory(): any;
    getCloudContentDirectoryPath(): any;
    getCloudPathPrefix(): any;
    getCloudRelativePath(p0: QString): any;
    getContentDirectory(p0: number): any;
    getContentDirectoryPath(p0: number): any;
    getContentPath(p0: DzNode): any;
    getContentReplaceMgr(): any;
    getDefaultContentDir(): any;
    getDirectoryContentsUrisList(directoryTypes: number, p1: QString[], p2: QString[]): any;
    getImportAbsolutePath(p0: QString): any;
    getImportDirectory(p0: number): any;
    getImportDirectoryPath(p0: number): any;
    getImportFileExtensions(): any;
    getMDLAbsolutePath(p0: QString): any;
    getMDLDirectory(p0: number): any;
    getMDLDirectoryPath(p0: number): any;
    getMDLRelativePath(p0: QString): any;
    getMappedPath(directoryTypes: number, p1: QString, p2: boolean): any;
    getMappedPath(p0: QString, p1: boolean, p2: boolean): any;
    getName(): any;
    getNativeAbsolutePath(p0: QString): any;
    getNativeBaseUserFacingExcludedDirs(): any;
    getNativeFileExtensions(): any;
    getNumBuiltInMDLDirectories(): any;
    getNumContentDirectories(): any;
    getNumImportDirectories(): any;
    getNumMDLDirectories(): any;
    getNumPoserDirectories(): any;
    getPoserAbsolutePath(p0: QString): any;
    getPoserBaseUserFacingDirs(): any;
    getPoserDirectory(p0: number): any;
    getPoserDirectoryPath(p0: number): any;
    getPoserFileExtensions(): any;
    getRecentFileList(): string[];
    getRelativePath(directoryTypes: number, p1: QString): any;
    getRelativePath(p0: QString, p1: boolean): any;
    getRelativePaths(directoryTypes: number, p1: QString): any;
    getRelativePaths(p0: QString, p1: boolean): any;
    importDirectoryIsMapped(p0: QString): void;
    importDirectoryListChanged(): void;
    importFile(p0: QString): any;
    inherits(): any;
    inherits(p0: QString): any;
    isDirectoryMapped(p0: QString): void;
    isUserFacingDirectoryPath(directoryTypes: number, p1: QString): any;
    isUserFacingFilePath(directoryTypes: number, p1: QString): any;
    iskindof(p0: QString): any;
    loadAsset(p0: DzAssetPtr): any;
    loadAsset(p0: DzAssetPtr, p1: boolean): any;
    loadScriptFinished(): void;
    loadScriptStarting(): any;
    makePersistent(): any;
    mdlDirectoryIsMapped(p0: QString): void;
    mdlDirectoryListChanged(): void;
    mergeFiles(p0: QString[]): any;
    nameChanged(p0: QString): void;
    newFileCreated(p0: QString): void;
    onNewSceneChanged(p0: QString): void;
    openFile(p0: QString): any;
    openFile(p0: QString, p1: boolean): any;
    openNativeFile(p0: QString): any;
    openNativeFile(p0: QString, p1: boolean): any;
    openNativeUri(p0: DzUri): any;
    openNativeUri(p0: DzUri, p1: QString): any;
    openNativeUri(p0: DzUri, p1: QString, p2: boolean): any;
    openUri(p0: DzUri): any;
    openUri(p0: DzUri, p1: QString): any;
    openUri(p0: DzUri, p1: QString, p2: boolean): any;
    poserDirectoryIsMapped(p0: QString): void;
    poserDirectoryListChanged(): void;
    recentFileListChanged(): void;
    refresh(): any;
    refresh(p0: boolean): any;
    reloadAssetsFromSource(p0: DzNode, p1: DzSettings): any;
    reloadAssetsFromSource(p0: DzNode, p1: DzSettings, p2: QString): any;
    reloadAssetsFromSource(p0: DzNodeList, p1: DzSettings, p2: QString): any;
    reloadSceneAssetsFromSource(p0: DzSettings): any;
    removeAllContentDirectories(): any;
    removeAllImportDirectories(): any;
    removeAllMDLDirectories(): any;
    removeAllPoserDirectories(): any;
    removeContentDirectory(p0: QString): any;
    removeImportDirectory(p0: QString): any;
    removeMDLDirectory(p0: QString): any;
    removePoserDirectory(p0: QString): any;
    saveAllMappedDirectories(): any;
    scriptFailed(p0: QString): void;
    scriptFinished(p0: QString): void;
    scriptLoadFailed(p0: QString): void;
    scriptLoadStarting(p0: QString): any;
    scriptStarting(p0: QString): any;
    setCheckCompatibilityOn(p0: boolean): any;
    setCloudContentDirectory(p0: QString): any;
    setCloudContentDirectory(p0: QString, p1: boolean): any;
    setContentDirectories(p0: QString[]): any;
    setContentDirectories(p0: QString[], p1: boolean): any;
    setImportDirectories(p0: QString[]): any;
    setImportDirectories(p0: QString[], p1: boolean): any;
    setPoserDirectories(p0: QString[]): any;
    setPoserDirectories(p0: QString[], p1: boolean): any;
    setUseDatabaseSearch(p0: boolean): any;
    shouldMerge(p0: QString): any;
    startupSceneChanged(p0: QString): void;
    usingCheckCompatibility(): any;
    usingDatabaseSearch(): any;
}