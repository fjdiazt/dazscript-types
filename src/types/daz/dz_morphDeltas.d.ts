/**
 * A container for the discrete vertex displacement values of a morph.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/morphdeltas_dz
 */
declare class DzMorphDeltas extends DzRefCountedItem {

    /* Constructors */

    constructor();

    /* Static Methods */

    /**
     * Calculates a delta set from two meshes.
     * @param srcGeom DzVertexMesh - The 'base' geometry.
     * @param tgtGeom DzVertexMesh - The 'morph' geometry.
     * @param tolerance number - The minimum difference between a vertex in srcGeom and the corresponding vertex in tgtGeom to be considered; lower limit is 1e-5.
     * @returns DzMorphDeltas The delta set for turning srcGeom into tgtGeom. If a delta set cannot be created, or is empty, this returns null.
     * @since 4.9.4.85
     */
    static calculateDeltas(srcGeom: DzVertexMesh, tgtGeom: DzVertexMesh, tolerance?: number): DzMorphDeltas;

    /* Methods */

    /**
     * Add a morph delta.
     * @param vertIdx number - The index of the vertex to set delta values for.
     * @param delta DzVec3
     * @param checkForDuplicates boolean - If true, the list of deltas will be checked for any previous deltas assigned to the vertex before adding the delta. Otherwise, it is assumed no deltas have been added for the specified vertex.
     * @returns number The index of the delta
     */
    addDelta(vertIdx: number, delta: DzVec3, checkForDuplicates?: boolean): number; // Number

    /**
     * Add a morph delta.
     * @param vertIdx number - The index of the vertex to set delta values for.
     * @param deltaX number - The X-axis value for the delta
     * @param deltaY number - The Y-axis value for the delta
     * @param deltaZ number - The Z-axis value for the delta
     * @param checkForDuplicates boolean - If true, the list of deltas will be checked for any previous deltas assigned to the vertex before adding the delta. Otherwise, it is assumed no deltas have been added for the specified vertex.
     * @returns number The index of the delta.
     */
    addDelta(vertIdx: number, deltaX: number, deltaY: number, deltaZ: number, checkForDuplicates?: boolean): number; // Number

    /**
     * @returns DzMorphDeltas A deep copy of this morph deltas.
     */
    copyDeltas(): DzMorphDeltas;

    /**
     * Copies (deep) this morph deltas to a specified morph deltas.
     * @param deltas DzMorphDeltas
     */
    copyDeltasTo(deltas: DzMorphDeltas): void;

    /**
     * @param i number - The index of the delta (not vertex) to get the vertex index for.
     * @returns number The index of the vertex in the mesh that is affected by the specified delta (if valid), otherwise -1.
     */
    getDeltaIndex(i: number): number; // Number

    /**
     * @param i number - The index of the delta (not vertex) to get the vector for.
     * @returns DzVec3 A three dimensional vector describing the value of the specified delta (if valid), otherwise an uninitialized vector - i.e., (0, 0, 0).
     */
    getDeltaVec(i: number): DzVec3;

    /**
     * @returns number The number of vertices that have delta values for the owning morph.
     */
    getNumDeltas(): number; // Number

    /**
     * @returns number The vertex count of the geometry that these morph deltas apply to.
     * @since 4.9.3.137
     */
    getTargetVertexCount(): number; // Number

    /**
     * @param vertIdx number - The index of the vertex in the mesh to get the delta index for.
     * @returns number The delta index of the specified vertex (if valid), otherwise -1.
     */
    getVertexDeltaIndex(vertIdx: number): number; // Number

    /**
     * @returns boolean true if there are any deltas that exist in this set. false if deltas have not been loaded from file, or otherwise assigned, yet.
     */
    hasDeltas(): boolean; // Boolean

    /**
     * Loads the list of delta values from file if it has not already been loaded.
     * @returns boolean true if the deltas were loaded successfully, otherwise false.
     */
    loadDeltas(): boolean; // Boolean

    /**
     * Pre-sizes the deltas list.
     * @param nDeltas number - The size the deltas list is expected to grow to.
     */
    preSize(nDeltas: number): void;

    /**
     * Clears the list of delta values.
     */
    removeAllDeltas(): void;

    /**
     * Remove the specified delta.
     * @param deltaIdx number - The index of the delta (not vertex) to be removed.
     */
    removeDelta(deltaIdx: number): void;

    /**
     * Removes any duplicate deltas that are in the array. Only the earliest instance in the delta array is kept.
     */
    removeDuplicateDeltas(): void;

    /**
     * @returns DzMorphDeltas A deep copy of this deltas with the delta values that have been flagged to be ignored removed.
     */
    removeIgnoredDeltas(): DzMorphDeltas;

    /**
     * Removes deltas value for a specified vertex.
     * @param vertIdx number - The index of the vertex to remove delta values for.
     */
    removeVertex(vertIdx: number): void;

    /**
     * Sets the value for a delta in the delta list.
     * @param index number - The index of the delta (not vertex) to set the data for.
     * @param delta DzVec3
     * @returns DzError
     */
    setDelta(index: number, delta: DzVec3): DzError;

    /**
     * Sets the vertex count in the target mesh that this set of delta values applies to.
     * @param vertCount number - The total number of vertices in the target mesh.
     * @since 4.9.3.137
     */
    setTargetVertexCount(vertCount: number): void;

    /**
     * Unloads the list of delta values (if loaded).
     */
    unLoadDeltas(): void;

    /**
     * Deprecated
     * @param vertCount number
     */
    setVertCount(vertCount: number): void;

    /**
     * Deprecated
     * @returns number
     */
    getVertCount(): number; // Number

    /* Signals */

    /**
     * Emitted when deltas are added to or removed from the list
     */
    deltaListChanged: ISignal<void>;

    /**
     * Emitted when deltas are successfully loaded from file
     * @since 4.10.0.116
     */
    deltaListLoaded: ISignal<void>;

    /**
     * Emitted when one or more delta values have been changed
     */
    deltaValueChanged: ISignal<void>;
}
