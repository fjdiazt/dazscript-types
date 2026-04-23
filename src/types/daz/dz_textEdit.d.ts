/**
 * Script wrapper for QTextEdit.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/textedit_dz
 */
declare class DzTextEdit extends DzWidget {

    /* Properties */

    /**
     * Holds whether the text edit accepts rich text insertions by the user.
     * @since 4.9.3.93
     */
    acceptRichText: boolean; // Boolean

    /**
     * Holds the enabled set of auto formatting features.
     * @since 4.9.3.93
     */
    autoFormatting: number; // AutoFormattingFlag

    /**
     * Holds the number of text blocks (e.g., paragraphs) in the document. (Read Only)
     */
    blockCount: number; // Number

    /**
     * Holds whether the font of the current format is bold.
     */
    bold: boolean; // Boolean

    /**
     * Holds the number of characters in the text. (Read Only)
     * @since 4.9.3.93
     */
    characterCount: number; // Number

    /**
     * Holds the width of the cursor in pixels.
     * @since 4.9.3.93
     */
    cursorWidth: number; // Number

    /**
     * Holds the title of the document.
     */
    documentTitle: string; // String

    /**
     * Holds the font family of the current format.
     * @since 4.9.3.93
     */
    family: string; // String

    /**
     * Holds the editor's contents as HTML.
     * @since 4.9.3.93
     */
    html: string; // String

    /**
     * Holds whether the font of the current format is italic.
     */
    italic: boolean; // Boolean

    /**
     * Holds the number of lines in the text. (Read Only)
     * @since 4.9.3.93
     */
    lineCount: number; // Number

    /**
     * Holds the position (in pixels or columns depending on the lineWrapMode) where text will be wrapped.
     * @since 4.9.3.93
     */
    lineWrapColumnOrWidth: number; // Number

    /**
     * Holds the mode the editor will use when wrapping text within words.
     * @since 4.9.3.93
     */
    lineWrapMode: number; // LineWrapMode

    /**
     * Holds whether the text in the editor has been modified.
     * @since 4.9.3.93
     */
    modified: boolean; // Boolean

    /**
     * Holds whether text entered by the user will overwrite existing text.
     * @since 4.9.3.93
     */
    overwriteMode: boolean; // Boolean

    /**
     * Holds the editor's contents as plain text.
     * @since 4.9.3.93
     */
    plainText: string; // String

    /**
     * Holds the point size of the font of the current format.
     */
    pointSize: number; // Number

    /**
     * Holds whether the text in the editor can be edited by the user.
     * @since 4.9.3.93
     */
    readOnly: boolean; // Boolean

    /**
     * Holds whether a redo operation is available. (Read Only)
     * @since 4.9.3.93
     */
    redoAvailable: boolean; // Boolean

    /**
     * Holds the selected text (if any) of the editor.
     * @since 4.9.3.93
     */
    selectedText: string; // String

    /**
     * Holds whether pressing the Tab key changes focus or is accepted as input.
     * @since 4.9.3.93
     */
    tabChangesFocus: boolean; // Boolean

    /**
     * Holds the tab stop width in pixels; default is 80.
     * @since 4.9.3.93
     */
    tabStopWidth: number; // Number

    /**
     * Holds the text of the editor.
     */
    text: string; // String

    /**
     * Holds the text background color of the current format.
     * @since 4.9.3.93
     */
    textBackgroundColor: Color;

    /**
     * Holds the text color of the current format.
     * @since 4.9.3.93
     */
    textColor: Color;

    /**
     * Holds the value that is used to determine how the label reacts to user input.
     * @since 4.9.3.93
     */
    textInteractionFlags: number; // DzWidget::TextInteractionFlags

    /**
     * Holds whether the font of the current format is underlined.
     */
    underline: boolean; // Boolean

    /**
     * Holds whether an undo operation is available. (Read Only)
     * @since 4.9.3.93
     */
    undoAvailable: boolean; // Boolean

