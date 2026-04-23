/**
 * Script wrapper for Q3ListBox.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/listbox_dz
 */
declare class DzListBox extends DzScrollView {

    /* Properties */

    /**
     * The layout mode for the columns of the list box
     */
    columnMode: number; // LayoutMode

    /**
     * The number of items in the list box (read-only)
     */
    count: number; // Number

    /**
     * The index of the currently highlighted item in the list box
     */
    currentItem: number; // Number

    /**
     * The text of the currently highlighted item in the list box
     */
    currentText: string; // String

    /**
     * The number of columns in the list box (read-only)
     */
    numColumns: number; // Number

    /**
     * The number of items visible in the list box (read-only)
     */
    numItemsVisible: number; // Number

    /**
     * The number of rows in the list box (read-only)
     */
    numRows: number; // Number

    /**
     * The layout mode for the rows of the list box
     */
    rowMode: number; // LayoutMode

    /**
     * The index of the currently selected item in the list box (in single selection mode only)
     */
    selected: number; // Number

    /**
     * The selection mode of the list box
     */
    selectionMode: number; // SelectionMode

    /**
     * The index of the item at the top of the list box
     */
    topItem: number; // Number

    /**
     * Whether or not the list box has variable height rows
     */
    variableHeight: boolean; // Boolean

    /**
     * Whether or not the list box has variable width columns
     */
    variableWidth: boolean; // Boolean

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of LayoutMode.
     */
    static FixedNumber: number;

    /**
     * DAZ enum member of LayoutMode.
     */
    static FitToWidth: number;

    /**
     * DAZ enum member of LayoutMode.
     */
    static FitToHeight: number;

    /**
     * DAZ enum member of LayoutMode.
     */
    static Variable: number;

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

    /* Constructors */

    /**
     * @param parent DzWidget
     */
    constructor(parent: DzWidget);

    /* Methods */

    /**
     * Clears all items in the list box
     */
    clear(): void;

    /**
     * Inserts the given item into the list box
     * @param text string
     */
    insertItem(text: string): void;

    /**
     * @param index number
     * @returns boolean true if the item at the given index is selected
     */
    isSelected(index: number): boolean; // Boolean

    /**
     * Removes the given item from the list box
     * @param index number
     */
    removeItem(index: number): void;

    /**
     * Sets whether the item at the given index is selected
     * @param index number
     * @param selected boolean
     */
    setSelected(index: number, selected: boolean): void;

    /**
     * @param index number
     * @returns string The text of the item at the given index
     */
    text(index: number): string; // String

    /* Signals */

    /**
     * Emitted when an item is clicked (mouse button pressed and released).
     * @param index number
     * @param pnt Point
     */
    clicked: ISignal<number, Point>;

    /**
     * Emitted when the user right clicks the list box for a context menu.
     * @param index number
     * @param pos Point
     */
    contextMenuRequested: ISignal<number, Point>;

    /**
     * Emitted when the current item changes.
     * @param index number
     */
    currentChanged: ISignal<number>;

    /**
     * Emitted when an item is double clicked.
     * @param index number
     */
    doubleClicked: ISignal<number>;

    /**
     * Emitted when the highlighted item changes.
     * @param text string
     */
    highlighted: ISignal<string>;

    /**
     * Emitted when an item is clicked with the a mouse button (mouse button pressed and released).
     * @param button number
     * @param index number
     * @param pos Point
     */
    mouseButtonClicked: ISignal<number, number, Point>;

    /**
     * Emitted when an item is pressed with the a mouse button (mouse button pressed).
     * @param button number
     * @param index number
     * @param pos Point
     */
    mouseButtonPressed: ISignal<number, number, Point>;

    /**
     * Emitted mouse cursor moves onto an item.
     * @param index number
     */
    onItem: ISignal<number>;

    /**
     * Emitted mouse cursor moves from an item to an empty part of the list box.
     */
    onViewport: ISignal<void>;

    /**
     * Emitted when an item is pressed (mouse button pressed).
     * @param index number
     * @param pnt Point
     */
    pressed: ISignal<number, Point>;

    /**
     * Emitted when return is pressed on the current item.
     * @param index number
     */
    returnPressed: ISignal<number>;

    /**
     * Emitted when an item is clicked with the right button (mouse button pressed and released).
     * @param index number
     * @param pnt Point
     */
    rightButtonClicked: ISignal<number, Point>;

    /**
     * Emitted when an item is pressed with the right button (mouse button pressed).
     * @param index number
     * @param pnt Point
     */
    rightButtonPressed: ISignal<number, Point>;

    /**
     * Emitted when a new item is selected in single selection mode.
     * @param index number
     */
    selectionChanged: ISignal<number>;

    /* Conflicting Signals */

    /**
     * Emitted when the selected item changes.
     * @param index number
     */
    /**
     * TypeScript conflict: DAZ documents this as a signal, but a property with the same name is also documented.
     * Left commented because TypeScript does not allow both declarations in the same class.
     */
    // selected: ISignal<number>;

    /* Undocumented Augment Members */

    /** @undocumented */
    ensureCurrentVisible(): any; // TODO ;

    /** @undocumented */
    clearSelection(): any; // TODO ;

    /** @undocumented */
    selectAll(): any; // TODO ;

    /** @undocumented */
    invertSelection(): any; // TODO ;

    /** @undocumented */
    sort(): any; // TODO ;

    /** @undocumented */
    sort(): any; // TODO ;
}
