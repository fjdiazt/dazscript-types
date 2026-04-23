/**
 * A container widget for a three dimensional viewport and any associated decoration.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/viewport_dz
 */
declare class DzViewport extends QWidget {

    /* Methods */

    /**
     * @returns Dz3DViewport The embedded 3D viewport that this viewport encapsulates.
     */
    get3DViewport(): Dz3DViewport;

    /**
     * @returns DzViewportMgr The manager of this viewport.
     */
    getManager(): DzViewportMgr;

    /**
     * @returns DzView The alternate view currently being displayed in the viewport; NULL if an alternate view is not displayed (i.e., the 3D viewport is active).
     */
    getView(): DzView;

    /**
     * @returns boolean true if this viewport is custom; otherwise false.
     * @since 4.7.1.104
     */
    isCustom(): boolean; // Boolean

    /**
     * Sets the alternate view for the viewport; this replaces the 3D viewport while active. Pass in NULL to clear the alternate view and restore the 3D viewport.
     * @param view DzView - The view to display in the viewport.
     */
    setView(view: DzView): void;

    /**
     * Sets the visible state of the alternate view for this viewport, if an alternate view has been set.
     * @param onOff boolean - If true, the alternate view (if any) is displayed.
     */
    setViewVisible(onOff: boolean): void;

    /* Signals */

    /**
     * Emitted when the dimensions of the viewport has changed.
     */
    dimensionsChanged: ISignal<void>;

    /**
     * Emitted when the dimensions of the encapsulated 3D viewport has changed.
     */
    view3dCurrentDimensionsChanged: ISignal<void>;

    /**
     * Emitted when the view has changed (e.g., when switched between the 3D viewport and an alternate view).
     * @param view DzView - The view that was changed to.
     */
    viewChanged: ISignal<DzView>;

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
    NoFrame: number;

    /** @undocumented */
    Box: number;

    /** @undocumented */
    Panel: number;

    /** @undocumented */
    WinPanel: number;

    /** @undocumented */
    HLine: number;

    /** @undocumented */
    VLine: number;

    /** @undocumented */
    StyledPanel: number;

    /** @undocumented */
    Plain: number;

    /** @undocumented */
    Raised: number;

    /** @undocumented */
    Sunken: number;

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
    interactiveLessonQuery(): any; // TODO ;
}
