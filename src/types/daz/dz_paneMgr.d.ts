/**
 * Manager responsible for layouts, activity layouts, pane groups, panes, and toolbars.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/panemgr_dz
 */
declare class DzPaneMgr extends QWidget {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of DockSide.
     */
    static NO_DOCKING: number;

    /**
     * DAZ enum member of DockSide.
     */
    static DOCK_LEFT: number;

    /**
     * DAZ enum member of DockSide.
     */
    static DOCK_TOP: number;

    /**
     * DAZ enum member of DockSide.
     */
    static DOCK_RIGHT: number;

    /**
     * DAZ enum member of DockSide.
     */
    static DOCK_BOTTOM: number;

    /* Methods */

    /**
     * Adds the activity layout to the list of layouts.
     * @param layout DzActivityLayout - The layout to be added.
     */
    addActivityLayout(layout: DzActivityLayout): void;

    /**
     * Removes all panes from all groups.
     */
    clearAllGroups(): void;

    /**
     * Creates a new activity layout and adds it to the list.
     * @param name string - The name of the activity layout.
     * @param description string - The description of the activity layout.
     * @returns DzActivityLayout The created activity layout.
     */
    createActivityLayout(name: string, description: string): DzActivityLayout;

    /**
     * @returns DzPaneGroup A new pane group without any panes.
     */
    createEmptyPaneGroup(): DzPaneGroup;

    /**
     * @param name string - The name of the toolbar to create.
     * @returns DzToolBar The tool bar with the given name (if any), otherwise creates a tool bar with the given name.
     */
    createToolBar(name: string): DzToolBar;

    /**
     * Sets whether or not the activity bar is visible in the interface.
     * @param onOff boolean - If true, enables the activity bar.
     */
    enableActivityBar(onOff: boolean): void;

    /**
     * @param name string - The name of the layout to find.
     * @returns DzActivityLayout The activity layout with the given name (if any), otherwise NULL.
     */
    findActivityLayout(name: string): DzActivityLayout;

    /**
     * @param className string - The class name of the dock bar to find.
     * @returns DzDockBar The dock bar with the given name, otherwise NULL.
     */
    findDockBar(className: string): DzDockBar;

    /**
     * @param name string - The name of the dock bar to find.
     * @returns DzDockBar The dock bar with the given name (if any), otherwise NULL.
     */
    findDockBarByName(name: string): DzDockBar;

    /**
     * @param identifier string - The classname of the pane to find.
     * @returns DzPane The pane with the classname specified (if any), otherwise NULL.
     */
    findPane(identifier: string): DzPane;

    /**
     * @param name string - The name of the tool bar to find.
     * @returns DzToolBar The tool bar with the given name (if any), otherwise NULL.
     */
    findToolBar(name: string): DzToolBar;

    /**
     * @returns DzActivityLayout The active activity layout.
     */
    getActiveActivityLayout(): DzActivityLayout;

    /**
     * @returns number The index of the active activity layout.
     */
    getActiveActivityLayoutIndex(): number; // Number

    /**
     * @returns string The name of the current activity bar image.
     */
    getActivityBarImage(): string; // String

    /**
     * @returns any[] A list of possible activity bar images.
     */
    getActivityBarImageList(): any[]; // Array

    /**
     * @param i number - The index of the desired activity layout.
     * @returns DzActivityLayout The activity layout at the given index (if valid), otherwise NULL.
     */
    getActivityLayout(i: number): DzActivityLayout;

    /**
     * @returns any[] A list of all DzActivityLayout objects.
     * @since 4.11.0.220
     */
    getActivityLayoutList(): any[]; // Array

    /**
     * @returns string The path to the file that is the advanced layout for the application.
     */
    getAdvancedLayout(): string; // String

    /**
     * @returns string The path to the file that is the basic layout for the application.
     */
    getBasicLayout(): string; // String

    /**
     * @returns string The path to the file that is the default layout for the application.
     */
    getDefaultLayout(): string; // String

    /**
     * @returns any[] A list of default layout names included with the application.
     */
    getDefaultLayoutNames(): any[]; // Array

    /**
     * @param i number - The index of the dock bar to return.
     * @returns DzDockBar The i'th dock bar in the application (if valid), otherwise NULL.
     */
    getDockBar(i: number): DzDockBar;

    /**
     * @returns any[] A list of all DzDockBar objects.
     * @since 4.11.0.220
     */
    getDockBarList(): any[]; // Array

    /**
     * @returns number The number of activity layouts currently available.
     */
    getNumActivityLayouts(): number; // Number

