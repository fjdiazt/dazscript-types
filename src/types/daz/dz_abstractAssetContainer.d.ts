/**
 * Base class for all asset containers.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/abstractassetcontainer_dz
 */
declare class DzAbstractAssetContainer extends DzRefCountedItem {

    /* Properties */

    /**
     * Holds whether or not sub-containers can be copied. (Read Only)
     */
    canCopyContainers: boolean; // Boolean

    /**
     * Holds whether or not this container can be deleted. (Read Only)
     */
    canDeleteContainer: boolean; // Boolean

    /**
     * Holds whether or not sub-containers can be added to this container. (Read Only)
     */
    canInsertSubContainer: boolean; // Boolean

    /**
     * Holds whether or not the assets in this container can be modified. (Read Only)
     */
    canModifyAssets: boolean; // Boolean

    /**
     * Holds whether or not this container can be renamed. (Read Only)
     */
    canRenameContainer: boolean; // Boolean

    /**
     * Holds the id for this container. (Read Only)
     */
    id: Object;

    /**
     * Holds whether or not removing an asset from this container will result in that asset's file being deleted. (Read Only)
     * @since 4.11.0.193
     */
    removeAssetCausesDelete: boolean; // Boolean

    /**
     * Holds the tooltip for this container. (Read Only)
     */
    tooltip: string; // String

    /**
     * Holds the use count for this container.
     */
    useCount: number; // Number

    /* Methods */

    /**
     * Attempts to clear out the assets that can be rebuilt.
     * @returns boolean The current implementation does nothing and always returns false
     */
    clearRebuildableAssets(): boolean; // Boolean

    /**
     * Attempts to create a new child container.
     * @param containerName string - The name of the new child container.
     * @returns boolean true if the container was successfully created, otherwise false.
     */
    createNewChildContainer(containerName: string): boolean; // Boolean

    /**
     * @param index number - The index of the asset to be returned.
     * @returns DzAsset The asset at the specified index (if valid), otherwise null.
     */
    getAsset(index: number): DzAsset;

    /**
     * @returns any[] A list of assets for this container.
     */
    getAssets(): any[]; // Array

    /**
     * @param index number - The index of the child container to get.
     * @returns DzAbstractAssetContainer The child container at the given index (if valid), otherwise null.
     */
    getChildContainer(index: number): DzAbstractAssetContainer;

    /**
     * @returns any[] A list of child containers for this container.
     */
    getChildContainers(): any[]; // Array

    /**
     * @returns Size The size of the icon associated with child containers.
     */
    getChildIconSize(): Size;

    /**
     * @returns string The name of this container.
     */
    getContainerName(): string; // String

    /**
     * @returns any[] The ID path for this container.
     */
    getIDPath(): any[]; // Array

    /**
     * @returns number The number of assets associated with this container.
     */
    getNumAssets(): number; // Number

    /**
     * @returns number The number of child containers this container has.
     */
    getNumChildContainers(): number; // Number

    /**
     * @returns DzAbstractAssetContainer The owner of this container.
     */
    getOwner(): DzAbstractAssetContainer;

    /**
     * @returns Size The small icon size of the icon associated with child containers.
     */
    getSmallChildIconSize(): Size;

    /**
     * @returns string The support file for this asset container. Base implementation returns an empty string.
     */
    getSupportFile(): string; // String

    /**
     * @param asset DzAsset - The asset to check for.
     * @returns boolean true if this container has the given asset, otherwise false.
     */
    hasAsset(asset: DzAsset): boolean; // Boolean

    /**
     * @returns boolean true if thic container has child containers, otherwise false.
     */
    hasChildContainers(): boolean; // Boolean

    /**
     * Boolean DzAbstractAssetContainer::ingoreAssetConflicts()
     * @returns boolean true if asset conflicts in this container will be ignored, otherwise false.
     */
    ignoreAssetConflicts(): boolean; // Boolean

    /**
     * Initializes this containers child containers.
     * @returns boolean true if the containers were successfully initialized, otherwise false.
     */
    initChildren(): boolean; // Boolean

    /**
     * Attempts to insert the given asset into this container.
     * @param asset DzAsset - The asset to add to this container.
     * @returns boolean true if the asset was successfully inserted, otherwise false.
     */
    insertAsset(asset: DzAsset): boolean; // Boolean

    /**
     * Attempts to insert container as a child of this container.
     * @param container DzAbstractAssetContainer - The container to insert.
     * @returns boolean true if the container was successfully inserted, otherwise false.
     */
    insertChildContainer(container: DzAbstractAssetContainer): boolean; // Boolean

    /**
     * @returns boolean true if this container is based on a filesystem, otherwise false.
     */
    isFileSystemBased(): boolean; // Boolean

    /**
     * Attempts to move the given container from its parent.
     * @param child DzAbstractAssetContainer - The container to move from its parent.
     * @returns boolean true if the container was successfully moved, otherwise false.
     */
    moveFromParent(child: DzAbstractAssetContainer): boolean; // Boolean

    /**
     * Attempts to remove the given asset from this container.
     * @param asset DzAsset - The asset to remove.
     * @returns boolean true if the asset was successfully removed, otherwise false.
     */
    removeAsset(asset: DzAsset): boolean; // Boolean

    /**
     * @param toContainer DzAbstractAssetContainer - The container to check.
     * @returns boolean true if assets moved to toContainer should be removed from this container, otherwise false.
     */
    removeAssetOnCut(toContainer: DzAbstractAssetContainer): boolean; // Boolean

    /**
     * Attempts to remove the given container.
     * @param container DzAbstractAssetContainer - The container to remove.
     * @returns boolean true if the container was successfully removed, otherwise false.
     */
    removeChildContainer(container: DzAbstractAssetContainer): boolean; // Boolean

