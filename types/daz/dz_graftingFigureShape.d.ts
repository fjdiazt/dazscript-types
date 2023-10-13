declare class DzGraftingFigureShape extends DzFacetShape {
    elementID: number;	// 1059
    name: string;	// Genesis8Female
    objectName: string;	// Genesis8Female
    aboutToFinalize(p0: DzVertexMesh): any;
    addDataItem(p0: DzElementData): any;
    addEdgeSelectionGroup(p0: DzSelectionGroup): any;
    addFacetSelectionGroup(p0: DzSelectionGroup): any;
    addMaterial(p0: DzMaterial): any;
    addMaterialType(p0: string, p1: string): any;
    addPrivateProperty(p0: DzProperty): any;
    addProperty(p0: DzProperty): any;
    addRigidityGroup(p0: DzRigidityGroup): any;
    addShapeInstance(p0: DzAbstractShapeInstance): any;
    addVertexSelectionGroup(p0: DzSelectionGroup): any;
    assemblyChanged(): void;
    assemblyNeedsConfigurationCheck(): any;
    beginEdit(): any;
    cancelEdit(): any;
    className(): any;
    className(): any;
    clearAllAnimData(): any;
    clearAnimData(p0: DzTimeRange): any;
    clearEdgeSelectionGroup(p0: DzSelectionGroup): any;
    clearFacetSelectionGroup(p0: DzSelectionGroup): any;
    clearMaterialSelection(): any;
    clearMaterialTypes(): any;
    clearMaterialTypes(p0: string): any;
    clearSimulationProviderList(): any;
    clearVertexSelectionGroup(p0: DzSelectionGroup): any;
    copyFrom(p0: DzElement): any;
    copyToClipboard(): any;
    copyToClipboard(p0: string[]): any;
    createElementCopy(p0: DzElementDuplicateContext): any;
    createElementCopySignal(p0: DzElementDuplicateContext): any;
    createMaterial(p0: string): any;
    createShapeFromGroup(p0: string): any;
    deleteDataItem(p0: DzElementData): any;
    deleteLater(): any;
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
    endManip(): any;
    facetMeshChanged(): void;
    facetSelectionChanged(): void;
    facetSelectionGroupListChanged(): void;
    findAssemblyMaterialIndex(p0: DzMaterial): any;
    findDataItem(p0: string): any;
    findDataItemIndex(p0: DzElementData): any;
    findEdgeSelectionGroup(p0: string): any;
    findEdgeSelectionGroup(p0: string, p1: boolean): any;
    findFacetSelectionGroup(p0: string): any;
    findFacetSelectionGroup(p0: string, p1: boolean): any;
    findLeafRegion(p0: string): any;
    findMatchingProperty(p0: DzProperty): any;
    findMaterial(p0: string): any;
    findMaterialIndex(p0: string): any;
    findMaterialIndex(p0: DzMaterial): any;
    findMaterials(p0: string): any;
    findPrivateProperty(p0: string): any;
    findPrivateProperty(p0: string, p1: boolean): any;
    findPrivatePropertyByLabel(p0: string): any;
    findPrivatePropertyByLabel(p0: string, p1: boolean): any;
    findProperty(p0: string): any;
    findProperty(p0: string, p1: boolean): any;
    findPropertyByLabel(p0: string): any;
    findPropertyByLabel(p0: string, p1: boolean): any;
    findRigidityGroup(p0: string): any;
    findSimulationSettingsProvider(p0: string): any;
    findVertexSelectionGroup(p0: string): any;
    findVertexSelectionGroup(p0: string, p1: boolean): any;
    finishEdit(): any;
    geomChanged(): void;
    geomTopologyChanged(): void;
    geometryRegionChanged(): void;
    geometryRegionSelectionChanged(): void;
    getAllMaterials(): any;
    getAllRenderPrioritizedMaterials(): any;
    getAllSelectedMaterials(): any;
    getAssemblyGeometry(): any;
    getAssemblyMaterial(p0: number): any;
    getAttributes(p0: DzSettings): any;
    getCurrentShapeForNode(p0: DzNode): any;
    getDataItem(p0: number): any;
    getDataItemList(): any;
    getEdgeSelectionGroup(p0: number): any;
    getElementChild(p0: number): any;
    getElementParent(): any;
    getFacetMesh(): any;
    getFacetSelectionGroup(p0: number): any;
    getGeometry(): any;
    getGeometryRegion(): any;
    getGeometryRegionLeafSelection(): any;
    getGeometryRegionSelection(): any;
    getLODControl(): any;
    getLabel(): any;
    getLeafRegion(p0: number): any;
    getLoadScript(): any;
    getMaterial(p0: number): any;
    getMaterialNamesWithTypes(): any;
    getMaterialSelectionSets(): any;
    getMaterialSelectionSets(p0: boolean): any;
    getMaterialTypes(p0: string): any;
    getModifiableAssemblyGeom(p0: boolean): any;
    getName(): any;
    getNode(): any;
    getNumAssemblyMaterials(): any;
    getNumDataItems(): any;
    getNumEdgeSelectionGroups(): any;
    getNumElementChildren(): any;
    getNumFacetSelectionGroups(): any;
    getNumLeafRegions(): any;
    getNumMaterials(): any;
    getNumPrivateProperties(): any;
    getNumProperties(): any;
    getNumRigidityGroups(): any;
    getNumSelectedMaterials(): any;
    getNumShapeInstances(): any;
    getNumSimulationProviders(): any;
    getNumVertexSelectionGroups(): any;
    getOrignalToWeldMeshMapSize(): any;
    getPrivateProperty(p0: number): any;
    getPrivatePropertyGroups(): any;
    getPrivatePropertyList(): any;
    getProperty(p0: number): any;
    getPropertyGroups(): any;
    getPropertyList(): any;
    getRigidityGroup(p0: number): any;
    getRigidityMap(): any;
    getSelectedMaterial(p0: number): any;
    getSimulationProviderNames(): any;
    getSubDAlgo(): any;
    getSubDAlgorithmControl(): any;
    getSubDDrawLevel(): any;
    getSubDInterpolateLevel(): any;
    getSubDInterpolateLevelControl(): any;
    getSubDLevelControl(): any;
    getSubDRenderLevel(): any;
    getSubDRenderLevelControl(): any;
    getUniqueDataItemName(p0: string): any;
    getUniquePrivatePropertyName(p0: string): any;
    getUniquePropertyName(p0: string): any;
    getVertexSelectionGroup(p0: number): any;
    getWeldMeshToOrginalMapSize(): any;
    handleNeedsConfigurationCheck(): any;
    hasAssemblyGeometry(): any;
    hasDifferentRenderThanDraw(): any;
    hasMultipleLOD(): any;
    hasWeldedFollowers(): any;
    hideProperties(p0: boolean): any;
    inEdit(): any;
    inherits(): any;
    inherits(p0: string): any;
    insertMaterial(p0: DzMaterial): any;
    insertMaterial(p0: DzMaterial, p1: number): any;
    insertPrivateProperty(p0: number, p1: DzProperty): any;
    insertProperty(p0: number, p1: DzProperty): any;
    //insertSimulationSettingsProvider(p0: string, p1: DzSimulationSettingsProviderPtr): any;
    //insertSimulationSettingsProvider(p0: string, p1: DzSimulationSettingsProviderPtr, p2: DzSimulationSettingsProviderPtr): any;
    invalidateGeomCaches(): any;
    invalidateWorkingMesh(): any;
    isDataItemNameUnique(p0: string): any;
    isDataItemNameUnique(p0: string, p1: boolean): any;
    isLodActive(): any;
    isPrivatePropertyNameUnique(p0: string): any;
    isPrivatePropertyNameUnique(p0: string, p1: boolean): any;
    isPropertyNameUnique(p0: string): any;
    isPropertyNameUnique(p0: string, p1: boolean): any;
    isSubDivisionActive(): any;
    iskindof(p0: string): any;
    labelChanged(p0: string): void;
    makePersistent(): any;
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
    mergesSnapGeometry(): any;
    modifyGeometryAsset(): any;
    moveDataItemToIndex(p0: DzElementData, p1: number): any;
    moveGeometryRegion(p0: DzShape): any;
    movePrivateProperty(p0: DzProperty, p1: DzElement): any;
    moveProperty(p0: DzProperty, p1: DzElement): any;
    nameChanged(p0: string): void;
    parentChanged(): void;
    prefixPropertyLabels(p0: string): any;
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
    //remapMaterials(p0: DzIndexChangeMap): any;
    remappingForTopologyChange(p0: DzIndexChangeSet): any;
    removeDataItem(p0: DzElementData): any;
    removeEdgeSelectionGroup(p0: string): any;
    removeEdgeSelectionGroup(p0: DzSelectionGroup): any;
    removeEdgeSelectionGroup(p0: number): any;
    removeFacetSelectionGroup(p0: string): any;
    removeFacetSelectionGroup(p0: DzSelectionGroup): any;
    removeFacetSelectionGroup(p0: number): any;
    removeMaterial(p0: DzMaterial): any;
    removeMaterialByName(p0: string): any;
    removeMaterialByName(p0: string, p1: string): any;
    removeMaterialType(p0: string, p1: string): any;
    removePrivateProperty(p0: DzProperty): any;
    removePrivateProperty(p0: string): any;
    removeProperty(p0: DzProperty): any;
    removeProperty(p0: string): any;
    removeRigidityGroup(p0: DzRigidityGroup): any;
    removeShapeInstance(p0: DzAbstractShapeInstance): any;
    removeSimulationSettingsProvider(p0: string): any;
    removeVertexSelectionGroup(p0: string): any;
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
    setLabel(p0: string): any;
    setLoadScript(p0: DzScript): any;
    setMaterialSelectionSets(p0: DzMaterialSelectionSet): any;
    setMaterialTypes(p0: string, p1: string[]): any;
    setName(p0: string): any;
    setRigidityMap(p0: DzWeightMap): any;
    shouldSortOnLoad(): any;
    simulationProviderListChanged(): void;
    smoothingChanged(): void;
    subDAlgorithmChanged(): void;
    subDInterpolateLevelChanged(): void;
    subDMesh(p0: DzFacetMesh, p1: boolean): any;
    subdivisonChanged(): void;
    update(): any;
    updateAlgo(): any;
    updateBuilder(): any;
    updateFacetGeom(): any;
    updateInterpLevel(): any;
    updateLODControl(): any;
    updateLODs(): any;
    updateMaterialTypesToNewName(p0: string, p1: string): any;
    updateSmoothing(): any;
    updateSubDControl(): any;
    updateSubDEnabled(): void;
    updateUVs(): any;
    uvsChanged(): void;
    vertexSelectionChanged(): void;
    vertexSelectionGroupListChanged(): void;
}