/**
 * Script wrapper for QComboBox.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/combobox_dz
 */
declare class DzComboBox extends DzWidget {

    /* Properties */

    /**
     * Holds the number of items in the combobox. (Read Only)
     */
    count: number; // Number

    /**
     * Holds the index of the currently selected item in the combobox.
     */
    currentItem: number; // Number

    /**
     * Holds the text of the currently selected item in the combobox.
     */
    currentText: string; // String

    /**
     * Holds the policy used to determine where user-inserted items should appear in the combobox.
     * @since 4.6.2.66
     */
    insertPolicy: number; // InsertPolicy

    /**
     * Holds the maximum number of items allowed on screen; 10 by default.
     * @since 4.6.2.66
     */
    maxVisibleItems: number; // Number

    /**
     * Holds the minimum number of characters that should fit in the combobox.
     * @since 4.6.2.66
     */
    minimumContentsLength: number; // Number

    /**
     * Holds the policy describing how the size of the combobox changes when the content changes.
     * @since 4.6.2.66
     */
    sizeAdjustPolicy: number; // SizeAdjustPolicy

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of InsertPolicy.
     */
    static NoInsert: number;

    /**
     * DAZ enum member of InsertPolicy.
     */
    static InsertAtTop: number;

    /**
     * DAZ enum member of InsertPolicy.
     */
    static InsertAtCurrent: number;

    /**
     * DAZ enum member of InsertPolicy.
     */
    static InsertAtBottom: number;

    /**
     * DAZ enum member of InsertPolicy.
     */
    static InsertAfterCurrent: number;

    /**
     * DAZ enum member of InsertPolicy.
     */
    static InsertBeforeCurrent: number;

    /**
     * DAZ enum member of InsertPolicy.
     */
    static InsertAlphabetically: number;

    /**
     * DAZ enum member of SizeAdjustPolicy.
     */
    static AdjustToContents: number;

    /**
     * DAZ enum member of SizeAdjustPolicy.
     */
    static AdjustToContentsOnFirstShow: number;

    /**
     * DAZ enum member of SizeAdjustPolicy.
     */
    static AdjustToMinimumContentsLength: number;

    /**
     * DAZ enum member of SizeAdjustPolicy.
     */
    static AdjustToMinimumContentsLengthWithIcon: number;

    /* Constructors */

    /**
     * @param parent DzWidget
     */
    constructor(parent: DzWidget);

    /* Methods */

    /**
     * Adds text to the list of items in the combobox.
     * @param text string
     * @param userData string
     * @since 4.6.2.66
     */
    addItem(text: string, userData?: string): void;

    /**
     * Adds each of the strings in texts to the combobox
     * @param texts any[]
     * @since 4.6.2.66
     */
    addItems(texts: any[]): void;

    /**
     * Removes all items from the combobox.
     */
    clear(): void;

    /**
     * @param data string
     * @returns number The index of the item containing data; otherwise returns -1.
     * @since 4.6.2.66
     */
    findData(data: string): number; // Number

    /**
     * @param text string
     * @returns number The index of the item containing text; otherwise returns -1.
     * @since 4.6.2.66
     */
    findText(text: string): number; // Number

    /**
     * Inserts the text and userData into the combobox at index. If index is equal to or higher than the total number of items, the new item is appended to the list of existing items. If index is zero or negative, the new item is prepended to the list of existing items.
     * @param index number
     * @param text string
     * @param userData string
     * @since 4.6.2.66
     */
    insertItem(index: number, text: string, userData?: string): void;

    /**
     * Inserts the strings in list into the combobox as separate items, starting at index.
     * @param index number
     * @param list any[]
     * @since 4.6.2.66
     */
    insertItems(index: number, list: any[]): void;

    /**
     * Inserts a separator into the combobox at index.
     * @param index number
     * @since 4.6.2.66
     */
    insertSeparator(index: number): void;

    /**
     * @param index number
     * @returns string The data of the item at index.
     * @since 4.6.2.66
     */
    itemData(index: number): string; // String

    /**
     * @param index number
     * @returns string The text of the item at index.
     * @since 4.6.2.66
     */
    itemText(index: number): string; // String

    /**
     * Removes the item at index from the list of items.
     * @param index number
     */
    removeItem(index: number): void;

    /**
     * Sets the data for the item at index.
     * @param index number
     * @param value string
     * @since 4.6.2.66
     */
    setItemData(index: number, value: string): void;

    /**
     * Sets the text for the item at index.
     * @param index number
     * @param text string
     * @since 4.6.2.66
     */
    setItemText(index: number, text: string): void;

    /**
     * Deprecated
     * @param text string
     */
    insertItem(text: string): void;

    /**
     * Deprecated
     * @param index number
     * @returns string
     */
    text(index: number): string; // String

    /* Signals */

    /**
     * Emitted when an item is selected.
     * @param index number - The index of the item that was activated.
     */
    activated: ISignal<number>;

    /**
     * Emitted when the current index changes.
     * @param index number - The index of the current item.
     * @since 4.6.2.66
     */
    currentIndexChanged: ISignal<number>;

    /**
     * Emitted when the highlighted item changes.
     * @param index number - The index of the item that is highlighted.
     */
    highlighted: ISignal<number>;

    /**
     * Emitted when the text of the box changes, passes the new text of the box.
     * @param text string
     */
    textChanged: ISignal<string>;
}
