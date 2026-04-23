/**
 * A general polygon mesh.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/facetmesh_dz
 */
declare class DzFacetMesh extends DzRefCountedItem {

    /* Properties */

    /**
     * Holds the author of the file for this mesh. (Read Only)
     * @since 4.8.1.21
     */
    assetAuthor: DzAuthor;

    /**
     * Holds the revision version of the asset file for this mesh. (Read Only)
     * @since 4.8.1.21
     */
    assetFileRevision: DzVersion;

    /**
     * Holds the asset id for this mesh.
     * @since 4.8.1.18
     */
    assetId: string; // String

    /**
     * Holds the asset id aliases for this mesh.
     */
    assetIdAliases: any[]; // Array

    /**
     * Holds the modified date of the asset file for this mesh. (Read Only)
     * @since 4.8.1.21
     */
    assetModifiedDate: Date;

    /**
     * Holds whether or not the asset for this mesh needs to be saved. (Read Only)
     * @since 4.11.0.249
     */
    assetNeedSave: boolean; // Boolean

    /**
     * Holds the URI of the asset source for this mesh; only valid when the asset is in an embedded state - i.e. modified. (Read Only)
     * @since 4.8.1.21
     */
    assetSource: DzUri;

    /**
     * Holds the asset URI for this mesh. (Read Only)
     * @since 4.8.1.18
     */
    assetUri: DzUri;

    /**
     * Holds additional ids that this mesh extends.
     * @since 4.12.2.44
     */
    extendedAssetIds: string; // String

    /**
     * Holds the name aliases for this mesh.
     */
    nameAliases: any[]; // Array

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of SubDAlgorithm.
     */
    static Catmark: number;

    /**
     * DAZ enum member of SubDAlgorithm.
     */
    static Bilinear: number;

    /**
     * DAZ enum member of SubDAlgorithm.
     */
    static Loop: number;

    /**
     * DAZ enum member of SubDAlgorithm.
     */
    static DzCatmullClark: number;

    /**
     * DAZ enum member of SubDEdgeInterpolation.
     */
    static SoftCornersEdges: number;

    /**
     * DAZ enum member of SubDEdgeInterpolation.
     */
    static SharpCornersEdges: number;

    /**
     * DAZ enum member of SubDEdgeInterpolation.
     */
    static SharpEdges: number;

    /**
     * DAZ enum member of SubDNormalSmoothingMode.
     */
    static SmoothAllNormals: number;

    /**
     * DAZ enum member of SubDNormalSmoothingMode.
     */
    static PreserveCageSmoothing: number;

    /* Constructors */

    constructor();

    /* Static Methods */

    /**
     * @returns number The value of subdivision weight that indicates infinite sharpness.
     * @since 4.6.3.39
     */
    static getInfiniteSharpValueWeightValue(): number; // Number

    /**
     * @returns string A string representation of the version of OpenSubdiv in use.
     * @since 4.9.2.18
     */
    static getOpenSubdivVersion(): string; // String

    /* Methods */

    /**
     * Activates the given face group - all faces added after this call will be added to the group. If the named group is not found, a new empty group by that name is created and made active.
     * @param name string - The name of the face group to activate.
     * @returns number The index of the group that was activated.
     */
    activateFaceGroup(name: string): number; // Number

    /**
     * Activates the given face group - all faces added after this call will be added to the group.
     * @param index number - The index of the face group to activate. If the index exceeds the number of groups current on this mesh, then groups are created until the number of groups is equal to the requested index.
     */
    activateFaceGroup(index: number): void;

    /**
     * Activates the given material group - all faces added after this call will be added to the material.
     * @param name string - The name of the material group to activate. If a material group with the given name does not exist, one will be created.
     * @returns number The index of the material group that was activated.
     */
    activateMaterial(name: string): number; // Number

    /**
     * Activates the given material group - all faces added after this call will be added to the material.
     * @param index number - The index of the material group to activate.
     */
    activateMaterial(index: number): void;

    /**
     * Adds a facet to this mesh.
     * @param vertIndices any[] - A list of indices into the vertex list for the new face.
     * @param uvIndices any[] - A list of indices into the texture coordinate list for the new texture coordinates.
     * @param flags number - The flags for the facet; use 0 for no flags.
     */
    addFacet(vertIndices: any[], uvIndices: any[], flags?: number): void;

