/**
 * A local space modifier for mesh smoothing and collision detection.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/meshsmoothmodifier_dz
 */
declare class DzMeshSmoothModifier extends DzModifier {

    /* Properties */

    /**
     * Holds the author of the file for this property. (Read Only)
     * @since 4.20.1.47
     */
    assetAuthor: DzAuthor;

    /**
     * Holds the revision version of the asset file for this property. (Read Only)
     * @since 4.20.1.47
     */
    assetFileRevision: DzVersion;

    /**
     * Holds the asset id for this modifier.
     * @since 4.8.1.18
     */
    assetId: string; // String

    /**
     * Holds the modified date of the asset file for this property. (Read Only)
     * @since 4.20.1.47
     */
    assetModifiedDate: Date;

    /**
     * Holds whether or not the asset for this modifier needs to be saved. (Read Only)
     * @since 4.11.0.249
     */
    assetNeedSave: boolean; // Boolean

    /**
     * Holds the URI of the asset source for this modifier; only valid when the asset is in an embedded state - i.e. modified. (Read Only)
     * @since 4.20.1.47
     */
    assetSource: DzUri;

    /**
     * Holds the asset URI for this modifier. (Read Only)
     * @since 4.8.1.18
     */
    assetUri: DzUri;

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * @returns DzNode The node to collide with (if any), otherwise null.
     */
    getCollisionItem(): DzNode;

    /**
     * @returns DzIntProperty The “Collision Iteration” property that controls the number of collision iterations to perform. The default is 3.
     * @since 4.11.0.249
     */
    getCollisionIterationControl(): DzIntProperty;

    /**
     * @returns DzNodeProperty The “Collision Node” property that controls the node that provides the geometry to use for collision detection/correction.
     * @since 4.11.0.249
     */
    getCollisionNodeControl(): DzNodeProperty;

    /**
     * @returns DzIntProperty The “Collision Smoothing Interval” property that controls the interval between when mesh smoothing iterations are performed and when collision detection/correction iterations are performed, i.e., every n'th smoothing iteration the collision iterations are performed. The default is 1.
     * @since 4.11.0.249
     */
    getCollisionSmoothingIntervalControl(): DzIntProperty;

    /**
     * @returns DzBoolProperty The “Enable Smoothing” property that controls whether or not this modifier is applied. The default value is on/yes/true.
     * @since 4.11.0.249
     */
    getEnableSmoothingControl(): DzBoolProperty;

    /**
     * @returns DzBoolProperty The “Interactive Update” property that controls whether or not the results of this modifier are applied “interactively” (i.e., as soon as possible, while the object is being manipulated vs when manipulation has stopped). The default is off/no/false.
     * @since 4.11.0.249
     */
    getInteractiveUpdateControl(): DzBoolProperty;

    /**
     * @returns DzFloatProperty The “Length Influence” property that controls the amount of influence the length of the edges around a given vertex has on the calculated smoothing result. The default value is 0.5.
     * @since 4.11.0.249
     */
    getLengthInfluenceControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The “Lock Distance” property that controls the distance at which the movement of a given vertex becomes insignificant, and is therefore “locked” (excluded) for the remaining smoothing iterations unless a neighboring vertex moves more significantly. The default is 0.001 (cm).
     * @since 4.11.0.249
     */
    getLockDistanceControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The “Secondary Weight” property that controls the amount of a separate inverse smoothing iteration to apply. The default is -0.5.
     * @since 4.11.0.249
     */
    getSecondaryWeightControl(): DzFloatProperty;

    /**
     * @returns DzIntProperty The “Smoothing Iterations” property that controls the number of smoothing iterations to perform. The default is 2.
     * @since 4.11.0.249
     */
    getSmoothingIterationsControl(): DzIntProperty;

    /**
     * @returns DzEnumProperty The “Smoothing Type” property that controls the algorithm to use for the smoothing iterations. The default is “Base Shape Matching.”
     * @since 4.11.0.249
     */
    getSmoothingTypeControl(): DzEnumProperty;

    /**
     * @returns DzFloatProperty The “Weight” property that controls the amount of the calculated smoothing result to apply. The default is 0.5.
     * @since 4.11.0.249
     */
    getWeightControl(): DzFloatProperty;

    /**
     * Marks the asset as being modified.
     * @returns boolean true if the asset is marked as modified, otherwise false.
     */
    modifyAsset(): boolean; // Boolean

    /**
     * Sets the collision item.
     * @param item DzNode - The node to collide with.
     */
    setCollisionItem(item: DzNode): void;

    /* Signals */

    /**
     * Emitted when this modifier has been modified.
     */
    assetModified: ISignal<void>;

    /**
     * Emitted after this modifier has been saved.
     */
    assetWasSaved: ISignal<void>;
}
