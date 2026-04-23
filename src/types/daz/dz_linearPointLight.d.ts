/**
 * A light that emits in all directions from a single point and has fall off start/end controls.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/linearpointlight_dz
 */
declare class DzLinearPointLight extends DzPointLight {

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * @returns number The distance from the origin of the node where the intensity reaches 0.
     * @since 4.9.3.145
     */
    getFallOffEnd(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls the distance from the origin of the node where the intensity reaches 0.
     */
    getFallOffEndControl(): DzFloatProperty;

    /**
     * @returns number The distance from the origin of the node where the intensity begins to decrease.
     * @since 4.9.3.145
     */
    getFallOffStart(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls the distance from the origin of the node where the intensity begins to decrease.
     */
    getFallOffStartControl(): DzFloatProperty;

    /**
     * Sets the distance from the origin of the node where the intensity reaches 0.
     * @param end number - The distance from the origin to set.
     * @since 4.9.3.145
     */
    setFallOffEnd(end: number): void;

    /**
     * Sets the distance from the origin of the node where the intensity begins to decrease.
     * @param start number - The distance from the origin to set.
     * @since 4.9.3.145
     */
    setFallOffStart(start: number): void;
}
