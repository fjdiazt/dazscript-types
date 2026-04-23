/**
 * The main application object.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/app_dz
 */
declare class DzApp extends QObject {

    /* Properties */

    /**
     * Holds the name of the application; i.e., “DAZ Studio”. (Read Only)
     */
    appName: string; // String

    /**
     * Holds the name of the cloud service; i.e., “Daz Connect”. (Read Only)
     * @since 4.9.0.26
     */
    cloudName: string; // String

    /**
     * Holds the exit code returned by the application. (Read Only)
     * @since 4.9.3.51
     */
    exitCode: number; // Number

    /**
     * Holds the size, in bytes, of the log file.
     * @since 4.9.4.70
     */
    logSize: number; // Number

    /**
     * Holds a string representation of the full product version number; i.e., major.minor.revision.build. (Read Only)
     */
    longVersionString: string; // String

    /**
     * Holds the name of the organization; i.e., “DAZ 3D”. (Read Only)
     * @since 4.6.4.30
     */
    orgName: string; // String

    /**
     * Holds the arguments passed to the application on launch. (Read Only)
     * @since 4.9.3.39
     */
    scriptArgs: any[]; // Array

    /**
     * Holds the name of the system locale in the form of a two-letter ISO 639 language code, followed by an underscore, followed by an uppercase two or three-letter ISO 3166 country code - e.g., en_US. (Read Only)
     * @since 4.22.1.57
     */
    systemLocaleName: string; // String

    /**
     * Holds the full product version number as an encoded 32-bit integer. (Read Only)
     * Deprecated
     */
    version: number; // Number

    /**
     * Holds the full product version number as an encoded 64-bit integer. (Read Only)
     */
    version64: number; // Number

    /**
     * Holds a string representation of the product version number; i.e., major.minor. (Read Only)
     */
    versionString: string; // String

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of GraphicsMode.
     */
    static NoInterface: number;

    /**
     * DAZ enum member of GraphicsMode.
     */
    static NoInterfaceWithOpenGL: number;

    /**
     * DAZ enum member of GraphicsMode.
     */
    static FullInterface: number;

    /**
     * DAZ enum member of MessageSeverity.
     */
    static MessageFatal: number;

    /**
     * DAZ enum member of MessageSeverity.
     */
    static MessageError: number;

    /**
     * DAZ enum member of MessageSeverity.
     */
    static MessageWarning: number;

    /**
     * DAZ enum member of MessageSeverity.
     */
    static MessageNormal: number;

    /**
     * DAZ enum member of MessageSeverity.
     */
    static MessageVerbose: number;

    /**
     * DAZ enum member of MessageSeverity.
     */
    static MessageDebug: number;

    /**
     * DAZ enum member of MessageSeverity.
     */
    static MessageRaw: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static OS_Unknown: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static Windows_Unknown: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static Windows_95: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static Windows_98: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static Windows_Me: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static Windows_2000: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static Windows_XP: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static Windows_2003: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static Windows_Vista: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static Windows_7: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static Windows_8: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static Windows_8_1: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static Windows_10: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static Windows_11: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static Mac_Unknown: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static Mac_10_0: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static Mac_10_1: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static Mac_10_2: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static Mac_10_3: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static Mac_10_4: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static Mac_10_5: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static Mac_10_6: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static Mac_10_7: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static Mac_10_8: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static Mac_10_9: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static Mac_10_10: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static Mac_10_11: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static Mac_10_12: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static Mac_10_13: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static Mac_10_14: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static Mac_10_15: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static Mac_11_0: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static Mac_12_0: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static Mac_13_0: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static Mac_14_0: number;

    /**
     * DAZ enum member of OperatingSystem.
     */
    static Mac_15_0: number;

    /**
     * DAZ enum member of Platform.
     */
    static Windows: number;

    /**
     * DAZ enum member of Platform.
     */
    static MacOSX: number;

    /**
     * DAZ enum member of ReleaseCycle.
     */
    static GeneralRelease: number;

    /**
     * DAZ enum member of ReleaseCycle.
     */
    static PublicBuild: number;

    /**
     * DAZ enum member of ReleaseCycle.
     */
    static PublishingBuild: number;

    /**
     * DAZ enum member of ReleaseCycle.
     */
    static PrivateBuild: number;

    /**
     * DAZ enum member of ReleaseCycle.
     */
    static DevBuild: number;

    /**
     * DAZ enum member of ReleaseEdition.
     */
    static Free: number;

    /**
     * DAZ enum member of ReleaseEdition.
     */
    static Standard: number;

    /**
     * DAZ enum member of ReleaseEdition.
     */
    static Advanced: number;

    /**
     * DAZ enum member of ReleaseEdition.
     */
    static Pro: number;

