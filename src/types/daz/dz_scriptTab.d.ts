/**
 * A sub-component of DzScriptPane that allows authoring/viewing each script.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/scripttab_dz
 */
declare class DzScriptTab extends QWidget {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of CursorMoveOperation.
     */
    static NoChange: number;

    /**
     * DAZ enum member of CursorMoveOperation.
     */
    static Start: number;

    /**
     * DAZ enum member of CursorMoveOperation.
     */
    static Up: number;

    /**
     * DAZ enum member of CursorMoveOperation.
     */
    static StartOfLine: number;

    /**
     * DAZ enum member of CursorMoveOperation.
     */
    static StartOfWord: number;

    /**
     * DAZ enum member of CursorMoveOperation.
     */
    static PreviousLine: number;

    /**
     * DAZ enum member of CursorMoveOperation.
     */
    static PreviousCharacter: number;

    /**
     * DAZ enum member of CursorMoveOperation.
     */
    static PreviousWord: number;

    /**
     * DAZ enum member of CursorMoveOperation.
     */
    static Left: number;

    /**
     * DAZ enum member of CursorMoveOperation.
     */
    static WordLeft: number;

    /**
     * DAZ enum member of CursorMoveOperation.
     */
    static End: number;

    /**
     * DAZ enum member of CursorMoveOperation.
     */
    static Down: number;

    /**
     * DAZ enum member of CursorMoveOperation.
     */
    static EndOfWord: number;

    /**
     * DAZ enum member of CursorMoveOperation.
     */
    static EndOfLine: number;

    /**
     * DAZ enum member of CursorMoveOperation.
     */
    static NextLine: number;

    /**
     * DAZ enum member of CursorMoveOperation.
     */
    static NextCharacter: number;

    /**
     * DAZ enum member of CursorMoveOperation.
     */
    static NextWord: number;

    /**
     * DAZ enum member of CursorMoveOperation.
     */
    static Right: number;

    /**
     * DAZ enum member of CursorMoveOperation.
     */
    static WordRight: number;

    /* Methods */

    /**
     * Appends text to the end of the script.
     * @param text string - The text to append.
     * @returns boolean true if the script is not encrypted, otherwise false.
     * @since 4.11.0.137
     */
    appendText(text: string): boolean; // Boolean

    /**
     * Starts a block of editing operations as a single operation from an undo/redo perspective.
     * @returns boolean true if the script is not encrypted, otherwise false.
     * @since 4.11.0.137
     */
    beginEdit(): boolean; // Boolean

    /**
     * Scrolls the document in order to center the cursor vertically.
     */
    centerCursor(): void;

    /**
     * Deletes all of in the document.
     */
    clear(): void;

    /**
     * Clears the redo stack.
     * @since 4.11.0.143
     */
    clearRedoStack(): void;

    /**
     * Clears the current selection by setting the anchor to the cursor position; does not delete the text of the selection.
     * @returns boolean true if the script is not encrypted, otherwise false.
     * @since 4.11.0.137
     */
    clearSelection(): boolean; // Boolean

    /**
     * Clears the undo and redo stacks.
     * @since 4.11.0.143
     */
    clearUndoRedoStacks(): void;

    /**
     * Clears the undo stack.
     * @since 4.11.0.143
     */
    clearUndoStack(): void;

    /**
     * Copies the selected text to the clipboard.
     * @returns boolean true if the script is not encrypted, otherwise false.
     * @since 4.11.0.137
     */
    copySelection(): boolean; // Boolean

    /**
     * Copies the selected text to the clipboard and deletes it from the script.
     * @returns boolean true if the script is not encrypted, otherwise false.
     * @since 4.11.0.137
     */
    cutSelection(): boolean; // Boolean

    /**
     * If there is no text selected in the script, deletes the character at the current cursor position, otherwise deletes the selected text.
     * @returns boolean true if the script is not encrypted, otherwise false.
     * @since 4.11.0.137
     */
    deleteSelection(): boolean; // Boolean

    /**
     * Finishes a block of editing operations as a single operation from an undo/redo perspective.
     * @returns boolean true if the script is not encrypted, otherwise false.
     * @since 4.11.0.137
     */
    finishEdit(): boolean; // Boolean

    /**
     * Causes a foldable line to be folded (collapsed).
     * @param line number - The number of the line to fold.
     * @returns boolean true if the script is not encrypted, otherwise false.
     */
    foldLine(line: number): boolean; // Boolean

