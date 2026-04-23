/**
 * Manager responsible for viewports and tools that operate within them.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/viewportmgr_dz
 */
declare class DzViewportMgr extends QWidget {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of Layout.
     */
    static NO_PANES: number;

    /**
     * DAZ enum member of Layout.
     */
    static SINGLE_PANE: number;

    /**
     * DAZ enum member of Layout.
     */
    static LEFT_RIGHT: number;

    /**
     * DAZ enum member of Layout.
     */
    static TOP_BOTTOM: number;

    /**
     * DAZ enum member of Layout.
     */
    static LEFT2_RIGHT: number;

    /**
     * DAZ enum member of Layout.
     */
    static LEFT3_RIGHT: number;

    /**
     * DAZ enum member of Layout.
     */
    static LEFT_RIGHT2: number;

    /**
     * DAZ enum member of Layout.
     */
    static LEFT_RIGHT3: number;

    /**
     * DAZ enum member of Layout.
     */
    static TOP2_BOTTOM: number;

    /**
     * DAZ enum member of Layout.
     */
    static TOP3_BOTTOM: number;

    /**
     * DAZ enum member of Layout.
     */
    static TOP_BOTTOM2: number;

    /**
     * DAZ enum member of Layout.
     */
    static TOP_BOTTOM3: number;

    /**
     * DAZ enum member of Layout.
     */
    static FOUR_PANE: number;

    /**
     * DAZ enum member of Layout.
     */
    static NUM_LAYOUTS: number;

    /**
     * DAZ enum member of NodeClickMode.
     */
    static Node: number;

    /**
     * DAZ enum member of NodeClickMode.
     */
    static SkeletonThenNode: number;

    /**
     * DAZ enum member of NodeClickMode.
     */
    static Skeleton: number;

    /**
     * DAZ enum member of QDMode.
     */
    static QDOff: number;

    /**
     * DAZ enum member of QDMode.
     */
    static QDWire: number;

    /**
     * DAZ enum member of QDMode.
     */
    static QDSmooth: number;

    /**
     * DAZ enum member of RegionClickMode.
     */
    static Nested: number;

    /**
     * DAZ enum member of RegionClickMode.
     */
    static Flat: number;

    /**
     * DAZ enum member of ViewMouseBtnAccelerator.
     */
    static NoAccel: number;

    /**
     * DAZ enum member of ViewMouseBtnAccelerator.
     */
    static LeftClick: number;

    /**
     * DAZ enum member of ViewMouseBtnAccelerator.
     */
    static RightClick: number;

    /**
     * DAZ enum member of ViewMouseBtnAccelerator.
     */
    static MidClick: number;

    /**
     * DAZ enum member of ViewMouseBtnAccelerator.
     */
    static AltLeftClick: number;

    /**
     * DAZ enum member of ViewMouseBtnAccelerator.
     */
    static AltRightClick: number;

    /**
     * DAZ enum member of ViewMouseBtnAccelerator.
     */
    static AltMidClick: number;

    /**
     * DAZ enum member of ViewMouseBtnAccelerator.
     */
    static CtrlLeftClick: number;

    /**
     * DAZ enum member of ViewMouseBtnAccelerator.
     */
    static CtrlRightClick: number;

    /**
     * DAZ enum member of ViewMouseBtnAccelerator.
     */
    static CtrlMidClick: number;

    /**
     * DAZ enum member of ViewMouseBtnAccelerator.
     */
    static ShiftLeftClick: number;

    /**
     * DAZ enum member of ViewMouseBtnAccelerator.
     */
    static ShiftRightClick: number;

    /**
     * DAZ enum member of ViewMouseBtnAccelerator.
     */
    static ShiftMidClick: number;

    /**
     * DAZ enum member of ViewMouseBtnAccelerator.
     */
    static CtrlAltLeftClick: number;

    /**
     * DAZ enum member of ViewMouseBtnAccelerator.
     */
    static CtrlAltRightClick: number;

    /**
     * DAZ enum member of ViewMouseBtnAccelerator.
     */
    static CtrlAltMidClick: number;

    /**
     * DAZ enum member of ViewMouseBtnAccelerator.
     */
    static CtrlShiftLeftClick: number;

