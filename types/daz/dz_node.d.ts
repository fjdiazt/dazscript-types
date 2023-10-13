declare class DzNode extends DzElement {

    /* Properties */
    renderPriority: number;
    assetIdAliases: QObject;
    nameAliases: QObject;
    assetId: string;

    /* Methods */
    propertyListInTreeChanged(): any; // TODO ;
    privatePropertyListInTreeChanged(): any; // TODO ;
    mergeElementSignal(): any; // TODO ;
    duplicateElementSignal(): any; // TODO ;
    createElementCopySignal(): any; // TODO ;
    moveDataItemToIndex(): any; // TODO ;
    findDataItemIndex(): any; // TODO ;
    duplicateMissingCustomDataWithContext(): any; // TODO ;
    duplicateMissingPropertiesWithContext(): any; // TODO ;
    duplicateMissingPrivatePropertiesWithContext(): any; // TODO ;
    doMergeElement(): any; // TODO ;
    doDuplicateElement(): any; // TODO ;
    mergeElement(): any; // TODO ;
    duplicateElement(): any; // TODO ;
    createElementCopy(): any; // TODO ;
    transformChanged(): void;
    selected(node: DzNode, onOff: boolean): void;
    rotationOrderChanged(): void;
    childAdded(child: DzNode): void;
    childRemoved(child: DzNode): void;
    childListChanged(): void;
    objectChanged(node: DzNode, oldObject: DzObject, newObject: DzObject): void;
    drawnDataChanged(): void;
    visibilityChanged(): void;
    selectabilityChanged(): void;
    aboutToBeRemoved(): void;
    removed(): void;
    added(): void;
    hiddenChanged(hidden: boolean): void;
    riggingChanged(): void;
    materialListChanged(): void;
    materialSelectionChanged(): void;
    uvsChanged(): void;
    assetModified(): void;
    assetWasSaved(): void;
    boundBoxInvalidated(): void;
    aboutToDelete(node: DzNode): void;
    inheritScaleChanged(): void;
    materialSelectionSetsChanged(): any; // TODO ;
    childListOrderChanged(): any; // TODO ;
    promoteSelectionChanged(): any; // TODO ;
    topologyChanged(): any; // TODO ;
    objectDuplicateAndSetSignal(): any; // TODO ;
    modifierDuplicateFinished(): any; // TODO ;
    setManipOverColor(color: QColor): void;
    clearManipOverColor(): void;
    finalize(isRender: boolean, allowResChange: boolean): void;
    finalize(isRender: boolean, allowResChange: boolean): void;
    finalize(isRender: boolean, allowResChange: boolean): void;
    select(onOff: boolean): void;
    select(onOff: boolean): void;
    setSelectable(onOff: boolean): void;
    setVisible(onOff: boolean): void;
    setRotationOrder(order: DzRotationOrder): void;
    setObject(object: DzObject): void;
    addNodeChild(child: DzNode, inPlace: boolean): DzError;
    removeNodeChild(child: DzNode, inPlace: boolean): DzError;
    removeAllNodeChildren(): void;
    moveNodeChildToIndex(): any; // TODO ;
    moveNodeChildToIndex(): any; // TODO ;
    findChildIndex(): any; // TODO ;

    /**
     * Sets the world-space transform values for this node at the current time.
     * @param pos The world-space position offset for this node.
     * @param rot The world-space rotation for this node.
     * @param scale The world-space scale for this node.
     */
    setWSTransform(pos: DzVec3, rot: DzQuat, scale: DzMatrix3): void;

    /**
     * Sets the world-space transform values for this node.
     * @param tm The scene time at which to set the transform for this node.
     * @param pos The world-space position offset for this node.
     * @param rot The world-space rotation for this node.
     * @param scale The world-space scale for this node.
     */
    setWSTransform(tm: DzTime, pos: DzVec3, rot: DzQuat, scale: DzMatrix3): void;

    setWSPos(pos: DzVec3): void;
    setWSPos(time: DzTime, pos: DzVec3): void;

    setWSRot(rot: DzQuat): void;
    setWSRot(tm: DzTime, rot: DzQuat): void;


    setWSScale(tm: DzTime, scale: DzMatrix3): void;
    setWSScale(scale: DzMatrix3): void;
    setWSScale(tm: DzTime, scale: DzMatrix3): void;
    setWSScale(scale: DzMatrix3): void;
    setLocalTransform(tm: DzTime, pos: DzVec3, rot: DzQuat): void;
    setLocalTransform(pos: DzVec3, rot: DzQuat): void;
    setLocalTransform(tm: DzTime, pos: DzVec3, rot: DzQuat): void;
    setLocalTransform(pos: DzVec3, rot: DzQuat): void;
    setLocalTransform(tm: DzTime, pos: DzVec3, rot: DzQuat): void;
    setLocalTransform(pos: DzVec3, rot: DzQuat): void;
    setLocalTransform(tm: DzTime, pos: DzVec3, rot: DzQuat): void;
    setLocalTransform(pos: DzVec3, rot: DzQuat): void;
    setToolLocalTransform(): any; // TODO ;
    setToolLocalTransform(): any; // TODO ;
    setLocalPos(tm: DzTime, pos: DzVec3): void;
    setLocalPos(pos: DzVec3): void;
    setLocalPos(tm: DzTime, pos: DzVec3): void;
    setLocalPos(pos: DzVec3): void;
    setLocalRot(tm: DzTime, rot: DzQuat): void;
    setLocalRot(rot: DzQuat): void;
    setLocalRot(tm: DzTime, rot: DzQuat): void;
    setLocalRot(rot: DzQuat): void;
    setToolLocalRot(): any; // TODO ;
    setToolLocalRot(): any; // TODO ;
    setLocalScale(tm: DzTime, scale: DzMatrix3): void;
    setLocalScale(tm: DzTime, scale: DzMatrix3, generalScale: number): void;
    setLocalScale(scale: DzMatrix3): void;
    setLocalScale(scale: DzMatrix3, generalScale: number): void;
    setLocalScale(tm: DzTime, scale: DzMatrix3): void;
    setLocalScale(tm: DzTime, scale: DzMatrix3, generalScale: number): void;
    setLocalScale(scale: DzMatrix3): void;
    setLocalScale(scale: DzMatrix3, generalScale: number): void;
    setLocalScale(tm: DzTime, scale: DzMatrix3): void;
    setLocalScale(tm: DzTime, scale: DzMatrix3, generalScale: number): void;
    setLocalScale(scale: DzMatrix3): void;
    setLocalScale(scale: DzMatrix3, generalScale: number): void;
    setLocalScale(tm: DzTime, scale: DzMatrix3): void;
    setLocalScale(tm: DzTime, scale: DzMatrix3, generalScale: number): void;
    setLocalScale(scale: DzMatrix3): void;
    setLocalScale(scale: DzMatrix3, generalScale: number): void;
    setOrientation(orientation: DzQuat): void;

    /**
     * Sets the orientation for this node.
     * @param orientation The orientation for this node. This defines the space in which node rotations occur.
     * @param makeDefault Whether or not to set the default value as well as the current value.
     */
    setOrientation(orientation: DzQuat, makeDefault: boolean): void;

    setOrientationAngles(): any; // TODO ;
    setOrientationAngles(): any; // TODO ;

    /**
     * Sets the origin for this node.
     * @param origin The origin for this node. This is the node's center point in relation to its geometry.
     * @param makeDefault Whether or not to set the default value as well as the current value.
     */
    setOrigin(origin: DzVec3, makeDefault?: boolean): void;

    /**
     * Sets the end point for this node.
     * @param endPnt The end point for this node. This is the node's end point in relation to its geometry.
     * @param makeDefault Whether or not to set the default value as well as the current value.

     */
    setEndPoint(endPnt: DzVec3, makeDefault?: boolean): void;

    adjustOrientation(): any; // TODO ;
    adjustOrientationAngles(): any; // TODO ;
    adjustOrigin(origin: DzVec3): void;
    adjustEndPoint(): any; // TODO ;
    clearTransformData(range: DzTimeRange): void;
    clearAllTransformData(): void;
    setInheritScale(onOff: boolean): void;
    setPointAtTarget(target: DzNode): void;
    setPointAtStrength(strength: number): void;
    setHidden(onOff: boolean): void;
    setPromoteSelection(): any; // TODO ;
    setRenderPriority(priority: number): void;
    setRenderPriority(priority: number): void;
    setRenderPriority(priority: number): void;
    setRenderPriority(priority: number): void;
    setVisibleInRender(onOff: boolean): void;
    setSelectionMap(map: DzSelectionMap): void;
    setPresentation(pres: DzPresentation): void;
    setPreviewBox(box: DzOrientedBox3): void;
    invalidateBoundingBoxes(checkSkeleton: boolean): void;
    invalidateBoundingBoxes(checkSkeleton: boolean): void;
    getSkeleton(): DzSkeleton;
    getRotationOrder(): DzRotationOrder;
    isSelected(): boolean;
    isSelectable(): boolean;
    isVisible(): boolean;
    isVisibileInRender(): boolean;
    castsShadow(): boolean;
    getObject(): DzObject;
    getNumNodeChildren(): number;
    getNodeChild(i: number): DzNode;
    getNodeChildren(scanHierarchy: boolean): DzNode[];
    getNodeChildren(nodes: DzNode[], scanHierarchy: boolean): void;
    isNodeChild(node: DzNode): boolean;
    isNodeDescendantOf(node: DzNode, recurse: boolean): boolean;
    isNodeAncestorOf(node: DzNode, recurse: boolean): boolean;
    findNodeChild(name: QString, scanHierarchy: boolean): DzNode;
    findNodeChildByAssetID(assetID: QString, scanHierarchy: boolean, checkSource: boolean): DzNode;
    findNodeChildByNameOrAlias(): any; // TODO ;
    findNodeChildByNameOrAlias(): any; // TODO ;
    getNodeParent(): DzNode;
    isRootNode(): boolean;
    getLocalBoundingBox(): DzBox3;
    getLocalOrientedBox(): DzOrientedBox3;
    getWSBoundingBox(): DzBox3;
    getWSOrientedBox(): DzOrientedBox3;
    getPreviewBox(): DzOrientedBox3;
    getWSTransform(tm: DzTime, defaultVal: boolean): DzMatrix3;
    getWSTransform(): DzMatrix3;
    getWSTransform(tm: DzTime, pos: DzVec3, rot: DzQuat, scale: DzMatrix3, defaults: boolean): void;
    getWSTransform(pos: DzVec3, rot: DzQuat, scale: DzMatrix3): void;
    getWSTransform(tm: DzTime, defaultVal: boolean): DzMatrix3;
    getWSTransform(): DzMatrix3;
    getWSTransform(tm: DzTime, pos: DzVec3, rot: DzQuat, scale: DzMatrix3, defaults: boolean): void;
    getWSTransform(pos: DzVec3, rot: DzQuat, scale: DzMatrix3): void;
    getWSTransform(tm: DzTime, defaultVal: boolean): DzMatrix3;
    getWSTransform(): DzMatrix3;
    getWSTransform(tm: DzTime, pos: DzVec3, rot: DzQuat, scale: DzMatrix3, defaults: boolean): void;
    getWSTransform(pos: DzVec3, rot: DzQuat, scale: DzMatrix3): void;
    getToolWSTransform(): any; // TODO ;
    getToolWSTransform(): any; // TODO ;

    /**
     * The world-space position of the node at the current time.
     */
    getWSPos(): DzVec3;

    /**
     * The world-space position of the node at the current time.
     * @param tm The scene time at which to get the transform.
     * @param defaultValue Whether or not to use the default version of the origin, end point, and orientation instead of the current position.
     */
    getWSPos(time: DzTime, defaultValue?: boolean): DzVec3;

    /**
     * The world-space rotation of the node at the current time.
     */
    getWSRot(): DzQuat;

    /**
     * The world-space rotation of the node at the current time.
     * @param tm The scene time at which to get the transform.
     * @param defaultVal Whether or not to use the default version of the origin, end point, and orientation instead of the current position.
     */
    getWSRot(tm: DzTime, defaultVal?: boolean): DzQuat;

    getToolWSRot(): any; // TODO ;

    getWSScale(): DzMatrix3;
    getWSScale(tm: DzTime, defaultVal?: boolean): DzMatrix3;

    getLocalTransform(tm: DzTime, defaultVal: boolean): DzMatrix3;
    getLocalTransform(): DzMatrix3;
    getLocalTransform(tm: DzTime, pos: DzVec3, rot: DzQuat, scale: DzMatrix3, defaults: boolean): void;
    getLocalTransform(pos: DzVec3, rot: DzQuat, scale: DzMatrix3): void;
    getLocalTransform(tm: DzTime, defaultVal: boolean): DzMatrix3;
    getLocalTransform(): DzMatrix3;
    getLocalTransform(tm: DzTime, pos: DzVec3, rot: DzQuat, scale: DzMatrix3, defaults: boolean): void;
    getLocalTransform(pos: DzVec3, rot: DzQuat, scale: DzMatrix3): void;
    getLocalTransform(tm: DzTime, defaultVal: boolean): DzMatrix3;
    getLocalTransform(): DzMatrix3;
    getLocalTransform(tm: DzTime, pos: DzVec3, rot: DzQuat, scale: DzMatrix3, defaults: boolean): void;
    getLocalTransform(pos: DzVec3, rot: DzQuat, scale: DzMatrix3): void;
    getLocalPos(tm: DzTime, defaultVal?: boolean): DzVec3;
    getLocalPos(): DzVec3;
    getLocalRot(tm: DzTime, defaultVal?: boolean): DzQuat;
    getLocalRot(): DzQuat;
    getToolLocalRot(): any; // TODO ;
    getToolLocalRot(): any; // TODO ;
    getLocalScale(tm: DzTime, defaultVal: boolean): DzMatrix3;
    getLocalScale(): DzMatrix3;
    getLocalScale(tm: DzTime, defaultVal: boolean): DzMatrix3;
    getLocalScale(): DzMatrix3;
    getLocalScale(tm: DzTime, defaultVal: boolean): DzMatrix3;
    getLocalScale(): DzMatrix3;
    getOrientation(): DzQuat;
    getOrientation(defaultVal: boolean): DzQuat;
    updateOrientation(): void;

    /**
     * The origin of the node.
     * @param defaultVal Get the default or current values of the origin. Default is false for current.
     */
    getOrigin(defaultVal?: boolean): DzVec3;

    /**
     * The endpoint for this node.
     * @param defaultVal If true, the default value for the end point is returned, otherwise the current value is.
     */
    getEndPoint(defaultVal?: boolean): DzVec3;

    getSelectionMap(): DzSelectionMap;
    getXPosControl(): DzFloatProperty;
    getYPosControl(): DzFloatProperty;
    getZPosControl(): DzFloatProperty;
    getXRotControl(): DzFloatProperty;
    getYRotControl(): DzFloatProperty;
    getZRotControl(): DzFloatProperty;
    getScaleControl(): DzFloatProperty;
    getXScaleControl(): DzFloatProperty;
    getYScaleControl(): DzFloatProperty;
    getZScaleControl(): DzFloatProperty;
    getSelectabilityControl(): DzBoolProperty;
    getVisibilityControl(): DzBoolProperty;
    getRenderVisibilityControl(): DzBoolProperty;
    getShadowControl(): DzBoolProperty;
    getRenderPriorityControl(): DzEnumProperty;
    getPointAtControl(): DzNumericNodeProperty;
    getOriginXControl(): DzFloatProperty;
    getOriginYControl(): DzFloatProperty;
    getOriginZControl(): DzFloatProperty;
    getEndXControl(): DzFloatProperty;
    getEndYControl(): DzFloatProperty;
    getEndZControl(): DzFloatProperty;
    getOrientXControl(): DzFloatProperty;
    getOrientYControl(): DzFloatProperty;
    getOrientZControl(): DzFloatProperty;
    inheritsScale(): boolean;
    isHidden(): boolean;
    isInScene(): any; // TODO ;
    isSelectionPromoted(): any; // TODO ;
    getRenderPriority(): number;
    getPresentation(): DzPresentation;
    getSelectionNode(): any; // TODO ;
    isBoneSelectingNode(): any; // TODO ;
    setInvisibleByGroup(yesNo: boolean): void;
    setUnselectableByGroup(yesNo: boolean): void;
    invisibleByGroup(): boolean;
    unselectableByGroup(): boolean;
    getWeightMapHandler(): any; // TODO ;
    doObjectDuplicateAndSet(): any; // TODO ;
    isEditorNode(): any; // TODO ;
    getToolXRotControl(): any; // TODO ;
    getToolYRotControl(): any; // TODO ;
    getToolZRotControl(): any; // TODO ;
    invalidateCache(): void;
    selectionMapModified(): void;
    updateTransform(): void;
    updateVis(): void;
    updateRenderable(): void;
    invalidateOrientation(): any; // TODO ;
    objectDuplicateAndSet(): any; // TODO ;
    handleRendererModeChanged(): any; // TODO ;
}