    /**
     * @returns number The (0-based) absolute position of the anchor; this is the same as getPosition() unless there is a selection in which case getPosition() marks the end of the selection and this marks the starting position; the cursor is positioned between characters.
     * @since 4.11.0.137
     */
    getCursorAnchor(): number; // Number

    /**
     * @returns number The (0-based) relative position of the cursor within the line; the cursor is positioned between characters on the line.
     * @since 4.11.0.137
     */
    getCursorColumnNumber(): number; // Number

    /**
     * @returns number The (1-based) relative position of the line within the script that the cursor is in.
     * @since 4.11.0.137
     */
    getCursorLineNumber(): number; // Number

    /**
     * @returns number The (0-based) absolute position of the cursor within the script; the cursor is positioned between characters.
     * @since 4.11.0.137
     */
    getCursorPosition(): number; // Number

    /**
     * @returns string The short name of the script.
     */
    getFilename(): string; // String

    /**
     * @returns string The full path to the script.
     */
    getFilepath(): string; // String

    /**
     * @param line number
     * @returns string The text of the (1-based) line specified (if not encrypted), otherwise an empty string.
     * @since 4.11.0.141
     */
    getLineText(line: number): string; // String

    /**
     * @returns string The selected text of the script (if not encrypted), otherwise an empty string.
     * @since 4.11.0.137
     */
    getSelectedText(): string; // String

    /**
     * @returns string The text of the script (if not encrypted), otherwise an empty string.
     * @since 4.11.0.137
     */
    getText(): string; // String

    /**
     * @returns string The type of the script.
     */
    getType(): string; // String

    /**
     * @returns DzVersion The version of the script.
     */
    getVersion(): DzVersion;

    /**
     * Moves the cursor to the given line number.
     * @param line number - The number of the line to move the cursor to.
     * @returns boolean true if the script is not encrypted and the line number specified is within the range of lines in the script, otherwise false.
     */
    gotoLine(line: number): boolean; // Boolean

    /**
     * Indents the selected line(s) by the specified amount.
     * @param levels number - The number of indentions to apply.
     * @returns boolean true if the script is not encrypted and the operation was successful, otherwise false.
     * @since 4.11.0.137
     */
    indent(levels?: number): boolean; // Boolean

    /**
     * Inserts text at the current cursor position.
     * @param text string - The text to insert.
     * @returns boolean true if the script is not encrypted, otherwise false.
     * @since 4.11.0.137
     */
    insertText(text: string): boolean; // Boolean

    /**
     * @returns boolean true if the cursor is at the end of the document, otherwise false.
     * @since 4.11.0.138
     */
    isCursorAtEnd(): boolean; // Boolean

    /**
     * @returns boolean true if the cursor is at the end of the line, otherwise false.
     * @since 4.11.0.138
     */
    isCursorAtLineEnd(): boolean; // Boolean

    /**
     * @returns boolean true if the cursor is at the start of the line, otherwise false.
     * @since 4.11.0.138
     */
    isCursorAtLineStart(): boolean; // Boolean

    /**
     * @returns boolean true if the cursor is at the start of the document, otherwise false.
     * @since 4.11.0.138
     */
    isCursorAtStart(): boolean; // Boolean

    /**
     * @returns boolean true if the script is encrypted, otherwise false.
     * @since 4.11.0.142
     */
    isEncrypted(): boolean; // Boolean

    /**
     * @param line number - The line number to check.
     * @returns boolean true if the script is not encrypted and line is foldable (collapsable), otherwise false.
     */
    isLineFoldable(line: number): boolean; // Boolean

    /**
     * @param line number - The line number to check.
     * @returns boolean true if the script is not encrypted and line is folded (collapsed), otherwise false.
     */
    isLineFolded(line: number): boolean; // Boolean

    /**
     * @returns boolean true if the script is in a modified state, otherwise false.
     * @since 4.11.0.143
     */
    isModified(): boolean; // Boolean

    /**
     * Highlights occurances of specified text within the body of the script.
     * @param text string - The text to “mark”.
     * @param caseSense number - If 0, case insensitive. If 1, case sensitive.
     */
    markText(text: string, caseSense?: number): void;

