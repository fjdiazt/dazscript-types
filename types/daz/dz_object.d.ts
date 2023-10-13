declare class DzObject extends DzElement {

    /* Properties */
    elementID: number;

    /* Methods */
    propertyListInTreeChanged(): any; // TODO ;
    privatePropertyListInTreeChanged(): any; // TODO ;
    mergeElementSignal(): any; // TODO ;
    duplicateElementSignal(): any; // TODO ;
    createElementCopySignal(): any; // TODO ;
    moveDataItemToIndex(): any; // TODO ;
    findDataItemIndex(): any; // TODO ;
    duplicateMissingCustomDataWithContext(): any; // TODO ;
    duplicateMissingPropertiesWithContext(): any; // TODO ;
    duplicateMissingPrivatePropertiesWithContext(): any; // TODO ;
    doMergeElement(): any; // TODO ;
    doDuplicateElement(): any; // TODO ;
    mergeElement(): any; // TODO ;
    duplicateElement(): any; // TODO ;
    createElementCopy(): any; // TODO ;
    modifierAdded(mod: DzModifier): void;
    modifierRemoved(mod: DzModifier): void;
    aboutToAddModifier(): any; // TODO ;
    modifierStackChanged(): void;
    shapeAdded(shape: DzShape): void;
    shapeRemoved(shape: DzShape): void;
    currentShapeSwitched(): void;
    materialListChanged(): void;
    materialSelectionChanged(): void;
    drawnDataChanged(): void;
    uvsChanged(): void;
    cachedGeomInvalidated(): void;
    cachedGeomUpdated(): void;
    cachedGeomFinalized(): void;
    shapeTopologyChanged(): void;
    aboutToDelete(): void;
    aboutToFinalize(): any; // TODO ;
    materialSelectionSetsChanged(): any; // TODO ;
    cahceTopologyChanged(): any; // TODO ;
    modifierDuplicateSignal(): any; // TODO ;
    addShape(shape: DzShape, index?: number): DzError;
    removeShape(index: number): DzError;
    moveShape(shape: DzShape, index?: number): DzError;
    removeAllShapes(): DzError;
    addModifier(modifier: DzModifier, index?: number): DzError;
    removeModifier(modifier: DzModifier): DzError;
    moveModifier(modifier: DzModifier, index?: number): DzError;
    removeAllModifiers(): DzError;
    invalidateCache(): void;
    forceCacheUpdate(node: DzNode, isRender?: boolean): void;
    buildFilteredGeometry(node: DzNode, filter: DzAbstractBuildGeometryFilter, finalizeGeom: boolean, finalGeom: DzVertexMeshPtr): void;
    getCurrentShape(): DzShape;
    getNumShapes(): number;
    getShape(which: number): DzShape;
    getCachedGeom(): DzVertexMesh;
    getNumModifiers(): number;
    getModifier(which: number): DzModifier;
    findModifier(name: QString): DzModifier;
    findModifierIndex(mod: DzModifier): number;
    getGeometryControl(): DzEnumProperty;
    getBoundingBox(): DzBox3;
    getLocalBoundingBox(): DzBox3;
    getLocalOrientedBox(): DzOrientedBox3;
    doModifierDuplicate(): any; // TODO ;
    modifierDuplicate(): any; // TODO ;
}