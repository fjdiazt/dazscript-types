declare class DzSearchContainer extends DzTopLevelAssetContainer {
    // Properties
    objectName: string; // 
    id: string; // Search DB: 
    tooltip: string; // 
    canCopyContainers: boolean; // false
    canInsertSubContainer: boolean; // false
    canDeleteContainer: boolean; // false
    canRenameContainer: boolean; // false
    canModifyAssets: boolean; // true
    useCount: number; // -1
    // removeAssetCausesDelete: boolean; // true
    name: string; // 

    // Methods
    _clone: any;
    _getMethodsNames: any;
    assetRenamed(p0:DzAsset, p1:number): any;
    beginAssetAdd(p0:number, p1:number): any;
    beginAssetRemove(p0:number, p1:number): any;
    beginChildContainerAdd(p0:DzAbstractAssetContainer, p1:number, p2:number): any;
    beginChildContainerRemove(p0:DzAbstractAssetContainer, p1:number, p2:number): any;
    childContainerAboutToBeRemoved(p0:DzAbstractAssetContainerPtr): any;
    childContainerRemoved(p0:DzAbstractAssetContainerPtr): any;
    className: any;
    clearRebuildableAssets(): any;
    createNewChildContainer(p0:string): any;
    deleteLater(): any;
    destroyed(): any;
    destroyed(p0:QObject): any;
    endAssetAdd(): any;
    endAssetRemove(): any;
    endChildContainerAdd(): any;
    endChildContainerRemove(): any;
    getAsset(p0:number): any;
    getAssets(): any;
    // getAssets(DzAssetList&): any;
    getChildContainer(p0:number): any;
    getChildContainers(): any;
    // getChildContainers(DzAbstractAssetContainerList&): any;
    getChildIconSize(): any;
    getContainerName(): any;
    getIDPath(): any;
    getNumAssets(): any;
    getNumChildContainers(): any;
    getOwner(): any;
    getSmallChildIconSize(): any;
    getState(): number;
    getSupportFile(): any;
    hasAsset(p0:DzAsset): any;
    hasChildContainers(): any;
    hasMoreSearchResults(): boolean;
    ignoreAssetConflicts(): any;
    inherits: any;
    initChildren(): any;
    insertAsset(p0:DzAssetPtr): any;
    insertAsset(p0:DzAsset): any;
    // insertAssets(p0:DzAssetList): any;
    insertChildContainer(p0:DzAbstractAssetContainer): any;
    isFileSystemBased(): any;
    moveFromParent(p0:DzAbstractAssetContainer): any;
    removeAsset(p0:DzAsset): any;
    removeAssetOnCut(p0:DzAbstractAssetContainer): any;
    removeChildContainer(p0:DzAbstractAssetContainer): any;
    rename(p0:string): any;
    renameAsset(p0:DzAsset, p1:string): any;
    renameChildContainer(p0:DzAbstractAssetContainer, p1:string): any;
    setContainerName(p0:string): any;
    setState(p0:number): any;
    update(): any;
    updateAssets(): any;

    // Signals
    iconChanged(p0:DzAbstractAssetContainer): any;
    assetIconChanged(p0:DzAsset): any;
    // stateChanged(p0:number): any;
    stateChanged: ISignal; // (number)
}