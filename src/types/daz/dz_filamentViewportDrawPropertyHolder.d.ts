declare class DzFilamentViewportDrawPropertyHolder {

    // Enumerations
    NoNameEdit: number; // 0
    ElementNameEdit: number; // 1
    PropertyNameEdit: number; // 2

    // Properties
    objectName: string; // Filament Viewport Draw Options
    name: string; // Filament Viewport Draw Options
    elementID: number; // 613

    // Methods
    _clone: any;
    _getMethodsNames: any;
    addDataItem(p0: DzElementData): any;
    addPrivateProperty(p0: DzProperty): any;
    addProperty(p0: DzProperty): any;
    beginEdit(): any;
    cancelEdit(): any;
    // className: any;
    // className(): any;
    clearAllAnimData(): any;
    clearAnimData(p0: DzTimeRange): any;
    copyFrom(p0: DzElement): any;
    copyToClipboard(): any;
    // copyToClipboard(p0:stringList): any;
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
    // duplicateMissingPropertiesWithContext(p0:DzElement, p1:DzElementDuplicateContext): any;
    findDataItem(p0: string): any;
    findDataItemIndex(p0: DzElementData): any;
    findMatchingProperty(p0: DzProperty): any;
    findPrivateProperty(p0: string): any;
    findPrivateProperty(p0: string, p1: boolean): any;
    findPrivatePropertyByLabel(p0: string): any;
    findPrivatePropertyByLabel(p0: string, p1: boolean): any;
    findProperty(p0: string): DzProperty;
    findProperty(p0: string, p1: boolean): any;
    findPropertyByLabel(p0: string): any;
    findPropertyByLabel(p0: string, p1: boolean): any;
    finishEdit(): any;
    getAttributes(p0: DzSettings): any;
    getDataItem(p0: number): any;
    getDataItemList(): any;
    getElementChild(p0: number): any;
    getElementParent(): any;
    getLabel(): any;
    getLoadScript(): any;
    getName(): any;
    getNameEditScope(): any;
    getNumDataItems(): any;
    getNumElementChildren(): any;
    getNumPrivateProperties(): any;
    getNumProperties(): any;
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
    inEdit(): any;
    // inherits: any;
    // inherits(p0:string): any;
    insertPrivateProperty(p0: number, p1: DzProperty): any;
    insertProperty(p0: number, p1: DzProperty): any;
    // isDataItemNameUnique(string&): any;
    // isDataItemNameUnique(string&, p0:boolean): any;
    // isPrivatePropertyNameUnique(string&): any;
    // isPrivatePropertyNameUnique(string&, p0:boolean): any;
    // isPropertyNameUnique(string&): any;
    // isPropertyNameUnique(string&, p0:boolean): any;
    iskindof(p0: string): any;
    makePersistent(): any;
    mergeElement(p0: DzElement, p1: DzElementDuplicateContext): any;
    // mergeElementSignal(p0:DzElement, p1:DzElementDuplicateContext): any;
    moveDataItemToIndex(p0: DzElementData, p1: number): any;
    movePrivateProperty(p0: DzProperty, p1: DzElement): any;
    moveProperty(p0: DzProperty, p1: DzElement): any;
    privatePropertyAdded(p0: DzProperty): any;
    privatePropertyRemoved(p0: DzProperty): any;
    propertyAdded(p0: DzProperty): any;
    propertyRemoved(p0: DzProperty): any;
    removeDataItem(p0: DzElementData): any;
    removePrivateProperty(p0: DzProperty): any;
    removePrivateProperty(p0: string): any;
    removeProperty(p0: DzProperty): any;
    removeProperty(p0: string): any;
    setAttributes(p0: DzSettings): any;
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
    settingsChanged(): any;
}