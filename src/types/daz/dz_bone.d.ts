/**
 * Base class for all skeleton bone types.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/bone_dz
 */
declare class DzBone extends DzNode {

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * @param tm DzTime - The time to get the local scale for.
     * @returns DzMatrix3 The local scale of the bone at the given time.
     */
    getBoneLocalScale(tm: DzTime): DzMatrix3;

    /**
     * Get the node that this node is following.
     * @returns DzBone The bone this bone is following, or NULL if this bone is not following another bone.
     */
    getFollowBone(): DzBone;

    /**
     * @returns number The mode that this node is following by.
     * @since 4.8.0.23
     */
    getFollowMode(): number; // Number

    /* Signals */

    /**
     * Emitted when the follow bone has changed.
     * @param newFollowBone DzBone
     */
    followBoneChanged: ISignal<DzBone>;
}
