declare class DzMaterialSelectionSet {
    name: string;	// [!root!]
    objectName: string;	// [!root!]
    addChild(p0: string): any;
    addChild(p0: DzMaterialSelectionSet): any;
    childListChanged(): void;
    className(): any;
    className(): any;
    deleteLater(): any;
    destroyed(): void;
    destroyed(p0: QObject): void;
    findChild(p0: string): any;
    findChild(p0: string, p1: boolean): any;
    getChild(p0: number): any;
    getDeclaredInDefinition(): any;
    getMaterialNames(): any;
    getMaterials(p0: DzShape): any;
    getMaterials(p0: DzShape, p1: boolean): any;
    getName(): any;
    getNumChildren(): any;
    getParent(): any;
    heirachyChanged(): void;
    inherits(): any;
    inherits(p0: string): any;
    iskindof(p0: string): any;
    makePersistent(): any;
    materialNamesChanged(): void;
    mergeMaterialSelectionSets(p0: DzMaterialSelectionSet): any;
    nameChanged(p0: string): void;
    removeChild(p0: DzMaterialSelectionSet): any;
    removeChild(p0: number): any;
    setMaterialNames(p0: string[]): any;
    updateMaterialNames(p0: string, p1: string): any;
    updateMaterialNames(p0: string, p1: string, p2: boolean): any;
}