    /**
     * DAZ enum member of ViewMouseBtnAccelerator.
     */
    static CtrlShiftRightClick: number;

    /**
     * DAZ enum member of ViewMouseBtnAccelerator.
     */
    static CtrlShiftMidClick: number;

    /**
     * DAZ enum member of ViewMouseBtnAccelerator.
     */
    static AltShiftLeftClick: number;

    /**
     * DAZ enum member of ViewMouseBtnAccelerator.
     */
    static AltShiftRightClick: number;

    /**
     * DAZ enum member of ViewMouseBtnAccelerator.
     */
    static AltShiftMidClick: number;

    /**
     * DAZ enum member of ViewMouseBtnAccelerator.
     */
    static CtrlAltShiftLeftClick: number;

    /**
     * DAZ enum member of ViewMouseBtnAccelerator.
     */
    static CtrlAltShiftRightClick: number;

    /**
     * DAZ enum member of ViewMouseBtnAccelerator.
     */
    static CtrlAltShiftMidClick: number;

    /**
     * DAZ enum member of ViewMouseModifier.
     */
    static NoModifier: number;

    /**
     * DAZ enum member of ViewMouseModifier.
     */
    static Alt: number;

    /**
     * DAZ enum member of ViewMouseModifier.
     */
    static Shift: number;

    /**
     * DAZ enum member of ViewMouseModifier.
     */
    static Ctrl: number;

    /**
     * DAZ enum member of ViewMouseModifier.
     */
    static CtrlAlt: number;

    /**
     * DAZ enum member of ViewMouseModifier.
     */
    static CtrlShift: number;

    /**
     * DAZ enum member of ViewMouseModifier.
     */
    static CtrlAltShift: number;

    /**
     * DAZ enum member of ViewMouseModifier.
     */
    static ShiftAlt: number;

    /**
     * DAZ enum member of ViewOperation.
     */
    static NoOperation: number;

    /**
     * DAZ enum member of ViewOperation.
     */
    static OrbitCamera: number;

    /**
     * DAZ enum member of ViewOperation.
     */
    static RotateCamera: number;

    /**
     * DAZ enum member of ViewOperation.
     */
    static PanCamera: number;

    /**
     * DAZ enum member of ViewOperation.
     */
    static DollyCamera: number;

    /**
     * DAZ enum member of ViewOperation.
     */
    static BankCamera: number;

    /**
     * DAZ enum member of ViewOperation.
     */
    static ZoomDCamera: number;

    /**
     * DAZ enum member of ViewOperation.
     */
    static ZoomFCamera: number;

    /* Static Methods */

    /**
     * @returns number The number of user selectable DrawStyles.
     */
    static getNumUserDrawStyles(): number; // Number

    /**
     * @returns number The number of available views.
     */
    static getNumViews(): number; // Number

    /**
     * @param i number - The index of the DrawStyle to get.
     * @returns DzUserDrawStyle A new instance of the DrawStyle at the given index (if valid), otherwise null.
     */
    static getUserDrawStyle(i: number): DzUserDrawStyle;

    /**
     * @param i number - The index of the view to get.
     * @returns DzView A new instance of the view at the given index (if valid), otherwise null.
     */
    static getView(i: number): DzView;

    /**
     * @param i number - The index of the view to get the description of.
     * @returns string The description for the view at the given index (if valid), otherwise an empty string.
     */
    static getViewDescription(i: number): string; // String

    /* Methods */

    /**
     * Sets the next tool in the list after the currently active tool to be the currently active tool.
     */
    activateNextTool(): void;

    /**
     * Sets the tool in the list before the currently active tool to be the currently active tool.
     */
    activatePrevTool(): void;

    /**
     * Causes the color of each viewport to be set to their respective values, if the color is defined in the current style.
     */
    applyStyleColors(): void;

    /**
     * Clears any view tool that was temporarily overriding the active view tool.
     * @since 4.8.0.10
     */
    clearOverrideTool(): void;

    /**
     * @param className string - The classname of the tool to find.
     * @returns DzViewTool The tool with the given class name (if any), otherwise null.
     */
    findTool(className: string): DzViewTool;

    /**
     * @param description string - The description of the DrawStyle to find.
     * @returns DzUserDrawStyle A new instance of the DrawStyle found (if any), otherwise null.
     */
    findUserDrawStyle(description: string): DzUserDrawStyle;

