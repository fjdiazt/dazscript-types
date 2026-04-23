/**
 * Base class for all camera objects.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/camera_dz
 */
declare class DzCamera extends DzNode {

    /* Properties */

    /**
     * Holds the aspect height of this camera.
     * @since 4.6.4.67
     */
    aspectHeight: number; // Number

    /**
     * Holds the aspect ratio of this camera (w / h).
     * @since 4.6.4.67
     */
    aspectRatio: number; // Number

    /**
     * Holds the aspect width of this camera.
     * @since 4.6.4.67
     */
    aspectWidth: number; // Number

    /**
     * Holds the distance of the far clipping plane from this camera. (Read Only)
     */
    farClippingPlane: number; // Number

    /**
     * Holds the focal distance of this camera.
     */
    focalDistance: number; // Number

    /**
     * Holds the focal length of this camera.
     */
    focalLength: number; // Number

    /**
     * Holds the width of the frame (film/sensor) of this camera (in mm). (Read Only)
     * @since 4.6.4.67
     */
    frameWidth: number; // Number

    /**
     * Holds the mode of the headlight.
     * @since 4.7.1.94
     */
    headlightMode: number; // HeadlightMode

    /**
     * Holds the relative offset of the headlight from this camera.
     * @since 4.7.1.94
     */
    headlightOffset: DzVec3;

    /**
     * Holds the distance of the near clipping plane from this camera. (Read Only)
     */
    nearClippingPlane: number; // Number

    /**
     * Holds the pixels height of this camera.
     * @since 4.6.4.67
     */
    pixelsHeight: number; // Number

    /**
     * Holds the pixels width of this camera.
     * @since 4.6.4.67
     */
    pixelsWidth: number; // Number

    /**
     * Holds whether or not the proportions of this camera is constrained.
     * @since 4.6.4.70
     */
    proportionsConstrained: boolean; // Boolean

    /**
     * Holds the type of this camera. (Read Only)
     */
    type: number; // Number

    /**
     * Holds whether or not to use the local dimensions of this camera.
     * @since 4.6.4.67
     */
    useLocalDimensions: boolean; // Boolean

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of CameraDimension.
     */
    static LOCAL_PIXEL_WIDTH: number;

    /**
     * DAZ enum member of CameraDimension.
     */
    static LOCAL_PIXEL_HEIGHT: number;

    /**
     * DAZ enum member of CameraDimension.
     */
    static LOCAL_ASPECT_WIDTH: number;

    /**
     * DAZ enum member of CameraDimension.
     */
    static LOCAL_ASPECT_HEIGHT: number;

    /**
     * DAZ enum member of CameraType.
     */
    static FRONT_CAMERA: number;

    /**
     * DAZ enum member of CameraType.
     */
    static BACK_CAMERA: number;

    /**
     * DAZ enum member of CameraType.
     */
    static LEFT_CAMERA: number;

    /**
     * DAZ enum member of CameraType.
     */
    static RIGHT_CAMERA: number;

    /**
     * DAZ enum member of CameraType.
     */
    static TOP_CAMERA: number;

    /**
     * DAZ enum member of CameraType.
     */
    static BOTTOM_CAMERA: number;

    /**
     * DAZ enum member of CameraType.
     */
    static PERSPECTIVE_CAMERA: number;

    /**
     * DAZ enum member of CameraType.
     */
    static ORTHO_CAMERA: number;

    /**
     * DAZ enum member of CameraType.
     */
    static GENERAL_CAMERA: number;

    /**
     * DAZ enum member of HeadlightMode.
     */
    static hmAuto: number;

    /**
     * DAZ enum member of HeadlightMode.
     */
    static hmOn: number;

    /**
     * DAZ enum member of HeadlightMode.
     */
    static hmOff: number;

    /* Methods */

    /**
     * Rotates this camera and adjusts its focal distance so that its focal point is at the given point.
     * @param pos DzVec3 - The point to aim this camera at.
     */
    aimAt(pos: DzVec3): void;

    /**
     * Translates this camera so that its view frames the given box, and sets this camera's focal point to the center of the box, given the aspect ratio of the current view (w / h)
     * @param box DzBox3 - The bounding box to frame in this camera's view
     * @param aspect number - The aspect ratio of the current view.
     */
    frame(box: DzBox3, aspect: number): void;

    /**
     * The aspect of the frame can be manipulated by the user. Therefore, calculating the vertical and/or diagonal FOV is accomplished using the aspect ratio.
     * @returns number The angle, in radians, of the horizontal field of view (FOV) for this camera (rectilinear lens).
     */
    getFieldOfView(): number; // Number