    /**
     * @returns number The number of dock bars in the application.
     */
    getNumDockBars(): number; // Number

    /**
     * @returns number The number of pane groups currently available in the interface; includes pane groups that are not currently showing.
     */
    getNumPaneGroups(): number; // Number

    /**
     * @returns number The number of panes currently available in the interface; this includes panes that are not currently showing.
     */
    getNumPanes(): number; // Number

    /**
     * @returns number The number of tool bars in the application.
     */
    getNumToolBars(): number; // Number

    /**
     * @returns boolean true if the tabs for selecting a pane are oriented along the top of pane groups, otherwise false.
     */
    getOrientTabsAlongTop(): boolean; // Boolean

    /**
     * @param i number - The index of the pane to get.
     * @returns DzPane The pane at the specified index (if valid), otherwise NULL.
     * @since 4.11.0.220
     */
    getPane(i: number): DzPane;

    /**
     * @param i number - The index of the desired pane group.
     * @returns DzPaneGroup The pane group at the given index (if valid), otherwise NULL.
     */
    getPaneGroup(i: number): DzPaneGroup;

    /**
     * @returns any[] A list of all DzPaneGroup objects.
     */
    getPaneGroupList(): any[]; // Array

    /**
     * @returns any[] A list of all DzPane objects.
     */
    getPaneList(): any[]; // Array

    /**
     * @returns string The path to the file that is the pro layout for the application.
     * @since 4.7.0.3
     */
    getProLayout(): string; // String

    /**
     * @returns string The path to the file that is the layout for this session of the application.
     */
    getSessionLayout(): string; // String

    /**
     * @returns boolean true if the Lesson Strip is showing, otherwise false.
     */
    getShowLessonStrip(): boolean; // Boolean

    /**
     * @returns string The path to the file that is the simple layout for the application.
     */
    getSimpleLayout(): string; // String

    /**
     * @returns string The path to the file that is the standard layout for the application.
     */
    getStandardLayout(): string; // String

    /**
     * @param i number - The index of the tool bar to return.
     * @returns DzToolBar The i'th tool bar in the application (if valid), otherwise NULL.
     */
    getToolBar(i: number): DzToolBar;

    /**
     * @returns any[] A list of all DzToolBar objects.
     * @since 4.11.0.220
     */
    getToolBarList(): any[]; // Array

    /**
     * @returns boolean true if workflow assistance is enabled, otherwise false.
     */
    getUseWorkflowAssistance(): boolean; // Boolean

    /**
     * Hide all panes from view in the interface.
     */
    hideAllPanes(): void;

    /**
     * Hides all the tool bars in the application.
     */
    hideAllToolBars(): void;

    /**
     * Hide the given pane from view in the interface.
     * @param identifier string - The classname of the pane to hide.
     * @returns DzError
     */
    hidePane(identifier: string): DzError;

    /**
     * Hide the given pane from view in the interface.
     * @param pane DzPane
     * @returns DzError
     */
    hidePane(pane: DzPane): DzError;

    /**
     * Hide a pane group in the interface.
     * @param group DzPaneGroup - The pane group to hide.
     * @returns DzError DZ_NO_ERROR if no error is encountered, otherwise an error code indicating the status of hiding the pane group.
     */
    hidePaneGroup(group: DzPaneGroup): DzError;

    /**
     * Hide a pane group in the interface.
     * @param i number - The index of the pane group to hide.
     * @returns DzError DZ_NO_ERROR if no error is encountered, otherwise an error code indicating the status of hiding the pane group.
     */
    hidePaneGroup(i: number): DzError;

    /**
     * @returns boolean true if the activity bar appears in the interface, otherwise false.
     */
    isActivityBarEnabled(): boolean; // Boolean

    /**
     * Loads the next image from the directory and sets it for the activity bar.
     */
    loadNextActivityBarImage(): void;

    /**
     * Moves a group to a new dock location.
     * @param group DzPaneGroup - The group to move.
     * @param dock number - The dock location to move the group to.
     * @returns DzError DZ_NO_ERROR if no error is encountered, otherwise an error code indicating the status of moving the pane group.
     */
    movePaneGroup(group: DzPaneGroup, dock?: number): DzError;

    /**
     * Moves a group to a new dock location.
     * @param group DzPaneGroup
     * @param dock number
     * @param index number
     * @param newLine boolean
     * @returns DzError
     */
    movePaneGroup(group: DzPaneGroup, dock: number, index: number, newLine?: boolean): DzError;

    /**
     * Removes the given layout.
     * @param name string - The name of the activity layout to be removed.
     * @returns boolean true if the layout existed and was removed, otherwise false.
     */
    removeActivityLayout(name: string): boolean; // Boolean

