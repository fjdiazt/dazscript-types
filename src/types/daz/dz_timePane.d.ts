declare class DzTimePane extends DzPane {

    // Properties
    objectName: string; // Timeline
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
    width: number; // 1135
    height: number; // 352
    rect: object; // [object Object]
    childrenRect: object; // [object Object]
    childrenRegion: object; // QVariant(QRegion)
    minimumSize: object; // [object Object]
    maximumSize: object; // [object Object]
    minimumWidth: number; // 577
    minimumHeight: number; // 107
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
    name: string; // Timeline

    // Methods
    _clone: any;
    _getMethodsNames: any;
    buildOptionsMenu(p0: DzActionMenu): any;
    className: any;
    close(): any;
    collapseAll(): any;
    copySelectedKeys(): any;
    createFilteredKeys(): any;
    createFilteredKeys(p0: number): any;
    createKeys(): any;
    // customContextMenuRequested(p0:QPonumber): any;
    deleteKeys(): any;
    deleteLater(): any;
    deleteSelectedKeys(): any;
    destroyed(): any;
    destroyed(p0: QObject): any;
    expandAll(): any;
    frameKeyGraph(): any;
    frameKeyGraph(p0: boolean): any;
    getCurrentFrame(): any;
    getDefaultSkin(): any;
    getFilterText(): any;
    getFilteredKeyCreationScope(): any;
    getFilteredPropertyTypes(): any;
    getFramesPerSecond(): any;
    getKeyGraphOpen(): any;
    getLabel(): any;
    getMonitorParametersPane(): any;
    getNumFilteredMatches(): any;
    getOptionsMenu(): any;
    getOptionsMenuVersion(): any;
    getOverrideSkin(): any;
    getPaneGroup(): any;
    getPlayAllFrames(): any;
    getPlayRangeEnd(): any;
    getPlayRangeStart(): any;
    getTotalFrames(): any;
    getViewMode(): any;
    hasCopiedKeys(): any;
    hasDopeSheetItemContext(): any;
    hasDopeSheetItemSelection(): any;
    hasSelectedKeys(): any;
    hide(): any;
    hidePane(): any;
    inherits: any;
    lower(): any;
    makeGroupDockable(): any;
    makeGroupUndockable(): any;
    makeUndockable(): any;
    makeUndockable(p0: QSize): any;
    moveRootNodeDown(): any;
    moveRootNodeToBottom(): any;
    moveRootNodeToTop(): any;
    moveRootNodeUp(): any;
    moveToGroup(p0: DzPaneGroup): any;
    pasteKeys(): any;
    raise(): any;
    refresh(): any;
    refreshDopesheet(): any;
    refreshStyleSheet(): any;
    refreshStyleSheet(p0: boolean): any;
    repanumber(): any;
    // restoreSettings(p0:DzPaneSettings): any;
    // restoreSettings(p0:DzPaneSettings): any;
    // saveSettings(DzPaneSettings&): any;
    // saveSettings(p0:DzPaneSettings): any;
    searchDopesheetNext(): any;
    searchDopesheetPrevious(): any;
    setCurrentFrame(p0: number): any;
    setDefaultSkin(p0: DzSkin): any;
    setDisabled(p0: boolean): any;
    setEnabled(p0: boolean): any;
    setFilterText(p0: string): any;
    // setFilteredKeyCreationScope(p0:KeyScope): any;
    // setFilteredPropertyTypes(p0:PropertyTypes): any;
    setFocus(): any;
    setFramesPerSecond(p0: number): any;
    setHidden(p0: boolean): any;
    setInterpType(p0: number): any;
    setKeyGraphOpen(p0: boolean): any;
    setLabel(p0: string): any;
    setMonitorParametersPane(p0: boolean): any;
    setOverrideSkin(p0: DzSkin): any;
    setOverrideSkin(p0: DzSkin, p1: boolean): any;
    setPlayAllFrames(p0: boolean): any;
    setPlayRangeEnd(p0: number): any;
    setPlayRangeStart(p0: number): any;
    setShown(p0: boolean): any;
    setStyleSheet(p0: string): any;
    setTotalFrames(p0: number): any;
    // setViewMode(p0:ViewMode): any;
    setVisible(p0: boolean): any;
    setWindowModified(p0: boolean): any;
    setWindowTitle(p0: string): any;
    show(): any;
    showFullScreen(): any;
    showMaximized(): any;
    showMinimized(): any;
    showNormal(): any;
    showPane(): any;
    skipToNextFilteredKey(): any;
    skipToNextFrame(): any;
    skipToNextKey(): any;
    skipToPlayRangeEnd(): any;
    skipToPlayRangeStart(): any;
    skipToPreviousFilteredKey(): any;
    skipToPreviousFrame(): any;
    skipToPreviousKey(): any;
    toggleLoop(): any;
    togglePlayback(): any;
    undock(): any;
    // undock(p0:QPonumber): any;
    // undock(p0:QPonumber, p1:QSize): any;
    undockGroup(): any;
    // undockGroup(p0:QPonumber): any;
    // undockGroup(p0:QPonumber, p1:QSize): any;
    update(): any;
    updateMicroFocus(): any;

    // Signals
    visibilityChanged(p0: boolean): any;
    menuChanged(): any;
    labelChanged(p0: string): any;
    tabBarHiddenChanged(p0: boolean): any;
    // paneGroupChanged(p0:DzPaneGroup, p1:DzPaneGroup*): any;
    // viewModeChanged(p0:ViewMode): any;
    monitorParametersPaneChanged(p0: boolean): any;
    playAllFramesChanged(p0: boolean): any;
    // dopesheetPropertyListChanged(QVector<DzProperty>, p0:boolean): any;
    // graphChannelListChanged(QVector<DzProperty>): any;
}