    /**
     * DAZ enum member of ReleaseEdition.
     */
    static Alpha: number;

    /**
     * DAZ enum member of ReleaseEdition.
     */
    static Beta: number;

    /* Static Methods */

    /**
     * @param mSecs number - The number of milliseconds to get a time string for.
     * @param simplified boolean - Whether or not to simplify the string.
     * @param useLocale boolean - If true, the return value will be in the system locale. If false, the return value will be suitable for logging.
     * @returns string A user readable string representing the time specified.
     * @since 4.22.1.110
     */
    static durationToString(mSecs: number, simplified?: boolean, useLocale?: boolean): string; // String

    /**
     * @returns DzVersion The current version of the Operating System for the platform.
     * @since 4.15.0.22
     */
    static getPlatformVersion(): DzVersion;

    /**
     * @returns DzVersion The current version of the application.
     * @since 4.11.0.230
     */
    static getVersion(): DzVersion;

    /**
     * @returns boolean true if a modal widget (i.e., dialog) is currently displayed, otherwise false.
     * @since 4.12.1.116
     */
    static hasActiveModalWidget(): boolean; // Boolean

    /* Methods */

    /**
     * @returns number A numeric representation of the bit architecture the application was compiled for.
     */
    bitArchitecture(): number; // Number

    /**
     * @returns string A user-friendly string representation of the bit architecture the application was compiled for.
     */
    bitArchitectureString(): string; // String

    /**
     * @param bytes number - The numeric value to convert into a string.
     * @returns string A string representation of the byte size.
     */
    byteSizeToString(bytes: number): string; // String

    /**
     * @param definition Object - If empty, the default SceneBuilder.json file (if any) in getResourcesPath() will be checked. If a string, the full path of a Scene Builder configuration file to check is expected. If an object, a map of Scene Builder configuration data is expected. (since 4.6.4.62)
     * @returns boolean true if the Scene Builder dialog would be displayed, otherwise false.
     * @since 4.6.2.69
     */
    canShowSceneBuilder(definition?: Object): boolean; // Boolean

    /**
     * Forces a deletion of all objects currently waiting to be deleted to free up more memory. If you are using this to clear memory you will generally want to clear the Undo Stack first.
     * @param doProgress boolean - If true, a progress dialog will be shown to the user while the operation is taking place.
     */
    clearDelayedDeleteStack(doProgress: boolean): void;

    /**
     * Clears application wide cache of pixmaps.
     * @since 4.11.0.34
     */
    clearPixmapCache(): void;

    /**
     * @returns Object A map consisting of CPU information.
     * @since 4.22.1.44
     */
    cpuInfo(): Object;

    /**
     * @param tokens any[] - The list of strings to create a digest of.
     * @returns string A string representing a message digest. The string is formatted as 36 characters, in which 32 are hexadecimal and distributed across five groups of 8-4-4-4-12 separated by a hyphen ('-', i.e. “xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx” where each 'x' is a hexadecimal digit).
     */
    createDigest(tokens: any[]): string; // String

    /**
     * @param data ByteArray - The byte array to create a digest of.
     * @returns string A string representing a message digest. The string is formatted as 36 characters, in which 32 are hexadecimal and distributed across five groups of 8-4-4-4-12 separated by a hyphen ('-', i.e. “xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx” where each 'x' is a hexadecimal digit).
     */
    createDigest(data: ByteArray): string; // String

    /**
     * @returns string A string representing a randomly generated Universally Unique Identifier (UUID). The string is formatted as 38 characters, in which 32 are hexadecimal and distributed across five groups of 8-4-4-4-12 separated by a hyphen ('-') and enclosed by a pair of curly braces (i.e. “{xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}” where each 'x' is a hexadecimal digit).
     */
    createUuid(): string; // String

    /**
     * Writes a debug message to the application log.
     * @param message string - The message to write.
     */
    debug(message: string): void;

    /**
     * Posts an event that causes the application to exit.
     * @param exitCode number - The exit code to set. (since 4.9.3.51)
     * @since 4.6.2.55
     */
    delayedExit(exitCode?: number): void;

    /**
     * @param onOff boolean - If true, multi-threaded features are enabled, otherwise multi-threaded features are disabled.
     */
    enableMultiThreading(onOff: boolean): void;

    /**
     * Writes an error message to the application log.
     * @param message string - The message to write.
     * @since 4.16.1.26
     */
    error(message: string): void;

    /**
     * Writes a fatal error message to the application log.
     * @param message string - The message to write.
     * @since 4.16.1.26
     */
    fatal(message: string): void;