    /**
     * Moves the cursor by performing the specified operation a given number of times; the cursor is positioned between characters.
     * @param operation number - The operation to perform on the cursor.
     * @param keepAnchor boolean - If true, the current position of the cursor is kept as the anchor (the start of a selection). If false, the anchor is set to the same position.
     * @param iterations number - The number of times to perform the operation.
     * @returns boolean true if all operations were completed successfully; otherwise false.
     * @since 4.11.0.138
     */
    moveCursorPosition(operation: number, keepAnchor?: boolean, iterations?: number): boolean; // Boolean

    /**
     * @returns boolean true if the contents of this tab has not been saved, the contents of this tab has been modified since the script was last saved, the version number of this tab does not match the version number last saved for the script, the script type of this tab does not match the script type last saved for the script, otherwise false.
     * @since 4.11.0.137
     */
    needsSave(): boolean; // Boolean

    /**
     * @returns boolean true if the contents of this tab has not been saved (e.g., started from an empty/new script, or was converted from an earlier deprecated format), otherwise false.
     * @since 4.11.0.137
     */
    needsSaveAs(): boolean; // Boolean

    /**
     * @returns number The number of available redo steps.
     * @since 4.11.0.143
     */
    numAvailableRedoSteps(): number; // Number

    /**
     * @returns number The number of available undo steps.
     * @since 4.11.0.143
     */
    numAvailableUndoSteps(): number; // Number

    /**
     * @returns number The number of characters in the script if not encrypted, otherwise -1.
     * @since 4.11.0.143
     */
    numCharacters(): number; // Number

    /**
     * @returns number The number of lines in the script if not encrypted, otherwise -1.
     * @since 4.11.0.137
     */
    numLines(): number; // Number

    /**
     * Pastes the text from the clipboard into the script at the current cursor position.
     * @returns boolean true if the script is not encrypted, otherwise false.
     * @since 4.11.0.137
     */
    pasteAtCursor(): boolean; // Boolean

    /**
     * Redoes the last operation. If there is no operation to redo, nothing happens.
     */
    redo(): void;

    /**
     * Causes the script to be reloaded from disk.
     * @returns boolean true if a file was reloaded, otherwise false.
     * @since 4.11.0.141
     */
    reloadScript(): boolean; // Boolean

    /**
     * Prompts the user to save the script to an encrypted file.
     * @returns boolean true if a file was saved, otherwise false.
     * @since 4.11.0.141
     */
    saveEncryptedScript(): boolean; // Boolean

    /**
     * Saves the contents of this tab to file, prompting as needed.
     * @returns boolean true if a file was saved, otherwise false.
     * @since 4.11.0.141
     */
    saveScript(): boolean; // Boolean

    /**
     * Prompts the user to save the script.
     * @returns boolean true if a file was saved, otherwise false.
     * @since 4.11.0.141
     */
    saveScriptAs(): boolean; // Boolean

    /**
     * Selects all text in the script.
     * @returns boolean true if the script is not encrypted, otherwise false.
     * @since 4.11.0.137
     */
    selectAllText(): boolean; // Boolean

    /**
     * Moves the cursor to the absolute position in the script specified by pos; the cursor is positioned between characters.
     * @param pos number - The absolute position to move the cursor to.
     * @param keepAnchor boolean - If true, the text between the current position and the new position is selected. If false, no text is selected.
     */
    setCursorPosition(pos: number, keepAnchor?: boolean): void;

    /**
     * Moves the cursor to the position specified in the script; the cursor is positioned between characters.
     * @param line number - The (1-based) line number to move the cursor to.
     * @param column number - The (0-based) column number to move the cursor to.
     * @param keepAnchor boolean - If true, the text between the current position and the new position is selected. If false, no text is selected.
     * @since 4.11.0.141
     */
    setCursorPosition(line: number, column: number, keepAnchor?: boolean): void;

    /**
     * Sets the text of the specified line in the script.
     * @param line number - The (1-based) line number to set the text of.
     * @param text string - The text to set.
     * @returns boolean true if the script is not encrypted, otherwise false.
     * @since 4.11.0.142
     */
    setLineText(line: number, text: string): boolean; // Boolean

    /**
     * Sets the text of the script.
     * @param text string - The text to set.
     * @returns boolean true if the script is not encrypted, otherwise false.
     * @since 4.11.0.137
     */
    setText(text: string): boolean; // Boolean

