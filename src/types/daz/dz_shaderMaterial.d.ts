declare class DzShaderMaterial extends DzMaterial {
    /** Methods */
    setMaterialName(name: string): void;
    setDefinitionFile(definitionFile: string, f1?: boolean, f2?: boolean): void;
    addShader(rslShader: DzRSLShader): void;
    getNumShaders(): number;
    getShader(index: number): DzRSLShader
    removeShader(rslShader: DzRSLShader): void;
    setNeedsTangentSpaceParams(needsTangentSpaceParams: boolean): void;
    getDiffuseProperty(): any;
    getOpacityProperty(): any;
    getDefinitionFile(): any;
    getAllImages(list: DzTexturePtr[]): any;
    allowsAutoBake(): boolean;
    unsetRender(renderSettings: DzRenderSettings): void;
}