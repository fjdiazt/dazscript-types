declare class DzGeometryShellNode extends DzNode {

    static className(): string;
    /** Properties */

    /** Methods */
    addFacetGroupVisiblity(name: string): void;
    addMaterialGroupVisiblity(name: string): void;
    createProperties(): void;
    getIcon(): QIcon;
    getPixmap(state: number): QPixmap;
    getShellNodeControl(): DzNodeProperty;
    removeFacetGroupVisiblity(name: string): void;
    removeMaterialGroupVisiblity(name: string): void;
    setShellVisiblity(newMesh: DzFacetMesh): void;
    setUpFaceGroups(mesh: DzFacetMesh): void;
    setUpMaterials(mesh: DzFacetMesh): void;
    targetNodeChanged(): void;
    tgtCacheInvalidated(): void;
}