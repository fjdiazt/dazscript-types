/**
 * A modifier that generates geometry along polylines.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/linetessellationmodifier_dz
 */
declare class DzLineTessellationModifier extends DzMeshModifier {

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * @returns number The number sides to create for a render.
     */
    getNumRenderSides(): number; // Number

    /**
     * @returns number The number sides to draw in the viewport.
     */
    getNumViewportSides(): number; // Number

    /**
     * @returns DzIntProperty The property for controlling the number of sides to create for a render.
     */
    getRenderSidesControl(): DzIntProperty;

    /**
     * @returns DzIntProperty The property for controlling the number of sides to draw in the viewport.
     */
    getViewportSidesControl(): DzIntProperty;
}
