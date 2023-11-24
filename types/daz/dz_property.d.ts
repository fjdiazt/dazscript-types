declare class DzProperty extends DzBase {
    static InterpLinear: number;	// 0
    static InterpConstant: number;	// 1
    static InterpTCB: number;	// 2
    static InterpHermite: number;	// 3

    /* Reset Flags */
    static ResetValue: number;
    static ResetImages: number;
    static ResetToDefinition: number;
    static ResetDefault: number;

    /* Properties */
    assetUri: DzUri;
    assetId: string;
    isPrivate: boolean;

    /* Methods */
    addAlias(prop: DzProperty, alias: DzProperty): void;
    addAlias(alias: DzProperty): void;
    addAlias(prop: DzProperty, alias: DzProperty): void;
    addAlias(alias: DzProperty): void;
    addSlaveController(control: DzController): void;
    assetModified(): void;
    assetWasSaved(): void;
    beginEdit(): void;
    canAnimate(): boolean;
    canAnimateChanged(enabled: boolean): void;
    canAutoFollow(): boolean;
    canAutoFollowChanged(canAutoFollow: boolean): void;
    cancelEdit(): void;
    clearGroup(): void;
    clearRegion(preservePath: boolean): void;
    controllerListIterator(): DzControllerListIterator;
    copyBaseData(prop: DzProperty): void;
    copyFrom(prop: DzProperty): void;
    copyToClipboard(): DzPropertyClipboard;
    createAlias(): DzProperty;
    currentValueChanged(): void;
    currentValueIsDefaultValue(): boolean;
    currentValueIsDefinitionValue(): boolean;
    definitionLoadFromDAZ(): boolean;
    deleteAllKeys(): void;
    deleteKeys(interval: DzTimeRange): number;
    /**
     * Deletes all keys within a specified range.
     * @param start The key index to start from.
     * @param end The key index to end at.
     */
    deleteKeys(start: number, end: number): number;
    deleteSelectedKeys(): number;
    doCurrentAttributesMatchDefinition(): boolean;
    //duplicate(): DzProperty;
    editFinished(): void;
    emitCanAnimateChanged(enabled: boolean): void;
    emitCanAutoFollowChanged(canAutoFollow: boolean): void;
    emitCurrentValueChanged(): void;
    emitEditFinished(): void;
    emitIsManipulatorChanged(isManip: boolean): void;
    emitIsUserPropertyChanged(isUserProp: boolean): void;
    emitKeySelectionChanged(range: DzTimeRange): void;
    emitLockStateChanged(): void;
    emitOverridingControllersChanged(overriding: boolean): void;
    emitValueChanged(range: DzTimeRange): void;
    ensurePropertyType(prop: DzProperty, srcProp: DzProperty): DzProperty;

    /**
     * The index of the key if there is a key at the given time, otherwise -1.
     * @param time
     * @deprecated Use DzTime overload
     */
    findKeyIndex(time: number): number;

    /**
     * The index of the key if there is a key at the given time, otherwise -1.
     * @param time
     */
    findKeyIndex(time: DzTime): number;

    findMatchingProperty(node: DzNode): DzProperty;
    finishEdit(): void;
    getAlias(index: number): DzProperty;
    getAliasTarget(): DzProperty;
    getAssetType(): any;
    getAttributes(settings: DzPropertySettings): void;
    getController(idx: number): DzController;
    getControllerList(): DzController[];
    getFlags(): number;
    getGroup(): DzPropertyGroup;
    getGroupOnlyPath(): string;
    getIndexOfSlaveControllers(cntrl: DzController): number;
    getKeyIndexRange(iv: DzTimeRange, start: number): number;
    getKeyRange(): DzTimeRange;
    getKeyTime(i: number): DzTime;
    getLabel(): string;
    getNumAliases(): number;
    getNumControllers(): number;
    getNumKeys(range: DzTimeRange): number;
    getNumKeys(): number;
    getNumSelectedKeys(): number;
    getNumSlaveControllers(): number;
    getOwner(): DzElement;
    getPath(): string;
    getPresentation(): DzPresentation;
    getPropertyDefinition(): DzPropertyDefinition;
    getRegion(): DzGeometryRegion;
    getSelectedKeyRange(): DzTimeRange;
    getSlaveController(idx: number): DzController;
    getSlaveControllerList(): DzController[];
    getWidgetClass(styled: boolean): string;
    groupChanged(newGroup: DzPropertyGroup): void;
    hasControllers(): boolean;
    hasKeys(): boolean;
    hasSlaveControllers(): boolean;
    hiddenChanged(hidden: boolean): void;
    insertController(controller: DzController, idx: number): void;
    isAlias(): boolean;
    isCombinable(prop: DzProperty): boolean;
    isEditing(): boolean;
    isFavorite(): boolean;
    isFavoriteChanged(onOff: boolean): void;
    isGlobalFavorite(): boolean;
    isGlobalFavoriteChanged(onOff: boolean): void;
    isHidden(): boolean;
    isKey(t: DzTime, index: number): boolean;
    isKeySelected(i: number): boolean;
    isLocked(): boolean;
    /**
     * If the property will cause manipulation updates of the object in the viewport (default), otherwise false.
     * Example of non-manipulator properties are "SubDivision level, Render SubD Level, etc"
     */
    isManipulator(): boolean;
    isManipulatorChanged(isManip: boolean): void;
    isNew(): boolean;
    isNumeric(): boolean;
    isOverridingControllers(): boolean;
    isPrivateProperty(): boolean;
    isRigProperty(): boolean;
    isSelected(): boolean;
    isUserProperty(): boolean;
    isUserPropertyChanged(isUserProp: boolean): void;
    keySelectionChanged(range: DzTimeRange): void;
    labelChanged(newLabel: string): void;
    lock(onOff: boolean): void;
    lockStateChanged(): void;
    moveControllerToIndex(ctrl: DzController, newIdx: number): boolean;
    moveControllerToIndex(curIdx: number, newIdx: number): boolean;
    moveControllerToIndex(ctrl: DzController, newIdx: number): boolean;
    moveControllerToIndex(curIdx: number, newIdx: number): boolean;
    newStateChanged(): void;
    overridingControllersChanged(overriding: boolean): void;
    presentationIconChanged(): void;
    propertyDeleted(thisProperty: DzProperty): void;
    propertyDuplicate(): DzProperty;
    regionChanged(): void;
    regroup(tree: DzPropertyGroupTree): void;
    removeAlias(prop: DzProperty, alias: DzProperty): void;
    removeAllControllers(): void;
    removeController(ctrl: DzController): void;
    removeController(idx: number): void;
    removeController(prop: DzProperty): void;
    removeController(ctrl: DzController): void;
    removeController(idx: number): void;
    removeController(prop: DzProperty): void;
    removeController(ctrl: DzController): void;
    removeController(idx: number): void;
    removeController(prop: DzProperty): void;
    removeSlaveController(control: DzController): void;
    removed(): void;
    reset(resetFlag: number): void;
    selectAllKeys(onOff: boolean): number;
    selectKey(i: number, onOff: boolean): void;
    selectKeys(range: DzTimeRange, onOff: boolean): number;
    selectionStateChanged(): void;
    setAttributes(settings: DzPropertySettings): void;
    setCanAnimate(yesNo: boolean): void;
    setCanAutoFollow(onOff: boolean): void;
    setCurrentAttributesAsDefinition(): void;
    setFlags(int: number): void;
    setGroup(group: DzPropertyGroup): void;
    setHidden(yesNo: boolean): void;
    setIsFavorite(onOff: boolean): void;
    setIsGlobalFavorite(onOff: boolean): void;
    setIsManipulator(onOff: boolean): void;
    setIsPrivateProperty(yesNo: boolean): void;
    setIsRigProperty(yesNo: boolean): void;
    setIsUserProperty(yesNo: boolean): void;

    /**
     * NOT WORKING
     * Sets the interpolation method for the i'th key.
     * @param i The index of the key to change.
     * @param interp The type of interpolation to perform between this keyframe and the next.
     * @deprecated use setKeyInterpolation
     */
    setKeyInterpolationType(i: number, interp: number): void;
    /**
     * NOT WORKING
     * @param i The index of the key to change.
     * @return The type of interpolation to perform between this keyframe and the next.
     * @deprecated use setKeyInterpolation
     */
    getKeyInterpolationType(i: number): number;

    setLabel(label: string): void;
    setNew(onOff: boolean): void;
    setOverrideControllers(onOff: boolean): void;
    setOwner(owner: DzElement): void;
    //setPath(path: string): void; // Use DzSceneHelper.setPropertyPath instead
    setPresentation(pres: DzPresentation): void;
    setRegion(reg: DzGeometryRegion): void;
    setSelected(onOff: boolean): void;
    slaveControllerListIterator(): DzControllerListIterator;
    toQObject(): QObject;
    toQObject(): any;
    toQObject(): QObject;
    toQObject(): any;
    updateControllerState(): void;
    updateTime(): void;
    valueChanged(range: DzTimeRange): void;
    valueIsReplaced(): boolean;
    paste(prop: DzProperty): DzError;
    addChild(child: DzPropertyGroup): void;
    addProperty(prop: DzProperty): void;
    addSibling(sibling: DzPropertyGroup): void;
    addedChild(newChild: DzPropertyGroup): void;
    childListChanged(): void;
    collectAllPaths(paths: String[]): void;
    findChild(name: string): DzPropertyGroup;
    findSibling(name: string): DzPropertyGroup;
    getAllPaths(): String[];
    getCollapsed(): boolean;
    getFirstChild(): DzPropertyGroup;
    getNextSibling(): DzPropertyGroup;
    getNumProperties(): number;
    getParent(): DzPropertyGroup;
    getPath(): string;
    getProperties(): DzPropertyListIterator;
    //getProperty(i: number): DzProperty;
    getRegion(): DzGeometryRegion;
    getTree(): DzPropertyGroupTree;
    hasProperty(label: string, exclude: DzProperty): boolean;
    indexOfProperty(prop: DzProperty): number;
    isRegion(): boolean;
    moveChildToIndex(childName: string, newIndex: number): boolean;
    movePropertyToIndex(prop: DzProperty, newIndex: number): boolean;
    movePropertyToIndex(propName: string, newIndex: number): boolean;
    movePropertyToIndex(curIndex: number, newIndex: number): boolean;
    movePropertyToIndex(prop: DzProperty, newIndex: number): boolean;
    movePropertyToIndex(propName: string, newIndex: number): boolean;
    movePropertyToIndex(curIndex: number, newIndex: number): boolean;
    movePropertyToIndex(prop: DzProperty, newIndex: number): boolean;
    movePropertyToIndex(propName: string, newIndex: number): boolean;
    movePropertyToIndex(curIndex: number, newIndex: number): boolean;
    parentChanged(newParent: DzPropertyGroup): void;
    removeChild(child: DzPropertyGroup): void;
    removeProperty(prop: DzProperty): void;
    removedChild(child: DzPropertyGroup): void;
    setCollapsed(onOff: boolean): void;
    setParent(parent: DzPropertyGroup): void;
    setTree(tree: DzPropertyGroupTree): void;
    setUniquePropertyLabel(prop: DzProperty): void;
    sort(): void;
    sortGroups(sortSibs: boolean): DzPropertyGroup;
    treeChanged(): void;
    decode(src: QMimeSource, propGroupList: DzPropertyGroup[]): boolean;
    decode(src: QMimeData, propGroupList: DzPropertyGroup[]): void;
    decode(src: QMimeSource, propGroupList: DzPropertyGroup[]): boolean;
    decode(src: QMimeData, propGroupList: DzPropertyGroup[]): void;
    encode(propGroupList: DzPropertyGroup[]): number[];
    addChild(child: DzPropertyGroup): void;
    childListChanged(): void;
    collectAllPaths(paths: String[]): void;
    findChild(name: string): DzPropertyGroup;
    getAllPaths(): String[];
    getDefaultGroup(): DzPropertyGroup;
    getFirstChild(): DzPropertyGroup;
    getOwner(): DzElement;
    getPropertyGroup(path: string): DzPropertyGroup;
    moveChildToIndex(childName: string, newIndex: number): boolean;
    removeChild(child: DzPropertyGroup): void;
    setIsPrivate(onoff: boolean): void;
    setOwner(owner: DzElement): void;
    sortGroups(): void;
    treeChanged(): void;
    findPropertyOnNode(propName: string, node: DzNode): DzProperty;
    findPropertyOnNodeByInternalName(internalName: string, node: DzNode): DzProperty;
    findPropertyOnNodeByLabel(label: string, node: DzNode): DzProperty;
    getErcController(controlledProp: DzProperty, controllingProp: DzProperty): DzERCLink;
    getInternalName(prop: DzProperty): string;
    getLabel(prop: DzProperty): string;
    //getMax(prop: DzProperty, max: number): boolean;
    //getMin(prop: DzProperty, min: number): boolean;
    getNode(prop: DzProperty): DzNode;
    getNodeName(prop: DzProperty): string;
    getNodeType(prop: DzProperty): string;
    getPrivatePropertiesOnNode(prop: DzProperty, propList: DzProperty[]): void;
    getPrivatePropertiesOnNode(node: DzNode, propList: DzProperty[]): void;
    getPrivatePropertiesOnNode(prop: DzProperty, propList: DzProperty[]): void;
    getPrivatePropertiesOnNode(node: DzNode, propList: DzProperty[]): void;
    getPropertiesOnElement(elem: DzElement, propList: DzProperty[]): void;
    getPropertiesOnNode(prop: DzProperty, propList: DzProperty[], includeModifiers: boolean): void;
    getPropertiesOnNode(node: DzNode, propList: DzProperty[], includeModifiers: boolean): void;
    getPropertiesOnNode(prop: DzProperty, propList: DzProperty[], includeModifiers: boolean): void;
    getPropertiesOnNode(node: DzNode, propList: DzProperty[], includeModifiers: boolean): void;
    getRegionPropertiesOnNode(curNode: DzNode, propList: DzProperty[]): void;
    getRegionPropertiesRecurse(region: DzGeometryRegion, propList: DzProperty[]): void;
    isAtDefaultValue(prop: DzProperty): boolean;
    isDFormModProperty(prop: DzProperty): DzProperty;
    isLegacyJointProperty(prop: DzProperty): DzProperty;
    isLegacyProperty(prop: DzProperty): boolean;
    isModifierProperty(prop: DzProperty): DzProperty;
    isMorphProperty(prop: DzProperty): DzProperty;
    isNodeProperty(prop: DzProperty): DzProperty;
    isTransformProperty(prop: DzProperty): DzProperty;
    setInternalName(prop: DzProperty, name: string): boolean;
    setMax(max: number): void;
    setMax(prop: DzProperty, max: number): void;
    setMin(min: number): void;
    setMin(prop: DzProperty, min: number): void;
    setMinMax(prop: DzProperty, min: number, max: number): void;
    setMinMax(min: number, max: number): void;
    setPropertyPath(prop: DzProperty, inPath: string): void;
    decode(src: QMimeSource, propList: DzProperty[]): boolean;
    decode(src: QMimeData, propList: DzProperty[]): void;
    decode(src: QMimeSource, propList: DzProperty[]): boolean;
    decode(src: QMimeData, propList: DzProperty[]): void;
    encode(propList: DzProperty[]): number[];
    addProperty(prop: DzProperty): void;
    propertyValueChanged(): void;
    createEditor(parent: QWidget, option: QStyleOptionViewItem, index: QModelIndex): QWidget;
    getPropertyWgt(node: DzPropertyListNodePtr): DzPropertyWgt;
    isCardMode(): boolean;
    paint(painter: QPainter, option: QStyleOptionViewItem, index: QModelIndex): void;
    setCardMode(onOff: boolean): void;
    setEditorData(editor: QWidget, index: QModelIndex): void;
    sizeHint(option: QStyleOptionViewItem, index: QModelIndex): QSize;
    updateControlOnlySettings(): void;
    updateEditorGeometry(editor: QWidget, option: QStyleOptionViewItem, index: QModelIndex): void;
    addProperty(prop: DzProperty): void;
    clearProperties(): void;
    columnCount(parent: QModelIndex): number;
    data(index: QModelIndex, role: number): QVariant;
    event(eve: QEvent): boolean;
    flags(index: QModelIndex): number;
    getIndexForNode(propNode: DzPropertyListNode): QModelIndex;
    getPropertyNodeForIndex(index: QModelIndex): DzPropertyListNodePtr;
    index(row: number, column: number, parent: QModelIndex): QModelIndex;
    parent(index: QModelIndex): QModelIndex;
    processLabelUpdates(): void;
    processPropUpdates(): void;
    propertyChanged(): void;
    propertyHiddenStateChange(): void;
    propertyLabelChanged(lbl: string): void;
    removeProp(prop: DzProperty): void;
    rowCount(parent: QModelIndex): number;
    addProperty(prop: DzProperty): void;
    getLabel(): string;
    getNumProperties(): number;
    getProperties(): DzProperty[];
    isNew(): boolean;
    removeProperty(prop: DzProperty): boolean;
    setNew(onOff: boolean): void;
    updateNew(): void;
    addProperty(prop: DzProperty): boolean;
    addPropertyGroup(group: DzPropertyGroup, showHidden: boolean): boolean;
    addPropertyGroupRecurse(root: DzPropertyGroup, showHidden: boolean): boolean;
    addPropertyToGroup(prop: DzProperty, widGroup: DzWidgetGroup): boolean;
    addPropertyTree(tree: DzPropertyGroupTree, showHidden: boolean): boolean;
    centralWidget(): QWidget;
    clear(): void;
    getGroup(name: string): DzWidgetGroup;
    moveWidgetListGroupToEnd(widgetListGroup: DzWidgetGroup): boolean;
    resetLayout(): void;
    resizeEvent(e: QResizeEvent): void;
    setNewGroupsCollapsed(open: boolean): void;
    deleteProperty(temp: DzProperty): void;
    getArg(i: number): string;
    getArgType(i: number): any;
    getDirection(): number;
    getNumArgs(): number;
    getNumProperties(): number;
    getNumTokensNeeded(): number;
    getProperty(i: number): DzProperty;
    getPropertyMapToken(i: number): number;
    getStringValue(i: number): string;
    getType(): any;
    getTypeForToken(i: number): any;
    propertyDestoyed(): void;
    setDirection(i: number): void;
    setProperty(prop: DzProperty, arg: string, mapArg: string): void;
    setShouldWriteTokenInShader(onoff: boolean): void;
    setTokenInBuffer(): void;
    shouldWriteTokenInShader(i: number): boolean;
    clicked(): void;
    isDefault(): boolean;
    mousePressEvent(event: QMouseEvent): void;
    paintEvent(e: QPaintEvent): void;
    setIsDefault(onOff: boolean): void;
    aboutToShowOptionsDialog(): void;
    addProperty(prop: DzProperty): DzError;
    clearPropertyList(): void;
    doOptionsDialog(): boolean;
    fastUpdate(): void;
    getFirstProperty(): DzProperty;
    getNumProperties(): number;
    getNumTotalProperties(): number;
    getProperties(): DzPropertyListIterator;
    getPropertyHiddenState(): number;
    getViewItemStyleOptions(): number;
    isFastMode(): boolean;
    isSelected(): boolean;
    isShowingControlOnly(): boolean;
    mouseDoubleClickEvent(e: QMouseEvent): void;
    mousePressEvent(e: QMouseEvent): void;
    propertySelectionChanged(): void;
    removeAllProperties(): void;
    removeDeletedProperty(prop: DzProperty): void;
    resetProperties(allowUndo: boolean): void;
    selectionStateChanged(onOff: boolean): void;
    setFastMode(mode: boolean): void;
    setLevel(level: number): void;
    setPropertyList(list: DzProperty[]): void;
    setSelected(onOff: boolean): void;
    setViewItemStyleOptions(flags: number): void;
    showControlOnly(onOff: boolean): void;
    updateFromList(): void;
    updatePropertyHiddenState(): void;
}