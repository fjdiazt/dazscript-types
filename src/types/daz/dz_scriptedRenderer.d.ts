/**
 * Custom script-able 3Delight renderer.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/scriptedrenderer_dz
 */
declare class DzScriptedRenderer extends DzRenderer {

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * Builds an environment space transform that can be used by shaders to account for differences between the application and the 3Delight render engine.
     * @since 4.10.0.55
     */
    buildEnvironmentSpaceTransform(): void;

    /**
     * Sets up the camera for the pass.
     * @param camera DzCamera - The camera to use.
     * @param width number - The width of the render.
     * @param height number - The height of the render.
     */
    cameraProject(camera: DzCamera, width: number, height: number): void;

    /**
     * @returns boolean true if the renderer should use the call to RiSurface, RiDisplace, RiLight, or RiAreaLight, otherwise false.
     */
    continueAfterPreProcess(): boolean; // Boolean

    /**
     * Creates a light in the stream.
     * @param light DzLight - The light to create.
     * @param shadowMap string - The shadow map for the light.
     */
    createLight(light: DzLight, shadowMap: string): void;

    /**
     * Deletes a list of files.
     * @param files any[] - A list of the file paths to delete.
     */
    deleteFiles(files: any[]): void;

    /**
     * Causes the renderer to call the same display as the standard 3Delight renderer.
     */
    doDefaultDisplay(): void;

    /**
     * @param options DzRenderOptions - The render options for the shadow maps.
     * @param camera DzCamera - The camera to use for the shadow pass.
     * @param light DzLight - The light to generate shadow map for.
     * @param dir string - The directory to generate the shadow map in.
     * @param reuse boolean - If true and a shadow map already exists, it is reused.
     * @returns string The name of the generated shadow map.
     */
    doDefaultShadowPass(options: DzRenderOptions, camera: DzCamera, light: DzLight, dir: string, reuse: boolean): string; // String

    /**
     * @param options DzRenderOptions - The render options for the shadow maps.
     * @param camera DzCamera - The camera to generate the shadow map for.
     * @param dir string - The directory to generate the shadow maps in.
     * @param reuse boolean - If true and a shadow map exists by the the same label of a light exists, the shadow map is reused instead of being generated.
     * @returns any[] The list of names for the generated shadow maps.
     */
    doDefaultShadowPass(options: DzRenderOptions, camera: DzCamera, dir: string, reuse: boolean): any[]; // Array

    /**
     * Cleans up after doDefaultShadowPassPrep().
     * @param options DzRenderOptions - The render options for the pass.
     * @param camera DzCamera - The camera for the shadow pass.
     * @param light DzLight - The light the shadow map was generated for.
     */
    doDefaultShadowPassEnd(options: DzRenderOptions, camera: DzCamera, light: DzLight): void;

    /**
     * @param options DzRenderOptions - The render options for the pass.
     * @param camera DzCamera - The camera for the shadow pass.
     * @param light DzLight - The light to generate shadow map for.
     * @param dir string - The directory to put the shadow map in.
     * @param reuse boolean - If true and the map already exists, it is reused.
     * @returns string The name of the shadow map for the light.
     */
    doDefaultShadowPassPrep(options: DzRenderOptions, camera: DzCamera, light: DzLight, dir: string, reuse: boolean): string; // String

    /**
     * Script implementation of the RiSpec RiShutter() function.
     * @param opts DzRenderOptions - The render options for the shutter; whether or not motion blur is enabled and the amount of blur if enabled.
     */
    doShutter(opts: DzRenderOptions): void;

    /**
     * Sets up the camera for the pass, ensuring all render-able objects are in view.
     * @param camera DzCamera - The camera to use.
     * @param width number - The width of the render.
     * @param height number - The height of the render.
     */
    fullSceneCameraProject(camera: DzCamera, width: number, height: number): void;

    /**
     * @returns string The default search path for shaders and DSO shadeops, as a string in the format expected by 3Delight (which is mostly a list of paths separated by semicolons). The getShaderSearchPaths() method is called to get the list of paths to use.
     */
    getDefaultShaderSearchPath(): string; // String

