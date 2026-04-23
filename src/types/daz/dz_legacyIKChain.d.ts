/**
 * A container that stores the IK chain information for an imported Poser figure.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/legacyikchain_dz
 */
declare class DzLegacyIKChain extends DzBase {

    /* Constructors */

    /**
     * @param name string
     */
    constructor(name?: string);

    /* Methods */

    /**
     * Adds a link to the chain, with the given weight and at the given index. If index is less than 0 or greater than the current link count, the link will be appended.
     * @param node DzNode - The node to add as a link.
     * @param weight number - The weight to use for the added link. This parameter is optional and defaults to 1.0.
     * @param index number - The index where the link should be added. This parameter is optional and defaults to -1.
     */
    addLink(node: DzNode, weight?: number, index?: number): void;

    /**
     * Removes all links from the chain.
     */
    clearLinks(): void;

    /**
     * @returns boolean Whether or not the IK chain is set to be active by default.
     */
    getActive(): boolean; // Boolean

    /**
     * @returns DzNode The goal node of the chain.
     */
    getGoal(): DzNode;

    /**
     * @returns string The label for the IK chain.
     */
    getLabel(): string; // String

    /**
     * @param index number - The index of the link to retrieve.
     * @returns DzNode The node at the specified index (if any), otherwise null.
     */
    getLink(index: number): DzNode;

    /**
     * @param index number - The index of the link weight to get.
     * @returns number The weight of the link at the given index (if any), otherwise 1.0.
     */
    getLinkWeight(index: number): number; // Number

    /**
     * @returns number The number of links defined in the chain.
     */
    getNumLinks(): number; // Number

    /**
     * Removes the link at the given index from the chain.
     * @param index number - The index of the link which should be removed.
     */
    removeLink(index: number): void;

    /**
     * Sets whether or not the IK chain is set to active by default.
     * @param onOff boolean - If true, the chain will be set to be active by default, otherwise it will be set to be inactive.
     */
    setActive(onOff: boolean): void;

    /**
     * Sets the goal node of the chain.
     * @param node DzNode - The new goal node.
     */
    setGoal(node: DzNode): void;

    /**
     * Sets the label for the IK chain.
     * @param label string - The label to use for the chain.
     */
    setLabel(label: string): void;

    /**
     * Sets the weight of the link at the given index to the given weight.
     * @param index number - The index of the link whose weight should be changed.
     * @param weight number - The new weight for the link.
     * @returns boolean
     */
    setLinkWeight(index: number, weight: number): boolean; // Boolean
}
