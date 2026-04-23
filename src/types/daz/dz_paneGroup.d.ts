/**
 * A stacked collection of interface panes that can be docked or float.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/panegroup_dz
 */
declare class DzPaneGroup extends DzDockWindow {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of TabBarPosition.
     */
    static TabsTop: number;

    /**
     * DAZ enum member of TabBarPosition.
     */
    static TabsBottom: number;

    /**
     * DAZ enum member of TabBarPosition.
     */
    static TabsLeft: number;

    /**
     * DAZ enum member of TabBarPosition.
     */
    static TabsRight: number;

    /* Methods */

    /**
     * Resizes this pane group, if it is undocked, to fit the available height and width of the screen it (mostly) currently resides on.
     * @since 4.15.1.81
     */
    fitScreen(): void;

    /**
     * Resizes this pane group, if it is undocked, to fit the available height of the screen it (mostly) currently resides on.
     * @since 4.15.1.81
     */
    fitScreenHeight(): void;

    /**
     * Resizes this pane group, if it is undocked, to fit the available width of the screen it (mostly) currently resides on.
     * @since 4.15.1.81
     */
    fitScreenWidth(): void;

    /**
     * @returns DzPane The currently showing pane.
     */
    getCurrentPane(): DzPane;

    /**
     * @returns Point The offset, in pixels, from the point where a drag started to the top left corner (including extra for frame, titlebar, etc.)
     */
    getDragOffset(): Point;

    /**
     * @returns number The number of panes in this group.
     */
    getNumPanes(): number; // Number

    /**
     * @returns number The number of panes shown in this group.
     */
    getNumShownPanes(): number; // Number

    /**
     * @param index number - The index of the pane to get.
     * @returns DzPane The pane in this group at the given index (if any), otherwise null.
     */
    getPane(index: number): DzPane;

    /**
     * Hides all panes without changing their group ownership.
     */
    hideAllPanes(): void;

    /**
     * Hides the given pane without changing its group ownership.
     * @param pane DzPane - The pane to be hidden.
     */
    hidePane(pane: DzPane): void;

    /**
     * Sets whether this pane group's tab bar is hidden.
     * @param yesNo boolean - If true, the tab bar for the group is hidden.
     */
    hideTabBar(yesNo: boolean): void;

    /**
     * Enables or disables the specified pane if it is a member of this group.
     * @param pane DzPane - The pane to be enabled or disabled.
     * @param enabled boolean - If true, the pane will be enabled. If false, the pane will be disabled.
     */
    setPaneEnabled(pane: DzPane, enabled: boolean): void;

    /**
     * Sets the position of the tab bar for this pane group, if this pane group is undocked.
     * @param pos number
     * @since 4.15.1.81
     */
    setUndockedTabBarPosition(pos: number): void;

    /**
     * Makes sure the given pane is showing (if it is a member of this group).
     * @param pane DzPane - The pane to be shown.
     */
    showPane(pane: DzPane): void;

    /**
     * @returns boolean true if this pane group's tab bar is hidden, otherwise false.
     */
    tabBarHidden(): boolean; // Boolean

    /**
     * @returns number The tab bar position for this pane group if this pane group is undocked.
     * @since 4.15.1.81
     */
    undockedTabBarPosition(): number; // TabBarPosition

    /**
     * Causes the position of the tab bar for this pane group to be updated.
     */
    updateTabPosition(): void;

    /**
     * Deprecated
     * @returns boolean
     */
    isUndockable(): boolean; // Boolean

    /* Signals */

    /**
     * Emitted when the pane group becomes empty.
     */
    emptyGroup: ISignal<void>;

    /* Undocumented Augment Members */

    /** @undocumented */
    NoFrame: number; // 0

    /** @undocumented */
    Box: number; // 1

    /** @undocumented */
    Panel: number; // 2

    /** @undocumented */
    WinPanel: number; // 3

    /** @undocumented */
    HLine: number; // 4

    /** @undocumented */
    VLine: number; // 5

    /** @undocumented */
    StyledPanel: number; // 6

    /** @undocumented */
    Plain: number; // 16

    /** @undocumented */
    Raised: number; // 32

    /** @undocumented */
    Sunken: number; // 48

    /** @undocumented */
    objectName: string; // PaneGroup22

    /** @undocumented */
    modal: boolean; // false

    /** @undocumented */
    windowModality: number; // 0

    /** @undocumented */
    enabled: boolean; // true

    /** @undocumented */
    geometry: object; // [object Object]

    /** @undocumented */
    frameGeometry: object; // [object Object]

    /** @undocumented */
    normalGeometry: object; // [object Object]

    /** @undocumented */
    x: number; // 0

    /** @undocumented */
    y: number; // 0

    /** @undocumented */
    pos: object; // [object Object]

    /** @undocumented */
    frameSize: object; // [object Object]

    /** @undocumented */
    size: object; // [object Object]

    /** @undocumented */
    width: number; // 474

    /** @undocumented */
    height: number; // 675

    /** @undocumented */
    rect: object; // [object Object]

