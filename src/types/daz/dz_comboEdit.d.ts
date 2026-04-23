/**
 * A compound QLineEdit, QPushButton and QMenu widget.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/comboedit_dz
 */
declare class DzComboEdit extends DzWidget {

    /* Properties */

    /**
     * Holds whether the input satisfies the inputMask and the validator. (Read Only)
     * @since 4.12.0.80.
     */
    acceptableInput: boolean; // Boolean

    /**
     * Holds the alignment of the text displayed in the text field.
     * @since 4.12.0.80.
     */
    alignment: number; // DzWidget::AlignmentFlags

    /**
     * Holds the character(s) to detect in the text field as the delimiter between multiple values.
     * @since 4.15.0.15.
     */
    appendDelimiter: string; // String

    /**
     * Holds the position of the cursor in the text field.
     * @since 4.12.0.80.
     */
    cursorPosition: number; // Number

    /**
     * Holds whether holding the control modifier key causes the value of selection in the popup to be appended to the current text.
     * @since 4.15.0.15.
     */
    holdModifierAppend: boolean; // Boolean

    /**
     * Holds the input mask for the text field. Set this to an empty string to clear the input mask.
     * @since 4.12.0.80.
     */
    inputMask: string; // String

    /**
     * Holds the maximum length of the text in the text field.
     * @since 4.12.0.80.
     */
    maxLength: number; // Number

    /**
     * Holds whether clicking an item in the menu causes only its text (default - false), or the entire path (true), to be inserted into the field.
     * @since 4.11.0.226.
     */
    menuSelectionIncludesPath: boolean; // Boolean

    /**
     * Holds whether the text in the text field has been modified.
     * @since 4.12.0.80.
     */
    modified: boolean; // Boolean

    /**
     * Holds the text to display to the user when text is an empty string; e.g., a hint.
     */
    placeholderText: string; // String

    /**
     * Holds whether the text field can be manually written to by the user.
     */
    readOnly: boolean; // Boolean

    /**
     * Holds whether a redo operation is available. (Read Only)
     * @since 4.12.0.80.
     */
    redoAvailable: boolean; // Boolean

    /**
     * Holds whether to present a clear button to the user when there is text to clear.
     * @since 4.22.1.164.
     */
    showClearButton: boolean; // Boolean

    /**
     * Holds the character(s) to detect in inserted items as the delimiter for constructing submenus.
     * @since 4.11.0.226.
     */
    submenuDelimiter: string; // String

    /**
     * Holds the text of the text field.
     */
    text: string; // String

    /**
     * Holds whether an undo operation is available. (Read Only)
     * @since 4.12.0.80.
     */
    undoAvailable: boolean; // Boolean

    /**
     * Holds whether clicking the button causes a menu (default - false), or a treeview (true) to be displayed.
     */
    usePathPopUp: boolean; // Boolean

    /* Constructors */

    /**
     * @param parent DzWidget
     * @param updateOnSelect boolean
     */
    constructor(parent: DzWidget, updateOnSelect?: boolean);

    /* Methods */

    /**
     * Adds an item with the given text to the list of options in the popup. The item is appended to the list of existing items.
     * @param item string - The item to add. A separator can be created in a menu by using a single hyphen (“-”) character. Sub-menus can be created by using two consecutive greater than (“»”) characters as a delimiter between the entries of a given hierarchy.
     * @param validate boolean - If true, causes the item to be checked for validity before being added to the list. (since 4.12.1.29)
     */
    addItem(item: string, validate?: boolean): void;

    /**
     * Adds each of the strings in the given list to the list of options in the popup. Each item is appended to the list of existing items in turn.
     * @param items any[] - The list of items to add. Separators can be created in a menu by using a single hyphen (“-”) character. Sub-menus can be created by using two consecutive greater than (“»”) characters as a delimiter between the entries of a given hierarchy.
     * @param validate boolean - If true, causes each item to be checked for validity before being added to the list. (since 4.12.1.29)
     * @since 4.12.1.29
     */
    addItems(items: any[], validate?: boolean): void;

    /**
     * If text is currently selected, it will be deleted and the cursor moved to the beginning of the selection. If no text is selected, the cursor will be moved one character to the left and the character will be deleted.
     * @since 4.12.0.80
     */
    backspace(): void;

    /**
     * Removes all strings used to build the list of options in the popup.
     */
    clear(): void;

