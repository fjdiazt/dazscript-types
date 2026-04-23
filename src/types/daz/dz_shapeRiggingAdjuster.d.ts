/**
 * Implements the logic of adjusting bone positions and orientations of the selected figure, based on the current shape.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/shaperiggingadjuster_dz
 */
declare class DzShapeRiggingAdjuster extends QObject {

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * Performs the rigging adjustment based on the current shape.
     * @returns boolean true if the adjustment was successful, false if the adjustment could not be completed.
     */
    doAdjustments(): boolean; // Boolean

    /**
     * Sets whether or not center points of bones being ajusted are allowed to be modified.
     * @param yesNo boolean - If true (default), the center points of bones are permitted to be modified.
     */
    setAdjustCenterPoints(yesNo: boolean): void;

    /**
     * Sets whether or not end points of bones being ajusted are allowed to be modified.
     * @param yesNo boolean - If true (default), the end points of bones are permitted to be modified.
     */
    setAdjustEndPoints(yesNo: boolean): void;

    /**
     * Sets whether or not adjustments are made to the follow target instead of the bone.
     * @param yesNo boolean - If true, the adjustments are applied to the bone's follow target instead of itself.
     * @since 4.22.0.2
     */
    setAdjustFollowTarget(yesNo: boolean): void;

    /**
     * Sets whether or not the orientations of bones being ajusted are allowed to be modified.
     * @param yesNo boolean - If true, the orientations of bones are permitted to be modified.
     */
    setAdjustOrientation(yesNo: boolean): void;

    /**
     * Sets the list of bones to exclude when adjusting.
     * @param boneNames any[] - The list of bone names to exclude.
     */
    setExcludedBones(boneNames: any[]): void;

    /**
     * Sets the list of facet groups to exclude when calculating adjustments to make.
     * @param groupNames any[] - The list of facet group names to exclude.
     */
    setExcludedFacetGroups(groupNames: any[]): void;

    /**
     * Sets the target asset to be the geometry contained by the given node.
     * @param figure DzFigure - The figure to adjust the rigging on.
     */
    setFigure(figure: DzFigure): void;
}