    /**
     * Adds a facet to this mesh.
     * @param facetIn DzFacet - The facet to add to this mesh.
     * @param pTex number - The Ptex index for the facet; set to DZ_INT_MIN to just use next avaible value.
     * @param flags number - The flags for the facet; use 0 for no flags.
     */
    addFacet(facetIn: DzFacet, pTex?: number, flags?: number): void;

    /**
     * Adds a line to this mesh.
     * @param vertexIndices any[]
     * @param uvIndices any[] - A list of indices into the texture coordinate list for the new texture coordinates.
     * @param flags number - The flags for the line; use 0 for no flags.
     * @since 4.11.0.36
     */
    addPolyline(vertexIndices: any[], uvIndices?: any[], flags?: number): void;

    /**
     * Adds a polyline to this mesh with a single root segment.
     * @param vertIdx1 number - The first vertex index.
     * @param vertIdx2 number - The second vertex index.
     * @param flags number - The flags for the line; use 0 for no flags.
     * @since 4.11.0.174
     */
    addPolylineRootSegment(vertIdx1: number, vertIdx2: number, flags?: number): void;

    /**
     * Adds a polyline to this mesh with a single root segment.
     * @param vertIdx1 number - The first vertex index.
     * @param vertIdx2 number - The second vertex index.
     * @param uvIdx1 number - The first uv index.
     * @param uvIdx2 number - The second uv index.
     * @param flags number - The flags for the line; use 0 for no flags.
     * @since 4.11.0.174
     */
    addPolylineRootSegment(vertIdx1: number, vertIdx2: number, uvIdx1: number, uvIdx2: number, flags?: number): void;

    /**
     * Adds a segment to the last polyline in the list.
     * @param vertexIndex number - The index of the vertex to extend the polyline to.
     * @since 4.11.0.36
     */
    addSegmentToLastPolyline(vertexIndex: number): void;

    /**
     * Adds a segment to the last polyline.
     * @param vertexIndex number - The index of the vertex to extend the polyline to.
     * @param uvIndex number - The index of the UV coordinate to extend the polyline to.
     * @since 4.11.0.36
     */
    addSegmentToLastPolyline(vertexIndex: number, uvIndex: number): void;

    /**
     * Adds a UV set to this mesh.
     * @param uvSet DzUVSet
     */
    addUVSet(uvSet: DzUVSet): void;

    /**
     * Changes the normal index on all facets such that all verticies have smooth normals.
     */
    applyFullSmoothing(): void;

    /**
     * Changes the normal index on all facets such that adjacent facets with less than the specified angle between them have smooth normals.
     * @param angle number - The angle between adjacent facets to smooth if below.
     */
    applySmoothing(angle: number): void;

    /**
     * Applies a set of texture coordinates to this mesh.
     * @param uvSet DzUVSet
     */
    applyUVSet(uvSet: DzUVSet): void;

    /**
     * Removes all subdivison weight for all edges of this mesh.
     * @since 4.11.0.151
     */
    clearWeightedEdges(): void;

    /**
     * Removes subdivison weight for all vertices of this mesh.
     * @since 4.11.0.151
     */
    clearWeightedVertices(): void;

    /**
     * Creates a face group with the given name - all faces added after this call will be added to the group.
     * @param name string - The name of the face group to create. If a face group with the given name already exists, a new group will not be created.
     * @returns boolean true if the face group was created, otherwise false.
     */
    createFaceGroup(name: string): boolean; // Boolean

    /**
     * Creates a material group with the given name - all faces added after this call will be added to the material.
     * @param name string - The name of the material group to create. If a material group with the given name already exists, a new group will not be created.
     * @returns number The face group with the given name (if any), otherwise null.
     */
    createMaterialGroup(name: string): number; // Number

    /**
     * @param name string
     * @returns DzFaceGroup
     */
    findFaceGroup(name: string): DzFaceGroup;

    /**
     * @param name string
     * @returns DzMaterialFaceGroup The material group with the given name (if any), otherwise null.
     */
    findMaterialGroup(name: string): DzMaterialFaceGroup;

    /**
     * Searches the geometry for a UV set with the given label.
     * @param label string - The label of the UV set to find.
     * @returns number The index of the UV set with the matching label, or -1 if none was found.
     */
    findUVSetIndexByLabel(label: string): number; // Number

