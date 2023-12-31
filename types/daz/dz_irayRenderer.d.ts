declare class DzIrayRenderer {
    name: string;	//
    objectName: string;	//
    IPRRenderHandlerChanged(p0: DzRenderer, p1: DzIPRRenderHandler): void;
    aboutToRender(p0: DzRenderer): any;
    addRenderElements(p0: DzElementList): any;
    autoBake(p0: DzRenderHandler, p1: DzCamera, p2: DzLightListIterator, p3: DzNodeListIterator, p4: DzBakerOptions): any;
    bake(p0: DzRenderHandler, p1: DzCamera, p2: DzLightListIterator, p3: DzNodeListIterator, p4: DzBakerOptions): any;
    className(): any;
    compileShader(p0: QString): any;
    compileShader(p0: QString, p1: QString): any;
    customRender(p0: DzRenderHandler, p1: DzCamera, p2: QObject[], p3: QObject[], p4: DzRenderOptions): any;
    deleteLater(): any;
    destroyed(): void;
    destroyed(p0: QObject): void;
    exportRenderToBridgeQueue(p0: QString): any;
    exportRenderToBridgeQueue(p0: QString, p1: QString): any;
    exportRenderToBridgeQueue(p0: QString, p1: QString, p2: DzCamera): any;
    exportRenderToBridgeQueue(p0: QString, p1: QString, p2: DzCamera, p3: DzRenderOptions): any;
    exportRenderToBridgeQueue(p0: QString, p1: QString, p2: DzCamera, p3: DzRenderOptions, p4: number): any;
    getCurrentNode(): any;
    getIPRRenderHandler(): any;
    getName(): any;
    getPropertyHolder(): DzIrayPropertyHolder;
    getRendererMode(): any;
    getShaderCompilerPath(): any;
    getShaderExtension(): any;
    getShaderFileName(p0: QString): any;
    getShaderInfo(p0: QString): any;
    getShaderPath(p0: QString): any;
    getShaderPath(p0: QString, p1: boolean): any;
    getShaderSearchPaths(): any;
    getTextureUtilityPath(): any;
    imagePrepared(p0: DzTexture, p1: QString): void;
    inherits(): any;
    inherits(p0: QString): any;
    isIPRRendering(): any;
    isRendering(): any;
    iskindof(p0: QString): any;
    killRender(): any;
    makePersistent(): any;
    nameChanged(p0: QString): void;
    prepareImage(p0: DzTexture, p1: QString): any;
    processShaderName(p0: QString): any;
    render(p0: DzRenderHandler, p1: DzCamera, p2: DzRenderOptions): any;
    renderFinished(p0: DzRenderer): void;
    rendererModeChanged(p0: DzRenderer): void;
    saveBakeImage(p0: DzBakerOptions, p1: boolean): any;
    setIPRRenderHandler(p0: DzIPRRenderHandler): any;
    shapeRenderBeginning(p0: DzShape): any;
    shapeRenderFinished(p0: DzShape): void;
    stopBaking(): any;
    textureConvert(p0: DzRenderHandler, p1: DzCamera, p2: DzTextureConvertorOptions): any;
}