    /**
     * @returns DzViewTool The active view tool.
     */
    getActiveTool(): DzViewTool;

    /**
     * @returns DzViewport The currently active viewport.
     */
    getActiveViewport(): DzViewport;

    /**
     * @param i number
     * @returns DzViewport The custom viewport at the given index (if valid), otherwise null.
     * @since 4.7.1.104
     */
    getCustomViewport(i: number): DzViewport;

    /**
     * @param i number
     * @returns DzViewport The default viewport at the given index (if valid), otherwise null.
     * @since 4.7.1.104
     */
    getDefaultViewport(i: number): DzViewport;

    /**
     * @returns any[] A list of elements with properites that control the DrawStyle for the active 3D viewport.
     * @since 4.11.0.44
     */
    getDrawSettingsElementList(): any[]; // Array

    /**
     * @returns boolean true if mouse wheel response in the viewports is currently inverted, otherwise false.
     */
    getInvertMouseWheel(): boolean; // Boolean

    /**
     * @returns number Current view layout.
     */
    getLayout(): number; // Layout

    /**
     * @param operation number - The operation to get the mouse button accelerator for.
     * @returns number The mouse button accelerator for the given operation (if any), otherwise NoAccel.
     */
    getMouseBtnAccelerator(operation: number): number; // ViewMouseBtnAccelerator

    /**
     * @param button number
     * @param modifiers number - The keyboard modifiers to include.
     * @returns number The mouse button accelerator for the given mouse button and keyboard modifier states (if any), otherwise NoAccel.
     */
    getMouseBtnAccelerator(button: number, modifiers: number): number; // ViewMouseBtnAccelerator

    /**
     * @param mouseBtn number - If 0, the left mouse button. If 1, the middle mouse button. If 2, the right mouse button.
     * @param ctrl boolean - If true, the Ctrl key will be included.
     * @param alt boolean - If true, the Alt key will be included.
     * @param shift boolean - If true, the Shift key will be included.
     * @returns number The mouse button accelerator for the given mouse button and keyboard modifier states (if any), otherwise NoAccel.
     */
    getMouseBtnAccelerator(mouseBtn: number, ctrl: boolean, alt: boolean, shift: boolean): number; // ViewMouseBtnAccelerator

    /**
     * @param str string - The string to convert.
     * @returns number The mouse button accelerator for the given string (if any), otherwise NoAccel.
     */
    getMouseBtnAccelerator(str: string): number; // ViewMouseBtnAccelerator

    /**
     * @param accel number - The mouse button accelerator to get the string for.
     * @returns string A string representation of the given mouse button accelerator (if any), otherwise an empty string.
     */
    getMouseBtnAcceleratorString(accel: number): string; // String

    /**
     * @param operation number - The operation to get the string for.
     * @returns string A string representation of the mouse button accelerator for the given operation (if any), otherwise an empty string.
     */
    getMouseBtnAcceleratorString(operation: number): string; // String

    /**
     * @returns number The sensitivity of the mouse move response in the viewports.
     * @since 4.11.0.159
     */
    getMouseDragScalar(): number; // Number

    /**
     * @param str string - The string to convert.
     * @returns number The mouse modifier for the given string (if any), otherwise NoModifier.
     */
    getMouseModifier(str: string): number; // ViewMouseModifier

    /**
     * @param modifiers number - The keyboard modifiers to include.
     * @returns number The mouse modifier for the given keyboard modifier states (if any), otherwise NoModifier.
     */
    getMouseModifier(modifiers: number): number; // ViewMouseModifier

    /**
     * @param ctrl boolean - If true, the Ctrl key will be included.
     * @param alt boolean - If true, the Alt key will be included.
     * @param shift boolean - If true, the Shift key will be included.
     * @returns number The mouse modifier for the given keyboard modifier states (if any), otherwise NoModifier.
     */
    getMouseModifier(ctrl: boolean, alt: boolean, shift: boolean): number; // ViewMouseModifier

    /**
     * @param accel number - The mouse modifier to get the string for.
     * @returns string A string representation of the given mouse modifier (if any), otherwise an empty string.
     */
    getMouseModifierString(accel: number): string; // String

