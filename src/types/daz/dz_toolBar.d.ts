/**
 * Encapsulates a QToolBar that contains DzToolBarItem items.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/toolbar_dz
 */
declare class DzToolBar extends QWidget {

    /* Properties */

    /**
     * Holds whether this toolbar is docked. (Read Only)
     */
    floating: boolean; // Boolean

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of DockArea.
     */
    static ToolBarTop: number;

    /**
     * DAZ enum member of DockArea.
     */
    static ToolBarBottom: number;

    /**
     * DAZ enum member of DockArea.
     */
    static ToolBarLeft: number;

    /**
     * DAZ enum member of DockArea.
     */
    static ToolBarRight: number;

    /**
     * DAZ enum member of DockArea.
     */
    static NoToolBarArea: number;

    /* Methods */

    /**
     * Removes all items from this bar.
     */
    clear(): void;

    /**
     * Docks this toolbar in the specified area on the DzActivityLayout, and shows this toolbar if it is hidden.
     * @param area number - The DockArea to dock this toolbar to.
     * @param beforeBar string - The name of this bar in the area to dock before.
     */
    dock(area: number, beforeBar?: string): void;

    /**
     * @returns number The dock area that this toolbar is docked in.
     */
    dockedArea(): number; // DockArea

    /**
     * @param which number
     * @returns DzToolBarItem The toolbar item at the specified index (if valid), otherwise null.
     */
    getItem(which: number): DzToolBarItem;

    /**
     * @returns any[] A list of all the items in this toolbar.
     */
    getItemList(): any[]; // Array

    /**
     * @returns number The number of items in this toolbar.
     */
    getNumItems(): number; // Number

    /**
     * @returns boolean true if there are items in this toolbar, otherwise false.
     */
    hasItems(): boolean; // Boolean

    /**
     * Adds the specified action to this toolbar.
     * @param action DzAction - The action to add to this toolbar.
     * @param before DzAction - The action to insert action before.
     */
    insertAction(action: DzAction, before: DzAction): void;

    /**
     * Adds the specified action to this toolbar.
     * @param action string - The class name of the DzAction that will be added to this toolbar.
     * @param index number - The index at which to insert the item. If the index is invalid (the default) the item is appended to the end of this toolbar.
     */
    insertAction(action: string, index?: number): void;

    /**
     * Adds the specified custom action to this toolbar.
     * @param action string - The name (GUID) of the custom action that will be added to this toolbar.
     * @param index number - The index at which to insert the item. If the index is invalid (the default) the item is appended to the end of this toolbar.
     */
    insertCustomAction(action: string, index?: number): void;

    /**
     * Adds a custom widget to this toolbar.
     * @param uiScript string - A path to the script that loads the QtDesigner .ui file for the custom widget. A global function named getWidget() is provided at runtime that returns a DzWidget which should be used as the parent argument in a DzUiLoader::load() call.
     * @param index number - The index at which to insert the item. If the index is invalid (the default) the item is appended to the end of this toolbar.
     */
    insertCustomWidget(uiScript: string, index?: number): void;

    /**
     * Inserts the specified item into this toolbar at the specified location.
     * @param item DzToolBarItem - The item to insert into this toolbar.
     * @param index number - The index at which to insert the item. If the index is invalid (the default) the item is appended to the end of this toolbar.
     */
    insertItem(item: DzToolBarItem, index?: number): void;

    /**
     * Adds a separator to this toolbar.
     * @param index number - The index at which to insert the item. If the index is invalid (the default) the item is appended to the end of this toolbar.
     */
    insertSeparator(index?: number): void;

    /**
     * Adds a spacer to this toolbar which adjusts itself so that items added after it are aligned over the application viewport.
     * @param alignment number - The alignment to use for toolbar items. Currently, supports Qt::AlignLeft and Qt::AlignCenter
     * @param index number - The index at which to insert the item. If the index is invalid (the default) the item is appended to the end of this toolbar.
     */
    insertViewportAlignmentSpacer(alignment: number, index?: number): void;

    /**
     * Adds a spacer to this toolbar which adjusts itself so that any items after it are centered over the application viewport.
     * @param index number - The index at which to insert the spacer. If the index is invalid (the default) the item is appended to the end of this toolbar.
     */
    insertViewportCenterAlignSpacer(index?: number): void;

    /**
     * Adds a spacer to this toolbar which adjusts itself so that any items after it are left aligned over the application viewport.
     * @param index number - The index at which to insert the item. If the index is invalid (the default) the item is appended to the end of this toolbar.
     */
    insertViewportLeftAlignSpacer(index?: number): void;

    /**
     * @returns boolean true if this toolbar is not displayed, false if this toolbar is displayed.
     */
    isClosed(): boolean; // Boolean

    /**
     * Removes the item at the specified index from this toolbar.
     * @param index number - The index of the item to remove.
     */
    removeItem(index: number): void;

    /**
     * Removes the specified item from this toolbar.
     * @param item DzToolBarItem - The item to remove.
     */
    removeItem(item: DzToolBarItem): void;

    /**
     * Sets whether this toolbar is displayed.
     * @param onOff boolean - If true, this toolbar is not displayed. If false, this toolbar is displayed.
     */
    setClosed(onOff: boolean): void;

    /**
     * Undocks this toolbar, moves it to the specified global coordinates, and shows this toolbar if it is hidden.
     * @param pos Point - The global coordinates to position this toolbar at.
     */
    undock(pos: Point): void;

    /* Signals */

    /**
     * Emitted when items are added to or removed from this toolbar.
     */
    itemListChanged: ISignal<void>;
}
