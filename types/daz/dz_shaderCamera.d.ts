declare class DzShaderCamera extends DzCamera {
    static className(): string;
    getNumShaders(): number;
    getShader(num: number): DzRSLShader;
}