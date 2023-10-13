declare class DzMorph {

    // Enumerations
    NoNameEdit: number; // 0
    ElementNameEdit: number; // 1
    PropertyNameEdit: number; // 2

    // Properties
    objectName: string; // PHMMouthRealism_HD_div2
    name: string; // PHMMouthRealism_HD_div2
    elementID: number; // 9852
    assetUri: object; // /data/DAZ%203D/Genesis%208/Female/Morphs/DAZ%203D/Base/PHMMouthRealism_HD_div2.dsf#PHMMouthRealism_HD_div2
    assetNeedSave: boolean; // false
    assetSource: object; //
    assetId: string; // PHMMouthRealism_HD_div2
    assetAuthor: object; // ["Daz 3D","","www.daz3d.com"]
    assetFileRevision: object; // 1.0.0.0
    assetModifiedDate: object; // Tue Aug 16 2022 22:04:35 GMT-0400 (Pacific SA Standard Time)

    // Methods
    _clone: any;
    _getMethodsNames: any;
    aboutToBeRemoved(): any;
    addDataItem(p0: DzElementData): any;
    addPrivateProperty(p0: DzProperty): any;
    addProperty(p0: DzProperty): any;
    added(): any;
    assetModified(): any;
    assetWasSaved(): any;
    beginEdit(): any;
    cancelEdit(): any;
    className(): any;
    clearAllAnimData(): any;
    clearAnimData(p0: DzTimeRange): any;
    clearDeltasOnVertexSelection(p0: DzVertexMesh): any;
    clearDeltasOnVertexSelection(p0: DzVertexMesh, p1: boolean): any;
    clearDeltasOnVertexSelection(p0: DzVertexMesh, p1: boolean, p2: boolean): any;
    clearHDDeltasOnFacetSelection(p0: DzFacetMesh): any;
    clearHDDeltasOnFacetSelection(p0: DzFacetMesh, p1: boolean): any;
    clearHDDeltasOnFacetSelection(p0: DzFacetMesh, p1: boolean, p2: boolean): any;
    copyFrom(p0: DzElement): any;
    copyToClipboard(): any;
    copyToClipboard(p0: string[]): any;
    createElementCopy(p0: DzElementDuplicateContext): any;
    createElementCopySignal(p0: DzElementDuplicateContext): any;
    deleteDataItem(p0: DzElementData): any;
    deleteLater(): any;
    destroyed(): any;
    destroyed(p0: QObject): any;
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
    findDataItem(p0: string): any;
    findDataItemIndex(p0: DzElementData): any;
    findMatchingProperty(p0: DzProperty): any;
    findPrivateProperty(p0: string): any;
    findPrivateProperty(p0: string, p1: boolean): any;
    findPrivatePropertyByLabel(p0: string): any;
    findPrivatePropertyByLabel(p0: string, p1: boolean): any;
    findProperty(p0: string): any;
    findProperty(p0: string, p1: boolean): any;
    findPropertyByLabel(p0: string): any;
    findPropertyByLabel(p0: string, p1: boolean): any;
    finishEdit(): any;
    getAssignedModifierStackSectionID(): any;
    getAttributes(p0: DzSettings): any;
    getDataItem(p0: number): any;
    getDataItemList(): any;
    getDeltas(): any;
    getElementChild(p0: number): any;
    getElementParent(): any;
    getHDLimit(): any;
    getLabel(): any;
    getLoadScript(): any;
    getName(): any;
    getNameEditScope(): any;
    getNumDataItems(): any;
    getNumElementChildren(): any;
    getNumPrivateProperties(): any;
    getNumProperties(): any;
    getPreferredModifierStackSectionID(): any;
    getPrivateProperty(p0: number): any;
    getPrivatePropertyGroups(): any;
    getPrivatePropertyList(): any;
    getProperty(p0: number): any;
    getPropertyGroups(): any;
    getPropertyList(): any;
    getTypeLabel(): any;
    getUniqueDataItemName(p0: string): any;
    getUniquePrivatePropertyName(p0: string): any;
    getUniquePropertyName(p0: string): any;
    getUnknownModifierStackSectionID(): any;
    getValueChannel(): any;
    getValueControl(): any;
    inEdit(): any;
    inherits(p0: string): any;
    insertPrivateProperty(p0: number, p1: DzProperty): any;
    insertProperty(p0: number, p1: DzProperty): any;
    isDataItemNameUnique(p0: string): any;
    isDataItemNameUnique(p0: string, p1: boolean): any;
    isPrivatePropertyNameUnique(p0: string): any;
    isPrivatePropertyNameUnique(p0: string, p1: boolean): any;
    isPropertyNameUnique(p0: string): any;
    isPropertyNameUnique(p0: string, p1: boolean): any;
    iskindof(p0: string): any;
    makePersistent(): any;
    mergeElement(p0: DzElement, p1: DzElementDuplicateContext): any;
    mergeElementSignal(p0: DzElement, p1: DzElementDuplicateContext): any;
    modifyAsset(): any;
    modifyAsset(p0: DzUri): any;
    moveDataItemToIndex(p0: DzElementData, p1: number): any;
    movePrivateProperty(p0: DzProperty, p1: DzElement): any;
    moveProperty(p0: DzProperty, p1: DzElement): any;
    privatePropertyAdded(p0: DzProperty): any;
    privatePropertyRemoved(p0: DzProperty): any;
    propertyAdded(p0: DzProperty): any;
    propertyRemoved(p0: DzProperty): any;
    remapForTopologyChange(p0: DzShape, p1: DzIndexChangeSet): any;
    remapForTopologyChangeSlot(p0: DzShape, p1: DzIndexChangeSet): any;
    removeDataItem(p0: DzElementData): any;
    removePrivateProperty(p0: DzProperty): any;
    removePrivateProperty(p0: string): any;
    removeProperty(p0: DzProperty): any;
    removeProperty(p0: string): any;
    removed(): any;
    setAttributes(p0: DzSettings): any;
    // setDeltas(p0:DzMorphDeltas): any;
    setHDLimit(p0: number): any;
    setLabel(p0: string): any;
    setLoadScript(p0: DzScript): any;
    setName(p0: string): any;
    shouldSortOnLoad(): any;
    update(): any;

    // Signals
    nameChanged(p0: string): any;
    propertyListChanged(): any;
    propertyListInTreeChanged(): any;
    propertyTreeChanged(): any;
    privatePropertyListChanged(): any;
    privatePropertyListInTreeChanged(): any;
    privatePropertyTreeChanged(): any;
    labelChanged(p0: string): any;
    parentChanged(): any;
    currentValueChanged(): any;
    deltasChanged(): any;
    hdLimitChanged(): any;
}