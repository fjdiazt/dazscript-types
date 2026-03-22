declare class DzBrickMaterial extends DzMaterial {

    /** Methods */
    brickRemoved(brick: DzShaderBrick): any;
    brickAdded(brick: DzShaderBrick): any;
    generateFilesStarted(): any;
    generateFilesFinished(): any;
    getExtension(): string;
    getBrickUserName(): string;
    setBrickUserName(brickUserName: string): void;
    getNumBrickSets(): number;
    getBrickSet(brickSet: number): any;
    addBrick(brick: DzShaderBrick): any;
    getBrick(brick: number): any;
    getBrickIDs(): any;
    getBrickIDs(ids: number[]): any;
    deleteBrick(brick: number): any;
    deleteBrick(brick: DzShaderBrick): any;
    deleteAllBricks(): any;
    invalidateSets(): any;
    moveBrick(brick: number, brickUser: IDzBrickUser): any;
    getIdentifier(): any;
    setIdentifier(uuid: QUuid): any;
    updateIdentifierOnSetInvalidate(update: boolean): any;
    isInEditMode(): any;
    startEditMode(): any;
    endEditMode(): any;
    usesLocalShaderSpace(): any;
    applyToScene(): any;
    fromScene(): any;
    unsetRender(settings: DzRenderSettings): any;
    removeSet(brickSet: DzBrickSet): any;
    brickIDChanged(brickId: number): any;
    setMaterialName(materialName: string): any;
    setNeedsTangentSpaceParams(needsTangentSpaceParams: boolean): any;
    allowsAutoBake(): boolean;
    convertDefaultMaterial(material: DzDefaultMaterial): any;
    convertUberIrayMaterial(material: DzMaterial): any;
    setNeedsPtexParams(needsPtexParams: boolean): any;
}