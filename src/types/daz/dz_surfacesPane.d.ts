declare class DzSurfacesPane extends DzPane {

    // Properties
    objectName: string; // Surfaces
    modal: boolean; // false
    windowModality: number; // 0
    enabled: boolean; // true
    geometry: object; // [object Object]
    frameGeometry: object; // [object Object]
    normalGeometry: object; // [object Object]
    x: number; // 0
    y: number; // 0
    pos: object; // [object Object]
    frameSize: object; // [object Object]
    size: object; // [object Object]
    width: number; // 473
    height: number; // 424
    rect: object; // [object Object]
    childrenRect: object; // [object Object]
    childrenRegion: object; // QVariant(QRegion)
    minimumSize: object; // [object Object]
    maximumSize: object; // [object Object]
    minimumWidth: number; // 157
    minimumHeight: number; // 113
    maximumWidth: number; // 16777215
    maximumHeight: number; // 16777215
    sizeIncrement: object; // [object Object]
    baseSize: object; // [object Object]
    cursor: object; // QVariant(QCursor)
    mouseTracking: boolean; // false
    isActiveWindow: boolean; // true
    focusPolicy: number; // 0
    focus: boolean; // false
    contextMenuPolicy: number; // 1
    updatesEnabled: boolean; // true
    visible: boolean; // true
    minimized: boolean; // false
    maximized: boolean; // false
    fullScreen: boolean; // false
    sizeHint: object; // [object Object]
    acceptDrops: boolean; // false
    windowTitle: string; //
    windowIcon: object; // QVariant(QIcon)
    windowIconText: string; //
    windowOpacity: number; // 1
    windowModified: boolean; // false
    toolTip: string; //
    statusTip: string; //
    whatsThis: string; //
    accessibleName: string; //
    accessibleDescription: string; //
    layoutDirection: number; // 0
    autoFillBackground: boolean; // false
    styleSheet: string; //
    locale: object; // QVariant(QLocale)
    windowFilePath: string; //
    inputMethodHints: number; // 0
    name: string; // Surfaces

    // Methods
    _clone: any;
    _getMethodsNames: any;
    buildOptionsMenu(p0: DzActionMenu): any;
    className: any;
    close(): any;
    collapseAll(): any;
    collapseAllSelected(): any;
    // customContextMenuRequested(p0:QPonumber): any;
    deleteLater(): any;
    destroyed(): any;
    destroyed(p0: QObject): any;
    expandAll(): any;
    expandAllSelected(): any;
    getAutoBake(): any;
    getBakerOption(): any;
    getContentTab(): DzFilteredFileContentTab;
    getDefaultSkin(): any;
    getDisplayMode(): any;
    getEditorGuidePage(): any;
    getInfoDivider(): any;
    getLabel(): any;
    getNodeEditor(): DzSurfaceSideNavHierarchy;
    getOptionsMenu(): any;
    getOptionsMenuVersion(): any;
    getOverrideSkin(): any;
    getPaneGroup(): any;
    getPresetGuidePage(): any;

    getUseBake(): any;
    hide(): any;
    hidePane(): any;
    inherits: any;
    lower(): any;
    makeGroupDockable(): any;
    makeGroupUndockable(): any;
    makeUndockable(): any;
    makeUndockable(p0: QSize): any;
    moveToGroup(p0: DzPaneGroup): any;
    raise(): any;
    refresh(): any;
    refreshBakeTexture(): any;
    refreshStyleSheet(): any;
    refreshStyleSheet(p0: boolean): any;
    repanumber(): any;
    // restoreSettings(p0:DzPaneSettings): any;
    // restoreSettings(p0:DzPaneSettings): any;
    // saveSettings(DzPaneSettings): any;
    // saveSettings(p0:DzPaneSettings): any;
    setAutoBake(p0: boolean): any;
    setCurrentTab(p0: number): any;
    setDefaultSkin(p0: DzSkin): any;
    setDisabled(p0: boolean): any;
    // setDisplayMode(DzSurfaceSideNavHierarchy::DisplayMode): any;
    setEnabled(p0: boolean): any;
    setFocus(): any;
    setHidden(p0: boolean): any;
    setLabel(p0: string): any;
    setOverrideSkin(p0: DzSkin): any;
    setOverrideSkin(p0: DzSkin, p1: boolean): any;
    setShown(p0: boolean): any;
    setStyleSheet(p0: string): any;
    setUseBake(p0: boolean): any;
    setVisible(p0: boolean): any;
    setWindowModified(p0: boolean): any;
    setWindowTitle(p0: string): any;
    show(): any;
    showFullScreen(): any;
    showHidden(p0: boolean): any;
    showMaximized(): any;
    showMinimized(): any;
    showNormal(): any;
    showPane(): any;
    showingHidden(): any;
    toggleShowHidden(): any;
    undock(): any;
    // undock(p0:QPonumber): any;
    // undock(p0:QPonumber, p1:QSize): any;
    undockGroup(): any;
    // undockGroup(p0:QPonumber): any;
    // undockGroup(p0:QPonumber, p1:QSize): any;
    update(): any;
    updateMicroFocus(): any;
    // updateSimpleWorkflowMode(DzSimpleWorkflowMgr::SimpleWorkflowModes): any;
    updateSurfaces(): any;

    // Signals
    visibilityChanged(p0: boolean): any;
    menuChanged(): any;
    labelChanged(p0: string): any;
    tabBarHiddenChanged(p0: boolean): any;
    paneGroupChanged(p0: DzPaneGroup, p1: DzPaneGroup): any;
    showingHiddenChanged(p0: boolean): any;
    editModeChanged(p0: boolean): any;
    groupSettingChanged(p0: number): any;
    currentTabChanged(p0: number): any;
    autoBakeChanged(p0: boolean): any;
    useBakeChanged(p0: boolean): any;
    // displayModeChanged(DzSurfaceSideNavHierarchy::DisplayMode): any;
    assetHoverChanged(p0: DzAssetPtr): any;
}