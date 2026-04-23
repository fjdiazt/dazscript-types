/**
 * A basic camera.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/basiccamera_dz
 */
declare class DzBasicCamera extends DzCamera {

    /* Properties */

    /**
     * Holds the current height of the view. (Read Only)
     */
    currentViewHeight: number; // Number

    /**
     * Holds the current width of the view. (Read Only)
     */
    currentViewWidth: number; // Number

    /**
     * Holds whether or not the camera performs depth of field calculations.
     */
    depthOfField: boolean; // Boolean

    /**
     * Holds the distance of the far DOF plane from this camera. (Read Only)
     * @since 4.15.1.84
     */
    farDofPlane: number; // Number

    /**
     * Holds the f/stop of the camera.
     */
    fStop: number; // Number

    /**
     * Holds whether or the camera is a perspective or orthographic view.
     */
    isPerspective: boolean; // Boolean

    /**
     * Holds the distance of the near DOF plane from this camera. (Read Only)
     * @since 4.15.1.84
     */
    nearDofPlane: number; // Number

    /**
     * Holds whether or not the local dimensions will use the active viewport when enabled.
     * @since 4.9.3.108
     */
    useActiveViewport: boolean; // Boolean

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * Applies the settings in a dimensions preset.
     * @param preset string - The name of the preset to retrieve the settings for. An empty string is interpreted to mean “Custom.”
     * @returns boolean true if preset was found, otherwise false.
     * @since 4.9.3.108
     */
    applyDimensionsPreset(preset: string): boolean; // Boolean

    /**
     * A ray through the scene for a perspective view.
     * @param x number - The x position of the cursor in the viewport.
     * @param y number - The y position of the cursor in the viewport.
     * @returns DzVec3 A directional vector that defines a ray that intersects the camera's center point.
     */
    cursorToRay(x: number, y: number): DzVec3;

    /**
     * Calculates a location in the scene based on an x, y position in the viewport and distance from the camera.
     * @param x number - The x coordinate of the cursor in the viewport.
     * @param y number - The y coordinate of the cursor in the viewport.
     * @param z number - The distance from the camera in world space at which to calculate the target point.
     * @returns DzVec3 A positional vector that represents the resulting location in the scene.
     */
    cursorToScene(x: number, y: number, z: number): DzVec3;

    /**
     * @returns DzFloatProperty The “Aperture Blade Rotation” property for this camera.
     * @since 4.9.3.121
     */
    getApertureBladeRotationAngleControl(): DzFloatProperty;

    /**
     * @returns DzIntProperty The “Aperture Blades” property for this camera.
     * @since 4.9.3.121
     */
    getApertureNumBladesControl(): DzIntProperty;

    /**
     * @returns DzFloat2Property The “Aspect Ratio” property for this camera.
     * @since 4.15.1.84
     */
    getAspectRatioControl(): DzFloat2Property;

    /**
     * @returns DzBoolProperty The “Constrain Proportions” property for this camera.
     * @since 4.15.1.84
     */
    getConstrainProportionsControl(): DzBoolProperty;

    /**
     * @returns DzBoolProperty The “Depth of Field” property for this camera.
     * @since 4.15.1.84
     */
    getDepthOfFieldControl(): DzBoolProperty;

    /**
     * @returns DzStringProperty The “Dimension Preset” property for this camera.
     * @since 4.15.1.84
     */
    getDimensionPresetControl(): DzStringProperty;

    /**
     * Retrieves the settings of a dimensions preset.
     * @param preset string - The name of the preset to retrieve the settings for. An empty string is interpreted to mean “Custom.”
     * @param settings DzSettings - The settings object that the settings will be assigned to.
     * @returns boolean true if preset was found, otherwise false.
     * @since 4.9.3.108
     */
    getDimensionsPreset(preset: string, settings: DzSettings): boolean; // Boolean

    /**
     * @returns DzBoolProperty The “Display Persistence” property for this camera.
     * @since 4.15.1.84
     */
    getDisplayPersistenceControl(): DzBoolProperty;

    /**
     * @returns DzColorProperty The “DOF Overlay Color” property for this camera.
     * @since 4.15.1.84
     */
    getDofOverlayColorControl(): DzColorProperty;

