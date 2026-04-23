/**
 * The main interface widget.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/mainwindow_dz
 */
declare class DzMainWindow extends QWidget {

    /* Properties */

    /**
     * Whether or not the main window is always on top of other application windows.
     */
    alwaysOnTop: boolean; // Boolean

    /**
     * Whether or not tool tips are enabled.
     */
    toolTipsEnabled: boolean; // Boolean

    /* Methods */

    /**
     * Presents the user with a dialog that asks if they want to save changes to the scene, and does a scene save if the user selects yes.
     * @returns boolean true if the user selects 'Yes' or 'No', otherwise false.
     */
    askSaveChanges(): boolean; // Boolean

    /**
     * Presents the user with a dialog that asks if they want to turn off limits to apply the preset currently being loaded.
     * @returns boolean true if limits should be turned off, false if limits should be left alone.
     */
    askTurnOffLimits(): boolean; // Boolean

    /**
     * Checks to see if the given file already exists - if it does, prompts the user for whether or not they want to overwrite it.
     * @param filename string - The full path of the file to check.
     * @returns boolean true if the file does not exist or the user wants to overwrite it, false if the user needs to select a new name.
     */
    checkExistingFile(filename: string): boolean; // Boolean

    /**
     * Clears a the current UI popup if there is one.
     */
    clearUIPopUp(): void;

    /**
     * Display a message in the status bar.
     * @param msg string - Message to display.
     * @param msecs number - If greater than zero, the message will be displayed for the given amount of time, otherwise the message will be displayed until another message is sent.
     */
    displayPrompt(msg: string, msecs?: number): void;

    /**
     * @param pos Point
     * @returns DzDockArea The dock area located at the goven position.
     */
    dockArea(pos: Point): DzDockArea;

    /**
     * Displays a dialog for saving the scene to a non-native file, and saves the scene if the user does not cancel.
     * @param parent QWidget - The widget to parent the dialog to; see DzApp::getDialogParent().
     * @returns boolean true if a file was selected and successfully saved, otherwise false.
     */
    doFileExport(parent?: QWidget): boolean; // Boolean

    /**
     * Displays a dialog for loading a non-native file, and loads the file if the user does not cancel.
     * @param parent QWidget - The widget to parent the dialog to; see DzApp::getDialogParent().
     * @returns boolean true if a file was selected and successfully loaded, otherwise false.
     */
    doFileImport(parent?: QWidget): boolean; // Boolean

    /**
     * Displays a dialog for loading a native scene file, and merges the file into the current scene if the user does not cancel.
     * @param parent QWidget - The widget to parent the dialog to; see DzApp::getDialogParent().
     * @returns boolean true if a file was selected and successfully loaded, otherwise false.
     */
    doFileMerge(parent?: QWidget): boolean; // Boolean

    /**
     * Displays a dialog for loading a native scene file, and opens the file as a new scene if the user does not cancel.
     * @param parent QWidget - The widget to parent the dialog to; see DzApp::getDialogParent().
     * @returns boolean true if a file was selected and successfully loaded, otherwise false.
     */
    doFileOpen(parent?: QWidget): boolean; // Boolean

    /**
     * Saves the scene to the current scene file; displays a dialog to the user if a file needs to be selected.
     * @param parent QWidget - The widget to parent the dialog to; see DzApp::getDialogParent().
     * @returns boolean true if a file was selected and successfully saved, otherwise false.
     */
    doFileSave(parent?: QWidget): boolean; // Boolean

    /**
     * Displays a dialog for saving the scene to a native file, and saves the scene if the user does not cancel.
     * @param parent QWidget - The widget to parent the dialog to; see DzApp::getDialogParent().
     * @param startWith string - The directory to start the file dialog in (can include a default filename). If empty, the current load/save directory is used.
     * @returns boolean true if a file was selected and successfully saved, otherwise false.
     */
    doFileSaveAs(parent?: QWidget, startWith?: string): boolean; // Boolean

    /**
     * Displays a dialog for loading an image file, and loads the file if the user does not cancel.
     * @param parent QWidget - The widget to parent the dialog to; see DzApp::getDialogParent().
     * @returns DzImage An empty image if the user cancels or loading fails, otherwise the selected image.
     */
    doImageOpen(parent?: QWidget): DzImage;

    /**
     * Displays a dialog for saving the given image, and saves the image if the user does not cancel.
     * @param image DzImage - The image to save.
     * @param parent QWidget - The widget to parent the dialog to; see DzApp::getDialogParent().
     * @returns boolean true if a file was selected and successfully saved, otherwise false.
     */
    doImageSaveAs(image: DzImage, parent?: QWidget): boolean; // Boolean

    /**
     * Clears the scene.
     * @returns boolean
     */
    doNewFile(): boolean; // Boolean

