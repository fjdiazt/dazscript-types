/**
 * Base class for all offline renderers.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/renderer_dz
 */
declare class DzRenderer extends DzBase {

    /* Methods */

    /**
     * Compiles the shader at the given path, if necessary, and returns the path to the compiled shader.
     * @param shaderPath string - The path to the shader source to compile
     * @returns string The path to the compiled shader.
     */
    compileShader(shaderPath: string): string; // String

    /**
     * Renders a custom set of items.
     * @param handler DzRenderHandler - The settings and handler for the render.
     * @param camera DzCamera - The camera to render from.
     * @param lights any[] - The list of lights for the render.
     * @param nodes any[] - The list of items to be rendered.
     * @param opt DzRenderOptions - The options for this render.
     * @returns boolean true if rendering was successful. false if rendering was canceled by user or there were errors during the render.
     */
    customRender(handler: DzRenderHandler, camera: DzCamera, lights: any[], nodes: any[], opt: DzRenderOptions): boolean; // Boolean

    /**
     * @returns DzNode The node that is currently being rendered.
     */
    getCurrentNode(): DzNode;

    /**
     * @returns any The handler used for Interactive Progressive Rendering (IPR) on this renderer (if any). NULL if this renderer does not support IPR. Undocumented DAZ type: iprrenderhandler_dz.
     */
    getIPRRenderHandler(): any; // iprrenderhandler_dz; undocumented type

    /**
     * @returns string The name of this renderer.
     */
    getName(): string; // String

    /**
     * @returns DzCamera The camera being used for the render.
     * @since 4.11.0.119
     */
    getRenderCamera(): DzCamera;

    /**
     * @returns DzRendererMode The renderer mode (feature set) for this renderer.
     */
    getRendererMode(): DzRendererMode;

    /**
     * @returns string The path to the utility that compiles shaders for the renderer.
     */
    getShaderCompilerPath(): string; // String

    /**
     * @returns string The file extension that this renderer uses for compiled shaders.
     */
    getShaderExtension(): string; // String

    /**
     * @param shaderName string - The shader name to get the filename for (e.g. “metal”).
     * @returns string The filename for the shader; the name of the shader with the shader extension for the renderer (e.g. “metal.sdl”).
     */
    getShaderFileName(shaderName: string): string; // String

    /**
     * Gets the parameter information for the given shader.
     * @param shaderPath string - The path to the compiled shader.
     * @returns DzShaderDescription
     */
    getShaderInfo(shaderPath: string): DzShaderDescription;

    /**
     * Given a shader name (e.g. “metal”), looks in all the shader directories attempting to find the file for it.
     * @param shaderName string - The shader name to get the path for.
     * @param withExtension boolean - If true, the extension for the renderer is included in the return value.
     * @returns string The full path of the shader with the specified name (if found), otherwise an empty string.
     */
    getShaderPath(shaderName: string, withExtension?: boolean): string; // String

    /**
     * @returns any[] A list of paths which are used to search for shaders while rendering.
     */
    getShaderSearchPaths(): any[]; // Array

    /**
     * @returns string The path to the utility that converts textures for the renderer.
     */
    getTextureUtilityPath(): string; // String

    /**
     * @returns boolean true if the application is currently rendering, otherwise false.
     */
    isRendering(): boolean; // Boolean

    /**
     * Stops the render.
     */
    killRender(): void;

    /**
     * Called by the framework to prepare/convert an image into a format that this renderer can understand/use when rendering. In derived classes, the function should result in a new image file being generated along with a path that the renderer can use to refer to the file. If the image could not be converted or is not usable by this renderer, the returned string should be empty.
     * @param img DzTexture - The DzTexture object for which the image is being prepared.
     * @param filename string - The path to the original image file that needs to be processed.
     */
    prepareImage(img: DzTexture, filename: string): void;

    /**
     * Processes the given shader name into a form the renderer can use (i.e. appending file extensions, finding absolute paths, etc.).
     * @param shaderName string - The shader name to process.
     * @returns string
     */
    processShaderName(shaderName: string): string; // String

    /**
     * Render the current scene.
     * @param handler DzRenderHandler - Settings and handler for the render.
     * @param camera DzCamera - Camera to render the scene from.
     * @param opt DzRenderOptions - Options for this render.
     * @returns boolean true if rendering was successful. false if rendering was canceled by user or there were errors during the render.
     */
    render(handler: DzRenderHandler, camera: DzCamera, opt: DzRenderOptions): boolean; // Boolean

    /**
     * Converts a .bake file into an image file.
     * @param opt DzBakerOptions - Shader baker options.
     * @param wait boolean - If true, this method is exited only when the conversion has ended. If false the method returns immediately after starting conversion; the baker's saveFileFinished() slot will be invoked after the conversion finishes.
     */
    saveBakeImage(opt: DzBakerOptions, wait: boolean): void;

    /**
     * Sets the handler used for Interactive Progressive Rendering (IPR) on this renderer.
     * @param handler any - The render handler to set. Undocumented DAZ type: iprrenderhandler_dz.
     */
    setIPRRenderHandler(handler: any): void;

    /**
     * Sets the camera being used for the render.
     * @param camera DzCamera - The camera to set.
     * @since 4.11.0.119
     */
    setRenderCamera(camera: DzCamera): void;

    /**
     * Stops an active baking operation, if possible.
     */
    stopBaking(): void;

    /**
     * Performs texture conversion.
     * @param handler DzRenderHandler - The render handler to use for the conversion.
     * @param camera DzCamera - The camera to use for the conversion.
     * @param opt any - The options to use in the conversion. Undocumented DAZ type: textureconvertoroptions_dz.
     * @returns boolean true if the conversion succeeds, false if the conversion is cancelled or in case of error.
     */
    textureConvert(handler: DzRenderHandler, camera: DzCamera, opt: any): boolean; // Boolean

    /* Signals */

    /**
     * Emitted just before the renderer begins rendering.
     * @param renderer DzRenderer - This renderer.
     */
    aboutToRender: ISignal<DzRenderer>;

    /**
     * Emitted when the image preparation for img is finished.
     * @param img DzTexture - The DzTexture object for which image preparation is complete.
     * @param filename string - The path to the prepared image file to be associated with img.
     */
    imagePrepared: ISignal<DzTexture, string>;

    /**
     * Emitted when the handler used for Interactive Progressive Rendering (IPR) on this renderer has changed.
     * @param renderer DzRenderer - The renderer for which the handler has changed.
     * @param handler any - The new IPR render handler. Undocumented DAZ type: iprrenderhandler_dz.
     */
    IPRRenderHandlerChanged: ISignal<DzRenderer, any>;

    /**
     * Emitted when the mode of this renderer has changed.
     * @param renderer DzRenderer - The renderer for which the mode has changed.
     */
    rendererModeChanged: ISignal<DzRenderer>;

    /**
     * Emitted just after the renderer finishes rendering.
     * @param renderer DzRenderer - This renderer.
     */
    renderFinished: ISignal<DzRenderer>;

    /**
     * Emitted when the renderer begins rendering a shape.
     * @param shape DzShape - The shape that rendering is beginning for.
     */
    shapeRenderBeginning: ISignal<DzShape>;

    /**
     * Emitted after the renderer finishes rendering a shape.
     * @param shape DzShape - The shape that rendering has finished for.
     */
    shapeRenderFinished: ISignal<DzShape>;
}