    /**
     * @returns string The path to the script that is run in order to define the renderer.
     */
    getDefinitionFile(): string; // String

    /**
     * @returns string The path to the script that is run in the Displacement pre-process step.
     */
    getDisplacementPreProcessScript(): string; // String

    /**
     * @returns DzRenderHandler The current render handler (if any), otherwise NULL.
     */
    getHandler(): DzRenderHandler;

    /**
     * @param index number - The index of the light to get.
     * @returns DzLight The light in the render list at index (if valid), otherwise NULL.
     */
    getLight(index: number): DzLight;

    /**
     * @returns number The number of lights to render.
     */
    getLightCount(): number; // Number

    /**
     * @returns string The path to the script that is run in the Light pre-process step.
     */
    getLightPreProcessScript(): string; // String

    /**
     * @returns any[] The list of lights to render.
     */
    getLightsToRender(): any[]; // Array

    /**
     * @param index number - The index of the node to get.
     * @returns DzNode The node in the render list at index (if valid), otherwise NULL.
     */
    getNode(index: number): DzNode;

    /**
     * @returns number The number of nodes to render.
     */
    getNodeCount(): number; // Number

    /**
     * @returns any[] The list of nodes to render.
     */
    getNodesToRender(): any[]; // Array

    /**
     * @returns number The number of light handles.
     */
    getNumIlluminateHandels(): number; // Number

    /**
     * @returns DzElement The element that holds the properties for this scripted render pass.
     */
    getPropertyHolder(): DzElement;

    /**
     * @returns string The path of the script that controls the rendering process.
     */
    getRenderScript(): string; // String

    /**
     * @returns string The path to the script that is run in the Surface pre-process step.
     */
    getSurfacePreProcessScript(): string; // String

    /**
     * Prepares motion samples for all nodes to render.
     */
    prepareMotionSamples(): void;

    /**
     * Prepares motion samples for a list of nodes.
     * @param nodes any[] - The list of nodes to prepare motion samples for.
     */
    prepareMotionSamples(nodes: any[]): void;

    /**
     * Prepares motion samples for node.
     * @param node DzNode - The node to prepare motion samples for.
     */
    prepareNodeMotionSamples(node: DzNode): void;

    /**
     * Removes a light from the render list.
     * @param index number - The index of the light to remove.
     */
    removeLight(index: number): void;

    /**
     * Removes a node from the render list.
     * @param index number - The index of the node to remove.
     */
    removeNode(index: number): void;

    /**
     * Renders the backdrop for the scene.
     * @param backdrop DzBackdrop - The backdrop for the scene.
     * @param width number - The width of the render.
     * @param height number - The height of the render.
     */
    renderBackDrop(backdrop: DzBackdrop, width: number, height: number): void;

    /**
     * Adds a node to the list of nodes to be rendered.
     * @param node DzNode - The node to render.
     */
    renderNode(node: DzNode): void;

    /**
     * Adds a node to the list of nodes to be rendered.
     * @param nodes any[] - The list of nodes to render.
     */
    renderNodes(nodes: any[]): void;

    /**
     * Script implementation of the RiSpec RiAreaLightSource() function.
     * @param name string - The name of the light shader.
     * @param tokens any[] - A list of token names passed to the shader.
     * @param params any[] - A list of corresponding values for tokens.
     * @returns number The light handle index for this light source
     */
    riAreaLightSource(name: string, tokens: any[], params: any[]): number; // Number

    /**
     * Script implementation of the RiSpec RiAtmosphere() function.
     * @param name string - The name of the volume shader.
     * @param tokens any[] - A list of token names passed to the shader.
     * @param params any[] - A list of corresponding values for tokens.
     */
    riAtmosphere(name: string, tokens: any[], params: any[]): void;

    /**
     * Script implementation of the RiSpec RiAttribute() function.
     * @param name string - The name of the attribute to set.
     * @param tokens any[] - A list of parameter names for the attribute.
     * @param params any[] - A list of corresponding values for tokens.
     */
    riAttribute(name: string, tokens: any[], params: any[]): void;

    /**
     * Script implementation of the RiSpec RiAttributeBegin() function.
     */
    riAttributeBegin(): void;