    /**
     * Holds whether undo and redo are enabled.
     * @since 4.9.3.93
     */
    undoRedoEnabled: boolean; // Boolean

    /**
     * Holds the font weight of the current format. 25 = Light, 50 = Normal, 63 = DemiBold, 75 = Bold, 87 = Black.
     * @since 4.9.3.93
     */
    weight: number; // Number

    /**
     * Holds the mode the editor will use when wrapping text by words.
     * @since 4.9.3.93
     */
    wordWrapMode: number; // WrapMode

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of AutoFormattingFlag.
     */
    static AutoNone: number;

    /**
     * DAZ enum member of AutoFormattingFlag.
     */
    static AutoBulletList: number;

    /**
     * DAZ enum member of AutoFormattingFlag.
     */
    static AutoAll: number;

    /**
     * DAZ enum member of LineWrapMode.
     */
    static NoLineWrap: number;

    /**
     * DAZ enum member of LineWrapMode.
     */
    static WidgetWidth: number;

    /**
     * DAZ enum member of LineWrapMode.
     */
    static FixedPixelWidth: number;

    /**
     * DAZ enum member of LineWrapMode.
     */
    static FixedColumnWidth: number;

    /**
     * DAZ enum member of WrapMode.
     */
    static NoWrap: number;

    /**
     * DAZ enum member of WrapMode.
     */
    static WordWrap: number;

    /**
     * DAZ enum member of WrapMode.
     */
    static ManualWrap: number;

    /**
     * DAZ enum member of WrapMode.
     */
    static WrapAnywhere: number;

    /**
     * DAZ enum member of WrapMode.
     */
    static WrapAtWordBoundaryOrAnywhere: number;

    /* Constructors */

    /**
     * @param parent DzWidget
     */
    constructor(parent: DzWidget);

    /* Methods */

    /**
     * @param pos Point - The position to get the anchor at.
     * @returns string The name of the anchor at position pos, or an empty string if no anchor exists at that point.
     * @since 4.9.3.93
     */
    anchorAt(pos: Point): string; // String

    /**
     * Adds text as a new paragraph to the end of the editor.
     * @param text string - The text to add.
     * @since 4.9.3.93
     */
    append(text: string): void;

    /**
     * If text is currently selected, it will be deleted and the cursor moved to the beginning of the selection. If no text is selected, the cursor will be moved one character to the left and the character will be deleted.
     * @since 4.9.3.93
     */
    backspace(): void;

    /**
     * If a word is currently selected, it will be deleted and the cursor moved to the beginning of the selection. If no word is selected, the cursor will be moved one word to the left and the word will be deleted.
     * @since 4.9.3.93
     */
    backspaceWord(): void;

    /**
     * Removes all text from the editor.
     * @since 4.9.3.93
     */
    clear(): void;

    /**
     * Copies the selected text into the clipboard.
     * @since 4.9.3.93
     */
    copy(): void;

    /**
     * Moves the cursor backward the given number of characters.
     * @param mark boolean - If true, each character that is stepped over will be added to the current selection.
     * @param steps number - The number of characters to move the cursor.
     * @since 4.9.3.93
     */
    cursorBackward(mark?: boolean, steps?: number): void;

    /**
     * Moves the cursor forward the given number of characters.
     * @param mark boolean - If true, each character that is stepped over will be added to the current selection.
     * @param steps number - The number of characters to move the cursor.
     * @since 4.9.3.93
     */
    cursorForward(mark?: boolean, steps?: number): void;

    /**
     * Moves the cursor backward one word.
     * @param mark boolean - If true, the word will be added to the current selection.
     * @param steps number - The number of words to move the cursor.
     * @since 4.9.3.93
     */
    cursorWordBackward(mark?: boolean, steps?: number): void;

    /**
     * Moves the cursor forward one word.
     * @param mark boolean - If true, the word will be added to the current selection.
     * @param steps number - The number of words to move the cursor.
     * @since 4.9.3.93
     */
    cursorWordForward(mark?: boolean, steps?: number): void;

