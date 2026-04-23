/**
 * Implements a weight mapped defined figure.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/figure_dz
 */
declare class DzFigure extends DzSkeleton {

    /* Constructors */

    constructor();

    /* Static Methods */

    /**
     * Attempts to convert a simple node with geometry into a figure.
     * @param srcNode DzNode - The source node to convert.
     * @param rootBoneName string - The name to assign to the root bone of the figure.
     * @param localMaps boolean - If true (default), local weight maps will be created, otherwise a general weight map will be created.
     * @param inheritSkeleton boolean - If true (default) and srcNode is parented to a bone, the skeleton that bone belongs to and the bone hierarchy up to that bone will be used to create the new figure.
     * @returns DzFigure The figure produced by the conversion (if any), otherwise null.
     */
    static convertPropToFigure(srcNode: DzNode, rootBoneName: string, localMaps?: boolean, inheritSkeleton?: boolean): DzFigure;

    /* Methods */

    /**
     * Adds a face in the figure that this figure is following (if any) to hide.
     * @param faceIdx number - The index of the face to hide.
     */
    addFollowTargetHiddenFace(faceIdx: number): void;

    /**
     * Adds a pair of vertex indices in the geometry of this figure, and in the geometry of the figure that this figure is following (if any), to the list of vertices to weld together in order to “graft” (integrate) them.
     * @param followerIdx number - The index of the vertex in the geometry of this figure.
     * @param targetIdx number - The index of the vertex in the geometry of the follow target.
     * @param notifyChange boolean - If true (default), notifies listeners of the weldListChanged() signal.
     */
    addWeldPoint(followerIdx: number, targetIdx: number, notifyChange?: boolean): void;

    /**
     * Clears the list of faces to hide in the figure that this figure is following (if any).
     */
    clearFollowTargetHiddenFaces(): void;

    /**
     * Clears the list of vertex index pairs used to weld vertices in the geometry of this figure to vertices in the geometry of another figure.
     * @since 4.9.0.53
     */
    clearWeldPoints(): void;

    /**
     * @param which number - The index of the figure that is culling this figure.
     * @returns DzFigure The figure that is culling (hiding geometry of) this figure at the specified index (if valid), otherwise null.
     */
    getCullFigure(which: number): DzFigure;

    /**
     * @param which number - The index of the vertex index pair to weld.
     * @returns number The index of the vertex in the geometry of this figure.
     */
    getFollowerWeldIndex(which: number): number; // Number

    /**
     * @returns number The face count of the figure that this figure is following (if any).
     */
    getFollowTargetFaceCount(): number; // Number

    /**
     * @returns number The vertex count of the figure that this figure is following (if any).
     */
    getFollowTargetVertexCount(): number; // Number

    /**
     * @param which number - The index of the vertex index pair to weld.
     * @returns number The index of the vertex in the geometry of the follow target.
     */
    getFollowTargetWeldIndex(which: number): number; // Number

    /**
     * @param which number - The index of the figure that is grafting into this figure.
     * @returns DzFigure The figure that is grafting (integrating its geometry) into this figure at the specified index (if valid), otherwise null.
     */
    getGraftFigure(which: number): DzFigure;

    /**
     * @returns number The number of figures that are culling (hiding geometry of) this figure.
     */
    getNumCullFigures(): number; // Number

    /**
     * @returns number The number of faces in the figure that this figure is following (if any) to hide.
     */
    getNumFollowTargetHiddenFaces(): number; // Number

    /**
     * @returns number The number of figures that are grafting (integrating their geometry) into this figure.
     */
    getNumGraftFigures(): number; // Number

    /**
     * @returns number The number of vertex index pairs in the list of vertices to weld together between the geometry of this figure, and the geometry of the figure that this figure is following (if any), in order to “graft” (integrate) them.
     */
    getNumWeldPoints(): number; // Number

    /**
     * @returns DzSkinBinding The skin binding for this figure
     */
    getSkinBinding(): DzSkinBinding;

    /**
     * @returns boolean true if a follower is grafting to this figure, otherwise false.
     */
    isGraftFollowing(): boolean; // Boolean

    /**
     * Merges all current followers of this figure into a single follower.
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     * @since 4.6.3.0
     */
    mergeFollowers(): DzError;

    /**
     * Optimizes the list of vertex index pairs used to weld vertices in the geometry of this figure to vertices in the geometry of another figure - removes duplicates and releases any memory not required to store the items.
     * @since 4.9.0.53
     */
    optimizeWeldPoints(): void;

    /**
     * Pre-sizes the list of faces to hide in the figure that this figure is following (if any).
     * @param num number - The number of faces that will be hidden.
     */
    presizeFollowTargetHiddenFaces(num: number): void;

    /**
     * Pre-sizes the list of vertex index pairs used to “graft” (integrate) the geometry of this figure into the geometry of the figure that this figure is following (if any).
     * @param num number - The number of vertex index pairs.
     */
    presizeWeldPoints(num: number): void;

    /**
     * Removes duplicates from the list of vertex index pairs used to weld vertices in the geometry of this figure to vertices in the geometry of another figure.
     * @since 4.9.0.53
     */
    removeDuplicateWeldPoints(): void;

    /**
     * Removes a pair of vertex indices in the geometry of this figure, and in the geometry of the figure that this figure is following (if any), from the list of vertices to weld together in order to “graft” (integrate) them.
     * @param which number - The index of the pair to remove.
     * @since 4.9.0.53
     */
    removeWeldPoint(which: number): void;

    /**
     * Stores the face count of the figure that this figure is following (if any).
     * @param num number - The number of faces.
     */
    setFollowTargetFaceCount(num: number): void;

    /**
     * Stores the vertex count of the figure that this figure is following (if any).
     * @param num number - The number of vertices.
     */
    setFollowTargetVertexCount(num: number): void;

    /**
     * @returns boolean true if this figure will graft during drawing operations, otherwise false.
     * @since 4.9.2.58
     */
    willGraftInDraw(): boolean; // Boolean

    /**
     * @param settings DzRenderSettings - The render settings that will be used during the render operation.
     * @returns boolean true if this figure will graft during rendering operations, otherwise false.
     * @since 4.9.2.58
     */
    willGraftInRender(settings?: DzRenderSettings): boolean; // Boolean

    /* Signals */

    /**
     * Emitted when the list of hidden facets in the geometry of a follow target has changed.
     */
    followTargetHiddenListChanged: ISignal<void>;

    /**
     * Emitted when the list of figures that “graft” (integrate) their geometries into the geometry of this figure has changed.
     */
    graftListChanged: ISignal<void>;

    /**
     * Emitted when the number of vertex index pairs in the list of vertices to weld together, between the geometry of this figure and the geometry of the follow target (if any), has changed.
     */
    weldListChanged: ISignal<void>;
}
