/**
 * A container type that represents the top level of an asset container hierarchy.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/toplevelassetcontainer_dz
 */
declare class DzTopLevelAssetContainer extends DzRefCountedItem {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of ContainerState.
     */
    static csNone: number;

    /**
     * DAZ enum member of ContainerState.
     */
    static csBusy: number;

    /**
     * DAZ enum member of ContainerState.
     */
    static csFinished: number;

    /**
     * DAZ enum member of ContainerState.
     */
    static csCanceled: number;

    /**
     * DAZ enum member of ContainerState.
     */
    static csError: number;

    /* Methods */

    /**
     * @returns number The current state of the containter.
     * @since 4.9.1.17
     */
    getState(): number; // ContainerState

    /**
     * Sets the state of this container.
     * @param state number - The state to set.
     * @since 4.9.1.17
     */
    setState(state: number): void;

    /* Signals */

    /**
     * Emitted when the state of this container has changed.
     * @param state number - The new state of this container.
     */
    stateChanged: ISignal<number>;

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
}
