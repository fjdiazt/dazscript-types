/**
 * Base class for nodes that own and manage a group of connected nodes (“bones”).
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/skeleton_dz
 */
declare class DzSkeleton extends DzNode {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of FollowMode.
     */
    static fmRedirect: number;

    /**
     * DAZ enum member of FollowMode.
     */
    static fmAutoFollow: number;

    /* Constructors */

    constructor();

    /* Static Methods */

    /**
     * Converts an articulate figure to a static prop.
     * @param skeleton DzSkeleton
     * @param nodeName string - The name to assign to the new prop.
     * @returns DzNode
     */
    static convertFigureToProp(skeleton: DzSkeleton, nodeName: string): DzNode;

    /* Methods */

    /**
     * Clears the generated morphs.
     */
    clearGeneratedMorphs(): void;

    /**
     * @param name string - The name of the bone to look for.
     * @returns DzBone The bone in this skeleton's hierarchy with a matching name (if any), otherwise NULL.
     */
    findBone(name: string): DzBone;

    /**
     * @param label string - The label of the bone to look for.
     * @returns DzBone The bone in this skeleton's hierarchy with a matching label (if any), otherwise NULL.
     */
    findBoneByLabel(label: string): DzBone;

    /**
     * @returns any[] A list containing all bones that are part of this skeleton.
     */
    getAllBones(): any[]; // Array

    /**
     * @returns boolean true if OpenGL bones will draw in the viewport, otherwise false.
     */
    getDrawGLBones(): boolean; // Boolean

    /**
     * @returns DzBoolProperty The boolean property that controls bone drawing in the viewport.
     */
    getDrawGLBonesControl(): DzBoolProperty;

    /**
     * @returns DzFloatProperty The float property that controls the figure identifier.
     * @since 4.6.2.42
     */
    getFigureIDControl(): DzFloatProperty;

    /**
     * @returns DzSkeletonProperty The property that controls which skeleton this skeleton will follow.
     */
    getFollowControl(): DzSkeletonProperty;

    /**
     * @returns DzFollowingProjectionOptions The following projection options for this skeleton.
     */
    getFollowingProjectionOptions(): DzFollowingProjectionOptions;

    /**
     * @returns number The current follow mode of this skeleton.
     * @since 4.8.0.23
     */
    getFollowMode(): number; // FollowMode

    /**
     * @returns DzEnumProperty The enum property that controls the follow mode of this skeleton.
     * @since 4.8.0.23
     */
    getFollowModeControl(): DzEnumProperty;

    /**
     * @param which number
     * @returns DzSkeleton The i'th skeleton following this one.
     */
    getFollowSkeleton(which: number): DzSkeleton;

    /**
     * @returns DzSkeleton The skeleton that this skeleton is currently following (if any), otherwise NULL.
     */
    getFollowTarget(): DzSkeleton;

    /**
     * @returns DzColorProperty The color property that controls bone color in the viewport.
     */
    getGLBonesColorControl(): DzColorProperty;

    /**
     * @returns DzFloatProperty The float property that controls bone edge opacity in the viewport.
     */
    getGLBonesEdgeOpacityControl(): DzFloatProperty;

    /**
     * @returns DzEnumProperty The enum property that controls bone edge style in the viewport.
     */
    getGLBonesEdgeStyleControl(): DzEnumProperty;

    /**
     * @returns DzFloatProperty The float property that controls bone fill opacity in the viewport.
     */
    getGLBonesFillOpacityControl(): DzFloatProperty;

    /**
     * @returns number The number of skeletons following this one.
     */
    getNumFollowSkeletons(): number; // Number

    /**
     * @param label string - The bone label to make unique; any trailing space/digits will automatically be stripped.
     * @param bone DzBone - The bone that the label is intended for; may be null; this bone will be ignored when validating uniqueness.
     * @returns string label if the value provided is already unique, otherwise label with a suffix that causes it to be unique.
     * @since 4.12.0.66
     */
    getUniqueBoneLabel(label: string, bone?: DzBone): string; // String

    /**
     * @param name string - The bone name to make unique; any trailing space/digits will automatically be stripped.
     * @param bone DzBone - The bone that the name is intended for; may be null; this bone will be ignored when validating uniqueness.
     * @returns string name if the value provided is already unique, otherwise name with a suffix that causes it to be unique.
     * @since 4.12.0.66
     */
    getUniqueBoneName(name: string, bone?: DzBone): string; // String

    /**
     * Sets whether or not OpenGL bones will draw in the viewport.
     * @param onOff boolean - If true, bones will be drawn in the viewport.
     */
    setDrawGLBones(onOff: boolean): void;

    /**
     * Sets the figure that we are currently following.
     * @param skeleton DzSkeleton - The new follow target for this skeleton. If NULL, clears the figure that this skeleton is following.
     */
    setFollowTarget(skeleton: DzSkeleton): void;

    /* Signals */

    /**
     * Emitted when the follow target for this skeleton has changed.
     * @param skeleton DzSkeleton
     */
    followTargetChanged: ISignal<DzSkeleton>;
}
