/**
 * A container type for assets that are assigned a particular classification.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/categoryassetcontainer_dz
 */
declare class DzCategoryAssetContainer extends DzRefCountedItem {

    /* Properties */

    /**
     * Holds whether this category is owned by a vendor or by the user. (Read Only)
     * @since 4.9.3.110
     */
    isVendor: boolean; // Boolean

    /* Methods */

    /**
     * @param userFacing boolean - Whether or not to limit the list to user-facing assets.
     * @param installed boolean - Whether or not to limit the list to installed assets.
     * @returns any[] A list of assets associated with the path of this container, matching the criteria specified.
     * @since 4.9.3.56
     */
    getAssetsInCategory(userFacing?: boolean, installed?: boolean): any[]; // Array

    /**
     * @returns string The full path of the category that this container represents.
     * @since 4.9.2.48
     */
    getPath(): string; // String

    /**
     * Updates the container using the data that is currently stored in the database.
     */
    updateRow(): void;

    /* Undocumented Augment Members */

    /** @undocumented */
    id: string;

    /** @undocumented */
    icon: QObject;

    /** @undocumented */
    tooltip: string;

    /** @undocumented */
    canCopyContainers: boolean;

    /** @undocumented */
    canInsertSubContainer: boolean;

    /** @undocumented */
    canDeleteContainer: boolean;

    /** @undocumented */
    canRenameContainer: boolean;

    /** @undocumented */
    canModifyAssets: boolean;

    /** @undocumented */
    useCount: number;

    /** @undocumented */
    updateChildren(): boolean;

    /** @undocumented */
    getIconForStandardCategory(folder: DzCategoryAssetContainer): DzPixmapPair;

    /** @undocumented */
    getCategoryTable(): DzDBCategoriesTable;
}
