/**
 * Specifies weight maps associated with an individual bone for a skin binding.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/bonebinding_dz
 */
declare class DzBoneBinding extends DzElement {

    /* Undocumented Augment Members */

    /** @undocumented */
    getWeights(): DzWeightMap;

    /** @undocumented */
    setBone(bone: DzBone): void;

    /** @undocumented */
    setWeights(weights: DzWeightMap): void;
}
