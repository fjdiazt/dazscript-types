declare class DzPopupMenu extends DzWidget /*QMenu*/ {
    // Properties
    checkable: boolean;
    tearOff: boolean;

    constructor(parent: DzWidget);

    // Signals
    activated: ISignalT<number>; // void	activated ( Number id )

    // Methods
    clear(): any;
    // connectItem(p0:number, p1:QScriptValue, p2:QScriptValue): any;
    // disconnectItem(p0:number, p1:QScriptValue, p2:QScriptValue): any;

    /**
     * Executes this menu synchronously. In most situations you will want to specify the position yourself, for example at the current mouse position.
     * @returns The identifier of the menu item clicked, or -1 if a menu item was not clicked.
     */
    exec(): number;
    /**
     * Executes this menu synchronously. Opens the popup menu so that the item number indexAtPoint will be at the specified global position pos.
     * @param pos The global position to popup the menu.
     * @param indexAtPoint The index of the menu item to position at pos.
     * @returns The identifier of the menu item clicked, or -1 if a menu item was not clicked.
     */
    exec(pos: number, indexAtPoint: number): number;

    getChildrenOfWidget(): any;
    getChildrenOfWidget(p0: string): any;
    getLayout(): any;
    getWidget(): any;
    grab(): any;
    grab(p0: QRect): any;
    grab(p0: number): any;
    grab(p0: number, p1: number): any;
    grab(p0: number, p1: number, p2: number): any;
    grab(p0: number, p1: number, p2: number, p3: number): any;
    hide(): any;
    highlighted(p0: number): any;
    idAt(p0: number): any;
    idAt(p0: number): any;
    insertItem(p0: QPixmap, p1: string): any;
    insertItem(p0: QPixmap, p1: string, p2: number): any;
    insertItem(p0: QPixmap, p1: string, p2: number, p3: number): any;
    // insertItem(p0:QScriptValue): any;
    // insertItem(p0:QScriptValue, p1:QMenu): any;
    // insertItem(p0:QScriptValue, p1:QMenu, p2:number): any;
    // insertItem(p0:QScriptValue, p1:QMenu, p2:number, p3:number): any;
    // insertItem(p0:QScriptValue, p1:number): any;
    // insertItem(p0:QScriptValue, p1:number, p2:number): any;
    insertItem(p0: QWidget): any;
    insertItem(p0: QWidget, p1: number): any;
    insertItem(p0: QWidget, p1: number, p2: number): any;
    insertPixmapItem(p0: QPixmap): any;
    insertPixmapItem(p0: QPixmap, p1: number): any;
    insertPixmapItem(p0: QPixmap, p1: number, p2: number): any;
    insertPixmapSubmenuItem(p0: QPixmap, p1: QMenu): any;
    insertPixmapSubmenuItem(p0: QPixmap, p1: QMenu, p2: number): any;
    insertPixmapSubmenuItem(p0: QPixmap, p1: QMenu, p2: number, p3: number): any;
    insertSeparator(): any;
    insertSeparator(p0: number): any;
    insertSubmenuItem(p0: QPixmap, p1: string, p2: QMenu): any;
    insertSubmenuItem(p0: QPixmap, p1: string, p2: QMenu, p3: number): any;
    insertSubmenuItem(p0: QPixmap, p1: string, p2: QMenu, p3: number, p4: number): any;
    insertTextItem(p0: string): any;
    insertTextItem(p0: string, p1: number): any;
    insertTextItem(text: string, id: number, index: number): any;
    insertTextSubmenuItem(p0: string, p1: QMenu): any;
    insertTextSubmenuItem(p0: string, p1: QMenu, p2: number): any;
    insertTextSubmenuItem(p0: string, p1: QMenu, p2: number, p3: number): any;
    isItemCheckable(p0: number): any;
    isItemChecked(p0: number): any;
    isItemEnabled(p0: number): any;
    isItemVisible(p0: number): any;
    itemParameter(p0: number): any;
    numItems(): any;
    pixmap(p0: number): any;
    popup(p0: number, p1: number): any;
    removeItem(p0: number): any;
    removeItemAt(p0: number): any;
    setActiveItem(p0: number): any;
    setItemCheckable(p0: number, p1: boolean): any;
    setItemChecked(p0: number, p1: boolean): any;
    setItemEnabled(p0: number, p1: boolean): any;
    setItemParameter(p0: number, p1: number): any;
    setItemVisible(p0: number, p1: boolean): any;
    setPixmap(p0: number, p1: QPixmap): any;
    setText(p0: number, p1: string): any;
    setWhatsThis(p0: number, p1: string): any;
    text(p0: number): any;
    updateItem(p0: number): any;
    // whatsThis(p0:number): any; // DzWidget as a property with the same name. Can this be made compatible?

    connectItem(id: number, thisObject: Object, func: Function): boolean;
}