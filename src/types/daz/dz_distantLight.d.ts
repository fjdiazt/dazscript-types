declare class DzDistantLight extends DzLight {
    static className(): string;

    getDiffuseColor(): Color
    getDiffuseColorControl(): DzColorProperty
    getIlluminationControl(): DzEnumProperty
    getIntensity(): number
    getIntensityControl(): DzFloatProperty
    getShadowBiasControl(): DzFloatProperty
    getShadowSoftnessControl(): DzFloatProperty
}