    /**
     * Writes any currently buffered log messages to the log file. This is automatically called whenever the log buffer has more than 512 characters of data, but can be called at any time to force all messages to be written out.
     * @returns boolean true if the log buffer was successfully flushed, otherwise false.
     */
    flushLogBuffer(): boolean; // Boolean

    /**
     * Searches in default locations for a script file of the given name.
     * @param scriptName string - The name/path of a script file to find. This can be a file name, a relative file path, or an absolute file path.
     * @returns string The absolute path of the found script file (if any), otherwise an empty string.
     */
    getAbsoluteScriptPath(scriptName: string): string; // String

    /**
     * @returns string The absolute path of the application data directory for the current machine user, the current major version, the current release cycle and the current instance of the application.
     * @since 4.12.1.23
     */
    getAppDataInstancePath(): string; // String

    /**
     * @returns string The absolute path of the application data directory for the current machine user, the current major version and the current release cycle of the application.
     */
    getAppDataPath(): string; // String

    /**
     * @returns string The base name of the application; e.g., “Studio”.
     * @since 4.9.2.33
     */
    getApplicationBaseName(): string; // String

    /**
     * @returns string The name of the application settings; e.g., “Studio4 Public Build [1]”.
     * @since 4.12.1.26
     */
    getApplicationDataName(): string; // String

    /**
     * @returns DzAssetIOMgr The application-wide Asset I/O Manager in charge of DAZ Scene Object Notation (DSON) format assets.
     */
    getAssetIOMgr(): DzAssetIOMgr;

    /**
     * @returns DzAssetMgr The application-wide Asset Manager.
     */
    getAssetMgr(): DzAssetMgr;

    /**
     * @returns DzAuthenticationMgr The application-wide Authentication Manager - responsible for tracking user authentication.
     */
    getAuthenticationMgr(): DzAuthenticationMgr;

    /**
     * @returns DzCallBackMgr The application-wide Call Back Manager - responsible for tracking call back objects.
     */
    getCallBackMgr(): DzCallBackMgr;

    /**
     * @returns string The filename for the file that logs messages from the application that pertains to the cloud service.
     * @since 4.12.1.26
     */
    getCloudLogFilename(): string; // String

    /**
     * @returns string The absolute path of the public/shared user documents folder.
     */
    getCommonUserDocumentPath(): string; // String

    /**
     * @returns DzContentMgr The application-wide Content Manager.
     */
    getContentMgr(): DzContentMgr;

    /**
     * @returns DzAuthor The current author (user that is currently running the app).
     */
    getCurrentAuthor(): DzAuthor;

    /**
     * @returns string The name of the data folder under the content directory.
     */
    getDataFolderName(): string; // String

    /**
     * @returns string The full path for the location where data is stored.
     */
    getDataFolderPath(): string; // String

    /**
     * @returns string The base path for the location where data is stored.
     */
    getDataFolderPathBase(): string; // String

    /**
     * @returns string The absolute path of the data directory for the organization.
     */
    getDAZDataPath(): string; // String

    /**
     * @returns string The default absolute path of the directory where temporary files are stored.
     * @since 4.20.1.77
     */
    getDefaultTempPath(): string; // String

    /**
     * @returns DzDeviceMgr The application-wide Device Manager - responsible for devices supported by the application.
     */
    getDeviceMgr(): DzDeviceMgr;

    /**
     * @returns QWidget The active modal widget or the application main window if one exists.
     */
    getDialogParent(): QWidget;

    /**
     * @returns string The absolute path of the directory where application documentation files are stored.
     */
    getDocumentationPath(): string; // String

    /**
     * @returns string The online URL for application documentation.
     * @since 4.22.1.208
     */
    getDocumentationUrl(): string; // String

    /**
     * @returns string The absolute path of the user documents folder for the application.
     */
    getDocumentsPath(): string; // String

    /**
     * @returns DzExportMgr The application-wide Export Manager in charge of file exporters.
     */
    getExportMgr(): DzExportMgr;

    /**
     * @returns DzFileIOPresetMgr The application-wide File I/O Preset Manager.
     */
    getFileIOPresetMgr(): DzFileIOPresetMgr;

    /**
     * @returns string The absolute path of the directory where support script files that are automatically generated are stored.
     */
    getGeneratedScriptsPath(): string; // String

    /**
     * @returns string The absolute path of the application data directory for automatically generated shaders.
     */
    getGeneratedShadersPath(): string; // String

    /**
     * @returns number An enumerated value representing the current graphics mode.
     */
    getGraphicsMode(): number; // GraphicsMode

    /**
     * @returns DzHelpMgr The application-wide Help Manager.
     */
    getHelpMgr(): DzHelpMgr;

    /**
     * @returns string The absolute path of the directory that contains the application executable.
     */
    getHomePath(): string; // String

