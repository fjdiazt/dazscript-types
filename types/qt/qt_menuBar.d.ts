declare class QMenuBar extends QWidget {

    /* Properties */

    /* Methods */
    constructor(parent: QWidget, name: string);
    actionAt(obj: QPoint): QAction;
    actionEvent(obj: QActionEvent): void;
    actionGeometry(obj: QAction): QRect;
    activated(itemId: number): void;
    activeAction(): QAction;
    addAction(text: QString, receiver: QObject, member: string): QAction;
    addMenu(menu: QMenu): QAction;
    addMenu(icon: QIcon, title: QString): QMenu;
    addMenu(title: QString): QMenu;
    addMenu(menu: QMenu): QAction;
    addMenu(icon: QIcon, title: QString): QMenu;
    addMenu(title: QString): QMenu;
    addMenu(menu: QMenu): QAction;
    addMenu(icon: QIcon, title: QString): QMenu;
    addMenu(title: QString): QMenu;
    addSeparator(): QAction;
    autoGeometry(): any;
    changeEvent(obj: QEvent): void;
    clear(): void;
    cornerWidget(corner: number): QWidget;
    defaultAction(): QAction;
    event(obj: QEvent): boolean;
    eventFilter(obj: QObject, event: QEvent): boolean;
    findActionForId(id: number): QAction;
    findIdForAction(obj: QAction): number;
    focusInEvent(obj: QFocusEvent): void;
    focusOutEvent(obj: QFocusEvent): void;
    frameWidth(): any;
    heightForWidth(obj: number): number;
    highlighted(itemId: number): void;
    hovered(action: QAction): void;
    initStyleOption(option: QStyleOptionMenuItem, action: QAction): void;
    insertAny(icon: QIcon, text: QString, receiver: QObject, member: string): number;
    insertMenu(before: QAction, menu: QMenu): QAction;
    insertSeparator(before: QAction): QAction;
    insertSeparator(index: number): any;
    insertSeparator(before: QAction): QAction;
    insertSeparator(index: number): any;
    isDefaultUp(): boolean;
    isNativeMenuBar(): boolean;
    itemParameter(id: number): any;
    keyPressEvent(obj: QKeyEvent): void;
    leaveEvent(obj: QEvent): void;
    macMenu(): any;
    macUpdateMenuBar(): boolean;
    mouseMoveEvent(obj: QMouseEvent): void;
    mousePressEvent(obj: QMouseEvent): void;
    mouseReleaseEvent(obj: QMouseEvent): void;
    paintEvent(obj: QPaintEvent): void;
    //qt_mac_activate_action(obj: any, obj: number, obj: number, obj: boolean): any;
    resizeEvent(obj: QResizeEvent): void;
    setActiveAction(action: QAction): void;
    setAutoGeometry(obj: boolean): any;
    setCornerWidget(w: QWidget, corner: number): void;
    setDefaultAction(obj: QAction): void;
    setDefaultUp(obj: boolean): void;
    setItemParameter(id: number, param: number): any;
    setNativeMenuBar(nativeMenuBar: boolean): void;
    setVisible(visible: boolean): void;
    sizeHint(): QSize;
    timerEvent(obj: QTimerEvent): void;
    triggered(action: QAction): void;
    wceCommands(command: number): void;
    wceRefresh(): void;
}