    /** @undocumented */
    childrenRect: object; // [object Object]

    /** @undocumented */
    childrenRegion: object; // QVariant(QRegion)

    /** @undocumented */
    sizePolicy: object; // QVariant(QSizePolicy)

    /** @undocumented */
    minimumSize: object; // [object Object]

    /** @undocumented */
    maximumSize: object; // [object Object]

    /** @undocumented */
    minimumWidth: number; // 286

    /** @undocumented */
    minimumHeight: number; // 176

    /** @undocumented */
    maximumWidth: number; // 16777215

    /** @undocumented */
    maximumHeight: number; // 16777215

    /** @undocumented */
    sizeIncrement: object; // [object Object]

    /** @undocumented */
    baseSize: object; // [object Object]

    /** @undocumented */
    palette: object; // [object Object]

    /** @undocumented */
    font: object; // [object Object]

    /** @undocumented */
    cursor: object; // QVariant(QCursor)

    /** @undocumented */
    mouseTracking: boolean; // false

    /** @undocumented */
    isActiveWindow: boolean; // true

    /** @undocumented */
    focusPolicy: number; // 0

    /** @undocumented */
    focus: boolean; // false

    /** @undocumented */
    contextMenuPolicy: number; // 1

    /** @undocumented */
    updatesEnabled: boolean; // true

    /** @undocumented */
    visible: boolean; // true

    /** @undocumented */
    maximized: boolean; // false

    /** @undocumented */
    fullScreen: boolean; // false

    /** @undocumented */
    sizeHint: object; // [object Object]

    /** @undocumented */
    minimumSizeHint: object; // [object Object]

    /** @undocumented */
    acceptDrops: boolean; // true

    /** @undocumented */
    windowTitle: string; //

    /** @undocumented */
    windowIcon: object; // QVariant(QIcon)

    /** @undocumented */
    windowIconText: string; //

    /** @undocumented */
    windowOpacity: number; // 1

    /** @undocumented */
    windowModified: boolean; // false

    /** @undocumented */
    toolTip: string; //

    /** @undocumented */
    statusTip: string; //

    /** @undocumented */
    whatsThis: string; //

    /** @undocumented */
    accessibleName: string; //

    /** @undocumented */
    accessibleDescription: string; //

    /** @undocumented */
    layoutDirection: number; // 0

    /** @undocumented */
    autoFillBackground: boolean; // false

    /** @undocumented */
    styleSheet: string; //

    /** @undocumented */
    locale: object; // QVariant(QLocale)

    /** @undocumented */
    windowFilePath: string; //

    /** @undocumented */
    inputMethodHints: number; // 0

    /** @undocumented */
    frameShape: number; // 0

    /** @undocumented */
    frameShadow: number; // 0

    /** @undocumented */
    lineWidth: number; // 0

    /** @undocumented */
    midLineWidth: number; // 0

    /** @undocumented */
    frameWidth: number; // 0

    /** @undocumented */
    frameRect: object; // [object Object]

    /** @undocumented */
    name: string; // PaneGroup22

    /** @undocumented */
    ahHasFocus(): any;

    /** @undocumented */
    ahHidePane(): any;

    /** @undocumented */
    anyoneHasFocus(): any;

    /** @undocumented */
    className: any;

    /** @undocumented */
    close(): any;

    /** @undocumented */
    deleteLater(): any;

    /** @undocumented */
    destroyed(): any;

    /** @undocumented */
    destroyed(p0: QObject): any;

    /** @undocumented */
    getAHBar(): any;

    /** @undocumented */
    getTimer(): any;

    /** @undocumented */
    hide(): any;

    /** @undocumented */
    inherits: any;

    /** @undocumented */
    isAutoHideOn(): any;

    /** @undocumented */
    isResizing(): any;

    /** @undocumented */
    lower(): any;

    /** @undocumented */
    raise(): any;

    /** @undocumented */
    repanumber(): any;

    /** @undocumented */
    setAutoHide(p0: boolean): any;

    /** @undocumented */
    setDisabled(p0: boolean): any;

    /** @undocumented */
    setEnabled(p0: boolean): any;

    /** @undocumented */
    setFocus(): any;

    /** @undocumented */
    setHidden(p0: boolean): any;

    /** @undocumented */
    setShown(p0: boolean): any;

    /** @undocumented */
    setStyleSheet(p0: string): any;

    /** @undocumented */
    setVisible(p0: boolean): any;

    /** @undocumented */
    setWindowModified(p0: boolean): any;

    /** @undocumented */
    setWindowTitle(p0: string): any;

    /** @undocumented */
    show(): any;

    /** @undocumented */
    showFullScreen(): any;

    /** @undocumented */
    showMaximized(): any;

    /** @undocumented */
    showMinimized(): any;

    /** @undocumented */
    showNormal(): any;

    /** @undocumented */
    unpinnedAboutToHide(): any;

    /** @undocumented */
    update(): any;

    /** @undocumented */
    updateMicroFocus(): any;
}
