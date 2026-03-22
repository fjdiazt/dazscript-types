declare class DzHierarchyPane {
    acceptDrops: boolean;	// false
    accessibleDescription: string;	//
    accessibleName: string;	//
    autoFillBackground: boolean;	// false
    baseSize: QObject;	// [object object]
    childrenRect: QObject;	// [object object]
    childrenRegion: QObject;	// QVariant(QRegion)
    contextMenuPolicy: number;	// 1
    cursor: QObject;	// QVariant(QCursor)
    enabled: boolean;	// true
    focus: boolean;	// false
    focusPolicy: number;	// 0
    font: QObject;	// [object object]
    frameGeometry: QObject;	// [object object]
    frameSize: QObject;	// [object object]
    fullScreen: boolean;	// false
    geometry: QObject;	// [object object]
    height: number;	// 391
    inputMethodHints: number;	// 0
    isActiveWindow: boolean;	// true
    layoutDirection: number;	// 0
    locale: QObject;	// QVariant(QLocale)
    maximized: boolean;	// false
    maximumHeight: number;	// 16777215
    maximumSize: QObject;	// [object object]
    maximumWidth: number;	// 16777215
    minimized: boolean;	// false
    minimumHeight: number;	// 235
    minimumSize: QObject;	// [object object]
    minimumSizeHint: QObject;	// [object object]
    minimumWidth: number;	// 212
    modal: boolean;	// false
    mouseTracking: boolean;	// false
    name: string;	// Scene
    normalGeometry: QObject;	// [object object]
    objectName: string;	// Scene
    palette: QObject;	// [object object]
    pos: QObject;	// [object object]
    rect: QObject;	// [object object]
    size: QObject;	// [object object]
    sizeHint: QObject;	// [object object]
    sizeIncrement: QObject;	// [object object]
    sizePolicy: QObject;	// QVariant(QSizePolicy)
    statusTip: string;	//
    styleSheet: string;	//
    toolTip: string;	//
    updatesEnabled: boolean;	// true
    visible: boolean;	// true
    whatsThis: string;	//
    width: number;	// 416
    windowFilePath: string;	//
    windowIcon: QObject;	// QVariant(QIcon)
    windowIconText: string;	//
    windowModality: number;	// 0
    windowModified: boolean;	// false
    windowOpacity: number;	// 1
    windowTitle: string;	//
    x: number;	// 0
    y: number;	// 0
    buildOptionsMenu(p0: DzActionMenu): any;
    className(): any;
    close(): any;
    closeAll(): any;
    closeSelected(): void;
    closeSelected(p0: boolean): void;
    contextMenuAboutToShow(p0: DzMenu, p1: DzNode): any;
    customContextMenuRequested(p0: QPoint): void;
    deleteLater(): any;
    destroyed(): void;
    destroyed(p0: QObject): void;
    expandAll(): any;
    expandSelected(): void;
    expandSelected(p0: boolean): void;
    getDefaultSkin(): any;
    getFilterText(): any;
    getInfoDivider(): any;
    getLabel(): any;
    getNumFilteredMatches(): any;
    getOptionsMenu(): any;
    getOptionsMenuVersion(): any;
    getOverrideSkin(): any;
    getPaneGroup(): any;
    hide(): any;
    hidePane(): any;
    inherits(): any;
    labelChanged(p0: string): void;
    lockBoneOrder(): any;
    lockBoneOrderChanged(p0: boolean): void;
    lower(): any;
    makeGroupUndockable(): any;
    makeUndockable(): any;
    makeUndockable(p0: QSize): any;
    menuChanged(): void;
    moveToGroup(p0: DzPaneGroup): any;
    paneGroupChanged(p0: DzPaneGroup, p1: DzPaneGroup): void;
    parentInPlace(): any;
    parentInPlaceChanged(p0: boolean): void;
    raise(): any;
    refresh(): any;
    refreshStyleSheet(): any;
    refreshStyleSheet(p0: boolean): any;
    repaint(): any;
    //restoreSettings(p0: DzPaneSettings): any;
    //restoreSettings(p0: DzPaneSettings): any;
    //saveSettings(p0: DzPaneSettings): any;
    //saveSettings(p0: DzPaneSettings): any;
    searchNext(): any;
    searchPrevious(): any;
    setDefaultSkin(p0: DzSkin): any;
    setDisabled(p0: boolean): void;
    setEnabled(p0: boolean): void;
    setFilterText(p0: string): any;
    setFocus(): any;
    setHidden(p0: boolean): any;
    setLabel(p0: string): any;
    setLockBoneOrder(p0: boolean): any;
    setOverrideSkin(p0: DzSkin): any;
    setOverrideSkin(p0: DzSkin, p1: boolean): any;
    setParentInPlace(p0: boolean): any;
    setShowCameras(p0: boolean): any;
    setShowDForms(p0: boolean): any;
    setShowFigures(p0: boolean): any;
    setShowHidden(p0: boolean): any;
    setShowIK(p0: boolean): any;
    setShowLights(p0: boolean): any;
    setShowobjects(p0: boolean): any;
    setShown(p0: boolean): any;
    setStyleSheet(p0: string): any;
    setVisible(p0: boolean): any;
    setWindowModified(p0: boolean): void;
    setWindowTitle(p0: string): any;
    show(): any;
    showFullScreen(): any;
    showMaximized(): void;
    showMinimized(): void;
    showNormal(): any;
    showPane(): any;
    showingCameras(): any;
    showingCamerasChanged(p0: boolean): void;
    showingDForms(): any;
    showingDFormsChanged(p0: boolean): void;
    showingFigures(): any;
    showingFiguresChanged(p0: boolean): void;
    showingHidden(): any;
    showingHiddenChanged(p0: boolean): void;
    showingIK(): any;
    showingIKChanged(p0: boolean): void;
    showingLights(): any;
    showingLightsChanged(p0: boolean): void;
    showingobjects(): any;
    showingobjectsChanged(p0: boolean): void;
    sort(p0: number): any;
    sortAscending(): any;
    sortDescending(): any;
    sortNone(): any;
    sortType(): any;
    sortingChanged(p0: number): void;
    tabBarHiddenChanged(p0: boolean): void;
    update(): any;
    updateMicroFocus(): any;
    visibilityChanged(p0: boolean): void;
}