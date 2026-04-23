/**
 * Script wrapper for Q3ListView.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/listview_dz
 */
declare class DzListView extends DzScrollView {

    /* Properties */

    /**
     * Holds whether or not all columns show keyboard focus.
     */
    allColumnsShowFocus: boolean; // Boolean

    /**
     * Holds the number root level children in the list view. (Read Only)
     */
    childCount: number; // Number

    /**
     * Holds the number of items in the list box. (Read Only)
     */
    columns: number; // Number

    /**
     * Holds the default action that is taken when the user attempts to rename an item.
     */
    defaultRenameAction: number; // RenameAction

    /**
     * Holds the advisory margin for list view items.
     */
    itemMargin: number; // Number

    /**
     * Holds the resize mode for the list view.
     */
    resizeMode: number; // ResizeMode

    /**
     * Holds whether or not the root level items show expand/collapse boxes.
     */
    rootIsDecorated: boolean; // Boolean

    /**
     * Holds the selection mode for the list view.
     */
    selectionMode: number; // SelectionMode

    /**
     * Holds whether or not the sort indicator should be displayed.
     */
    showSortIndicator: boolean; // Boolean

    /**
     * Holds whether or not tool tips should be displayed.
     */
    showToolTips: boolean; // Boolean

    /**
     * Holds the column that the list is sorted by.
     */
    sortColumn: number; // Number

    /**
     * Holds the sort order of the list view.
     */
    sortOrder: SortOrder;

    /**
     * Holds the number of pixels that a child item is offset from its parent.
     */
    treeStepSize: number; // Number

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of ItemsMode.
     */
    static Selected: number;

    /**
     * DAZ enum member of ItemsMode.
     */
    static Unselected: number;

    /**
     * DAZ enum member of ItemsMode.
     */
    static Checked: number;

    /**
     * DAZ enum member of ItemsMode.
     */
    static NotChecked: number;

    /**
     * DAZ enum member of ItemsMode.
     */
    static All: number;

    /**
     * DAZ enum member of RenameAction.
     */
    static Accept: number;

    /**
     * DAZ enum member of RenameAction.
     */
    static Reject: number;

    /**
     * DAZ enum member of ResizeMode.
     */
    static NoColumn: number;

    /**
     * DAZ enum member of ResizeMode.
     */
    static AllColumns: number;

    /**
     * DAZ enum member of ResizeMode.
     */
    static LastColumn: number;

    /**
     * DAZ enum member of SelectionMode.
     */
    static Single: number;

    /**
     * DAZ enum member of SelectionMode.
     */
    static Multi: number;

    /**
     * DAZ enum member of SelectionMode.
     */
    static Extended: number;

    /**
     * DAZ enum member of SelectionMode.
     */
    static NoSelection: number;

    /**
     * DAZ enum member of WidthMode.
     */
    static Manual: number;

    /**
     * DAZ enum member of WidthMode.
     */
    static Maximum: number;

    /* Constructors */

    /**
     * @param parent DzWidget
     */
    constructor(parent: DzWidget);

    /* Methods */

    /**
     * Adds a column to the list view.
     * @param label string - The label for the column.
     * @returns number
     */
    addColumn(label: string): number; // Number

    /**
     * Clears all items from the list view.
     */
    clear(): void;

    /**
     * Clears the current selection in the view.
     */
    clearSelection(): void;

    /**
     * @param column number - The index of the column.
     * @returns number The alignment of the specified column.
     */
    columnAlignment(column: number): number; // Number

    /**
     * @param column number - The index of the column.
     * @returns string The label of the specified column (if any), otherwise an empty string.
     */
    columnText(column: number): string; // String

    /**
     * @param column number - The index of the column.
     * @returns number The width of the specified column.
     */
    columnWidth(column: number): number; // Number

    /**
     * @param column number - The index of the column.
     * @returns number The width mode of the specified column.
     */
    columnWidthMode(column: number): number; // WidthMode

    /**
     * @returns DzListViewItem The currently highlighted item.
     */
    currentItem(): DzListViewItem;

    /**
     * Deletes an item from the list view.
     * @param item DzListViewItem - The item to delete.
     */
    deleteItem(item: DzListViewItem): void;