    /**
     * @returns DzImageMgr The application-wide Image Manager - responsible for image I/O and tracking of currently loaded images.
     */
    getImageMgr(): DzImageMgr;

    /**
     * @returns DzImportMgr The application-wide Import Manager in charge of file importers.
     */
    getImportMgr(): DzImportMgr;

    /**
     * @returns DzMainWindow The main interface widget if the application is running with an interface, otherwise NULL.
     */
    getInterface(): DzMainWindow;

    /**
     * Last directory that files were loaded or saved to/from.
     * @returns string
     */
    getLoadSavePath(): string; // String

    /**
     * @returns string The filename for the file that logs messages from the application that pertains to the core application and any plugins.
     * @since 4.12.1.26
     */
    getLogFilename(): string; // String

    /**
     * @returns DzMultiMediaMgr The application-wide Video and Audio Manager - responsible for video and audio I/O.
     */
    getMultiMediaMgr(): DzMultiMediaMgr;

    /**
     * @returns DzPluginMgr The application-wide Plug-in Manager - responsible for tracking plug-ins.
     */
    getPluginMgr(): DzPluginMgr;

    /**
     * @returns string The absolute path of the base directory where plug-ins are loaded from.
     */
    getPluginsPath(): string; // String

    /**
     * @returns string The absolute path of the machine's global program data directory for the organization, the current major version, the current release cycle, and the current instance of the application.
     * @since 4.12.1.23
     */
    getProgramDataAppInstancePath(): string; // String

    /**
     * @returns string The absolute path of the machine's global program data directory for the organization, the current major version, and the current release cycle of the application.
     */
    getProgramDataAppPath(): string; // String

    /**
     * @returns string The absolute path of the machine's global program data directory for the organization.
     */
    getProgramDataPath(): string; // String

    /**
     * @returns DzRenderMgr The application-wide Render Manager.
     */
    getRenderMgr(): DzRenderMgr;

    /**
     * @returns string The absolute path of the directory where application resource files are stored.
     */
    getResourcesPath(): string; // String

    /**
     * @returns string The absolute path of the directory where support script files are stored.
     */
    getScriptsPath(): string; // String

    /**
     * @returns string The absolute path of the base directory for all shaders.
     */
    getShadersPath(): string; // String

    /**
     * @returns DzSimulationMgr The application-wide Simulation Manager.
     * @since 4.9.3.140
     */
    getSimulationMgr(): DzSimulationMgr;

    /**
     * @returns DzStyle The application-wide style object; subject to becoming invalid if the application style changes.
     */
    getStyle(): DzStyle;

    /**
     * @returns string The name of the style definition currently in use.
     */
    getStyleDefinition(): string; // String

    /**
     * @returns any[] A list of the available style definitions.
     */
    getStyleDefinitionList(): any[]; // Array

    /**
     * Get a filename for temporary storage.
     * @returns string A unique filename (with no extension) whose path will be in the current temporary working folder.
     */
    getTempFilename(): string; // String

    /**
     * @returns string The absolute path of the directory where temporary files are stored.
     */
    getTempPath(): string; // String

    /**
     * Get a filename for temporary storage of rendered images.
     * @returns string A filename (with no extension) whose path will be in the current temporary working folder.
     */
    getTempRenderFilename(): string; // String

    /**
     * @returns string The absolute path of the temporary directory for automatically generated shaders.
     */
    getTempShadersPath(): string; // String

    /**
     * @returns string The absolute path of the base directory for all binary utilities.
     */
    getUtilitiesPath(): string; // String

    /**
     * @returns string A user-friendly string indicating the name of the application instance (of the release cycle).
     * @since 4.12.1.19
     */
    instanceName(): string; // String

    /**
     * @returns string A string indicating the name of the application instance (of the release cycle).
     * @since 4.12.1.23
     */
    instanceNameSuffix(): string; // String

    /**
     * @returns boolean true if the application is in the process of shutting down, otherwise false.
     */
    isClosing(): boolean; // Boolean

    /**
     * @returns boolean true if the application should emit log messages, otherwise false.
     * @since 4.16.1.26
     */
    isEmittingLogMessages(): boolean; // Boolean

    /**
     * @param key number - The Qt::Key value for the key to check. Since 4.11.0.263, any value < 0 (default) is interpreted as “any key” rather than a specific key.
     * @returns boolean true if key is currently pressed, otherwise false.
     */
    isKeyDown(key?: number): boolean; // Boolean

    /**
     * @param sequence string - A string consistent with QKeySequence::fromString(), in the PortableText format. Since 4.11.0.263, “any” is interpreted as “any key” rather than a specific key sequence.
     * @returns boolean true if sequence is currently pressed, otherwise false.
     */
    isKeySequenceDown(sequence?: string): boolean; // Boolean

