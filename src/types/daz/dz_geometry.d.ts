/**
 * The base class for all mesh or geometry type objects.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/geometry_dz
 */
declare class DzGeometry extends DzRefCountedItem {

    /* Properties */

    /**
     * Holds whether or not this geometry has pending changes.
     * @since 4.9.2.8
     */
    hasPendingChanges: boolean; // Boolean

    /* Static Methods */

    /**
     * @param node DzNode - The node to get the geometry from.
     * @returns DzGeometry The current geometry for node, or NULL if node has no geometry associated with it.
     * @since 4.9.3.57
     */
    static getCurrentGeometryForNode(node: DzNode): DzGeometry;

    /* Methods */

    /**
     * Begin an edit operation on the geometry. Most meshes will require that this function is called before any topology change (i.e., adding/removing vertices, polygons, etc).
     * @param enableUndo boolean - If true, operations performed on the geometry after this call will be undoable.
     */
    beginEdit(enableUndo?: boolean): void;

    /**
     * Cancel the current edit operation on the geometry.
     */
    cancelEdit(): void;

    /**
     * @param mesh DzVertexMesh - The vertex mesh to make this a copy of.
     * @param shareVerts boolean - If true, the vertex list will be shared between the given mesh and this mesh. If false, the vertex list will be a deep copy.
     * @param shareFacets boolean - If true, the facet set will be shared between the given mesh and this mesh. If false, the facet set will be a deep copy.
     * @returns boolean true if this geometry is a copy of mesh (either already or as a result of this operation), otherwise false.
     * @since 4.9.3.57
     */
    copyFrom(mesh: DzVertexMesh, shareVerts?: boolean, shareFacets?: boolean): boolean; // Boolean

    /**
     * Finish the current edit operation on the geometry.
     */
    finishEdit(): void;

    /**
     * @returns DzBox3 A local space bounding box for this geometry.
     */
    getBoundingBox(): DzBox3;

    /**
     * @param groupName string - The name of the group to get a bounding box for.
     * @param transform DzMatrix3 - The transform to apply to the box.
     * @returns DzBox3 A box encompassing all geometry in the group named groupName (if any), transformed according to transform.
     */
    getGroupBoundingBox(groupName: string, transform: DzMatrix3): DzBox3;

    /**
     * @param groupName string - The name of the group to get the bounding box for.
     * @returns DzBox3 A box encompassing all geometry in the group named groupName (if any).
     */
    getGroupBoundingBox(groupName: string): DzBox3;

    /**
     * @param groupName string - The name of the group to get an oriented bounding box for.
     * @param transform DzMatrix3 - The transform to apply to the box.
     * @param pos DzVec3 - The position to apply to the box.
     * @param rot DzQuat - The rotation to apply to the box.
     * @param scale DzVec3 - The scale to apply to the box.
     * @returns DzOrientedBox3 An oriented box encompassing all geometry in the group named groupName (if any), transformed according to transform, pos, rot and scale.
     */
    getGroupOrientedBox(groupName: string, transform: DzMatrix3, pos: DzVec3, rot: DzQuat, scale: DzVec3): DzOrientedBox3;

    /**
     * @param groupName string - The name of the group to get an oriented bounding box for.
     * @param pos DzVec3 - The position to apply to the box.
     * @param rot DzQuat - The rotation to apply to the box.
     * @param scale DzVec3 - The scale to apply to the box.
     * @returns DzOrientedBox3 An oriented box encompassing all geometry in the group named groupName (if any), transformed according to pos, rot and scale.
     */
    getGroupOrientedBox(groupName: string, pos: DzVec3, rot: DzQuat, scale: DzVec3): DzOrientedBox3;

    /**
     * @returns number The number of UV sets on this geometry.
     */
    getNumUVSets(): number; // Number

    /**
     * @returns number The number of vertices in this geometry.
     */
    getNumVertices(): number; // Number

    /**
     * @param pos DzVec3 - The position to apply to the box.
     * @param rot DzQuat - The rotation to apply to the box.
     * @param scale DzVec3 - The scale to apply to the box.
     * @returns DzOrientedBox3 An oriented box encompassing the geometry, transformed according to pos, rot and scale.
     */
    getOrientedBox(pos: DzVec3, rot: DzQuat, scale: DzVec3): DzOrientedBox3;

    /**
     * @returns number A unique identifier for this geometry.
     */
    getUniqueId(): number; // Number

    /**
     * @returns DzMap The active UV set for this geometry.
     */
    getUVs(): DzMap;

    /**
     * @param which number - The index of the UV set to get; must be in the [0, getNumUVSets() - 1] range.
     * @returns DzUVSet The UV set at the specified index (if any), otherwise null.
     */
    getUVSet(which: number): DzUVSet;

    /**
     * @returns boolean true if the geometry is empty, otherwise false.
     */
    isEmpty(): boolean; // Boolean

    /**
     * @returns boolean true if this geometry is generated at runtime (rather than being read from file), otherwise false.
     * @since 4.11.0.292
     */
    isRuntimeGenerated(): boolean; // Boolean

    /**
     * Rotate this geometry by the given rotation.
     * @param rot DzQuat - The quaternion that represents the rotation the geometry should rotate itself by.
     */
    rotate(rot: DzQuat): void;

    /**
     * Scale this geometry by the given vector.
     * @param vec DzVec3 - The vector that the geometry should scale itself by.
     */
    scale(vec: DzVec3): void;

    /**
     * Scale this geometry by the given uniform scale.
     * @param scalar number - The value that the geometry should scale itself by.
     */
    scale(scalar: number): void;

    /**
     * Transforms this geometry through the specified matrix. For multiple operations (i.e., translating and rotating, or rotating, scaling and translating) this method is the most efficient. For individual operations use the translate(), rotate() or scale() methods.
     * @param matrix DzMatrix3 - The matrix that the geometry should transform itself through.
     */
    transform(matrix: DzMatrix3): void;

    /**
     * Translate this geometry by the given vector.
     * @param vec DzVec3 - The vector that the geometry should translate itself by.
     */
    translate(vec: DzVec3): void;

    /* Signals */

    /**
     * Emitted when the geometry needs to be rebuilt.
     * @param onOff boolean - Whether or not the geometry needs to be rebuilt.
     */
    needRebuild: ISignal<boolean>;

    /**
     * Emitted when the visibility of the geometry has changed.
     */
    visibilityChanged: ISignal<void>;

    /* Undocumented Augment Members */

    /** @undocumented */
    isSubDivisionEnabled(): boolean;
}
