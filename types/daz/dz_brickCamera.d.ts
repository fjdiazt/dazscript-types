declare class DzBrickCamera extends DzCamera {
    aspectHeight: number;	// 442
    aspectRatio: number;	// 2.151583671569824
    aspectWidth: number;	// 951
    assetId: string;	// Two-tone 2
    assetIdAliases: QObject;	//
    currentViewHeight: number;	// 0
    currentViewWidth: number;	// 0
    depthOfField: boolean;	// false
    elementID: number;	// 660
    fStop: number;	// 22
    farClippingPlane: number;	// 4000
    focalDistance: number;	// 450
    focalLength: number;	// 65
    frameWidth: number;	// 36
    headlightMode: object;	// undefined
    headlightOffset: QObject;	// [-30,20,0]
    isPerspective: boolean;	// true
    name: string;	// Two-tone 2
    nameAliases: QObject;	//
    nearClippingPlane: number;	// 5
    objectName: string;	// Two-tone 2
    pixelsHeight: number;	// 930
    pixelsWidth: number;	// 2000
    proportionsConstrained: boolean;	// true
    renderPriority: number;	// 3
    type: number;	// 8
    /*
    useLocalDimensions: boolean;	// false
    aboutToBeRemoved(): void;
    aboutToDelete(p0: DzNode): any;
    addBrick(p0: DzShaderBrick): any;
    addDataItem(p0: DzElementData): any;
    addNodeChild(p0: DzNode): any;
    addNodeChild(p0: DzNode, p1: boolean): any;
    addPrivateProperty(p0: DzProperty): any;
    addProperty(p0: DzProperty): any;
    added(): void;
    adjustEndPoint(p0: DzVec3): any;
    adjustOrientation(p0: DzQuat): any;
    adjustOrientationAngles(p0: DzVec3): any;
    adjustOrigin(p0: DzVec3): any;
    aimAt(p0: DzVec3): any;
    applyToScene(): any;
    aspectHeightChanged(p0: number): void;
    aspectRatioChanged(): void;
    aspectWidthChanged(p0: number): void;
    assetModified(): void;
    assetWasSaved(): void;
    beginEdit(): any;
    boundBoxInvalidated(): void;
    brickAdded(p0: DzShaderBrick): void;
    brickIDChanged(p0: number): void;
    brickRemoved(p0: DzShaderBrick): void;
    cancelEdit(): any;
    castsShadow(): any;
    childAdded(p0: DzNode): void;
    childListChanged(): void;
    childListOrderChanged(): void;
    childRemoved(p0: DzNode): void;
    className(): any;
    */
    static className(): String;
    /*
    clearAllAnimData(): any;
    clearAllTransformData(): any;
    clearAnimData(p0: DzTimeRange): any;
    clearManipOverColor(): any;
    clearTransformData(p0: DzTimeRange): any;
    copyFrom(p0: DzElement): any;
    copyToClipboard(): any;
    copyToClipboard(p0: string[]): any;
    createElementCopy(p0: DzElementDuplicateContext): any;
    createElementCopySignal(p0: DzElementDuplicateContext): any;
    cursorToRay(p0: number, p1: number): any;
    cursorToScene(p0: number, p1: number, p2: number): any;
    */
    deleteAllBricks(): any;
    deleteBrick(p0: number): any;
    deleteBrick(p0: DzShaderBrick): any;
    /*
    deleteDataItem(p0: DzElementData): any;
    deleteLater(): any;
    depthOfFieldChanged(): void;
    destroyed(): void;
    destroyed(p0: QObject): void;
    dimensionsChanged(): void;
    doDuplicateElement(p0: DzElementDuplicateContext): any;
    doMergeElement(p0: DzElement, p1: DzElementDuplicateContext): any;
    doobjectDuplicateAndSet(p0: DzNode, p1: DzElementDuplicateContext): any;
    drawnDataChanged(): void;

    duplicateElement(p0: DzElement, p1: DzElementDuplicateContext): any;
    duplicateElementSignal(p0: DzElement, p1: DzElementDuplicateContext): any;
    duplicateMissingCustomData(p0: DzElement): any;
    duplicateMissingCustomDataWithContext(p0: DzElement, p1: DzElementDuplicateContext): any;
    duplicateMissingPrivateProperties(p0: DzElement): any;
    duplicateMissingPrivatePropertiesWithContext(p0: DzElement, p1: DzElementDuplicateContext): any;
    duplicateMissingProperties(p0: DzElement): any;
    duplicateMissingPropertiesWithContext(p0: DzElement, p1: DzElementDuplicateContext): any;
    endEditMode(): any;
    fStopChanged(p0: DzTimeRange): void;
    finalize(): any;
    finalize(p0: boolean): any;
    finalize(p0: boolean, p1: boolean): any;
    findChildIndex(p0: DzNode): any;
    findDataItem(p0: string): any;
    findDataItemIndex(p0: DzElementData): any;
    findMatchingProperty(p0: DzProperty): any;
    findNodeChild(p0: string): any;
    findNodeChild(p0: string, p1: boolean): any;
    findNodeChildByAssetID(p0: string): any;
    findNodeChildByAssetID(p0: string, p1: boolean): any;
    findNodeChildByAssetID(p0: string, p1: boolean, p2: boolean): any;
    findNodeChildByNameOrAlias(p0: string, p1: boolean): any;
    findNodeChildByNameOrAlias(p0: string, p1: boolean, p2: boolean): any;
    findPrivateProperty(p0: string): any;
    findPrivateProperty(p0: string, p1: boolean): any;
    findPrivatePropertyByLabel(p0: string): any;
    findPrivatePropertyByLabel(p0: string, p1: boolean): any;
    findProperty(p0: string): any;
    findProperty(p0: string, p1: boolean): any;
    findPropertyByLabel(p0: string): any;
    findPropertyByLabel(p0: string, p1: boolean): any;
    finishEdit(): any;
    focalDistanceChanged(p0: DzTimeRange): void;
    focalLengthChanged(p0: DzTimeRange): void;
    frame(p0: DzBox3, p1: number): any;
    frameWidthChanged(p0: number): void;
    fromScene(): any;
    */
    generateFilesFinished(): void;
    generateFilesStarted(): void;
    getAttributes(p0: DzSettings): any;
    getBrick(p0: number): DzShaderBrick;
    getBrickIDs(): any;
    getBrickIDs(p0: number[]): any;
    getBrickSet(p0: number): DzBrickSet;
    getBrickUserName(): any;
    getCameraName(): string;
    getDataItem(p0: number): any;
    getDataItemList(): any;
    /*
    getDepthOfFieldChannel(): any;
    getDisplayPersistenceChannel(): any;
    getDofColorChannel(): any;
    getDofOverlayColorChannel(): any;
    getDofOverlayOpacityChannel(): any;
    getDofVisibilityChannel(): any;
    getElementChild(p0: number): any;
    getElementParent(): any;
    getEndPoint(): any;
    getEndPoint(p0: boolean): any;
    getEndXControl(): any;
    getEndYControl(): any;
    getEndZControl(): any;
    getExtension(): any;
    getFStopChannel(): any;
    getFarDofVisibilityChannel(): any;
    getFieldOfView(): any;
    getFocalDistChannel(): any;
    getFocalLengthChannel(): any;
    getFocalPoint(): any;
    getFocalPointScaleChannel(): any;
    getFovColorChannel(): any;
    getFovLengthChannel(): any;
    getFovOpacityChannel(): any;
    getFrameWidthChannel(): any;
    getHeadlampIntensityControl(): any;
    getHeadlight(): any;
    getIdentifier(): any;
    getLabel(): any;
    getLensThicknessControl(): any;
    getLoadScript(): any;
    getLocalBoundingBox(): any;
    getLocalOrientedBox(): any;
    getLocalPos(): any;
    getLocalPos(p0: DzTime): any;
    getLocalPos(p0: DzTime, p1: boolean): any;
    getLocalRot(): any;
    getLocalRot(p0: DzTime): any;
    getLocalRot(p0: DzTime, p1: boolean): any;
    getLocalScale(): any;
    getLocalScale(p0: DzTime): any;
    getLocalScale(p0: DzTime, p1: boolean): any;
    getLocalTransform(): any;
    getLocalTransform(p0: DzTime): any;
    getLocalTransform(p0: DzTime, p1: boolean): any;
    getName(): any;
    getNearDofVisibilityChannel(): any;
    getNodeChild(p0: number): any;
    getNodeChildren(): any;
    getNodeChildren(p0: boolean): any;
    getNodeParent(): any;
    */
    getNumBrickSets(): number;
    /*
    getNumDataItems(): any;
    getNumElementChildren(): any;
    getNumNodeChildren(): any;
    getNumPrivateProperties(): any;
    getNumProperties(): any;
    getobject(): any;
    getOrientXControl(): any;
    getOrientYControl(): any;
    getOrientZControl(): any;
    getOrientation(): any;
    getOrientation(p0: boolean): any;
    getOrigin(): any;
    getOrigin(p0: boolean): any;
    getOriginXControl(): any;
    getOriginYControl(): any;
    getOriginZControl(): any;
    getPointAtControl(): any;
    getPresentation(): any;
    getPreviewBox(): any;
    getPrivateProperty(p0: number): any;
    getPrivatePropertyGroups(): any;
    getPrivatePropertyList(): any;
    getProperty(p0: number): any;
    getPropertyGroups(): any;
    getPropertyList(): any;
    getRenderPriority(): any;
    getRenderPriorityControl(): any;
    getRenderVisibilityControl(): any;
    getRotationOrder(): any;
    getScaleControl(): any;
    getSelectabilityControl(): any;
    getSelectionMap(): any;
    getSelectionNode(): any;
    getShadowControl(): any;
    getSightLineOpacityChannel(): any;
    getSkeleton(): any;
    getVisibilityControl(): any;
    getWSBoundingBox(): any;
    getWSOrientedBox(): any;
    getWSPos(): any;
    getWSPos(p0: DzTime): any;
    getWSPos(p0: DzTime, p1: boolean): any;
    getWSRot(): any;
    getWSRot(p0: DzTime): any;
    getWSRot(p0: DzTime, p1: boolean): any;
    getWSScale(): any;
    getWSScale(p0: DzTime): any;
    getWSScale(p0: DzTime, p1: boolean): any;
    getWSTransform(): any;
    getWSTransform(p0: DzTime): any;
    getWSTransform(p0: DzTime, p1: boolean): any;
    getWeightMapHandler(): any;
    getXPosControl(): any;
    getXRotControl(): any;
    getXScaleControl(): any;
    getYPosControl(): any;
    getYRotControl(): any;
    getYScaleControl(): any;
    getZPosControl(): any;
    getZRotControl(): any;
    getZScaleControl(): any;
    handleRendererModeChanged(p0: DzRenderer): void;
    headlightModeChanged(): void;
    headlightOffsetChanged(): void;
    hiddenChanged(p0: boolean): void;
    inEdit(): any;
    inheritScaleChanged(): void;
    inherits(): any;
    inherits(p0: string): any;
    inheritsScale(): any;
    insertPrivateProperty(p0: number, p1: DzProperty): any;
    insertProperty(p0: number, p1: DzProperty): any;
    invalidateBoundingBoxes(): any;
    invalidateBoundingBoxes(p0: boolean): any;
    invalidateCache(): any;
    invalidateOrientation(): any;
    invalidateSets(): any;
    invisibleByGroup(): any;
    isAtDefaultSceneCameraValues(): any;
    isBoneSelectingNode(): any;
    isDataItemNameUnique(p0: string): any;
    isDataItemNameUnique(p0: string, p1: boolean): any;
    isDefaultSceneCamera(): any;
    isEditorNode(): any;
    isHidden(): any;
    isInEditMode(): any;
    isInScene(): any;
    isNodeChild(p0: DzNode): any;
    isPrivatePropertyNameUnique(p0: string): any;
    isPrivatePropertyNameUnique(p0: string, p1: boolean): any;
    isPropertyNameUnique(p0: string): any;
    isPropertyNameUnique(p0: string, p1: boolean): any;
    isRootNode(): any;
    isSelectable(): any;
    isSelected(): void;
    isSelectionPromoted(): void;
    isViewCamera(): any;
    isVisibileInRender(): any;
    isVisible(): any;
    iskindof(p0: string): any;
    labelChanged(p0: string): void;
    makePersistent(): any;
    materialListChanged(): void;
    materialSelectionChanged(): void;
    materialSelectionSetsChanged(): void;
    mergeElement(p0: DzElement, p1: DzElementDuplicateContext): any;
    mergeElementSignal(p0: DzElement, p1: DzElementDuplicateContext): any;
    modifierDuplicateFinished(p0: DzElementDuplicateContext): void;
    modifyAsset(): any;
    modifyAsset(p0: DzUri): any;
    */
    moveBrick(p0: number, p1: IDzBrickUser): any;
    /*
    moveDataItemToIndex(p0: DzElementData, p1: number): any;
    moveNodeChildToIndex(p0: DzNode, p1: number): any;
    moveNodeChildToIndex(p0: number, p1: number): any;
    movePrivateProperty(p0: DzProperty, p1: DzElement): any;
    moveProperty(p0: DzProperty, p1: DzElement): any;
    nameChanged(p0: string): void;
    objectChanged(p0: DzNode, p1: Dzobject, p2: Dzobject): void;
    objectDuplicateAndSet(p0: DzNode, p1: DzElementDuplicateContext): any;
    objectDuplicateAndSetSignal(p0: DzNode, p1: DzElementDuplicateContext): any;
    parentChanged(): void;
    parentChanged(p0: DzNode, p1: DzNode, p2: DzNode): void;
    pixelDimensionsChanged(): void;
    pixelsHeightChanged(p0: number): void;
    pixelsWidthChanged(p0: number): void;
    privatePropertyAdded(p0: DzProperty): void;
    privatePropertyListChanged(): void;
    privatePropertyListInTreeChanged(): void;
    privatePropertyRemoved(p0: DzProperty): void;
    privatePropertyTreeChanged(): void;
    projectionChanged(): void;
    promoteSelectionChanged(p0: boolean): void;
    propertyAdded(p0: DzProperty): void;
    propertyListChanged(): void;
    propertyListInTreeChanged(): void;
    propertyRemoved(p0: DzProperty): void;
    propertyTreeChanged(): void;
    proportionsConstrainedChanged(p0: boolean): void;
    removeAllNodeChildren(): any;
    removeDataItem(p0: DzElementData): any;
    removeNodeChild(p0: DzNode): any;
    removeNodeChild(p0: DzNode, p1: boolean): any;
    removePrivateProperty(p0: DzProperty): any;
    removePrivateProperty(p0: string): any;
    removeProperty(p0: DzProperty): any;
    removeProperty(p0: string): any;
    removeSet(p0: DzBrickSet): any;
    removed(): void;
    reset(): any;
    riggingChanged(): void;
    rotationOrderChanged(): void;
    select(): any;
    select(p0: boolean): any;
    selectabilityChanged(): void;
    selected(p0: DzNode, p1: boolean): void;
    selectionMapModified(): void;
    */
    setAttributes(p0: DzSettings): any;
    setBrickUserName(p0: string): any;
    /*
    setCameraName(p0: string): any;
    setEndPoint(p0: DzVec3): any;
    setEndPoint(p0: DzVec3, p1: boolean): any;
    setHidden(p0: boolean): any;
    setIdentifier(p0: QUuid): any;
    setInheritScale(p0: boolean): any;
    setInvisibleByGroup(p0: boolean): any;
    setIsDefaultSceneCamera(p0: boolean): any;
    setLabel(p0: string): any;
    setLoadScript(p0: DzScript): any;
    setLocalPos(p0: DzVec3): any;
    setLocalPos(p0: DzTime, p1: DzVec3): any;
    setLocalRot(p0: DzQuat): any;
    setLocalRot(p0: DzTime, p1: DzQuat): any;
    setLocalScale(p0: DzMatrix3): any;
    setLocalScale(p0: DzMatrix3, p1: number): any;
    setLocalScale(p0: DzTime, p1: DzMatrix3): any;
    setLocalScale(p0: DzTime, p1: DzMatrix3, p2: number): any;
    setLocalTransform(p0: DzVec3, p1: DzQuat, p2: DzMatrix3): any;
    setLocalTransform(p0: DzVec3, p1: DzQuat, p2: DzMatrix3, p3: number): any;
    setLocalTransform(p0: DzTime, p1: DzVec3, p2: DzQuat, p3: DzMatrix3): any;
    setLocalTransform(p0: DzTime, p1: DzVec3, p2: DzQuat, p3: DzMatrix3, p4: number): any;
    setManipOverColor(p0: QColor): any;
    setName(p0: string): any;
    setobject(p0: Dzobject): any;
    setOrientation(p0: DzQuat): any;
    setOrientation(p0: DzQuat, p1: boolean): any;
    setOrientationAngles(p0: DzVec3): any;
    setOrientationAngles(p0: DzVec3, p1: boolean): any;
    setOrigin(p0: DzVec3): any;
    setOrigin(p0: DzVec3, p1: boolean): any;
    setPointAtStrength(p0: number): any;
    setPointAtTarget(p0: DzNode): any;
    setPresentation(p0: DzPresentation): any;
    setPreviewBox(p0: DzOrientedBox3): any;
    setPromoteSelection(p0: boolean): any;
    setRenderPriority(p0: number): any; //DzRenderMgr::RenderPriority
    setRenderPriority(p0: number): any;
    setRotationOrder(p0: DzRotationOrder): any;
    setSelectable(p0: boolean): any;
    setSelectionMap(p0: DzSelectionMap): any;
    setType(p0: number): any; //DzCamera::CameraType
    setUnselectableByGroup(p0: boolean): any;
    setVisible(p0: boolean): any;
    setVisibleInRender(p0: boolean): any;
    setWSPos(p0: DzVec3): any;
    setWSPos(p0: DzTime, p1: DzVec3): any;
    setWSRot(p0: DzQuat): any;
    setWSRot(p0: DzTime, p1: DzQuat): any;
    setWSScale(p0: DzMatrix3): any;
    setWSScale(p0: DzTime, p1: DzMatrix3): any;
    setWSTransform(p0: DzVec3, p1: DzQuat, p2: DzMatrix3): any;
    setWSTransform(p0: DzTime, p1: DzVec3, p2: DzQuat, p3: DzMatrix3): any;
    shouldDoHeadLight(p0: boolean, p1: boolean): any;
    shouldSortOnLoad(): any;
    startEditMode(): any;
    topologyChanged(): void;
    transformChanged(): void;
    unselectableByGroup(): any;
    update(): any;
    update(p0: boolean): any;
    updateDimensions(p0: object): any; //CameraDimension
    updateIdentifierOnSetInvalidate(p0: boolean): any;
    updateOrientation(): any;
    updateRenderable(): any;
    updateTransform(): any;
    updateVis(): any;
    useLocalDimensionsChanged(p0: boolean): void;
    */
    usesLocalShaderSpace(): any;
    /*
    uvsChanged(): void;
    visibilityChanged(): void;
    */
}