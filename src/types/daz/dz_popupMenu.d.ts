/**
 * Script wrapper for a popup QMenu.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/popupmenu_dz
 */
declare class DzPopupMenu extends DzWidget {

    /* Properties */

    /**
     * Holds whether or not the display of check marks on menu items is enabled. When true, the display of check marks on menu items is enabled. Checking is always enabled when in Windows-style.
     */
    checkable: boolean; // Boolean

    /**
     * Holds whether or not the menu supports being torn off. When true, the menu contains a special tear-off item (often shown as a dashed line at the top of the menu) that creates a copy of the menu when it is triggered.
     */
    tearOff: boolean; // Boolean

    /* Constructors */

    /**
     * @param parent DzWidget
     */
    constructor(parent: DzWidget);

    /* Methods */

    /**
     * Removes all menu items.
     */
    clear(): void;

    /**
     * Connects the menu item with the specified identifier to a function.
     * @param id number - The identifier of the menu item to connect to.
     * @param receiver Object - The object that will receive the signal. Prior to 4.15.0.24, this must be a QObject (or derived).
     * @param member string
     * @returns boolean true if the connection is successfully established, otherwise false.
     */
    connectItem(id: number, receiver: Object, member: string): boolean; // Boolean

    /**
     * Connects the menu item with the specified identifier to a function.
     * @param id number - The identifier of the menu item to connect to.
     * @param thisObject Object - The object to bind to 'this' in the scope of functionRef if functionRef is a script-defined Function. If functionRef is a function on a QObject, this argument is not used.
     * @param functionRef Function - The function to execute when the menu item is activated.
     * @returns boolean true if the connection is successfully established, otherwise false.
     * @since 4.15.0.24
     */
    connectItem(id: number, thisObject: Object, functionRef: Function): boolean; // Boolean

    /**
     * Disconnects the menu item with the specified identifier from a function.
     * @param id number - The identifier of the menu item to disconnect from.
     * @param receiver Object - The object that is receiving the signal. Prior to 4.15.0.24, this must be a QObject (or derived).
     * @param member string
     * @returns boolean true if the connection is successfully removed, otherwise false.
     */
    disconnectItem(id: number, receiver: Object, member: string): boolean; // Boolean

    /**
     * Disconnects the menu item with the specified identifier from a function.
     * @param id number - The identifier of the menu item to disconnect from.
     * @param thisObject Object - The object bound to 'this' in the scope of functionRef if functionRef is a script-defined Function. If functionRef is a function on a QObject, this argument is not used.
     * @param functionRef Function - The function to disconnect from.
     * @returns boolean true if the connection is successfully removed, otherwise false.
     * @since 4.15.0.24
     */
    disconnectItem(id: number, thisObject: Object, functionRef: Function): boolean; // Boolean

    /**
     * Executes this menu synchronously. In most situations you will want to specify the position yourself, for example at the current mouse position.
     * @returns number The identifier of the menu item clicked, or -1 if a menu item was not clicked.
     */
    exec(): number; // Number

    /**
     * Executes this menu synchronously. Opens the popup menu so that the item number indexAtPoint will be at the specified global position pos.
     * @param pos Point - The global position to popup the menu.
     * @param indexAtPoint number - The index of the menu item to position at pos.
     * @returns number The identifier of the menu item clicked, or -1 if a menu item was not clicked.
     */
    exec(pos: Point, indexAtPoint: number): number; // Number

    /**
     * @param index number - The index position to get the identifier for.
     * @returns number The identifier for the menu item at the specified index position (if valid), otherwise -1.
     */
    idAt(index: number): number; // Number

    /**
     * @param pos Point - The position to to check.
     * @returns number The identifier of the menu item at the specified index position (if any), otherwise -1.
     */
    idAt(pos: Point): number; // Number

    /**
     * Inserts a menu item, with a pixamp, and text into this menu.
     * @param pixmap Pixmap - The pixmap to assign to this menu item.
     * @param text string - The text to assign to the menu item.
     * @param id number - The identifier to assign to the menu item.
     * @param index number - The index position within the menu to insert the item. The item becomes the last menu item if this is a negative value (default).
     * @returns number The identifier assigned to the inserted menu item.
     * @since 4.15.0.16
     */
    insertItem(pixmap: Pixmap, text: string, id?: number, index?: number): number; // Number

    /**
     * Inserts a menu item, with a pixmap, into this menu.
     * @param pixmap Pixmap - The pixmap to assign to the menu item.
     * @param id number - The identifier to assign to the menu item.
     * @param index number - The index position within the menu to insert the item. The item becomes the last menu item if this is a negative value (default).
     * @returns number The identifier assigned to the inserted menu item.
     * @since 4.15.0.16
     */
    insertPixmapItem(pixmap: Pixmap, id?: number, index?: number): number; // Number

