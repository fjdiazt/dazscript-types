/**
 * Base class for meshes that have a list of vertices.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/vertexmesh_dz
 */
declare class DzVertexMesh extends DzRefCountedItem {

    /* Methods */

    /**
     * Activates a vertex group, creating it if it does not exist yet. All vertices added after this call will be added to the given group. To stop adding vertices to the group, you must call deactivateVertexGroup(). More than one vertex group can be active at a time.
     * @param name string - The name of the vertex group to activate.
     */
    activateVertexGroup(name: string): void;

    /**
     * Adds all selected vertices to the given group. Fails if the group does not exist.
     * @param name string - The name of the group to add all selected vertices to.
     */
    addToVertexGroup(name: string): void;

    /**
     * @param x number - The X axis position of the vertex to add.
     * @param y number - The Y axis position of the vertex to add.
     * @param z number - The Z axis position of the vertex to add.
     * @returns number The index at which the vertex was added.
     */
    addVertex(x: number, y: number, z: number): number; // Number

    /**
     * @param pnt DzVec3 - The position of the vertex to add.
     * @returns number The index at which the vertex was added.
     */
    addVertex(pnt: DzVec3): number; // Number

    /**
     * Adds all the vertices from the given mesh to this mesh.
     * @param mesh DzVertexMesh - The vertex mesh that contains the vertices to add to this mesh.
     */
    addVerticesFromMesh(mesh: DzVertexMesh): void;

    /**
     * Begins an edit of the vertex selection. Must be called before editing vertex selection of the mesh and paired with a call to finishVertexSelectionEdit().
     */
    beginVertexSelectionEdit(): void;

    /**
     * Creates a new vertex group from the set of currently selected vertices.
     * @param name string - The name to assign to the group.
     * @returns boolean true if there were vertices selected and the group was created, otherwise false.
     */
    createVertexGroup(name: string): boolean; // Boolean

    /**
     * Deactivates all vertex groups.
     */
    deactivateAllVertexGroups(): void;

    /**
     * Deactivates a vertex group.
     * @param name string - The name of the vertex group to deactivate.
     */
    deactivateVertexGroup(name: string): void;

    /**
     * Finishes an edit of the vertex selection. Must be called after editing vertex selection of the mesh is completed and after beginVertexSelectionEdit() is called.
     */
    finishVertexSelectionEdit(): void;

    /**
     * @param index number - The index of the vertex group.
     * @returns DzVertexGroup The active vertex group at the specified index (if valid), otherwise null.
     */
    getActiveVertexGroup(index: number): DzVertexGroup;

    /**
     * @returns any[] A list of locked vertex indices.
     * @since 4.11.0.75
     */
    getLockedVertices(): any[]; // Array

    /**
     * @returns number The number of active vertex groups.
     */
    getNumActiveVertexGroups(): number; // Number

    /**
     * @returns number The number of vertex groups.
     */
    getNumVertexGroups(): number; // Number

    /**
     * @returns number The number of vertices in this geometry.
     */
    getNumVertices(): number; // Number

    /**
     * @returns any[] A list of unlocked vertex indices for the selected vertices.
     * @since 4.11.0.75
     */
    getSelectedVertices(): any[]; // Array

    /**
     * @returns any[] A list of unlocked vertex indices.
     * @since 4.11.0.75
     */
    getUnusedVertices(): any[]; // Array

    /**
     * @param index number - The index of the vertex.
     * @returns DzVec3 The vertex at the specified index (if valid).
     */
    getVertex(index: number): DzVec3;

    /**
     * @param index number - The index of the vertex group.
     * @returns DzVertexGroup The vertex group at the specified index (if valid), otherwise null.
     */
    getVertexGroup(index: number): DzVertexGroup;

    /**
     * Inverts the selected state of vertices.
     */
    invertVertexSelection(): void;

    /**
     * @param index number - The index of the vertex to check.
     * @returns boolean true if the vertex at the given index is locked, otherwise false.
     * @since 4.11.0.75
     */
    isVertexLocked(index: number): boolean; // Boolean

    /**
     * @param index number - The index of the vertex to check.
     * @returns boolean true if the vertex at the given index is selected, otherwise false.
     */
    isVertexSelected(index: number): boolean; // Boolean

    /**
     * Pre-sizes the array of vertices in this mesh. This function should only be called between calls to beginEdit() and finishEdit(). This allocates the memory needed to store the given number of vertices, but unlike setVertexArray() it does not change the number of vertices in the mesh - this is intended to presize the vertices array before using the addVertex() function. This should only be used when you know exactly how many vertices are going to be in the final list, or can approximate very accurately as any unused slots will be wasted.
     * @param numVerts number - The number of vertices to presize to.
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     */
    preSizeVertexArray(numVerts: number): DzError;

    /**
     * Selects/Deselects all vertices.
     * @param onOff boolean - If true, selects all vertices. If false, deselects all vertices.
     */
    selectAllVertices(onOff?: boolean): void;

    /**
     * Selects/deselects the vertex at the given index in the list.
     * @param index number - The index of the vertex to select/deselect; must be in the [0, getNumVertices() - 1] range.
     * @param onOff boolean - If true, selects the vertex. If false, deselects the vertex.
     */
    selectVertex(index: number, onOff?: boolean): void;

    /**
     * Selects/Deselects a list of vertices.
     * @param list DzIndexList - The list of vertices to select/deselect.
     * @param onOff boolean - If true, selects vertices in the list. If false, deselects vertices in the list.
     */
    selectVerticesByIndexList(list: DzIndexList, onOff?: boolean): void;

    /**
     * Sets the vertex at the given index to the given position.
     * @param index number - The index of the vertex to set the position of.
     * @param pnt DzVec3 - The position to move the vertex to.
     */
    setVertex(index: number, pnt: DzVec3): void;

    /**
     * Resizes the vertex array to numVerts items. This can be used for fast mesh copying when converting from another kind of shape type, etc.
     * @param numVerts number - The number of vertices to resize to.
     */
    setVertexArray(numVerts: number): void;

    /* Signals */

    /**
     * Emitted when the topology of the geometry has changed.
     */
    topologyChanged: ISignal<void>;

    /**
     * Emitted when the vertex selection state has changed.
     */
    vertexSelectionChanged: ISignal<void>;
}