    /**
     * Script implementation of the RiSpec RiAttributeEnd() function.
     */
    riAttributeEnd(): void;

    /**
     * Script implementation of the RiSpec RiBegin() function.
     * @param ribPath string - ribPath -
     */
    riBegin(ribPath: string): void;

    /**
     * Script implementation of the RiSpec RiCamera() function.
     * @param camera string - The name of the camera.
     * @param tokens any[] - A list of token names passed to the camera.
     * @param params any[] - A list of corresponding values for tokens.
     */
    riCamera(camera: string, tokens: any[], params: any[]): void;

    /**
     * Script implementation of the RiSpec RiClipping() function.
     * @param hither number - hither -
     * @param yon number - yon -
     */
    riClipping(hither: number, yon: number): void;

    /**
     * Script implementation of the RiSpec RiClipping() function.
     * @param x number - x -
     * @param y number - y -
     * @param z number - z -
     * @param nx number - nx -
     * @param ny number - ny -
     * @param nz number - nz -
     */
    riClippingPlane(x: number, y: number, z: number, nx: number, ny: number, nz: number): void;

    /**
     * Script implementation of the RiSpec RiColor() function.
     * @param Cs Color - The color to set.
     */
    riColor(Cs: Color): void;

    /**
     * Script implementation of the RiSpec RiConcatTransform() function.
     * @param transform DzMatrix4 - The transform to concatenate.
     */
    riConcatTransform(transform: DzMatrix4): void;

    /**
     * Script implementation of the RiSpec RiCoordinateSystem() function.
     * @param space string - The name for the coordinate system.
     */
    riCoordinateSystem(space: string): void;

    /**
     * Script implementation of the RiSpec RiCoordSysTransform() function.
     * @param space string - The name for the coordinate system.
     */
    riCoordSysTransform(space: string): void;

    /**
     * Script implementation of the RiSpec RiCropWindow() function.
     * @param xmin number - xmin -
     * @param xmax number - xmax -
     * @param ymin number - ymin -
     * @param ymax number - ymax -
     */
    riCropWindow(xmin: number, xmax: number, ymin: number, ymax: number): void;

    /**
     * Script implementation of the RiSpec RiDeclare() function.
     * @param name string - name -
     * @param declaration string - declaration -
     */
    riDeclare(name: string, declaration: string): void;

    /**
     * Script implementation of the RiSpec RiDepthOfField() function.
     * @param fstop number - fstop -
     * @param focallength number - focallength -
     * @param focaldistance number - focaldistance -
     */
    riDepthOfField(fstop: number, focallength: number, focaldistance: number): void;

    /**
     * Script implementation of the RiSpec RiDetailRange() function.
     * @param minvis number - minvis -
     * @param lowtran number - lowtran -
     * @param uptran number - uptran -
     * @param maxvis number - maxvis -
     */
    riDetailRange(minvis: number, lowtran: number, uptran: number, maxvis: number): void;

    /**
     * Script implementation of the RiSpec RiDisplacement() function.
     * @param name string - The name of the displacement shader.
     * @param tokens any[] - A list of token names passed to the shader.
     * @param params any[] - A list of corresponding values for tokens.
     */
    riDisplacement(name: string, tokens: any[], params: any[]): void;

    /**
     * Script implementation of the RiSpec RiDisplay() function.
     * @param name string - The name of the display.
     * @param type string - The type of the display.
     * @param mode string - The mode of the display.
     * @param tokens any[] - A list of token names passed to the display.
     * @param params any[] - A list of corresponding values for tokens.
     */
    riDisplay(name: string, type: string, mode: string, tokens: any[], params: any[]): void;

    /**
     * Script implementation of the RiSpec RiDisplayChannel() function.
     * @param channel string
     * @param tokens any[] - A list of token names passed to the channel.
     * @param params any[] - A list of corresponding values for tokens.
     */
    riDisplayChannel(channel: string, tokens: any[], params: any[]): void;

    /**
     * Script implementation of the RiSpec RiElse() function.
     */
    riElse(): void;