    /**
     * Inserts a submenu item, with a pixmap, into this menu.
     * @param pixmap Pixmap - The pixmap to assign to the menu item.
     * @param popup DzPopupMenu - The menu to popup when this menu item is hovered over.
     * @param id number - The identifier to assign to the menu item.
     * @param index number - The index position within the menu to insert the item. The item becomes the last menu item if this is a negative value (default).
     * @returns number The identifier assigned to the inserted menu item.
     * @since 4.15.0.16
     */
    insertPixmapSubmenuItem(pixmap: Pixmap, popup: DzPopupMenu, id?: number, index?: number): number; // Number

    /**
     * Inserts a separator at the specified index position.
     * @param index number - The index position within the menu to insert the separator. The separator becomes the last menu item if this is a negative value (default).
     * @returns number The identifier assigned to the inserted menu item - i.e., -1.
     */
    insertSeparator(index?: number): number; // Number

    /**
     * Inserts a submenu item, with a pixmap and text, into this menu.
     * @param pixmap Pixmap - The pixmap to assign to the menu item.
     * @param text string - The text to assign to the menu item.
     * @param popup DzPopupMenu - The menu to popup when this menu item is hovered over.
     * @param id number - The identifier to assign to the menu item.
     * @param index number - The index position within the menu to insert the item. The item becomes the last menu item if this is a negative value (default).
     * @returns number The identifier assigned to the inserted menu item.
     * @since 4.15.0.16
     */
    insertSubmenuItem(pixmap: Pixmap, text: string, popup: DzPopupMenu, id?: number, index?: number): number; // Number

    /**
     * Inserts a menu item, with text, into this menu.
     * @param text string - The text to assign to the menu item.
     * @param id number - The identifier to assign to the menu item.
     * @param index number - The index position within the menu to insert the item. The item becomes the last menu item if this is a negative value (default).
     * @returns number The identifier assigned to the inserted menu item.
     * @since 4.15.0.16
     */
    insertTextItem(text: string, id?: number, index?: number): number; // Number

    /**
     * Inserts a submenu item, with text, into this menu.
     * @param text string - The text to assign to the menu item.
     * @param popup DzPopupMenu - The menu to popup when this menu item is hovered over.
     * @param id number - The identifier to assign to the menu item.
     * @param index number - The index position within the menu to insert the item. The item becomes the last menu item if this is a negative value (default).
     * @returns number The identifier assigned to the inserted menu item.
     * @since 4.15.0.16
     */
    insertTextSubmenuItem(text: string, popup: DzPopupMenu, id?: number, index?: number): number; // Number

    /**
     * @param id number - The identifier of the menu item to get the checkable state of.
     * @returns boolean true if the menu item with the specified identifier is checkable, otherwise false.
     * @since 4.12.1.93
     */
    isItemCheckable(id: number): boolean; // Boolean

    /**
     * @param id number - The identifier of the menu item to get the checked state of.
     * @returns boolean true if the menu item with the specified identifier is checked, otherwise false.
     */
    isItemChecked(id: number): boolean; // Boolean

    /**
     * @param id number - The identifier of the menu item to get the enabled state of.
     * @returns boolean true if the menu item with the specified identifier is enabled, otherwise false.
     */
    isItemEnabled(id: number): boolean; // Boolean

    /**
     * @param id number - The identifier of the menu item to get the visible state of.
     * @returns boolean true if the menu item with the specified identifier is visible, otherwise false.
     */
    isItemVisible(id: number): boolean; // Boolean

    /**
     * @param id number - The identifier of the menu item to get the parameter of.
     * @returns number The parameter of the activation signal for the menu item specified (if any), otherwise id.
     */
    itemParameter(id: number): number; // Number

    /**
     * @returns number The number of menu items in this menu.
     * @since 4.15.0.16
     */
    numItems(): number; // Number

    /**
     * @param id number - The identifier of the menu item to get the pixmap of.
     * @returns Pixmap The pixmap of the menu item with the specified identifier (if any), otherwise null.
     */
    pixmap(id: number): Pixmap;

    /**
     * Displays this menu synchronously.
     * @param pos Point - The global position to popup the menu.
     * @param indexAtPoint number - The index of the menu item to position at pos.
     */
    popup(pos: Point, indexAtPoint: number): void;

    /**
     * Removes the menu item with the specified identifier from the menu.
     * @param id number - The identifier of the menu item to remove.
     */
    removeItem(id: number): void;

    /**
     * Removes the menu item at the specified index position.
     * @param index number - The index position of the menu item to remove.
     */
    removeItemAt(index: number): void;

    /**
     * Sets the currently active item to id and repaints as necessary.
     * @param id number
     */
    setActiveItem(id: number): void;

