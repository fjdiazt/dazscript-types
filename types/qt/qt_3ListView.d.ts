declare class Q3ListView extends Q3ScrollView {
    acceptDrops: boolean;	// false
    accessibleDescription: string;	//
    accessibleName: string;	//
    allColumnsShowFocus: boolean;	// false
    autoFillBackground: boolean;	// false
    baseSize: QObject;	// [object Object]
    childCount: number;	// 0
    childrenRect: QObject;	// [object Object]
    childrenRegion: QObject;	// QVariant(QRegion)
    columns: number;	// 0
    contextMenuPolicy: number;	// 1
    cursor: QObject;	// QVariant(QCursor)
    defaultRenameAction: number;	// 1
    enabled: boolean;	// true
    focus: boolean;	// false
    focusPolicy: number;	// 15
    font: QObject;	// [object Object]
    frameGeometry: QObject;	// [object Object]
    frameSize: QObject;	// [object Object]
    fullScreen: boolean;	// false
    geometry: QObject;	// [object Object]
    height: number;	// 500
    inputMethodHints: number;	// 0
    isActiveWindow: boolean;	// false
    itemMargin: number;	// 1
    layoutDirection: number;	// 0
    locale: QObject;	// QVariant(QLocale)
    margin: number;	// 0
    maximized: boolean;	// false
    maximumHeight: number;	// 16777215
    maximumSize: QObject;	// [object Object]
    maximumWidth: number;	// 16777215
    minimized: boolean;	// false
    minimumHeight: number;	// 500
    minimumSize: QObject;	// [object Object]
    minimumWidth: number;	// 0
    modal: boolean;	// false
    mouseTracking: boolean;	// true
    multiSelection: boolean;	// false
    name: string;	// paco
    normalGeometry: QObject;	// [object Object]
    objectName: string;	// paco
    pos: QObject;	// [object Object]
    rect: QObject;	// [object Object]
    resizeMode: number;	// 0
    rootIsDecorated: boolean;	// false
    selectionMode: number;	// 0
    showSortIndicator: boolean;	// false
    showToolTips: boolean;	// true
    size: QObject;	// [object Object]
    sizeIncrement: QObject;	// [object Object]
    sizePolicy: QObject;	// QVariant(QSizePolicy)
    statusTip: string;	//
    styleSheet: string;	//
    toolTip: string;	//
    treeStepSize: number;	// 10
    updatesEnabled: boolean;	// true
    visible: boolean;	// false
    whatsThis: string;	//
    width: number;	// 500
    windowFilePath: string;	//
    windowIcon: QObject;	// QVariant(QIcon)
    windowIconText: string;	//
    windowModality: number;	// 0
    windowModified: boolean;	// false
    windowOpacity: number;	// 1
    windowTitle: string;	//
    x: number;	// 0
    y: number;	// 0
    adjustColumn(p0: number): any;
    center(p0: number, p1: number): any;
    center(p0: number, p1: number, p2: number, p3: number): any;
    className(): any;
    clear(): any;
    clicked(p0: Q3ListViewItem): void;
    clicked(p0: Q3ListViewItem, p1: QPoint, p2: number): void;
    close(): any;
    collapsed(p0: Q3ListViewItem): void;
    contentsMoving(p0: number, p1: number): any;
    contextMenuRequested(p0: Q3ListViewItem, p1: QPoint, p2: number): void;
    currentChanged(p0: Q3ListViewItem): void;
    customContextMenuRequested(p0: QPoint): void;
    deleteLater(): any;
    destroyed(): void;
    destroyed(p0: QObject): void;
    doAutoScroll(): any;
    doubleClicked(p0: Q3ListViewItem): void;
    doubleClicked(p0: Q3ListViewItem, p1: QPoint, p2: number): void;
    dropped(p0: QDropEvent): void;
    ensureVisible(p0: number, p1: number): any;
    ensureVisible(p0: number, p1: number, p2: number, p3: number): any;
    expanded(p0: Q3ListViewItem): void;
    hide(): any;
    horizontalSliderPressed(): void;
    horizontalSliderReleased(): void;
    inherits(): any;
    invertSelection(): any;
    itemRenamed(p0: Q3ListViewItem, p1: number): void;
    itemRenamed(p0: Q3ListViewItem, p1: number, p2: QString): void;
    lower(): any;
    mouseButtonClicked(p0: number, p1: Q3ListViewItem, p2: QPoint, p3: number): void;
    mouseButtonPressed(p0: number, p1: Q3ListViewItem, p2: QPoint, p3: number): void;
    onItem(p0: Q3ListViewItem): any;
    onViewport(): any;
    pressed(p0: Q3ListViewItem): void;
    pressed(p0: Q3ListViewItem, p1: QPoint, p2: number): void;
    raise(): any;
    repaint(): any;
    resizeContents(p0: number, p1: number): any;
    returnPressed(p0: Q3ListViewItem): void;
    rightButtonClicked(p0: Q3ListViewItem, p1: QPoint, p2: number): void;
    rightButtonPressed(p0: Q3ListViewItem, p1: QPoint, p2: number): void;
    scrollBy(p0: number, p1: number): any;
    selectAll(p0: boolean): any;
    selectionChanged(): void;
    selectionChanged(p0: Q3ListViewItem): void;
    setContentsPos(p0: number, p1: number): any;
    setDisabled(p0: boolean): void;
    setEnabled(p0: boolean): void;
    setFocus(): any;
    setHidden(p0: boolean): any;
    setShown(p0: boolean): any;
    setStyleSheet(p0: QString): any;
    setVisible(p0: boolean): any;
    setWindowModified(p0: boolean): void;
    setWindowTitle(p0: QString): any;
    show(): any;
    showFullScreen(): any;
    showMaximized(): void;
    showMinimized(): void;
    showNormal(): any;
    spacePressed(p0: Q3ListViewItem): void;
    triggerUpdate(): any;
    update(): any;
    updateContents(): any;
    updateMicroFocus(): any;
    updateScrollBars(): any;
    verticalSliderPressed(): void;
    verticalSliderReleased(): void;
}