declare class DzPaneGroup {

    // Enumerations
    TabsTop: number; // 0
    TabsBottom: number; // 1
    TabsLeft: number; // 2
    TabsRight: number; // 3
    NoFrame: number; // 0
    Box: number; // 1
    Panel: number; // 2
    WinPanel: number; // 3
    HLine: number; // 4
    VLine: number; // 5
    StyledPanel: number; // 6
    Plain: number; // 16
    Raised: number; // 32
    Sunken: number; // 48

    // Properties
    objectName: string; // PaneGroup22
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
    width: number; // 474
    height: number; // 675
    rect: object; // [object Object]
    childrenRect: object; // [object Object]
    childrenRegion: object; // QVariant(QRegion)
    sizePolicy: object; // QVariant(QSizePolicy)
    minimumSize: object; // [object Object]
    maximumSize: object; // [object Object]
    minimumWidth: number; // 286
    minimumHeight: number; // 176
    maximumWidth: number; // 16777215
    maximumHeight: number; // 16777215
    sizeIncrement: object; // [object Object]
    baseSize: object; // [object Object]
    palette: object; // [object Object]
    font: object; // [object Object]
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
    minimumSizeHint: object; // [object Object]
    acceptDrops: boolean; // true
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
    frameShape: number; // 0
    frameShadow: number; // 0
    lineWidth: number; // 0
    midLineWidth: number; // 0
    frameWidth: number; // 0
    frameRect: object; // [object Object]
    name: string; // PaneGroup22

    // Methods
    // addAHTab(p0:DzAutoHideTab): any;
    ahHasFocus(): any;
    ahHidePane(): any;
    // ahShowPane(p0:DzPane, p1:QPonumber, p2:DzLocation): any;
    anyoneHasFocus(): any;
    className: any;
    close(): any;
    // customContextMenuRequested(p0:QPonumber): any;
    deleteLater(): any;
    destroyed(): any;
    destroyed(p0: QObject): any;
    dock(): any;
    dock(p0: DzDockArea): any;
    dock(p0: DzDockArea, p1: boolean): any;
    dock(p0: DzDockArea, p1: number): any;
    // dockAndDoAutoHide(p0:DzLocation): any;
    docked(): any;
    emptyGroup(): any;
    fitScreen(): any;
    fitScreenHeight(): any;
    fitScreenWidth(): any;
    getAHBar(): any;
    getArea(): DzDockArea;
    getColumnDimension(): any;
    getColumnNum(): any;
    getCurrentPane(): any;
    getDragOffset(): any;
    getLastSize(): any;
    getLength(): any;
    getMinimumLength(): any;
    getNumPanes(): any;
    getNumShownPanes(): any;
    getPane(p0: number): any;
    getPreferredLength(): any;
    getTimer(): any;
    hide(): any;
    hideAllPanes(): any;
    hidePane(p0: DzPane): any;
    hideTabBar(p0: boolean): any;
    inherits: any;
    isAutoHideOn(): any;
    isDocked(): any;
    isLengthFixed(): any;
    isMinimized(): any;
    isResizing(): any;
    isUndockable(): any;
    lower(): any;
    minimize(): any;
    // minimized(p0:DzDockWindow): any;
    outlineDrawFinished(): any;
    outlineDrawStarting(): any;
    raise(): any;
    // removeAHTab(p0:DzAutoHideTab): any;
    repanumber(): any;
    restore(): any;
    // restored(p0:DzDockWindow): any;
    setAutoHide(p0: boolean): any;
    setColumnDimension(p0: number): any;
    setColumnNum(p0: number): any;
    setDisabled(p0: boolean): any;
    setEnabled(p0: boolean): any;
    setFocus(): any;
    setHidden(p0: boolean): any;
    setLength(p0: number): any;
    setPaneEnabled(p0: DzPane, p1: boolean): any;
    setPreferredLength(p0: number): any;
    setResizeHandlesVisible(p0: boolean): any;
    setShown(p0: boolean): any;
    setStyleSheet(p0: string): any;
    setTitleBarVisible(p0: boolean): any;
    // setUndockedTabBarPosition(p0:TabBarPosition): any;
    setVisible(p0: boolean): any;
    setWindowModified(p0: boolean): any;
    setWindowTitle(p0: string): any;
    show(): any;
    showFullScreen(): any;
    showMaximized(): any;
    showMinimized(): any;
    showNormal(): any;
    showPane(p0: DzPane): any;
    tabBarHidden(): any;
    toggleDock(): any;
    toggleMinimized(): any;
    // toggleStateForAH(p0:DzLocation): any;
    undock(): any;
    undocked(): any;
    undockedTabBarPosition(): any;
    unpinnedAboutToHide(): any;
    update(): any;
    updateMicroFocus(): any;
    updateTabPosition(): any;

    // Signals
    lengthChanged(): any;
}