    /**
     * Script implementation of the RiSpec RiElseIf() function.
     * @param expression string - The expression for the condition.
     * @param tokens any[] - A list of token names.
     * @param params any[] - A list of corresponding values for tokens.
     */
    riElseIf(expression: string, tokens: any[], params: any[]): void;

    /**
     * Attempts to finish the render.
     * @param message string - The message to display in the progress dialog.
     */
    riEndWorld(message: string): void;

    /**
     * Script implementation of the RiSpec RiExposure() function.
     * @param gain number - The gain value to set.
     * @param gamma number - The gamma value to set.
     */
    riExposure(gain: number, gamma: number): void;

    /**
     * Script implementation of the RiSpec RiExterior() function.
     * @param name string - The name of the volume shader.
     * @param tokens any[] - A list of token names passed to the shader.
     * @param params any[] - A list of corresponding values for tokens.
     */
    riExterior(name: string, tokens: any[], params: any[]): void;

    /**
     * Script implementation of the RiSpec RiFormat() function.
     * @param xres number - The horizontal resolution of the image.
     * @param yres number - The vertical resolution of the image.
     * @param aspect number - The ratio of the width to the height of a single pixel.
     */
    riFormat(xres: number, yres: number, aspect: number): void;

    /**
     * Script implementation of the RiSpec RiFrameAspectRatio() function.
     * @param aspect number - The ratio of the width to the height of the desired image.
     */
    riFrameAspectRatio(aspect: number): void;

    /**
     * Script implementation of the RiSpec RiGeometricApproximation() function.
     * @param type string - type -
     * @param value number - value -
     */
    riGeometricApproximation(type: string, value: number): void;

    /**
     * Script implementation of the RiSpec RiHider() function.
     * @param type string - The type of the hider.
     * @param tokens any[] - A list of token names passed to the hider.
     * @param params any[] - A list of corresponding values for tokens.
     */
    riHider(type: string, tokens: any[], params: any[]): void;

    /**
     * Script implementation of the RiSpec RiIdentity() function.
     */
    riIdentity(): void;

    /**
     * Script implementation of the RiSpec RiIfBegin() function.
     * @param expression string - The expression for the condition.
     * @param tokens any[] - A list of token names passed to the shader.
     * @param params any[] - A list of corresponding values for tokens.
     */
    riIfBegin(expression: string, tokens: any[], params: any[]): void;

    /**
     * Script implementation of the RiSpec RiIfEnd() function.
     */
    riIfEnd(): void;

    /**
     * Script implementation of the RiSpec RiIlluminate() function.
     * @param light number - The index of the light in the list.
     * @param onOff boolean - If true, adds the light to the list. If false, removes the light from the list.
     */
    riIlluminate(light: number, onOff: boolean): void;

    /**
     * Script implementation of the RiSpec RiImager() function.
     * @param name string - The name of the imager shader.
     * @param tokens any[] - A list of token names passed to the shader.
     * @param params any[] - A list of corresponding values for tokens.
     */
    riImager(name: string, tokens: any[], params: any[]): void;

    /**
     * Script implementation of the RiSpec RiInterior() function.
     * @param name string - The name of the volume shader.
     * @param tokens any[] - A list of token names passed to the shader.
     * @param params any[] - A list of corresponding values for tokens.
     */
    riInterior(name: string, tokens: any[], params: any[]): void;

    /**
     * Script implementation of the RiSpec RiLightSource() function.
     * @param name string - The name of the light shader.
     * @param tokens any[] - A list of token names passed to the shader.
     * @param params any[] - A list of corresponding values for tokens.
     * @returns number The light handle index for this light source
     */
    riLightSource(name: string, tokens: any[], params: any[]): number; // Number

    /**
     * Script implementation of the RiSpec RiMakeBump() function.
     * @param pic string - pic -
     * @param tex string - tex -
     * @param swrap string - swrap -
     * @param twrap string - twrap -
     * @param filterType number - filterType -
     * @param swidth number - swidth -
     * @param twidth number - twidth -
     * @param tokens any[] - A list of token names passed to the shader.
     * @param params any[] - A list of corresponding values for tokens.
     */
    riMakeBump(pic: string, tex: string, swrap: string, twrap: string, filterType: number, swidth: number, twidth: number, tokens: any[], params: any[]): void;