    /**
     * Sets the type of the script.
     * @param type string - The type to set.
     * @returns boolean true if the script is not encrypted and the type is different, otherwise false.
     * @since 4.11.0.130
     */
    setType(type: string): boolean; // Boolean

    /**
     * Sets the version for the script.
     * @param version DzVersion - The version to set.
     * @returns boolean true if the script is not encrypted and the version is different, otherwise false.
     * @since 4.11.0.138
     */
    setVersion(version: DzVersion): boolean; // Boolean

    /**
     * Sets the build number of the version for the script.
     * @param build number - The build number to set.
     * @returns boolean true if the script is not encrypted and the build number is different, otherwise false.
     */
    setVersionBuild(build: number): boolean; // Boolean

    /**
     * Sets the major number of the version for the script.
     * @param major number - The major number to set.
     * @returns boolean true if the script is not encrypted and the major number is different, otherwise false.
     */
    setVersionMajor(major: number): boolean; // Boolean

    /**
     * Sets the minor number of the version for the script.
     * @param minor number - The minor number to set.
     * @returns boolean true if the script is not encrypted and the minor number is different, otherwise false.
     */
    setVersionMinor(minor: number): boolean; // Boolean

    /**
     * Sets the revision number of the version for the script.
     * @param revision number - The revision number to set.
     * @returns boolean true if the script is not encrypted and the revision number is different, otherwise false.
     */
    setVersionRevision(revision: number): boolean; // Boolean

    /**
     * Toggles the folded/unfolded (collapsed/expanded) state of a foldable line.
     * @param line number - The number of the line to toggle the folded state.
     * @returns boolean true if the script is not encrypted, otherwise false.
     */
    toggleFold(line: number): boolean; // Boolean

    /**
     * Undoes the last operation. If there is no operation to undo, nothing happens.
     */
    undo(): void;

    /**
     * Causes a foldable line to be unfolded (expanded).
     * @param line number - The number of the line to unfold.
     * @returns boolean true if the script is not encrypted, otherwise false.
     */
    unfoldLine(line: number): boolean; // Boolean

    /**
     * Unindent the selected line(s) by the specified amount.
     * @param levels number - The number of unindentions to apply.
     * @returns boolean true if the script is not encrypted and the operation was successful, otherwise false.
     * @since 4.11.0.137
     */
    unindent(levels?: number): boolean; // Boolean

    /**
     * Forces the sidebar (the area on the left of the script that displays line numbers and folding points) to be updated.
     */
    updateSidebar(): void;

    /* Signals */

    /**
     * Emitted when the block count (number of lines) has changed.
     * @param count number - The new count.
     */
    blockCountChanged: ISignal<number>;

    /**
     * Emitted when text is selected or de-selected.
     * @param yesNo boolean - The state of whether or not text is selected.
     */
    copyAvailable: ISignal<boolean>;

    /**
     * Emitted when the position of the text cursor has changed.
     */
    cursorPositionChanged: ISignal<void>;

    /**
     * Emitted when the content of the document changes in a way that affects the modification state.
     * @param state boolean - The state of whether or not the document has been modified.
     */
    modificationChanged: ISignal<boolean>;

    /**
     * Emitted when the name of the script has changed.
     */
    nameChanged: ISignal<void>;

    /**
     * Emitted when redo operations become available/un-available.
     * @param yesNo boolean - The state of whether or not redo operations are available.
     */
    redoAvailable: ISignal<boolean>;

    /**
     * Emitted when text selection has changed.
     */
    selectionChanged: ISignal<void>;

    /**
     * Emitted when the text of the document has changed.
     */
    textChanged: ISignal<void>;

    /**
     * Emitted when the type of the script has changed.
     */
    typeChanged: ISignal<void>;

    /**
     * Emitted when undo operations become available/un-available.
     * @param yesNo boolean - The state of whether or not undo operations are available.
     */
    undoAvailable: ISignal<boolean>;

    /**
     * Emitted when the document needs an update of the specified area.
     * @param rect Rect - The area requesting an update. If the text is scrolled, this will cover the entire document viewport.
     * @param dy number - If the text is scrolled vertically, the amount of pixels the viewport was scrolled.
     */
    updateRequest: ISignal<Rect, number>;

    /**
     * Emitted when the version of the script has changed.
     */
    versionChanged: ISignal<void>;
}
