declare class DzProductAssetContainer { //aka  DzTSharedPointerScriptWrapper

    // Properties
    objectName: string; //
    id: string; // a5c4ee6f-0f10-4ba2-8777-4a24a2873b10
    icon: object; // QVariant(QIcon)
    tooltip: string; // <table style='white-space:pre' cellspacing=0 cellpadding=2><tr><td align='center'><img src="G:/3D/DazStudio/Libraries/DAZ Content Library/runtime/support/daz_3d_64191_adventure_outfit_for_genesis_8_female(s).jpg"/></td></tr><tr><td align='center'><h3>Adventure Outfit for Genesis 8 Female(s)</h3></td></tr><tr><td align='center'>Double Click to Explore<br/>Right Click for Options</td></tr></table>
    canCopyContainers: boolean; // false
    canInsertSubContainer: boolean; // false
    canDeleteContainer: boolean; // true
    canRenameContainer: boolean; // true
    canModifyAssets: boolean; // true
    useCount: number; // -1
    price: number; // -1
    salePrice: number; // -1
    platinumPrice: number; // -1
    artists: string; // Luthbellina
    isMetadataValid: boolean; // true
    isLocalUser: boolean; // false
    isLocalUserStore: boolean; // false
    needsCloudInstall: boolean; // false
    needsCloudUpdate: boolean; // false
    hasCloudMetadata: boolean; // false
    isCloudOwned: boolean; // false
    isCloudInstallable: boolean; // false
    isDownloadingFromCloud: boolean; // false
    isCloudOperationInProgress: boolean; // false
    isCloudInstalled: boolean; // false
    isInstalled: boolean; // true
    guid: string; // a5c4ee6f-0f10-4ba2-8777-4a24a2873b10
    store: string; // DAZ 3D
    token: string; // 64191
    storeID: number; // 1
    url: string; // http://www.daz3d.com/i/shop/itemdetails/?item=64191
    title: string; // Adventure Outfit for Genesis 8 Female(s)
    artistNames: object; // Luthbellina
    description: string; //
    groupId: number; // 0
    iconPath: string; // G:/3D/DazStudio/Libraries/DAZ Content Library/runtime/support/daz_3d_64191_adventure_outfit_for_genesis_8_female(s).jpg
    hidden: boolean; // false
    dateLastUpdated: object; // Thu Aug 04 2022 22:44:12 GMT-0400 (Pacific SA Standard Time)
    datePurchased: object; // Sat Dec 18 2021 12:07:25 GMT-0300 (Pacific SA Daylight Time)
    dateInstalled: object; // Sat Dec 18 2021 12:07:25 GMT-0300 (Pacific SA Daylight Time)
    dateReleased: object; // Thu Aug 04 2022 22:44:12 GMT-0400 (Pacific SA Standard Time)
    isVendor: boolean; // true
    name: string; //

    // Methods
    _clone: any;
    _getMethodsNames: any;
    assetRenamed(p0: DzAsset, p1: number): any;
    beginAssetAdd(p0: number, p1: number): any;
    beginAssetRemove(p0: number, p1: number): any;
    beginChildContainerAdd(p0: DzAbstractAssetContainer, p1: number, p2: number): any;
    beginChildContainerRemove(p0: DzAbstractAssetContainer, p1: number, p2: number): any;
    cancelFromCloud(): any;
    childContainerAboutToBeRemoved(p0: DzAbstractAssetContainerPtr): any;
    childContainerRemoved(p0: DzAbstractAssetContainerPtr): any;
    className: any;
    clearGroup(): any;
    clearRebuildableAssets(): any;
    createNewChildContainer(p0: string): any;
    deleteLater(): any;
    destroyed(): any;
    destroyed(p0: QObject): any;
    endAssetAdd(): any;
    endAssetRemove(): any;
    endChildContainerAdd(): any;
    endChildContainerRemove(): any;
    getAsset(p0: number): any;
    getAssets(): DzAsset[];
    getAssets(p0: DzAsset[]): any;
    getCategories(): string[];
    // getCategories(p0:ProductMetadataType): any;
    // getCategories(p0:ProductMetadataType, p1:boolean): any;
    getChildContainer(p0: number): any;
    getChildContainers(): any;
    getChildContainers(p0: DzAbstractAssetContainer[]): any;
    getChildIconSize(): any;
    getContainerName(): any;
    getDefaultStoreIconSize(): any;
    getDefualtStoreIconSize(): any;
    getIDPath(): any;
    getIconForStandardCategory(p0: DzProductAssetContainer): any;
    getIconSize(): any;
    getImage(): any;
    getMetadataXML(): any;
    // getMetadataXML(p0:ProductMetadataType): any;
    getMetadataXMLPath(): any;
    getMetadataXMLPath(p0: boolean): any;
    getNumAssets(): any;
    getNumChildContainers(): any;
    getOwner(): any;
    getProductTable(): any;
    getRealtiveInstallPath(): any;
    getRelativeInstallPath(): any;
    getSmallChildIconSize(): any;
    getSupportFile(): any;
    getSupportFiles(): any;
    getSupportFiles(p0: boolean): any;
    getURL(): any;
    hasAsset(p0: DzAsset): any;
    hasChildContainers(): any;
    ignoreAssetConflicts(): any;
    inherits: any;
    initChildren(): any;
    insertAsset(p0: DzAsset): any;
    insertChildContainer(p0: DzAbstractAssetContainer): any;
    installFromCloud(): any;
    isFileSystemBased(): any;
    isGroup(p0: number): any;
    loadDefaultIcon(): any;
    loadProductImage(): any;
    moveFromParent(p0: DzAbstractAssetContainer): any;
    pushMetadata(): any;
    remove(): any;
    remove(p0: boolean): any;
    removeAsset(p0: DzAsset): any;
    removeAssetCausesDelete(): any;
    removeAssetOnCut(p0: DzAbstractAssetContainer): any;
    removeChildContainer(p0: DzAbstractAssetContainer): any;
    rename(p0: string): any;
    renameAsset(p0: DzAsset, p1: string): any;
    renameChildContainer(p0: DzAbstractAssetContainer, p1: string): any;
    setContainerName(p0: string): any;
    setIconImage(p0: QImage): any;
    setIconSize(p0: QSize): any;
    setImage(p0: QImage): any;
    setURL(p0: string): any;
    uninstall(): any;
    uninstallFromCloud(): any;
    update(): any;
    updateAssets(): any;
    updateChildren(): any;
    updateFromCloud(): any;
    updateMetaDataFromCloud(): any;
    updateMetaDataFromCloud(p0: boolean): any;

    // Signals
    iconChanged(p0: DzAbstractAssetContainer): any;
    assetIconChanged(p0: DzAsset): any;
}