    /**
     * @returns number The sensitivity of the mouse wheel response in the viewports.
     * @since 4.11.0.159
     */
    getMouseWheelScalar(): number; // Number

    /**
     * @returns number The node click mode for pick tools.
     */
    getNodeClickMode(): number; // Number

    /**
     * @returns number The number of custom viewports.
     * @since 4.7.1.104
     */
    getNumCustomViewports(): number; // Number

    /**
     * @returns number The number of default (non-custom) viewports.
     * @since 4.7.1.104
     */
    getNumDefaultViewports(): number; // Number

    /**
     * @returns number The number of view tools.
     */
    getNumTools(): number; // Number

    /**
     * @returns number The number of view cameras.
     */
    getNumViewCameras(): number; // Number

    /**
     * @returns number The total number of viewports.
     */
    getNumViewports(): number; // Number

    /**
     * @returns number The number of custom viewports currently showing.
     * @since 4.7.1.104
     */
    getNumVisibleCustomViewports(): number; // Number

    /**
     * @returns number The number of default viewports currently showing.
     * @since 4.7.1.104
     */
    getNumVisibleDefaultViewports(): number; // Number

    /**
     * @returns number The total number of viewports currently showing.
     */
    getNumVisibleViewports(): number; // Number

    /**
     * @param accel number - The accelerator to get the operation for.
     * @returns number The operation for the given accelerator (if any), otherwise NoOperation.
     */
    getOperation(accel: number): number; // ViewOperation

    /**
     * @returns DzViewTool The override tool (if any), otherwise NULL.
     * @since 4.8.0.10
     */
    getOverrideTool(): DzViewTool;

    /**
     * @returns boolean Whether or not to propagate a background color change to all viewports.
     */
    getPropagateBackgroundColor(): boolean; // Boolean

    /**
     * @returns number The current quick draw mode.
     * @since 4.11.0.159
     */
    getQuickDrawMode(): number; // QDMode

    /**
     * @returns number The region click mode for pick tools.
     */
    getRegionClickMode(): number; // Number

    /**
     * @param i number
     * @returns DzViewTool The view tool at the given index (if valid), otherwise null.
     */
    getTool(i: number): DzViewTool;

    /**
     * @returns boolean true if illumination calculations for each pixel in the viewport is enabled, otherwise false.
     */
    getUsePerPixelLighting(): boolean; // Boolean

    /**
     * @param type number
     * @returns DzCamera The View (non-animatable) camera of the given type.
     */
    getViewCamera(type: number): DzCamera;

    /**
     * @param i number
     * @returns DzCamera The View (non-animatable) camera at the given index.
     */
    getViewCamera(i: number): DzCamera;

    /**
     * @param i number
     * @returns DzViewport The viewport at the given index.
     */
    getViewport(i: number): DzViewport;

    /**
     * @returns boolean true if manipulation binding will be used on TriAx weighted figures during manipulation, otherwise false.
     * @since 4.11.0.159
     */
    isManipulationBindingOn(): boolean; // Boolean

    /**
     * @returns boolean true if SubDivision Manipulation is enabled, otherwise false..
     * @since 4.11.0.159
     */
    isSubDManipulationOn(): boolean; // Boolean

    /**
     * A convenience method that forces a repaint of the currently active 3D viewport.
     */
    repaintActive3DViewport(): void;

    /**
     * Resets all the view cameras to their defaults.
     */
    resetViewCameras(): void;

    /**
     * Sets the currently active 3D tool.
     * @param i number - The index of the tool to set as being the active tool.
     */
    setActiveTool(i: number): void;

    /**
     * Sets the currently active 3D tool.
     * @param tool DzViewTool - The tool to set as being the active tool.
     */
    setActiveTool(tool: DzViewTool): void;

    /**
     * Set the active DzViewport. The given DzViewport must already be attached as an interface to this Scene.
     * @param activeView DzViewport - The viewport to set.
     */
    setActiveViewport(activeView: DzViewport): void;

    /**
     * Sets whether mouse wheel response in the viewports is inverted.
     * @param onOff boolean - If true, the mouse wheel will be inverted in the viewports. If false, mouse wheel response in the viewports will be standard.
     */
    setInvertMouseWheel(onOff: boolean): void;