    /**
     * Script implementation of the RiSpec RiMakeCubeFaceEnvironment() function.
     * @param px string - px -
     * @param nx string - nx -
     * @param py string - py -
     * @param ny string - ny -
     * @param pz string - pz -
     * @param nz string - nz -
     * @param tex string - tex -
     * @param fov number - fov -
     * @param filterType number - filterType -
     * @param swidth number - swidth -
     * @param twidth number - twidth -
     * @param tokens any[] - A list of token names passed to the shader.
     * @param params any[] - A list of corresponding values for tokens.
     */
    riMakeCubeFaceEnvironment(px: string, nx: string, py: string, ny: string, pz: string, nz: string, tex: string, fov: number, filterType: number, swidth: number, twidth: number, tokens: any[], params: any[]): void;

    /**
     * Script implementation of the RiSpec RiMakeLatLongEnvironment() function.
     * @param pic string - pic -
     * @param tex string - tex -
     * @param filterType number - filterType -
     * @param swidth number - swidth -
     * @param twidth number - twidth -
     * @param tokens any[] - A list of token names passed to the shader.
     * @param params any[] - A list of corresponding values for tokens.
     */
    riMakeLatLongEnvironment(pic: string, tex: string, filterType: number, swidth: number, twidth: number, tokens: any[], params: any[]): void;

    /**
     * Script implementation of the RiSpec RiMakeShadow() function.
     * @param pic string - pic -
     * @param tex string - tex -
     * @param tokens any[] - A list of token names passed to the shader.
     * @param params any[] - A list of corresponding values for tokens.
     */
    riMakeShadow(pic: string, tex: string, tokens: any[], params: any[]): void;

    /**
     * Script implementation of the RiSpec RiMakeTexture() function.
     * @param pic string - pic -
     * @param tex string - tex -
     * @param swrap string - swrap -
     * @param twrap string - twrap -
     * @param filterType number - filterType -
     * @param swidth number - swidth -
     * @param twidth number - twidth -
     * @param tokens any[] - A list of token names passed to the shader.
     * @param params any[] - A list of corresponding values for tokens.
     */
    riMakeTexture(pic: string, tex: string, swrap: string, twrap: string, filterType: number, swidth: number, twidth: number, tokens: any[], params: any[]): void;

    /**
     * Script implementation of the RiSpec RiMatte() function.
     * @param onoff boolean
     */
    riMatte(onoff: boolean): void;

    /**
     * Script implementation of the RiSpec RiMultiplyShadingRate() function.
     * @param ratemultiplier number - ratemultiplier -
     */
    riMultiplyShadingRate(ratemultiplier: number): void;

    /**
     * Script implementation of the RiSpec RiOpacity() function.
     * @param Os Color - The color to set.
     */
    riOpacity(Os: Color): void;

    /**
     * Script implementation of the RiSpec RiOption() function.
     * @param name string
     * @param tokens any[] - A list of token names passed to the option.
     * @param params any[] - A list of corresponding values for tokens.
     */
    riOption(name: string, tokens: any[], params: any[]): void;

    /**
     * Script implementation of the RiSpec RiOrientation() function.
     * @param orientation string - orientation -
     */
    riOrientation(orientation: string): void;

    /**
     * Script implementation of the RiSpec RiPerspective() function.
     * @param fov number - The full horizontal field of view angle.
     */
    riPerspective(fov: number): void;

    /**
     * Script implementation of the RiSpec RiPixelFilter() function.
     * @param filterType number - filterType -
     * @param xwidth number - xwidth -
     * @param ywidth number - ywidth -
     */
    riPixelFilter(filterType: number, xwidth: number, ywidth: number): void;

    /**
     * Script implementation of the RiSpec RiPixelSamples() function.
     * @param xsamples number - xsamples -
     * @param ysamples number - ysamples -
     */
    riPixelSamples(xsamples: number, ysamples: number): void;

    /**
     * Script implementation of the RiSpec RiPixelVariance() function.
     * @param variation number - variation -
     */
    riPixelVariance(variation: number): void;

