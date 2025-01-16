declare class QDesktopWidget {
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
    height: number;	// 1080
    inputMethodHints: number;	// 0
    isActiveWindow: boolean;	// false
    layoutDirection: number;	// 0
    locale: QObject;	// QVariant(QLocale)
    maximized: boolean;	// false
    maximumHeight: number;	// 16777215
    maximumSize: QObject;	// [object object]
    maximumWidth: number;	// 16777215
    minimized: boolean;	// false
    minimumHeight: number;	// 0
    minimumSize: QObject;	// [object object]
    minimumSizeHint: QObject;	// [object object]
    minimumWidth: number;	// 0
    modal: boolean;	// false
    mouseTracking: boolean;	// false
    name: string;	// desktop
    normalGeometry: QObject;	// [object object]
    objectName: string;	// desktop
    palette: QObject;	// [object object]
    pos: QObject;	// [object object]
    primaryScreen: number;	// 0
    rect: QObject;	// [object object]
    screenCount: number;	// 1
    size: QObject;	// [object object]
    sizeHint: QObject;	// [object object]
    sizeIncrement: QObject;	// [object object]
    sizePolicy: QObject;	// QVariant(QSizePolicy)
    statusTip: string;	//
    styleSheet: string;	//
    toolTip: string;	//
    updatesEnabled: boolean;	// true
    virtualDesktop: boolean;	// true
    visible: boolean;	// true
    whatsThis: string;	//
    width: number;	// 1920
    windowFilePath: string;	//
    windowIcon: QObject;	// QVariant(QIcon)
    windowIconText: string;	//
    windowModality: number;	// 0
    windowModified: boolean;	// false
    windowOpacity: number;	// 1
    windowTitle: string;	//
    x: number;	// 0
    y: number;	// 0
    className(): any;
    close(): any;
    customContextMenuRequested(p0: QPoint): void;
    deleteLater(): any;
    destroyed(): void;
    destroyed(p0: QObject): void;
    hide(): any;
    inherits(): any;
    lower(): any;
    raise(): any;
    repaint(): any;
    resized(p0: number): void;
    screenCountChanged(p0: number): void;
    setDisabled(p0: boolean): void;
    setEnabled(p0: boolean): void;
    setFocus(): any;
    setHidden(p0: boolean): any;
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
    update(): any;
    updateMicroFocus(): any;
    workAreaResized(p0: number): void;
}