declare class DzFacetMesh {
    // Enumerations
    TimingUnknown: number; // 0
    TimingAsync: number; // 1
    TimingPreferCacheAsync: number; // 2
    TimingSync: number; // 3

    // Properties
    objectName: string; // geometry
    name: string; // geometry
    hasPendingChanges: boolean; // false
    buildTiming: number; // 0
    assetUri: object; // /data/DAZ%203D/Genesis/Base/Genesis.dsf#geometry
    assetNeedSave: boolean; // false
    assetSource: object; //
    assetId: string; // geometry
    assetIdAliases: object; //
    nameAliases: object; //
    assetAuthor: object; // ["DAZ 3D","","http://www.daz3d.com"]
    assetFileRevision: object; // 1.0.0.0
    assetModifiedDate: object; // Thu Jun 14 2012 20:06:44 GMT-0400 (Pacific SA Standard Time)
    extendedAssetIds: object; //

    // Methods
    activateFaceGroup(p0: QString): any;
    activateFaceGroup(p0: number): any;
    activateMaterial(p0: QString): any;
    activateMaterial(p0: number): any;
    activateVertexGroup(p0: QString): any;
    //addFacet(p0: DzFacet): any;
    addFacet(p0: number[], p1?: number[]): any;
    //addFacet(p0: DzFacet, p1: number): any;
    //addFacet(p0: int[4], p1: int[4], p2: unsignedchar): any;
    //addFacet(p0: any[], p1: any[], p2: unsignedchar): any;
    //addFacet(p0: DzFacet, p1: number, p2: unsignedchar): any;
    //addFacet(p0: int[4], p1: int[4], p2: number, p3: unsignedchar): any;
    addSelectedFacetsToGroup(p0: QString): any;
    addSelectedFacetsToMaterialGroup(p0: number): any;
    addToVertexGroup(p0: QString): any;
    addUVSet(p0: DzUVSet): any;
    addVertex(p0: DzVec3): any;
    addVertex(p0: number, p1: number, p2: number): any;
    addVerticesFromMesh(p0: DzVertexMesh): any;
    applySmoothing(p0: number): any;
    applyUVSet(p0: DzUVSet): any;
    assetModified(): void;
    assetWasSaved(): void;
    beginEdit(p0?: boolean): any;
    calculateSurfaceAreaForBoundingBox(p0: DzBox3): any;
    calculateSurfaceAreaForFacetList(p0: any[]): any;
    //calculateSurfaceAreaForFacetList(p0: DzIndexList): any;
    clearNgonIndex(p0: number): any;
    copyFrom(p0: DzVertexMesh): any;
    copyFrom(p0: DzVertexMesh, p1: boolean): any;
    copyFrom(p0: DzVertexMesh, p1: boolean, p2: boolean): any;
    createFaceGroup(p0: QString): any;
    createFacetSet(p0: QString): any;
    createMaterialGroup(p0: QString): any;
    createVertexGroup(p0: QString): any;
    deactivateVertexGroup(p0: QString): any;
    decrementNgons(p0: number): any;
    deselectAllFacets(): any;
    deselectAllPolylines(): any;
    deselectFacets(p0: DzFaceGroup): any;
    deselectHiddenEdgesAndVertices(): any;
    destroyed(): void;
    destroyed(p0: QObject): void;
    edgeSelectionChanged(): void;
    emitFacetSelectionChanged(): void;
    emitVertexSelectionChanged(): void;
    enableSubDivision(p0: boolean): any;
    facesFromVertices(p0: any[]): any;
    facetSelectionChanged(): void;
    find(p0: QString): any;
    find(p0: DzUri): any;
    findFaceGroup(p0: QString): DzFaceGroup;
    findFaceGroup(p0: QString, p1: number): DzFaceGroup;
    findFacetSet(p0: QString): any;
    findMaterialGroup(p0: QString): any;
    findMaterialGroup(p0: QString, p1: number): any;
    findUVSetIndexByLabel(p0: QString): any;
    finishEdit(): void;
    getActiveVertexGroup(p0: number): any;
    getCurrentGeometryForNode(p0: DzNode): any;
    getEdge(p0: number): any;
    getEdgeWeight(p0: number, p1: number): any;
    getFaceGroup(p0: number): any;
    getFacet(p0: number): any;
    getFacetSetName(p0: number): any;
    getGroupBoundingBox(p0: QString): any;
    //getGroupBoundingBox(p0: DzFaceGroup): any;
    getGroupBoundingBox(p0: QString, p1: DzMatrix3): any;
    getGroupOrientedBox(p0: QString, p1: DzVec3, p2: DzQuat, p3: DzVec3): any;
    getGroupOrientedBox(p0: QString, p1: DzMatrix3, p2: DzVec3, p3: DzQuat, p4: DzVec3): any;
    getLODName(p0: number): any;
    getMaterialGroup(p0: number): any;
    getNormal(p0: number): any;
    getOrientedBox(p0: DzVec3, p1: DzQuat, p2: DzVec3): any;
    getUVSet(p0: number): any;
    getUVs(): any;
    getVertex(p0: number): any;
    getVertexGroup(p0: number): any;
    getVertexWeight(p0: number): any;
    //getWeightedEdges(p0: QList<QPair<QPair<int, p1: int>, p2: float>>): any;
    //getWeightedVertices(p0: QList<QPair<int, p1: float>>): any;
    hasChanged(): void;
    hasOverlappingUVIslands(p0: boolean): any;
    hideFacets(p0: DzFaceGroup): any;
    incrementNgons(p0: number): any;
    inherits(p0: QString): any;
    insertUVSet(p0: number, p1: DzUVSet): any;
    invalidateVBOs(p0: boolean): any;
    invalidateVBOs(p0: boolean, p1: boolean, p2: boolean): any;
    isSubDivisionEnabled(): boolean;
    isVertexSelected(p0: number): void;
    iskindof(p0: QString): any;
    lodsChanged(): void;
    makeCopy(p0: boolean): any;
    makeCopy(p0: boolean, p1: boolean): any;
    markChanged(): void;
    modifyAsset(p0: DzUri): any;
    moveFacetSet(p0: number, p1: number): any;
    nameChanged(p0: QString): void;
    needRebuild(p0: boolean): any;
    needsSave(p0: QString): any;
    preSizeFacets(p0: number): any;
    preSizeVertexArray(p0: number): any;
    preSizeWeightedEdges(p0: number): any;
    preSizeWeightedVertices(p0: number): any;
    removeAllFacets(p0: boolean, p1: boolean): any;
    removeFacet(p0: number): any;
    removeFacetGroup(p0: QString): any;
    removeFacetGroup(p0: QString, p1: QString): any;
    removeFacetSet(p0: number): any;
    //removeFacets(p0: DzFaceGroup): any;
    //removeFacets(p0: DzFaceGroup, p1: boolean): any;
    removeMaterialGroup(p0: number, p1: number): any;
    removeMaterialGroup(p0: number, p1: number, p2: DzShape): any;
    removeUVSet(p0: DzUVSet): any;
    removeUVSet(p0: number): any;
    removeUnusedVertices(p0: boolean): any;
    removeUnusedVertices(p0: boolean, p1: DzIndexChangeSet): any;
    removeUnusedVertices(p0: boolean, p1: DzIndexChangeSet, p2: boolean): any;
    //removeVertices(p0: DzTSortedArray<int>): any;
    renameFacetSet(p0: number, p1: QString): any;
    rotate(p0: DzQuat): any;
    scale(p0: DzVec3): any;
    scale(p0: number): any;
    selectAllVertices(p0: boolean): any;
    selectAllVisibleVertices(p0: boolean): any;
    //selectEdgeLoopsByEdgeList(p0: DzIndexList): any;
    //selectEdgeLoopsByEdgeList(p0: DzIndexList, p1: boolean): any;
    selectEdgesByFacets(p0: any[]): any;
    selectEdgesByFacets(p0: number, p1: number): any;
    selectEdgesByFacets(p0: any[], p1: boolean): any;
    selectEdgesByFacets(p0: number, p1: number, p2: boolean): any;
    selectEdgesBySubdivisonWeight(p0: number, p1: number): any;
    selectEdgesBySubdivisonWeight(p0: number, p1: number, p2: boolean): any;
    //selectFacetLoopsByEdgeList(p0: DzIndexList): any;
    //selectFacetLoopsByEdgeList(p0: DzIndexList, p1: boolean): any;
    selectFacets(p0: DzFaceGroup): any;
    selectFacetsByEdgeCount(p0: number, p1: number, p2: boolean): any;
    //selectFacetsByIndexList(p0: DzIndexList): any;
    //selectFacetsByIndexList(p0: DzIndexList, p1: boolean): any;
    selectVertex(p0: number): any;
    selectVertex(p0: number, p1: boolean): any;
    //selectVertexLoopsByEdgeList(p0: DzIndexList): any;
    //selectVertexLoopsByEdgeList(p0: DzIndexList, p1: boolean): any;
    selectVerticesByFacets(p0: any[]): any;
    selectVerticesByFacets(p0: number, p1: number): any;
    selectVerticesByFacets(p0: any[], p1: boolean): any;
    selectVerticesByFacets(p0: number, p1: number, p2: boolean): any;
    //selectVerticesByIndexList(p0: DzIndexList): any;
    //selectVerticesByIndexList(p0: DzIndexList, p1: boolean): any;
    selectVerticesByIndexList(p0: number, p1: number): any;
    selectVerticesByIndexList(p0: number, p1: number, p2: boolean): any;
    selectVerticesBySubdivisonWeight(p0: number, p1: number): any;
    selectVerticesBySubdivisonWeight(p0: number, p1: number, p2: boolean): any;
    //selectVisibleVerticesByIndexList(p0: DzIndexList): any;
    //selectVisibleVerticesByIndexList(p0: DzIndexList, p1: boolean): any;
    selectVisibleVerticesByIndexList(p0: number, p1: number): any;
    selectVisibleVerticesByIndexList(p0: number, p1: number, p2: boolean): any;
    setActiveFacetSet(p0: number): any;
    setActiveFacetSet(p0: QString): any;
    setEdgeWeight(p0: number, p1: number, p2: number): any;
    setNumFacets(p0: number): any;
    //setSubDAlgorithm(p0: SubDAlgorithm): any;
    //setSubDEdgeInterpolation(p0: SubDEdgeInterpolation): any;
    //setSubDNormalSmoothingMode(p0: SubDNormalSmoothingMode): any;
    //setUVList(p0: DzMap): any;
    setUseVBORendering(p0: boolean): any;
    setVertex(p0: number, p1: DzVec3): any;
    setVertexArray(p0: number): any;
    setVertexWeight(p0: number, p1: number): any;
    //showFacets(p0: DzFaceGroup): any;
    subDivisionEnabled(p0: boolean): void;
    subdivideCatmullClark(p0: number): any;
    //subdivideCatmullClark(p0: number, p1: DzSubDMap): any;
    subdivideGeneral(p0: number, p1: number): any;
    topologyChanged(): void;
    transform(p0: DzMatrix3): any;
    translate(p0: DzVec3): any;
    unableToFindFile(p0: QString): any;
    uvListChanged(): void;
    vertexMapFromImage(p0: QImage): any;
    //vertexMapFromImage(p0: QImage, p1: DzMap::MapType): any;
    vertexSelectionChanged(): void;
    verticesFromFaces(p0: any[]): any;
    visibilityChanged(): void;
    //weldGroups(p0: DzFaceGroup, p1: DzFaceGroup, p2: QVector<int>): any;
    //weldGroupsByMap(p0: DzFaceGroup, p1: DzFaceGroup, p2: QVector<int>): any;
}