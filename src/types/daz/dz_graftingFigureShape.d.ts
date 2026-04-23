/**
 * DzShape subclass for grafting polygonal mesh geometry.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/graftingfigureshape_dz
 */
declare class DzGraftingFigureShape extends DzFacetShape {

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * @returns any[] A list of facet indices, where the index of the facet in the original mesh is used to lookup the corresponding facet in the welded mesh (if any). A value of less than 0 indicates that the facet was removed as a result of grafting.
     * @since 4.11.0.68
     */
    getOrignalToWeldMeshList(): any[]; // Array

    /**
     * @returns number The number of entries in the orignal to weld mesh list.
     */
    getOrignalToWeldMeshMapSize(): number; // Number

    /**
     * @returns any[] A list of facet indices, where the index of the facet in the welded mesh is used to lookup the corresponding facet in the orignal mesh.
     * @since 4.11.0.68
     */
    getWeldMeshToOrginalList(): any[]; // Array

    /**
     * @returns number The number of entries in the weld to orignal mesh list.
     */
    getWeldMeshToOrginalMapSize(): number; // Number

    /**
     * @returns boolean true if the topology of this shape has changed as a result of grafting; e.g., facets have been added/removed.
     */
    hasWeldedFollowers(): boolean; // Boolean

    /**
     * Forces a refresh of the grafting geometry cache.
     */
    updateBuilder(): void;

    /* Undocumented Augment Members */

    /** @undocumented */
    addEdgeSelectionGroup(p0: DzSelectionGroup): any;

    /** @undocumented */
    addFacetSelectionGroup(p0: DzSelectionGroup): any;

    /** @undocumented */
    addMaterialType(p0: string, p1: string): any;

    /** @undocumented */
    addRigidityGroup(p0: DzRigidityGroup): any;

    /** @undocumented */
    addShapeInstance(p0: DzAbstractShapeInstance): any;

    /** @undocumented */
    addVertexSelectionGroup(p0: DzSelectionGroup): any;

    /** @undocumented */
    clearEdgeSelectionGroup(p0: DzSelectionGroup): any;

    /** @undocumented */
    clearFacetSelectionGroup(p0: DzSelectionGroup): any;

    /** @undocumented */
    clearMaterialTypes(): any;

    /** @undocumented */
    clearMaterialTypes(p0: string): any;

    /** @undocumented */
    clearSimulationProviderList(): any;

    /** @undocumented */
    clearVertexSelectionGroup(p0: DzSelectionGroup): any;

    /** @undocumented */
    createElementCopy(p0: DzElementDuplicateContext): any;

    /** @undocumented */
    createElementCopySignal(p0: DzElementDuplicateContext): any;

    /** @undocumented */
    createShapeFromGroup(p0: string): any;

    /** @undocumented */
    doDuplicateElement(p0: DzElementDuplicateContext): any;

    /** @undocumented */
    doMergeElement(p0: DzElement, p1: DzElementDuplicateContext): any;

    /** @undocumented */
    duplicateElement(p0: DzElement, p1: DzElementDuplicateContext): any;

    /** @undocumented */
    duplicateElementSignal(p0: DzElement, p1: DzElementDuplicateContext): any;

    /** @undocumented */
    duplicateMissingCustomData(p0: DzElement): any;

    /** @undocumented */
    duplicateMissingCustomDataWithContext(p0: DzElement, p1: DzElementDuplicateContext): any;

    /** @undocumented */
    duplicateMissingPrivateProperties(p0: DzElement): any;

    /** @undocumented */
    duplicateMissingPrivatePropertiesWithContext(p0: DzElement, p1: DzElementDuplicateContext): any;

    /** @undocumented */
    duplicateMissingProperties(p0: DzElement): any;

    /** @undocumented */
    duplicateMissingPropertiesWithContext(p0: DzElement, p1: DzElementDuplicateContext): any;

    /** @undocumented */
    edgeSelectionChanged(): void;

