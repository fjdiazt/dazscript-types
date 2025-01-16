declare class QLineEdit extends QWidget {
    acceptDrops: boolean;	// true
    acceptableInput: boolean;	// true
    accessibleDescription: string;	//
    accessibleName: string;	//
    alignment: number;	// 129
    autoFillBackground: boolean;	// false
    baseSize: QSizeWrapper;	// [object Object]
    childrenRect: QRect;	// [object Object]
    childrenRegion: any;	// QVariant(QRegion)
    contextMenuPolicy: number;	// 1
    cursor: any;	// QVariant(QCursor)
    cursorMoveStyle: number;	// 0
    cursorPosition: number;	// 0
    displayText: string;	//
    dragEnabled: boolean;	// false
    echoMode: number;	// 0
    enabled: boolean;	// true
    focus: boolean;	// false
    focusPolicy: number;	// 11
    font: QFont;	// [object Object]
    frame: boolean;	// true
    frameGeometry: QRect;	// [object Object]
    frameSize: QSizeWrapper;	// [object Object]
    fullScreen: boolean;	// false
    geometry: QRect;	// [object Object]
    hasSelectedText: boolean;	// false
    height: number;	// 36
    inputMask: string;	//
    inputMethodHints: number;	// 0
    isActiveWindow: boolean;	// false
    layoutDirection: number;	// 0
    locale: any;	// QVariant(QLocale)
    maxLength: number;	// 32767
    maximized: boolean;	// false
    maximumHeight: number;	// 16777215
    maximumSize: QSizeWrapper;	// [object Object]
    maximumWidth: number;	// 16777215
    minimized: boolean;	// false
    minimumHeight: number;	// 36
    minimumSize: QSizeWrapper;	// [object Object]

    minimumWidth: number;	// 0
    modal: boolean;	// false
    modified: boolean;	// false
    mouseTracking: boolean;	// true
    name: string;	// nameEdit
    normalGeometry: QRect;	// [object Object]
    objectName: string;	// nameEdit
    palette: QPalette;	// [object Object]
    placeholderText: string;	//
    pos: QPoint;	// [object Object]
    readOnly: boolean;	// false
    rect: QRect;	// [object Object]
    redoAvailable: boolean;	// false
    selectedText: string;	//
    size: QSizeWrapper;	// [object Object]
    sizeHint: QSizeWrapper;	// [object Object]
    sizeIncrement: QSizeWrapper;	// [object Object]
    sizePolicy: any;	// QVariant(QSizePolicy)
    statusTip: string;	//
    styleSheet: string;	//
    text: string;	//
    toolTip: string;	//
    undoAvailable: boolean;	// false
    updatesEnabled: boolean;	// true
    visible: boolean;	// false
    whatsThis: string;	//
    width: number;	// 100
    windowFilePath: string;	//
    windowIcon: any;	// QVariant(QIcon)
    windowIconText: string;	//
    windowModality: number;	// 0
    windowModified: boolean;	// false
    windowOpacity: number;	// 1
    windowTitle: string;	//
    x: number;	// 0
    y: number;	// 0
    setPlaceholderText(text: string): void;
    cursorPositionChanged(p0: number, p1: number): void;
    customContextMenuRequested(p0: QPoint): void;
    destroyed(): void;
    destroyed(p0: QObject): void;
    editingFinished(): void;
    returnPressed(): void;
    selectionChanged(): void;
    setDisabled(p0: boolean): void;
    setEnabled(p0: boolean): void;
    setHidden(p0: boolean): any;
    setShown(p0: boolean): any;
    setStyleSheet(p0: QString): any;
    setText(p0: QString): any;
    setVisible(p0: boolean): any;
    setWindowModified(p0: boolean): void;
    setWindowTitle(p0: QString): any;
    showMaximized(): void;
    showMinimized(): void;
    textChanged(p0: QString): void;
    textEdited(p0: QString): void;
}