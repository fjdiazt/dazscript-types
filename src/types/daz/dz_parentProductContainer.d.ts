/**
 * An intermadiate product container that holds product containers which bear the same first significant character in their respective titles.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/parentproductcontainer_dz
 */
declare class DzParentProductContainer extends DzRefCountedItem {

    /* Methods */

    /**
     * Attempts to update the child containers of this container.
     * @returns boolean true if the update was successful, otherwise false.
     */
    updateChildren(): boolean; // Boolean
}