    /**
     * Clears the text in the editor.
     * @since 4.12.0.80
     */
    clearText(): void;

    /**
     * Copies the selected text into the clipboard.
     * @since 4.12.0.80
     */
    copy(): void;

    /**
     * Moves the cursor backward the given number of characters.
     * @param mark boolean - If true, each character that is stepped over will be added to the current selection.
     * @param steps number - The number of characters to move the cursor.
     * @since 4.12.0.80
     */
    cursorBackward(mark?: boolean, steps?: number): void;

    /**
     * Moves the cursor forward the given number of characters.
     * @param mark boolean - If true, each character that is stepped over will be added to the current selection.
     * @param steps number - The number of characters to move the cursor.
     * @since 4.12.0.80
     */
    cursorForward(mark?: boolean, steps?: number): void;

    /**
     * Moves the cursor backward one word.
     * @param mark boolean - If true, the word will be added to the current selection.
     * @param steps number - The number of words to move the cursor. (since 4.22.1.178)
     * @since 4.12.0.80
     */
    cursorWordBackward(mark?: boolean, steps?: number): void;

    /**
     * Moves the cursor forward one word.
     * @param mark boolean - If true, the word will be added to the current selection.
     * @param steps number - The number of words to move the cursor. (since 4.22.1.178)
     * @since 4.12.0.80
     */
    cursorWordForward(mark?: boolean, steps?: number): void;

    /**
     * Copies the selected text into the clipboard and removes it from the editor.
     * @since 4.12.0.80
     */
    cut(): void;

    /**
     * If text is currently selected, it will be deleted and the cursor moved to the beginning of the selection. If no text is selected, the character to the right of the cursor will be deleted.
     * @since 4.12.0.80
     */
    del(): void;

    /**
     * Clears any selection in the editor.
     * @since 4.12.0.80
     */
    deselect(): void;

    /**
     * Moves the cursor to the end of the line.
     * @param mark boolean - If true, the text from the cursor's previous position to the end of the line will be added to the current selection.
     * @since 4.12.0.80
     */
    end(mark?: boolean): void;

    /**
     * Search the list of items in the popup for the specified text. The search is not case sensitive.
     * @param text string - The item text to find.
     * @returns number The index of the item that represents the given text (if any), otherwise -1.
     */
    findItem(text: string): number; // Number

    /**
     * @returns DzSettings The settings for the validator (if any) set on this combo edit, otherwise null.
     * @since 4.12.1.97
     */
    getValidatorSettings(): DzSettings;

    /**
     * @returns boolean true if the input satisfies the inputMask and the validator, otherwise false.
     * @since 4.12.0.80
     */
    hasAcceptableInput(): boolean; // Boolean

    /**
     * @returns boolean true if some or all of the text in the text field is selected, otherwise false.
     * @since 4.12.0.80
     */
    hasSelectedText(): boolean; // Boolean

    /**
     * Moves the cursor to the beginning of the line.
     * @param mark boolean - If true, the text from the beginning of the line to the cursor's previous position will be added to the current selection.
     * @since 4.12.0.80
     */
    home(mark?: boolean): void;

    /**
     * Inserts an item with the given text to the list of options in the popup at the given index.
     * @param index number - The index to insert the item at. If the index is equal to or higher than the total number of items, the new item is appended to the list of existing items. If the index is zero or negative, the new item is prepended to the list of existing items.
     * @param item string - The item to insert. A separator can be created in a menu by using a single hyphen (“-”) character. Sub-menus can be created by using two consecutive greater than (“»”) characters as a delimiter between the entries of a given hierarchy.
     * @param validate boolean - If true, causes the item to be checked for validity before being inserted into the list. (since 4.12.1.29)
     */
    insertItem(index: number, item: string, validate?: boolean): void;

    /**
     * Inserts each of the strings in the given list to the list of options in the popup at the given index. Each item is appended to the list of existing items, from the given index, in turn.
     * @param index number - The index to insert the items at. If the index is equal to or higher than the total number of items, the new items are appended to the list of existing items. If the index is zero or negative, the new items are prepended to the list of existing items.
     * @param items any[] - The list of items to insert. Separators can be created in a menu by using a single hyphen (“-”) character. Sub-menus can be created by using two consecutive greater than (“»”) characters as a delimiter between the entries of a given hierarchy.
     * @param validate boolean - If true, causes each item to be checked for validity before being inserted into the list. (since 4.12.1.29)
     */
    insertItems(index: number, items: any[], validate?: boolean): void;

