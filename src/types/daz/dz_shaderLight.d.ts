/**
 * Custom scriptable class for lights using RenderMan Shader Language (RSL) Shaders.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/shaderlight_dz
 */
declare class DzShaderLight extends DzLight {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of LightType.
     */
    static NullLight: number;

    /**
     * DAZ enum member of LightType.
     */
    static AmbientLight: number;

    /**
     * DAZ enum member of LightType.
     */
    static PointLight: number;

    /**
     * DAZ enum member of LightType.
     */
    static DistantLight: number;

    /**
     * DAZ enum member of LightType.
     */
    static SpotLight: number;

    /* Constructors */

    constructor();

    /**
     * @param definitionFile string
     * @param type number
     */
    constructor(definitionFile: string, type: number);

    /* Methods */

    /**
     * Adds shader to this light's internal list of shaders and sets shader 's owner to this light.
     * @param shader DzRSLShader
     * @returns boolean true if shader is successfully added to the list (e.g. does not already exist), otherwise false.
     */
    addShader(shader: DzRSLShader): boolean; // Boolean

    /**
     * @returns DzColorProperty The property that controls the color of this light.
     */
    getColorControl(): DzColorProperty;

    /**
     * @returns string The relative path [from DzApp::getScriptsPath()] to the DAZ Script that creates this light's property list.
     */
    getDefinitionFile(): string; // String

    /**
     * @returns number The value of the property that controls the intensity of this light.
     */
    getIntensity(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls the intensity of this light.
     */
    getIntensityControl(): DzFloatProperty;

    /**
     * @returns string The internal name of the light. This is not the same as the QObject::name property.
     */
    getLightName(): string; // String

    /**
     * @returns number The type of the light.
     */
    getLightType(): number; // LightType

    /**
     * @returns number The number of DzRSLShaders on this light.
     */
    getNumShaders(): number; // Number

    /**
     * @param index number
     * @returns DzRSLShader The DzRSLShader at index or NULL if no shader exists at that index.
     */
    getShader(index: number): DzRSLShader;

    /**
     * @returns string The path to the generated shadow map for this light.
     */
    getShadowMapPath(): string; // String

    /**
     * Removes shader from this light's internal list of shaders.
     * @param shader DzRSLShader
     * @returns boolean true if shader is successfully removed from the list, otherwise false.
     */
    removeShader(shader: DzRSLShader): boolean; // Boolean

    /**
     * Sets the relative path of the [DAZ Script] file that builds this light's property list.
     * @param definitionFile string - The relative path [from DzApp::getScriptsPath()] to the DAZ Script that creates this light's property list
     * @param doOverride boolean
     * @param runScript boolean
     */
    setDefinitionFile(definitionFile: string, doOverride?: boolean, runScript?: boolean): void;

    /**
     * Sets the internal name of the light; this is not the same as the QObject::name property. By default, this is “Custom”.
     * @param name string
     */
    setLightName(name: string): void;

    /**
     * Sets the type of a light. A light's type determines the OpenGL representation.
     * @param type number
     */
    setLightType(type: number): void;

    /**
     * Sets a flag so that transforms are applied to the coordinate space that the light is in, greatly simplifying shader math.
     * @param onOff boolean
     */
    setUseLocalShaderSpace(onOff: boolean): void;

    /**
     * @returns boolean Whether transforms are applied to the coordinate space that the light is in. false by default
     */
    usesLocalShaderSpace(): boolean; // Boolean
}
