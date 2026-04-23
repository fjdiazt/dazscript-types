/**
 * Numeric (float) property that has an associated node pointer.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/numericnodeproperty_dz
 */
declare class DzNumericNodeProperty extends DzFloatProperty {

    /* Constructors */

    constructor();

    /**
     * @param name string
     * @param canAnimate boolean
     * @param isUserProperty boolean
     * @param initVal number
     */
    constructor(name: string, canAnimate: boolean, isUserProperty: boolean, initVal?: number);

    /* Methods */

    /**
     * @returns DzNode The node that is assigned to this property.
     */
    getNode(): DzNode;

    /**
     * @returns boolean true if the value of this property is invalid unless a node is assigned, otherwise false.
     */
    isInvalidWithoutNode(): boolean; // Boolean

    /**
     * Sets whether or not this property value is valid when no node is assigned.
     * @param onOff boolean - If true, this property must have a node associated with it.
     */
    setMustHaveNode(onOff: boolean): void;

    /**
     * Set the node for this property.
     * @param node DzNode - The node to associate with this property.
     */
    setNode(node: DzNode): void;

    /* Signals */

    /**
     * Emitted when this property's invalid without node state has changed.
     * @param onOff boolean - If true, then this property is invalid without a node.
     */
    invalidWithoutNodeChanged: ISignal<boolean>;

    /**
     * Emitted when the node associated with this property has changed.
     * @param node DzNode - The node that was changed.
     */
    nodeChanged: ISignal<DzNode>;

    /* Undocumented Augment Members */

    /** @undocumented */
    redirectNodes(): any; // TODO ;

    /** @undocumented */
    emitNodeChanged(node: DzNode): void;

    /** @undocumented */
    emitInvalidWithoutNodeChanged(onOff: boolean): void;
}