    /**
     * @returns boolean true if the user has chosen to enable multi-threaded features, otherwise false.
     */
    isMultiThreadingEnabled(): boolean; // Boolean

    /**
     * @returns boolean true if a valid serial number has been provided, otherwise false.
     */
    isRegistered(): boolean; // Boolean

    /**
     * @returns boolean true if the main event loop is running and events that are posted can be expected to be delivered, otherwise false.
     */
    isRunning(): boolean; // Boolean

    /**
     * @returns boolean true if the application is running as a slave to another application, otherwise false.
     */
    isSlave(): boolean; // Boolean

    /**
     * @returns boolean true if the application is in the process of starting up, otherwise false.
     */
    isStarting(): boolean; // Boolean

    /**
     * @param data string - The string to test whether or not it is a valid GUID.
     * @returns boolean true if data consists of 32 hexadecimal characters (i.e. “xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx” where 'x' represents a hexadecimal value in the range [0-9a-f]), or 36 characters in which 32 are hexadecimal values distributed across five groups of 8-4-4-4-12 separated by a hyphen ('-', i.e. “xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx”), or 38 characters where the previous description is enclosed by curly braces (i.e. “{xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}”), otherwise false.
     * @since 4.12.1.63
     */
    isValidGuid(data: string): boolean; // Boolean

    /**
     * Writes a normal operational message to the application log.
     * @param message string - The message to write.
     */
    log(message: string): void;

    /**
     * Writes a message containing information about a message box to the application log.
     * @param category string - The category (if any) of the message to write.
     * @param title string - The title if the message box.
     * @param text string - The text of the message box.
     * @param buttonTexts any[] - A list of the button texts for the message box.
     * @param immediate boolean - If true, the message (and any others in the log buffer) will be immediately written to the log file. If false, the message will be written to the log buffer - the log buffer will be automatically flushed (written to file) if it exceeds the maximum defined buffer size.
     * @since 4.16.1.26
     */
    logMessageBox(category: string, title: string, text: string, buttonTexts: any[], immediate: boolean): void;

    /**
     * Writes a message containing information about the specified path to the application log.
     * @param label string - The label identifying the path.
     * @param path string - The path to log information about.
     * @since 4.15.0.30
     */
    logPathInfo(label: string, path: string): void;

    /**
     * @returns number The current modifier key state; this value is a bitwise OR of the Qt::KeyboardModifier flags for the active keys (if any).
     */
    modifierKeyState(): number; // Number

    /**
     * @returns number The enumerated value associated with the OperatingSystem that the application is running under.
     */
    operatingSystem(): number; // OperatingSystem

    /**
     * @returns string A user-readable string that describes the current Operating System.
     */
    operatingSystemString(): string; // String

    /**
     * The application is intended to be as platform independent as possible, but there are cases where something needs to be done differently on one platform or another. This function provides a simple way to check which platform the application is running under.
     * @returns number The enumerated value associated with the Platform that the application is running under.
     */
    platform(): number; // Platform

    /**
     * Posts an event that causes execution of a script as it is encountered in the event stack.
     * @param evaluate boolean - If script is actual code, set this to true, otherwise set this to false.
     * @param script string - This can be a file name, a relative file path, an absolute file path or code. If passed a file name or path, getAbsoluteScriptPath() is used to resolve it. If passed actual code, evaluate must also be set to true.
     * @param args any[] - The list of arguments to pass to the script.
     * @since 4.10.0.101
     */
    postScriptEvent(evaluate: boolean, script: string, args?: any[]): void;

    /**
     * @returns number The enumerated value associated with the ReleaseCycle of the application.
     */
    releaseCycle(): number; // ReleaseCycle

    /**
     * @returns string A user-friendly string describing the release cycle (and optionally, the instance) of the application.
     * @since 4.12.1.19
     */
    releaseCycleInstanceString(): string; // String

    /**
     * @returns string A user-friendly string describing the release cycle (and optionally, the instance) of the application.
     * @since 4.12.1.19
     */
    releaseCycleInstanceSuffix(): string; // String

    /**
     * @returns string A string describing the release cycle (and optionally, the instance) of the application, without any space characters.
     * @since 4.12.1.19
     */
    releaseCycleInstanceSuffixStripped(): string; // String

    /**
     * @returns string A user-friendly string describing the release cycle of the application in the locale of the user interface.
     * @since 4.22.1.57
     */
    releaseCycleLocaleString(): string; // String

    /**
     * @returns string A user-friendly string describing the release cycle of the application.
     */
    releaseCycleString(): string; // String