    /**
     * @returns number The current level of subdivision for this mesh.
     */
    getCurrentSubDivisionLevel(): number; // Number

    /**
     * @param index number - The index of the edge to get.
     * @returns DzEdge The edge at the given index, or an invalid edge if index is out of range.
     */
    getEdge(index: number): DzEdge;

    /**
     * @param vertIdxA number - The first vertex index of the edge.
     * @param vertIdxB number - The second vertex index of the edge.
     * @returns number The subdivision weight of the edge between the two specified vertices (if subdivision is enabled), otherwise -1.
     * @since 4.5.2.19
     */
    getEdgeWeight(vertIdxA: number, vertIdxB: number): number; // Number

    /**
     * @param index number
     * @returns DzFaceGroup The face group at the given index (if valid), otherwise null.
     */
    getFaceGroup(index: number): DzFaceGroup;

    /**
     * @param index number - The index of the facet to return.
     * @returns DzFacet The facet at the given index in this mesh.
     */
    getFacet(index: number): DzFacet;

    /**
     * @param index number - The index of the desired material group.
     * @returns DzMaterialFaceGroup The material group at the given index (if any), otherwise null.
     */
    getMaterialGroup(index: number): DzMaterialFaceGroup;

    /**
     * @param index number - The index of the normal to return.
     * @returns DzVec3 The normal at the given index in this mesh.
     */
    getNormal(index: number): DzVec3;

    /**
     * @returns number The number of edges in this mesh.
     */
    getNumEdges(): number; // Number

    /**
     * @returns number The number of face groups in this mesh.
     */
    getNumFaceGroups(): number; // Number

    /**
     * @returns number The number of facets in this mesh.
     */
    getNumFacets(): number; // Number

    /**
     * @returns number The number of material groups in this mesh.
     */
    getNumMaterialGroups(): number; // Number

    /**
     * @returns number The number of normals in this mesh.
     */
    getNumNormals(): number; // Number

    /**
     * @returns number The number of polylines in this mesh.
     * @since 4.11.0.36
     */
    getNumPolylines(): number; // Number

    /**
     * @returns number The number of polyline segments in this mesh.
     * @since 4.11.0.36
     */
    getNumPolylineSegments(): number; // Number

    /**
     * @returns number The number of quadrilaterals (4-sided facets) in this mesh.
     * @since 4.11.0.260
     */
    getNumQuads(): number; // Number

    /**
     * @returns number The number of triangles (3-sided facets) in this mesh.
     * @since 4.11.0.260
     */
    getNumTris(): number; // Number

    /**
     * @returns number The number of subdivision weighted edges on this mesh (if subdivision is enabled), otherwise 0.
     * @since 4.5.2.19
     */
    getNumWeightedEdges(): number; // Number

    /**
     * @returns number The number of subdivision weighted vertices on this mesh (if subdivision is enabled), otherwise 0.
     * @since 4.5.2.19
     */
    getNumWeightedVertices(): number; // Number

    /**
     * @param polylineIdx number - The index of the polyline.
     * @returns number The cage index for the specified polyline (if valid), otherwise -1.
     * @since 4.11.0.36
     */
    getPolylineCageIndex(polylineIdx: number): number; // Number

    /**
     * @param polylineIdx number - The index of the polyline.
     * @returns number The face group index for the specified polyline (if valid), otherwise -1.
     * @since 4.11.0.36
     */
    getPolylineFaceGroupIndex(polylineIdx: number): number; // Number

    /**
     * @param polylineIdx number - The index of the polyline.
     * @returns number The material group index for the specified polyline (if valid), otherwise -1.
     * @since 4.11.0.36
     */
    getPolylineMaterialGroupIndex(polylineIdx: number): number; // Number

    /**
     * @param index number - The index of the polyline.
     * @returns any[] The polyline texture coordinate indices (if valid), otherwise an empty list.
     * @since 4.11.0.36
     */
    getPolylineUVIndices(index: number): any[]; // Array

    /**
     * @param index number - The index of the polyline.
     * @returns any[] The polyline vertex indices (if valid), otherwise an empty list.
     * @since 4.11.0.36
     */
    getPolylineVertexIndices(index: number): any[]; // Array

    /**
     * @returns number The SubDAlgorithm type for rendering Subdivision meshes.
     */
    getSubDAlgorithm(): number; // SubDAlgorithm

