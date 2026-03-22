declare class DzERCLink extends DzNumericController {

    // Enumerations
    ERCDeltaAdd: number; // 0
    ERCDivideInto: number; // 1
    ERCDivideBy: number; // 2
    ERCMultiply: number; // 3
    ERCSubtract: number; // 4
    ERCAdd: number; // 5
    ERCKeyed: number; // 6
    LINEAR_INTERP: number; // 0
    CONSTANT_INTERP: number; // 1
    TCB_INTERP: number; // 2

    // Properties
    active: boolean; // true
    addend: number; // 0
    autoOverride: boolean; // true
    isUserLink: boolean; // true
    keyInterpolation: number; // 2
    saveWithOutput: boolean; // true
    scalar: number; // 1
    type: number; // 0

    // Methods
    addKeyValue(p0: number, p1: number): any;
    addKeyValue(p0: number, p1: number, p2: number, p3: number, p4: number): any;
    // apply(p0:double, p1:DzTime, p2:boolean): any;
    // applyInverse(p0:double, p1:DzTime, p2:boolean): any;
    // applyNValue(p0:DzDoubleVector, p1:DzTime, p2:boolean): any;
    // applyNValueInverse(p0:DzDoubleVector, p1:DzTime, p2:boolean): any;
    className(): any;
    clearKeys(): any;
    deleteLater(): any;
    destroyed(): any;
    destroyed(p0: QObject): any;
    duplicate(): any;
    duplicate(p0: DzNumericProperty): any;
    ercSourcePropertyRemoved(p0: DzProperty): any;
    // findKeyIndex(p0:double): any;
    getCurrentProperty(): any;
    getKey(p0: number): any;
    // getKeyOpValue(p0:double): any;
    getKeyParamB(p0: number): any;
    getKeyParamC(p0: number): any;
    getKeyParamT(p0: number): any;
    getKeyValue(p0: number): any;
    getName(): any;
    getNumKeyValues(): any;
    getOwner(): any;
    getProperty(): any;
    iskindof(p0: string): any;
    makePersistent(): any;
    presizeKeys(p0: number): any;
    propertyDeleted(p0: DzProperty): any;
    removeKeyValue(p0: number): any;
    setProperty(p0: DzNumericProperty): any;

    // Signals
    nameChanged(p0: string): any;
    currentValueChanged(): any;
    attributeChanged(): any;
    scalarChanged(): any;
    typeChanged(): any;
    stageChanged(): any;
    keyInterpolationChanged(): any;
    keysListChanged(): any;
    keyChanged(p0: number): any;
    saveWithOutputChanged(): any;
}