    /**
     * Attempts to rename this container.
     * @param name string - The new name for this container.
     * @returns boolean true if the rename was successful, otherwise false.
     */
    rename(name: string): boolean; // Boolean

    /**
     * Attempts to rename the given asset.
     * @param asset DzAsset - The asset to rename.
     * @param newAssetName string - The new name for the asset.
     * @returns boolean true if the asset was successfully renamed, otherwise false.
     */
    renameAsset(asset: DzAsset, newAssetName: string): boolean; // Boolean

    /**
     * Attempts to rename the given child container.
     * @param container DzAbstractAssetContainer - The container to rename.
     * @param name string - The new name for the container.
     * @returns boolean true if the container was successfully renamed, otherwise false.
     */
    renameChildContainer(container: DzAbstractAssetContainer, name: string): boolean; // Boolean

    /**
     * Sets the name for this container.
     * @param name string - The new name for this container.
     */
    setContainerName(name: string): void;

    /**
     * Attemps to update this container.
     * @returns boolean true if the update was successful, otherwise false.
     */
    update(): boolean; // Boolean

    /**
     * Attempts to update the assets associated with this container.
     * @returns boolean true if the update was successful, otherwise false.
     */
    updateAssets(): boolean; // Boolean

    /* Signals */

    /**
     * Emitted the icon for an asset has changed.
     * @param asset DzAsset - The asset that the icon changed for.
     */
    assetIconChanged: ISignal<DzAsset>;

    /**
     * Emitted when an asset has been renamed.
     * @param asset DzAsset - The asset that was renamed.
     * @param index number - The index of the asset that was renamed.
     */
    assetRenamed: ISignal<DzAsset, number>;

    /**
     * Emitted before assets are added.
     * @param start number - …
     * @param end number - …
     */
    beginAssetAdd: ISignal<number, number>;

    /**
     * Emitted before assets are removed.
     * @param start number - …
     * @param end number - …
     */
    beginAssetRemove: ISignal<number, number>;

    /**
     * Emitted before a child container is added.
     * @param container DzAbstractAssetContainer - The container being added.
     * @param start number - …
     * @param end number - …
     */
    beginChildContainerAdd: ISignal<DzAbstractAssetContainer, number, number>;

    /**
     * Emitted before a child container is removed.
     * @param container DzAbstractAssetContainer - The container being removed.
     * @param start number - …
     * @param end number - …
     */
    beginChildContainerRemove: ISignal<DzAbstractAssetContainer, number, number>;

    /**
     * Emitted just before a child container is removed.
     * @param childContainer DzAbstractAssetContainer
     */
    childContainerAboutToBeRemoved: ISignal<DzAbstractAssetContainer>;

    /**
     * Emitted after a child container has been removed.
     * @param childContainer DzAbstractAssetContainer - The child container that was removed.
     */
    childContainerRemoved: ISignal<DzAbstractAssetContainer>;

    /**
     * Emitted after assets have been added.
     */
    endAssetAdd: ISignal<void>;

    /**
     * Emitted after assets have been removed.
     */
    endAssetRemove: ISignal<void>;

    /**
     * Emitted after a child container has been added.
     */
    endChildContainerAdd: ISignal<void>;

    /**
     * Emitted after a child container has been removed.
     */
    endChildContainerRemove: ISignal<void>;

    /**
     * Emitted after the icon for the container has changed.
     * @param container DzAbstractAssetContainer - The container with the icon that changed.
     */
    iconChanged: ISignal<DzAbstractAssetContainer>;

    /* Undocumented Augment Members */

    /** @undocumented */
    data: string; // StylePromoted

    /** @undocumented */
    name: string; //

    /** @undocumented */
    objectName: string; //

    /** @undocumented */
    icon: object; // QVariant(QIcon)

    /** @undocumented */
    addConnectedModel(model: QAbstractItemModel): void;

    /** @undocumented */
    assetContainerValid(ptr: void): DzAbstractAssetContainer;

    /** @undocumented */
    canAddSubContainer(): boolean;

    /** @undocumented */
    canDelete(): boolean;

    /** @undocumented */
    canModAssets(): boolean;

    /** @undocumented */
    canRename(): boolean;

    /** @undocumented */
    getCanCopyContainers(): boolean;

    /** @undocumented */
    getID(): QVariant;

    /** @undocumented */
    getIcon(): QIcon;

    /** @undocumented */
    getToolTip(): QString;

    /** @undocumented */
    getUseCount(): number;

    /** @undocumented */
    isConnectedToModel(model: QAbstractItemModel): boolean;

    /** @undocumented */
    loadMetadata(asset: DzAsset): void;

    /** @undocumented */
    setCanAddSubContainer(yesNo: boolean): void;

    /** @undocumented */
    setCanDelete(yesNo: boolean): void;

    /** @undocumented */
    setCanModifyAssets(yesNo: boolean): void;

    /** @undocumented */
    setCanRename(yesNo: boolean): void;

    /** @undocumented */
    setID(id: QVariant): void;

    /** @undocumented */
    setIcon(icon: QIcon): void;

    /** @undocumented */
    setOwner(newOwner: DzAbstractAssetContainer): void;

    /** @undocumented */
    setToolTip(tip: QString): void;

    /** @undocumented */
    setUseCount(count: number): void;

    /** @undocumented */
    showAsNew(): boolean;

    /** @undocumented */
    standardPasteAssets(list: DzAsset[], copy: boolean, from: DzAbstractAssetContainer): void;

    /** @undocumented */
    updateMetadata(asset: DzAsset): boolean;
}