    /**
     * Displays a dialog for saving the given video clip, and saves the clip if the user does not cancel.
     * @param clip DzVideoClip - The video clip to save.
     * @param parent QWidget - The widget to parent the dialog to; see DzApp::getDialogParent().
     * @returns boolean true if a file was selected and successfully saved, otherwise false.
     */
    doVideoClipSaveAs(clip: DzVideoClip, parent?: QWidget): boolean; // Boolean

    /**
     * Switches from full screen back to normal mode.
     */
    exitFullScreen(): void;

    /**
     * @returns DzActionMgr The global action manager for the application interface.
     */
    getActionMgr(): DzActionMgr;

    /**
     * @returns DzDockArea The dock area located at the bottom of the main window.
     */
    getBottomDockArea(): DzDockArea;

    /**
     * @returns DzDockArea The dock area located in the center of the main window.
     * @since 4.6.4.4
     */
    getCenterDockArea(): DzDockArea;

    /**
     * @returns DzInteractiveLessonMgr The global interactive lesson manager for the application interface.
     */
    getInteractiveLessonMgr(): DzInteractiveLessonMgr;

    /**
     * @returns DzDockArea The dock area located at the left of the main window.
     */
    getLeftDockArea(): DzDockArea;

    /**
     * @returns DzPaneMgr The global pane manager for the application interface.
     */
    getPaneMgr(): DzPaneMgr;

    /**
     * @returns DzDockArea The dock area located at the right of the main window.
     */
    getRightDockArea(): DzDockArea;

    /**
     * @returns number The sensitivity of the mouse move response in limitless sliders.
     * @since 4.11.0.159
     */
    getSliderMouseDragScalar(): number; // Number

    /**
     * @returns DzDockArea The dock area located at the top of the main window.
     */
    getTopDockArea(): DzDockArea;

    /**
     * @returns DzUIPopUpWgt The current user interface popup widget (if any), otherwise null.
     */
    getUIPopUp(): DzUIPopUpWgt;

    /**
     * @returns DzViewportMgr The global viewport manager for the application interface.
     */
    getViewportMgr(): DzViewportMgr;

    /**
     * Switches from normal to full screen mode
     */
    goFullScreen(): void;

    /**
     * @returns boolean true if the user interface is locked, otherwise false.
     */
    isUILocked(): boolean; // Boolean

    /**
     * Position the popup according to a widget.
     * @param posWgt QWidget - The widget to position the popup on.
     */
    positionUIPopUp(posWgt: QWidget): void;

    /**
     * Clear the message in the status bar.
     */
    removePrompt(): void;

    /**
     * A convenience method for forcing a repaint of the currently active 3D viewport (if any).
     */
    repaintActive3DViewport(): void;

    /**
     * Restores the locked state of the user interface to the value in the application settings.
     */
    restoreUILockState(): void;

    /**
     * Sets the sensitivity of the mouse move response in limitless sliders.
     * @param val number - The scalar value to set.
     * @since 4.11.0.159
     */
    setSliderMouseDragScalar(val: number): void;

    /**
     * Sets the locked state of the user interface.
     * @param onOff boolean - If true, the user interface is locked.
     * @param storeSetting boolean - If true (default), records the application setting.
     */
    setUILocked(onOff: boolean, storeSetting?: boolean): void;

    /**
     * Show the Home page dialog.
     */
    showHomeDlg(): void;

    /**
     * @param filename string - The script that loads a .ui file, or a .ui file directly, to show in the popup widget.
     * @param posWgt QWidget - The widget to position the popup on.
     * @returns DzUIPopUpWgt The popup widget.
     */
    showUIPopUpWgt(filename: string, posWgt?: QWidget): DzUIPopUpWgt;

    /**
     * If a popup already exists with the same filename, it is cleared (toggled). Otherwise it has the same effect as calling DzMainWindow::showUIPopUpWgt()
     * @param filename string - The script that loads a .ui file, or a .ui file directly, to show in the popup widget.
     * @param posWgt QWidget - The widget to position the popup on.
     * @returns DzUIPopUpWgt The popup widget (if it was toggled on), otherwise null.
     */
    toggleUIPopUpWgt(filename: string, posWgt?: QWidget): DzUIPopUpWgt;

    /* Signals */

    /**
     * Emitted just before the main window closes.
     */
    aboutToClose: ISignal<void>;

    /**
     * Emitted when the main window is switched to/from being always on top.
     * @param onOff boolean
     */
    alwaysOnTopChanged: ISignal<boolean>;

    /**
     * Emitted when the scalar for limitless slider mouse movement changes.
     * @param scalar number - The new scalar.
     * @since 4.11.0.159
     */
    sliderMouseDragScalarChanged: ISignal<number>;

    /**
     * Emitted after the startup() function has finished.
     */
    started: ISignal<void>;

    /**
     * Emitted when the main window is switched to/from having the ui locked.
     */
    uiLockedChanged: ISignal<void>;

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
    animated: boolean;

