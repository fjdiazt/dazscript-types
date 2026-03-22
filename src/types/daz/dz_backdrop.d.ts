declare class DzBackdrop extends DzElement {

    /* Properties */
    elementID: number;
    flipHorizontal: boolean;
    flipVertical: boolean;
    rotation: number;
    backgroundColor: QObject;
    visible: boolean;
    visibleInRender: boolean;
    NO_ROTATION: number;
    ROTATE_LEFT_90: number;
    ROTATE_RIGHT_90: number;
    ROTATE_180: number;

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
    drawnDataChanged(): void;
    backgroundColorChanged(): any; // TODO ;
    visiblityChanged(): any; // TODO ;
    setTexture(map: DzTexture): void;
    showOptions(parent: QWidget): void;
    showOptions(parent: QWidget): void;
    clear(): void;
    getMaterial(): DzMaterial;
    getTexture(): DzTexture;
    getBackgroundColorControl(): any; // TODO ;
    getRotationControl(): DzEnumProperty;
    getVerticalFlipControl(): DzBoolProperty;
    getHorizontalFlipControl(): DzBoolProperty;
    getVisibleControl(): any; // TODO ;
    getVisibleInRenderControl(): any; // TODO ;
    adjustRenderAspectRatioToMatchTexture(): any; // TODO ;
    adjustRenderDimensionsToMatchTexture(): any; // TODO ;
}