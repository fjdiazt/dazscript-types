declare class DzActionMgr extends QMenuBar {

    /* Properties */
    modal: boolean;
    windowModality: number;
    geometry: QObject;
    frameGeometry: QObject;
    normalGeometry: QObject;
    pos: QObject;
    frameSize: QObject;
    size: QObject;
    rect: QObject;
    childrenRect: QObject;
    childrenRegion: QObject;
    sizePolicy: QObject;
    minimumSize: QObject;
    maximumSize: QObject;
    minimumWidth: number;
    minimumHeight: number;
    maximumWidth: number;
    maximumHeight: number;
    sizeIncrement: QObject;
    baseSize: QObject;
    cursor: QObject;
    mouseTracking: boolean;
    isActiveWindow: boolean;
    focusPolicy: number;
    focus: boolean;
    contextMenuPolicy: number;
    updatesEnabled: boolean;
    visible: boolean;
    minimized: boolean;
    maximized: boolean;
    fullScreen: boolean;
    //sizeHint: QObject;
    //
    acceptDrops: boolean;
    windowTitle: string;
    windowIcon: QObject;
    windowIconText: string;
    windowOpacity: number;
    windowModified: boolean;
    accessibleName: string;
    accessibleDescription: string;
    layoutDirection: number;
    autoFillBackground: boolean;
    styleSheet: string;
    locale: QObject;
    windowFilePath: string;
    inputMethodHints: number;
    defaultUp: boolean;
    nativeMenuBar: boolean;

    /* Methods */
    customContextMenuRequested(): any; // TODO ;
    setEnabled(): any; // TODO ;
    setDisabled(): any; // TODO ;
    setWindowModified(): any; // TODO ;
    setWindowTitle(): any; // TODO ;
    setStyleSheet(): any; // TODO ;
    setFocus(): any; // TODO ;
    update(): any; // TODO ;
    repaint(): any; // TODO ;
    setHidden(): any; // TODO ;
    show(): any; // TODO ;
    hide(): any; // TODO ;
    setShown(): any; // TODO ;
    showMinimized(): any; // TODO ;
    showMaximized(): any; // TODO ;
    showFullScreen(): any; // TODO ;
    showNormal(): any; // TODO ;
    close(): any; // TODO ;
    raise(): any; // TODO ;
    lower(): any; // TODO ;
    updateMicroFocus(): any; // TODO ;
    customActionListChanged(): void;
    customActionAdded(name: String): void;
    customActionRemoved(name: String): void;
    setAccel(className: String, key: QKeySequence): void;
    setAccel(className: String, key: String): void;
    unsetAccel(key: QKeySequence): void;
    unsetAccel(key: String): void;
    addCustomAction(text: String, desc: String, script: String): String;
    addCustomAction(text: String, desc: String, script: String, isFile: boolean): String;
    addCustomAction(text: String, desc: String, script: String, isFile: boolean, shorcut: string): String;
    addCustomAction(text: String, desc: String, script: String, isFile: boolean, shorcut: string, iconFile: string): String;
    setCustomActionText(which: number, text: String): void;
    setCustomActionDesc(which: number, desc: String): void;
    setCustomActionScript(which: number, script: String, isFile: boolean): void;

    setCustomActionShortcut(which: number, shortcut: String): void;

    setCustomActionIcon(which: number, iconFile: String): void;
    setCustomActionShowTextWithIcon(which: number, onOff: boolean): void;
    removeCustomAction(which: number): void;
    removeAllCustomActions(): void;

    /**
     * he globally unique identifier (name) of the custom action to get.
     * @param guid The globally unique identifier (name) of the custom action to get.
     * @param number
     * @returns The index of the custom action with the given GUID; creates a custom action if one does not already exist.
     */
    getCustomAction(guid: string): number;

    getCustomActionByIndex(idx: number): DzAction;
    loadInterfaceFile(filename: String): boolean;
    loadInterfaceFile(filename: String, overrideDefaults: boolean): boolean;
    getNumActions(): number;
    getAction(which: number): DzAction;

    findAction(className: String): DzAction;
    findActionsForShortcut(shortcut: String): Array<DzAction>;

    getNumPersistentMenus(): number;
    getPersistentMenu(which: number): DzPersistentMenu;
    findPersistentMenu(className: String): DzPersistentMenu;
    getNumCustomActions(): number;
    findCustomAction(name: String): number;
    getCustomActionName(which: number): String;
    getCustomActionText(which: number): String;
    getCustomActionDesc(which: number): String;
    getCustomActionScript(which: number): String;
    // getCustomActionScript(which: number, script: String, isFile: boolean): void;
    getCustomActionFile(which: number): String;
    getCustomActionShortcut(which: number): String;
    getCustomActionIcon(which: number): String;
    saveInterfaceFiles(): boolean;
    saveMenusFile(filename: String): boolean;
    saveToolBarsFile(filename: String): boolean;
    saveActionsFile(filename: String): boolean;
    saveCustomActionsFile(filename: String): boolean;
    getMenu(): DzActionMenu;
    setActiveMenu(menu: DzActionMenu): void;
    getActiveMenu(): DzActionMenu;
    clearActiveMenu(): void;
    legalizeName(): any; // TODO ;
}