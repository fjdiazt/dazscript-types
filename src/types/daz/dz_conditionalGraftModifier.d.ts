/**
 * A modifier that conditionally “grafts” (integrates) the geometry of one figure to the geometry of another.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/conditionalgraftmodifier_dz
 */
declare class DzConditionalGraftModifier extends DzMeshModifier {

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * @returns number The vertex count of the geometry that this modifier applies to.
     * @since 4.9.3.137
     */
    getTargetVertexCount(): number; // Number

    /**
     * @returns DzBoolProperty The property that enables/disables this graft modifier.
     * @since 4.9.3.137
     */
    getValueControl(): DzBoolProperty;

    /**
     * Set the vertex count for this modifier.
     * @param vertCount number - The total number of vertices in the mesh that this modifier applies to.
     * @since 4.9.3.137
     */
    setTargetVertexCount(vertCount: number): void;
}
