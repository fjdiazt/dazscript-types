declare class QComboBox extends QWidget {
    acceptDrops: boolean;	// false
    accessibleDescription: string;	//
    accessibleName: string;	//
    autoCompletion: boolean;	// true
    autoCompletionCaseSensitivity: number;	// 0
    autoFillBackground: boolean;	// false
    baseSize: QSizeWrapper;	// [object Object]
    childrenRect: QRect;	// [object Object]
    childrenRegion: any;	// QVariant(QRegion)
    contextMenuPolicy: number;	// 1
    count: number;	// 0
    currentIndex: number;	// -1
    currentText: string;	//
    cursor: any;	// QVariant(QCursor)
    duplicatesEnabled: boolean;	// false
    editable: boolean;	// false
    enabled: boolean;	// true
    focus: boolean;	// false
    focusPolicy: number;	// 15
    font: QFont;	// [object Object]
    frame: boolean;	// true
    frameGeometry: QRect;	// [object Object]
    frameSize: QSizeWrapper;	// [object Object]
    fullScreen: boolean;	// false
    geometry: QRect;	// [object Object]
    height: number;	// 22
    iconSize: QSizeWrapper;	// [object Object]
    inputMethodHints: number;	// 0
    insertPolicy: number;	// 3
    isActiveWindow: boolean;	// false
    layoutDirection: number;	// 0
    locale: any;	// QVariant(QLocale)
    maxCount: number;	// 2147483647
    maxVisibleItems: number;	// 10
    maximized: boolean;	// false
    maximumHeight: number;	// 16777215
    maximumSize: QSizeWrapper;	// [object Object]
    maximumWidth: number;	// 16777215
    minimized: boolean;	// false
    minimumContentsLength: number;	// 0
    minimumHeight: number;	// 0
    minimumSize: QSizeWrapper;	// [object Object]
    minimumWidth: number;	// 0
    modal: boolean;	// false
    modelColumn: number;	// 0
    mouseTracking: boolean;	// false
    name: string;	// operatorComboBox
    normalGeometry: QRect;	// [object Object]
    objectName: string;	// operatorComboBox
    palette: QPalette;	// [object Object]
    pos: QPoint;	// [object Object]
    rect: QRect;	// [object Object]
    size: QSizeWrapper;	// [object Object]
    sizeAdjustPolicy: number;	// 1
    sizeHint: QSizeWrapper;	// [object Object]
    sizeIncrement: QSizeWrapper;	// [object Object]
    sizePolicy: any;	// QVariant(QSizePolicy)
    statusTip: string;	//
    styleSheet: string;	//
    toolTip: string;	//
    updatesEnabled: boolean;	// true
    visible: boolean;	// false
    whatsThis: string;	//
    width: number;	// 141
    windowFilePath: string;	//
    windowIcon: any;	// QVariant(QIcon)
    windowIconText: string;	//
    windowModality: number;	// 0
    windowModified: boolean;	// false
    windowOpacity: number;	// 1
    windowTitle: string;	//
    x: number;	// 10
    y: number;	// 230
    addItem(text: QString): void;
    addItem(text: QString, userData: QString): void;
    addItems(items: QString[]): void;
    activated(p0: number): void;
    activated(p0: QString): void;
    currentIndexChanged(p0: number): void;
    currentIndexChanged(p0: QString): void;
    customContextMenuRequested(p0: QPoint): void;
    destroyed(): void;
    destroyed(p0: QObject): void;
    editTextChanged(p0: QString): void;
    highlighted(p0: number): void;
    highlighted(p0: QString): void;
    setCurrentIndex(p0: number): any;
    setDisabled(p0: boolean): void;
    setEditText(p0: QString): any;
    setEnabled(p0: boolean): void;
    setHidden(p0: boolean): any;
    setShown(p0: boolean): any;
    setStyleSheet(p0: QString): any;
    setVisible(p0: boolean): any;
    setWindowModified(p0: boolean): void;
    setWindowTitle(p0: QString): any;
    showMaximized(): void;
    showMinimized(): void;
    textChanged(p0: QString): void;
}