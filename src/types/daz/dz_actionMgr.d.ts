/**
 * Manager responsible for actions.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/actionmgr_dz
 */
declare class DzActionMgr extends QWidget {

    /* Constructors */

    constructor();

    constructor();

    /* Methods */

    /**
     * Adds a custom action to the action manager.
     * @param text string - The text of the action. This is displayed in menus the action added to unless a different menu text is specified.
     * @param desc string - The description of the action.
     * @param script string - The filename of the script to execute, or the actual text of the script to execute.
     * @param isFile boolean - If true, then script is assumed to contain a filename, otherwise script is assumed to be the actual script.
     * @param shortcut string - The default keyboard shortcut for the action.
     * @param iconFile string - The path of an image file that will be the icon for the action.
     * @returns string The globally unique identifier for the newly created custom action.
     */
    addCustomAction(text: string, desc: string, script: string, isFile?: boolean, shortcut?: string, iconFile?: string): string; // String

    /**
     * Clears the active menu.
     */
    clearActiveMenu(): void;

    /**
     * @param identifier string - The classname of the DzAction subclass to find the action for.
     * @returns DzAction The DzAction subclass with the specified classname (if any), otherwise null.
     */
    findAction(identifier: string): DzAction;

    /**
     * @param shortcut string - The shortcut to find actions for.
     * @returns any[] The list of actions whose shortcuts start with the specified sequence (if any), otherwise an empty list.
     * @since 4.12.1.63
     */
    findActionsForShortcut(shortcut: string): any[]; // Array

    /**
     * @param guid string - The globally unique identifier (name) of the custom action to find.
     * @returns number The index of the custom action with the specified identifier (if any), otherwise -1.
     */
    findCustomAction(guid: string): number; // Number

    /**
     * @param identifier string - The classname of the DzPane to find the action for.
     * @returns DzAction The action that toggles visibility of the specified DzPane (if any), otherwise null.
     * @since 4.8.1.18
     */
    findPaneAction(identifier: string): DzAction;

    /**
     * @param className string - The class name of the persistent menu to find.
     * @returns DzPersistentMenu The persistent menu of the specified class type (if any), otherwise null.
     */
    findPersistentMenu(className: string): DzPersistentMenu;

    /**
     * @param className string - The class name of the DzViewTool to find the action for.
     * @returns DzAction The action that activates the specified DzViewTool subclass (if any), otherwise null.
     * @since 4.8.1.18
     */
    findViewToolAction(className: string): DzAction;

    /**
     * @param index number - The index of the action to return.
     * @returns DzAction The DzAction subclass at the specified index (if any), otherwise null.
     */
    getAction(index: number): DzAction;

    /**
     * @returns DzActionMenu The currently set active menu (if any), otherwise null.
     */
    getActiveMenu(): DzActionMenu;

    /**
     * @param guid string - The globally unique identifier (name) of the custom action to get.
     * @returns number The index of the custom action with the specified GUID; creates a custom action if one does not already exist.
     */
    getCustomAction(guid: string): number; // Number

    /**
     * @param index number - The index of the custom action to return.
     * @returns DzAction The custom action at the specified index (if any), otherwise null.
     * @since 4.12.1.63
     */
    getCustomActionByIndex(index: number): DzAction;

    /**
     * @param index number - The index of the custom action to get the description of.
     * @returns string The description for the custom action at the specified index (if any), otherwise an empty string.
     * @since 4.11.0.164
     */
    getCustomActionDescription(index: number): string; // String

    /**
     * @param index number - The index of the custom action to get the filename for.
     * @returns string If the custom action refers a file, the path to the file for the custom action at the specified index (if any), otherwise an empty string.
     */
    getCustomActionFile(index: number): string; // String

    /**
     * @param index number - The index of the custom action to get the icon file for.
     * @returns string The icon file for the custom action at the specified index (if any), otherwise an empty string.
     */
    getCustomActionIcon(index: number): string; // String

    /**
     * @param index number - The index of the custom action to get the name of.
     * @returns string The globally unique identifier for the custom action at the specified index (if any), otherwise an empty string.
     */
    getCustomActionName(index: number): string; // String

    /**
     * @param index number - The index of the custom action to get information for.
     * @returns string The script code executed by the custom action or an empty string if the custom action refers to a file (if any), otherwise an empty string.
     */
    getCustomActionScript(index: number): string; // String

    /**
     * @param index number - The index of the custom action to return the shortcut for.
     * @returns string The keyboard shortcut for the custom action at the specified index (if any), otherwise an empty string.
     */
    getCustomActionShortcut(index: number): string; // String

    /**
     * @param index number - The index of the custom action to check.
     * @returns number 1 if action text is displayed with the icon for the custom action at index, 0 if action text is not displayed with the icon, -1 if index is out of range.
     * @since 4.22.1.182
     */
    getCustomActionShowTextWithIcon(index: number): number; // Number

