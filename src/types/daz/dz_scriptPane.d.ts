/**
 * A pane for viewing/authoring DAZ Scripts.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/scriptpane_dz
 */
declare class DzScriptPane extends DzPane {

    /* Methods */

    /**
     * Causes all open scripts to be closed; prompting the user to save changes as needed.
     * @returns boolean true if all scripts were closed, otherwise false.
     */
    closeAllScripts(): boolean; // Boolean

    /**
     * Causes all open scripts except the current one to be closed; prompting the user to save changes as needed.
     * @returns boolean true if all scripts except this one were closed, otherwise false.
     * @since 4.11.0.221
     */
    closeAllScriptsExceptCurrent(): boolean; // Boolean

    /**
     * Causes the active script to be closed; prompting the user to save changes as needed.
     * @returns boolean true if the file was closed, otherwise false.
     */
    closeScript(): boolean; // Boolean

    /**
     * Copies the selected text in the active script to the clipboard.
     * @returns boolean true if the script is not encrypted, otherwise false.
     */
    copySelection(): boolean; // Boolean

    /**
     * @returns DzScriptTab The 'current' (top) visible script tab.
     */
    currentScriptTab(): DzScriptTab;

    /**
     * @returns number The index of the 'current' (top) visible script tab.
     */
    currentScriptTabIndex(): number; // Number

    /**
     * Copies the selected text in the active script to the clipboard and deletes it from the document.
     * @returns boolean true if the script is not encrypted, otherwise false.
     */
    cutSelection(): boolean; // Boolean

    /**
     * If there is no text selected in the active script, deletes the character at the current cursor position, otherwise deletes the selected text.
     * @returns boolean true if the script is not encrypted, otherwise false.
     */
    deleteSelection(): boolean; // Boolean

    /**
     * Executes the active script.
     * @returns boolean true if the script executed successfully, otherwise false.
     */
    execute(): boolean; // Boolean

    /**
     * Finds the first/last occurrence of the “Find” text from the Find/Replace frame and if the “Find” text is not found, displays a message to the user.
     * @returns boolean true if the search found a match, otherwise false.
     */
    findFirst(): boolean; // Boolean

    /**
     * Finds the next occurrence of the “Find” text (based on the current cursor position) from the Find/Replace frame and if the “Find” text is not found, displays a message to the user.
     * @returns boolean true if the search found a match, otherwise false.
     */
    findNext(): boolean; // Boolean

    /**
     * Finds the previous occurrence of the “Find” text (based on the current cursor position) from the Find/Replace frame and if the “Find” text is not found, displays a message to the user.
     * @returns boolean true if the search found a match, otherwise false.
     */
    findPrevious(): boolean; // Boolean

    /**
     * @returns string The “Find” text in the Find/Replace frame.
     */
    getFindText(): string; // String

    /**
     * @returns number The number of script tabs.
     * @since 4.11.0.137
     */
    getNumScriptTabs(): number; // Number

    /**
     * @returns string The “Replace” text in the Find/Replace frame.
     */
    getReplaceText(): string; // String

    /**
     * @param index number - The index of the script tab to get.
     * @returns DzScriptTab The script tab at the specified index (if any), otherwise null.
     * @since 4.11.0.137
     */
    getScriptTab(index: number): DzScriptTab;

    /**
     * Moves the cursor to the given line number.
     * @param line number - The line number to move the cursor to.
     * @returns boolean true if the cursor could be moved to the line number specified, otherwise false.
     */
    gotoLine(line?: number): boolean; // Boolean

    /**
     * Indents the selected line(s) by the specified amount.
     * @param levels number - The number of indentions to apply.
     * @returns boolean true if the script is not encrypted and the operation was successful, otherwise false.
     */
    indent(levels?: number): boolean; // Boolean

    /**
     * @param scriptTab DzScriptTab - The script tab to get the index of.
     * @returns number The index of scriptTab.
     */
    indexOf(scriptTab: DzScriptTab): number; // Number

    /**
     * @param filename string - The filename of the script to get the index of.
     * @returns number The index if the specified file (if any), otherwise -1.
     * @since 4.16.1.21
     */
    indexOfFile(filename: string): number; // Number

    /**
     * @param filename string
     * @returns boolean true if the specified file is open, otherwise false.
     * @since 4.11.0.237
     */
    isFileOpen(filename: string): boolean; // Boolean

    /**
     * @returns boolean true if the Case Sensitive option in the Find/Replace frame is checked, otherwise false.
     */
    isFindMatchCaseChecked(): boolean; // Boolean

    /**
     * @returns boolean true if the “Regular Expression” option in the Find/Replace frame is checked, otherwise false.
     */
    isFindRegExpChecked(): boolean; // Boolean

    /**
     * @returns boolean true if the “Whole Words Only” option in the Find/Replace frame is checked, otherwise false.
     */
    isFindWholeWordsChecked(): boolean; // Boolean

    /**
     * @returns boolean true if the contents of any script has not been saved, the contents of any script has been modified since it was last saved, the version number of any script does not match the version number last saved, the type of any script does not match the type last saved, otherwise false.
     */
    needsSave(): boolean; // Boolean

    /**
     * Creates a new empty script.
     */
    newScript(): void;

