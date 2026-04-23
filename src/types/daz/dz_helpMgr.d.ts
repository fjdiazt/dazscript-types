/**
 * Manager responsible for the help documentation.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/helpmgr_dz
 */
declare class DzHelpMgr extends QObject {

    /* Methods */

    /**
     * Opens the help browser at the given identifier.
     * @param identifier string - The identifier to browse to.
     */
    browseToIdentifier(identifier: string): void;

    /**
     * Opens the help browser at the given keyword.
     * @param keyword string - The keyword to browse to.
     */
    browseToKeyword(keyword: string): void;

    /**
     * Opens the spacified page in the help browser.
     * @param page string - The path of the page to browse to; can be absolute or relative to DzApp::getDocumentationPath().
     */
    browseToPage(page: string): void;

    /**
     * Opens the help browser at the given url.
     * @param url string - The URL of the page to browse to.
     */
    browseToUrl(url: string): void;

    /**
     * @param name string - The name of the help filter to get the attributes of.
     * @returns any[] The list of attributes for the help filter help keyword (if any), otherwise an empty list.
     */
    findFilterAttributes(name: string): any[]; // Array

    /**
     * @param id string - The help identifier to find the associated URL for.
     * @returns string The URL associated with the help identifier (if any), otherwise an empty URL.
     */
    findIdentifierUrl(id: string): string; // String

    /**
     * @param keyword string - The keyword to find the associated URL for.
     * @returns string The URL associated with the help keyword (if any), otherwise an empty URL.
     */
    findKeywordUrl(keyword: string): string; // String

    /**
     * @param label string - The label of the help item.
     * @returns string The description for the help item named label (if any), otherwise an empty string.
     */
    getDescription(label: string): string; // String

    /**
     * @param which number - The index of the help filter attributes to return.
     * @returns any[] The list of attributes for the help filter at the given index (if valid), otherwise an empty list.
     */
    getFilterAttributes(which: number): any[]; // Array

    /**
     * @param which number - The index of the help filter to return.
     * @returns string The name of the help filter at the given index (if valid), otherwise an empty string.
     */
    getFilterName(which: number): string; // String

    /**
     * @param label string - The label of the help item.
     * @returns string The group for the help item named label (if any), otherwise an empty string.
     */
    getGroup(label: string): string; // String

    /**
     * @returns any[] A list of the groups for the help items (if any), otherwise an empty list.
     * @since 4.11.0.151
     */
    getGroups(): any[]; // Array

    /**
     * @returns any[] A list of labels for all help items (if any), otherwise an empty list.
     */
    getHelpItemLabels(): any[]; // Array

    /**
     * @param label string - The label of the help item.
     * @returns string The whats this help string text for the help item named label (if any), otherwise an empty string.
     */
    getHelpString(label: string): string; // String

    /**
     * @param group string - The group name of the replacement text; must match the group name of the help item where the replacement will be used.
     * @param key string - The key for the replacement text; must match the regular expression: [:/-_.a-zA-Z0-9]+.
     * @returns string The help string replacement text (if any), otherwise an empty string.
     * @since 4.11.0.359
     */
    getHelpStringReplacement(group: string, key: string): string; // String

    /**
     * @returns any[] A list of the help string replacement groups (if any), otherwise an empty list.
     * @since 4.11.0.359
     */
    getHelpStringReplacementGroups(): any[]; // Array

    /**
     * @param group string - The group name of the replacement text; expected to be the group name of the help item where the replacement will be used.
     * @returns any[] A list of help string replacement keys in the specified group (if any), otherwise an empty list.
     * @since 4.11.0.359
     */
    getHelpStringReplacementKeys(group: string): any[]; // Array

    /**
     * @param which number - The index of the help identifier to return.
     * @returns string The help identifier at the given index (if valid), otherwise an empty string.
     */
    getIdentifier(which: number): string; // String

    /**
     * @param which number - The index of the help identifier URL to return.
     * @returns string The URL associated with the help identifier at the given index (if valid), otherwise an empty URL.
     */
    getIdentifierUrl(which: number): string; // String

    /**
     * @param which number - The index of the help keyword to return.
     * @returns string The help keyword at the given index (if valid), otherwise an empty string.
     */
    getKeyword(which: number): string; // String

    /**
     * @param which number - The index of the help keyword URL to return.
     * @returns string The URL associated with the help keyword at the given index (if any), otherwise an empty URL.
     */
    getKeywordUrl(which: number): string; // String

    /**
     * @returns number The number of help filters.
     */
    getNumFilters(): number; // Number