    /**
     * Ensures an item is visible in the view.
     * @param item DzListViewItem - The item to ensure is visible.
     */
    ensureItemVisible(item: DzListViewItem): void;

    /**
     * @param text string - The text to find.
     * @param column number - The index of the column.
     * @param compare number - A bitwise OR of the following values:
    
     CaseSensitive = 0x00001 (0 0001)
    
     BeginsWith = 0x00002 (0 0010)
    
     EndsWith = 0x00004 (0 0100)
    
     Contains = 0x00008 (0 1000)
    
     ExactMatch = 0x00010 (1 0000)
     * @returns DzListViewItem The item in the view with the specified text, for the specified column, matched according to the specified flags (if any), otherwise null.
     */
    findItem(text: string, column: number, compare?: number): DzListViewItem;

    /**
     * @returns DzListViewItem The first item in the list view.
     */
    firstChild(): DzListViewItem;

    /**
     * @param mode number - The mode of the items to retrieve.
     * @returns any[] A list of the DzListViewItem instances in this list view that match the supplied flag.
     */
    getItems(mode: number): any[]; // Array

    /**
     * @returns DzHeader The header for this list view.
     */
    header(): DzHeader;

    /**
     * Hide the specified column
     * @param column number - The index of the column.
     */
    hideColumn(column: number): void;

    /**
     * @param item DzListViewItem - The item to retrieve the open state of.
     * @returns boolean true if the specified item is expanded (open), or false if it is collapsed (closed).
     */
    isOpen(item: DzListViewItem): boolean; // Boolean

    /**
     * @returns boolean true if the view is currently in a renaming operation, otherwise false.
     */
    isRenaming(): boolean; // Boolean

    /**
     * @param item DzListViewItem - The item to check.
     * @returns boolean true if the specified item is selected, otherwise false.
     */
    isSelected(item: DzListViewItem): boolean; // Boolean

    /**
     * @returns DzListViewItem The last item in the list view.
     */
    lastItem(): DzListViewItem;

    /**
     * Removes a column from the list view.
     * @param column number - The index of the column.
     */
    removeColumn(column: number): void;

    /**
     * @returns DzListViewItem The selected item.
     */
    selectedItem(): DzListViewItem;

    /**
     * Sets the alignment of a column.
     * @param column number - The index of the column.
     * @param align number - The alignment to set.
     */
    setColumnAlignment(column: number, align: number): void;

    /**
     * Changes the label of a column in the list view.
     * @param column number - The index of the column.
     * @param label string - The label for the column.
     */
    setColumnText(column: number, label: string): void;

    /**
     * Sets the width of a column.
     * @param column number - The index of the column.
     * @param width number - The width to set.
     */
    setColumnWidth(column: number, width: number): void;

    /**
     * Sets the width mode of a column.
     * @param column number - The index of the column.
     * @param mode number - The width mode to set.
     */
    setColumnWidthMode(column: number, mode: number): void;

    /**
     * Sets the currently highlighted item
     * @param item DzListViewItem - The item to set.
     */
    setCurrentItem(item: DzListViewItem): void;

    /**
     * Sets whether or not an item is expanded (open) or collapsed (closed).
     * @param item DzListViewItem - The item to set the open state of.
     * @param open boolean - The open state to set.
     */
    setOpen(item: DzListViewItem, open: boolean): void;

    /**
     * Sets whether or not an item is selected.
     * @param item DzListViewItem - The item to set the selected state of.
     * @param selected boolean - The selected state to set.
     */
    setSelected(item: DzListViewItem, selected: boolean): void;

    /**
     * Sets the selection anchor of the view.
     * @param item DzListViewItem - The item to set.
     */
    setSelectionAnchor(item: DzListViewItem): void;

    /**
     * Sets the sorting column and order for the view.
     * @param column number - The index of the column.
     * @param ascending boolean - If true, ascending. If false, descending.
     */
    setSorting(column: number, ascending?: boolean): void;

    /**
     * Sort the view
     */
    sort(): void;

    /* Signals */

    /**
     * Emitted when an item is clicked (mouse button pressed and released)
     * @param item DzListViewItem - The item clicked (or 0 if no item was clicked)
     * @param pos Point - The position, in global coordinates, where the user clicked
     * @param col number - The column in which the click occurred (undefined if item is 0)
     */
    clicked: ISignal<DzListViewItem, Point, number>;

