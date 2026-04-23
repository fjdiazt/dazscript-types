/**
 * Base class for all lights.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/light_dz
 */
declare class DzLight extends DzCamera {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of ShadowType.
     */
    static None: number;

    /**
     * DAZ enum member of ShadowType.
     */
    static DeepShadowMap: number;

    /**
     * DAZ enum member of ShadowType.
     */
    static Raytraced: number;

    /* Methods */

    /**
     * @returns any[] A list of [trimmed] categories on this light.
     * @since 4.8.0.7
     */
    getCategories(): any[]; // Array

    /**
     * @returns DzStringProperty The property that holds the categories for this light.
     * @since 4.8.0.7
     */
    getCategoriesControl(): DzStringProperty;

    /**
     * @returns Color The current diffuse light color, including adjustment for intensity.
     */
    getDiffuseColor(): Color;

    /**
     * @returns number The enumerated value indicating the type of shadow utilized by the light.
     */
    getShadowType(): number; // ShadowType

    /**
     * @returns DzEnumProperty The property used to indicate the type of shadow utilized by the light.
     */
    getShadowTypeControl(): DzEnumProperty;

    /**
     * Calculates the direction that light is being cast from this light.
     * @returns DzVec3 The current world-space light-casting direction vector.
     */
    getWSDirection(): DzVec3;

    /**
     * @returns boolean true if this is an area light source, otherwise false. If true, the light source center will be given by the position of the light. Additional light geometry will be defined in the derived classes.
     */
    isAreaLight(): boolean; // Boolean

    /**
     * Indicates if this light is an infinite directional light.
     * @returns boolean true if this light is directional, otherwise (e.g., omni-directional) false.
     */
    isDirectional(): boolean; // Boolean

    /**
     * @returns boolean true if this light is currently on, otherwise false.
     */
    isOn(): boolean; // Boolean

    /* Signals */

    /**
     * Emitted when the categories that a light is in changes.
     */
    categoriesChanged: ISignal<void>;
}
