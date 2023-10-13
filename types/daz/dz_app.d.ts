declare class DzApp {
    static Advanced: number;	// 2
    static Alpha: number;	// 4
    static Beta: number;	// 5
    static DevBuild: number;	// 4
    static Free: number;	// 0
    static FullInterface: number;	// 2
    static GeneralRelease: number;	// 0
    static Mac10_0: number;	// 2
    static Mac10_1: number;	// 3
    static Mac10_10: number;	// 12
    static Mac10_11: number;	// 13
    static Mac10_12: number;	// 14
    static Mac10_2: number;	// 4
    static Mac10_3: number;	// 5
    static Mac10_4: number;	// 6
    static Mac10_5: number;	// 7
    static Mac10_6: number;	// 8
    static Mac10_7: number;	// 9
    static Mac10_8: number;	// 10
    static Mac10_9: number;	// 11
    static MacOSX: number;	// 1
    static MacUnknown: number;	// 0
    static NoInterface: number;	// 0
    static NoInterfaceWithOpenGL: number;	// 1
    static PrivateBuild: number;	// 3
    static Pro: number;	// 3
    static PublicBuild: number;	// 1
    static PublishingBuild: number;	// 2
    static Standard: number;	// 1
    static Unknown: number;	// 0
    static Windows: number;	// 0
    static Windows10: number;	// 192
    static Windows2000: number;	// 32
    static Windows2003: number;	// 64
    static Windows7: number;	// 144
    static Windows8: number;	// 160
    static Windows8_1: number;	// 176
    static Windows95: number;	// 2
    static Windows98: number;	// 3
    static WindowsMe: number;	// 4
    static WindowsUnknown: number;	// 0
    static WindowsVista: number;	// 128
    static WindowsXP: number;	// 48
    appName: string;	// DAZ Studio
    applicationName: string;	// Studio4
    applicationVersion: string;	// 4.9.4.117
    autoSipEnabled: boolean;	// true
    cloudName: string;	// Daz Connect
    cursorFlashTime: number;	// 1060
    doubleClickInterval: number;	// 550
    exitCode: number;	// 0
    globalStrut: QObject;	// [object Object]
    keyboardInputInterval: number;	// 400
    layoutDirection: number;	// 0
    logSize: number;	// 1048576
    longVersionString: string;	// 4.9.4.117
    name: string;	// App
    objectName: string;	// App
    orgName: string;	// DAZ 3D
    organizationDomain: string;	//
    organizationName: string;	// DAZ
    quitOnLastWindowClosed: boolean;	// true
    scriptArgs: QObject;	//
    shouldAutoCloseHeadless: boolean;	// true
    startDragDistance: number;	// 5
    startDragTime: number;	// 500
    styleSheet: string;	//
    version: number;	// 67699829
    version64: number;	// 1125938561810549
    versionString: string;	// 4.9
    wheelScrollLines: number;	// 3
    windowIcon: QObject;	// QVariant(QIcon)
    aboutQt(): any;
    aboutToQuit(): any;
    addSessionFileLoad(p0: string): any;
    //autoSipEnabled(): void;
    bitArchitecture(): any;
    bitArchitectureString(): any;
    breadCrumbTrackingIsActive(): any;
    byteSizeToString(p0: number): any;
    canShowSceneBuilder(): any;
    canShowSceneBuilder(p0: QVariant): any;
    className(): any;
    clearDelayedDeleteStack(p0: boolean): any;
    clearSkin(): any;
    closeAllWindows(): any;
    closing(): any;
    commitDataRequest(p0: QSessionManager): any;
    createDigest(p0: QString[]): any;
    createDigest(p0: QByteArray): any;
    createUuid(): any;
    debug(p0: string): any;
    debugMsg(p0: string): any;
    delayedExit(): any;
    delayedExit(p0: number): any;
    deleteLater(): any;
    destroyed(): void;
    destroyed(p0: QObject): void;
    enableMultiThreading(p0: boolean): any;
    eventLoopStarted(): void;
    flushLogBuffer(): any;
    focusChanged(p0: QWidget, p1: QWidget): void;
    fontDatabaseChanged(): void;
    getAbsoluteScriptPath(p0: string): any;
    getAppDataPath(): any;
    getAppSettingsMgr(): any;
    getApplicationBaseName(): any;
    getAssetIOMgr(): DzAssetIOMgr;
    getAssetMgr(): DzAssetMgr;
    getAuthenticationMgr(): any;
    getCallBackMgr(): any;
    getCommonUserDocumentPath(): any;
    getContentMgr(): DzContentMgr;
    getCurrentAuthor(): any;
    getDAZDataPath(): any;
    getDataFolderName(): any;
    getDataFolderPath(): any;
    getDataFolderPathBase(): any;
    getDeviceMgr(): any;
    getDialogParent(): any;
    getDocumentationPath(): any;
    getDocumentsPath(): any;
    getExportMgr(): any;
    getFileIOPresetMgr(): any;
    getGeneratedScriptsPath(): any;
    getGeneratedShadersPath(): any;
    getGraphicsMode(): any;
    getHelpMgr(): any;
    getHomePath(): any;
    getImageMgr(): DzImageMgr;
    getImportMgr(): any;
    getInterface(): any;
    getLoadSavePath(): any;
    getMultiMediaMgr(): any;
    getPluginMgr(): any;
    getPluginsPath(): any;
    getProgramDataAppPath(): any;
    getProgramDataPath(): any;
    getRenderMgr(): DzRenderMgr;
    getResourcesPath(): any;
    getSaveFilterMgr(): any;
    getScriptsPath(): any;
    getShadersPath(): any;
    getSimulationMgr(): any;
    getSkin(): any;
    getStyle(): DzStyle;
    getStyleDefinition(): any;
    getStyleDefinitionList(): any;
    getTempFilename(): any;
    getTempPath(): any;
    getTempRenderFilename(): any;
    getTempShadersPath(): any;
    getTextureBakerMgr(): any;
    getTextureConvertorMgr(): any;
    getUtilitiesPath(): any;
    inherits(): any;
    isClosing(): any;
    isDeleting(): any;
    isKeyDown(): boolean;
    isKeyDown(p0: number): boolean;
    isKeySequenceDown(): boolean;
    isKeySequenceDown(p0: string): boolean;
    isMultiThreadingEnabled(): void;
    isRegistered(): void;
    isRunning(): any;
    isSlave(): any;
    isStarting(): any;
    lastWindowClosed(): void;
    log(p0: string): any;
    modifierKeyState(): any;
    mouseEvent(): any;
    multiThreadingChanged(p0: boolean): void;
    operatingSystem(): any;
    operatingSystemString(): any;
    platform(): any;
    quit(): any;
    refreshStyleSheet(): any;
    refreshStyleSheet(p0: boolean): any;
    releaseCycle(): any;
    releaseCycleString(): any;
    releaseCycleSuffix(): any;
    releaseCycleSuffixStripped(): void;
    releaseEdition(): any;
    releaseEditionString(): any;
    restoreDefaultTempPath(): any;
    saveStateRequest(p0: QSessionManager): any;
    saveStateScript(p0: DzScript): any;
    sceneBuilderAccepted(p0: QString[]): void;
    sceneBuilderRejected(): void;
    sendSourceBreadCrumb(p0: number): any;
    sendSourceBreadCrumb(p0: number, p1: string): any;
    sendSourceBreadCrumb(p0: number, p1: string, p2: string): any;
    sendSourceBreadCrumb(p0: number, p1: string, p2: string, p3: string): any;
    setAutoSipEnabled(p0: boolean): void;
    setBreadCrumbTrackingActive(p0: boolean): any;
    setLoadSavePath(p0: string): any;
    setSkin(p0: string): any;
    setStyleDefinition(p0: string): any;
    setStyleSheet(p0: string): any;
    setTempPath(p0: string): any;
    setUpBreadCrumbTrackingSignalWatch(p0: QObject, p1: string): any;
    setUpBreadCrumbTrackingSignalWatch(p0: QObject, p1: string, p2: number): any;
    showInNativeBrowser(p0: string): any;
    showPrompts(): any;
    showSceneBuilder(): any;
    showSceneBuilder(p0: QVariant): any;
    showSceneBuilder(p0: QVariant, p1: boolean): any;
    showURL(p0: string): any;
    skinChanged(): void;
    starting(): any;
    statusLine(message: string): any;
    statusLine(message: string, addToLog: boolean): any;
    styleAboutToChange(): any;
    styleChanged(p0: DzStyle): void;
    unixSignal(p0: number): any;
    usingInterface(): any;
    warning(p0: string): any;
    warningMsg(p0: string): any;
    writeConfigScript(): any;
    writeConfigScript(p0: string): any;
}