    /**
     * Emitted when an item is collapsed (when item 's children are hidden)
     * @param item DzListViewItem - The item collapsed
     */
    collapsed: ISignal<DzListViewItem>;

    /**
     * Emitted when the user right clicks the list view, or uses a special system key, for a context menu
     * @param item DzListViewItem - The item under the cursor if pressed (or 0 if no item is under the cursor), the current item if the system key is used
     * @param pos Point - The position, in global coordinates, where the user pressed
     * @param col number - The column in which the press occurred (-1 if no item is pressed)
     */
    contextMenuRequested: ISignal<DzListViewItem, Point, number>;

    /**
     * Emitted when the current item changes
     * @param item DzListViewItem - The newly currentItem()
     */
    currentChanged: ISignal<DzListViewItem>;

    /**
     * Emitted when an item is double clicked (on the second button press, not release)
     * @param item DzListViewItem - The item double clicked (or 0 if no item was double clicked)
     * @param pos Point - The position, in global coordinates, where the user double clicked
     * @param col number - The column in which the double click occurred (-1 if outside the list view)
     */
    doubleClicked: ISignal<DzListViewItem, Point, number>;

    /**
     * Emitted when an item is expanded (when item 's children are shown)
     * @param item DzListViewItem - The item expanded
     */
    expanded: ISignal<DzListViewItem>;

    /**
     * Emitted when an item is renamed
     * @param item DzListViewItem - The item renamed
     * @param col number - The column in which the renaming occurred
     * @param text string - The the new text for item
     */
    itemRenamed: ISignal<DzListViewItem, number, string>;

    /**
     * Emitted when an item is clicked with the a mouse button (mouse button pressed and released)
     * @param button number - The mouse button clicked
     * @param item DzListViewItem - The item clicked (or 0 if no item was clicked)
     * @param pos Point - The position, in global coordinates, where the user clicked
     * @param col number - The column in which the click occurred (undefined if item is 0)
     */
    mouseButtonClicked: ISignal<number, DzListViewItem, Point, number>;

    /**
     * Emitted when an item is pressed with the a mouse button (mouse button pressed)
     * @param button number - The mouse button pressed
     * @param item DzListViewItem - The item pressed (or 0 if no item was pressed)
     * @param pos Point - The position, in global coordinates, where the user pressed
     * @param col number - The column in which the press occurred (undefined if item is 0)
     */
    mouseButtonPressed: ISignal<number, DzListViewItem, Point, number>;

    /**
     * Emitted when an item is pressed (mouse button pressed)
     * @param item DzListViewItem - The item pressed (or 0 if no item was pressed)
     * @param pos Point - The position, in global coordinates, where the user pressed
     * @param col number - The column in which the press occurred (undefined if item is 0)
     */
    pressed: ISignal<DzListViewItem, Point, number>;

    /**
     * Emitted when return is pressed on the current item
     * @param item DzListViewItem - The current item
     */
    returnPressed: ISignal<DzListViewItem>;

    /**
     * Emitted when an item is clicked with the right button (mouse button pressed and released)
     * @param item DzListViewItem - The item clicked (or 0 if no item was clicked)
     * @param pos Point - The position, in global coordinates, where the user clicked
     * @param col number - The column in which the click occurred (-1 if outside the list view)
     */
    rightButtonClicked: ISignal<DzListViewItem, Point, number>;

    /**
     * Emitted when an item is pressed with the right button (mouse button pressed)
     * @param item DzListViewItem - The item pressed (or 0 if no item was pressed)
     * @param pos Point - The position, in global coordinates, where the user pressed
     * @param col number - The column in which the press occurred (-1 if outside the list view)
     */
    rightButtonPressed: ISignal<DzListViewItem, Point, number>;

    /**
     * Emitted when the selected item changes
     * @param item DzListViewItem - The newly selected item
     */
    selectionChanged: ISignal<DzListViewItem>;

    /**
     * Emitted when the space bar is pressed on the current item
     * @param item DzListViewItem - The current item
     */
    spacePressed: ISignal<DzListViewItem>;
}
