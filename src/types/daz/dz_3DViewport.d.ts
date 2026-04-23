/**
 * A widget for displaying and interacting with three dimensional objects.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/3dviewport_dz
 */
declare class Dz3DViewport extends QWidget {

    /* Properties */

    /**
     * Holds whether or not the aspect frame is drawn in the viewport.
     */
    aspectOn: boolean; // Boolean

    /**
     * Holds whether or not the origin axes are drawn in the viewport.
     */
    axesOn: boolean; // Boolean

    /**
     * Holds the background color of the viewport
     */
    background: Color;

    /**
     * Holds the style of the floor that is drawn in the viewport.
     */
    floorStyle: number; // FloorStyle

    /**
     * Holds the shading style of the viewport.
     */
    shadeStyle: number; // ShadeStyle

    /**
     * Holds whether or not the Pose Tool is shown.
     */
    showPoseTool: boolean; // Boolean

    /**
     * Holds whether or not the thirds guide is drawn in the viewport.
     * @since 4.6.3.12
     */
    thirdsGuideOn: boolean; // Boolean

    /**
     * Holds the mode for the viewport display of toolbars/camera cube
     */
    toolBarMode: number; // ToolBarMode

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of FloorStyle.
     */
    static NoFloor: number;

    /**
     * DAZ enum member of FloorStyle.
     */
    static WireFloor: number;

    /**
     * DAZ enum member of FloorStyle.
     */
    static SolidFloor: number;

    /**
     * DAZ enum member of ShadeStyle.
     */
    static WireBox: number;

    /**
     * DAZ enum member of ShadeStyle.
     */
    static SolidBox: number;

    /**
     * DAZ enum member of ShadeStyle.
     */
    static Wireframe: number;

    /**
     * DAZ enum member of ShadeStyle.
     */
    static LitWireframe: number;

    /**
     * DAZ enum member of ShadeStyle.
     */
    static HiddenLine: number;

    /**
     * DAZ enum member of ShadeStyle.
     */
    static WireShaded: number;

    /**
     * DAZ enum member of ShadeStyle.
     */
    static SmoothShaded: number;

    /**
     * DAZ enum member of ShadeStyle.
     */
    static WireTextured: number;

    /**
     * DAZ enum member of ShadeStyle.
     */
    static Textured: number;

    /**
     * DAZ enum member of ToolBarMode.
     */
    static DockedToolBar: number;

    /**
     * DAZ enum member of ToolBarMode.
     */
    static CameraCubeHUD: number;

    /* Methods */

    /**
     * Aim the viewport's active camera at the selected nodes in the scene. If the scene does not have any select nodes, all nodes in the scene are aimed. Note that the viewport's active camera is excluded, as are any nodes that are parented to the viewport's active camera.
     */
    aimCamera(): void;

    /**
     * Aim the viewport's active camera at the given box. If the box is invalid, this function does nothing.
     * @param box DzBox3 - The box to aim the viewport's active camera at.
     */
    aimCameraAtBox(box: DzBox3): void;

    /**
     * Aim the viewport's active camera at the selected nodes in the scene. If the scene does not have any select nodes, all nodes in the scene are aimed. Note that the viewport's active camera is excluded, as are any nodes that are parented to the viewport's active camera.
     */
    aimCameraAtPrimaryNode(): void;

    /**
     * Captures the current contents from the OpenGL frame buffer as an image.
     * @returns DzImage A snap shot of the OpenGL frame buffer.
     */
    captureImage(): DzImage;

    /**
     * @returns DzInt2 The current dimensions of the viewport.
     * @since 4.6.4.100
     */
    currentDimensions(): DzInt2;

    /**
     * Stops any camera operations that are currently active.
     * @since 4.11.0.161
     */
    endNavigation(): void;

    /**
     * Frame the viewport's active camera at the selected nodes in the scene. If the scene does not have any select nodes, all nodes in the scene are framed. Note that the viewport's active camera is excluded, as are any nodes that are parented to the viewport's active camera.
     */
    frameCamera(): void;

    /**
     * Frame the viewport's active camera at the given box. If the box is invalid this function does nothing.
     * @param box DzBox3 - The box to frame the viewport's active camera on.
     */
    frameCameraOnBox(box: DzBox3): void;

    /**
     * Frame the viewport's active camera at the selected nodes in the scene. If the scene does not have any select nodes, all nodes in the scene are framed. Note that the viewport's active camera is excluded, as are any nodes that are parented to the viewport's active camera.
     */
    frameCameraOnSelectedNodes(): void;

    /**
     * @returns Rect A rect describing the aspect frame for this viewport.
     */
    getAspectFrameRect(): Rect;

    /**
     * @returns DzCamera The currently active camera for this viewport.
     */
    getCamera(): DzCamera;

    /**
     * @returns any The persistent Camera Cube view tool for this viewport; displayed when the toolBarMode is set to CameraCubeHUD. Undocumented DAZ type: cameracube_dz.
     * @since 4.9.3.107
     */
    getCameraCube(): any; // cameracube_dz; undocumented type

