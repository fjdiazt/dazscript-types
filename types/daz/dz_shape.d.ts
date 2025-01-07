declare class DzShape extends DzElement {

    /** Properties */

    /** Methods */
    addMaterial(mat: DzMaterial): DzError;
    addRigidityGroup(group: DzRigidityGroup): void;
    addShapeInstance(instance: DzAbstractShapeInstance): void;
    assemblyChanged(): void;
    buildRegionMaps(): void;
    buildRegionMapsRecurse(region: DzGeometryRegion): void;
    clearMaterialSelection(): void;
    createMaterial(name: string): DzError;
    draw(style: DzDrawStyle, wsGeom: DzGeometry): void;
    findAssemblyMaterialIndex(mat: DzMaterial): number;
    findLeafRegion(regionName: string): DzGeometryRegion;
    findMaterial(name: string): DzMaterial;
    findMaterialIndex(mat: DzMaterial): number;
    findMaterialIndex(name: string): number;
    findMaterialIndex(mat: DzMaterial): number;
    findMaterialIndex(name: string): number;
    findRigidityGroup(group: string): DzRigidityGroup;
    geomChanged(): void;
    geomTopologyChanged(): void;
    geometryRegionChanged(): void;
    geometryRegionSelectionChanged(): void;
    getAllMaterials(matPtrs?: DzMaterialPtr[]): DzMaterial[];
    getAllRenderAssemblyPrioritizedMaterials(prioritizedMaterials: DzMaterialPtr[]): void;
    getAllRenderPrioritizedMaterials(): QObject[];
    getAllRenderPrioritizedMaterials(prioritizedMaterials: DzMaterialPtr[]): void;
    getAllRenderPrioritizedMaterials(): QObject[];
    getAllRenderPrioritizedMaterials(prioritizedMaterials: DzMaterialPtr[]): void;
    getAllSelectedMaterials(): QObject[];
    getAllSelectedMaterials(matPtrs: DzMaterialPtr[]): void;
    getAllSelectedMaterials(): QObject[];
    getAllSelectedMaterials(matPtrs: DzMaterialPtr[]): void;
    getAssemblyGeometry(): DzGeometry;
    getAssemblyMaterial(which: number): DzMaterial;
    getCurrentShapeForNode(node: DzNode): DzShape;
    getFacetToLeafMap(): any;
    getFacetMesh(): DzFacetMesh;
    getGeometry(): DzGeometry;
    getGeometryRegion(): DzGeometryRegion;
    getGeometryRegionLeafSelection(): DzGeometryRegion;
    getGeometryRegionSelection(): DzGeometryRegion;
    getLeafRegion(index: number): DzGeometryRegion;
    getMaterial(which: number): DzMaterial;
    getModifiableAssemblyGeom(isRender: boolean): DzVertexMesh;
    getModifiableGeom(isRender: boolean, currentCache: DzVertexMesh): DzVertexMesh;
    getNode(): DzNode;
    getNumAssemblyMaterials(): number;
    getNumFacetToRegionLeafValues(): number;
    getNumLeafRegions(): number;
    getNumMaterials(): number;
    getNumRigidityGroups(): number;
    getNumSelectedMaterials(): number;
    getNumShapeInstances(): number;
    getRenderPrioritizedMaterials(inputMaterials: DzMaterialPtr[], prioritizedMaterials: DzMaterialPtr[]): void;
    getRigidityGroup(which: number): DzRigidityGroup;
    getRigidityGroups(): DzRigidityGroup[];
    getRigidityMap(): DzWeightMap;
    getSelectedMaterial(which: number): DzMaterial;
    getShapeInstance(which: number): DzAbstractShapeInstance;
    getShapeInstance(): DzAbstractShapeInstance[];
    hasAssemblyGeometry(): boolean;
    insertMaterial(newmat: DzMaterial, index: number): DzError;
    invalidateGeomCaches(): void;
    invalidateWorkingMesh(): void;
    isSubDivisionEnabled(): any;
    materialAdded(mat: DzMaterial): void;
    materialChanged(): void;
    materialListChanged(): void;
    materialRemoved(mat: DzMaterial): void;
    materialSelected(mat: DzMaterial): void;
    materialSelectionChanged(): void;
    materialUnselected(mat: DzMaterial): void;
    mergesSnapGeometry(): boolean;
    modifyGeometryAsset(): void;
    moveGeometryRegion(newShape: DzShape): void;
    rebuildBaseMap(whichUVSet: number): void;
    removeMaterial(mat: DzMaterial): DzError;
    removeMaterialByName(material: string, defaultMaterial: string): DzError;
    removeRigidityGroup(group: DzRigidityGroup): void;
    removeShapeInstance(instance: DzAbstractShapeInstance): boolean;
    render(settings: DzRenderSettings, wsGeom: DzGeometry): void;
    replaceMaterial(current: DzMaterial, newMat: DzMaterial): DzError;
    rigidityGroupIterator(): DzRigidityGroupListIterator;
    rigidityGroupListChanged(): void;
    rigidityMapChanged(): void;
    setGeometryRegion(region: DzGeometryRegion): void;
    setGeometryRegionLeafSelection(sel: DzGeometryRegion): void;
    setGeometryRegionSelection(sel: DzGeometryRegion): void;
    setRigidityMap(map: DzWeightMap): void;
    shapeInstancesIterator(): DzAbstractShapeInstanceListIterator;
    smoothingChanged(): void;
    updateGeom(): void;
    updateMaterialSelection(mat: DzMaterial, onOff: boolean): void;
    updateMaterials(): void;
    updateRegionMap(): void;
    updateSmoothing(): void;
    updateUVs(): void;
    uvsChanged(): void;
}