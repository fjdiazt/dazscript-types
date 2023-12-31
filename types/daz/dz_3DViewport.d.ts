declare class Dz3DViewport extends QGLWidget {

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
    sizeHint: QObject;

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
    background: QObject;
    floorStyle: number;
    shadeStyle: number;
    axesOn: boolean;
    aspectOn: boolean;
    thirdsGuideOn: boolean;
    showPoseTool: boolean;
    toolBarMode: number;
    NoFloor: number;
    WireFloor: number;
    SolidFloor: number;
    NO_FLOOR: number;
    WIRE_FLOOR: number;
    SOLID_FLOOR: number;
    WireBox: number;
    SolidBox: number;
    Wireframe: number;
    LitWireframe: number;
    HiddenLine: number;
    WireShaded: number;
    SmoothShaded: number;
    WireTextured: number;
    Textured: number;
    WIRE_BOX: number;
    SOLID_BOX: number;
    WIREFRAME: number;
    LIT_WIREFRAME: number;
    HIDDEN_LINE: number;
    WIRE_SHADED: number;
    SMOOTH_SHADED: number;
    WIRE_TEXTURED: number;
    TEXTURED: number;
    AnchorTopLeft: number;
    AnchorTopRight: number;
    AnchorBottomLeft: number;
    AnchorBottomRight: number;
    DockedToolBar: number;
    CameraCubeHUD: number;

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
    setVisible(): any; // TODO ;
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
    activeCameraChanged(cam: DzCamera): void;
    dimensionsChanged(): void;
    viewChanged(): void;
    drawStyleChanged(style: DzDrawStyle): void;
    contextMenuAboutToShow(menu: DzMenu, pos: QPoint): void;
    backgroundColorChanged(color: QColor): void;
    floorStyleChanged(style: number): void;
    axesOnChanged(onOff: boolean): void;
    aspectOnChanged(onOff: boolean): void;
    thirdsGuideOnChanged(): any; // TODO ;
    toolBarDocked(onOff: boolean): void;
    toolModeChanged(mode: number): void;
    activeCameraTransformChanged(): any; // TODO ;
    activeCameraProjectionChanged(): any; // TODO ;
    currentDimensionsChanged(): any; // TODO ;
    setDrawStyle(style: DzDrawStyle): void;
    setCamera(cam: DzCamera): void;
    setCamera(cam: QString): void;
    setCamera(cam: DzCamera): void;
    setCamera(cam: QString): void;
    aimCamera(): void;
    aimCameraAtPrimaryNode(): void;
    aimCameraAtBox(box: DzBox3): void;
    frameCamera(): void;
    frameCameraOnSelectedNodes(): void;
    frameCameraOnBox(box: DzBox3): void;
    resetCamera(): void;
    pickOnNode(pnt: QPoint, useSelectionMaps: boolean, region: DzGeometryRegion): DzNode;
    pickOnNode(pnt: QPoint, useSelectionMaps: boolean, region: DzGeometryRegion): DzNode;
    pickOnNode(pnt: QPoint, useSelectionMaps: boolean, region: DzGeometryRegion): DzNode;
    pickOnMaterial(pnt: QPoint): DzMaterial;
    pickOnFacet(pnt: QPoint, facetNode: DzNode): number;
    pickOnFacet(pnt: QPoint, facetNode: DzNode): number;
    pickOnGizmo(pnt: QPoint): number;
    pickNodes(area: QPolygonF, nodes: DzNode[], useSelectionMaps: boolean): void;
    pickNodes(area: QPolygonF, nodes: DzNode[], useSelectionMaps: boolean): void;
    pickMaterials(area: QPolygonF, mats: DzMaterial[]): void;
    pickFacets(area: QPolygonF, facets: number[], facetNode: DzNode): void;
    pickGizmos(area: QPolygonF, gizmos: number[]): void;
    appendHoverCursor(cursor: QCursor): void;
    updateGLOptions(): void;
    captureImage(): QImage;
    currentDimensions(): any; // TODO ;
    getViewport(): DzViewport;
    getDrawStyle(): DzDrawStyle;
    getUserDrawStyle(): string;
    getCamera(): DzCamera;
    getAspectFrameRect(): QRect;
    isHardwareRenderable(): boolean;
    hardwareRender(handler: DzRenderHandler): boolean;
    renderThumbnail(handler: DzRenderHandler): boolean;
    mouseIsDown(): any; // TODO ;
    updateView(): void;
    removeCamera(cam: DzNode): void;
}