    /**
     * @param index number - The index of the custom action to get the text for.
     * @returns string The text for the custom action at the specified index (if any), otherwise an empty string.
     */
    getCustomActionText(index: number): string; // String

    /**
     * @returns string The online URL for action documentation.
     * @since 4.22.1.208
     */
    getDocumentationUrl(): string; // String

    /**
     * @returns DzActionMenu The Main Menu for the application.
     */
    getMenu(): DzActionMenu;

    /**
     * @returns number The number of action items in the application.
     */
    getNumActions(): number; // Number

    /**
     * @returns number The number of custom actions in the action manager.
     */
    getNumCustomActions(): number; // Number

    /**
     * @returns number The number of persistent menus in the application.
     */
    getNumPersistentMenus(): number; // Number

    /**
     * @param index number - The index of the persistent menu to return.
     * @returns DzPersistentMenu The persistent menu at the specified index (if any), otherwise null.
     */
    getPersistentMenu(index: number): DzPersistentMenu;

    /**
     * Builds the main menu, pane menus and tool bars from the specified file.
     * @param filename string - The absolute path of the interface file to load.
     * @param overrideDefaults boolean - Whether default triggers (i.e. version numbers on menus) cause certain items to be rebuilt using their defaults.
     * @returns boolean true if the file was successfully loaded, otherwise false.
     * @since 4.6.0.78
     */
    loadInterfaceFile(filename: string, overrideDefaults: boolean): boolean; // Boolean

    /**
     * Removes all custom actions from the application.
     */
    removeAllCustomActions(): void;

    /**
     * Removes the custom action at the specified index.
     * @param index number - The index of the custom action to remove.
     */
    removeCustomAction(index: number): void;

    /**
     * Saves the actions to the specified file.
     * @param filename string - The absolute path of the file to save the interface settings to.
     * @returns boolean true if the file was saved successfully, otherwise false.
     */
    saveActionsFile(filename: string): boolean; // Boolean

    /**
     * Saves custom actions to the specified file.
     * @param filename string - The absolute path of the file to save the interface settings to.
     * @returns boolean true if the file was saved successfully, otherwise false.
     */
    saveCustomActionsFile(filename: string): boolean; // Boolean

    /**
     * Saves the actions, menus and toolbars to their respective files in the default location.
     * @returns boolean true if the files were saved successfully, otherwise false.
     */
    saveInterfaceFiles(): boolean; // Boolean

    /**
     * Saves the main menu, pane menus, persistent menus, and view tool menus to the specified file.
     * @param filename string - The absolute path of the file to save the interface settings to.
     * @returns boolean true if the file was saved successfully, otherwise false.
     */
    saveMenusFile(filename: string): boolean; // Boolean

    /**
     * Saves the tool bars to the specified file.
     * @param filename string - The absolute path of the file to save the interface settings to.
     * @returns boolean true if the file was saved successfully, otherwise false.
     */
    saveToolBarsFile(filename: string): boolean; // Boolean

    /**
     * @param className string - The name of the action class to set the accelerator for.
     * @param key string - The string representation of the accelerator.
     */
    setAccel(className: string, key: string): void;

    /**
     * Sets the active menu, so that actions relying on the active menu can get it. This may be called before the menu exec() call to allow context for script actions.
     * @param menu DzActionMenu - The menu to set as the active menu.
     */
    setActiveMenu(menu: DzActionMenu): void;

    /**
     * Sets the description for the custom action at the specified index.
     * @param index number - The index of the custom action to set the description for.
     * @param desc string - The description of the custom action.
     * @since 4.11.0.164
     */
    setCustomActionDescription(index: number, desc: string): void;

    /**
     * Sets the icon for the custom action at the specified index.
     * @param index number - The index of the custom action to set the icon file for.
     * @param iconFile string - The path of the image file that will be loaded for the action's icon. The path can be absolute, or relative to DzApp::getResourcesPath().
     */
    setCustomActionIcon(index: number, iconFile: string): void;

    /**
     * Sets the script for the custom action at the specified index.
     * @param index number - The index of the custom action to set the script for.
     * @param script string - The script to set as the Custom action's script.
     * @param isFile boolean - If true, script contains the name of a script file that should be loaded. If false, script contains the code for the action's script.
     */
    setCustomActionScript(index: number, script: string, isFile?: boolean): void;

    /**
     * Sets the keyboard shortcut for the custom action at the specified index.
     * @param index number - The index of the custom action to set the shortcut for.
     * @param shortcut string - The string representation of the shortcut.
     * @since 4.9.4.102
     */
    setCustomActionShortcut(index: number, shortcut: string): void;

