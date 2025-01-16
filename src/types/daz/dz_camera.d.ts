declare class DzCamera extends DzNode {

    static FRONT_CAMERA: number;
    static BACK_CAMERA: number;
    static LEFT_CAMERA: number;
    static RIGHT_CAMERA: number;
    static TOP_CAMERA: number;
    static BOTTOM_CAMERA: number;
    static PERSPECTIVE_CAM: number;
    static ORTHO_CAMERA: number;
    static GENERAL_CAMERA: number;


    /* Properties */

    /**
     * The type of this camera. (Read Only)
     */
    type: number;

    /* Methods */
    accFrustum(left: number, right: number, bottom: number): void;
    accPerspective(fovy: number, aspect: number): void;
    aimAt(pos: DzVec3): void;
    aspectRatioChanged(): void;
    calcLocalBoundingBox(): DzBox3;
    draw(style: DzDrawStyle): void;
    focalDistanceChanged(range: DzTimeRange): void;
    focalLengthChanged(range: DzTimeRange): void;
    frame(box: DzBox3, aspect: number): void;
    getAspectRatio(): number;
    getFarClippingPlane(): number;
    getFieldOfView(): number;
    getFocalDistance(): number;
    getFocalLength(): number;
    getFocalPoint(): DzVec3;
    getHeadlight(): DzLight;
    getIcon(): QIcon;
    getNearClippingPlane(): number;
    getPixmap(state: number): QPixmap;
    isViewCamera(): boolean;
    projectionChanged(): void;
    reset(): void;
    setAspectRatio(aspect: number): void;
    setFocalDistance(dist: number): void;
    setFocalLength(dist: number): void;
    setGL(width: number, height: number, view: QRect, pass: number, totalPasses: number): void;
    setProjection(settings: DzRenderSettings, width: number, height: number): void;
    setRenderGlobals(settings: DzRenderSettings): void;
}