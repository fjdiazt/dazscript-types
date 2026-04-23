/**
 * Provides options for controlling morph projection from a figure to a following figure as a result of “Auto Follow.”.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/followingprojectionoptions_dz
 */
declare class DzFollowingProjectionOptions extends QObject {

    /* Properties */

    /**
     * Holds the tolerance used for considering the locations around the closest found location.
     */
    adaptiveTolerance: number; // Number

    /**
     * Holds whether or not the projection considers polylines as rigid for projection purposes.
     * @since 4.11.0.66
     */
    considerLinesAsRigid: boolean; // Boolean

    /**
     * Holds whether or not morph projection is disabled.
     * @since 4.11.0.106
     */
    disableMorphProjection: boolean; // Boolean

    /**
     * Holds the tolerance used for determining if two (or more) locations are considered coincident.
     * @since 4.10.0.50
     */
    distanceSquaredTolerance: number; // Number

    /**
     * Holds the name of the morph (if any) on the owner of this object to apply while projecting from the follow target.
     */
    followerProjectionMorph: string; // String

    /**
     * Holds the nearness factor to use if near vertices are included.
     */
    nearnessFactor: number; // Number

    /**
     * Holds whether or not the projection should be “smart” about projecting values to/from face groups that are on the left vs. right side of the meshes.
     */
    smartLeftRightHandling: boolean; // Boolean

    /**
     * Holds whether or not the follow target is subdivided when projecting.
     */
    sourceSubdivisionMode: number; // SourceSubdivisionMode

    /**
     * Holds whether or not to include near vertices in the projection calculation.
     */
    useNear: boolean; // Boolean

    /**
     * Holds whether or not UV space will be used during projection calculation.
     * @since 4.9.3.1
     */
    uvSpaceProjection: boolean; // Boolean

    /**
     * Holds whether vertices or facets on the follow target looked at first during projection.
     * @since 4.9.3.38
     */
    vertexFirstProjection: boolean; // Boolean

    /**
     * Holds whether or not the current options are written to file as the definition for the owner of this object.
     */
    writtenAsDefinition: boolean; // Boolean

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of SourceSubdivisionMode.
     */
    static SrcAuto: number;

    /**
     * DAZ enum member of SourceSubdivisionMode.
     */
    static SrcCage: number;

    /**
     * DAZ enum member of SourceSubdivisionMode.
     */
    static SrcSubdivided: number;

    /* Methods */

    /**
     * Adds a pair of (not necessarily matched) morph names to apply in the respective figures during a projection operation.
     * @param srcMorph string - The name of the morph in the follow target.
     * @param followerMorph string - The name of the morph in the owner of this object. An empty string here will cause any defined follower projection morph to be used.
     */
    addCorrelatedMorph(srcMorph: string, followerMorph: string): void;

    /**
     * Clears the list of morph pair names to apply during a projection operation.
     * @since 4.8.1.88
     */
    clearCorrelatedMorphs(): void;

    /**
     * Copies options from another instance.
     * @param other DzFollowingProjectionOptions - The instance to copy.
     */
    copyFrom(other: DzFollowingProjectionOptions): void;

    /**
     * @param which number - The index of the pair of morph names to get.
     * @returns string The name of the morph in the owner of this object for the pair at the specified index.
     */
    getFollowerCorrelatedMorph(which: number): string; // String

    /**
     * @returns number The number of morph name pairs to apply during a projection operation.
     */
    getNumCorrelatedMorphs(): number; // Number

    /**
     * @param which number - The index of the pair of morph names to get.
     * @returns string The name of the morph in the follow target for the pair at the specified index.
     */
    getSourceCorrelatedMorph(which: number): string; // String

    /**
     * @returns boolean true if all options are at their respective default values, otherwise false.
     */
    isAtDefault(): boolean; // Boolean

    /**
     * Removes a pair of morph names to apply during a projection operation.
     * @param which number - The index of the name pair to remove.
     */
    removeCorrelatedMorph(which: number): void;
}
