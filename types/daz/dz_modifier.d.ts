declare class DzModifier extends DzElement {

    /** Properties */

    /** Methods */
    aboutToBeRemoved(): void;
    added(): void;
    apply(geom: DzVertexMesh, node: DzNode): DzError;
    applyInverse(geom: DzVertexMesh, node: DzNode): DzError;
    currentValueChanged(): void;
    isWeightMapModifier(): boolean;
    removed(): void;
    setIsWeightMapModifier(onoff: boolean): void;
    getMorph(): DzMorph;
    getParentUri(morph: DzMorph): string;
    setOverrideParentPath(parentPath: string): void;
    writeModifierInstances(io: any): boolean;
}