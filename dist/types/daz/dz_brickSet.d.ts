declare class DzBrickSet extends QObject {
    static AmbientLight: number;	// 1
    static Displacement: number;	// 7
    static DistantLight: number;	// 3
    static Imager: number;	// 8
    static Light: number;	// 2
    static LightArea: number;	// 3
    static None: number;	// 0
    static NullLight: number;	// 0
    static PointLight: number;	// 2
    static SpotLight: number;	// 4
    static Surface: number;	// 1
    static VolumeAtmosphere: number;	// 4
    static VolumeExterior: number;	// 6
    static VolumeInterior: number;	// 5
    name: string;	// shader_Volume
    objectName: string;	// shader_Volume
    allowsAutoBake(): any;
    className(): any;
    deleteLater(): any;
    destroyed(): void;
    destroyed(p0: QObject): void;
    getBackgroundColor(): any;
    getBakeSettings(): any;
    getBrickUserOwner(): any;
    getFullShaderPath(): any;
    getNewToken(): any;
    getOwner(): any;
    getRenderSettings(): any;
    getRoot(): any;
    getShaderFile(): any;
    getShaderType(): any;
    inherits(): any;
    invalidateFiles(): any;
    isActiveInBakePass(): any;
    isActiveInBeautyPass(): any;
    isActiveInShadowPass(): any;
    isBakePass(): any;
    isBeautyPass(): any;
    isOnlyInShadowPass(): any;
    isShadowPass(): any;
    sendForUpdate(): any;
    setColorAttrib(p0: string, p1: string, p2: QColor): any;
    setColorAttrib(p0: string, p1: string, p2: DzVec3): any;
    setColorAttrib(p0: string, p1: string, p2: number, p3: number, p4: number): any;
    setColorAttrib(p0: string, p1: string, p2: number, p3: number, p4: number, p5: boolean): any;
    setColorToken(p0: string, p1: QColor): any;
    setDisplacementBound(p0: number): any;
    setFloatAttrib(p0: string, p1: string, p2: number): any;
    setFloatToken(p0: string, p1: number): any;
    setIntegerAttrib(p0: string, p1: string, p2: number): any;
    setIntegerToken(p0: string, p1: number): any;
    setMatrixAttrib(p0: string, p1: string, p2: DzMatrix4): any;
    setMatrixToken(p0: string, p1: DzMatrix4): any;
    setNormalAttrib(p0: string, p1: string, p2: DzVec3): any;
    setNormalToken(p0: string, p1: DzVec3): any;
    setPointAttrib(p0: string, p1: string, p2: DzVec3): any;
    setPointToken(p0: string, p1: DzVec3): any;
    setStringAttrib(p0: string, p1: string, p2: string): any;
    setStringToken(p0: string, p1: string): any;
    setVectorAttrib(p0: string, p1: string, p2: DzVec3): any;
    setVectorToken(p0: string, p1: DzVec3): any;
}