    /** @undocumented */
    edgeSelectionGroupListChanged(): void;

    /** @undocumented */
    emitMaterialListChanged(): void;

    /** @undocumented */
    endManip(): any;

    /** @undocumented */
    facetSelectionChanged(): void;

    /** @undocumented */
    facetSelectionGroupListChanged(): void;

    /** @undocumented */
    findAssemblyMaterialIndex(p0: DzMaterial): any;

    /** @undocumented */
    findEdgeSelectionGroup(p0: string): any;

    /** @undocumented */
    findEdgeSelectionGroup(p0: string, p1: boolean): any;

    /** @undocumented */
    findFacetSelectionGroup(p0: string): any;

    /** @undocumented */
    findFacetSelectionGroup(p0: string, p1: boolean): any;

    /** @undocumented */
    findLeafRegion(p0: string): any;

    /** @undocumented */
    findRigidityGroup(p0: string): any;

    /** @undocumented */
    findSimulationSettingsProvider(p0: string): any;

    /** @undocumented */
    findVertexSelectionGroup(p0: string): any;

    /** @undocumented */
    findVertexSelectionGroup(p0: string, p1: boolean): any;

    /** @undocumented */
    geomTopologyChanged(): void;

    /** @undocumented */
    geometryRegionChanged(): void;

    /** @undocumented */
    geometryRegionSelectionChanged(): void;

    /** @undocumented */
    getAssemblyMaterial(p0: number): any;

    /** @undocumented */
    getEdgeSelectionGroup(p0: number): any;

    /** @undocumented */
    getFacetSelectionGroup(p0: number): any;

    /** @undocumented */
    getGeometryRegion(): any;

    /** @undocumented */
    getGeometryRegionLeafSelection(): any;

    /** @undocumented */
    getGeometryRegionSelection(): any;

    /** @undocumented */
    getLeafRegion(p0: number): any;

    /** @undocumented */
    getMaterialNamesWithTypes(): any;

    /** @undocumented */
    getMaterialSelectionSets(): any;

    /** @undocumented */
    getMaterialSelectionSets(p0: boolean): any;

    /** @undocumented */
    getMaterialTypes(p0: string): any;

    /** @undocumented */
    getName(): any;

    /** @undocumented */
    getNumAssemblyMaterials(): any;

    /** @undocumented */
    getNumEdgeSelectionGroups(): any;

    /** @undocumented */
    getNumFacetSelectionGroups(): any;

    /** @undocumented */
    getNumLeafRegions(): any;

    /** @undocumented */
    getNumRigidityGroups(): any;

    /** @undocumented */
    getNumSelectedMaterials(): any;

    /** @undocumented */
    getNumShapeInstances(): any;

    /** @undocumented */
    getNumSimulationProviders(): any;

    /** @undocumented */
    getNumVertexSelectionGroups(): any;

    /** @undocumented */
    getRigidityGroup(p0: number): any;

    /** @undocumented */
    getRigidityMap(): any;

    /** @undocumented */
    getSimulationProviderNames(): any;

    /** @undocumented */
    getVertexSelectionGroup(p0: number): any;

    /** @undocumented */
    handleNeedsConfigurationCheck(): any;

    /** @undocumented */
    hasMultipleLOD(): any;

    /** @undocumented */
    hideProperties(p0: boolean): any;

    /** @undocumented */
    invalidateGeomCaches(): any;

    /** @undocumented */
    invalidateWorkingMesh(): any;

    /** @undocumented */
    isDataItemNameUnique(p0: string): any;

    /** @undocumented */
    isDataItemNameUnique(p0: string, p1: boolean): any;

    /** @undocumented */
    isPrivatePropertyNameUnique(p0: string): any;

    /** @undocumented */
    isPrivatePropertyNameUnique(p0: string, p1: boolean): any;

    /** @undocumented */
    isPropertyNameUnique(p0: string): any;

