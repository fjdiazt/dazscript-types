declare class DzCategoryAssetContainer extends DzAbstractAssetContainer {

    /* Properties */
    id: string;
    icon: QObject;
    tooltip: string;
    canCopyContainers: boolean;
    canInsertSubContainer: boolean;
    canDeleteContainer: boolean;
    canRenameContainer: boolean;
    canModifyAssets: boolean;
    useCount: number;

    /* Methods */
    updateChildren(): boolean;
    getIconForStandardCategory(folder: DzCategoryAssetContainer): DzPixmapPair;
    getCategoryTable(): DzDBCategoriesTable;
}