    /**
     * @returns number The number of help identifiers.
     */
    getNumIdentifiers(): number; // Number

    /**
     * @returns number The number of help keywords.
     */
    getNumKeywords(): number; // Number

    /**
     * @param label string - The label of the help item.
     * @returns string The status tip text for the help item named label (if any), otherwise an empty string.
     */
    getStatusTip(label: string): string; // String

    /**
     * @param label string - The label of the help item.
     * @returns string The tool tip text for the help item named label (if any), otherwise an empty string.
     */
    getToolTip(label: string): string; // String

    /**
     * @param label string - The label of the help item.
     * @returns boolean true if a help item with the given label exists, otherwise false.
     */
    hasHelpItem(label: string): boolean; // Boolean

    /**
     * @param label string - The label of the help item.
     * @returns boolean true if a help item with the given label is used, otherwise false.
     */
    isHelpItemUsed(label: string): boolean; // Boolean

    /**
     * Removes the help item with the given label.
     * @param label string - The label of the help item to remove.
     * @returns boolean true if label was removed, otherwise false.
     */
    removeHelpItem(label: string): boolean; // Boolean

    /**
     * Changes the name for the help item with the given label.
     * @param oldLabel string - The label of the help item to rename.
     * @param newLabel string - The new label of the help item.
     * @returns boolean true if oldLabel was renamed, otherwise false.
     */
    renameHelpItem(oldLabel: string, newLabel: string): boolean; // Boolean

    /**
     * Save the inline help to the specified path.
     * @param filename string
     * @param groups any[] - The list of groups of items to include; an empty list (default) does not filter which groups to allow.
     * @param labels any[] - The list of labels of items to include; an empty list (default) does not filter which labels to allow.
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     * @since 4.11.0.151
     */
    saveHelpItems(filename: string, groups?: any[], labels?: any[]): DzError;

    /**
     * Sets the description for the help item with the given label. If a help item does not exist, one will be created.
     * @param label string - The label of the help item to set the values of.
     * @param description string - The string to set the description of the help item to.
     */
    setDescription(label: string, description: string): void;

    /**
     * Sets the group for the help item with the given label. If a help item does not exist, one will be created.
     * @param label string - The label of the help item to set the values of.
     * @param group string - The string to set the group of the help item to.
     */
    setGroup(label: string, group: string): void;

    /**
     * Sets the values for the help item with the given label. If a help item does not exist, one will be created.
     * @param label string - The label of the help item to set the values of.
     * @param group string
     * @param description string - The string to set the description of the help item to.
     * @param toolTip string - The string to set the tool tip of the help item to.
     * @param statusTip string - The string to set the status tip of the help item to.
     * @param helpString string - The string to set the whats this help string of the help item to.
     */
    setHelpItem(label: string, group: string, description: string, toolTip: string, statusTip: string, helpString: string): void;

    /**
     * Sets the whats this help string for the help item with the given label. If a help item does not exist, one will be created.
     * @param label string - The label of the help item to set the values of.
     * @param helpString string - The string to set the whats this help string of the help item to.
     */
    setHelpString(label: string, helpString: string): void;

    /**
     * Sets a key / value pair for a help string replacement in the specified group.
     * @param group string - The group name of the replacement text; must match the group name of the help item where the replacement will be used.
     * @param key string - The key for the replacement text; must match the regular expression: [:/-_.a-zA-Z0-9]+.
     * @param value string - The replacement text.
     * @since 4.11.0.359
     */
    setHelpStringReplacement(group: string, key: string, value: string): void;

    /**
     * Sets the status tip for the help item with the given label. If a help item does not exist, one will be created.
     * @param label string - The label of the help item to set the values of.
     * @param statusTip string - The string to set the status tip of the help item to.
     */
    setStatusTip(label: string, statusTip: string): void;

    /**
     * Sets the tool tip for the help item with the given label. If a help item does not exist, one will be created.
     * @param label string - The label of the help item to set the values of.
     * @param toolTip string - The string to set the tool tip of the help item to.
     */
    setToolTip(label: string, toolTip: string): void;

    /**
     * Called to update the inline help for a widget.
     * @param widget QWidget - The widget to update help for.
     */
    updateHelp(widget: QWidget): void;

    /**
     * Called to update the inline help for an action.
     * @param action DzAction - The action to update help for.
     */
    updateHelp(action: DzAction): void;

    /* Undocumented Augment Members */

    /** @undocumented */
    getHelpContents(): DzHelpContentsItem;

    /** @undocumented */
    saveInlineHelp(filename: QString): DzError;
}
