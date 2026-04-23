/**
 * The 3Delight renderer.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/delightrenderer_dz
 */
declare class DzDelightRenderer extends DzRenderer {

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * Resets the handler used for Interactive Progressive Rendering (IPR).
     */
    resetIPRHandler(): void;
}
