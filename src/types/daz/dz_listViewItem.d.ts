/**
 * Script wrapper for Q3ListViewItem.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/listviewitem_dz
 */
declare class DzListViewItem extends QObject {

    /* Properties */

    /**
     * Holds whether or not the item can be dragged.
     */
    dragEnabled: boolean; // Boolean

    /**
     * Holds whether or not the item can have other items dropped on it.
     */
    dropEnabled: boolean; // Boolean

    /**
     * Holds whether or not the item can be enabled .
     */
    enabled: boolean; // Boolean

    /**
     * Holds whether or not the item can be expanded (opened).
     */
    expandable: boolean; // Boolean

    /**
     * Holds the height of the item.
     */
    height: number; // Number

    /**
     * Holds the identifier for this item. (Read Only)
     */
    id: number; // Number

    /**
     * Holds whether or not the item can be displayed on multiple lines.
     */
    multiLinesEnabled: boolean; // Boolean

    /**
     * Holds whether or not the item is expanded (open) or collapsed (closed).
     */
    open: boolean; // Boolean

    /**
     * Holds whether or not the item can be selected.
     */
    selectable: boolean; // Boolean

    /**
     * Holds whether or not the item is selected.
     */
    selected: boolean; // Boolean

    /**
     * Holds whether or not the item is visible.
     */
    visible: boolean; // Boolean

    /* Constructors */

    /**
     * @param parent DzListView | DzListViewItem
     * @param id number
     */
    constructor(parent: DzListView | DzListViewItem, id?: number);

    /**
     * @param parent DzListView
     * @param id number
     */
    constructor(parent: DzListView, id?: number);

    /**
     * @param parent DzListViewItem
     * @param id number
     */
    constructor(parent: DzListViewItem, id?: number);

    /* Methods */

    /**
     * Adds an arbitrary data item to be stored with the item.
     * @param key string - The key for the data.
     * @param val Object - The value of the data.
     */
    addDataItem(key: string, val: Object): void;

    /**
     * @returns number The number of child items of this item.
     */
    childCount(): number; // Number

    /**
     * Compares the specified item with this item in the specified column (if any).
     * @param item DzListViewItem - The item to compare.
     * @param column number - The index of the column.
     * @param ascending boolean - Whether to compare in ascending, or descending, order.
     * @returns number -1 if this item is less than item, 0 if they are equal, and 1 if this item is greater than item.
     */
    compare(item: DzListViewItem, column: number, ascending: boolean): number; // Number

    /**
     * Deletes an item from this item's list of child items.
     * @param item DzListViewItem - The item to delete.
     */
    deleteItem(item: DzListViewItem): void;

    /**
     * @returns number The hierarchical depth of this item.
     */
    depth(): number; // Number

    /**
     * @returns DzListViewItem The first child item of this item.
     */
    firstChild(): DzListViewItem;

    /**
     * @param key string - The key for the data.
     * @returns Object The value of the data on the item with the specified key (if any).
     */
    getDataItem(key: string): Object;

    /**
     * @returns number The number of data items on the item.
     */
    getNumDataItems(): number; // Number

    /**
     * Inserts an item as a child of this item.
     * @param newChild DzListViewItem - The item to insert.
     */
    insertItem(newChild: DzListViewItem): void;

    /**
     * @returns DzListViewItem The item above this item.
     */
    itemAbove(): DzListViewItem;

    /**
     * @returns DzListViewItem The item below this item.
     */
    itemBelow(): DzListViewItem;

    /**
     * @param column number - The index of the column.
     * @param ascending boolean - Whether to compare in ascending, or descending, order.
     * @returns string A key that can be used for sorting by column - i.e., text()
     */
    key(column: number, ascending: boolean): string; // String

    /**
     * @returns DzListView The list view that this item resides in.
     */
    listView(): DzListView;

    /**
     * Moves this item to be after the specified item, which must be one of its siblings.
     * @param item DzListViewItem - The item to move after.
     */
    moveItem(item: DzListViewItem): void;

    /**
     * @returns DzListViewItem The next sibling of this item.
     */
    nextSibling(): DzListViewItem;

    /**
     * @returns DzListViewItem The parent of this item.
     */
    parent(): DzListViewItem;

    /**
     * Removes an item from the children of this item.
     * @param item DzListViewItem - The item to insert.
     */
    removeItem(item: DzListViewItem): void;

    /**
     * @param column number - The index of the column.
     * @returns boolean Whether or not the text in the specified column can be changed by the user.
     */
    renameEnabled(column: number): boolean; // Boolean

    /**
     * Sets the pixmap for this item in the specified column.
     * @param column number - The index of the column.
     * @param pixmap Pixmap - The pixmap to set.
     */
    setPixmap(column: number, pixmap: Pixmap): void;

    /**
     * Sets whether or not the text in the specified column can be changed by the user.
     * @param column number - The index of the column.
     * @param yesNo boolean - Whether or not the column can be changed.
     */
    setRenameEnabled(column: number, yesNo: boolean): void;

    /**
     * Sets the text for this item in the specified column.
     * @param column number - The index of the column.
     * @param text string - The text to set.
     */
    setText(column: number, text: string): void;

    /**
     * Sorts the children of this item according to the current sorting column and order.
     */
    sort(): void;

    /**
     * Sorts the child items of this item by the specified column in the specified order.
     * @param column number - The index of the column.
     * @param ascending boolean - Whether to sort in ascending, or descending, order.
     */
    sortChildItems(column: number, ascending: boolean): void;

    /**
     * Starts a rename operation.
     * @param column number - The index of the column.
     */
    startRename(column: number): void;

    /**
     * @param column number - The index of the column.
     * @returns string The text for this item in the specified column
     */
    text(column: number): string; // String

    /* Undocumented Augment Members */

    /** @undocumented */
    pixmap(p0: number): any;
}
