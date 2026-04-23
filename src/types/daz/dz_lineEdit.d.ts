/**
 * Script wrapper for QLineEdit.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/lineedit_dz
 */
declare class DzLineEdit extends DzWidget {

    /* Properties */

    /**
     * Holds whether the input satisfies the inputMask and the validator. (Read Only)
     * @since 4.6.2.50
     */
    acceptableInput: boolean; // Boolean

    /**
     * Holds the alignment of the text displayed in the editor.
     */
    alignment: number; // DzWidget::AlignmentFlags

    /**
     * Holds the position of the cursor in the editor.
     */
    cursorPosition: number; // Number

    /**
     * Holds the value that determines how the text entered is displayed to the user.
     * @since 4.6.2.50
     */
    echoMode: number; // EchoMode

    /**
     * Holds whether the editor is drawn with a frame.
     */
    frame: boolean; // Boolean

    /**
     * Holds whether text is selected. (Read Only)
     * @since 4.6.2.50
     */
    hasSelectedText: boolean; // Boolean

    /**
     * Holds the input mask for the editor. Set this to an empty string to clear the input mask.
     */
    inputMask: string; // String

    /**
     * Holds the maximum length of the text in the editor.
     */
    maxLength: number; // Number

    /**
     * Holds whether the text in the editor has been modified. (Read Only < 4.9.3.93)
     */
    modified: boolean; // Boolean

    /**
     * Holds the text string displayed in the editor when its text string is empty.
     * @since 4.6.2.50
     */
    placeholderText: string; // String

    /**
     * Holds whether the text in the editor can be edited by the user.
     */
    readOnly: boolean; // Boolean

    /**
     * Holds whether a redo operation is available. (Read Only)
     * @since 4.6.2.50
     */
    redoAvailable: boolean; // Boolean

    /**
     * Holds the selected text (if any) of the editor.
     * @since 4.6.2.50
     */
    selectedText: string; // String

    /**
     * Holds the text value of the editor.
     */
    text: string; // String

    /**
     * Holds whether an undo operation is available. (Read Only)
     * @since 4.6.2.50
     */
    undoAvailable: boolean; // Boolean

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of EchoMode.
     */
    static Normal: number;

    /**
     * DAZ enum member of EchoMode.
     */
    static NoEcho: number;

    /**
     * DAZ enum member of EchoMode.
     */
    static Password: number;

    /**
     * DAZ enum member of EchoMode.
     */
    static PasswordEchoOnEdit: number;

    /* Constructors */

    /**
     * @param parent DzWidget
     */
    constructor(parent: DzWidget);

    /* Methods */

    /**
     * If text is currently selected, it will be deleted and the cursor moved to the beginning of the selection. If no text is selected, the cursor will be moved one character to the left and the character will be deleted.
     */
    backspace(): void;

    /**
     * Clears the text in the editor.
     */
    clear(): void;

    /**
     * Deprecated
     */
    clearModified(): void;

    /**
     * Copies the selected text into the clipboard.
     */
    copy(): void;

    /**
     * Moves the cursor backward the given number of characters.
     * @param mark boolean - If true, each character that is stepped over will be added to the current selection.
     * @param steps number - The number of characters to move the cursor.
     */
    cursorBackward(mark?: boolean, steps?: number): void;

    /**
     * Moves the cursor forward the given number of characters.
     * @param mark boolean - If true, each character that is stepped over will be added to the current selection.
     * @param steps number - The number of characters to move the cursor.
     */
    cursorForward(mark?: boolean, steps?: number): void;

    /**
     * Moves the cursor backward one word.
     * @param mark boolean - If true, the word will be added to the current selection.
     * @param steps number - The number of words to move the cursor. (since 4.9.3.93)
     */
    cursorWordBackward(mark?: boolean, steps?: number): void;

    /**
     * Moves the cursor forward one word.
     * @param mark boolean - If true, the word will be added to the current selection.
     * @param steps number - The number of words to move the cursor. (since 4.9.3.93)
     */
    cursorWordForward(mark?: boolean, steps?: number): void;

    /**
     * Copies the selected text into the clipboard and removes it from the editor.
     */
    cut(): void;

    /**
     * If text is currently selected, it will be deleted and the cursor moved to the beginning of the selection. If no text is selected, the character to the right of the cursor will be deleted.
     */
    del(): void;