    /**
     * Sets whether the text of the action is displayed with the icon for the custom action at the specified index.
     * @param index number - The index of the custom action to set.
     * @param onOff boolean - If true, the text of the action is always displayed with the icon (e.g., in toolbars).
     */
    setCustomActionShowTextWithIcon(index: number, onOff: boolean): void;

    /**
     * Sets the text for the custom action at the specified index.
     * @param index number - The index of the custom action to set the text for.
     * @param text string - The new text for the action.
     */
    setCustomActionText(index: number, text: string): void;

    /**
     * @param key string - The accelerator to remove from actions in the app.
     */
    unsetAccel(key: string): void;

    /* Signals */

    /**
     * Emitted when a custom action is added to the action manager.
     * @param name string
     */
    customActionAdded: ISignal<string>;

    /**
     * Emitted when custom actions are added to or removed from the action manager.
     */
    customActionListChanged: ISignal<void>;

    /**
     * Emitted when a custom action is removed from the action manager.
     * @param name string
     */
    customActionRemoved: ISignal<string>;

    /* Undocumented Augment Members */

    /** @undocumented */
    modal: boolean;

    /** @undocumented */
    windowModality: number;

    /** @undocumented */
    geometry: QObject;

    /** @undocumented */
    frameGeometry: QObject;

    /** @undocumented */
    normalGeometry: QObject;

    /** @undocumented */
    pos: QObject;

    /** @undocumented */
    frameSize: QObject;

    /** @undocumented */
    size: QObject;

    /** @undocumented */
    rect: QObject;

    /** @undocumented */
    childrenRect: QObject;

    /** @undocumented */
    childrenRegion: QObject;

    /** @undocumented */
    minimumSize: QObject;

    /** @undocumented */
    maximumSize: QObject;

    /** @undocumented */
    minimumWidth: number;

    /** @undocumented */
    minimumHeight: number;

    /** @undocumented */
    maximumWidth: number;

    /** @undocumented */
    maximumHeight: number;

    /** @undocumented */
    sizeIncrement: QObject;

    /** @undocumented */
    baseSize: QObject;

    /** @undocumented */
    cursor: QObject;

    /** @undocumented */
    mouseTracking: boolean;

    /** @undocumented */
    isActiveWindow: boolean;

    /** @undocumented */
    focus: boolean;

    /** @undocumented */
    contextMenuPolicy: number;

    /** @undocumented */
    updatesEnabled: boolean;

    /** @undocumented */
    minimized: boolean;

    /** @undocumented */
    maximized: boolean;

    /** @undocumented */
    fullScreen: boolean;

    /** @undocumented */
    acceptDrops: boolean;

    /** @undocumented */
    windowTitle: string;

    /** @undocumented */
    windowIcon: QObject;

    /** @undocumented */
    windowIconText: string;

    /** @undocumented */
    windowOpacity: number;

    /** @undocumented */
    windowModified: boolean;

    /** @undocumented */
    accessibleName: string;

    /** @undocumented */
    accessibleDescription: string;

    /** @undocumented */
    layoutDirection: number;

    /** @undocumented */
    autoFillBackground: boolean;

    /** @undocumented */
    styleSheet: string;

    /** @undocumented */
    locale: QObject;

    /** @undocumented */
    windowFilePath: string;

    /** @undocumented */
    inputMethodHints: number;

    /** @undocumented */
    defaultUp: boolean;

    /** @undocumented */
    nativeMenuBar: boolean;

    /** @undocumented */
    customContextMenuRequested(): any; // TODO ;

    /** @undocumented */
    setEnabled(): any; // TODO ;

    /** @undocumented */
    setDisabled(): any; // TODO ;

    /** @undocumented */
    setWindowModified(): any; // TODO ;

    /** @undocumented */
    setWindowTitle(): any; // TODO ;

    /** @undocumented */
    setStyleSheet(): any; // TODO ;

    /** @undocumented */
    repaint(): any; // TODO ;

    /** @undocumented */
    setHidden(): any; // TODO ;

    /** @undocumented */
    show(): any; // TODO ;

    /** @undocumented */
    hide(): any; // TODO ;

    /** @undocumented */
    setShown(): any; // TODO ;

    /** @undocumented */
    showMinimized(): any; // TODO ;

    /** @undocumented */
    showMaximized(): any; // TODO ;

    /** @undocumented */
    showFullScreen(): any; // TODO ;

    /** @undocumented */
    showNormal(): any; // TODO ;

    /** @undocumented */
    close(): any; // TODO ;

    /** @undocumented */
    raise(): any; // TODO ;

    /** @undocumented */
    lower(): any; // TODO ;

    /** @undocumented */
    updateMicroFocus(): any; // TODO ;

    /** @undocumented */
    setCustomActionDesc(which: number, desc: String): void;

    /** @undocumented */
    getCustomActionDesc(which: number): String;

    /** @undocumented */
    legalizeName(): any; // TODO ;
}
