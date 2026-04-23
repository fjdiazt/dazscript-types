/**
 * Describes a single parameter for a RenderMan shader.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/shaderparameter_dz
 */
declare class DzShaderParameter extends QObject {

    /* Properties */

    /**
     * The type of the parameter
     */
    type: number; // DzShaderParamType

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of DzShaderParamType.
     */
    static UnknownType: number;

    /**
     * DAZ enum member of DzShaderParamType.
     */
    static PointType: number;

    /**
     * DAZ enum member of DzShaderParamType.
     */
    static NormalType: number;

    /**
     * DAZ enum member of DzShaderParamType.
     */
    static VectorType: number;

    /**
     * DAZ enum member of DzShaderParamType.
     */
    static ColorType: number;

    /**
     * DAZ enum member of DzShaderParamType.
     */
    static ScalarType: number;

    /**
     * DAZ enum member of DzShaderParamType.
     */
    static StringType: number;

    /**
     * DAZ enum member of DzShaderParamType.
     */
    static MatrixType: number;
}
