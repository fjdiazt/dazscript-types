/**
 * A container for a collection of assets presented as a single entity.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/productassetcontainer_dz
 */
declare class DzProductAssetContainer extends DzRefCountedItem {

    /* Properties */

    /**
     * Holds the list of artist names associated with this product.
     * @since 4.9.0.2
     */
    artistNames: any[]; // Array

    /**
     * Holds the date this product was installed. Can be set (since 4.11.0.193) if isLocalUserStore is true (except where isLocalUser is true).
     * @since 4.9.0.2
     */
    dateInstalled: Date;

    /**
     * Holds the date this product was last updated. Can be set (since 4.11.0.193) if isLocalUserStore is true (except where isLocalUser is true).
     * @since 4.9.0.2
     */
    dateLastUpdated: Date;

    /**
     * Holds the date this product was purchased. Can be set (since 4.11.0.193) if isLocalUserStore is true (except where isLocalUser is true).
     * @since 4.9.0.2
     */
    datePurchased: Date;

    /**
     * Holds the date this product was released. Can be set (since 4.11.0.193) if isLocalUserStore is true (except where isLocalUser is true).
     * @since 4.9.0.2
     */
    dateReleased: Date;

    /**
     * Holds the vendor description of this product.
     */
    description: string; // String

    /**
     * Holds the group identifier for the product. 0 = default, < 0 = app defined, > 0 = user defined.
     * @since 4.9.0.11
     */
    groupId: number; // Number

    /**
     * Holds the Globally Unique Identifier (GUID) associated with this product. (Read Only)
     * @since 4.8.1.95
     */
    guid: string; // String

    /**
     * Holds whether this product has metadata provided by the cloud. (Read Only)
     * @since 4.9.0.2
     */
    hasCloudMetadata: boolean; // Boolean

    /**
     * Holds whether this product should be hidden in product views.
     * @since 4.9.0.2
     */
    hidden: boolean; // Boolean

    /**
     * Holds the path of the icon for this product. (Read Only)
     * @since 4.11.0.193
     */
    iconPath: string; // String

    /**
     * Holds whether this product can be installed from the cloud. (Read Only)
     * @since 4.9.0.10
     */
    isCloudInstallable: boolean; // Boolean

    /**
     * Holds whether this product is installed from the cloud. (Read Only)
     * @since 4.9.0.2
     */
    isCloudInstalled: boolean; // Boolean

    /**
     * Holds whether a cloud operation is currently occurring for this product. (Read Only)
     * @since 4.9.0.2
     */
    isCloudOperationInProgress: boolean; // Boolean

    /**
     * Holds whether this product is managed by the cloud. (Read Only)
     * @since 4.9.0.2
     */
    isCloudOwned: boolean; // Boolean

    /**
     * Holds whether this product is currently downloading from the cloud. (Read Only)
     * @since 4.9.0.2
     */
    isDownloadingFromCloud: boolean; // Boolean

    /**
     * Holds whether this product is installed. (Read Only)
     * @since 4.9.0.2
     */
    isInstalled: boolean; // Boolean

    /**
     * Holds whether this product is the special product that holds locally created assets. (Read Only)
     * @since 4.9.0.18
     */
    isLocalUser: boolean; // Boolean

    /**
     * Holds whether this product's store is the special store for locally created products. (Read Only)
     * @since 4.11.0.193
     */
    isLocalUserStore: boolean; // Boolean

    /**
     * Holds whether the metadata for this product is valid. (Read Only)
     * @since 4.9.0.2
     */
    isMetadataValid: boolean; // Boolean

    /**
     * Holds whether this product is owned by a vendor or by the user. (Read Only)
     */
    isVendor: boolean; // Boolean

    /**
     * Holds whether this product needs to be installed from the cloud. (Read Only)
     * @since 4.9.0.10
     */
    needsCloudInstall: boolean; // Boolean

    /**
     * Holds whether this product needs to be updated from the cloud. (Read Only)
     * @since 4.9.0.2
     */
    needsCloudUpdate: boolean; // Boolean

    /**
     * Holds the name of the store for this product. (Read Only)
     * @since 4.9.0.2
     */
    store: string; // String

    /**
     * Holds the store id for this product. (Read Only)
     * @since 4.20.0.11
     */
    storeID: number; // Number

    /**
     * Holds the title/name of this product.
     * @since 4.9.0.2
     */
    title: string; // String

    /**
     * Holds the token (i.e. SKU) for this product. (Read Only)
     * @since 4.9.0.2
     */
    token: string; // String

    /**
     * Holds the URL for this product.
     * @since 4.15.0.16
     */
    url: string; // String

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of ProductMetadataType.
     */
    static User: number;

    /**
     * DAZ enum member of ProductMetadataType.
     */
    static Vendor: number;

    /**
     * DAZ enum member of ProductMetadataType.
     */
    static UserAndVendor: number;

    /* Static Methods */

    /**
     * @returns Size The default store icon size.
     * @since 4.9.3.110
     */
    static getDefaultStoreIconSize(): Size;

