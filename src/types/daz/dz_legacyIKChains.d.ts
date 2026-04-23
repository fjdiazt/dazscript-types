/**
 * A DzElementData implementation that stores the IK chain information of an imported Poser figure.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/legacyikchains_dz
 */
declare class DzLegacyIKChains extends DzElementData {

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * Adds an IK chain to this list of IK chains.
     * @param chain DzLegacyIKChain - The chain to add.
     */
    addChain(chain: DzLegacyIKChain): void;

    /**
     * @param index number - The index of the desired chain.
     * @returns DzLegacyIKChain The legacy IK chain at the given index (if valid), otherwise null.
     */
    getChain(index: number): DzLegacyIKChain;

    /**
     * @returns number The number of legacy IK chains in this list.
     */
    getNumChains(): number; // Number
}
