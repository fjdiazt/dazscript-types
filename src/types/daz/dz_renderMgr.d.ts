/**
 * Manager responsible for renderers and rendering.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/rendermgr_dz
 */
declare class DzRenderMgr extends DzBase {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of RenderPriority.
     */
    static RENDER_PRIORITY_LOWEST: number;

    /**
     * DAZ enum member of RenderPriority.
     */
    static RENDER_PRIORITY_LOW: number;

    /**
     * DAZ enum member of RenderPriority.
     */
    static RENDER_PRIORITY_BELOW_NORMAL: number;

    /**
     * DAZ enum member of RenderPriority.
     */
    static RENDER_PRIORITY_NORMAL: number;

    /**
     * DAZ enum member of RenderPriority.
     */
    static RENDER_PRIORITY_ABOVE_NORMAL: number;

    /**
     * DAZ enum member of RenderPriority.
     */
    static RENDER_PRIORITY_HIGH: number;

    /**
     * DAZ enum member of RenderPriority.
     */
    static RENDER_PRIORITY_HIGHEST: number;

    /* Static Methods */

    /**
     * @returns string The suffix used for files generated as icons for renders to help improve performance and responsiveness.
     */
    static getIconSuffix(): string; // String

    /**
     * @param imageName string - The path of the rendered file to get the metadata file for.
     * @param basenameOnly boolean
     * @returns string The name of the XML file that holds metadata for imageName.
     */
    static getMetaXmlFileName(imageName: string, basenameOnly: boolean): string; // String

    /**
     * @param imageName string - The path of the rendered file to get a base filename for.
     * @param basenameOnly boolean
     * @returns string The base filename of the file for imageName.
     */
    static getRenderBaseFileName(imageName: string, basenameOnly: boolean): string; // String

    /**
     * @param imageName string - The path of the rendered file to get the icon file for.
     * @param basenameOnly boolean
     * @returns string The name of the icon file for imageName.
     */
    static getRenderIconFileName(imageName: string, basenameOnly: boolean): string; // String

    /* Methods */

    /**
     * Adds a directory to the list of known render directories.
     * @param directory string - The path of the directory to add.
     * @param saveSetting boolean - If true, saves the setting immediately. If false, waits until the application exits to save the setting.
     */
    addRenderDirectory(directory: string, saveSetting?: boolean): void;

    /**
     * Interactively and progressively renders the scene with the given render settings, using the given handler from the given camera.
     * @param camera DzCamera - The camera to use for the render.
     * @param renderHandler DzRenderHandler - The render handler to use for the render.
     * @param opt DzRenderOptions - The render settings to use for the render. If NULL, the current user render settings are used.
     * @returns boolean true if the render was performed successfully, otherwise false.
     */
    doIPRRender(camera: DzCamera, renderHandler: DzRenderHandler, opt?: DzRenderOptions): boolean; // Boolean

    /**
     * Renders the scene with the given render settings. If no render settings are specified, then the current application render settings are used.
     * @param opt DzRenderOptions - The render settings to use for the render. If null, the current user render settings are used.
     * @returns boolean true if the render operation succeeds, otherwise false.
     */
    doRender(opt?: DzRenderOptions): boolean; // Boolean

    /**
     * @param className string
     * @returns DzRenderer The renderer with the given class name (if any), otherwise null.
     */
    findRenderer(className: string): DzRenderer;

    /**
     * @returns DzRenderer The active renderer for the application. This will be NULL if no renderers are available.
     */
    getActiveRenderer(): DzRenderer;

    /**
     * @param absPath string - The absolute path to split into its base and relative parts.
     * @returns any[] A list where the first item is the base path and any additional items represent the relative portion of the path.
     */
    getBaseAndRelativePath(absPath: string): any[]; // Array

    /**
     * @returns string The path to the last successfully saved render, otherwise an empty string.
     */
    getLastSavedRenderPath(): string; // String

    /**
     * @returns number The number of render directories.
     */
    getNumRenderDirectories(): number; // Number

    /**
     * @returns number The number of renderers available in the application.
     */
    getNumRenderers(): number; // Number

    /**
     * @returns DzElement
     */
    getOptionHelper(): DzElement;

    /**
     * @param which number - The index of the render directory to be returned.
     * @returns string The given render directory.
     */
    getRenderDirectoryPath(which: number): string; // String

    /**
     * @returns any[]
     */
    getRenderElementObjects(): any[]; // Array

