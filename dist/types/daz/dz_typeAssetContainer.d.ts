declare class DzTypeAssetContainer extends DzAbstractAssetContainer {

    // Methods    
    // addChildContainer(p0:DzTypeAssetContainerPtr): any;
    addChildContainer(p0:string): any;
    assetRenamed(p0:DzAsset, p1:number): any;
    beginAssetAdd(p0:number, p1:number): any;
    beginAssetRemove(p0:number, p1:number): any;
    beginChildContainerAdd(p0:DzAbstractAssetContainer, p1:number, p2:number): any;
    beginChildContainerRemove(p0:DzAbstractAssetContainer, p1:number, p2:number): any;
    childContainerAboutToBeRemoved(p0:DzAbstractAssetContainerPtr): any;
    childContainerRemoved(p0:DzAbstractAssetContainerPtr): any;
    clear(p0:boolean): any;
    clearRebuildableAssets(): any;
    createNewChildContainer(p0:string): any;
    deleteLater(): any;
    destroyed(): any;
    destroyed(p0:QObject): any;
    endAssetAdd(): any;
    endAssetRemove(): any;
    endChildContainerAdd(): any;
    endChildContainerRemove(): any;
    findChildContainer(p0:string): any;
    getAsset(p0:number): any;
    getAssets(): any;
    // getAssets(DzAssetList&): any;
    getChildContainer(p0:number): DzTypeAssetContainer;
    // getChildContainers(DzAbstractAssetContainerList&): any;
    getChildIconSize(): any;
    getContainerName(): any;
    getIDPath(): any;
    getIconForStandardCategory(p0:DzTypeAssetContainer): any;
    getNumAssets(): any;
    getNumChildContainers(): any;
    getOwner(): any;
    getSmallChildIconSize(): any;
    getSupportFile(): any;
    getTextPath(): any;
    getTextPath(p0:boolean): any;
    getTypeName(): any;
    hasAsset(p0:DzAsset): any;
    hasChildContainers(): boolean;
    ignoreAssetConflicts(): any;
    initChildren(): any;
    insertAsset(p0:DzAsset): any;
    insertChildContainer(p0:DzAbstractAssetContainer): any;
    insertToSpecificType(p0:DzAsset, p1:string): any;
    isFileSystemBased(): any;
    moveFromParent(p0:DzAbstractAssetContainer): any;
    removeAsset(p0:DzAsset): any;
    // removeAssetCausesDelete(): any;
    removeAssetOnCut(p0:DzAbstractAssetContainer): any;
    removeChildContainer(p0:DzAbstractAssetContainer): any;
    rename(p0:string): any;
    renameAsset(p0:DzAsset, p1:string): any;
    renameChildContainer(p0:DzAbstractAssetContainer, p1:string): any;
    setContainerName(p0:string): any;
    update(): any;
    updateAssets(): any;
    updateChildren(): any;

    // Signals
    aboutToClear(): any;
    iconChanged(p0:DzAbstractAssetContainer): any;
    assetIconChanged(p0:DzAsset): any;
}