    /**
     * Clears any selection in the editor.
     */
    deselect(): void;

    /**
     * Moves the cursor to the end of the line.
     * @param mark boolean - If true, the text from the cursor's previous position to the end of the line will be added to the current selection.
     */
    end(mark?: boolean): void;

    /**
     * @returns DzSettings The settings for the validator (if any) set on this line edit, otherwise null.
     * @since 4.12.1.97
     */
    getValidatorSettings(): DzSettings;

    /**
     * @returns boolean true if the input satisfies the inputMask and the validator, otherwise false.
     */
    hasAcceptableInput(): boolean; // Boolean

    /**
     * @returns boolean true if some or all of the text in the editor is selected, otherwise false.
     */
    hasSelectedText(): boolean; // Boolean

    /**
     * Moves the cursor to the beginning of the line.
     * @param mark boolean - If true, the text from the beginning of the line to the cursor's previous position will be added to the current selection.
     */
    home(mark?: boolean): void;

    /**
     * Inserts any text on the clipboard into the line at the cursor's current position.
     */
    paste(): void;

    /**
     * If redoAvailable is true, redoes the next operation in the editor.
     */
    redo(): void;

    /**
     * Selects all the text in the editor.
     */
    selectAll(): void;

    /**
     * @returns string The currently selected text (if any) in the editor.
     */
    selectedText(): string; // String

    /**
     * @returns number The position in the editor where the current selection begins.
     */
    selectionStart(): number; // Number

    /**
     * Causes this line edit to only accept characters that represent double precision floating point (decimal) numbers.
     * @param bottom number - The minimum acceptable value.
     * @param top number - The maximum acceptable value.
     * @param decimals number - The maximum number of digits after the decimal point to allow.
     * @param scientific boolean - If true, the text of the editor is expressed in scientific form; i.e., it may have an exponent part; i.e., 1.5E-2. If false (default), the text of the editor is expressed as a standard number; i.e., 0.015.
     * @since 4.6.2.50
     */
    setDoubleValidator(bottom: number, top: number, decimals: number, scientific?: boolean): void;

    /**
     * Causes this line edit to only accept characters that represent whole numbers (integers).
     * @param bottom number - The minimum acceptable value.
     * @param top number - The maximum acceptable value.
     * @since 4.6.2.50
     */
    setIntValidator(bottom: number, top: number): void;

    /**
     * Causes this line edit to only accept characters that satisfy a Regular Expression.
     * @param rx string
     * @param caseSensitive boolean - If true (default), the expression is case sensitive.
     * @since 4.6.2.50
     */
    setRegExValidator(rx: string, caseSensitive?: boolean): void;

    /**
     * Sets the selected portion of the text in the editor.
     * @param start number - The position to start the selection from.
     * @param length number - The number of characters from start to select.
     */
    setSelection(start: number, length: number): void;

    /**
     * Causes this line edit to only accept characters that satisfy a validator configured with a settings object.
     * @param settings DzSettings - The settings to use in choosing and configuring the validator. The settings must contain a string value named “validator” that provides the type of validator to set. Valid types are: float, int, regexp, path (since 4.20.1.67), subpath, filename, nodename, nodelabel.
     * @since 4.12.1.97
     */
    setValidator(settings: DzSettings): void;

    /**
     * If undoAvailable is true, undoes the last operation in the editor.
     */
    undo(): void;

    /* Signals */

    /**
     * Emitted when the current position changes.
     * @param oldPos number
     * @param newPos number
     * @since 4.6.2.50
     */
    cursorPositionChanged: ISignal<number, number>;

    /**
     * Emitted when the [Return] or [Enter] key is pressed or the editor loses focus.
     * @since 4.6.2.50
     */
    editingFinished: ISignal<void>;

    /**
     * Emitted when the user presses the [Return] key in the editor.
     */
    returnPressed: ISignal<void>;

    /**
     * Emitted when the selected text in the editor changes.
     */
    selectionChanged: ISignal<void>;

    /**
     * Emitted when the text of the editor changes, passes the new text.
     * @param text string
     */
    textChanged: ISignal<string>;

    /**
     * Emitted when the text edited, passes the new text.
     * @param text string
     * @since 4.6.2.50
     */
    textEdited: ISignal<string>;

    /**
     * Deprecated
     */
    lostFocus: ISignal<void>;
}
