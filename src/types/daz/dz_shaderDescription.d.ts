/**
 * Describes the properties of a RenderMan shader.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/shaderdescription_dz
 */
declare class DzShaderDescription extends QObject {

    /* Properties */

    /**
     * The type of the shader
     */
    type: number; // DzShaderType

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of DzShaderType.
     */
    static SurfaceShader: number;

    /**
     * DAZ enum member of DzShaderType.
     */
    static LightShader: number;

    /**
     * DAZ enum member of DzShaderType.
     */
    static DisplacementShader: number;

    /**
     * DAZ enum member of DzShaderType.
     */
    static VolumeShader: number;

    /**
     * DAZ enum member of DzShaderType.
     */
    static ImageShader: number;

    /* Methods */

    /**
     * @returns number The number of parameters in the shader.
     */
    getNumParameters(): number; // Number

    /**
     * @param i number
     * @returns DzShaderParameter The i'th parameter in the shader.
     */
    getParameter(i: number): DzShaderParameter;
}
