declare class DzDrawSettingsPane extends DzPane {

    // Properties
    objectName: string; // DrawSettings
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
    width: number; // 480
    height: number; // 670
    rect: object; // [object Object]
    childrenRect: object; // [object Object]
    childrenRegion: object; // QVariant(QRegion)
    sizePolicy: object; // QVariant(QSizePolicy)
    minimumSize: object; // [object Object]
    maximumSize: object; // [object Object]
    minimumWidth: number; // 213
    minimumHeight: number; // 132
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
    name: string; // DrawSettings

    // Methods
    _clone: any;
    _getMethodsNames: any;
    buildOptionsMenu(p0:DzActionMenu): any;
    className: any;
    close(): any;
    // customContextMenuRequested(p0:QPonumber): any;
    deleteLater(): any;
    destroyed(): any;
    destroyed(p0:QObject): any;
    getDefaultSkin(): any;
    getEditorGuidePage(): any;
    getElementEditor(): any;
    getInfoDivider(): any;
    getLabel(): any;
    getOptionsMenu(): any;
    getOptionsMenuVersion(): any;
    getOverrideSkin(): any;
    getPaneGroup(): DzPaneGroup;
    hide(): any;
    hidePane(): any;
    inherits: any;
    lower(): any;
    makeGroupDockable(): any;
    makeGroupUndockable(): any;
    makeUndockable(): any;
    makeUndockable(p0:QSize): any;
    moveToGroup(p0:DzPaneGroup): any;
    raise(): any;
    refresh(): any;
    refreshStyleSheet(): any;
    refreshStyleSheet(p0:boolean): any;
    render(): any;
    repanumber(): any;
    // restoreSettings(p0:DzPaneSettings): any;
    // restoreSettings(p0:DzPaneSettings): any;
    // saveSettings(DzPaneSettings&): any;
    // saveSettings(p0:DzPaneSettings): any;
    setCurrentTab(p0:number): any;
    setDefaultSkin(p0:DzSkin): any;
    setDisabled(p0:boolean): any;
    setEnabled(p0:boolean): any;
    setFocus(): any;
    setHidden(p0:boolean): any;
    setLabel(p0:string): any;
    setOverrideSkin(p0:DzSkin): any;
    setOverrideSkin(p0:DzSkin, p1:boolean): any;
    setShown(p0:boolean): any;
    setStyleSheet(p0:string): any;
    setVisible(p0:boolean): any;
    setWindowModified(p0:boolean): any;
    setWindowTitle(p0:string): any;
    show(): any;
    showFullScreen(): any;
    showHidden(p0:boolean): any;
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

    // Signals
    visibilityChanged(p0:boolean): any;
    menuChanged(): any;
    labelChanged(p0:string): any;
    tabBarHiddenChanged(p0:boolean): any;
    // paneGroupChanged(p0:DzPaneGroup, p1:DzPaneGroup*): any;
    currentTabChanged(p0:number): any;
    showingHiddenChanged(p0:boolean): any;
    assetHoverChanged(p0:DzAssetPtr): any;
}