    /**
     * Script implementation of the RiSpec RiProjection() function.
     * @param name string - The name of the projection.
     * @param tokens any[] - A list of token names passed to the projection.
     * @param params any[] - A list of corresponding values for tokens.
     */
    riProjection(name: string, tokens: any[], params: any[]): void;

    /**
     * Script implementation of the RiSpec RiWQuantize() function.
     * @param type string - type -
     * @param one number - one -
     * @param qmin number - qmin -
     * @param qmax number - qmax -
     * @param ampl number - ampl -
     */
    riQuantize(type: string, one: number, qmin: number, qmax: number, ampl: number): void;

    /**
     * Script implementation of the RiSpec RiRelativeDetail() function.
     * @param relativedetail number - relativedetail -
     */
    riRelativeDetail(relativedetail: number): void;

    /**
     * Script implementation of the RiSpec RiReverseOrientation() function.
     */
    riReverseOrientation(): void;

    /**
     * Script implementation of the RiSpec RiRotate() function.
     * @param angle number - angle -
     * @param dx number - dx -
     * @param dy number - dy -
     * @param dz number - dz -
     */
    riRotate(angle: number, dx: number, dy: number, dz: number): void;

    /**
     * Script implementation of the RiSpec RiScale() function.
     * @param dx number - dx -
     * @param dy number - dy -
     * @param dz number - dz -
     */
    riScale(dx: number, dy: number, dz: number): void;

    /**
     * Script implementation of the RiSpec DDiScopedCoordinateSystem() function.
     * @param space string - The name for the coordinate system.
     */
    riScopedCoordinateSystem(space: string): void;

    /**
     * Script implementation of the RiSpec RiScreenWindow() function.
     * @param left number - left -
     * @param right number - right -
     * @param bot number - bot -
     * @param top number - top -
     */
    riScreenWindow(left: number, right: number, bot: number, top: number): void;

    /**
     * Script implementation of the RiSpec RiShader() function.
     * @param name string - The name of the shader.
     * @param handle string - handle -
     * @param tokens any[] - A list of token names passed to the shader.
     * @param params any[] - A list of corresponding values for tokens.
     */
    riShader(name: string, handle: string, tokens: any[], params: any[]): void;

    /**
     * Script implementation of the RiSpec RiShadingInterpolation() function.
     * @param type string - type -
     */
    riShadingInterpolation(type: string): void;

    /**
     * Script implementation of the RiSpec RiShadingRate() function.
     * @param size number - size -
     */
    riShadingRate(size: number): void;

    /**
     * Script implementation of the RiSpec RiShutter() function.
     * @param smin number - smin -
     * @param smax number - smax -
     */
    riShutter(smin: number, smax: number): void;

    /**
     * Script implementation of the RiSpec RiSides() function.
     * @param nsides number - nsides -
     */
    riSides(nsides: number): void;

    /**
     * Script implementation of the RiSpec RiSkew() function.
     * @param angle number - angle -
     * @param dx1 number - dx1 -
     * @param dy1 number - dy1 -
     * @param dz1 number - dz1 -
     * @param dx2 number - dx2 -
     * @param dy2 number - dy2 -
     * @param dz2 number - dz2 -
     */
    riSkew(angle: number, dx1: number, dy1: number, dz1: number, dx2: number, dy2: number, dz2: number): void;

    /**
     * Script implementation of the RiSpec RiSurface() function.
     * @param name string - The name of the surface shader.
     * @param tokens any[] - A list of token names passed to the shader.
     * @param params any[] - A list of corresponding values for tokens.
     */
    riSurface(name: string, tokens: any[], params: any[]): void;

    /**
     * Script implementation of the RiSpec RiTransform() function.
     * @param transform DzMatrix4 - The transform to set.
     */
    riTransform(transform: DzMatrix4): void;

    /**
     * Script implementation of the RiSpec RiTransformBegin() function.
     */
    riTransformBegin(): void;

    /**
     * Script implementation of the RiSpec RiTransformEnd() function.
     */
    riTransformEnd(): void;