    /**
     * @returns number The edge interpolation type for rendering Subdivision meshes.
     */
    getSubDEdgeInterpolation(): number; // SubDEdgeInterpolation

    /**
     * @returns number The SubDNormalSmoothingMode type for rendering Subdivision meshes.
     * @since 4.10.0.101
     */
    getSubDNormalSmoothingMode(): number; // SubDNormalSmoothingMode

    /**
     * @param vertIdx number - The index of the vertex.
     * @returns number The subdivision weight for the specified vertex (if subdivision is enabled), otherwise -1.
     * @since 4.5.2.19
     */
    getVertexWeight(vertIdx: number): number; // Number

    /**
     * @returns any[] A list of the subdivision weighted edges on this mesh (if subdivision is enabled), otherwise an empty list.
     * @since 4.5.2.19
     */
    getWeightedEdges(): any[]; // Array

    /**
     * @returns any[] A list of the subdivision weighted vertices on this mesh (if subdivision is enabled), otherwise an empty list.
     * @since 4.5.2.19
     */
    getWeightedVertices(): any[]; // Array

    /**
     * Inserts a UV set for this mesh in the specified position.
     * @param idx number - The index to insert the UV set at.
     * @param uvSet DzUVSet
     */
    insertUVSet(idx: number, uvSet: DzUVSet): void;

    /**
     * Sets the number of facets on this mesh.
     * @param numFacets number - The number of facets to pre-size to.
     * @returns DzError DZ_NO_ERROR if successful, otherwise an appropriate error code.
     */
    preSizeFacets(numFacets: number): DzError;

    /**
     * Pre-sizes the polylines set.
     * @param numPolyLines number
     * @param numTotalSegments number - The total number of segments across all of the polylines.
     * @returns DzError DZ_NO_ERROR if successful, otherwise an appropriate error code.
     * @since 4.11.0.36
     */
    preSizePolylines(numPolyLines: number, numTotalSegments: number): DzError;

    /**
     * Sets the number of subdivision weighted edges on this mesh (if subdivision is enabled).
     * @param numEdges number - The number of weighted edges to pre-size to.
     * @since 4.5.2.19
     */
    preSizeWeightedEdges(numEdges: number): void;

    /**
     * Sets the number of subdivision weighted vertices on this mesh (if subdivision is enabled).
     * @param numVerts number - The number of weighted vertices to pre-size to.
     * @since 4.5.2.19
     */
    preSizeWeightedVertices(numVerts: number): void;

    /**
     * Removes all facets from this mesh.
     * @param removeMats boolean - If true, removes all of the current material groups.
     * @param removeGroups boolean - If true, removes all of the current face groups.
     */
    removeAllFacets(removeMats: boolean, removeGroups: boolean): void;

    /**
     * Removes all facets from this mesh without removing any face groups or material groups.
     */
    removeAllFacets(): void;

    /**
     * Removes all polylines.
     * @param removeMats boolean - If true, removes material face groups that become empty as a result of removing the polylines.
     * @param removeGroups boolean - If true, removes face groups that become empty as a result of removing the polylines.
     * @since 4.11.0.36
     */
    removeAllPolylines(removeMats?: boolean, removeGroups?: boolean): void;

    /**
     * Removes all UV sets from this mesh.
     */
    removeAllUVSets(): void;

    /**
     * Removes the face group from this mesh.
     * @param name string - The name of the face group to remove.
     * @param defaultGrp string - The name of the default group that facets in name will be assigned to.
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     * @since 4.11.0.200
     */
    removeFaceGroup(name: string, defaultGrp?: string): DzError;

    /**
     * Removes the facet at the given index from this mesh.
     * @param facetIdx number - The index of the facet to remove.
     */
    removeFacet(facetIdx: number): void;

    /**
     * Removes the facets in the given group from this mesh. This will traverse all the face and material groups and remove the facets referred to.
     * @param grp DzFaceGroup - The group of facets to remove.
     * @param removeVerts boolean - Not used; has no affect; remains for SDK compatibility only.
     */
    removeFacets(grp: DzFaceGroup, removeVerts?: boolean): void;

    /**
     * Removes the given material group index from all of the facets. Assigns any facets that are removed to the default group. If the default group does not exist one is created on the shape that is passed in.
     * @param removeIdx number - The index of the material group to be removed.
     * @param defaultGrpIdx number - The index of the material group for facets to be reassigned to. If -1, a new “<default>” group will be created.
     * @param shape DzShape - The shape to remove the material from.
     * @returns DzError
     */
    removeMaterialGroup(removeIdx: number, defaultGrpIdx: number, shape: DzShape): DzError;