    /**
     * @param which number
     * @returns DzRenderer If which is within the range [0, getNumRenderers() - 1], the renderer at the given index, otherwise null.
     */
    getRenderer(which: number): DzRenderer;

    /**
     * @returns any[] A list of renderers available in the application.
     */
    getRendererList(): any[]; // Array

    /**
     * @returns DzRenderOptions The default render options object. This object stores the user's currently selected rendering options.
     */
    getRenderOptions(): DzRenderOptions;

    /**
     * @returns boolean true if there is a render that can be saved, otherwise false.
     */
    hasRender(): boolean; // Boolean

    /**
     * @returns boolean true if the application is currently rendering, otherwise false.
     */
    isRendering(): boolean; // Boolean

    rebuildRenderElements(): void;

    /**
     * Removes all render directories.
     */
    removeAllRenderDirectories(): void;

    /**
     * Removes a directory from the list of known render directories.
     * @param directory string - The name of the render directory to remove.
     * @returns boolean true if the directory was found in the list, otherwise false.
     */
    removeRenderDirectory(directory: string): boolean; // Boolean

    restoreDefaultRenderOptions(): void;

    /**
     * Displays a dialog for saving the last render, and saves the image(s)/movie if the user does not cancel.
     * @returns string The path to the file selected and successfully saved, otherwise an empty string.
     */
    saveLastRender(): string; // String

    /**
     * Sets the active renderer for the application.
     * @param renderer DzRenderer - The renderer to make active.
     */
    setActiveRenderer(renderer: DzRenderer): void;

    /**
     * Displays the render options dialog to the user. This only works if the application is being run with the interface on, if the interface is off, this function does nothing.
     */
    showRenderDialog(): void;

    stopIPRRender(): void;

    /* Signals */

    /**
     * Emitted when the active render engine has changed.
     * @param renderer DzRenderer - The new active render engine.
     */
    activeRendererChanged: ISignal<DzRenderer>;

    /**
     * @param renderer DzRenderer
     * @param handler any - Undocumented DAZ type: iprrenderhandler_dz.
     */
    activeRendererIPRRenderHandlerChanged: ISignal<DzRenderer, any>;

    doIPRRenderStop: ISignal<void>;

    /**
     * Emitted when the value returned by DzRenderMgr::hasRender() has changed, signaling a new render operation. This signifies whether or not a call to saveLastRender() will be valid.
     * @param state boolean
     */
    hasRenderChanged: ISignal<boolean>;

    IPRRenderStarted: ISignal<void>;

    IPRRenderStopped: ISignal<void>;

    renderDirectoryListChanged: ISignal<void>;

    renderElementsListChanged: ISignal<void>;

    /**
     * Emitted when a new render engine is added to the manager. This only occurs at startup as plug-ins are being loaded.
     * @param renderer DzRenderer - The new render engine that was added to the manager.
     */
    rendererAdded: ISignal<DzRenderer>;

    /**
     * @param renderer DzRenderer
     * @param handler any - Undocumented DAZ type: iprrenderhandler_dz.
     */
    rendererIPRRenderHandlerChanged: ISignal<DzRenderer, any>;

    /**
     * @param renderer DzRenderer
     */
    rendererModeChanged: ISignal<DzRenderer>;

    /**
     * Emitted just after a rendering operation is finished. This is only emitted when a render operation is performed by calling DzRenderMgr::doRender() - this includes all rendering operations that are started by the user from the interface. This may not include rendering operations performed by plug-ins, scripts, etc which do not call doRender().
     * @param succeeded boolean - true if the render was successful, false if the render failed or was cancelled by the user.
     */
    renderFinished: ISignal<boolean>;

    renderFolderChanged: ISignal<void>;

    renderOptionDefaultsRestored: ISignal<void>;

    /**
     * Emitted just before a rendering operation begins. This is only emitted when a render operation is performed by calling DzRenderMgr::doRender() - this includes all rendering operations that are started by the user from the interface. This may not include rendering operations performed by plug-ins, scripts, etc which do not call doRender().
     */
    renderStarting: ISignal<void>;

    /* Undocumented Augment Members */

    /** @undocumented */
    buildRenderElementsList(): any; // TODO ;

    /** @undocumented */
    shutdown(): void;

    /** @undocumented */
    emitRenderFolderChanged(): void;

    /** @undocumented */
    postProcessRender(): any; // TODO ;
}
