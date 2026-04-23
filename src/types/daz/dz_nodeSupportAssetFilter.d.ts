/**
 * Class for saving DSON-based Figure or Prop Support Assets.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/nodesupportassetfilter_dz
 */
declare class DzNodeSupportAssetFilter extends DzAssetFileOutFilter {

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * @returns DzNode The node set (if any) on this save filter.
     */
    getSetNode(): DzNode;

    /**
     * Sets a node to save support assets for.
     * @param node DzNode - The node to set.
     */
    setNode(node: DzNode): void;
}
