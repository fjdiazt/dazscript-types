declare class DzProductAssetsView {

    // Enumerations
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
    objectName: string; // ProductContentProductAssetsView
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
    height: number; // 775
    rect: object; // [object Object]
    childrenRect: object; // [object Object]
    childrenRegion: object; // QVariant(QRegion)
    sizePolicy: object; // QVariant(QSizePolicy)
    minimumSize: object; // [object Object]
    maximumSize: object; // [object Object]
    minimumWidth: number; // 0
    minimumHeight: number; // 0
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
    frameShape: number; // 0
    frameShadow: number; // 16
    lineWidth: number; // 1
    midLineWidth: number; // 0
    frameWidth: number; // 0
    frameRect: object; // [object Object]
    name: string; // ProductContentProductAssetsView

    // Methods
    _clone: any;
    _getMethodsNames: any;
    browseToCategory(p0:string): any;
    className: any;
    clearPage(): any;
    close(): any;
    // contextMenuAboutToShow(p0:QMenu, p1:DzAssetList): any;
    // customContextMenuRequested(p0:QPonumber): any;
    deleteLater(): any;
    destroyed(): any;
    destroyed(p0:QObject): any;
    getContentTab(): DzFileContentTab;
    getFilterNavigationBar(): any;
    getProduct(): any;
    goBack(): any;
    goBackClicked(): any;
    handleIconButtonClicked(): any;
    // handleProductOperationAboutToStart(DzCloud::ProductRow): any;
    // handleProductOperationComplete(DzCloud::ProductRow, p0:boolean): any;
    // handleProductUninstallComplete(DzCloud::ProductRow, p0:boolean): any;
    // handleProductUpdateComplete(DzCloud::ProductRow, p0:boolean): any;
    handleUpdateButtonClicked(): any;
    hide(): any;
    inherits: any;
    lower(): any;
    raise(): any;
    repanumber(): any;
    setDisabled(p0:boolean): any;
    setEnabled(p0:boolean): any;
    setFocus(): any;
    setHidden(p0:boolean): any;
    setProduct(p0:DzProductAssetContainer): any;
    setShown(p0:boolean): any;
    setSideNavigationCollapsible(p0:boolean): any;
    setSideNavigationWidth(p0:number): any;
    setStyleSheet(p0:string): any;
    setVisible(p0:boolean): any;
    setWindowModified(p0:boolean): any;
    setWindowTitle(p0:string): any;
    show(): any;
    showFullScreen(): any;
    showMaximized(): any;
    showMinimized(): any;
    showNormal(): any;
    update(): any;
    updateMicroFocus(): any;

    // Signals
    assetHoverChanged(p0:DzAssetPtr): any;
    handleAssetIconChanged(p0:DzAbstractAssetContainer): any;
}