    /* Methods */

    /**
     * Cancels any pending cloud operation on the product, if any.
     * @since 4.9.0.21
     */
    cancelFromCloud(): void;

    /**
     * Sets the product as belonging to the default group identifier; 0.
     * @since 4.9.0.11
     */
    clearGroup(): void;

    /**
     * @param metaType number - The type of categories to get.
     * @param installedAssets boolean - If true, only the categories of installed assets are included in the list, otherwise the categories of all assets regardless of installed state are included.
     * @returns any[] A list of the category paths associated with this product.
     * @since 4.9.0.54
     */
    getCategories(metaType?: number, installedAssets?: boolean): any[]; // Array

    /**
     * @returns Size The current icon size.
     */
    getIconSize(): Size;

    /**
     * @returns DzImage The image that is used to draw the icon for this product.
     * @since 4.11.0.193
     */
    getImage(): DzImage;

    /**
     * @param metaType number - The type of metadata to get.
     * @returns string The metadata for this product, in an XML string.
     * @since 4.9.0.11
     */
    getMetadataXML(metaType?: number): string; // String

    /**
     * @param userData boolean - If true, the basename of the file will reflect the user rather than the store.
     * @returns string The relative file path of the XML metadata file for this product.
     * @since 4.9.0.2
     */
    getMetadataXMLPath(userData?: boolean): string; // String

    /**
     * @returns string The relative path that this product installs too.
     * @since 4.12.1.100
     */
    getRelativeInstallPath(): string; // String

    /**
     * @param forceRefresh boolean - If true, ignores any previously cached list of support files and causes the database to be queried explicitly.
     * @returns any[] The list of files in this product that are not user facing.
     * @since 4.9.0.2
     */
    getSupportFiles(forceRefresh?: boolean): any[]; // Array

    /**
     * @returns string The URL associated with this product.
     */
    getURL(): string; // String

    /**
     * Installs a product from the cloud if it is not currently installed. The user will be prompted to authenticate if necessary.
     * @since 4.9.0.2
     */
    installFromCloud(): void;

    /**
     * @param group number
     * @returns boolean true if the product is belongs to group, otherwise false.
     * @since 4.9.0.11
     */
    isGroup(group: number): boolean; // Boolean

    /**
     * Loads the default icon for this product.
     * @returns boolean true if the icon was loaded, otherwise false.
     */
    loadDefaultIcon(): boolean; // Boolean

    /**
     * Causes the product image to be loaded.
     * @returns boolean true if the product image is loaded, otherwise false.
     */
    loadProductImage(): boolean; // Boolean

    /**
     * Pushes the metadata information into the database.
     * @returns boolean true if the metadata was successfully pushed to the database, otherwise false.
     * @since 4.9.0.2
     */
    pushMetadata(): boolean; // Boolean

    /**
     * Removes this product from the database.
     * @param notify boolean - If true (default), calls DzAssetMgr::updateProductContainers() immediately following successful removal from the database. Use false to suppress immediate notification - allows multiple products to be removed and notification to occur once all products to be removed, have been.
     * @returns boolean true if this product was successfully removed from the database, otherwise false.
     * @since 4.16.1.25
     */
    remove(notify?: boolean): boolean; // Boolean

    /**
     * Sets the icon size for this product container.
     * @param size Size - The new icon size.
     */
    setIconSize(size: Size): void;

    /**
     * Sets the image that will be used to draw the icon for this product.
     * @param img DzImage - The new image for this product.
     * @since 4.11.0.193
     */
    setImage(img: DzImage): void;

    /**
     * Sets the URL for this product.
     * @param url string - The URL to use for this product.
     */
    setURL(url: string): void;

    /**
     * Uninstalls the product if it is currently installed.
     * @since 4.9.0.2
     */
    uninstall(): void;

    /**
     * Uninstalls the product if it is currently installed.
     * @since 4.9.0.2
     */
    uninstallFromCloud(): void;

    /**
     * Updates the product if no other operations are currently being performed on it. The user will be prompted to authenticate if necessary.
     * @since 4.9.0.2
     */
    updateFromCloud(): void;

    /**
     * Updates the metadata for this product. The user will be prompted to authenticate if necessary.
     * @param force boolean - If true, any cached data will be discarded and force a connection to be made.
     * @since 4.9.0.32
     */
    updateMetaDataFromCloud(force?: boolean): void;

    /* Undocumented Augment Members */

    /** @undocumented */
    objectName: string; //

    /** @undocumented */
    id: string; // a5c4ee6f-0f10-4ba2-8777-4a24a2873b10

    /** @undocumented */
    icon: object; // QVariant(QIcon)

    /** @undocumented */
    tooltip: string; // <table style='white-space:pre' cellspacing=0 cellpadding=2><tr><td align='center'><img src="G:/3D/DazStudio/Libraries/DAZ Content Library/runtime/support/daz_3d_64191_adventure_outfit_for_genesis_8_female(s).jpg"/></td></tr><tr><td align='center'><h3>Adventure Outfit for Genesis 8 Female(s)</h3></td></tr><tr><td align='center'>Double Click to Explore<br/>Right Click for Options</td></tr></table>

