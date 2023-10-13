declare class DzRenderMgr extends DzBase {

    /* Properties */
    RENDER_PRIORITY_LOWEST: number;
    RENDER_PRIORITY_LOW: number;
    RENDER_PRIORITY_BELOW_NORMAL: number;
    RENDER_PRIORITY_NORMAL: number;
    RENDER_PRIORITY_ABOVE_NORMAL: number;
    RENDER_PRIORITY_HIGH: number;
    RENDER_PRIORITY_HIGHEST: number;

    /* Methods */
    rendererAdded(renderer: DzRenderer): void;
    activeRendererChanged(renderer: DzRenderer): void;
    rendererModeChanged(): any; // TODO ;
    renderStarting(): void;
    renderFinished(succeeded: boolean): void;
    hasRenderChanged(state: boolean): void;
    renderDirectoryListChanged(): void;
    renderFolderChanged(): void;
    activeRendererIPRRenderHandlerChanged(): any; // TODO ;
    rendererIPRRenderHandlerChanged(): any; // TODO ;
    doIPRRenderStop(): any; // TODO ;
    IPRRenderStarted(): any; // TODO ;
    IPRRenderStopped(): any; // TODO ;
    renderElementsListChanged(): any; // TODO ;
    buildRenderElementsList(): any; // TODO ;
    renderOptionDefaultsRestored(): any; // TODO ;
    doRender(opt: DzRenderOptions): boolean;
    doRender(): boolean;
    setActiveRenderer(r: DzRenderer): void;
    showRenderDialog(): void;
    shutdown(): void;
    getNumRenderers(): number;
    getRenderer(which: number): DzRenderer;
    getRendererList(): DzRenderer[];
    findRenderer(className: QString): DzRenderer;
    getActiveRenderer(): DzRenderer;
    isRendering(): boolean;
    hasRender(): boolean;
    getLastSavedRenderPath(): QString;
    saveLastRender(): QString;
    getRenderOptions(): DzRenderOptions;
    addRenderDirectory(directory: QString, saveNow: boolean): void;
    addRenderDirectory(directory: QString, saveNow: boolean): void;
    removeRenderDirectory(directory: QString): boolean;
    removeAllRenderDirectories(): void;
    getNumRenderDirectories(): number;
    getRenderDirectoryPath(which: number): QString;
    getBaseAndRelativePath(absPath: QString): String[];
    emitRenderFolderChanged(): void;
    doIPRRender(): any; // TODO ;
    doIPRRender(): any; // TODO ;
    stopIPRRender(): any; // TODO ;
    getRenderIconFileName(imageName: QString, justFileName: boolean): QString;
    getMetaXmlFileName(imageName: QString, justFileName: boolean): QString;
    getIconSuffix(): QString;
    getRenderElementObjects(): any; // TODO ;
    getOptionHelper(): any; // TODO ;
    rebuildRenderElements(): any; // TODO ;
    restoreDefaultRenderOptions(): any; // TODO ;
    postProcessRender(): any; // TODO ;
}