    /**
     * @returns DzVec3 The focal point of this camera.
     */
    getFocalPoint(): DzVec3;

    /**
     * @returns DzLight A light that illuminates the scene in front of this camera. Used for rendering by OpenGL and offline renderers when no lights exist in the scene. This headlight is created on demand - i.e. no headlight for this camera exists until this function is called the first time.
     */
    getHeadlight(): DzLight;

    /**
     * @returns boolean true if this is a non-animatable view camera, otherwise false.
     */
    isViewCamera(): boolean; // Boolean

    /**
     * Resets this camera viewing parameters to defaults.
     */
    reset(): void;

    /**
     * @param hasLights boolean - Whether or not the scene has lights.
     * @param isRender boolean - Whether or not the call is for the purpose of a render.
     * @returns boolean true if the headlight should contribute light to the scene, otherwise false.
     * @since 4.7.1.94
     */
    shouldDoHeadLight(hasLights: boolean, isRender: boolean): boolean; // Boolean

    /**
     * Updates the other dimensions given an anchor dimension.
     * @param anchor number - The anchor dimension.
     */
    updateDimensions(anchor: number): void;

    /* Signals */

    /**
     * Emitted when the aspect height dimension of this camera changes.
     * @param height number
     */
    aspectHeightChanged: ISignal<number>;

    /**
     * Emitted when this camera's aspect ratio changes.
     */
    aspectRatioChanged: ISignal<void>;

    /**
     * Emitted when the aspect width dimension of this camera changes.
     * @param width number
     */
    aspectWidthChanged: ISignal<number>;

    /**
     * Emitted when any of the local dimensions of this camera change.
     */
    dimensionsChanged: ISignal<void>;

    /**
     * Emitted when the focal distance channel changes.
     * @param range DzTimeRange - The time range over which the channel changed.
     */
    focalDistanceChanged: ISignal<DzTimeRange>;

    /**
     * Emitted when the focal length channel changes.
     * @param range DzTimeRange - The time range over which the channel changed.
     */
    focalLengthChanged: ISignal<DzTimeRange>;

    /**
     * Emitted when the frame width of this camera changes.
     * @param size number
     */
    frameWidthChanged: ISignal<number>;

    /**
     * Emitted when headlight mode of this camera changes.
     */
    headlightModeChanged: ISignal<void>;

    /**
     * Emitted when headlight offset of this camera changes.
     */
    headlightOffsetChanged: ISignal<void>;

    /**
     * Emitted when the local pixel dimensions of this camera change.
     */
    pixelDimensionsChanged: ISignal<void>;

    /**
     * Emitted when the pixel height dimension of this camera changes.
     * @param height number
     */
    pixelsHeightChanged: ISignal<number>;

    /**
     * Emitted when the pixel width dimension of this camera changes.
     * @param width number
     */
    pixelsWidthChanged: ISignal<number>;

    /**
     * Emitted when projection of this camera changes and its view must be redrawn.
     */
    projectionChanged: ISignal<void>;

    /**
     * Emitted when the option for whether or not to constrain proportions of the local dimensions of this camera changes.
     * @param yesNo boolean
     */
    proportionsConstrainedChanged: ISignal<boolean>;

    /**
     * Emitted when the option for whether or not to use the local dimensions of this camera changes.
     * @param yesNo boolean
     */
    useLocalDimensionsChanged: ISignal<boolean>;

    /* Undocumented Augment Members */

    /** @undocumented */
    static PERSPECTIVE_CAM: number;

    /** @undocumented */
    accFrustum(left: number, right: number, bottom: number): void;

    /** @undocumented */
    accPerspective(fovy: number, aspect: number): void;

    /** @undocumented */
    calcLocalBoundingBox(): DzBox3;

    /** @undocumented */
    draw(style: DzDrawStyle): void;

    /** @undocumented */
    getAspectRatio(): number;

    /** @undocumented */
    getFarClippingPlane(): number;

    /** @undocumented */
    getIcon(): QIcon;

    /** @undocumented */
    getNearClippingPlane(): number;

    /** @undocumented */
    getPixmap(state: number): QPixmap;

    /** @undocumented */
    setAspectRatio(aspect: number): void;

    /** @undocumented */
    setGL(width: number, height: number, view: QRect, pass: number, totalPasses: number): void;

    /** @undocumented */
    setProjection(settings: DzRenderSettings, width: number, height: number): void;

    /** @undocumented */
    setRenderGlobals(settings: DzRenderSettings): void;
}