    /** @undocumented */
    dockNestingEnabled: boolean;

    /** @undocumented */
    AnimatedDocks: number;

    /** @undocumented */
    AllowNestedDocks: number;

    /** @undocumented */
    AllowTabbedDocks: number;

    /** @undocumented */
    ForceTabbedDocks: number;

    /** @undocumented */
    VerticalTabs: number;

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
    doDirectoryDialog(caption: QString, dir: QString): boolean;

    /** @undocumented */
    doDirectoryDialog(caption: QString, dir: QString): boolean;

    /** @undocumented */
    doFileDialog(open: boolean, title: QString, startWith: QString): boolean;

    /** @undocumented */
    doFileDialog(open: boolean, title: QString, startWith: QString): boolean;

    /** @undocumented */
    doFileDialog(open: boolean, title: QString, startWith: QString): boolean;

    /** @undocumented */
    doOpenFilesDialog(title: QString, startWith: QString): boolean;

    /** @undocumented */
    doOpenFilesDialog(title: QString, startWith: QString): boolean;

    /** @undocumented */
    doOpenFilesDialog(title: QString, startWith: QString): boolean;

    /** @undocumented */
    doFileDialog(open: boolean, title: QString, startWith: QString): boolean;

    /** @undocumented */
    doFileDialog(open: boolean, title: QString, startWith: QString): boolean;

    /** @undocumented */
    doFileDialog(open: boolean, title: QString, startWith: QString): boolean;

    /** @undocumented */
    doOpenFilesDialog(title: QString, startWith: QString): boolean;

    /** @undocumented */
    doOpenFilesDialog(title: QString, startWith: QString): boolean;

    /** @undocumented */
    doOpenFilesDialog(title: QString, startWith: QString): boolean;

    /** @undocumented */
    doImageDialog(open: boolean, filename: QString, parent: QWidget): boolean;

    /** @undocumented */
    doImageDialog(open: boolean, filename: QString, parent: QWidget): boolean;

    /** @undocumented */
    doImageDialog(open: boolean, filename: QString, parent: QWidget): boolean;

    /** @undocumented */
    doTextureFolderDialog(filename: QString, parent: QWidget): boolean;

    /** @undocumented */
    doTextureFolderDialog(filename: QString, parent: QWidget): boolean;

    /** @undocumented */
    doTextureFolderDialog(filename: QString, parent: QWidget): boolean;

    /** @undocumented */
    doVideoClipSaveDialog(filename: QString, parent: QWidget): boolean;

    /** @undocumented */
    doVideoClipSaveDialog(filename: QString, parent: QWidget): boolean;

    /** @undocumented */
    doVideoClipSaveDialog(filename: QString, parent: QWidget): boolean;

    /** @undocumented */
    doAudioClipOpenDialog(filename: QString, parent: QWidget): boolean;

    /** @undocumented */
    doAudioClipOpenDialog(filename: QString, parent: QWidget): boolean;

    /** @undocumented */
    doAudioClipOpenDialog(filename: QString, parent: QWidget): boolean;

    /** @undocumented */
    doDAZSave(parent: QWidget): boolean;

    /** @undocumented */
    doDAZSave(parent: QWidget): boolean;

    /** @undocumented */
    doDAZSaveAs(finalFileName: QString, parent: QWidget, startWith: QString): boolean;

    /** @undocumented */
    doDAZSaveAs(parent: QWidget, startWith: QString): boolean;

    /** @undocumented */
    doDAZSaveAs(finalFileName: QString, parent: QWidget, startWith: QString): boolean;

    /** @undocumented */
    doDAZSaveAs(parent: QWidget, startWith: QString): boolean;

    /** @undocumented */
    doDAZSaveAs(finalFileName: QString, parent: QWidget, startWith: QString): boolean;

    /** @undocumented */
    doDAZSaveAs(parent: QWidget, startWith: QString): boolean;

    /** @undocumented */
    doDAZSaveAs(finalFileName: QString, parent: QWidget, startWith: QString): boolean;

    /** @undocumented */
    doDAZSaveAs(parent: QWidget, startWith: QString): boolean;

    /** @undocumented */
    doDAZSaveAs(finalFileName: QString, parent: QWidget, startWith: QString): boolean;

    /** @undocumented */
    doDAZSaveAs(parent: QWidget, startWith: QString): boolean;

    /** @undocumented */
    doDAZSaveAs(finalFileName: QString, parent: QWidget, startWith: QString): boolean;

    /** @undocumented */
    doDAZSaveAs(parent: QWidget, startWith: QString): boolean;

    /** @undocumented */
    doGeometryImport(shape: DzShape, parent: QWidget): boolean;

    /** @undocumented */
    doGeometryImport(shape: DzShape, parent: QWidget): boolean;
}