    /**
     * Script implementation of the RiSpec RiTranslate() function.
     * @param dx number - dx -
     * @param dy number - dy -
     * @param dz number - dz -
     */
    riTranslate(dx: number, dy: number, dz: number): void;

    /**
     * Script implementation of the RiSpec RiWorldBegin() function.
     */
    riWorldBegin(): void;

    /**
     * Sets the background color.
     * @param color Color - The color to set.
     */
    setBackgroundColor(color: Color): void;

    /**
     * Sets the path of the script to be run when the script definition is called.
     * @param filename string - The path of the script.
     */
    setCleanUpScript(filename: string): void;

    /**
     * Sets whether or not the Ri call that launches a pre-process script should execute.
     * @param shouldContinue boolean - If true, the ri* call will be executed. If false, the ri* call will not be executed.
     */
    setContinueAfterPreProcess(shouldContinue: boolean): void;

    /**
     * Sets the crop window from the handler for the render.
     * @param handler DzRenderHandler - The render handler to set.
     */
    setCropWindow(handler: DzRenderHandler): void;

    /**
     * Sets the path of the script to run in order to define the renderer. Causes the renderer to be cleared, the cleanup script (if any) to be run and then the render script, clean up script, surface pre-process script, light pre-process script and displacement pre-process script to be cleared.
     * @param definitionFile string - The path of the script to run.
     */
    setDefinitionFile(definitionFile: string): void;

    /**
     * Sets the path of the script to be run before a material displacement is processed.
     * @param filename string - The path of the script.
     */
    setDisplacementPreProcessScript(filename: string): void;

    /**
     * Set whether or not this is a shadow pass.
     * @param onOff boolean - If true, this pass will be marked as a shadow pass.
     */
    setIsShadowPass(onOff: boolean): void;

    /**
     * Sets the path of the script to be run before riLightSource() and riAreaLightSource() are processed.
     * @param filename string - The path of the script.
     */
    setLightPreProcessScript(filename: string): void;

    /**
     * Sets whether or not the renderer is biased in the current mode.
     * @param yesNo boolean
     * @returns boolean
     * @since 4.11.0.257
     */
    setModeBiased(yesNo: boolean): boolean; // Boolean

    /**
     * @param classname string
     * @returns boolean
     */
    setModeDefaultMaterialClassname(classname: string): boolean; // Boolean

    /**
     * Sets whether or not the renderer is physically based in the current mode.
     * @param yesNo boolean
     * @returns boolean
     * @since 4.11.0.257
     */
    setModePhysicallyBased(yesNo: boolean): boolean; // Boolean

    /**
     * Sets whether or not the renderer supports advance camera properties in the current mode.
     * @param yesNo boolean
     * @returns boolean
     * @since 4.11.0.257
     */
    setModeSupportsAdvancedCamera(yesNo: boolean): boolean; // Boolean

    /**
     * Sets whether or not the renderer supports blades on the camera in the current mode.
     * @param yesNo boolean
     * @returns boolean
     * @since 4.11.0.257
     */
    setModeSupportsCameraBlades(yesNo: boolean): boolean; // Boolean

    /**
     * Sets the path of the script that controls the rendering process.
     * @param filename string - The path of the script.
     */
    setRenderScript(filename: string): void;

    /**
     * Sets the path of the script to be run before riSurface is processed.
     * @param filename string - The path of the script.
     */
    setSurfacePreProcessScript(filename: string): void;

    /* Signals */

    /**
     * Emitted when the definition file has changed.
     */
    defintionFileChanged: ISignal<void>;

    /* Undocumented Augment Members */

    /** @undocumented */
    addRenderElements(p0: DzElementList): any;

    /** @undocumented */
    autoBake(p0: DzRenderHandler, p1: DzCamera, p2: DzLightListIterator, p3: DzNodeListIterator, p4: DzBakerOptions): any;

    /** @undocumented */
    bake(p0: DzRenderHandler, p1: DzCamera, p2: DzLightListIterator, p3: DzNodeListIterator, p4: DzBakerOptions): any;

    /** @undocumented */
    getOptionsFrame(): any;

    /** @undocumented */
    iskindof(p0: string): any;
}
