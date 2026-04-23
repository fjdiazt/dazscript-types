/**
 * A basic spotlight.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/spotlight_dz
 */
declare class DzSpotLight extends DzDistantLight {

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * @returns number The (scaled) base opacity.
     * @since 4.9.3.145
     */
    getBaseOpacity(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls the base opacity.
     * @since 4.9.3.145
     */
    getBaseOpacityControl(): DzFloatProperty;

    /**
     * @returns number The beam distribution.
     * @since 4.9.3.145
     */
    getBeamDistribution(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls beam distribution.
     */
    getBeamDistributionControl(): DzFloatProperty;

    /**
     * @returns number The decay of the light.
     * @since 4.9.3.145
     */
    getDecay(): number; // Number

    /**
     * @returns DzFloatProperty The property used to control decay.
     */
    getDecayControl(): DzFloatProperty;

    /**
     * @returns boolean true if the cone will be displayed when the node is not selected, otherwise false.
     * @since 4.9.3.145
     */
    getDisplayPersistence(): boolean; // Boolean

    /**
     * @returns DzBoolProperty The property that controls the display persistence.
     * @since 4.9.3.145
     */
    getDisplayPersistenceControl(): DzBoolProperty;

    /**
     * @returns number The (scaled) edge opacity.
     * @since 4.9.3.145
     */
    getEdgeOpacity(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls the edge opacity.
     * @since 4.9.3.145
     */
    getEdgeOpacityControl(): DzFloatProperty;

    /**
     * @param lightPercent number
     * @returns number
     */
    getFalloffDistance(lightPercent: number): number; // Number

    /**
     * @returns number The exponent (rate of decay from center to edge) of the light.
     * @since 4.8.0.18
     */
    getLightExponent(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls the beam exponent of the light.
     * @since 4.8.0.18
     */
    getLightExponentControl(): DzFloatProperty;

    /**
     * @returns boolean
     */
    getLightVisibility(): boolean; // Boolean

    /**
     * @returns number
     */
    getLineOpacity(): number; // Number

    /**
     * @returns number The opacity scale.
     * @since 4.9.3.145
     */
    getOpacityScale(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls the opacity scale.
     * @since 4.9.3.145
     */
    getOpacityScaleControl(): DzFloatProperty;

    /**
     * @returns number The ray length.
     * @since 4.9.3.145
     */
    getRayLength(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls the ray length.
     * @since 4.9.3.145
     */
    getRayLengthControl(): DzFloatProperty;

    /**
     * @returns number The (scaled) ray opacity.
     * @since 4.9.3.145
     */
    getRayOpacity(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls the ray opacity.
     * @since 4.9.3.145
     */
    getRayOpacityControl(): DzFloatProperty;

    /**
     * @returns boolean true if the base should be shown, otherwise false.
     * @since 4.9.3.145
     */
    getShowBase(): boolean; // Boolean

    /**
     * @returns DzBoolProperty The property that controls whether or not to show the base control.
     * @since 4.9.3.145
     */
    getShowBaseControl(): DzBoolProperty;

    /**
     * @returns boolean true if the edge should be shown, otherwise false.
     * @since 4.9.3.145
     */
    getShowEdge(): boolean; // Boolean

    /**
     * @returns DzBoolProperty The property that controls whether or not to show the edge control.
     * @since 4.9.3.145
     */
    getShowEdgeControl(): DzBoolProperty;

    /**
     * @returns number The spread angle of the light.
     * @since 4.9.3.145
     */
    getSpreadAngle(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls the outer spread angle of the light.
     */
    getSpreadAngleControl(): DzFloatProperty;

    /**
     * Sets the base opacity.
     * @param opacity number - The opacity to set.
     * @since 4.9.3.145
     */
    setBaseOpacity(opacity: number): void;

    /**
     * Sets beam distribution.
     * @param distribution number - The beam distribution to set.
     * @since 4.9.3.145
     */
    setBeamDistribution(distribution: number): void;

    /**
     * Sets the amount of decay.
     * @param decay number - The decay to set.
     * @since 4.9.3.145
     */
    setDecay(decay: number): void;

    /**
     * Sets the persistance of the display cone.
     * @param persistence boolean - If true, the cone will be displayed when the node is not selected. If false, the cone will not be displayed when the node is not selected.
     * @since 4.9.3.145
     */
    setDisplayPersistence(persistence: boolean): void;

    /**
     * Sets the edge opacity.
     * @param opacity number - The opacity to set.
     * @since 4.9.3.145
     */
    setEdgeOpacity(opacity: number): void;

    /**
     * Sets the exponent (rate of decay from center to edge) of the light.
     * @param exponent number - The exponent to set.
     * @since 4.9.3.145
     */
    setLightExponent(exponent: number): void;

    /**
     * Sets the opacity scale.
     * @param scale number - The scale to set.
     * @since 4.9.3.145
     */
    setOpacityScale(scale: number): void;

    /**
     * Sets the ray length.
     * @param length number - The length to set.
     * @since 4.9.3.145
     */
    setRayLength(length: number): void;

    /**
     * Sets the ray opacity.
     * @param opacity number - The opacity to set.
     * @since 4.9.3.145
     */
    setRayOpacity(opacity: number): void;

    /**
     * Sets whether or not to show the base.
     * @param yesNo boolean - If true, the base will be shown.
     * @since 4.9.3.145
     */
    setShowBase(yesNo: boolean): void;

    /**
     * Sets whether or not to show the edge.
     * @param yesNo boolean - If true, the edge will be shown.
     * @since 4.9.3.145
     */
    setShowEdge(yesNo: boolean): void;

    /**
     * Sets the spread angle.
     * @param spreadAngle number - The angle to set.
     * @since 4.9.3.145
     */
    setSpreadAngle(spreadAngle: number): void;
}