    /**
     * @returns DzDrawStyle The current drawstyle for the viewport.
     * @since 4.14.1.27
     */
    getDrawStyle(): DzDrawStyle;

    /**
     * @returns string The description of the DrawStyle (if the current DrawStyle is a DzUserDrawStyle), otherwise an empty string.
     * @since 4.9.2.22
     */
    getUserDrawStyle(): string; // String

    /**
     * @returns DzViewport This 3D view's parent viewport.
     */
    getViewport(): DzViewport;

    /**
     * Performs a hardware assisted OpenGL render in this viewport with the given settings.
     * @param handler DzRenderHandler - The render handler for the rendering operation.
     * @returns boolean true if the scene was rendered successfully, otherwise false.
     */
    hardwareRender(handler: DzRenderHandler): boolean; // Boolean

    /**
     * Performs a hardware assisted OpenGL render in this viewport with the given settings.
     * @param handler DzRenderHandler - The render handler for the rendering operation.
     * @param options DzRenderOptions - The render options to use. (since 4.9.3.61)
     * @param camera DzCamera - The camera to render through, set to null to render from current view. (since 4.9.3.61)
     * @param style DzDrawStyle - The draw style to use, null to use standard render draw style. (since 4.9.3.61)
     * @returns boolean true if the scene was rendered successfully, otherwise false.
     * @since 4.9.3.57
     */
    hardwareRenderWithOptions(handler: DzRenderHandler, options: DzRenderOptions, camera?: DzCamera, style?: DzDrawStyle): boolean; // Boolean

    /**
     * @returns boolean true if this viewport supports rendering via OpenGL, otherwise false.
     */
    isHardwareRenderable(): boolean; // Boolean

    /**
     * @returns boolean true if a mouse operation is active, otherwise false.
     * @since 4.11.0.161
     */
    isNavigating(): boolean; // Boolean

    /**
     * Performs a facet picking operation on the scene through this viewport.
     * @param pnt Point - The pixel coordinates of the point in the viewport to pick on.
     * @returns number The index of the facet that was hit (if any), otherwise -1.
     */
    pickOnFacet(pnt: Point): number; // Number

    /**
     * Performs a gizmo picking operation through this viewport. View tools (see DzViewTool) can draw a 'gizmo' in the viewport for the user to interact with. The tool can assign different parts of the gizmo to specific indices, so as to tell what part of the gizmo was clicked by the user.
     * @param pnt Point - The point in the viewport to pick on.
     * @returns number The gizmo index that was hit (if any), otherwise 0.
     */
    pickOnGizmo(pnt: Point): number; // Number

    /**
     * Performs a material picking operation on the scene through this viewport. This example shows the mousePress() implementation from a view tool (see DzViewTool) that sets the color of any material that the user clicks in the viewport.
     * @param pnt Point - The pixel coordinates of the point in the viewport to pick on.
     * @returns DzMaterial The material that was hit (if any), otherwise null.
     */
    pickOnMaterial(pnt: Point): DzMaterial;

    /**
     * Performs a node picking operation on the scene through this viewport.
     * @param pnt Point - The pixel coordinates of the point in the viewport to pick on.
     * @returns DzNode The node that was hit (if any), otherwise null.
     */
    pickOnNode(pnt: Point): DzNode;

    /**
     * Performs a node picking operation on the scene through this viewport.
     * @param pnt Point - The pixel coordinates of the point in the viewport to pick on.
     * @param useSelectionMaps boolean - If true, selection maps are used to perform the picking operation.
     * @returns DzNode The node that was hit (if any), otherwise null.
     */
    pickOnNode(pnt: Point, useSelectionMaps: boolean): DzNode;

    /**
     * Performs a quick render of the scene suitable for a thumbnail image.
     * @param handler DzRenderHandler - The render handler for the rendering operation.
     * @returns boolean true if the scene was successfully rendered, otherwise false.
     */
    renderThumbnail(handler: DzRenderHandler): boolean; // Boolean

    /**
     * Resets the viewport's active camera to its default state.
     */
    resetCamera(): void;

    /**
     * Set the camera for the view. If a matching camera is not found, this function does nothing.
     * @param cam string - The name (not label) of a view camera, or a scene camera.
     */
    setCamera(cam: string): void;

    /**
     * Set the camera for the view. The camera passed in must be a camera in the scene, or one of the view cameras from DzViewportMgr.
     * @param cam DzCamera - The camera to use for viewing in the viewport.
     */
    setCamera(cam: DzCamera): void;

    /**
     * Set the draw style for the viewport. DzDrawStyle objects are ref counted, so the viewport refs the style when it is set, and unrefs it when it is no longer using the style. The draw style will then delete itself when its ref count reaches zero.
     * @param style DzDrawStyle - The new draw style for the viewport.
     */
    setDrawStyle(style: DzDrawStyle): void;

