declare class DzElementDuplicateContext extends QObject {
    aliasesAsUserProperties: boolean;	// true
    allowDuplicateThroughIO: boolean;	// false
    delayModifierCreate: boolean;	// false
    duplicateBoneHierachy: boolean;	// false
    duplicateFullNodeHierachy: boolean;	// false
    facetCompatible: boolean;	// false
    name: string;	//
    objectName: string;	//
    remapAlaises: boolean;	// false
    skipNonUserProperties: boolean;	// false
    treatHiddenAndPromotingAsBones: boolean;	// true
    vertCompatible: boolean;	// false
    appendAliasToCreate(p0: DzProperty, p1: DzElement): any;
    className(): any;
    createAlaises(): any;
    createERC(): any;
    deleteLater(): any;
    destroyed(): void;
    destroyed(p0: QObject): void;
    doFinalize(): any;
    doResolve(): any;
    duplicateAssetThroughIO(p0: DzElement): any;
    finalize(p0: DzElementDuplicateContext): any;
    findInstance(p0: string): any;
    findNewElement(p0: DzElement): any;
    findNewItem(p0: QObject): any;
    findNewProperty(p0: DzProperty): any;
    findOldElement(p0: DzElement): any;
    findOldItem(p0: QObject): any;
    findOldProperty(p0: DzProperty): any;
    finishWriter(p0: IDzJsonIO): any;
    getDuplicateRoot(): any;
    getDuplicateWriter(p0: DzUri): any;
    getIndexChangeSet(): any;
    getInstanceId(p0: DzBase, p1: IDzSceneAsset): any;
    getMemoryPath(): any;
    getNewElements(): any;
    getNewItems(): any;
    getNewProperties(): any;
    getParentNode(): any;
    getSettings(): any;
    giveobjectToContext(p0: QObject): any;
    inherits(): any;
    insertDuplicateElement(p0: DzElement, p1: DzElement): any;
    insertDuplicateItem(p0: QObject, p1: QObject): any;
    insertDuplicateProperty(p0: DzProperty, p1: DzProperty): any;
    popAttributes(): any;
    pushAttributes(): any;
    resolve(p0: DzElementDuplicateContext): any;
    setDuplicateAssets(p0: DzAssets): any;
    setDuplicateRoot(p0: DzElement): any;
    setIndexChangeSet(p0: DzIndexChangeSet): any;
    setParentNode(p0: DzNode): any;
}