    /**
     * @returns string A user-friendly string describing the release cycle of the application.
     */
    releaseCycleSuffix(): string; // String

    /**
     * @returns string A string describing the release cycle of the application, without any space characters.
     */
    releaseCycleSuffixStripped(): string; // String

    /**
     * @returns number The enumerated value associated with the ReleaseEdition of the application.
     */
    releaseEdition(): number; // ReleaseEdition

    /**
     * @returns string A user-friendly string describing the release edition of the application in the locale of the user interface.
     * @since 4.22.1.57
     */
    releaseEditionLocaleString(): string; // String

    /**
     * @returns string A user-friendly string describing the release edition of the application.
     */
    releaseEditionString(): string; // String

    /**
     * Restores the temporary files directory to the default location.
     */
    restoreDefaultTempPath(): void;

    /**
     * Sets the default directory for loading or saving files.
     * @param path string - The absolute path of the (default) directory to load/save files from/to.
     */
    setLoadSavePath(path: string): void;

    /**
     * Sets the current style for the application.
     * @param name string - The name of the style definition to use.
     * @returns boolean true if the application switched to the given style, otherwise false.
     */
    setStyleDefinition(name: string): boolean; // Boolean

    /**
     * Sets the directory path where temporary files are stored. The path provided needs to be an absolute path. A directory will be created at the new location if it does not already exist.
     * @param tempPath string - The path of the new temporary files directory.
     * @returns boolean true if the path provided is valid and changing the temporary path succeeded. false if any errors occurred.
     */
    setTempPath(tempPath: string): boolean; // Boolean

    /**
     * A convenience method for opening a file/directory in the OS file browser.
     * @param absFilePath string - The absolute file path of a file or folder to show.
     * @returns boolean true if the file exists and the OS file browser could be launched, otherwise false.
     */
    showInNativeBrowser(absFilePath: string): boolean; // Boolean

    /**
     * @returns boolean true if the application should prompt the user for input, otherwise false.
     * @since 4.9.3.46
     */
    showPrompts(): boolean; // Boolean

    /**
     * Displays the Scene Builder dialog.
     * @param definition Object - If empty, the default SceneBuilder.json file (if any) in getResourcesPath() will be used. If a string, the full path of a Scene Builder configuration file to check is expected. If an object, a map of Scene Builder configuration data is expected. (since 4.6.4.62)
     * @param asEvent boolean - If false (default), the Scene Builder configuration data is processed immediately. If false, the Scene Builder configuration data is posted to an event and processed as it is encountered in the event stack. (since 4.6.4.62)
     * @returns any[] If asEvent is false, a list of the selections made by the user in the Scene Builder dialog, otherwise an empty list. (since 4.6.4.62)
     * @since 4.6.2.69
     */
    showSceneBuilder(definition?: Object, asEvent?: boolean): any[]; // Array

    /**
     * A convenience method for browsing to a given URL.
     * @param url string - The url to open in the system's default browser. Be sure to specify the scheme of the url (e.g., 'http:' or 'file:').
     */
    showURL(url: string): void;

    /**
     * Display a message in the current status interface.
     * @param message string - The string to be displayed.
     * @param addToLog boolean - If true (default), the message will also be added to the application log.
     */
    statusLine(message: string, addToLog?: boolean): void;

    /**
     * @returns boolean true if the application is using a user interface, otherwise false.
     */
    usingInterface(): boolean; // Boolean

    /**
     * Writes a more verbose message to the application log.
     * @param message string - The message to write.
     * @since 4.16.1.26
     */
    verbose(message: string): void;

    /**
     * Writes a warning message to the application log.
     * @param message string - The message to write.
     */
    warning(message: string): void;

    /**
     * Saves out a user configuration script to the given filename. If no filename is given, the script is saved to the same file read from in startup(). The run() function calls this at the end of each execution.
     * @param configScriptFilename string
     * @returns boolean true if the file was written successfully, otherwise false.
     */
    writeConfigScript(configScriptFilename?: string): boolean; // Boolean

    /**
     * Writes a message to the application log.
     * @param message string - The message to write.
     * @since 4.14.0.4
     */
    writeToLog(message: string): void;

    /**
     * Write a message to the application log.
     * @param severity number - The severity of the message to log.
     * @param category string - The category of the message to log.
     * @param message string - The message to write.
     * @param immediate boolean - If true, the message (and any others in the log buffer) will be immediately written to the log file. If false, the message will be written to the log buffer - the log buffer will be automatically flushed (written to file) if it exceeds the maximum defined buffer size.
     * @since 4.16.1.26
     */
    writeToLog(severity: number, category: string, message: string, immediate: boolean): void;

