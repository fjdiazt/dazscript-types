/**
 * Base class for all lights. A light that emits in one direction.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/distantlight_dz
 */
declare class DzDistantLight extends DzLight {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of AreaShape.
     */
    static Point: number;

    /**
     * DAZ enum member of AreaShape.
     */
    static Rectangle: number;

    /**
     * DAZ enum member of AreaShape.
     */
    static Disc: number;

    /**
     * DAZ enum member of AreaShape.
     */
    static Sphere: number;

    /**
     * DAZ enum member of AreaShape.
     */
    static Cylinder: number;

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * @returns DzColorProperty The property that controls the color this light
     */
    getDiffuseColorControl(): DzColorProperty;

    /**
     * @returns number The far clipping plane when viewing from the light in OpenGL
     */
    getFarClippingPlane(): number; // Number

    /**
     * @returns number The luminous flux of the light.
     * @since 4.8.0.18
     */
    getFlux(): number; // Number

    /**
     * @returns DzEnumProperty The property that controls Illumination for this light
     */
    getIlluminationControl(): DzEnumProperty;

    /**
     * @returns number The current light intensity.
     */
    getIntensity(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls the intensity of this light
     */
    getIntensityControl(): DzFloatProperty;

    /**
     * @returns number The current light intensity scale.
     * @since 4.8.0.18
     */
    getIntensityScale(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls the intensity scale.
     * @since 4.8.0.18
     */
    getIntensityScaleControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The property that controls the luminous flux of the light.
     * @since 4.8.0.18
     */
    getLightFluxControl(): DzFloatProperty;

    /**
     * @returns number The type of geometry for the light; 0 = Point, 1 = Rectangle, 2 = Disc, 3 = Sphere, 4 = Cylinder.
     * @since 4.8.0.18
     */
    getLightGeometry(): number; // AreaShape

    /**
     * @returns DzEnumProperty The property that controls the geometry of the light.
     * @since 4.8.0.18
     */
    getLightGeometryControl(): DzEnumProperty;

    /**
     * @returns number The height of the light (emitter) geometry, as measured in centimeters, in local space.
     * @since 4.8.0.18
     */
    getLightHeight(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls the height of the light.
     * @since 4.8.0.18
     */
    getLightHeightControl(): DzFloatProperty;

    /**
     * @returns DzBoolProperty The property that controls whether or not the light represents a light portal.
     * @since 4.9.2.61
     */
    getLightPortalControl(): DzBoolProperty;

    /**
     * @returns number The color temperature of the light, as measured in Kelvin (K).
     * @since 4.12.1.108
     */
    getLightTemperature(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls the temperature of the light.
     * @since 4.8.0.18
     */
    getLightTemperatureControl(): DzFloatProperty;

    /**
     * @returns boolean true if the light is two-sided (emits light in both directions), otherwise false.
     * @since 4.8.0.18
     */
    getLightTwoSided(): boolean; // Boolean

    /**
     * @returns DzBoolProperty The property that controls whether the light is two sided.
     * @since 4.8.0.18
     */
    getLightTwoSidedControl(): DzBoolProperty;

    /**
     * @returns number The width of the light (emitter) geometry, as measured in centimeters, in local space.
     * @since 4.8.0.18
     */
    getLightWidth(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls the width (diameter) of the light.
     * @since 4.8.0.18
     */
    getLightWidthControl(): DzFloatProperty;

    /**
     * @returns number The near clipping plane when viewing from the light in OpenGL
     */
    getNearClippingPlane(): number; // Number

    /**
     * @returns DzBoolProperty The property that controls whether the light is in physically-based mode.
     * @since 4.8.0.18
     */
    getPhotometricModeControl(): DzBoolProperty;

    /**
     * @returns DzBoolProperty The property that controls whether the emitter is rendered.
     * @since 4.8.0.18
     */
    getRenderEmitterControl(): DzBoolProperty;

    /**
     * @returns DzFloatProperty The property that controls the bias for the shadow of this light
     */
    getShadowBiasControl(): DzFloatProperty;

    /**
     * @returns DzColorProperty The property that controls the color this light
     */
    getShadowColorControl(): DzColorProperty;

    /**
     * @returns DzFloatProperty The property that controls the shadow intensity of this light
     */
    getShadowIntensityControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The property that controls the softness for the shadow of this light
     */
    getShadowSoftnessControl(): DzFloatProperty;

    /**
     * @returns boolean true if this light represents a light portal, otherwise false.
     * @since 4.9.2.61
     */
    isLightPortal(): boolean; // Boolean

    /**
     * @returns boolean true if the light is in photometric mode (physically based), otherwise false.
     * @since 4.8.0.18
     */
    photometricMode(): boolean; // Boolean

    /**
     * @returns boolean true if the geometry of the light (emitter) should be rendered, otherwise false.
     * @since 4.8.0.18
     */
    renderEmitter(): boolean; // Boolean
}
