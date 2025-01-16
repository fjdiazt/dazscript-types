declare class DzRSLShader extends QObject {
    static className(): string;
    static VolumeAtmosphere: number;
    static VolumeInterior: number;
    static VolumeExterior: number;
    static Imager: number;

    VolumeAtmosphere: number;
    VolumeInterior: number;
    VolumeExterior: number;
    Imager: number;

    getShaderType(): any;
    getShaderFile(): any;
}