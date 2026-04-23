/**
 * A container type for collecting asset search results.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/searchcontainer_dz
 */
declare class DzSearchContainer extends DzRefCountedItem {

    /* Methods */

    /**
     * @returns boolean true if this container has more search results, otherwise false.
     */
    hasMoreSearchResults(): boolean; // Boolean

    /* Undocumented Augment Members */

    /** @undocumented */
    objectName: string; //

    /** @undocumented */
    id: string; // Search DB:

    /** @undocumented */
    tooltip: string; //

    /** @undocumented */
    canCopyContainers: boolean; // false

    /** @undocumented */
    canInsertSubContainer: boolean; // false

    /** @undocumented */
    canDeleteContainer: boolean; // false

    /** @undocumented */
    canRenameContainer: boolean; // false

    /** @undocumented */
    canModifyAssets: boolean; // true

    /** @undocumented */
    useCount: number; // -1

    /** @undocumented */
    name: string; //

    /** @undocumented */
    _clone: any;

    /** @undocumented */
    _getMethodsNames: any;

    /** @undocumented */
    assetRenamed(p0:DzAsset, p1:number): any;

    /** @undocumented */
    beginAssetAdd(p0:number, p1:number): any;

    /** @undocumented */
    beginAssetRemove(p0:number, p1:number): any;

    /** @undocumented */
    beginChildContainerAdd(p0:DzAbstractAssetContainer, p1:number, p2:number): any;

    /** @undocumented */
    beginChildContainerRemove(p0:DzAbstractAssetContainer, p1:number, p2:number): any;

    /** @undocumented */
    childContainerAboutToBeRemoved(p0:DzAbstractAssetContainerPtr): any;

    /** @undocumented */
    childContainerRemoved(p0:DzAbstractAssetContainerPtr): any;

    /** @undocumented */
    className: any;

    /** @undocumented */
    clearRebuildableAssets(): any;

    /** @undocumented */
    createNewChildContainer(p0:string): any;

    /** @undocumented */
    deleteLater(): any;

    /** @undocumented */
    destroyed(): any;

    /** @undocumented */
    destroyed(p0:QObject): any;

    /** @undocumented */
    endAssetAdd(): any;

    /** @undocumented */
    endAssetRemove(): any;

    /** @undocumented */
    endChildContainerAdd(): any;

    /** @undocumented */
    endChildContainerRemove(): any;

    /** @undocumented */
    getAsset(p0:number): any;

    /** @undocumented */
    getAssets(): any;

    /** @undocumented */
    getChildContainer(p0:number): any;

    /** @undocumented */
    getChildContainers(): any;

    /** @undocumented */
    getChildIconSize(): any;

    /** @undocumented */
    getContainerName(): any;

    /** @undocumented */
    getIDPath(): any;

    /** @undocumented */
    getNumAssets(): any;

    /** @undocumented */
    getNumChildContainers(): any;

    /** @undocumented */
    getOwner(): any;

    /** @undocumented */
    getSmallChildIconSize(): any;

    /** @undocumented */
    getState(): number;

    /** @undocumented */
    getSupportFile(): any;

    /** @undocumented */
    hasAsset(p0:DzAsset): any;

    /** @undocumented */
    hasChildContainers(): any;

    /** @undocumented */
    ignoreAssetConflicts(): any;

    /** @undocumented */
    inherits: any;

    /** @undocumented */
    initChildren(): any;

    /** @undocumented */
    insertAsset(p0:DzAssetPtr): any;

    /** @undocumented */
    insertAsset(p0:DzAsset): any;

    /** @undocumented */
    insertChildContainer(p0:DzAbstractAssetContainer): any;

    /** @undocumented */
    isFileSystemBased(): any;

    /** @undocumented */
    moveFromParent(p0:DzAbstractAssetContainer): any;

    /** @undocumented */
    removeAsset(p0:DzAsset): any;

    /** @undocumented */
    removeAssetOnCut(p0:DzAbstractAssetContainer): any;

    /** @undocumented */
    removeChildContainer(p0:DzAbstractAssetContainer): any;

    /** @undocumented */
    rename(p0:string): any;

    /** @undocumented */
    renameAsset(p0:DzAsset, p1:string): any;

    /** @undocumented */
    renameChildContainer(p0:DzAbstractAssetContainer, p1:string): any;

    /** @undocumented */
    setContainerName(p0:string): any;

    /** @undocumented */
    setState(p0:number): any;

    /** @undocumented */
    update(): any;

    /** @undocumented */
    updateAssets(): any;

    /** @undocumented */
    iconChanged(p0:DzAbstractAssetContainer): any;

    /** @undocumented */
    assetIconChanged(p0:DzAsset): any;

    /** @undocumented */
    stateChanged: ISignal; // (number)
}