    /**
     * Copies the selected text into the clipboard, and removes it from the editor.
     * @since 4.9.3.93
     */
    cut(): void;

    /**
     * If text is currently selected, it will be deleted and the cursor moved to the beginning of the selection. If no text is selected, the character to the right of the cursor will be deleted.
     * @since 4.9.3.93
     */
    del(): void;

    /**
     * If a word is currently selected, it will be deleted and the cursor moved to the beginning of the selection. If no word is selected, the word to the right of the cursor will be deleted.
     * @since 4.9.3.93
     */
    deleteWord(): void;

    /**
     * Moves the cursor to the line below the current line.
     * @param mark boolean - If true, the text from the position of the cursor in the line below the current line to the cursor's previous position will be added to the current selection.
     * @param steps number - The number of lines to move the cursor.
     * @since 4.9.3.93
     */
    down(mark?: boolean, steps?: number): void;

    /**
     * Moves the cursor to the end of the document.
     * @param mark boolean - If true, the text from the cursor's previous position to the end of the document will be added to the current selection.
     * @since 4.9.3.93
     */
    end(mark?: boolean): void;

    /**
     * Ensures that the cursor is visible by scrolling the editor if necessary.
     * @since 4.9.3.93
     */
    ensureCursorVisible(): void;

    /**
     * Finds the next occurrence of expression using the given options and changes the cursor to select the match.
     * @param expression string - The expression to find.
     * @param caseSensitive boolean - If true, the search is case sensitive.
     * @param wholeWord boolean - If true, the search looks for whole words.
     * @param backward boolean - If true, the search is performed in the reverse direction.
     * @returns boolean true if expression was found, otherwise false.
     * @since 4.9.3.93
     */
    find(expression: string, caseSensitive?: boolean, wholeWord?: boolean, backward?: boolean): boolean; // Boolean

    /**
     * @returns boolean true if text is selected, otherwise false.
     */
    hasSelectedText(): boolean; // Boolean

    /**
     * Moves the cursor to the beginning of the document.
     * @param mark boolean - If true, the text from the beginning of the document to the cursor's previous position will be added to the current selection.
     * @since 4.9.3.93
     */
    home(mark?: boolean): void;

    /**
     * Splits the block (paragraph) at the cursor position.
     * @since 4.9.3.93
     */
    insertBlock(): void;

    /**
     * Inserts text, which is assumed to be HTML formatted, at the current cursor position.
     * @param text string - The HTML formatted text to insert.
     * @since 4.9.3.93
     */
    insertHtml(text: string): void;

    /**
     * Inserts text at the current cursor position.
     * @param text string - The text to insert.
     * @since 4.9.3.93
     */
    insertPlainText(text: string): void;

    /**
     * Moves the cursor to the end of the line.
     * @param mark boolean - If true, the text from the cursor's previous position to the end of the line will be added to the current selection.
     * @since 4.9.3.93
     */
    lineEnd(mark?: boolean): void;

    /**
     * Moves the cursor to the beginning of the line.
     * @param mark boolean - If true, the text from the beginning of the line to the cursor's previous position will be added to the current selection.
     * @since 4.9.3.93
     */
    lineStart(mark?: boolean): void;

    /**
     * Moves the cursor a page down in the document.
     * @param mark boolean - If true, the text from the cursor's previous position to a page down in the document will be added to the current selection.
     * @since 4.9.3.93
     */
    pageDown(mark?: boolean): void;

    /**
     * Moves the cursor a page up in the document.
     * @param mark boolean - If true, the text from a page up in the document to the cursor's previous position will be added to the current selection.
     * @since 4.9.3.93
     */
    pageUp(mark?: boolean): void;

    /**
     * Inserts any text on the clipboard into the line at the cursor's current position.
     * @since 4.9.3.93
     */
    paste(): void;