    /**
     * Set the current layout. If we are in single pane mode, the new layout will take effect after single pane mode is switched off.
     * @param val number - The layout to set.
     */
    setLayout(val: number): void;

    /**
     * Sets whether or not manipulation binding will be used on TriAx weighted figures during manipulation.
     * @param onOff boolean - If true, manipulation binding will be used on TriAx weighted figures during manipulation.
     * @since 4.11.0.159
     */
    setManipulationBindingOn(onOff: boolean): void;

    /**
     * Sets the mouse button accelerator for the given view operation.
     * @param operation number - The view operation to set the accelerator for.
     * @param accel number - The accelerator to set for the view operation.
     */
    setMouseBtnAccelerator(operation: number, accel: number): void;

    /**
     * Sets the sensitivity of the mouse move response in the viewports.
     * @param val number - The scalar value to set.
     * @since 4.11.0.159
     */
    setMouseDragScalar(val: number): void;

    /**
     * Sets the sensitivity of the mouse wheel response in the viewports.
     * @param val number - The scalar value to set.
     * @since 4.11.0.159
     */
    setMouseWheelScalar(val: number): void;

    /**
     * Set the click mode for node selection tools.
     * @param mode number - The mode to set.
     */
    setNodeClickMode(mode: number): void;

    /**
     * Sets a temporary view tool that overrides the active view tool.
     * @param viewTool DzViewTool - The view tool to override with.
     * @since 4.8.0.10
     */
    setOverrideTool(viewTool: DzViewTool): void;

    /**
     * Set whether or not a background color change of a single viewport should be propagated to the other viewports.
     * @param onOff boolean - If true, setting the background color of one veiwport sets the background color for all viewports.
     */
    setPropagateBackgroundColor(onOff: boolean): void;

    /**
     * Sets the current quick draw mode.
     * @param mode number
     * @since 4.11.0.159
     */
    setQuickDrawMode(mode: number): void;

    /**
     * Set the click mode for region selection tools.
     * @param mode number - The mode to set.
     */
    setRegionClickMode(mode: number): void;

    /**
     * Sets whether or not SubD models are subdivided during manipulation.
     * @param onOff boolean - If true, SubD models are subdivided during manipulation.
     * @since 4.11.0.159
     */
    setSubDManipulationOn(onOff: boolean): void;

    /**
     * Sets whether or not to enable illumination calculations for each pixel in the viewport.
     * @param onOff boolean - If true, per pixel lighting is enabled.
     */
    setUsePerPixelLighting(onOff: boolean): void;

    /**
     * Sets the ratios that are used to layout the viewports inside the view area. Each value is a percentage of the available area that will be allocated to the given viewport(s). The values passed in are clamped to valid ranges before applying them. The values should be specified in decimal notation - i.e. 0.0 is 0%, 0.5 is 50%, and 1.0 is 100%. The minimum percentage of the area allocated to any viewport on any axis is 20% (0.2). Therefore, any values that are below this value will be increased to this value, and any values that would result in a remainder less than this value will be decreased.
     * @param hSingle number - The percentage of the height taken by the top viewport(s) when the area has a single horizontal division.
     * @param h1 number - The percentage of the height taken by the top view port when the area has two horizontal divisions.
     * @param h2 number - The percentage of the height taken by the center view port when the area has two horizontal divisions.
     * @param vSingle number - The percentage of the width taken by the left viewport(s) when the area has a single vertical division.
     * @param v1 number - The percentage of the width taken by the left view port when the area has two vertical divisions.
     * @param v2 number - The percentage of the width taken by the center view port when the area has two vertical divisions.
     */
    setViewRatios(hSingle: number, h1: number, h2: number, vSingle: number, v1: number, v2: number): void;

    /**
     * @param accel number - The accelerator to test.
     * @returns boolean true if accel is not already assigned, otherwise false.
     */
    validateMouseBtnAccelerator(accel: number): boolean; // Boolean

    /**
     * @param accel number - The accelerator to test.
     * @returns boolean Always returns true; currently no wheel events on the viewport to conflict with.
     */
    validateMouseWheelAccelerator(accel: number): boolean; // Boolean

    /* Signals */

