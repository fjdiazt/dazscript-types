declare class DzLight extends DzCamera {
    static None: number;
    static DeepShadowMap: number;
    static Raytraced: number;
    static className(): string;

    getDiffuseColor(): Color
    getShadowType(): number
    getShadowTypeControl(): DzEnumProperty
    getWsDirection(): DzVec3
    isAreaLight(): boolean
    isDirectional(): boolean
    isOn(): boolean
}