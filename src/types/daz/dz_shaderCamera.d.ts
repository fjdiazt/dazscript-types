/**
 * Custom scriptable class for cameras using RenderMan Shader Language (RSL) Shaders.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/shadercamera_dz
 */
declare class DzShaderCamera extends DzBasicCamera {

    /* Constructors */

    constructor();

    /**
     * @param definitionFile string
     * @param renderTimeFile string
     */
    constructor(definitionFile: string, renderTimeFile: string);

    /**
     * @param definitionFile string
     */
    constructor(definitionFile: string);

    /* Methods */

    /**
     * Adds shader to this camera's internal list of shaders and sets shader 's owner to this camera.
     * @param shader DzRSLShader
     * @returns boolean true if shader is successfully added to the list (e.g. does not already exist), otherwise false.
     */
    addShader(shader: DzRSLShader): boolean; // Boolean

    /**
     * @returns string The internal name of the camera. This is not the same as the QObject::name property.
     */
    getCameraName(): string; // String

    /**
     * @returns string The relative path [from DzApp::getScriptsPath()] to the DAZ Script that creates this camera's property list.
     */
    getDefinitionFile(): string; // String

    /**
     * @returns number The number of DzRSLShaders on this camera.
     */
    getNumShaders(): number; // Number

    /**
     * @returns string The relative path [from DzApp::getScriptsPath()] to the DAZ Script that is executed at render-time.
     */
    getRenderTimeFile(): string; // String

    /**
     * @param index number
     * @returns DzRSLShader The DzRSLShader at index or NULL if no shader exists at that index.
     */
    getShader(index: number): DzRSLShader;

    /**
     * Removes shader from this camera's internal list of shaders.
     * @param shader DzRSLShader
     * @returns boolean true if shader is successfully removed from the list, otherwise false.
     */
    removeShader(shader: DzRSLShader): boolean; // Boolean

    /**
     * Sets the internal name of the camera; this is not the same as the QObject::name property. By default, this is “Custom”.
     * @param name string
     */
    setCameraName(name: string): void;

    /**
     * Sets the relative path of the [DAZ Script] file that builds this camera's property list.
     * @param definitionFile string - The relative path [from DzApp::getScriptsPath()] to the DAZ Script that creates this camera's property list
     * @param doOverride boolean
     * @param runScript boolean
     */
    setDefinitionFile(definitionFile: string, doOverride?: boolean, runScript?: boolean): void;

    /**
     * Sets the relative path of the [DAZ Script] file that will be executed at render-time. This script can declare variables, set displays, hiders, and/or options as well as shader parameters for the element, and implement custom logic for special effects.
     * @param renderTimeFile string - The relative path [from DzApp::getScriptsPath()] to the DAZ Script that executes at render time.
     * @returns boolean true if renderTimeFile is valid, otherwise false.
     */
    setRenderTimeFile(renderTimeFile: string): boolean; // Boolean

    /**
     * Sets the global graphic state by adding a series of RiDeclare calls before RiWorldBegin.
     * @param tokens any[] - An Array of the String] token names to set
     * @param types any[] - An Array of the corresponding String] type to set for each token
     */
    declare(tokens: any[], types: any[]): void;

    /**
     * Sets the global graphic state by adding a RiDisplayV call before RiWorldBegin.
     * @param name string - The name of the file or framebuffer to set, depending on type
     * @param type string - The type of display to set; i.e. file, tiff, etc
     * @param mode string - The mode to set; i.e. rgb, rgba, etc
     * @param tokens any[] - An Array of the String] tokens to set
     * @param params any[] - An Array of the corresponding basic type to set for each token
     */
    setDisplay(name: string, type: string, mode: string, tokens: any[], params: any[]): void;

    /**
     * Sets the global graphic state by adding a RiHiderV call before RiWorldBegin.
     * @param type string - The type of hider to set; i.e. hidden, raytrace, photonmap, etc
     * @param tokens any[] - An Array of the String] tokens to set
     * @param params any[] - An Array of the corresponding basic type to set for each token
     */
    setHider(type: string, tokens: any[], params: any[]): void;

    /**
     * Sets the global graphic state by adding a RiOptionV call before RiWorldBegin.
     * @param option string - The name of the option to set
     * @param tokens any[] - An Array of the String] tokens to set
     * @param params any[] - An Array of the corresponding basic type to set for each token
     */
    setOption(option: string, tokens: any[], params: any[]): void;
}
