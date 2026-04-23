/**
 * A generic asset container for hierarchical structures that can be represented by a slash ('/') delimted path.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/typeassetcontainer_dz
 */
declare class DzTypeAssetContainer extends DzRefCountedItem {

    /* Properties */

    /**
     * Holds the data associated with this container; type depends on the type of the data assigned.
     */
    data: Object;

    /* Methods */

    /**
     * Adds a new container with the given name, if one doesn't already exist.
     * @param typePath string - The slash ('/') delimited path of a container to add.
     * @returns number The index of the newly inserted container. If a container of the same type already exists, the index of that container will be returned.
     */
    addChildContainer(typePath: string): number; // Number

    /**
     * Adds the given container if one of the same type name doesn't exist.
     * @param container DzTypeAssetContainer - The child container to be inserted.
     * @returns number The index of the newly added container or, if a container already exists with the same name, the index of that container.
     */
    addChildContainer(container: DzTypeAssetContainer): number; // Number

    /**
     * Clears all the child containers and assets associated with this container. Emits endAssetRemove() and endChildContainerRemove().
     */
    clear(): void;

    /**
     * @param typePath string - The path of the container to find.
     * @returns DzTypeAssetContainer The container with the given type name, if it exists, otherwise null.
     */
    findChildContainer(typePath: string): DzTypeAssetContainer;

    /**
     * @param ignoreRoot boolean - If true, the root item will not be included in the path.
     * @returns string The displayed text path of this container.
     */
    getTextPath(ignoreRoot?: boolean): string; // String

    /**
     * @returns string The type name for this container.
     */
    getTypeName(): string; // String

    /**
     * Attempts to insert the asset to a specific type.
     * @param asset DzAsset - The asset to be inserted.
     * @param typePath string - The slash ('/') delimited path of the type for the asset.
     * @returns boolean true if successful, otherwise false.
     */
    insertToSpecificType(asset: DzAsset, typePath: string): boolean; // Boolean

    /* Signals */

    /**
     * Emitted when this container is about to be cleared.
     */
    aboutToClear: ISignal<void>;

    /* Undocumented Augment Members */

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
    getChildContainer(p0:number): DzTypeAssetContainer;

    /** @undocumented */
    getChildIconSize(): any;

    /** @undocumented */
    getContainerName(): any;

    /** @undocumented */
    getIDPath(): any;

    /** @undocumented */
    getIconForStandardCategory(p0:DzTypeAssetContainer): any;

    /** @undocumented */
    getNumAssets(): any;

    /** @undocumented */
    getNumChildContainers(): any;

    /** @undocumented */
    getOwner(): any;

    /** @undocumented */
    getSmallChildIconSize(): any;

    /** @undocumented */
    getSupportFile(): any;

    /** @undocumented */
    hasAsset(p0:DzAsset): any;

    /** @undocumented */
    hasChildContainers(): boolean;

    /** @undocumented */
    ignoreAssetConflicts(): any;

    /** @undocumented */
    initChildren(): any;

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
    update(): any;

    /** @undocumented */
    updateAssets(): any;

    /** @undocumented */
    updateChildren(): any;

    /** @undocumented */
    iconChanged(p0:DzAbstractAssetContainer): any;

    /** @undocumented */
    assetIconChanged(p0:DzAsset): any;
}
