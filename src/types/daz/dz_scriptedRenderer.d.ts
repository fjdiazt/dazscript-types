declare class DzScriptedRenderer extends DzRenderer {
    static className(): string;
    name: string;	//
    objectName: string;	//
    IPRRenderHandlerChanged(p0: DzRenderer, p1: DzIPRRenderHandler): void;
    aboutToRender(p0: DzRenderer): any;
    addRenderElements(p0: DzElementList): any;
    autoBake(p0: DzRenderHandler, p1: DzCamera, p2: DzLightListIterator, p3: DzNodeListIterator, p4: DzBakerOptions): any;
    bake(p0: DzRenderHandler, p1: DzCamera, p2: DzLightListIterator, p3: DzNodeListIterator, p4: DzBakerOptions): any;
    cameraProject(p0: DzCamera, p1: number, p2: number): any;
    className(): any;
    className(): any;

    continueAfterPreProcess(): any;
    createLight(p0: DzLight, p1: string): any;

    defintionFileChanged(): void;
    deleteFiles(p0: string[]): any;
    deleteLater(): any;
    destroyed(): void;
    destroyed(p0: QObject): void;
    doDefaultDisplay(): any;
    doDefaultShadowPass(p0: DzRenderOptions, p1: DzCamera, p2: string, p3: boolean): any;
    doDefaultShadowPass(p0: DzRenderOptions, p1: DzCamera, p2: DzLight, p3: string, p4: boolean): any;
    doDefaultShadowPassEnd(p0: DzRenderOptions, p1: DzCamera, p2: DzLight): any;
    doDefaultShadowPassPrep(p0: DzRenderOptions, p1: DzCamera, p2: DzLight, p3: string, p4: boolean): any;
    doShutter(p0: DzRenderOptions): any;
    fullSceneCameraProject(p0: DzCamera, p1: number, p2: number): any;

    getDefaultShaderSearchPath(): any;
    getDefinitionFile(): any;
    getDisplacementPreProcessScript(): any;
    getHandler(): any;
    getIPRRenderHandler(): any;
    getLight(p0: number): any;
    getLightCount(): any;
    getLightPreProcessScript(): any;
    getLightsToRender(): any;

    getNode(p0: number): any;
    getNodeCount(): any;
    getNodesToRender(): any;
    getNumIlluminateHandels(): any;
    getOptionsFrame(): any;
    getPropertyHolder(): any;
    getRenderScript(): any;
    getRendererMode(): any;
    getShaderCompilerPath(): any;

    getSurfacePreProcessScript(): any;

    imagePrepared(p0: DzTexture, p1: string): void;
    inherits(): any;
    inherits(p0: string): any;

    iskindof(p0: string): any;

    makePersistent(): any;
    nameChanged(p0: string): void;

    prepareMotionSamples(): any;
    prepareMotionSamples(p0: QObject[]): any;
    prepareNodeMotionSamples(p0: DzNode): any;

    removeLight(p0: number): any;
    removeNode(p0: number): any;

    renderBackDrop(p0: DzBackdrop, p1: number, p2: number): any;
    renderFinished(p0: DzRenderer): void;
    renderNode(p0: DzNode): any;
    renderNodes(p0: QObject[]): any;
    rendererModeChanged(p0: DzRenderer): void;
    riAreaLightSource(p0: string, p1: string[], p2: QVariant[]): any;
    riAtmosphere(p0: string, p1: string[], p2: QVariant[]): any;
    riAttribute(p0: string, p1: string[], p2: QVariant[]): any;
    riAttributeBegin(): any;
    riAttributeEnd(): any;
    riBegin(p0: string): any;
    riCamera(p0: string, p1: string[], p2: QVariant[]): any;
    riClipping(p0: number, p1: number): any;
    riClippingPlane(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): any;
    riColor(p0: QColor): any;
    riConcatTransform(p0: DzMatrix4): any;
    riCoordSysTransform(p0: string): any;
    riCoordinateSystem(p0: string): any;
    riCropWindow(p0: number, p1: number, p2: number, p3: number): any;
    riDeclare(p0: string, p1: string): any;
    riDepthOfField(p0: number, p1: number, p2: number): any;
    riDetailRange(p0: number, p1: number, p2: number, p3: number): any;
    riDisplacement(p0: string, p1: string[], p2: QVariant[]): any;
    riDisplay(p0: string, p1: string, p2: string, p3: string[], p4: QVariant[]): any;
    riDisplayChannel(p0: string, p1: string[], p2: QVariant[]): any;
    riElse(): any;
    riElseIf(p0: string, p1: string[], p2: QVariant[]): any;
    riEndWorld(p0: string): any;
    riExposure(p0: number, p1: number): any;
    riExterior(p0: string, p1: string[], p2: QVariant[]): any;
    riFormat(p0: number, p1: number, p2: number): any;
    riFrameAspectRatio(p0: number): any;
    riGeometricApproximation(p0: string, p1: number): any;
    riHider(p0: string, p1: string[], p2: QVariant[]): any;
    riIdentity(): any;
    riIfBegin(p0: string, p1: string[], p2: QVariant[]): any;
    riIfEnd(): any;
    riIlluminate(p0: number, p1: boolean): any;
    riImager(p0: string, p1: string[], p2: QVariant[]): any;
    riInterior(p0: string, p1: string[], p2: QVariant[]): any;
    riLightSource(p0: string, p1: string[], p2: QVariant[]): any;
    riMakeBump(p0: string, p1: string, p2: string, p3: string, p4: number, p5: number, p6: number, p7: string[], p8: QVariant[]): any;
    riMakeCubeFaceEnvironment(p0: string, p1: string, p2: string, p3: string, p4: string, p5: string, p6: string, p7: number, p8: number, p9: number, p10: number, p11: string[], p12: QVariant[]): any;
    riMakeLatLongEnvironment(p0: string, p1: string, p2: number, p3: number, p4: number, p5: string[], p6: QVariant[]): any;
    riMakeShadow(p0: string, p1: string, p2: string[], p3: QVariant[]): any;
    riMakeTexture(p0: string, p1: string, p2: string, p3: string, p4: number, p5: number, p6: number, p7: string[], p8: QVariant[]): any;
    riMatte(p0: boolean): any;
    riMultiplyShadingRate(p0: number): any;
    riOpacity(p0: QColor): any;
    riOption(p0: string, p1: string[], p2: QVariant[]): any;
    riOrientation(p0: string): any;
    riPerspective(p0: number): any;
    riPixelFilter(p0: number, p1: number, p2: number): any;
    riPixelSamples(p0: number, p1: number): any;
    riPixelVariance(p0: number): any;
    riProjection(p0: string, p1: string[], p2: QVariant[]): any;
    riQuantize(p0: string, p1: number, p2: number, p3: number, p4: number): any;
    riRelativeDetail(p0: number): any;
    riReverseOrientation(): any;
    riRotate(p0: number, p1: number, p2: number, p3: number): any;
    riScale(p0: number, p1: number, p2: number): any;
    riScopedCoordinateSystem(p0: string): any;
    riScreenWindow(p0: number, p1: number, p2: number, p3: number): any;
    riShader(p0: string, p1: string, p2: string[], p3: QVariant[]): any;
    riShadingInterpolation(p0: string): any;
    riShadingRate(p0: number): any;
    riShutter(p0: number, p1: number): any;
    riSides(p0: number): any;
    riSkew(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): any;
    riSurface(p0: string, p1: string[], p2: QVariant[]): any;
    riTransform(p0: DzMatrix4): any;
    riTransformBegin(): any;
    riTransformEnd(): any;
    riTranslate(p0: number, p1: number, p2: number): any;
    riWorldBegin(): any;
    saveBakeImage(p0: DzBakerOptions, p1: boolean): any;
    setBackgroundColor(p0: QColor): any;
    setCleanUpScript(p0: string): any;
    setContinueAfterPreProcess(p0: boolean): any;
    setCropWindow(p0: DzRenderHandler): any;
    setDefinitionFile(p0: string): any;
    setDisplacementPreProcessScript(p0: string): any;
    setIPRRenderHandler(p0: DzIPRRenderHandler): any;
    setIsShadowPass(p0: boolean): any;
    setLightPreProcessScript(p0: string): any;
    setRenderScript(p0: string): any;
    setSurfacePreProcessScript(p0: string): any;
    shapeRenderBeginning(p0: DzShape): any;
    shapeRenderFinished(p0: DzShape): void;
    stopBaking(): any;
    textureConvert(p0: DzRenderHandler, p1: DzCamera, p2: DzTextureConvertorOptions): any;
}