    /**
     * @returns DzFloatProperty The “DOF Overlay Opacity” property for this camera.
     * @since 4.15.1.84
     */
    getDofOverlayOpacityControl(): DzFloatProperty;

    /**
     * @returns DzColorProperty The “DOF Plane Color” property for this camera.
     * @since 4.15.1.84
     */
    getDofPlaneColorControl(): DzColorProperty;

    /**
     * @returns DzBoolProperty The “DOF Plane Visibility” property for this camera.
     * @since 4.15.1.84
     */
    getDofPlaneVisibilityControl(): DzBoolProperty;

    /**
     * @returns DzBoolProperty The “Far DOF Plane Visibility” property for this camera.
     * @since 4.15.1.84
     */
    getFarDofPlaneVisibilityControl(): DzBoolProperty;

    /**
     * @returns DzFloatProperty The “Focal Distance” property for this camera.
     * @since 4.15.1.84
     */
    getFocalDistanceControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The “Focal Length (mm)” property for this camera.
     * @since 4.15.1.84
     */
    getFocalLengthControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The “Focal Point Scale” property for this camera.
     * @since 4.15.1.84
     */
    getFocalPointScaleControl(): DzFloatProperty;

    /**
     * @returns DzColorProperty The “FOV Color” property for this camera.
     * @since 4.15.1.84
     */
    getFovColorControl(): DzColorProperty;

    /**
     * @returns DzFloatProperty The “FOV Length” property for this camera.
     * @since 4.15.1.84
     */
    getFovLengthControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The “FOV Opacity” property for this camera.
     * @since 4.15.1.84
     */
    getFovOpacityControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The “Frame Width (mm)” property for this camera.
     * @since 4.15.1.84
     */
    getFrameWidthControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The “F/Stop” property for this camera.
     * @since 4.15.1.84
     */
    getFStopControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The “Headlamp Intensity” property for this camera.
     * @since 4.7.1.94
     */
    getHeadlampIntensityControl(): DzFloatProperty;

    /**
     * @returns DzEnumProperty The “Headlamp Mode” property for this camera.
     * @since 4.15.1.84
     */
    getHeadlampModeControl(): DzEnumProperty;