    /**
     * Removes the polyline at the given index.
     * @param polylineIdx number - The index of the polyline to remove.
     * @since 4.11.0.36
     */
    removePolyline(polylineIdx: number): void;

    /**
     * Removes the UV set at the specified index from this mesh.
     * @param index number - The index of the UV set to remove.
     */
    removeUVSet(index: number): void;

    /**
     * Removes a UV set from this mesh.
     * @param uvSet DzUVSet
     */
    removeUVSet(uvSet: DzUVSet): void;

    /**
     * Sets the subdivision weight of the specified edge (if subdivision is enabled).
     * @param vertIdxA number - The first vertex index of the edge.
     * @param vertIdxB number - The second vertex index of the edge.
     * @param weight number - The subdivision weight.
     * @since 4.5.2.19
     */
    setEdgeWeight(vertIdxA: number, vertIdxB: number, weight: number): void;

    /**
     * Sets the number polylines.
     * @param numPolyLines number - The number of polylines.
     * @param numTotalSegments number - The total number of segments across all of the polylines.
     * @since 4.11.0.36
     */
    setNumPolylines(numPolyLines: number, numTotalSegments: number): void;

    /**
     * Sets the algorithm for subdivision meshes.
     * @param algo number - The subdivision algorithm to set.
     */
    setSubDAlgorithm(algo: number): void;

    /**
     * Sets the edge interpolation type for rendering Subdivision meshes.
     * @param interp number - The SubDEdgeInterpolation type to set.
     */
    setSubDEdgeInterpolation(interp: number): void;

    /**
     * Sets the normal smmothing mode for subdivision meshes.
     * @param normalMode number - The subdivision normal calculation mode to set.
     * @since 4.10.0.101
     */
    setSubDNormalSmoothingMode(normalMode: number): void;

    /**
     * Sets the texture coordinates for this mesh.
     * @param map DzMap - The new UV set for this mesh.
     */
    setUVList(map: DzMap): void;

    /**
     * Sets the subdivision weight for the specified vertex (if subdivision is enabled).
     * @param vertIdx number - The index of the vertex.
     * @param weight number - The subdivision weight.
     * @since 4.5.2.19
     */
    setVertexWeight(vertIdx: number, weight: number): void;

    /* Signals */

    /**
     * Emitted when the asset for this mesh has been modified.
     */
    assetModified: ISignal<void>;

    /**
     * Emitted when the asset for this mesh has been saved.
     */
    assetWasSaved: ISignal<void>;

    /**
     * Emitted when the edge selection for this mesh has changed.
     */
    edgeSelectionChanged: ISignal<void>;

    /**
     * Emitted when the facet selection for this mesh has changed.
     */
    facetSelectionChanged: ISignal<void>;

    /**
     * Emitted when the polyline selection for this mesh has changed.
     */
    polylineSelectionChanged: ISignal<void>;

    /**
     * Emitted when the state of subdivision for this mesh changes.
     * @param onOff boolean - The state that subdivision has been changed to.
     */
    subDivisionEnabled: ISignal<boolean>;

    /**
     * Emitted when the list of UV sets for this mesh has changed.
     */
    uvListChanged: ISignal<void>;

    /* Undocumented Augment Members */

    /** @undocumented */
    TimingUnknown: number; // 0

    /** @undocumented */
    TimingAsync: number; // 1

    /** @undocumented */
    TimingPreferCacheAsync: number; // 2

    /** @undocumented */
    TimingSync: number; // 3

    /** @undocumented */
    objectName: string; // geometry

    /** @undocumented */
    name: string; // geometry

    /** @undocumented */
    hasPendingChanges: boolean; // false

    /** @undocumented */
    buildTiming: number; // 0

    /** @undocumented */
    activateVertexGroup(p0: QString): any;

    /** @undocumented */
    addSelectedFacetsToGroup(p0: QString): any;

    /** @undocumented */
    addSelectedFacetsToMaterialGroup(p0: number): any;

    /** @undocumented */
    addToVertexGroup(p0: QString): any;

    /** @undocumented */
    addVertex(p0: DzVec3): any;

