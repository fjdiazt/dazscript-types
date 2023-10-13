declare class DzFacetShape extends DzShape {
    elementID: number;	// 1970
    name: string;	// shape
    objectName: string;	// shape
    aboutToFinalize(p0: DzVertexMesh): any;
    addDataItem(p0: DzElementData): any;
    addEdgeSelectionGroup(p0: DzSelectionGroup): any;
    addFacetSelectionGroup(p0: DzSelectionGroup): any;
    addMaterial(p0: DzMaterial): any;
    addMaterialType(p0: QString, p1: QString): any;
    addPrivateProperty(p0: DzProperty): any;
    addProperty(p0: DzProperty): any;
    addRigidityGroup(p0: DzRigidityGroup): any;
    addShapeInstance(p0: DzAbstractShapeInstance): any;
    addVertexSelectionGroup(p0: DzSelectionGroup): any;
    assemblyChanged(): void;
    clearAnimData(p0: DzTimeRange): any;
    clearEdgeSelectionGroup(p0: DzSelectionGroup): any;
    clearFacetSelectionGroup(p0: DzSelectionGroup): any;
    clearMaterialTypes(p0: QString): any;
    clearVertexSelectionGroup(p0: DzSelectionGroup): any;
    copyFrom(p0: DzElement): any;
    copyToClipboard(p0: string[]): any;
    createElementCopy(p0: DzElementDuplicateContext): any;
    createElementCopySignal(p0: DzElementDuplicateContext): any;
    createMaterial(p0: QString): any;
    createShapeFromGroup(p0: QString): any;
    deleteDataItem(p0: DzElementData): any;
    destroyed(): void;
    destroyed(p0: QObject): void;
    doDuplicateElement(p0: DzElementDuplicateContext): any;
    doMergeElement(p0: DzElement, p1: DzElementDuplicateContext): any;
    duplicateElement(p0: DzElement, p1: DzElementDuplicateContext): any;
    duplicateElementSignal(p0: DzElement, p1: DzElementDuplicateContext): any;
    duplicateMissingCustomData(p0: DzElement): any;
    duplicateMissingCustomDataWithContext(p0: DzElement, p1: DzElementDuplicateContext): any;
    duplicateMissingPrivateProperties(p0: DzElement): any;
    duplicateMissingPrivatePropertiesWithContext(p0: DzElement, p1: DzElementDuplicateContext): any;
    duplicateMissingProperties(p0: DzElement): any;
    duplicateMissingPropertiesWithContext(p0: DzElement, p1: DzElementDuplicateContext): any;
    edgeSelectionChanged(): void;
    edgeSelectionGroupListChanged(): void;
    emitMaterialListChanged(): void;
    facetMeshChanged(): void;
    facetSelectionChanged(): void;
    facetSelectionGroupListChanged(): void;
    findAssemblyMaterialIndex(p0: DzMaterial): any;
    findDataItem(p0: QString): any;
    findDataItemIndex(p0: DzElementData): any;
    findEdgeSelectionGroup(p0: QString): any;
    findEdgeSelectionGroup(p0: QString, p1: boolean): any;
    findFacetSelectionGroup(p0: QString): any;
    findFacetSelectionGroup(p0: QString, p1: boolean): any;
    findLeafRegion(p0: QString): any;
    findMatchingProperty(p0: DzProperty): any;
    findMaterial(p0: QString): any;
    findMaterialIndex(p0: QString): any;
    findMaterialIndex(p0: DzMaterial): any;
    findMaterials(p0: QString): any;
    findPrivateProperty(p0: QString): any;
    findPrivateProperty(p0: QString, p1: boolean): any;
    findPrivatePropertyByLabel(p0: QString): any;
    findPrivatePropertyByLabel(p0: QString, p1: boolean): any;
    findProperty(p0: QString): any;
    findProperty(p0: QString, p1: boolean): any;
    findPropertyByLabel(p0: QString): any;
    findPropertyByLabel(p0: QString, p1: boolean): any;
    findRigidityGroup(p0: QString): any;
    findSimulationSettingsProvider(p0: QString): any;
    findVertexSelectionGroup(p0: QString): any;
    findVertexSelectionGroup(p0: QString, p1: boolean): any;
    geomChanged(): void;
    geomTopologyChanged(): void;
    geometryRegionChanged(): void;
    geometryRegionSelectionChanged(): void;
    getAssemblyMaterial(p0: number): any;
    getAttributes(p0: DzSettings): any;
    getCurrentShapeForNode(p0: DzNode): any;
    getDataItem(p0: number): any;
    getEdgeSelectionGroup(p0: number): any;
    getElementChild(p0: number): any;
    getFacetSelectionGroup(p0: number): any;
    getLeafRegion(p0: number): any;
    getMaterial(p0: number): any;
    getMaterialSelectionSets(p0: boolean): any;
    getMaterialTypes(p0: QString): any;
    getModifiableAssemblyGeom(p0: boolean): any;
    getPrivateProperty(p0: number): any;
    getProperty(p0: number): any;
    getRigidityGroup(p0: number): any;
    getSelectedMaterial(p0: number): any;
    //getShapeInstance(p0: number): any;
    getUniqueDataItemName(p0: QString): any;
    getUniquePrivatePropertyName(p0: QString): any;
    getUniquePropertyName(p0: QString): any;
    getVertexSelectionGroup(p0: number): any;
    hideProperties(p0: boolean): any;
    inherits(p0: QString): any;
    insertMaterial(p0: DzMaterial): any;
    insertMaterial(p0: DzMaterial, p1: number): any;
    insertPrivateProperty(p0: number, p1: DzProperty): any;
    insertProperty(p0: number, p1: DzProperty): any;
    //insertSimulationSettingsProvider(p0: QString, p1: DzSimulationSettingsProviderPtr): any;
    //insertSimulationSettingsProvider(p0: QString, p1: DzSimulationSettingsProviderPtr, p2: DzSimulationSettingsProviderPtr): any;
    isDataItemNameUnique(p0: QString): any;
    isDataItemNameUnique(p0: QString, p1: boolean): any;
    isPrivatePropertyNameUnique(p0: QString): any;
    isPrivatePropertyNameUnique(p0: QString, p1: boolean): any;
    isPropertyNameUnique(p0: QString): any;
    isPropertyNameUnique(p0: QString, p1: boolean): any;
    iskindof(p0: QString): any;
    labelChanged(p0: QString): void;
    materialAdded(p0: DzMaterial): void;
    materialChanged(): void;
    materialListChanged(): void;
    materialRemoved(p0: DzMaterial): void;
    materialSelected(p0: DzMaterial): void;
    materialSelectionChanged(): void;
    materialSelectionSetsChanged(): void;
    materialTypesChanged(): void;
    materialUnselected(p0: DzMaterial): void;
    mergeElement(p0: DzElement, p1: DzElementDuplicateContext): any;
    mergeElementSignal(p0: DzElement, p1: DzElementDuplicateContext): any;
    moveDataItemToIndex(p0: DzElementData, p1: number): any;
    moveGeometryRegion(p0: DzShape): any;
    movePrivateProperty(p0: DzProperty, p1: DzElement): any;
    moveProperty(p0: DzProperty, p1: DzElement): any;
    nameChanged(p0: QString): void;
    parentChanged(): void;
    prefixPropertyLabels(p0: QString): any;
    privatePropertyAdded(p0: DzProperty): void;
    privatePropertyListChanged(): void;
    privatePropertyListInTreeChanged(): void;
    privatePropertyRemoved(p0: DzProperty): void;
    privatePropertyTreeChanged(): void;
    propertyAdded(p0: DzProperty): void;
    propertyListChanged(): void;
    propertyListInTreeChanged(): void;
    propertyRemoved(p0: DzProperty): void;
    propertyTreeChanged(): void;
    rebuildBaseMap(p0: number): any;
    remapMaterials(p0: DzIndexChangeMap): any;
    remappingForTopologyChange(p0: DzIndexChangeSet): any;
    removeDataItem(p0: DzElementData): any;
    removeEdgeSelectionGroup(p0: QString): any;
    removeEdgeSelectionGroup(p0: DzSelectionGroup): any;
    removeEdgeSelectionGroup(p0: number): any;
    removeFacetSelectionGroup(p0: QString): any;
    removeFacetSelectionGroup(p0: DzSelectionGroup): any;
    removeFacetSelectionGroup(p0: number): any;
    removeMaterial(p0: DzMaterial): any;
    removeMaterialByName(p0: QString): any;
    removeMaterialByName(p0: QString, p1: QString): any;
    removeMaterialType(p0: QString, p1: QString): any;
    removePrivateProperty(p0: DzProperty): any;
    removePrivateProperty(p0: QString): any;
    removeProperty(p0: DzProperty): any;
    removeProperty(p0: QString): any;
    removeRigidityGroup(p0: DzRigidityGroup): any;
    removeShapeInstance(p0: DzAbstractShapeInstance): any;
    removeSimulationSettingsProvider(p0: QString): any;
    removeVertexSelectionGroup(p0: QString): any;
    removeVertexSelectionGroup(p0: DzSelectionGroup): any;
    removeVertexSelectionGroup(p0: number): any;
    renderSubDChanged(): void;
    replaceMaterial(p0: DzMaterial, p1: DzMaterial): any;
    rigidityGroupListChanged(): void;
    rigidityMapChanged(): void;
    rigidityWeightMapChanged(): void;
    selectionGroupListChanged(): void;
    setAttributes(p0: DzSettings): any;
    setFacetMesh(p0: DzFacetMesh): any;
    setFacetsForNodeVisibility(p0: DzNode, p1: DzFacetMesh, p2: boolean): any;
    setGeometryRegion(p0: DzGeometryRegion): any;
    setGeometryRegionLeafSelection(p0: DzGeometryRegion): any;
    setGeometryRegionSelection(p0: DzGeometryRegion): any;
    setLabel(p0: QString): any;
    setLoadScript(p0: DzScript): any;
    setMaterialSelectionSets(p0: DzMaterialSelectionSet): any;
    setMaterialTypes(p0: QString, p1: string[]): any;
    setName(p0: QString): any;
    setRigidityMap(p0: DzWeightMap): any;
    simulationProviderListChanged(): void;
    smoothingChanged(): void;
    subDAlgorithmChanged(): void;
    subDInterpolateLevelChanged(): void;
    subDMesh(p0: DzFacetMesh, p1: boolean): any;
    subDNormalSmoothingChanged(): void;
    subdivisonChanged(): void;
    updateMaterialTypesToNewName(p0: QString, p1: QString): any;
    updateSubDEnabled(): void;
    uvsChanged(): void;
    vertexSelectionChanged(): void;
    vertexSelectionGroupListChanged(): void;
}