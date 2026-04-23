/**
 * A node for grouping multiple lightweight clones of a node in the scene.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/instancegroupnode_dz
 */
declare class DzInstanceGroupNode extends DzInstanceNode {

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * Begin edit of this node.
     */
    beginItemEdit(): void;

    clearItems(): void;

    /**
     * @returns DzInstanceGroupItem A new instance group item.
     */
    createItem(): DzInstanceGroupItem;

    /**
     * @param item DzInstanceGroupItem - The item to get the index for.
     * @returns number The index for the given item or -1 if it does not belong to this node.
     */
    findIndexForItem(item: DzInstanceGroupItem): number; // Number

    /**
     * Finish edit of this node.
     */
    finishItemEdit(): void;

    /**
     * @param index number - The index of the item to get the group of.
     * @returns DzInstanceGroupItem The group item at the given index or null if it does not exist.
     */
    getGroupItem(index: number): DzInstanceGroupItem;

    /**
     * @returns number The number of group items.
     */
    getNumberOfGroupItems(): number; // Number

    /**
     * @returns boolean true if in beginItemEdit/finishItemEdit session
     */
    isEditingItems(): boolean; // Boolean

    /**
     * @param index number - The index of the item to remove.
     */
    removeItem(index: number): void;

    /* Undocumented Augment Members */

    /** @undocumented */
    createElementCopy(p0: DzElementDuplicateContext): any;

    /** @undocumented */
    createElementCopySignal(p0: DzElementDuplicateContext): any;

    /** @undocumented */
    doDuplicateElement(p0: DzElementDuplicateContext): any;

    /** @undocumented */
    doMergeElement(p0: DzElement, p1: DzElementDuplicateContext): any;

    /** @undocumented */
    doobjectDuplicateAndSet(p0: DzNode, p1: DzElementDuplicateContext): any;

    /** @undocumented */
    duplicateElement(p0: DzElement, p1: DzElementDuplicateContext): any;

    /** @undocumented */
    duplicateElementSignal(p0: DzElement, p1: DzElementDuplicateContext): any;

    /** @undocumented */
    duplicateMissingCustomData(p0: DzElement): any;

    /** @undocumented */
    duplicateMissingCustomDataWithContext(p0: DzElement, p1: DzElementDuplicateContext): any;

    /** @undocumented */
    duplicateMissingPrivateProperties(p0: DzElement): any;

    /** @undocumented */
    duplicateMissingPrivatePropertiesWithContext(p0: DzElement, p1: DzElementDuplicateContext): any;

    /** @undocumented */
    duplicateMissingProperties(p0: DzElement): any;

    /** @undocumented */
    duplicateMissingPropertiesWithContext(p0: DzElement, p1: DzElementDuplicateContext): any;

    /** @undocumented */
    finalizeDuplicate(p0: DzElementDuplicateContext): any;

    /** @undocumented */
    getName(): any;

    /** @undocumented */
    getnumberOfGroupItems(): any;

    /** @undocumented */
    getobject(): any;

    /** @undocumented */
    getPreviewControl(): any;

    /** @undocumented */
    getRenderPriority(): any;

    /** @undocumented */
    getWeightMapHandler(): any;

    /** @undocumented */
    handleRendererModeChanged(p0: DzRenderer): void;

    /** @undocumented */
    instanceNodeRemoved(): void;

    /** @undocumented */
    invalidateCache(): any;

    /** @undocumented */
    invalidateInstanceBoundingBox(): any;

    /** @undocumented */
    invalidateOrientation(): any;

    /** @undocumented */
    isDataItemNameUnique(p0: string): any;

    /** @undocumented */
    isDataItemNameUnique(p0: string, p1: boolean): any;

    /** @undocumented */
    isPrivatePropertyNameUnique(p0: string): any;

    /** @undocumented */
    isPrivatePropertyNameUnique(p0: string, p1: boolean): any;

    /** @undocumented */
    isPropertyNameUnique(p0: string): any;

    /** @undocumented */
    isPropertyNameUnique(p0: string, p1: boolean): any;

    /** @undocumented */
    isVisibileInRender(): any;

    /** @undocumented */
    iskindof(p0: string): any;

    /** @undocumented */
    mergeElement(p0: DzElement, p1: DzElementDuplicateContext): any;

    /** @undocumented */
    mergeElementSignal(p0: DzElement, p1: DzElementDuplicateContext): any;

    /** @undocumented */
    modifierDuplicateFinished(p0: DzElementDuplicateContext): void;

    /** @undocumented */
    objectDuplicateAndSet(p0: DzNode, p1: DzElementDuplicateContext): any;

    /** @undocumented */
    objectDuplicateAndSetSignal(p0: DzNode, p1: DzElementDuplicateContext): any;

    /** @undocumented */
    selectionMapModified(): void;

    /** @undocumented */
    setobject(p0: Dzobject): any;

    /** @undocumented */
    setRenderPriority(p0: number): any; // DzRenderMgr::RenderPriority

    /** @undocumented */
    setRenderPriority(p0: number): any;

    /** @undocumented */
    updateRenderable(): any;

    /** @undocumented */
    updateTarget(): any;

    /** @undocumented */
    updateTransform(): any;

    /** @undocumented */
    updateVis(): any;
}
