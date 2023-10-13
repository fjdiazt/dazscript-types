declare class QPushButton {
    /* Methods */
    constructor(parent: QWidget, name: string);
    constructor(icon: QIcon, text: QString, parent: QWidget, name: string);
    constructor(text: QString, parent: QWidget, name: string);

    static _q_styleSheetWidgetFont: QFont;	// [object Object]
    acceptDrops: boolean;	// false
    accessibleDescription: string;	//
    accessibleName: string;	//
    autoDefault: boolean;	// true
    autoExclusive: boolean;	// false
    autoFillBackground: boolean;	// false
    autoRepeat: boolean;	// false
    autoRepeatDelay: number;	// 300
    autoRepeatInterval: number;	// 100
    baseSize: QSizeWrapper;	// [object Object]
    checkable: boolean;	// false
    checked: boolean;	// false
    childrenRect: QRect;	// [object Object]
    childrenRegion: any;	// QVariant(QRegion)
    contextMenuPolicy: number;	// 1
    cursor: any;	// QVariant(QCursor)
    default: boolean;	// false
    down: boolean;	// false
    enabled: boolean;	// true
    flat: boolean;	// true
    focus: boolean;	// false
    focusPolicy: number;	// 11
    font: QFont;	// [object Object]
    frameGeometry: QRect;	// [object Object]
    frameSize: QSizeWrapper;	// [object Object]
    fullScreen: boolean;	// false
    geometry: QRect;	// [object Object]
    height: number;	// 36
    icon: any;	// QVariant(QIcon)
    iconSize: QSizeWrapper;	// [object Object]
    inputMethodHints: number;	// 0
    isActiveWindow: boolean;	// false
    layoutDirection: number;	// 0
    locale: any;	// QVariant(QLocale)
    maximized: boolean;	// false
    maximumHeight: number;	// 36
    maximumSize: QSizeWrapper;	// [object Object]
    maximumWidth: number;	// 120
    minimized: boolean;	// false
    minimumHeight: number;	// 36
    minimumSize: QSizeWrapper;	// [object Object]

    minimumWidth: number;	// 120
    modal: boolean;	// false
    mouseTracking: boolean;	// false
    name: string;	// primary
    normalGeometry: QRect;	// [object Object]
    objectName: string;	// primary
    palette: QPalette;	// [object Object]
    pos: QPoint;	// [object Object]
    rect: QRect;	// [object Object]
    shortcut: any;	//
    size: QSizeWrapper;	// [object Object]
    sizeHint: QSizeWrapper;	// [object Object]
    sizeIncrement: QSizeWrapper;	// [object Object]
    sizePolicy: any;	// QVariant(QSizePolicy)
    statusTip: string;	//
    styleSheet: string;
    text: string;	// PushButton
    toolTip: string;	//
    updatesEnabled: boolean;	// true
    visible: boolean;	// false
    whatsThis: string;	//
    width: number;	// 120
    windowFilePath: string;	//
    windowIcon: any;	// QVariant(QIcon)
    windowIconText: string;	//
    windowModality: number;	// 0
    windowModified: boolean;	// false
    windowOpacity: number;	// 1
    windowTitle: string;	//
    x: number;	// 21
    y: number;	// 105
    animateClick(p0: number): any;
    clicked(): void;
    clicked(p0: boolean): void;
    customContextMenuRequested(p0: QPoint): void;
    destroyed(): void;
    destroyed(p0: QObject): void;
    pressed(): void;
    released(): void;
    setChecked(p0: boolean): void;
    setDisabled(p0: boolean): void;
    setEnabled(p0: boolean): void;
    setHidden(p0: boolean): any;
    setIconSize(p0: QSize): any;
    setOn(p0: boolean): any;
    setShown(p0: boolean): any;
    setStyleSheet(p0: QString): any;
    setVisible(p0: boolean): any;
    setWindowModified(p0: boolean): void;
    setWindowTitle(p0: QString): any;
    showMaximized(): void;
    showMinimized(): void;
    toggled(p0: boolean): void;
}