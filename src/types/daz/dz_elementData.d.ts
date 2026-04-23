/**
 * The base class for a DzCustomData that can be associated with an element of the scene.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/elementdata_dz
 */
declare class DzElementData extends DzCustomData {

    /* Methods */

    /**
     * @param owner DzElement - The element to duplicate this data item on.
     * @returns DzElementData A duplicate of this data item that can be added to the given owner (if any), otherwise null.
     */
    duplicate(owner: DzElement): DzElementData;

    /**
     * @returns DzElement The element that this data item is associated with (if any), otherwise null.
     */
    getOwner(): DzElement;

    /* Signals */

    /**
     * Emitted when this data item is added to an element.
     * @param owner DzElement - This data item's new owner.
     * @since 4.12.0.72
     */
    addedToElement: ISignal<DzElement>;

    /**
     * Emitted when this data item's owner is deleting, before this data item itself is deleted.
     * @param formerOwner DzElement - This data item's former owner that is being deleted.
     * @since 4.12.0.72
     */
    elementDeleting: ISignal<DzElement>;

    /**
     * Emitted when this data item is removed from an element.
     * @param formerOwner DzElement - This data item's former owner.
     * @since 4.12.0.72
     */
    removedFromElement: ISignal<DzElement>;
}