    /**
     * Attempts to set the DrawStyle for the viewport.
     * @param description string - The description of the DzUserDrawStyle to set.
     * @returns boolean true if a DzUserDrawStyle that matches the description could be found, otherwise false.
     * @since 4.9.2.22
     */
    setUserDrawStyle(description: string): boolean; // Boolean

    /**
     * Deprecated
     * @returns boolean
     * @since 4.6.4.20
     */
    mouseIsDown(): boolean; // Boolean

    /* Signals */

    /**
     * Emitted when a new active camera has been changed for this viewport.
     * @param cam DzCamera - The new camera for this viewport.
     */
    activeCameraChanged: ISignal<DzCamera>;

    /**
     * Emitted when the projection of the active camera of this viewport has changed.
     */
    activeCameraProjectionChanged: ISignal<void>;

    /**
     * Emitted when the transform of the active camera of this viewport has changed.
     */
    activeCameraTransformChanged: ISignal<void>;

    /**
     * Emitted when the draw state for the aspect frame changes.
     * @param onOff boolean - true if the aspect frame is displayed, otherwise false.
     */
    aspectOnChanged: ISignal<boolean>;

    /**
     * Emitted when the draw state for the origin axes changes.
     * @param onOff boolean - true if the origin axis is displayed, otherwise false.
     */
    axesOnChanged: ISignal<boolean>;

    /**
     * Emitted when the background color of the viewport changes.
     * @param color Color - The new background color.
     */
    backgroundColorChanged: ISignal<Color>;

    /**
     * Emitted when the viewport is about to display a context menu. Other objects can connect to this signal to add custom items to the menu that is displayed to the user. Only connect to this signal if you only want to affect this particular viewport - otherwise connect to DzViewportMgr::contextMenuAboutToShow().
     * @param menu DzMenu - The menu that will be displayed.
     * @param pos Point - The position in the viewport where the context menu was triggered.
     */
    contextMenuAboutToShow: ISignal<DzMenu, Point>;

    /**
     * Emitted when the current dimensions of this viewport has changed.
     */
    currentDimensionsChanged: ISignal<void>;

    /**
     * Emitted when the dimensions of this viewport has changed.
     */
    dimensionsChanged: ISignal<void>;

    /**
     * Emitted when the draw style of the viewport has changed.
     * @param style DzDrawStyle - The new draw style of the viewport.
     */
    drawStyleChanged: ISignal<DzDrawStyle>;

    /**
     * Emitted when the floor style of the viewport changes.
     * @param style number - The new floor style for the viewport.
     */
    floorStyleChanged: ISignal<number>;

    /**
     * Emitted when the draw state for the thirds guide changes.
     * @param onOff boolean - true if the thirds guide is displayed, otherwise false.
     */
    thirdsGuideOnChanged: ISignal<boolean>;

    /**
     * Emitted when the view tool bar is docked or undocked.
     * @param onOff boolean - true if the view tool bar is docked, otherwise false.
     */
    toolBarDocked: ISignal<boolean>;

    /**
     * Emitted when the toolbar mode has been changed for this viewport.
     * @param mode number - The new toolbar mode for this viewport.
     */
    toolModeChanged: ISignal<number>;

    /**
     * Emitted when the area this viewport displays has changed.
     */
    viewChanged: ISignal<void>;

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
    NO_FLOOR: number;

    /** @undocumented */
    WIRE_FLOOR: number;

    /** @undocumented */
    SOLID_FLOOR: number;

    /** @undocumented */
    WIRE_BOX: number;

    /** @undocumented */
    SOLID_BOX: number;

    /** @undocumented */
    WIREFRAME: number;

    /** @undocumented */
    LIT_WIREFRAME: number;

    /** @undocumented */
    HIDDEN_LINE: number;

    /** @undocumented */
    WIRE_SHADED: number;

    /** @undocumented */
    SMOOTH_SHADED: number;

    /** @undocumented */
    WIRE_TEXTURED: number;

    /** @undocumented */
    TEXTURED: number;

    /** @undocumented */
    AnchorTopLeft: number;

    /** @undocumented */
    AnchorTopRight: number;

    /** @undocumented */
    AnchorBottomLeft: number;

    /** @undocumented */
    AnchorBottomRight: number;

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
    pickNodes(area: QPolygonF, nodes: DzNode[], useSelectionMaps: boolean): void;

    /** @undocumented */
    pickNodes(area: QPolygonF, nodes: DzNode[], useSelectionMaps: boolean): void;

    /** @undocumented */
    pickMaterials(area: QPolygonF, mats: DzMaterial[]): void;

    /** @undocumented */
    pickFacets(area: QPolygonF, facets: number[], facetNode: DzNode): void;

    /** @undocumented */
    pickGizmos(area: QPolygonF, gizmos: number[]): void;

    /** @undocumented */
    appendHoverCursor(cursor: QCursor): void;

    /** @undocumented */
    updateGLOptions(): void;

    /** @undocumented */
    updateView(): void;

    /** @undocumented */
    removeCamera(cam: DzNode): void;
}