    /** @undocumented */
    addVertex(p0: number, p1: number, p2: number): any;

    /** @undocumented */
    addVerticesFromMesh(p0: DzVertexMesh): any;

    /** @undocumented */
    beginEdit(p0?: boolean): any;

    /** @undocumented */
    calculateSurfaceAreaForBoundingBox(p0: DzBox3): any;

    /** @undocumented */
    calculateSurfaceAreaForFacetList(p0: any[]): any;

    /** @undocumented */
    clearNgonIndex(p0: number): any;

    /** @undocumented */
    copyFrom(p0: DzVertexMesh): any;

    /** @undocumented */
    copyFrom(p0: DzVertexMesh, p1: boolean): any;

    /** @undocumented */
    copyFrom(p0: DzVertexMesh, p1: boolean, p2: boolean): any;

    /** @undocumented */
    createFacetSet(p0: QString): any;

    /** @undocumented */
    createVertexGroup(p0: QString): any;

    /** @undocumented */
    deactivateVertexGroup(p0: QString): any;

    /** @undocumented */
    decrementNgons(p0: number): any;

    /** @undocumented */
    deselectAllFacets(): any;

    /** @undocumented */
    deselectAllPolylines(): any;

    /** @undocumented */
    deselectFacets(p0: DzFaceGroup): any;

    /** @undocumented */
    deselectHiddenEdgesAndVertices(): any;

    /** @undocumented */
    destroyed(): void;

    /** @undocumented */
    destroyed(p0: QObject): void;

    /** @undocumented */
    emitFacetSelectionChanged(): void;

    /** @undocumented */
    emitVertexSelectionChanged(): void;

    /** @undocumented */
    enableSubDivision(p0: boolean): any;

    /** @undocumented */
    facesFromVertices(p0: any[]): any;

    /** @undocumented */
    find(p0: QString): any;

    /** @undocumented */
    find(p0: DzUri): any;

    /** @undocumented */
    findFacetSet(p0: QString): any;

    /** @undocumented */
    finishEdit(): void;

    /** @undocumented */
    getActiveVertexGroup(p0: number): any;

    /** @undocumented */
    getCurrentGeometryForNode(p0: DzNode): any;

    /** @undocumented */
    getFacetSetName(p0: number): any;

    /** @undocumented */
    getGroupBoundingBox(p0: QString): any;

    /** @undocumented */
    getGroupBoundingBox(p0: QString, p1: DzMatrix3): any;

    /** @undocumented */
    getGroupOrientedBox(p0: QString, p1: DzVec3, p2: DzQuat, p3: DzVec3): any;

    /** @undocumented */
    getGroupOrientedBox(p0: QString, p1: DzMatrix3, p2: DzVec3, p3: DzQuat, p4: DzVec3): any;

    /** @undocumented */
    getLODName(p0: number): any;

    /** @undocumented */
    getOrientedBox(p0: DzVec3, p1: DzQuat, p2: DzVec3): any;

    /** @undocumented */
    getUVSet(p0: number): any;

    /** @undocumented */
    getUVs(): any;

    /** @undocumented */
    getVertex(p0: number): any;

    /** @undocumented */
    getVertexGroup(p0: number): any;

    /** @undocumented */
    hasChanged(): void;

    /** @undocumented */
    hasOverlappingUVIslands(p0: boolean): any;

    /** @undocumented */
    hideFacets(p0: DzFaceGroup): any;

    /** @undocumented */
    incrementNgons(p0: number): any;

    /** @undocumented */
    inherits(p0: QString): any;

    /** @undocumented */
    invalidateVBOs(p0: boolean): any;

    /** @undocumented */
    invalidateVBOs(p0: boolean, p1: boolean, p2: boolean): any;

    /** @undocumented */
    isSubDivisionEnabled(): boolean;

    /** @undocumented */
    isVertexSelected(p0: number): void;

    /** @undocumented */
    iskindof(p0: QString): any;

    /** @undocumented */
    lodsChanged(): void;

    /** @undocumented */
    makeCopy(p0: boolean): any;

    /** @undocumented */
    makeCopy(p0: boolean, p1: boolean): any;

    /** @undocumented */
    markChanged(): void;

    /** @undocumented */
    modifyAsset(p0: DzUri): any;

    /** @undocumented */
    moveFacetSet(p0: number, p1: number): any;