    /**
     * Emitted when an accelerator (keyboard shortcut) for navigating the scene changes.
     * @param operation number - The operation that the accelerator changed for.
     * @param accel number - The accelerator assigned to the operation.
     */
    accelChanged: ISignal<number, number>;

    /**
     * Emitted when an accelerator (keyboard shortcut) for navigating the scene changes.
     */
    acceleratorsChanged: ISignal<void>;

    /**
     * Emitted when the dimensions of the active 3D viewport changes.
     */
    acitve3DViewCurrentDimensionsChanged: ISignal<void>;

    /**
     * Emitted when the drawn data for the active tool changes.
     */
    activeToolDrawnDataChanged: ISignal<void>;

    /**
     * Emitted when the active tool changes.
     */
    activeToolSwitched: ISignal<void>;

    /**
     * Emitted when the active view changes size.
     */
    activeViewResized: ISignal<void>;

    /**
     * Emitted when the active view changes.
     */
    activeViewSwitched: ISignal<void>;

    /**
     * Emitted when the active viewport is about to display a context menu. Other objects can connect to this signal to add custom items to the menu that is displayed to the user.
     * @param menu DzMenu - The menu that will be displayed at the point of the request.
     * @param view Dz3DViewport - The viewport that the menu is about to be shown for.
     * @param pos Point - The position that the menu was requested.
     */
    contextMenuAboutToShow: ISignal<DzMenu, Dz3DViewport, Point>;

    /**
     * Emitted when the list of elements that hold properties for controlling a DrawStyle changes; e.g., when the active DrawStyle changes.
     */
    drawElementsListChanged: ISignal<void>;

    /**
     * Emitted when the state of whehter or not Geo-Grafted objects are drawn as grafted changes.
     */
    graftDrawingChanged: ISignal<void>;

    /**
     * Emitted when the state of whether or not to invert the behavior of scrolling the mouse wheel changes.
     * @param onOff boolean - The new state.
     */
    invertMouseWheelChanged: ISignal<boolean>;

    /**
     * Emitted when a quick draw operation is finished.
     */
    manipFinished: ISignal<void>;

    /**
     * Emitted when a quick draw operation is started.
     */
    manipStarted: ISignal<void>;

    /**
     * Emitted when the manipulation binding state changes.
     * @param onOff boolean - The new state.
     */
    manipulationBindingChanged: ISignal<boolean>;

    /**
     * Emitted when the scalar for mouse movement changes.
     * @param scalar number - The new scalar.
     * @since 4.11.0.159
     */
    mouseDragScalarChanged: ISignal<number>;

    /**
     * Emitted when the scalar for the mouse wheel changes.
     * @param scalar number - The new scalar.
     * @since 4.11.0.159
     */
    mouseWheelScalarChanged: ISignal<number>;

    /**
     * Emitted when the mode for what happens when a node is clicked changes.
     * @param mode number - The new mode.
     */
    nodeClickModeChanged: ISignal<number>;

    /**
     * Emitted when whether or not to propagate background color changes has changed.
     * @param onOff boolean - The new state.
     */
    propagateBackgroundColorChanged: ISignal<boolean>;

    /**
     * Emitted when the quick draw mode changes.
     * @param mode number - The new mode.
     */
    quickDrawModeChanged: ISignal<number>;

    /**
     * Emitted when the redraw lock state changes.
     * @param onOff boolean - The new state.
     */
    redrawsLocked: ISignal<boolean>;

    /**
     * Emitted when the mode for what happens when a region is clicked changes.
     * @param mode number - The new mode.
     */
    regionClickModeChanged: ISignal<number>;

    /**
     * Emitted when the subD manipulation state changes.
     * @param onOff boolean - The new state.
     */
    subDManipulationChanged: ISignal<boolean>;

    /**
     * Emitted when the tool list changes.
     */
    toolListChanged: ISignal<void>;

    /**
     * Emitted when the layout of the viewports changes.
     */
    viewLayoutChanged: ISignal<void>;

    /**
     * Emitted when the global list of available cameras changes.
     */
    viewportCameraListChanged: ISignal<void>;

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
    getViewIcon(): any; // TODO ;

    /** @undocumented */
    getActiveViewportDimensionsController(): any; // TODO ;
}