    /**
     * Write a message to the application log.
     * @param message string - The message to write.
     * @param immediate boolean - If true, the message (and any others in the log buffer) will be immediately written to the log file. If false, the message will be written to the log buffer - the log buffer will be automatically flushed (written to file) if it exceeds the maximum defined buffer size.
     * @since 4.14.0.4
     */
    writeToLog(message: string, immediate: boolean): void;

    /**
     * Write a message to the application log.
     * @param severity number - The severity of the message to log.
     * @param message string - The message to write.
     * @param immediate boolean - If true, the message (and any others in the log buffer) will be immediately written to the log file. If false, the message will be written to the log buffer - the log buffer will be automatically flushed (written to file) if it exceeds the maximum defined buffer size.
     * @since 4.16.1.26
     */
    writeToLog(severity: number, message: string, immediate: boolean): void;

    /**
     * @returns DzSaveFilterMgr
     */
    getSaveFilterMgr(): DzSaveFilterMgr;

    /**
     * Deprecated
     * @returns any The application-wide persistent Settings Manager - used to set and retrieve application settings. Undocumented DAZ type: DzAppSettingsMgr.
     */
    getAppSettingsMgr(): any; // DzAppSettingsMgr; undocumented type

    /* Signals */

    /**
     * Emitted immediately after the main event loop exits.
     */
    closing: ISignal<void>;

    /**
     * Emitted when a debug message is sent to the application log.
     * @param message string - The message that was sent.
     * @param category string - The category for the message (if any).
     * @since 4.16.1.26
     */
    debugMessage: ISignal<string, string>;

    /**
     * Emitted when an error message is sent to the application log.
     * @param message string - The message that was sent.
     * @param category string - The category for the message (if any).
     * @since 4.16.1.26
     */
    errorMessage: ISignal<string, string>;

    /**
     * Emitted when the event loop is started on the application.
     */
    eventLoopStarted: ISignal<void>;

    /**
     * Emitted when a fatal message is sent to the application log.
     * @param message string - The message that was sent.
     * @param category string - The category for the message (if any).
     * @since 4.16.1.26
     */
    fatalMessage: ISignal<string, string>;

    /**
     * Emitted when a standard message is sent to the application log.
     * @param message string - The message that was sent.
     * @param category string - The category for the message (if any).
     * @since 4.16.1.26
     */
    infoMessage: ISignal<string, string>;

    /**
     * Emitted when a MouseButtonDblClick or MouseButtonRelease event occurs on the application.
     */
    mouseEvent: ISignal<void>;

    /**
     * Emitted when multi-threading has changed on the application.
     * @param onOff boolean
     */
    multiThreadingChanged: ISignal<boolean>;

    /**
     * Emitted when the Scene Builder dialog has been rejected by the user, or when none of the files specified in the Scene Builder definition can be found.
     * @param selections any[]
     * @since 4.6.4.62
     */
    sceneBuilderAccepted: ISignal<any[]>;

    /**
     * Emitted when the Scene Builder dialog has been rejected by the user, or when none of the files specified in the Scene Builder definition can be found.
     * @since 4.6.4.62
     */
    sceneBuilderRejected: ISignal<void>;

    /**
     * Emitted after the application has finished its startup just before the main event loop begins.
     */
    starting: ISignal<void>;

    /**
     * Emitted when a the style is about to change on the application.
     */
    styleAboutToChange: ISignal<void>;

    /**
     * Emitted when the application wide style has changed.
     * @param newStyle DzStyle
     */
    styleChanged: ISignal<DzStyle>;

    /**
     * Emitted when a verbose message is sent to the application log.
     * @param message string - The message that was sent.
     * @param category string - The category for the message (if any).
     * @since 4.16.1.26
     */
    verboseMessage: ISignal<string, string>;

    /**
     * Emitted when a warning message is sent to the application log.
     * @param message string - The message that was sent.
     * @param category string - The category for the message (if any).
     * @since 4.16.1.26
     */
    warningMessage: ISignal<string, string>;

    /**
     * Deprecated
     * @param message string
     */
    debugMsg: ISignal<string>;

    /**
     * Deprecated
     * @param message string
     */
    warningMsg: ISignal<string>;

    /* Undocumented Augment Members */

    /** @undocumented */
    static Mac10_0: number;	// 2

    /** @undocumented */
    static Mac10_1: number;	// 3

    /** @undocumented */
    static Mac10_10: number;	// 12

    /** @undocumented */
    static Mac10_11: number;	// 13

    /** @undocumented */
    static Mac10_12: number;	// 14

    /** @undocumented */
    static Mac10_2: number;	// 4

    /** @undocumented */
    static Mac10_3: number;	// 5

    /** @undocumented */
    static Mac10_4: number;	// 6

