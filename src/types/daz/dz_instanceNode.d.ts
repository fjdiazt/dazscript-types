/**
 * A node for creating a single lightweight clone of a node in the scene.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/instancenode_dz
 */
declare class DzInstanceNode extends DzNode {

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * @returns DzEnumProperty The property controlling how the node is instanced (i.e., just the target or the target and its children).
     */
    getCopyModeControl(): DzEnumProperty;

    /**
     * @returns DzNode The node being targeted by this node (if any), otherwise NULL.
     */
    getTarget(): DzNode;

    /**
     * @returns DzNodeProperty The property pointing at the target node.
     */
    getTargetControl(): DzNodeProperty;

    /* Signals */

    /**
     * Emitted when the target for this instance has changed.
     */
    targetChanged: ISignal<void>;

    /* Undocumented Augment Members */

    /** @undocumented */
    doobjectDuplicateAndSet(p0: DzNode, p1: DzElementDuplicateContext): any;

    /** @undocumented */
    duplicateMissingPrivateProperties(p0: DzElement): any;

    /** @undocumented */
    duplicateMissingProperties(p0: DzElement): any;

    /** @undocumented */
    finalizeDuplicate(p0: DzElementDuplicateContext): any;

    /** @undocumented */
    getName(): any;

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