    /** @undocumented */
    isPropertyNameUnique(p0: string, p1: boolean): any;

    /** @undocumented */
    iskindof(p0: string): any;

    /** @undocumented */
    materialSelectionSetsChanged(): void;

    /** @undocumented */
    materialTypesChanged(): void;

    /** @undocumented */
    mergeElement(p0: DzElement, p1: DzElementDuplicateContext): any;

    /** @undocumented */
    mergeElementSignal(p0: DzElement, p1: DzElementDuplicateContext): any;

    /** @undocumented */
    mergesSnapGeometry(): any;

    /** @undocumented */
    modifyGeometryAsset(): any;

    /** @undocumented */
    moveGeometryRegion(p0: DzShape): any;

    /** @undocumented */
    prefixPropertyLabels(p0: string): any;

    /** @undocumented */
    rebuildBaseMap(p0: number): any;

    /** @undocumented */
    remappingForTopologyChange(p0: DzIndexChangeSet): any;

    /** @undocumented */
    removeEdgeSelectionGroup(p0: string): any;

    /** @undocumented */
    removeEdgeSelectionGroup(p0: DzSelectionGroup): any;

    /** @undocumented */
    removeEdgeSelectionGroup(p0: number): any;

    /** @undocumented */
    removeFacetSelectionGroup(p0: string): any;

    /** @undocumented */
    removeFacetSelectionGroup(p0: DzSelectionGroup): any;

    /** @undocumented */
    removeFacetSelectionGroup(p0: number): any;

    /** @undocumented */
    removeMaterialType(p0: string, p1: string): any;

    /** @undocumented */
    removeRigidityGroup(p0: DzRigidityGroup): any;

    /** @undocumented */
    removeShapeInstance(p0: DzAbstractShapeInstance): any;

    /** @undocumented */
    removeSimulationSettingsProvider(p0: string): any;

    /** @undocumented */
    removeVertexSelectionGroup(p0: string): any;

    /** @undocumented */
    removeVertexSelectionGroup(p0: DzSelectionGroup): any;

    /** @undocumented */
    removeVertexSelectionGroup(p0: number): any;

    /** @undocumented */
    rigidityGroupListChanged(): void;

    /** @undocumented */
    rigidityMapChanged(): void;

    /** @undocumented */
    rigidityWeightMapChanged(): void;

    /** @undocumented */
    selectionGroupListChanged(): void;

    /** @undocumented */
    setFacetMesh(p0: DzFacetMesh): any;

    /** @undocumented */
    setFacetsForNodeVisibility(p0: DzNode, p1: DzFacetMesh, p2: boolean): any;

    /** @undocumented */
    setGeometryRegion(p0: DzGeometryRegion): any;

    /** @undocumented */
    setGeometryRegionLeafSelection(p0: DzGeometryRegion): any;

    /** @undocumented */
    setGeometryRegionSelection(p0: DzGeometryRegion): any;

    /** @undocumented */
    setMaterialSelectionSets(p0: DzMaterialSelectionSet): any;

    /** @undocumented */
    setMaterialTypes(p0: string, p1: string[]): any;

    /** @undocumented */
    setRigidityMap(p0: DzWeightMap): any;

    /** @undocumented */
    simulationProviderListChanged(): void;

    /** @undocumented */
    updateAlgo(): any;

    /** @undocumented */
    updateFacetGeom(): any;

    /** @undocumented */
    updateInterpLevel(): any;

    /** @undocumented */
    updateLODControl(): any;

    /** @undocumented */
    updateLODs(): any;

    /** @undocumented */
    updateMaterialTypesToNewName(p0: string, p1: string): any;

    /** @undocumented */
    updateSmoothing(): any;

    /** @undocumented */
    updateSubDControl(): any;

    /** @undocumented */
    updateSubDEnabled(): void;

    /** @undocumented */
    updateUVs(): any;

    /** @undocumented */
    vertexSelectionGroupListChanged(): void;
}
