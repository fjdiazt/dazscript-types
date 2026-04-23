/**
 * A container type for collecting product search results.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/productholdercontainer_dz
 */
declare class DzProductHolderContainer extends DzRefCountedItem {

    /* Methods */

    /**
     * Attempts to insert the given container as a child to this container.
     * @param container DzProductAssetContainer - The container to insert as a child.
     * @returns boolean true if the child was successfully added, otherwise false.
     */
    insertChildProductContainer(container: DzProductAssetContainer): boolean; // Boolean
}