    /**
     * Removes the given layout.
     * @param i number - The index of the layout to remove.
     * @returns boolean true if the layout existed and was removed, otherwise false.
     */
    removeActivityLayout(i: number): boolean; // Boolean

    /**
     * Removes all the current layouts.
     */
    removeAllActivityLayouts(): void;

    /**
     * Removes all tool bars from the application.
     */
    removeAllToolBars(): void;

    /**
     * Removes the given pane group.
     * @param group DzPaneGroup - The group to be removed.
     */
    removePaneGroup(group: DzPaneGroup): void;

    /**
     * Removes a tool bar from the application.
     * @param name string - The name of the tool bar to remove.
     */
    removeToolBar(name: string): void;

    /**
     * Restores the activity layout from the given file.
     * @param filename string - The absolute path of the layout file to be read.
     * @param executeScript boolean - Whether or not the companion layout script should be executed.
     * @returns DzError DZ_NO_ERROR if the layout is restored successfully, otherwise an appropriate error code.
     */
    restoreLayout(filename: string, executeScript: boolean): DzError;

    /**
     * Saves the current activity layout to the given file.
     * @param filename string - The absolute path of the layout file to save.
     * @param description string - The description for this layout.
     * @returns DzError DZ_NO_ERROR if the operation was successful, otherwise DZ_OPERATION_FAILED_ERROR.
     */
    saveLayout(filename: string, description?: string): DzError;

    /**
     * Selects the lesson at the given path.
     * @param path string
     * @returns boolean true if the lesson is found and selected, otherwise false.
     */
    selectLesson(path: string): boolean; // Boolean

    /**
     * Sets the active layout.
     * @param layout DzActivityLayout - The layout to make active.
     */
    setActiveActivityLayout(layout: DzActivityLayout): void;

    /**
     * Sets the active activity layout.
     * @param i number - The index of the activity to make active.
     */
    setActiveActivityLayout(i: number): void;

    /**
     * Sets the image for the activity bar.
     * @param img string - The name of the image to use in the activity bar; this should be one of the strings returned by getActivityImageList().
     */
    setActivityBarImage(img: string): void;

    /**
     * Sets whether or not the position of tabs for selecting a pane are oriented along the top of the pane groups.
     * @param onOff boolean - If true, the tabs will be displayed along the top of pane groups. If false, the tabs will be displayed along the sides of pane groups.
     */
    setOrientTabsAlongTop(onOff: boolean): void;

    /**
     * Enables or disables a given pane in the interface.
     * @param identifier string - The classname of the pane to enable or disable.
     * @param enabled boolean - If true, the pane will be enabled.
     * @returns DzError DZ_NO_ERROR if no error is encountered, otherwise an error code indicating the status of enabling or disabling the pane.
     */
    setPaneEnabled(identifier: string, enabled: boolean): DzError;

    /**
     * Enables or disables a given pane in the interface.
     * @param pane DzPane - The pane to be enabled or disabled.
     * @param enabled boolean - If true, the pane will be enabled.
     * @returns DzError DZ_NO_ERROR if no error is encountered, otherwise an error code indicating the status of enabling or disabling the pane.
     */
    setPaneEnabled(pane: DzPane, enabled: boolean): DzError;

    /**
     * Sets the file that will be loaded and saved as the user's layout for the session.
     * @param filename string - The name of the file to be saved.
     * @returns DzError
     */
    setSessionLayout(filename: string): DzError;

    /**
     * Sets the visibility of the Lesson Strip.
     * @param onOff boolean - If true, the lesson strip is shown.
     */
    setShowLessonStrip(onOff: boolean): void;

    /**
     * Sets whether or not workflow assistance will be enabled.
     * @param onOff boolean - If true, workflow assistance will be enabled.
     */
    setUseWorkflowAssistance(onOff: boolean): void;

    /**
     * Make all panes visible in the interface.
     */
    showAllPanes(): void;

    /**
     * Make the given pane visible in the interface.
     * @param pane DzPane - The pane to be shown.
     * @returns DzError
     */
    showPane(pane: DzPane): DzError;

    /**
     * Make the given pane visible in the interface.
     * @param identifier string - The classname of the pane to show.
     * @returns DzError
     */
    showPane(identifier: string): DzError;

    /**
     * Show a pane group in the interface.
     * @param group DzPaneGroup - The pane group to show.
     * @returns DzError DZ_NO_ERROR if no error is encountered, otherwise an error code indicating the status of showing the pane group.
     */
    showPaneGroup(group: DzPaneGroup): DzError;