    /**
     * If redoAvailable is true, redoes the next operation in the editor.
     * @since 4.9.3.93
     */
    redo(): void;

    /**
     * Scrolls the editor to make the text at the anchor name visible, if it can be found in the document. If the anchor isn't found no scrolling will occur. An anchor is defined using the HTML anchor tag, e.g., <a name=“target”>.
     * @param name string - The name of the anchor to scroll to.
     * @since 4.9.3.93
     */
    scrollToAnchor(name: string): void;

    /**
     * Selects all the text in the editor.
     * @since 4.9.3.93
     */
    selectAll(): void;

    /**
     * @returns string The selected text (if any), or an empty string.
     */
    selectedText(): string; // String

    /**
     * @returns number The character position at which the current selection ends.
     */
    selectionEnd(): number; // Number

    /**
     * @returns number The character position at which the current selection begins.
     */
    selectionStart(): number; // Number

    /**
     * @param blockIdx number - The index of the block to get the text of.
     * @returns string If blockIdx is in range, the text of the block at blockIdx, otherwise an empty string.
     */
    text(blockIdx: number): string; // String

    /**
     * If undoAvailable is true, undoes the last operation in the editor.
     * @since 4.9.3.93
     */
    undo(): void;

    /**
     * Moves the cursor to the line above the current line.
     * @param mark boolean - If true, the text from the position of the cursor in the line above the current line to the cursor's previous position will be added to the current selection.
     * @param steps number - The number of lines to move the cursor.
     * @since 4.9.3.93
     */
    up(mark?: boolean, steps?: number): void;

    /**
     * Zooms in on the text by making the base font size range points larger and recalculating all font sizes to be the new size.
     * @param range number - The number of points to increase the fonts sizes by.
     * @since 4.9.3.93
     */
    zoomIn(range?: number): void;

    /**
     * Zooms out on the text by making the base font size range points smaller and recalculating all font sizes to be the new size.
     * @param range number - The number of points to decrease the fonts sizes by.
     * @since 4.9.3.93
     */
    zoomOut(range?: number): void;

    /* Signals */

    /**
     * Emitted when text is selected or de-selected in the editor.
     * @param yesNo boolean
     */
    copyAvailable: ISignal<boolean>;

    /**
     * Emitted when the position of the cursor has changed.
     */
    cursorPositionChanged: ISignal<void>;

    /**
     * Emitted when the selection changes.
     */
    selectionChanged: ISignal<void>;

    /**
     * Emitted when the text in the editor changes.
     */
    textChanged: ISignal<void>;

    /* Conflicting Signals */

    /**
     * Emitted when the availability of redo changes. If yesNo is true, redo() will work until redoAvailable(false) is next emitted.
     * @param yesNo boolean
     */
    /**
     * TypeScript conflict: DAZ documents this as a signal, but a property with the same name is also documented.
     * Left commented because TypeScript does not allow both declarations in the same class.
     */
    // redoAvailable: ISignal<boolean>;

    /**
     * Emitted when the availability of undo changes. If yesNo is true, undo() will work until undoAvailable(false) is next emitted.
     * @param yesNo boolean
     */
    /**
     * TypeScript conflict: DAZ documents this as a signal, but a property with the same name is also documented.
     * Left commented because TypeScript does not allow both declarations in the same class.
     */
    // undoAvailable: ISignal<boolean>;

    /* Undocumented Augment Members */

    /** @undocumented */
    paragraphs: number; // 1

    /** @undocumented */
    lines: number; // 1

    /** @undocumented */
    length: number; // 1

    /** @undocumented */
    color: QColor;

    /** @undocumented */
    linkUnderline: boolean; // false

    /** @undocumented */
    selectionParaStart(): number;

    /** @undocumented */
    selectionIndexStart(): number;

    /** @undocumented */
    selectionParaEnd(): number;

    /** @undocumented */
    selectionIndexEnd(): number;
}
