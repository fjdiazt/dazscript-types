/**
 * DzShape subclass for polygonal mesh geometry.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/facetshape_dz
 */
declare class DzFacetShape extends DzShape {

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * @returns DzFacetMesh The facet mesh geometry held by this shape.
     */
    getFacetMesh(): DzFacetMesh;

    /**
     * @returns DzEnumProperty The property that controls the resolution level.
     */
    getLODControl(): DzEnumProperty;

    /**
     * @returns number The subdivision algorithm used for this shape.
     * @since 4.7.1.25
     */
    getSubDAlgo(): number; // Number

    /**
     * @returns DzEnumProperty The property that controls the subdivision algorithm.
     */
    getSubDAlgorithmControl(): DzEnumProperty;

    /**
     * @returns number The subdivision level used for this shape when drawing in the viewport.
     * @since 4.7.1.25
     */
    getSubDDrawLevel(): number; // Number

    /**
     * @returns number The subdivision edge interpolation mode used for this shape.
     * @since 4.7.1.25
     */
    getSubDInterpolateLevel(): number; // Number

    /**
     * @returns DzEnumProperty The property that controls the edge interpolation mode.
     */
    getSubDInterpolateLevelControl(): DzEnumProperty;

    /**
     * @returns DzIntProperty The property that controls the view subd level.
     */
    getSubDLevelControl(): DzIntProperty;

    /**
     * @returns number The subdivision level used for this shape when rendering.
     * @since 4.7.1.25
     */
    getSubDRenderLevel(): number; // Number

    /**
     * @returns DzIntProperty The property that controls the render subd level (minimum).
     */
    getSubDRenderLevelControl(): DzIntProperty;

    /**
     * @returns boolean true if level of detail (LOD) is active on this shape, otherwise false.
     */
    isLodActive(): boolean; // Boolean

    /**
     * @returns boolean true if subdivision is active on this shape, otherwise false.
     */
    isSubDivisionActive(): boolean; // Boolean

    /**
     * Subdivides the mesh based on the values of properties that control the algorithm, edge interpolation mode, normal smoothing mode, and whether it is for rendering or drawing.
     * @param mesh DzFacetMesh - The mesh to subdivide.
     * @param isRender boolean - If true, subD render level is used instead of subD draw level.
     */
    subDMesh(mesh: DzFacetMesh, isRender: boolean): void;

    /* Signals */

    facetMeshChanged: ISignal<void>;

    renderSubDChanged: ISignal<void>;

    subDAlgorithmChanged: ISignal<void>;

    subDInterpolateLevelChanged: ISignal<void>;

    subDNormalSmoothingChanged: ISignal<void>;

    /* Undocumented Augment Members */

    /** @undocumented */
    addEdgeSelectionGroup(p0: DzSelectionGroup): any;

    /** @undocumented */
    addFacetSelectionGroup(p0: DzSelectionGroup): any;

    /** @undocumented */
    addMaterialType(p0: QString, p1: QString): any;

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
    clearMaterialTypes(p0: QString): any;

    /** @undocumented */
    clearVertexSelectionGroup(p0: DzSelectionGroup): any;

    /** @undocumented */
    createElementCopy(p0: DzElementDuplicateContext): any;

    /** @undocumented */
    createElementCopySignal(p0: DzElementDuplicateContext): any;

    /** @undocumented */
    createShapeFromGroup(p0: QString): any;

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
    facetSelectionChanged(): void;

    /** @undocumented */
    facetSelectionGroupListChanged(): void;

    /** @undocumented */
    findAssemblyMaterialIndex(p0: DzMaterial): any;

    /** @undocumented */
    findEdgeSelectionGroup(p0: QString): any;

    /** @undocumented */
    findEdgeSelectionGroup(p0: QString, p1: boolean): any;

    /** @undocumented */
    findFacetSelectionGroup(p0: QString): any;

    /** @undocumented */
    findFacetSelectionGroup(p0: QString, p1: boolean): any;

    /** @undocumented */
    findLeafRegion(p0: QString): any;

    /** @undocumented */
    findRigidityGroup(p0: QString): any;

    /** @undocumented */
    findSimulationSettingsProvider(p0: QString): any;

    /** @undocumented */
    findVertexSelectionGroup(p0: QString): any;

    /** @undocumented */
    findVertexSelectionGroup(p0: QString, p1: boolean): any;

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
    getLeafRegion(p0: number): any;

    /** @undocumented */
    getMaterialSelectionSets(p0: boolean): any;

    /** @undocumented */
    getMaterialTypes(p0: QString): any;

    /** @undocumented */
    getRigidityGroup(p0: number): any;

    /** @undocumented */
    getVertexSelectionGroup(p0: number): any;

    /** @undocumented */
    hideProperties(p0: boolean): any;

    /** @undocumented */
    isDataItemNameUnique(p0: QString): any;

    /** @undocumented */
    isDataItemNameUnique(p0: QString, p1: boolean): any;

    /** @undocumented */
    isPrivatePropertyNameUnique(p0: QString): any;

    /** @undocumented */
    isPrivatePropertyNameUnique(p0: QString, p1: boolean): any;

    /** @undocumented */
    isPropertyNameUnique(p0: QString): any;

    /** @undocumented */
    isPropertyNameUnique(p0: QString, p1: boolean): any;

    /** @undocumented */
    iskindof(p0: QString): any;

    /** @undocumented */
    materialSelectionSetsChanged(): void;

    /** @undocumented */
    materialTypesChanged(): void;

    /** @undocumented */
    mergeElement(p0: DzElement, p1: DzElementDuplicateContext): any;

    /** @undocumented */
    mergeElementSignal(p0: DzElement, p1: DzElementDuplicateContext): any;

    /** @undocumented */
    moveGeometryRegion(p0: DzShape): any;

    /** @undocumented */
    prefixPropertyLabels(p0: QString): any;

    /** @undocumented */
    rebuildBaseMap(p0: number): any;

    /** @undocumented */
    remapMaterials(p0: DzIndexChangeMap): any;

    /** @undocumented */
    remappingForTopologyChange(p0: DzIndexChangeSet): any;

    /** @undocumented */
    removeEdgeSelectionGroup(p0: QString): any;

    /** @undocumented */
    removeEdgeSelectionGroup(p0: DzSelectionGroup): any;

    /** @undocumented */
    removeEdgeSelectionGroup(p0: number): any;

    /** @undocumented */
    removeFacetSelectionGroup(p0: QString): any;

    /** @undocumented */
    removeFacetSelectionGroup(p0: DzSelectionGroup): any;

    /** @undocumented */
    removeFacetSelectionGroup(p0: number): any;

    /** @undocumented */
    removeMaterialType(p0: QString, p1: QString): any;

    /** @undocumented */
    removeRigidityGroup(p0: DzRigidityGroup): any;

    /** @undocumented */
    removeShapeInstance(p0: DzAbstractShapeInstance): any;

    /** @undocumented */
    removeSimulationSettingsProvider(p0: QString): any;

    /** @undocumented */
    removeVertexSelectionGroup(p0: QString): any;

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
    setMaterialTypes(p0: QString, p1: string[]): any;

    /** @undocumented */
    setRigidityMap(p0: DzWeightMap): any;

    /** @undocumented */
    simulationProviderListChanged(): void;

    /** @undocumented */
    updateMaterialTypesToNewName(p0: QString, p1: QString): any;

    /** @undocumented */
    updateSubDEnabled(): void;

    /** @undocumented */
    vertexSelectionGroupListChanged(): void;
}
