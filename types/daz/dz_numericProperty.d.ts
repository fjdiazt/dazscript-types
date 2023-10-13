declare class DzNumericProperty extends DzProperty {
    static NO_INTEREST: number; // 0
    static X_INTEREST: number; // 1
    static Y_INTEREST: number; // 2
    static Z_INTEREST: number; // 3
    static ALL_INTEREST: number; // 4

    static className(): QString
    /* Properties */

    /* Methods */
    applyControllers(tm: DzTime, raw: number, local: boolean): number;
    applyControllersInverse(tm: DzTime, raw: number, local: boolean): number;
    changeFollowBone(bone: DzBone): void;
    changeFollowNode(node: DzNode): void;
    changeFollowTarget(skel: DzSkeleton): void;
    clampedChanged(onOff: boolean): void;
    clearLink(): void;
    clearMap(): void;
    emitClampedChanged(onOff: boolean): void;
    emitLinked(): void;
    emitMapChanged(): void;
    emitMinMaxChanged(): void;
    emitUnlinked(): void;
    getDoubleDefaultValue(): number;
    getDoubleValue(tm: DzTime): number;
    getDoubleValue(): number;
    getDoubleValue(tm: DzTime): number;
    getDoubleValue(): number;
    getFollowProperty(): DzNumericProperty;
    getFollowValue(tm: DzTime): number;
    getFollowValue(): number;
    getFollowValue(tm: DzTime): number;
    getFollowValue(): number;
    getLinkProperty(): DzNumericProperty;
    getMapValue(time: DzTime): DzTexture;
    getMapValue(): DzTexture;
    getMapValue(time: DzTime): DzTexture;
    getMapValue(): DzTexture;
    getMin(): number;
    getMax(): number;
    /**
     * The XYZ interest for this property (if any).
     */
    getXYZInterest(): number;
    isClamped(): boolean;
    isInvalidWithoutMap(): boolean;
    isLinked(): boolean;
    isMappable(): boolean;
    isMapped(): boolean;
    isMaster(): boolean;
    isModulo(): boolean;
    linkNotify(): void;
    linkTo(master: DzNumericProperty): void;
    linked(): void;
    mapChanged(): void;
    minMaxChanged(): void;
    removeFollowNode(): void;
    removeFollowProperty(): void;
    setDoubleDefaultValue(val: number): void;
    setDoubleValue(tm: DzTime, val: number): void;
    setDoubleValue(val: number): void;
    setDoubleValue(tm: DzTime, val: number): void;
    setDoubleValue(val: number): void;
    setFollowListeners(): void;
    setFollowProperty(prop: DzNumericProperty): void;
    setIsClamped(val: boolean): void;
    setIsMappable(val: boolean): void;
    setIsModulo(val: boolean): void;
    setLink(link: DzNumericProperty, isMaster: boolean): void;
    setMap(img: DzTexture): void;
    setMap(imgFile: QString): void;
    setMap(img: DzTexture): void;
    setMap(imgFile: QString): void;
    setMustHaveMap(val: boolean): void;
    setXYZInterest(interest: number): void;
    unlink(): void;
    unlinked(): void;
    addImageMapMenu(): void;
    addLabel(): void;
    addTieWgt(): void;
    addWidget(wgt: QWidget): void;
    changeMap(map: DzTexture): void;
    getMapDisplay(): number;
    setLayout(layout: number): void;
    setMap(map: DzTexture, indeterminate: boolean): void;
    setMapDisplay(mode: number): void;
    showEvent(e: QShowEvent): void;
    updateLabel(): void;
    updateLayout(layout: number): void;
    updateValue(): void;
}