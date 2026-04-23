/**
 * Class that encapsulates a popup menu that contains DzActionMenuItems.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/actionmenu_dz
 */
declare class DzActionMenu extends QObject {

    /* Properties */

    /**
     * Holds whether or not this menu is considered to be created by the application (true) or created by the user (false).
     * @since 4.11.0.164
     */
    isDefault: boolean; // Boolean

    /**
     * Holds the type of this menu (Read Only until 4.6.0.74)
     */
    menuType: number; // Number

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of MenuType.
     */
    static CustomMenu: number;

    /**
     * DAZ enum member of MenuType.
     */
    static PaneMenu: number;

    /**
     * DAZ enum member of MenuType.
     */
    static ViewToolMenu: number;

    /**
     * DAZ enum member of MenuType.
     */
    static SaveAsMenu: number;

    /**
     * DAZ enum member of MenuType.
     */
    static OpenRecentMenu: number;

    /* Methods */

    /**
     * Appends menu items from the specified menu into this menu.
     * @param menu DzActionMenu - The menu to copy items from.
     * @since 4.22.1.205
     */
    appendItemsFromMenu(menu: DzActionMenu): void;

    /**
     * Removes all items from this menu.
     */
    clear(): void;

    /**
     * Displays this menu to the user.
     */
    exec(): void;

    /**
     * Displays this menu to the user at a specified position.
     * @param pos Point - The global window coordinates at which to display the popup menu.
     */
    exec(pos: Point): void;

    /**
     * @param path string - The slash ('/') delimited path of the submenu to find or create.
     * @param asDefault boolean - If true, any menus that are created will be marked as a default menu; created/placed by the application. If false (default), any menus created will be marked as a custom menu; created/placed by the user.
     * @returns DzActionMenu The submenu at the given path; if a menu along the path does not already exist, it is created.
     * @since 4.11.0.164
     */
    findOrCreateSubMenu(path: string, asDefault?: boolean): DzActionMenu;

    /**
     * @param path string - The slash ('/') delimited path of the submenu to find.
     * @returns DzActionMenu The submenu with the given path (if any), otherwise null.
     */
    findSubMenu(path: string): DzActionMenu;

    /**
     * @param i number - The index of the item to return.
     * @returns DzActionMenuItem The menu item at the given index (if valid), otherwise null.
     */
    getItem(i: number): DzActionMenuItem;

    /**
     * @returns any[] A list of DzActionMenuItem in this menu.
     */
    getItemList(): any[]; // Array

    /**
     * @returns number The number of items in this menu.
     */
    getNumItems(): number; // Number

    /**
     * @returns DzActionMenuItem The item in a parent menu (if any) that causes this menu to be displayed, otherwise null.
     * @since 4.11.0.164
     */
    getParentItem(): DzActionMenuItem;

    /**
     * @returns string The slash ('/') delimited path of this action menu (if any), otherwise an empty string.
     * @since 4.11.0.205
     */
    getPath(): string; // String

    /**
     * @returns boolean true if there are items in this menu, otherwise false.
     */
    hasItems(): boolean; // Boolean

    /**
     * Inserts an action into this menu at the specified position.
     * @param identifier string - The name of the DzAction subclass to insert into this menu.
     * @param i number - The index to insert the action at. If the index is invalid (default - i.e., i < 0, i > getNumItems()), the action is inserted at the last position in this menu.
     */
    insertAction(identifier: string, i?: number): void;

    /**
     * Inserts a custom action into this menu at the specified position.
     * @param guid string - The globally unique identifier for the custom action to insert into this menu.
     * @param i number - The index to insert the action at. If the index is invalid (default - i.e., i < 0, i > getNumItems()), the action is inserted at the last position in this menu.
     */
    insertCustomAction(guid: string, i?: number): void;

    /**
     * Inserts a file merge action into this menu at the specified position.
     * @param fileName string - The path of the file to insert into this menu.
     * @param label string - The label to display within the interface; defaults to fileName if not specified.
     * @param i number - The index to insert the action at. If the index is invalid (default - i.e., i < 0, i > getNumItems()), the action is inserted at the last position in this menu.
     * @since 4.6.0.76
     */
    insertFileMergeAction(fileName: string, label?: string, i?: number): void;

    /**
     * Inserts a file open action into this menu at the specified position.
     * @param fileName string - The path of the file to insert into this menu.
     * @param label string - The label to display within the interface; defaults to fileName if not specified.
     * @param i number - The index to insert the action at. If the index is invalid (default - i.e., i < 0, i > getNumItems()), the action is inserted at the last position in this menu.
     * @since 4.6.0.76
     */
    insertFileOpenAction(fileName: string, label?: string, i?: number): void;

    /**
     * Inserts a menu item into this menu at a specified position.
     * @param item DzActionMenuItem - The item to insert into this menu.
     * @param i number - The index to insert the menu item at. If the index is invalid (i.e., i < 0, i > getNumItems()), the item is inserted at the last position in this menu.
     */
    insertItem(item: DzActionMenuItem, i?: number): void;

    /**
     * Deprecated
     * @param label string
     * @param menu DzActionMenu
     * @param i number
     */
    insertMenu(label: string, menu: DzActionMenu, i?: number): void;

    /**
     * Inserts a separator into this menu at the specified position.
     * @param i number - The index to insert the separator at. If the index is invalid (default - i.e., i < 0, i > getNumItems()), the separator is inserted at the last position in this menu.
     */
    insertSeparator(i?: number): void;

    /**
     * Inserts a menu into this menu at the specified position as a submenu.
     * @param label string - The label to display in this menu for the submenu item; the “/” character cannot be used.
     * @param menu DzActionMenu - The submenu to insert into this menu; if null, a new menu is created at the given index.
     * @param asDefault boolean - If true, this menu is inserted as a default menu. If false (default) this menu is inserted as a custom menu.
     * @param i number - The index to insert the submenu at. If the index is invalid (default - i.e., i < 0, i > getNumItems()), the submenu is inserted at the last position in this menu.
     * @since 4.11.0.164
     */
    insertSubMenu(label: string, menu: DzActionMenu, asDefault?: boolean, i?: number): void;

    /**
     * Moves a menu item in this menu to a specified position.
     * @param item DzActionMenuItem - The menu item to move.
     * @param i number - The index to move the menu item to. If the index is invalid (i.e., i < 0, i > getNumItems()), the item is moved to the last position in this menu.
     * @since 4.22.0.2
     */
    moveItem(item: DzActionMenuItem, i: number): void;

    /**
     * Removes a menu item from this menu.
     * @param item DzActionMenuItem - The menu item to remove.
     */
    removeItem(item: DzActionMenuItem): void;

    /**
     * Removes any duplicate separators from this menu by replacing two or more adjacent separators with a single separator.
     */
    simplifySeparators(): void;

    /* Signals */

    /**
     * Emitted when the default state of this menu has been changed.
     * @param yesNo boolean - The new default state for this menu.
     * @since 4.11.0.164
     */
    defaultChanged: ISignal<boolean>;

    /**
     * Emitted when items are added to or removed from this menu.
     */
    itemListChanged: ISignal<void>;
}
