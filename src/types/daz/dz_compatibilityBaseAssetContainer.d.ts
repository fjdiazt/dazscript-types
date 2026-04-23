/**
 * A container type for assets that are compatible with a particular compatibility base.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/compatibilitybaseassetcontainer_dz
 */
declare class DzCompatibilityBaseAssetContainer extends DzRefCountedItem {

    /* Properties */

    /**
     * Holds whether or not this compatibility base is a filter. (Read Only)
     * @since 4.11.0.93
     */
    isFilter: boolean; // Boolean

    /**
     * Holds whether this compatibility base is owned by a vendor or by the user. (Read Only)
     * @since 4.11.0.93
     */
    isVendor: boolean; // Boolean

    /* Methods */

    /**
     * @returns string The full path of the compatibility base that this container represents.
     * @since 4.11.0.93
     */
    getPath(): string; // String

    /**
     * Attempts to update the child containers of this container.
     * @returns boolean true if the update was successful, otherwise false.
     */
    updateChildren(): boolean; // Boolean
}
