declare class DzAbstractAssetContainer extends DzRefCountedItem {

    /* Properties */
    canCopyContainers: boolean; // false
    canInsertSubContainer: boolean; // false
    canDeleteContainer: boolean; // false
    canRenameContainer: boolean; // false
    canModifyAssets: boolean; // true
    data: string; // StylePromoted
    name: string; //
    objectName: string; //
    id: string; // Default
    icon: object; // QVariant(QIcon)
    tooltip: string; //
    useCount: number; // -1


    /* Methods */
    addConnectedModel(model: QAbstractItemModel): void;
    assetContainerValid(ptr: void): DzAbstractAssetContainer;
    assetIconChanged(asset: DzAsset): void;
    assetRenamed(asset: DzAsset, index: number): void;
    beginAssetAdd(start: number, end: number): void;
    beginAssetRemove(start: number, end: number): void;
    beginChildContainerAdd(con: DzAbstractAssetContainer, start: number, end: number): void;
    beginChildContainerRemove(con: DzAbstractAssetContainer, start: number, end: number): void;
    canAddSubContainer(): boolean;
    canDelete(): boolean;
    canModAssets(): boolean;
    canRename(): boolean;
    childContainerAboutToBeRemoved(childContainer: DzAbstractAssetContainerPtr): void;
    childContainerRemoved(childContainer: DzAbstractAssetContainerPtr): void;
    clearRebuildableAssets(): boolean;
    createNewChildContainer(containerName: QString): boolean;
    endAssetAdd(): void;
    endAssetRemove(): void;
    endChildContainerAdd(): void;
    endChildContainerRemove(): void;
    getAsset(index: number): DzAssetPtr;
    getAssets(): QObject[];
    getAssets(list: DzAsset[]): boolean;
    getCanCopyContainers(): boolean;
    getChildContainer(index: number): DzAbstractAssetContainerPtr;
    getChildContainers(): DzTypeAssetContainer[];
    getChildContainers(list: DzAbstractAssetContainer[]): boolean;
    getChildIconSize(): QSize;
    getContainerName(): QString;
    getID(): QVariant;
    getIDPath(): QVariant[];
    getIcon(): QIcon;
    getNumAssets(): number;
    getNumChildContainers(): number;
    getOwner(): DzAbstractAssetContainer;
    getSmallChildIconSize(): QSize;
    getSupportFile(): QString;
    getToolTip(): QString;
    getUseCount(): number;
    hasAsset(asset: DzAsset): boolean;
    hasChildContainers(): boolean;
    ignoreAssetConflicts(): boolean;
    initChildren(): boolean;
    insertAsset(asset: DzAsset): boolean;
    insertChildContainer(container: DzAbstractAssetContainer): boolean;
    isConnectedToModel(model: QAbstractItemModel): boolean;
    isFileSystemBased(): boolean;
    loadMetadata(asset: DzAsset): void;
    moveFromParent(child: DzAbstractAssetContainer): boolean;
    removeAsset(asset: DzAsset): boolean;
    removeAssetCausesDelete(): boolean;
    removeAssetOnCut(toContainer: DzAbstractAssetContainer): boolean;
    removeChildContainer(container: DzAbstractAssetContainer): boolean;
    rename(name: QString): boolean;
    renameAsset(asset: DzAsset, newAssetName: QString): boolean;
    renameChildContainer(container: DzAbstractAssetContainer, name: QString): boolean;
    setCanAddSubContainer(yesNo: boolean): void;
    setCanDelete(yesNo: boolean): void;
    setCanModifyAssets(yesNo: boolean): void;
    setCanRename(yesNo: boolean): void;
    setContainerName(name: QString): void;
    setID(id: QVariant): void;
    setIcon(icon: QIcon): void;
    setOwner(newOwner: DzAbstractAssetContainer): void;
    setToolTip(tip: QString): void;
    setUseCount(count: number): void;
    showAsNew(): boolean;
    standardPasteAssets(list: DzAsset[], copy: boolean, from: DzAbstractAssetContainer): void;
    update(): boolean;
    updateAssets(): boolean;
    updateMetadata(asset: DzAsset): boolean;
}