    /**
     * @returns any[] The list of strings used to build the list of options in the popup.
     */
    items(): any[]; // Array

    /**
     * Inserts any text on the clipboard into the line at the cursor's current position.
     * @since 4.12.0.80
     */
    paste(): void;

    /**
     * If redoAvailable is true, redoes the next operation in the editor.
     * @since 4.12.0.80
     */
    redo(): void;

    /**
     * Removes the specified item from the list of options in the popup.
     * @param item string - The item to remove.
     */
    removeItem(item: string): void;

    /**
     * Selects all the text in the editor.
     * @since 4.12.0.80
     */
    selectAll(): void;

    /**
     * @returns string The currently selected text (if any) in the text field.
     * @since 4.12.0.80
     */
    selectedText(): string; // String

    /**
     * @returns number The position in the editor where the current selection begins.
     * @since 4.12.0.80
     */
    selectionStart(): number; // Number

    /**
     * Causes this combo edit to only accept characters that represent double precision floating point (decimal) numbers.
     * @param bottom number - The minimum acceptable value.
     * @param top number - The maximum acceptable value.
     * @param decimals number - The maximum number of digits after the decimal point to allow.
     * @param scientific boolean - If true, the text of the editor is expressed in scientific form; i.e., it may have an exponent part; i.e., 1.5E-2. If false (default), the text of the editor is expressed as a standard number; i.e., 0.015.
     * @since 4.11.0.346
     */
    setDoubleValidator(bottom: number, top: number, decimals: number, scientific?: boolean): void;

    /**
     * Causes this combo edit to only accept characters that represent whole numbers (integers).
     * @param bottom number - The minimum acceptable value.
     * @param top number - The maximum acceptable value.
     * @since 4.11.0.346
     */
    setIntValidator(bottom: number, top: number): void;

    /**
     * Causes this combo edit to only accept characters that satisfy a Regular Expression.
     * @param rx string
     * @param caseSensitive boolean - If true (default), the expression is case sensitive.
     * @since 4.11.0.346
     */
    setRegExValidator(rx: string, caseSensitive?: boolean): void;

    /**
     * Sets the selected portion of the text in the editor.
     * @param start number - The position to start the selection from.
     * @param length number - The number of characters from start to select.
     * @since 4.12.0.80
     */
    setSelection(start: number, length: number): void;

    /**
     * Causes this combo edit to only accept characters that satisfy a validator configured with a settings object.
     * @param settings DzSettings - The settings to use in choosing and configuring the validator. The settings must contain a string value named “validator” that provides the type of validator to set. Valid types are: float, int, regexp, path (since 4.20.1.67), subpath, filename, nodename, nodelabel.
     * @since 4.12.1.97
     */
    setValidator(settings: DzSettings): void;

    /**
     * If undoAvailable is true, undoes the last operation in the editor.
     * @since 4.12.0.80
     */
    undo(): void;

    /* Signals */

    /**
     * Emitted when the cursor moves within the field.
     * @param oldPos number - The previous position.
     * @param newPos number - The new position.
     * @since 4.11.0.377
     */
    cursorPositionChanged: ISignal<number, number>;

    /**
     * Emitted when the Return or Enter key is pressed or the line edit loses focus.
     * @since 4.11.0.377
     */
    editingFinished: ISignal<void>;

    /**
     * Emitted when the selected item has changed.
     * @param item string - The item that was selected from the menu.
     */
    itemChanged: ISignal<string>;

    /**
     * Emitted when the Return or Enter key is pressed.
     * @since 4.11.0.377
     */
    returnPressed: ISignal<void>;

    /**
     * Emitted when the selection within the field changes.
     * @since 4.11.0.377
     */
    selectionChanged: ISignal<void>;

    /**
     * Emitted when the text has changed.
     * @param text string - The new text.
     */
    textChanged: ISignal<string>;

    /**
     * Emitted when the text has been cleared.
     * @since 4.22.1.164
     */
    textCleared: ISignal<void>;

    /**
     * Emitted when the text is edited.
     * @param text string - The new text.
     * @since 4.11.0.377
     */
    textEdited: ISignal<string>;

    /* Undocumented Augment Members */

    /** @undocumented */
    statusTip: string; //
}
