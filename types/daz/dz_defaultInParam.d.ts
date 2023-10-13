declare class DzDefaultInParam extends DzBrickParam {
    static AOV: number;	// 3
    static AppParamIn: number;	// 4
    static BSDF: number;	// 48
    static BSDFMeasurement: number;	// 46
    static boolean: number;	// 8
    static boolean2: number;	// 11
    static boolean3: number;	// 12
    static boolean4: number;	// 13
    static Color: number;	// 2
    static Double: number;	// 10
    static Double2: number;	// 19
    static Double2x2: number;	// 30
    static Double2x3: number;	// 31
    static Double2x4: number;	// 32
    static Double3: number;	// 20
    static Double3x2: number;	// 33
    static Double3x3: number;	// 34
    static Double3x4: number;	// 35
    static Double4: number;	// 21
    static Double4x2: number;	// 36
    static Double4x3: number;	// 37
    static Double4x4: number;	// 38
    static EDF: number;	// 49
    static Enum: number;	// 39
    static Float: number;	// 1
    static Float2: number;	// 17
    static Float2x2: number;	// 22
    static Float2x3: number;	// 23
    static Float2x4: number;	// 24
    static Float3: number;	// 3
    static Float3x2: number;	// 25
    static Float3x3: number;	// 26
    static Float3x4: number;	// 27
    static Float4: number;	// 18
    static Float4x2: number;	// 28
    static Float4x3: number;	// 29
    static Float4x4: number;	// 6
    static In: number;	// 1
    static Integer: number;	// 9
    static Integer2: number;	// 14
    static Integer3: number;	// 15
    static Integer4: number;	// 16
    static LightProfile: number;	// 45
    static Material: number;	// 47
    static Matrix: number;	// 6
    static NoOverride: number;	// 0
    static None: number;	// 0
    static Normal: number;	// 5
    static Out: number;	// 2
    static Point: number;	// 3
    static String: number;	// 7
    static Struct: number;	// 40
    static Texture2D: number;	// 41
    static Texture3D: number;	// 42
    static TextureCube: number;	// 43
    static TexturePTex: number;	// 44
    static Unknown: number;	// 0
    static VDF: number;	// 50
    static Variant: number;	// 51
    static Vector: number;	// 4
    annotations: QObject;	// [object object]
    declaredTypeName: string;	//
    defaultVariantValue: any;	// undefined
    isUniform: boolean;	// false
    name: string;	//
    objectName: string;	//
    aboutToAddConnectionFromUI(): any;
    addConnection(p0: DzBrickParam): any;
    canConnect(p0: DzBrickParam): any;
    canProvideDirectParamValue(p0: number /*ParamType*/): any;
    canTakeDirectParam(p0: DzBrickParam, p1: number /*ParamType*/): any;

    static className(): string;
    clearInvalidConnections(): any;
    connectionAddedFromUI(): any;
    connectionsChanged(): void;
    declaredTypeChanged(): void;
    deleteLater(): any;
    destroyed(): void;
    destroyed(p0: QObject): void;
    directionChanged(): void;
    emitAboutToAddConnectionFromUI(): any;
    emitConnectionAddedFromUI(): any;
    getArg(p0: number): any;
    getArgType(p0: number): any;
    getColorString(p0: QColor): any;
    getColorString(p0: QColor, p1: string): any;
    getConnection(p0: number): any;
    getConnectionRootDirectDrivingProperty(): any;
    getConnectsToAppParamInOnly(): any;
    getDefaultGlobalValue(): any;
    getDirectDrivingParam(): any;
    getDirectDrivingProperty(): any;
    getDirection(): any;
    getEscapedString(p0: string): any;
    getFirstProperty(): any;
    getFloatColorString(p0: DzFloatColor): any;
    getFloatColorString(p0: DzFloatColor, p1: string): any;
    getFloatString(p0: number): any;
    getIsAdvanced(): void;
    getIsDynamicSizedArray(): any;
    getLabel(): any;
    getMatrixString(p0: DzMatrix4): any;
    getName(): any;
    getNewToken(): any;
    getNumArgs(): any;
    getNumConnections(): any;
    getNumProperties(): any;
    getNumTokensNeeded(): void;
    getOutputArraySize(): any;
    getProperty(p0: number): any;
    getPropertyMapToken(p0: number): any;
    getPropertyPath(p0: number): any;
    getRootDirectDrivingProperty(): any;
    getScopePosition(): any;
    getStringValue(p0: number): any;
    getToken(p0: number): any;
    getTopBrickOwner(): any;
    getType(): any;
    getTypeForToken(p0: number): any;
    getTypeString(p0: number): any;
    getVecString(p0: number, p1: DzVec3): any;
    giveArrayAsList(): any;
    inherits(): any;
    inherits(p0: string): any;
    invalidateFiles(): any;
    isArray(): any;
    isDirectPropDrivenOutput(): any;
    isInput(): any;
    isOutput(): any;
    iskindof(p0: string): any;
    labelChanged(): void;
    makePersistent(): any;
    moveConnectionsToParam(p0: DzBrickParam): any;
    nameChanged(p0: string): void;
    needsPrepForCall(p0: number): any;
    propertyChanged(p0: DzProperty): void;
    propertyListChanged(): void;
    removeAllConnections(): any;
    removeConnection(p0: number): any;
    removeConnection(p0: DzBrickParam): any;
    removed(): void;
    setArgName(p0: string): any;
    setConnectsToAppParamInOnly(p0: boolean): any;
    setDefaultGlobalValue(p0: string): any;
    setGiveArrayAsList(p0: boolean): any;
    setIsAdvanced(p0: boolean): void;
    setIsAppParamIn(p0: boolean): any;
    setIsArray(p0: boolean): any;
    setIsDynamicSizedArray(p0: boolean): any;
    setLabel(p0: string): any;
    setOutputArraySize(p0: number): any;
    setPropertyPath(p0: number, p1: string): any;
    setScopePosition(p0: number): any;
    setType(p0: number): any;
    setType(p0: number /*ParamType*/): any;
    shouldWriteTokenInShader(p0: number): any;
    simpleText(): any;
    typeChanged(): void;
    uniformChanged(): void;
    writeCallPrep(p0: string, p1: number): any;
    writeShaderPrep(): any;
}