    /** @undocumented */
    static Mac10_5: number;	// 7

    /** @undocumented */
    static Mac10_6: number;	// 8

    /** @undocumented */
    static Mac10_7: number;	// 9

    /** @undocumented */
    static Mac10_8: number;	// 10

    /** @undocumented */
    static Mac10_9: number;	// 11

    /** @undocumented */
    static MacUnknown: number;	// 0

    /** @undocumented */
    static Unknown: number;	// 0

    /** @undocumented */
    static Windows10: number;	// 192

    /** @undocumented */
    static Windows2000: number;	// 32

    /** @undocumented */
    static Windows2003: number;	// 64

    /** @undocumented */
    static Windows7: number;	// 144

    /** @undocumented */
    static Windows8: number;	// 160

    /** @undocumented */
    static Windows8_1: number;	// 176

    /** @undocumented */
    static Windows95: number;	// 2

    /** @undocumented */
    static Windows98: number;	// 3

    /** @undocumented */
    static WindowsMe: number;	// 4

    /** @undocumented */
    static WindowsUnknown: number;	// 0

    /** @undocumented */
    static WindowsVista: number;	// 128

    /** @undocumented */
    static WindowsXP: number;	// 48

    /** @undocumented */
    applicationName: string;	// Studio4

    /** @undocumented */
    applicationVersion: string;	// 4.9.4.117

    /** @undocumented */
    autoSipEnabled: boolean;	// true

    /** @undocumented */
    cursorFlashTime: number;	// 1060

    /** @undocumented */
    doubleClickInterval: number;	// 550

    /** @undocumented */
    globalStrut: QObject;	// [object Object]

    /** @undocumented */
    keyboardInputInterval: number;	// 400

    /** @undocumented */
    layoutDirection: number;	// 0

    /** @undocumented */
    organizationDomain: string;	//

    /** @undocumented */
    organizationName: string;	// DAZ

    /** @undocumented */
    quitOnLastWindowClosed: boolean;	// true

    /** @undocumented */
    shouldAutoCloseHeadless: boolean;	// true

    /** @undocumented */
    startDragDistance: number;	// 5

    /** @undocumented */
    startDragTime: number;	// 500

    /** @undocumented */
    styleSheet: string;	//

    /** @undocumented */
    wheelScrollLines: number;	// 3

    /** @undocumented */
    windowIcon: QObject;	// QVariant(QIcon)

    /** @undocumented */
    aboutQt(): any;

    /** @undocumented */
    aboutToQuit(): any;

    /** @undocumented */
    addSessionFileLoad(p0: string): any;

    /** @undocumented */
    breadCrumbTrackingIsActive(): any;

    /** @undocumented */
    clearSkin(): any;

    /** @undocumented */
    closeAllWindows(): any;

    /** @undocumented */
    commitDataRequest(p0: QSessionManager): any;

    /** @undocumented */
    focusChanged(p0: QWidget, p1: QWidget): void;

    /** @undocumented */
    fontDatabaseChanged(): void;

    /** @undocumented */
    getSkin(): any;

    /** @undocumented */
    getTextureBakerMgr(): any;

    /** @undocumented */
    getTextureConvertorMgr(): any;

    /** @undocumented */
    isDeleting(): any;

    /** @undocumented */
    lastWindowClosed(): void;

    /** @undocumented */
    quit(): any;

    /** @undocumented */
    refreshStyleSheet(): any;

    /** @undocumented */
    refreshStyleSheet(p0: boolean): any;

    /** @undocumented */
    saveStateRequest(p0: QSessionManager): any;

    /** @undocumented */
    saveStateScript(p0: DzScript): any;

    /** @undocumented */
    sendSourceBreadCrumb(p0: number): any;

    /** @undocumented */
    sendSourceBreadCrumb(p0: number, p1: string): any;

    /** @undocumented */
    sendSourceBreadCrumb(p0: number, p1: string, p2: string): any;

    /** @undocumented */
    sendSourceBreadCrumb(p0: number, p1: string, p2: string, p3: string): any;

    /** @undocumented */
    setAutoSipEnabled(p0: boolean): void;

    /** @undocumented */
    setBreadCrumbTrackingActive(p0: boolean): any;

    /** @undocumented */
    setSkin(p0: string): any;

    /** @undocumented */
    setStyleSheet(p0: string): any;

    /** @undocumented */
    setUpBreadCrumbTrackingSignalWatch(p0: QObject, p1: string): any;

    /** @undocumented */
    setUpBreadCrumbTrackingSignalWatch(p0: QObject, p1: string, p2: number): any;

    /** @undocumented */
    skinChanged(): void;

    /** @undocumented */
    unixSignal(p0: number): any;
}
