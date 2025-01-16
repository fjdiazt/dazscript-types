declare class QTextEdit {
    static _q_styleSheetWidgetFont: QFont;	// [object Object]
    acceptDrops: boolean;	// true
    acceptRichText: boolean;	// true
    accessibleDescription: string;	//
    accessibleName: string;	//
    autoFillBackground: boolean;	// false
    autoFormatting: number;	// 0
    baseSize: QSizeWrapper;	// [object Object]
    childrenRect: QRect;	// [object Object]
    childrenRegion: any;	// QVariant(QRegion)
    contextMenuPolicy: number;	// 1
    cursor: any;	// QVariant(QCursor)
    cursorWidth: number;	// 1
    documentTitle: string;	//
    enabled: boolean;	// true
    focus: boolean;	// false
    focusPolicy: number;	// 15
    font: QFont;	// [object Object]
    frameGeometry: QRect;	// [object Object]
    frameRect: QRect;	// [object Object]
    frameShadow: number;	// 16
    frameShape: number;	// 0
    frameSize: QSizeWrapper;	// [object Object]
    frameWidth: number;	// 0
    fullScreen: boolean;	// false
    geometry: QRect;	// [object Object]
    height: number;	// 480
    horizontalScrollBarPolicy: number;	// 0
    html: string;
    inputMethodHints: number;	// 0
    isActiveWindow: boolean;	// false
    layoutDirection: number;	// 0
    lineWidth: number;	// 1
    lineWrapColumnOrWidth: number;	// 0
    lineWrapMode: number;	// 1
    locale: any;	// QVariant(QLocale)
    maximized: boolean;	// false
    maximumHeight: number;	// 16777215
    maximumSize: QSizeWrapper;	// [object Object]
    maximumWidth: number;	// 16777215
    midLineWidth: number;	// 0
    minimized: boolean;	// false
    minimumHeight: number;	// 0
    minimumSize: QSizeWrapper;	// [object Object]

    minimumWidth: number;	// 0
    modal: boolean;	// false
    mouseTracking: boolean;	// false
    name: string;	// loggerTextEdit
    normalGeometry: QRect;	// [object Object]
    objectName: string;	// loggerTextEdit
    overwriteMode: boolean;	// false
    palette: QPalette;	// [object Object]
    plainText: string;	//
    pos: QPoint;	// [object Object]
    readOnly: boolean;	// false
    rect: QRect;	// [object Object]
    size: QSizeWrapper;	// [object Object]
    sizeHint: QSizeWrapper;	// [object Object]
    sizeIncrement: QSizeWrapper;	// [object Object]
    sizePolicy: any;	// QVariant(QSizePolicy)
    statusTip: string;	//
    styleSheet: string;	//
    tabChangesFocus: boolean;	// false
    tabStopWidth: number;	// 80
    textInteractionFlags: number;	// 19
    toolTip: string;	//
    undoRedoEnabled: boolean;	// true
    updatesEnabled: boolean;	// true
    verticalScrollBarPolicy: number;	// 0
    visible: boolean;	// false
    whatsThis: string;	//
    width: number;	// 640
    windowFilePath: string;	//
    windowIcon: any;	// QVariant(QIcon)
    windowIconText: string;	//
    windowModality: number;	// 0
    windowModified: boolean;	// false
    windowOpacity: number;	// 1
    windowTitle: string;	//
    x: number;	// 0
    y: number;	// 0
    append(p0: QString): any;
    copyAvailable(p0: boolean): any;
    //currentCharFormatChanged(p0: QTextCharFormat): void;
    currentColorChanged(p0: QColor): void;
    currentFontChanged(p0: QFont): void;
    cursorPositionChanged(): void;
    customContextMenuRequested(p0: QPoint): void;
    destroyed(): void;
    destroyed(p0: QObject): void;
    insertHtml(p0: QString): any;
    insertPlainText(p0: QString): any;
    redoAvailable(p0: boolean): any;
    scrollToAnchor(p0: QString): any;
    selectionChanged(): void;
    setAlignment(p0: number): any;
    setColor(p0: QColor): any;
    setCurrentFont(p0: QFont): any;
    setDisabled(p0: boolean): void;
    setEnabled(p0: boolean): void;
    setFontFamily(p0: QString): any;
    setFontItalic(p0: boolean): any;
    setFontPointSize(p0: number): any;
    setFontUnderline(p0: boolean): any;
    setFontWeight(p0: number): any;
    setHidden(p0: boolean): any;
    setHtml(p0: QString): any;
    setModified(): void;
    setModified(p0: boolean): void;
    setPlainText(p0: QString): any;
    setShown(p0: boolean): any;
    setStyleSheet(p0: QString): any;
    setText(p0: QString): any;
    setTextBackgroundColor(p0: QColor): any;
    setTextColor(p0: QColor): any;
    setVisible(p0: boolean): any;
    setWindowModified(p0: boolean): void;
    setWindowTitle(p0: QString): any;
    setupViewport(p0: QWidget): any;
    showMaximized(): void;
    showMinimized(): void;
    textChanged(): void;
    undoAvailable(p0: boolean): any;
    zoomIn(p0: number): any;
    zoomOut(p0: number): any;
}