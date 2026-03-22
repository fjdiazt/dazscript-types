declare class DzToolbar { }

declare class DzToolBar extends QWidget {
    static ToolBarTop: number;
    static ToolBarBottom: number;
    static ToolBarLeft: number;
    static ToolBarRight: number;
    static NoToolBarArea: number;

    /**
     * Removes all items from the bar.
     */
    clear(): void;

    /**
     * Docks the toolbar in the specified area on the DzActivityLayout, and shows the toolbar if it is hidden.
     * @param dockArea The DzToolBar:DockArea to dock the toolbar to.
     * @param beforeBar The name of the bar in the area to dock before.
     */
    dock(dockArea: number, beforeBar?: string): void;

    /**
     * Adds the given custom action to the toolbar.
     * @param actionName The name (GUID) of the custom action that will be added to the toolbar.
     * @param index The index at which to insert the item, if the index is invalid (the default) the item is appended to the end of the menu.
     */
    insertCustomAction(actionName: string, index: number): void;

    /**
     * Remove item from toolbar
     * @param item The item to remove.
     */
    removeItem(item: DzToolBarItem): void;

    getItemList(): DzToolBarItem[];

    /**
     *
     * @param onOff if the toolbar is closed (not displayed), false if the toolbar is open (displayed).
     */
    setClosed(onOff: boolean): void;
    //undock(point: Point): void;
}