    /**
     * Sets the checkable state of the menu item with the specified identifier.
     * @param id number - The identifier of the menu item to set.
     * @param yesNo boolean - If true, the item is made checkable.
     * @since 4.12.1.93
     */
    setItemCheckable(id: number, yesNo: boolean): void;

    /**
     * Sets the checked state of the menu item with the specified identifier.
     * @param id number - The identifier of the menu item to set.
     * @param yesNo boolean - If true, the item is checked.
     */
    setItemChecked(id: number, yesNo: boolean): void;

    /**
     * Sets the enabled state of the menu item with the specified identifier.
     * @param id number - The identifier of the menu item to set.
     * @param yesNo boolean - If true, the item is enabled.
     */
    setItemEnabled(id: number, yesNo: boolean): void;

    /**
     * Sets the parameter of the activation signal for the menu item with the specified identifier.
     * @param id number - The identifier of the menu item to set.
     * @param param number - The value to set.
     * @returns boolean
     */
    setItemParameter(id: number, param: number): boolean; // Boolean

    /**
     * Sets the visible state of the menu item with the specified identifier.
     * @param id number - The identifier of the menu item to set.
     * @param yesNo boolean - If true, the item is made visible.
     */
    setItemVisible(id: number, yesNo: boolean): void;

    /**
     * Sets the pixmap of the menu item with the specified identifier.
     * @param id number - The identifier of the menu item to change.
     * @param pixmap Pixmap - The pixmap to set.
     * @since 4.15.0.16
     */
    setPixmap(id: number, pixmap: Pixmap): void;

    /**
     * Sets the text of the menu item with the specified identifier.
     * @param id number - The identifier of the menu item to change.
     * @param text string - The text to set.
     * @since 4.15.0.16
     */
    setText(id: number, text: string): void;

    /**
     * Sets the “What's This” help text for the menu item with the specified identifier.
     * @param id number - The identifier of the menu item to set the “What's This” help text for.
     * @param text string - The text to set.
     */
    setWhatsThis(id: number, text: string): void;

    /**
     * @param id number - The identifier of the menu item to get the text of.
     * @returns string The text of the menu item with the specified identifier (if any), otherwise an empty string.
     */
    text(id: number): string; // String

    /**
     * Deprecated
     * @returns number
     */
    insertTearOffHandle(): number; // Number

    /**
     * Deprecated
     * @param text string
     * @param id number
     * @param index number
     * @returns number
     */
    insertItem(text: string, id?: number, index?: number): number; // Number

    /**
     * Deprecated
     * @param pixmap Pixmap
     * @param id number
     * @param index number
     * @returns number
     */
    insertItem(pixmap: Pixmap, id?: number, index?: number): number; // Number

    /**
     * Deprecated
     * @param text string
     * @param popup DzPopupMenu
     * @param id number
     * @param index number
     * @returns number
     */
    insertItem(text: string, popup: DzPopupMenu, id?: number, index?: number): number; // Number

    /**
     * Deprecated
     * @param pixmap Pixmap
     * @param popup DzPopupMenu
     * @param id number
     * @param index number
     * @returns number
     */
    insertItem(pixmap: Pixmap, popup: DzPopupMenu, id?: number, index?: number): number; // Number

    /**
     * Deprecated
     * @param id number
     * @param text string
     */
    changeItem(id: number, text: string): void;

    /**
     * Deprecated
     * @param id number
     * @param pixmap Pixmap
     */
    changeItem(id: number, pixmap: Pixmap): void;

    /**
     * Deprecated
     * @param id number
     */
    updateItem(id: number): void;

    /* Conflicting Methods */

    /**
     * @param id number - The identifier of the menu item to get the “What's This” help text for.
     * @returns string The “What's This” help text for the item with the specified identifier (if any), otherwise an empty string.
     */
    /**
     * TypeScript conflict: DAZ documents this as a method, but an inherited property with the same name already exists.
     * Left commented because TypeScript does not allow both declarations in the same class hierarchy.
     */
    // whatsThis(id: number): string; // String

    /* Signals */

    /**
     * This signal is emitted just before the popup menu is hidden after it has been displayed.
     */
    aboutToHide: ISignal<void>;

    /**
     * This signal is emitted just before the popup menu is displayed. You can connect it to any slot that sets up the menu contents (e.g. to ensure that the right items are enabled).
     */
    aboutToShow: ISignal<void>;

    /**
     * This signal is emitted when a menu item is selected.
     * @param id number - The id of the selected item.
     */
    activated: ISignal<number>;

    /**
     * Emitted when a menu item is highlighted.
     * @param id number - The id of the highlighted item.
     */
    highlighted: ISignal<number>;

    /* Undocumented Augment Members */

    /** @undocumented */
    connectItem(id: number, thisObject: null, functionRef: Function): boolean;
}
