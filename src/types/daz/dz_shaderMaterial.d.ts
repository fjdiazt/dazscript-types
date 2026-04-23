/**
 * Custom scriptable class for materials using RenderMan Shader Language (RSL) Shaders.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/shadermaterial_dz
 */
declare class DzShaderMaterial extends DzRefCountedItem {

    /* Constructors */

    constructor();

    /**
     * @param mat DzShaderMaterial
     * @param duplicateMissingProps boolean
     */
    constructor(mat: DzShaderMaterial, duplicateMissingProps?: boolean);

    /**
     * @param definitionFile string
     */
    constructor(definitionFile: string);

    /* Methods */

    /**
     * Adds shader to this material's internal list of shaders and sets shader 's owner to this material.
     * @param shader DzRSLShader
     * @returns boolean true if shader is successfully added to the list (e.g. does not already exist), otherwise false.
     */
    addShader(shader: DzRSLShader): boolean; // Boolean

    /**
     * @returns string The relative path [from DzApp::getScriptsPath()] to the DAZ Script that creates this material's property list.
     */
    getDefinitionFile(): string; // String

    /**
     * @returns DzColorProperty The Diffuse Color property of this material
     */
    getDiffuseProperty(): DzColorProperty;

    /**
     * @returns number The number of DzRSLShaders on this material
     */
    getNumShaders(): number; // Number

    /**
     * @returns DzFloatProperty The Opacity property of this material
     */
    getOpacityProperty(): DzFloatProperty;

    /**
     * @param index number
     * @returns DzRSLShader The DzRSLShader at index or NULL if no shader exists at that index.
     */
    getShader(index: number): DzRSLShader;

    /**
     * Removes shader from this material's internal list of shaders.
     * @param shader DzRSLShader
     * @returns boolean true if shader is successfully removed from the list, otherwise false.
     */
    removeShader(shader: DzRSLShader): boolean; // Boolean

    /**
     * Sets the relative path of the [DAZ Script] file that defines this material.
     * @param definitionFile string - The relative path [from DzApp::getScriptsPath()] to the DAZ Script that defines this material
     * @param doOverride boolean - Whether or not to override the setting of the definition file if it has already been set
     * @param runScript boolean - Whether or not to run the definition script upon setting it
     */
    setDefinitionFile(definitionFile: string, doOverride?: boolean, runScript?: boolean): void;

    /**
     * Sets the name of the material type that will be returned by getMaterialName(). By default, this is “Custom”
     * @param name string - The name to assign to this material
     */
    setMaterialName(name: string): void;

    /**
     * Sets whether this material needs the Tangent Space Params: varying vector dPds and varying float dPdsM. dPds is the tangent vector along the surface. dPdsM is the handedness of the bitangent vector on the surface. The bitangent can be reconstructed using:
     * @param onoff boolean - Whether or not this material needs the Tangent Space Params
     */
    setNeedsTangentSpaceParams(onoff: boolean): void;

    /* Undocumented Augment Members */

    /** @undocumented */
    getAllImages(list: DzTexturePtr[]): any;

    /** @undocumented */
    allowsAutoBake(): boolean;

    /** @undocumented */
    unsetRender(renderSettings: DzRenderSettings): void;
}