    /**
     * Show a pane group in the interface.
     * @param i number - The index of the pane group to show.
     * @returns DzError DZ_NO_ERROR if no error is encountered, otherwise an error code indicating the status of showing the pane group.
     */
    showPaneGroup(i: number): DzError;

    /**
     * Put the pane in its own pane group, if it's not already, and moves the pane group out of any dock area.
     * @param index number - The index of the pane to tear off.
     * @param x number - The x position to move to.
     * @param y number - The y position to move to.
     * @returns DzError DZ_NO_ERROR if no error is encountered, otherwise an error code indicating the status of tearing off the pane.
     */
    tearOffPane(index: number, x?: number, y?: number): DzError;

    /**
     * Put the pane in its own pane group, if it's not already, and moves the pane group out of any dock area.
     * @param identifier string - The classname of the pane to tear off.
     * @param x number - The x position to move to.
     * @param y number - The y position to move to.
     * @returns DzError DZ_NO_ERROR if no error is encountered, otherwise an error code indicating the status of tearing off the pane.
     */
    tearOffPane(identifier: string, x?: number, y?: number): DzError;

    /**
     * Put the pane in its own pane group, if it's not already, and moves the pane group out of any dock area.
     * @param pane DzPane - The pane to tear off.
     * @param x number - The x position to move to.
     * @param y number - The y position to move to.
     * @returns DzError DZ_NO_ERROR if no error is encountered, otherwise an error code indicating the status of tearing off the pane.
     */
    tearOffPane(pane: DzPane, x?: number, y?: number): DzError;

    /**
     * Toggle the given pane's visibility in the interface.
     * @param pane DzPane - The pane whose visibility needs to be toggled.
     * @returns DzError
     */
    togglePane(pane: DzPane): DzError;

    /**
     * Toggle the given pane's visibility in the interface.
     * @param identifier string - The classname of the pane to toggle.
     * @returns DzError
     */
    togglePane(identifier: string): DzError;

    /**
     * Toggle the given pane's visibility in the interface.
     * @param index number - The index of the pane to be toggled.
     * @returns DzError
     */
    togglePane(index: number): DzError;

    /**
     * Deprecated
     * @returns number
     */
    getNumPaneGroupDlgs(): number; // Number

    /**
     * Deprecated
     * @param i number
     * @returns DzPaneGroupDlg
     */
    getPaneGroupDlg(i: number): DzPaneGroupDlg;

    /**
     * Deprecated
     * @param dlg DzPaneGroupDlg
     */
    addPaneGroupDlg(dlg: DzPaneGroupDlg): void;

    /**
     * Deprecated
     * @param dlg DzPaneGroupDlg
     */
    removePaneGroupDlg(dlg: DzPaneGroupDlg): void;

    /**
     * Deprecated
     */
    closeAllPaneGroupDlgs(): void;

    /* Signals */

    /**
     * Emitted when the active layout is about to change.
     * @param newLayoutIdx number - The index of the new layout.
     */
    activeLayoutAboutToChange: ISignal<number>;

    /**
     * Emitted when the active layout has changed.
     * @param i number - The index of the new active layout.
     */
    activeLayoutChanged: ISignal<number>;

    /**
     * Emitted when the activity bar is enabled/disabled.
     * @param onOff boolean - The enabled state of the activity bar.
     */
    activityBarEnabled: ISignal<boolean>;

    /**
     * Emitted when the list of available layouts has changed.
     */
    layoutListChanged: ISignal<void>;

    /**
     * Emitted when the layout is restored from a file.
     * @param filename string - The name of the file restored.
     */
    layoutRestored: ISignal<string>;

    /**
     * Emitted when the option controlling whether or not tabs are oriented along the top of a pane group has changed.
     * @param onOff boolean - The new state of the option.
     */
    orientTabsAlongTopChanged: ISignal<boolean>;

    /**
     * Emitted when the list of available toolbars has changed.
     */
    toolbarListChanged: ISignal<void>;

    /**
     * Emitted when the state of whether or not the workflow assistant is enabled has changed.
     * @param onOff boolean - The new state of the option.
     */
    workflowAssistanceEnableStateChanged: ISignal<boolean>;

    /**
     * Emitted when the mode of the workflow assistant has changed.
     */
    workflowAssistanceModeChanged: ISignal<void>;

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
    sizeHint: QObject;

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
    DOCK_CENTER: number;

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
    setVisible(): any; // TODO ;

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
    isUnpinnedMenu(pane: DzPane): boolean;
}