    /**
     * Opens a script at the specified path in a new tab.
     * @param filename string - The filename of the script to open.
     */
    openFile(filename: string): void;

    /**
     * Prompts the user to open a script.
     * @returns boolean true if a file was opened, otherwise false.
     */
    openScript(): boolean; // Boolean

    /**
     * Pastes the text from the clipboard into the active script, at the current cursor position.
     * @returns boolean true if the script is not encrypted, otherwise false.
     */
    pasteAtCursor(): boolean; // Boolean

    /**
     * Causes the Edit menu for the pane to be rebuilt.
     * @since 4.11.0.140
     */
    refreshEditMenu(): void;

    /**
     * Causes the active script to be reloaded from disk.
     * @returns boolean true if a file was reloaded, otherwise false.
     */
    reloadScript(): boolean; // Boolean

    /**
     * Replaces all occurrences of the “Find” text with the “Replace” text and notifies the user with the number of replacements made.
     * @returns boolean true if the operation was successful, otherwise false.
     */
    replaceAll(): boolean; // Boolean

    /**
     * Replaces the selected text with the “Replace” text if it matches the “Find” text of the Find/Replace frame. If there is no selection or the text does not match the “Find” text, a findNext() operation is performed.
     * @returns boolean true if the selected text matches the “Find” text and the replace was successful, otherwise false.
     */
    replaceNext(): boolean; // Boolean

    /**
     * Replaces the selected text with the “Replace” text if it matches the “Find” text of the Find/Replace frame. If there is no selection or the text does not match the “Find” text, a findPrevious() operation is performed.
     * @returns boolean true if the selected text matches the “Find” text and the replace was successful, otherwise false.
     */
    replacePrevious(): boolean; // Boolean

    /**
     * Prompts the user to save the active script to an encrypted file.
     * @returns boolean true if the script is not encrypted and a file was saved, otherwise false.
     */
    saveEncryptedScript(): boolean; // Boolean

    /**
     * Saves the contents of the active script to the specified path.
     * @param filename string - The filename of the script to save.
     * @returns boolean true if the script is not encrypted and the operation is successful, otherwise false.
     */
    saveFile(filename: string): boolean; // Boolean

    /**
     * Saves the contents of the active script to file, prompting as needed.
     * @returns boolean true if the script is not encrypted and a file was saved, otherwise false.
     */
    saveScript(): boolean; // Boolean

    /**
     * Prompts the user to save the active script.
     * @returns boolean true if the script is not encrypted and a file was saved, otherwise false.
     */
    saveScriptAs(): boolean; // Boolean

    /**
     * Selects all text in the active script.
     * @returns boolean true if the script is not encrypted, otherwise false.
     */
    selectAll(): boolean; // Boolean

    /**
     * Sets the current script tab in the pane.
     * @param index number - The index of the script tab to make the current tab.
     */
    setCurrentScriptTab(index: number): void;

    /**
     * Sets whether or not the “Case Sensitive” option in the Find/Replace frame is checked.
     * @param yesNo boolean - If true, the “Case Sensitive” option in the Find/Replace frame is checked.
     */
    setFindMatchCaseChecked(yesNo: boolean): void;

    /**
     * Sets whether or not the “Regular Expression” option in the Find/Replace frame is checked.
     * @param yesNo boolean - If true, the “Regular Expression” option in the Find/Replace frame is checked.
     */
    setFindRegExpChecked(yesNo: boolean): void;

    /**
     * Sets the “Find” text in the Find/Replace frame.
     * @param text string - The text to set.
     */
    setFindText(text: string): void;

    /**
     * Sets whether or not the “Whole Words Only” option in the Find/Replace frame is checked.
     * @param yesNo boolean - If true, the “Whole Words Only” option in the Find/Replace frame is checked.
     */
    setFindWholeWordsChecked(yesNo: boolean): void;

    /**
     * Sets the “Replace” text in the Find/Replace frame.
     * @param text string - The text to set.
     */
    setReplaceText(text: string): void;

    /**
     * Sets whether or not the Attributes frame is visible.
     * @param onOff boolean - If true, the Attributes frame will be made visible. If false, the Attributes frame will be hidden.
     */
    showAttributesFrame(onOff: boolean): void;

    /**
     * Sets whether or not in the Find/Replace frame is visible.
     * @param onOff boolean - If true, the Find/Replace frame will be made visible. If false, the Find/Replace frame will be hidden.
     */
    showFindReplaceFrame(onOff: boolean): void;

    /**
     * Shows the preferences dialog for the pane.
     * @returns boolean true if the dialog is accepted, otherwise false.
     */
    showPreferences(): boolean; // Boolean

    /**
     * Unindent the selected line(s) by the specified amount.
     * @param levels number - The number of unindentions to apply.
     * @returns boolean true if the script is not encrypted and the operation was successful, otherwise false.
     */
    unindent(levels?: number): boolean; // Boolean

    /* Signals */

    /**
     * Emitted when the option to show/hide the attributes panel has changed.
     * @param onOff boolean - The new state of the the option.
     */
    attributesToggleChanged: ISignal<boolean>;

    /**
     * Emitted when the option to show/hide the find/replace panel has changed.
     * @param onOff boolean - The new state of the the option.
     */
    findReplaceToggleChanged: ISignal<boolean>;
}
