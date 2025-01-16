declare class QListView {
    acceptDrops: boolean;	// false
    accessibleDescription: string;	//
    accessibleName: string;	//
    alternatingRowColors: boolean;	// false
    autoFillBackground: boolean;	// false
    autoScroll: boolean;	// true
    autoScrollMargin: number;	// 16
    baseSize: QSizeWrapper;	// [object Object]
    batchSize: number;	// 100
    childrenRect: QRect;	// [object Object]
    childrenRegion: any;	// QVariant(QRegion)
    contextMenuPolicy: number;	// 1
    cursor: any;	// QVariant(QCursor)
    defaultDropAction: number;	// 0
    dragDropMode: number;	// 0
    dragDropOverwriteMode: boolean;	// false
    dragEnabled: boolean;	// false
    editTriggers: number;	// 10
    enabled: boolean;	// true
    flow: number;	// 1
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
    gridSize: QSizeWrapper;	// [object Object]
    height: number;	// 30
    horizontalScrollBarPolicy: number;	// 0
    horizontalScrollMode: number;	// 0
    iconSize: QSizeWrapper;	// [object Object]
    inputMethodHints: number;	// 0
    isActiveWindow: boolean;	// false
    isWrapping: boolean;	// false
    layoutDirection: number;	// 0
    layoutMode: number;	// 0
    lineWidth: number;	// 1
    locale: any;	// QVariant(QLocale)
    maximized: boolean;	// false
    maximumHeight: number;	// 16777215
    maximumSize: QSizeWrapper;	// [object Object]
    maximumWidth: number;	// 16777215
    midLineWidth: number;	// 0
    minimized: boolean;	// false
    minimumHeight: number;	// 0
    minimumSize: QSizeWrapper;	// [object Object]
    minimumSizeHint: QSizeWrapper;	// [object Object]
    minimumWidth: number;	// 0
    modal: boolean;	// false
    modelColumn: number;	// 0
    mouseTracking: boolean;	// false
    movement: number;	// 0
    name: string;	// listView
    normalGeometry: QRect;	// [object Object]
    objectName: string;	// listView
    //palette: QPaletteWrapper;	// [object Object]
    //pos: QPointWrapper;	// [object Object]
    rect: QRect;	// [object Object]
    resizeMode: number;	// 0
    selectionBehavior: number;	// 0
    selectionMode: number;	// 1
    selectionRectVisible: boolean;	// false
    showDropIndicator: boolean;	// true
    size: QSizeWrapper;	// [object Object]
    sizeHint: QSizeWrapper;	// [object Object]
    sizeIncrement: QSizeWrapper;	// [object Object]
    sizePolicy: any;	// QVariant(QSizePolicy)
    spacing: number;	// 0
    statusTip: string;	//
    styleSheet: string;	//
    tabKeyNavigation: boolean;	// false
    textElideMode: number;	// 1
    toolTip: string;	//
    uniformItemSizes: boolean;	// false
    updatesEnabled: boolean;	// true
    verticalScrollBarPolicy: number;	// 0
    verticalScrollMode: number;	// 0
    viewMode: number;	// 0
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
    wordWrap: boolean;	// false
    x: number;	// 0
    y: number;	// 0
    activated(p0: QModelIndex): void;
    clicked(p0: QModelIndex): void;
    //closeEditor(p0: QWidget, p1: QAbstractItemDelegate::EndEditHint): any;
    commitData(p0: QWidget): any;
    currentChanged(p0: QModelIndex, p1: QModelIndex): void;
    customContextMenuRequested(p0: QPoint): void;
    dataChanged(p0: QModelIndex, p1: QModelIndex): void;
    destroyed(): void;
    destroyed(p0: QObject): void;
    doubleClicked(p0: QModelIndex): void;
    edit(p0: QModelIndex): any;
    editorDestroyed(p0: QObject): void;
    entered(p0: QModelIndex): void;
    horizontalScrollbarAction(p0: number): any;
    horizontalScrollbarValueChanged(p0: number): void;
    //indexesMoved(p0: QModelIndexList): void;
    pressed(p0: QModelIndex): void;
    rowsAboutToBeRemoved(p0: QModelIndex, p1: number, p2: number): void;
    rowsInserted(p0: QModelIndex, p1: number, p2: number): void;
    //selectionChanged(p0: QItemSelection, p1: QItemSelection): void;
    setCurrentIndex(p0: QModelIndex): any;
    setDisabled(p0: boolean): void;
    setEnabled(p0: boolean): void;
    setHidden(p0: boolean): any;
    setRootIndex(p0: QModelIndex): any;
    setShown(p0: boolean): any;
    setStyleSheet(p0: QString): any;
    setVisible(p0: boolean): any;
    setWindowModified(p0: boolean): void;
    setWindowTitle(p0: QString): any;
    setupViewport(p0: QWidget): any;
    showMaximized(): void;
    showMinimized(): void;
    update(p0: QModelIndex): any;
    verticalScrollbarAction(p0: number): any;
    verticalScrollbarValueChanged(p0: number): void;
    viewportEntered(): void;
}