    /** @undocumented */
    canCopyContainers: boolean; // false

    /** @undocumented */
    canInsertSubContainer: boolean; // false

    /** @undocumented */
    canDeleteContainer: boolean; // true

    /** @undocumented */
    canRenameContainer: boolean; // true

    /** @undocumented */
    canModifyAssets: boolean; // true

    /** @undocumented */
    useCount: number; // -1

    /** @undocumented */
    price: number; // -1

    /** @undocumented */
    salePrice: number; // -1

    /** @undocumented */
    platinumPrice: number; // -1

    /** @undocumented */
    artists: string; // Luthbellina

    /** @undocumented */
    name: string; //

    /** @undocumented */
    _clone: any;

    /** @undocumented */
    _getMethodsNames: any;

    /** @undocumented */
    assetRenamed(p0: DzAsset, p1: number): any;

    /** @undocumented */
    beginAssetAdd(p0: number, p1: number): any;

    /** @undocumented */
    beginAssetRemove(p0: number, p1: number): any;

    /** @undocumented */
    beginChildContainerAdd(p0: DzAbstractAssetContainer, p1: number, p2: number): any;

    /** @undocumented */
    beginChildContainerRemove(p0: DzAbstractAssetContainer, p1: number, p2: number): any;

    /** @undocumented */
    childContainerAboutToBeRemoved(p0: DzAbstractAssetContainerPtr): any;

    /** @undocumented */
    childContainerRemoved(p0: DzAbstractAssetContainerPtr): any;

    /** @undocumented */
    className: any;

    /** @undocumented */
    clearRebuildableAssets(): any;

    /** @undocumented */
    createNewChildContainer(p0: string): any;

    /** @undocumented */
    deleteLater(): any;

    /** @undocumented */
    destroyed(): any;

    /** @undocumented */
    destroyed(p0: QObject): any;

    /** @undocumented */
    endAssetAdd(): any;

    /** @undocumented */
    endAssetRemove(): any;

    /** @undocumented */
    endChildContainerAdd(): any;

    /** @undocumented */
    endChildContainerRemove(): any;

    /** @undocumented */
    getAsset(p0: number): any;

    /** @undocumented */
    getAssets(): DzAsset[];

    /** @undocumented */
    getAssets(p0: DzAsset[]): any;

    /** @undocumented */
    getChildContainer(p0: number): any;

    /** @undocumented */
    getChildContainers(): any;

    /** @undocumented */
    getChildContainers(p0: DzAbstractAssetContainer[]): any;

    /** @undocumented */
    getChildIconSize(): any;

    /** @undocumented */
    getContainerName(): any;

    /** @undocumented */
    getDefualtStoreIconSize(): any;

    /** @undocumented */
    getIDPath(): any;

    /** @undocumented */
    getIconForStandardCategory(p0: DzProductAssetContainer): any;

    /** @undocumented */
    getNumAssets(): any;

    /** @undocumented */
    getNumChildContainers(): any;

    /** @undocumented */
    getOwner(): any;

    /** @undocumented */
    getProductTable(): any;

    /** @undocumented */
    getRealtiveInstallPath(): any;

    /** @undocumented */
    getSmallChildIconSize(): any;

    /** @undocumented */
    getSupportFile(): any;

    /** @undocumented */
    hasAsset(p0: DzAsset): any;

    /** @undocumented */
    hasChildContainers(): any;

    /** @undocumented */
    ignoreAssetConflicts(): any;

    /** @undocumented */
    inherits: any;

    /** @undocumented */
    initChildren(): any;

    /** @undocumented */
    insertAsset(p0: DzAsset): any;

    /** @undocumented */
    insertChildContainer(p0: DzAbstractAssetContainer): any;

    /** @undocumented */
    isFileSystemBased(): any;

    /** @undocumented */
    moveFromParent(p0: DzAbstractAssetContainer): any;

    /** @undocumented */
    removeAsset(p0: DzAsset): any;

    /** @undocumented */
    removeAssetCausesDelete(): any;

    /** @undocumented */
    removeAssetOnCut(p0: DzAbstractAssetContainer): any;

    /** @undocumented */
    removeChildContainer(p0: DzAbstractAssetContainer): any;

    /** @undocumented */
    rename(p0: string): any;

    /** @undocumented */
    renameAsset(p0: DzAsset, p1: string): any;

    /** @undocumented */
    renameChildContainer(p0: DzAbstractAssetContainer, p1: string): any;

    /** @undocumented */
    setContainerName(p0: string): any;

    /** @undocumented */
    setIconImage(p0: QImage): any;

    /** @undocumented */
    update(): any;

    /** @undocumented */
    updateAssets(): any;

    /** @undocumented */
    updateChildren(): any;

    /** @undocumented */
    iconChanged(p0: DzAbstractAssetContainer): any;

    /** @undocumented */
    assetIconChanged(p0: DzAsset): any;
}
