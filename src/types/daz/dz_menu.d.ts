/**
 * Provides a menu widget for use in menu bars, context menus, and other popup menus.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/menu_dz
 */
declare class DzMenu extends QObject {

    /* Methods */

    /**
     * Adds the DzAction to the given menu.
     * @param action DzAction - The action to add to the menu.
     * @param menuId number - The menu id of the menu to add the action to. If zero, the action will be added to the root menu.
     * @returns number The item id of the action in the menu.
     */
    addAction(action: DzAction, menuId?: number): number; // Number

    /**
     * Convenience method to find an action by class name and add it to the menu.
     * @param className string - The class name of the action to add to the menu.
     * @param menuId number - The menu id of the menu to add the action to. If zero, the action will be added to the root menu.
     * @returns number The item id of the action in the menu.
     */
    addAction(className: string, menuId?: number): number; // Number

    /**
     * Adds an entry to the given menu.
     * @param label string - The label that will appear in the menu for the user to activate the item.
     * @param menuId number - The menu id of the menu to add the item to. If zero, the item will be added to the root menu.
     * @returns number The item id of the new menu item.
     */
    addItem(label: string, menuId?: number): number; // Number

    /**
     * Adds an entry to the given menu and connects it to a slot.
     * @param label string - The label that will appear in the menu for the user to activate the item.
     * @param receiver QObject - The QObject to connect the activate signal to.
     * @param member string - The name of the slot/signal that will be connected to the activate signal.
     * @param menuId number - The menu id of the menu to add the item to. If zero, the item will be added to the root menu.
     * @returns number The item id of the new menu item.
     */
    addItem(label: string, receiver: QObject, member: string, menuId?: number): number; // Number

    /**
     * Adds a separator bar to the given menu.
     * @param menuId number - The menu id of the menu to add the separator to. If zero, the separator will be added to the root menu.
     */
    addSeparator(menuId?: number): void;

    /**
     * Creates a submenu with the given label, and adds it to the given menu.
     * @param label string - The text that will appear in the parent menu for the user to activate the submenu.
     * @param menuId number - The menu id of the parent menu to add the submenu to. If zero, the submenu will be added to the root menu.
     * @returns number The menu id of the new submenu.
     */
    addSubMenu(label: string, menuId?: number): number; // Number

    /**
     * Shows the menu to the user.
     * @param pos Point - The global position that the menu will be displayed at.
     * @returns number The item id of the item selected by the user, or -1 if the menu was closed without the user selecting an item.
     */
    exec(pos: Point): number; // Number

    /**
     * Finds a submenu with the given label, and returns its menu id.
     * @param label string - The text that appears in the parent menu for the user to activate the submenu.
     * @param menuId number - The menu id of the parent menu to search for the submenu in. If zero, the root menu will be searched.
     * @returns number The menu id of the new submenu, -1 if submenu is not found.
     */
    findSubMenu(label: string, menuId?: number): number; // Number

    /**
     * @returns boolean true if no items or actions have been added to the menu, otherwise false.
     */
    isEmpty(): boolean; // Boolean

    /**
     * Sets weather or not an item is checkable.
     * @param itemId number - The id of the item.
     * @param checkable boolean - If true, the item is made checkable.
     */
    setItemCheckable(itemId: number, checkable: boolean): void;

    /**
     * Sets weather or not an item is checked.
     * @param itemId number - The id of the item.
     * @param checked boolean - If true, the item is checked.
     */
    setItemChecked(itemId: number, checked: boolean): void;

    /**
     * Sets the data for the item.
     * @param itemId number - The id of the item.
     * @param data Object - The data to set.
     */
    setItemData(itemId: number, data: Object): void;

    /**
     * Sets whether or not an item is enabled.
     * @param itemId number - The id of the item.
     * @param enabled boolean - If true, the action is enabled.
     * @since 4.11.0.208
     */
    setItemEnabled(itemId: number, enabled: boolean): void;

    /* Signals */

    /**
     * Emitted when the user selects an item in the menu, or one of its submenus.
     * @param id number - The item id of the item the user selected.
     */
    activated: ISignal<number>;
}
