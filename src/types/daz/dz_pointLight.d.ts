/**
 * A light that emits in all directions from a single point.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/pointlight_dz
 */
declare class DzPointLight extends DzDistantLight {

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * @returns number The amount of decay.
     * @since 4.9.3.145
     */
    getDecay(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls the decay.
     */
    getDecayControl(): DzFloatProperty;

    /**
     * @returns boolean true if the sphere will be displayed when the node is not selected, otherwise false.
     * @since 4.9.3.145
     */
    getDisplayPersistence(): boolean; // Boolean

    /**
     * @returns DzBoolProperty The property that controls the display persistence.
     * @since 4.9.3.145
     */
    getDisplayPersistenceControl(): DzBoolProperty;

    /**
     * @param lightPercent number
     * @returns number The distance at which the illumination from this light falls off.
     * @since 4.8.0.9
     */
    getFalloffDistance(lightPercent: number): number; // Number

    /**
     * @returns string The path to the IES Light Profile (if any), or an empty string.
     * @since 4.8.0.18
     */
    getLightProfile(): string; // String

    /**
     * @returns DzFileProperty The property that controls the IES profile of the light.
     * @since 4.8.0.18
     */
    getLightProfileControl(): DzFileProperty;

    /**
     * @returns boolean true if the light contributes to the scene, otherwise false.
     */
    getLightVisibility(): boolean; // Boolean

    /**
     * @returns number The opacity of the display sphere.
     * @since 4.9.3.145
     */
    getSphereOpacity(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls the opacity of the sphere.
     * @since 4.9.3.145
     */
    getSphereOpacityControl(): DzFloatProperty;

    /**
     * Sets the amount of decay.
     * @param decay number - The amount of decay to set.
     * @since 4.9.3.145
     */
    setDecay(decay: number): void;

    /**
     * Sets the persistance of the display sphere.
     * @param persistence boolean - If true, the sphere will be displayed when the node is not selected. If false, the sphere will not be displayed when the node is not selected.
     * @since 4.9.3.145
     */
    setDisplayPersistence(persistence: boolean): void;

    /**
     * Sets the path of the IES light profile.
     * @param profilePath string - The path of the IES profile to set.
     * @since 4.9.3.145
     */
    setLightProfile(profilePath: string): void;

    /**
     * Sets the opacity of the display sphere.
     * @param opacity number - The opacity to set.
     * @since 4.9.3.145
     */
    setSphereOpacity(opacity: number): void;
}