    /** @undocumented */
    nameChanged(p0: QString): void;

    /** @undocumented */
    needRebuild(p0: boolean): any;

    /** @undocumented */
    needsSave(p0: QString): any;

    /** @undocumented */
    preSizeVertexArray(p0: number): any;

    /** @undocumented */
    removeFacetGroup(p0: QString): any;

    /** @undocumented */
    removeFacetGroup(p0: QString, p1: QString): any;

    /** @undocumented */
    removeFacetSet(p0: number): any;

    /** @undocumented */
    removeUnusedVertices(p0: boolean): any;

    /** @undocumented */
    removeUnusedVertices(p0: boolean, p1: DzIndexChangeSet): any;

    /** @undocumented */
    removeUnusedVertices(p0: boolean, p1: DzIndexChangeSet, p2: boolean): any;

    /** @undocumented */
    renameFacetSet(p0: number, p1: QString): any;

    /** @undocumented */
    rotate(p0: DzQuat): any;

    /** @undocumented */
    scale(p0: DzVec3): any;

    /** @undocumented */
    scale(p0: number): any;

    /** @undocumented */
    selectAllVertices(p0: boolean): any;

    /** @undocumented */
    selectAllVisibleVertices(p0: boolean): any;

    /** @undocumented */
    selectEdgesByFacets(p0: any[]): any;

    /** @undocumented */
    selectEdgesByFacets(p0: number, p1: number): any;

    /** @undocumented */
    selectEdgesByFacets(p0: any[], p1: boolean): any;

    /** @undocumented */
    selectEdgesByFacets(p0: number, p1: number, p2: boolean): any;

    /** @undocumented */
    selectEdgesBySubdivisonWeight(p0: number, p1: number): any;

    /** @undocumented */
    selectEdgesBySubdivisonWeight(p0: number, p1: number, p2: boolean): any;

    /** @undocumented */
    selectFacets(p0: DzFaceGroup): any;

    /** @undocumented */
    selectFacetsByEdgeCount(p0: number, p1: number, p2: boolean): any;

    /** @undocumented */
    selectVertex(p0: number): any;

    /** @undocumented */
    selectVertex(p0: number, p1: boolean): any;

    /** @undocumented */
    selectVerticesByFacets(p0: any[]): any;

    /** @undocumented */
    selectVerticesByFacets(p0: number, p1: number): any;

    /** @undocumented */
    selectVerticesByFacets(p0: any[], p1: boolean): any;

    /** @undocumented */
    selectVerticesByFacets(p0: number, p1: number, p2: boolean): any;

    /** @undocumented */
    selectVerticesByIndexList(p0: number, p1: number): any;

    /** @undocumented */
    selectVerticesByIndexList(p0: number, p1: number, p2: boolean): any;

    /** @undocumented */
    selectVerticesBySubdivisonWeight(p0: number, p1: number): any;

    /** @undocumented */
    selectVerticesBySubdivisonWeight(p0: number, p1: number, p2: boolean): any;

    /** @undocumented */
    selectVisibleVerticesByIndexList(p0: number, p1: number): any;

    /** @undocumented */
    selectVisibleVerticesByIndexList(p0: number, p1: number, p2: boolean): any;

    /** @undocumented */
    setActiveFacetSet(p0: number): any;

    /** @undocumented */
    setActiveFacetSet(p0: QString): any;

    /** @undocumented */
    setNumFacets(p0: number): any;

    /** @undocumented */
    setUseVBORendering(p0: boolean): any;

    /** @undocumented */
    setVertex(p0: number, p1: DzVec3): any;

    /** @undocumented */
    setVertexArray(p0: number): any;

    /** @undocumented */
    subdivideCatmullClark(p0: number): any;

    /** @undocumented */
    subdivideGeneral(p0: number, p1: number): any;

    /** @undocumented */
    topologyChanged(): void;

    /** @undocumented */
    transform(p0: DzMatrix3): any;

    /** @undocumented */
    translate(p0: DzVec3): any;

    /** @undocumented */
    unableToFindFile(p0: QString): any;

    /** @undocumented */
    vertexMapFromImage(p0: QImage): any;

    /** @undocumented */
    vertexSelectionChanged(): void;

    /** @undocumented */
    verticesFromFaces(p0: any[]): any;

    /** @undocumented */
    visibilityChanged(): void;
}