    /**
     * @returns DzFloatProperty The “Lens Distortion K1” property for this camera.
     * @since 4.9.3.121
     */
    getLensDistortionK1Control(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The “Lens Distortion K2” property for this camera.
     * @since 4.9.3.121
     */
    getLensDistortionK2Control(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The “Lens Distortion K3” property for this camera.
     * @since 4.9.3.121
     */
    getLensDistortionK3Control(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The “Lens Distortion K4” property for this camera.
     * @since 4.16.1.19
     */
    getLensDistortionK4Control(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The “Lens Distortion K5” property for this camera.
     * @since 4.16.1.19
     */
    getLensDistortionK5Control(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The “Lens Distortion Scale” property for this camera.
     * @since 4.9.3.121
     */
    getLensDistortionScaleControl(): DzFloatProperty;

    /**
     * @returns DzEnumProperty The “Lens Distortion Type” property for this camera.
     * @since 4.9.3.121
     */
    getLensDistortionTypeControl(): DzEnumProperty;

    /**
     * @returns DzFloatProperty The “Lens Maximum FOV” property for this camera.
     * @since 4.16.1.19
     */
    getLensMaximumFovControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The “Lens Radial Bias” property for this camera.
     * @since 4.9.3.121
     */
    getLensRadialBiasControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The “Lens Shift X” property for this camera in mm.
     * @since 4.9.3.121
     */
    getLensShiftXControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The “Lens Shift Y” property for this camera in mm.
     * @since 4.9.3.121
     */
    getLensShiftYControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The “Lens Stereo Offset” for this camera in mm.
     * @since 4.9.3.121
     */
    getLensStereoOffsetControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The “Lens Thickness” property for this camera. Thickness is in mm.
     * @since 4.8.0.16
     */
    getLensThicknessControl(): DzFloatProperty;

    /**
     * @returns DzBoolProperty The “Near DOF Plane Visibility” property for this camera.
     * @since 4.15.1.84
     */
    getNearDofPlaneVisibilityControl(): DzBoolProperty;

    /**
     * @returns DzBoolProperty The “Perspective” property for this camera.
     * @since 4.15.1.84
     */
    getPerspectiveControl(): DzBoolProperty;

    /**
     * @returns DzInt2Property The “Pixel Size” property for this camera.
     * @since 4.15.1.84
     */
    getPixelSizeControl(): DzInt2Property;

    /**
     * @returns DzFloatProperty The “Sight Line Opacity” property for this camera.
     * @since 4.15.1.84
     */
    getSightLineOpacityControl(): DzFloatProperty;

    /**
     * @returns DzBoolProperty The “Use Local Dimensions” property for this camera.
     * @since 4.15.1.84
     */
    getUseLocalDimensionsControl(): DzBoolProperty;

    /**
     * @returns DzFloatProperty The “X Headlamp Offset” property for this camera.
     * @since 4.15.1.84
     */
    getXHeadlampOffsetControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The “Y Headlamp Offset” property for this camera.
     * @since 4.15.1.84
     */
    getYHeadlampOffsetControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The “Z Headlamp Offset” property for this camera.
     * @since 4.15.1.84
     */
    getZHeadlampOffsetControl(): DzFloatProperty;

    /**
     * @returns boolean true if this camera is at default scene camera values, otherwise false.
     */
    isAtDefaultSceneCameraValues(): boolean; // Boolean

    /**
     * @returns boolean true if this camera is the default scene camera, otherwise false.
     */
    isDefaultSceneCamera(): boolean; // Boolean

    /**
     * @param yesNo boolean - If true, sets this camera as the default scene camera.
     */
    setIsDefaultSceneCamera(yesNo: boolean): void;

    /**
     * Changes the type of the camera.
     * @param type number - The new type for this camera.
     */
    setType(type: number): void;

    /**
     * Deprecated
     * @returns DzFloatProperty
     */
    getFrameWidthChannel(): DzFloatProperty;

    /**
     * Deprecated
     * @returns DzFloatProperty
     */
    getFocalLengthChannel(): DzFloatProperty;

    /**
     * Deprecated
     * @returns DzBoolProperty
     */
    getDepthOfFieldChannel(): DzBoolProperty;

    /**
     * Deprecated
     * @returns DzFloatProperty
     */
    getFocalDistChannel(): DzFloatProperty;

    /**
     * Deprecated
     * @returns DzFloatProperty
     */
    getFStopChannel(): DzFloatProperty;

    /**
     * Deprecated
     * @returns DzBoolProperty
     */
    getDisplayPersistenceChannel(): DzBoolProperty;

    /**
     * Deprecated
     * @returns DzFloatProperty
     */
    getSightLineOpacityChannel(): DzFloatProperty;

    /**
     * Deprecated
     * @returns DzFloatProperty
     */
    getFocalPointScaleChannel(): DzFloatProperty;

    /**
     * Deprecated
     * @returns DzColorProperty
     */
    getFovColorChannel(): DzColorProperty;

    /**
     * Deprecated
     * @returns DzFloatProperty
     */
    getFovOpacityChannel(): DzFloatProperty;

    /**
     * Deprecated
     * @returns DzFloatProperty
     */
    getFovLengthChannel(): DzFloatProperty;

    /**
     * Deprecated
     * @returns DzBoolProperty
     */
    getDofVisibilityChannel(): DzBoolProperty;

    /**
     * Deprecated
     * @returns DzColorProperty
     */
    getDofColorChannel(): DzColorProperty;

    /**
     * Deprecated
     * @returns DzColorProperty
     */
    getDofOverlayColorChannel(): DzColorProperty;

    /**
     * Deprecated
     * @returns DzFloatProperty
     */
    getDofOverlayOpacityChannel(): DzFloatProperty;

    /**
     * Deprecated
     * @returns DzBoolProperty
     */
    getNearDofVisibilityChannel(): DzBoolProperty;

    /**
     * Deprecated
     * @returns DzBoolProperty
     */
    getFarDofVisibilityChannel(): DzBoolProperty;

    /* Signals */

    /**
     * Emitted when the camera's depth of field setting has changed.
     */
    depthOfFieldChanged: ISignal<void>;

    /**
     * Emitted when the camera's f-Stop setting has changed.
     * @param range DzTimeRange
     */
    fStopChanged: ISignal<DzTimeRange>;
}
