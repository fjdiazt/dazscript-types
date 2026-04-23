/**
 * Custom scriptable class for RenderMan Shader Language (RSL) Shader types.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/rslshader_dz
 */
declare class DzRSLShader extends DzRefCountedItem {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of ShaderType.
     */
    static None: number;

    /**
     * DAZ enum member of ShaderType.
     */
    static Surface: number;

    /**
     * DAZ enum member of ShaderType.
     */
    static Light: number;

    /**
     * DAZ enum member of ShaderType.
     */
    static LightArea: number;

    /**
     * DAZ enum member of ShaderType.
     */
    static VolumeAtmosphere: number;

    /**
     * DAZ enum member of ShaderType.
     */
    static VolumeInterior: number;

    /**
     * DAZ enum member of ShaderType.
     */
    static VolumeExterior: number;

    /**
     * DAZ enum member of ShaderType.
     */
    static Displacement: number;

    /**
     * DAZ enum member of ShaderType.
     */
    static Imager: number;

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * Adds a mappable numeric property to this shader object. DzColorProperty instances are passed as color type variables to the shader - all other DzNumericProperty derived instances are passed as float type variables. If the property is mapped, the absolute path of the image file is passed as a string type variable to the shader.
     * @param prop DzNumericProperty - The property of which the value is passed to the shader for the param argument.
     * @param token string - The name of the argument to the shader that the value of prop is passed to.
     * @param mapToken string - The name of the argument to the shader that the path of prop 's map is passed to, if prop is mapped.
     * @returns boolean true if prop was successfully added to the list of properties used by this shader (e.g. did not already exist), otherwise false.
     */
    addMappableProperty(prop: DzNumericProperty, token: string, mapToken: string): boolean; // Boolean

    /**
     * Adds a mappable numeric property to this shader object (intended for situations where the property itself is passed as an attribute via the render-time script, or simply for display purposes, but the associated map should be passed as an arg to the shader). If the property is mapped, the absolute path of the image file is passed as a string type variable to the shader.
     * @param prop DzNumericProperty - The property of which the map path is passed to the shader for the mapParam argument.
     * @param mapToken string - The name of the argument to the shader that the path of prop 's map is passed to, if prop is mapped.
     * @returns boolean true if prop was successfully added to the list of properties used by this shader (e.g. did not already exist), otherwise false.
     */
    addMapProperty(prop: DzNumericProperty, mapToken: string): boolean; // Boolean

    /**
     * Adds a standard property to the list of properties used by this shader object, and adds the property to this shader object's owner if it does not already exist. DzColorProperty instances are passed as color type variables to the shader - all other DzNumericProperty derived instances are passed as float type variables. DzImageProperty instances are passed as string type variables (the value of which is the absolute path of the image file).
     * @param prop DzProperty - The property of which the value is passed to the shader for the param argument.
     * @param token string - The name of the argument to the shader that the value of prop is passed to.
     * @returns boolean true if prop was successfully added to the list of properties used by this shader (e.g. did not already exist), otherwise false.
     */
    addShaderProperty(prop: DzProperty, token: string): boolean; // Boolean

    /**
     * @param prop DzNumericProperty
     * @returns string The name of the argument to the shader that the map value of prop is passed to, if prop is mappable. Returns an empty string if prop is not found, or not mappable.
     */
    findMapTokenByProperty(prop: DzNumericProperty): string; // String

    /**
     * @param name string
     * @returns DzProperty The property named name if name is found, otherwise NULL.
     */
    findProperty(name: string): DzProperty;

    /**
     * @param token string
     * @returns DzProperty The property that passes a value to the shader via token, if token is found. Undefined by default.
     */
    findPropertyByToken(token: string): DzProperty;

    /**
     * @param prop DzProperty
     * @returns string The name of the argument to the shader that the value of prop is passed to. Returns an empty string if prop is not found.
     */
    findTokenByProperty(prop: DzProperty): string; // String

    /**
     * @returns string The path to the definition script for this shader object.
     */
    getDefinitionFile(): string; // String

    /**
     * @returns number The number of properties currently used by this shader object.
     */
    getNumProperties(): number; // Number

    /**
     * @returns DzElement The owner (DzShaderMaterial, DzShaderLight, DzShaderCamera) of this object.
     */
    getOwner(): DzElement;

    /**
     * Get a property from this shader's property list.
     * @param which number - Index of the property to return.
     * @returns DzProperty If which is within range, the property at the given index, otherwise NULL.
     * @since 4.9.0.46
     */
    getProperty(which: number): DzProperty;

    /**
     * @returns any[] A list of all the properties on this shader.
     * @since 4.9.0.46
     */
    getPropertyList(): any[]; // Array

    /**
     * @returns string The relative path [from DzApp::getScriptsPath()] to the DAZ Script that is executed at render-time.
     */
    getRenderTimeFile(): string; // String

    /**
     * @returns string The path to the RSL shader (sans-extension) for this shader object.
     */
    getShaderFile(): string; // String

    /**
     * @returns number The RSL shader type for this object.
     */
    getShaderType(): number; // ShaderType

    /**
     * @returns boolean true if this shader participates in the bake pass, otherwise false.
     */
    isActiveInBakePass(): boolean; // Boolean

    /**
     * @returns boolean true if this shader participates in the beauty pass, otherwise false.
     */
    isActiveInBeautyPass(): boolean; // Boolean

    /**
     * @returns boolean true if this shader participates in the shadow pass, otherwise false.
     */
    isActiveInShadowPass(): boolean; // Boolean

    /**
     * @returns boolean true if this shader ONLY participates in the shadow pass, otherwise false. Same as isActiveInShadowPass() && !isActiveInBeautyPass().
     */
    isOnlyInShadowPass(): boolean; // Boolean

    /**
     * Removes the given property, if it can be found.
     * @param prop DzProperty - The property to remove from the shader.
     * @returns boolean true on success, otherwise false.
     */
    removeProperty(prop: DzProperty): boolean; // Boolean

    /**
     * Removes the property named name, if it can be found.
     * @param name string - The name of the property to remove from the shader.
     * @returns boolean true on success, otherwise false.
     */
    removeProperty(name: string): boolean; // Boolean

    /**
     * Sets whether this shader object participates in the baking pass; false by default. If this is set to true, the shader must have a string input variable named “BakeFileName” and another string input variable named “BakeType”.
     * @param yesNo boolean
     */
    setActiveInBakePass(yesNo: boolean): void;

    /**
     * Sets whether this shader object participates in the beauty/final pass; true by default.
     * @param yesNo boolean
     */
    setActiveInBeautyPass(yesNo: boolean): void;

    /**
     * Sets whether this shader object participates in the shadow pass; false by default.
     * @param yesNo boolean
     */
    setActiveInShadowPass(yesNo: boolean): void;

    /**
     * Sets the relative path of the (DAZ Script) file that builds this shader object's property list.
     * @param definitionFile string - The relative path (from DzApp::getScriptsPath()) to the DAZ Script that creates this shader object's property list.
     * @param doOverride boolean - Whether or not to override the setting of the definition file if it has already been set.
     * @param runScript boolean - Whether or not to run the definition script upon setting it.
     * @returns boolean true if definitionFile is valid, otherwise false.
     */
    setDefinitionFile(definitionFile: string, doOverride?: boolean, runScript?: boolean): boolean; // Boolean

    /**
     * Sets whether this shader object ONLY participates in the shadow pass; false by default. This is the same as calling setActiveInBeautyPass( false ) and setActiveInShadowPass( true ).
     * @param yesNo boolean
     */
    setOnlyInShadowPass(yesNo: boolean): void;

    /**
     * Sets the relative path of the (DAZ Script) file that will be executed at render-time. This script can set attributes as well as shader parameters for the element, and implement custom logic for special effects.
     * @param renderTimeFile string - The relative path (from DzApp::getScriptsPath()) to the DAZ Script that sets any attributes or shader parameters at render time.
     * @returns boolean true if renderTimeFile is valid, otherwise false.
     */
    setRenderTimeFile(renderTimeFile: string): boolean; // Boolean

    /**
     * Sets the shader file that this shader object calls when rendered.
     * @param shaderFile string - The relative path, from DzApp::getShadersPath(), to the shader that this shader object calls when rendered. The filename is expected to be sans-extension; e.g., “dzplastic”, not “dzplastic.sl” or “dzplastic.sdl”.
     * @returns boolean true if shaderFile plus the shader extension for the active renderer exists, otherwise false.
     */
    setShaderFile(shaderFile: string): boolean; // Boolean

    /**
     * Sets the type for this shader object.
     * @param shaderType number - The type of shader to set.
     * @returns boolean
     */
    setShaderType(shaderType: number): boolean; // Boolean

    /**
     * @param color Color - The color to gamma correct.
     * @returns DzVec3 The color as a DzVec3 gamma corrected if gamma correction is on and in the range of 0-1 for r, g, b. Alpha is ignored.
     */
    gammaCorrectColor(color: Color): DzVec3;

    /**
     * Adds a RiAttribute call with a float value.
     * @param attrib string - The name of the attribute to set.
     * @param token string - The name of the token to set.
     * @param val number - The float value to set.
     */
    setFloatAttrib(attrib: string, token: string, val: number): void;

    /**
     * Adds a RiAttribute call with an integer value.
     * @param attrib string - The name of the attribute to set.
     * @param token string - The name of the token to set.
     * @param val number - The integer value to set.
     */
    setIntegerAttrib(attrib: string, token: string, val: number): void;

    /**
     * Adds a RiAttribute call with a color value.
     * @param attrib string - The name of the attribute to set.
     * @param token string - The name of the token to set.
     * @param r number - The value for the red color component.
     * @param g number - The value for the green color component.
     * @param b number - The value for the blue color component.
     * @param isFloat boolean - A flag for indicating whether or not the values passed to r, g and b are floating point numbers (in the 0-1 range).
     */
    setColorAttrib(attrib: string, token: string, r: number, g: number, b: number, isFloat?: boolean): void;

    /**
     * Adds a RiAttribute call with a string value.
     * @param attrib string - The name of the attribute to set.
     * @param token string - The name of the token to set.
     * @param val string - The string value to set.
     */
    setStringAttrib(attrib: string, token: string, val: string): void;

    /**
     * Adds a RiAttribute call with a point value.
     * @param attrib string - The name of the attribute to set.
     * @param token string - The name of the token to set.
     * @param vec DzVec3 - The point value (x, y, z) to set.
     */
    setPointAttrib(attrib: string, token: string, vec: DzVec3): void;

    /**
     * Adds a RiAttribute call with a vector value.
     * @param attrib string - The name of the attribute to set.
     * @param token string - The name of the token to set.
     * @param vec DzVec3 - The vector value (x, y, z) to set.
     */
    setVectorAttrib(attrib: string, token: string, vec: DzVec3): void;

    /**
     * Adds a RiAttribute call with a normal value.
     * @param attrib string - The name of the attribute to set.
     * @param token string - The name of the token to set.
     * @param vec DzVec3 - The normal value (x, y, z) to set.
     */
    setNormalAttrib(attrib: string, token: string, vec: DzVec3): void;

    /**
     * Adds a RiAttribute call with a matrix value.
     * @param attrib string - The name of the attribute to set.
     * @param token string - The name of the token to set.
     * @param mtx DzMatrix4 - The matrix value to set.
     */
    setMatrixAttrib(attrib: string, token: string, mtx: DzMatrix4): void;

    /**
     * Sets the value of a float token in the list of tokens passed to the shader.
     * @param token string - The name of the token to set.
     * @param val number - The float value to set.
     */
    setFloatToken(token: string, val: number): void;

    /**
     * Sets the value of an integer token in the list of tokens passed to the shader.
     * @param token string - The name of the token to set.
     * @param val number - The integer value to set.
     */
    setIntegerToken(token: string, val: number): void;

    /**
     * Sets the value of a color token in the list of tokens passed to the shader.
     * @param token string - The name of the token to set.
     * @param val Color - The color value to set.
     */
    setColorToken(token: string, val: Color): void;

    /**
     * Sets the value of a string token in the list of tokens passed to the shader.
     * @param token string - The name of the token to set.
     * @param val string - The string value to set.
     */
    setStringToken(token: string, val: string): void;

    /**
     * Sets the value of a point token in the list of tokens passed to the shader.
     * @param token string - The name of the token to set.
     * @param vec DzVec3 - The point value (x, y, z) to set.
     */
    setPointToken(token: string, vec: DzVec3): void;

    /**
     * Sets the value of a vector token in the list of tokens passed to the shader.
     * @param token string - The name of the token to set.
     * @param vec DzVec3 - The vector value (x, y, z) to set.
     */
    setVectorToken(token: string, vec: DzVec3): void;

    /**
     * Sets the value of a normal token in the list of tokens passed to the shader.
     * @param token string - The name of the token to set.
     * @param vec DzVec3 - The normal value (x, y, z) to set.
     */
    setNormalToken(token: string, vec: DzVec3): void;

    /**
     * Sets the value of a matrix token in the list of tokens passed to the shader.
     * @param token string - The name of the token to set.
     * @param mtx DzMatrix4 - The matrix value to set.
     */
    setMatrixToken(token: string, mtx: DzMatrix4): void;

    /**
     * Convert six images representing six viewing directions into an environment map in the format required by the renderer.
     * @param px string - The path of the image as viewed from the positive x direction.
     * @param nx string - The path of the image as viewed from the negative x direction.
     * @param py string - The path of the image as viewed from the positive y direction.
     * @param ny string - The path of the image as viewed from the negative y direction.
     * @param pz string - The path of the image as viewed from the positive z direction.
     * @param nz string - The path of the image as viewed from the negative x direction.
     * @param tex string - The path of the resultant image.
     * @param fov number - The full horizontal field of view used to generate the input images.
     * @param filter number - The pre-defined filter to use.
     * @param swidth number - The filter width multiplier for the s direction.
     * @param twidth number - The filter width multiplier for the t direction.
     * @param tokens any[] - A list of additional String] tokens to set.
     * @param params any[] - A list of the corresponding basic type to set for each token.
     */
    makeCubeFaceEnvironment(px: string, nx: string, py: string, ny: string, pz: string, nz: string, tex: string, fov: number, filter: number, swidth: number, twidth: number, tokens: any[], params: any[]): void;

    /**
     * Convert an image representing a latitude-longitude map into an environment map in the format required by the renderer.
     * @param pic string - The path of the source image.
     * @param tex string - The path of the resultant image.
     * @param filter number - The pre-defined filter to use.
     * @param swidth number - The filter width multiplier for the s direction.
     * @param twidth number - The filter width multiplier for the t direction.
     * @param tokens any[] - A list of additional String] tokens to set.
     * @param params any[] - A list of the corresponding basic type to set for each token.
     */
    makeLatLongEnvironment(pic: string, tex: string, filter: number, swidth: number, twidth: number, tokens: any[], params: any[]): void;

    /**
     * Convert a depth image into a shadow map in the format required by the renderer.
     * @param pic string - The path of the source image.
     * @param tex string - The path of the resultant image.
     * @param tokens any[] - A list of additional String] tokens to set.
     * @param params any[] - A list of the corresponding basic type to set for each token.
     */
    makeShadow(pic: string, tex: string, tokens: any[], params: any[]): void;

    /**
     * Convert an image map into a map in the format required by the renderer.
     * @param pic string - The path of the source image.
     * @param tex string - The path of the resultant image.
     * @param swrap string - The wrapping behavior of s coordinate.
     * @param twrap string - The wrapping behavior of t coordinate.
     * @param filter number - The pre-defined filter to use.
     * @param swidth number - The filter width multiplier for the s direction.
     * @param twidth number - The filter width multiplier for the t direction.
     * @param tokens any[] - A list of additional String] tokens to set.
     * @param params any[] - A list of the corresponding basic type to set for each token.
     */
    makeTexture(pic: string, tex: string, swrap: string, twrap: string, filter: number, swidth: number, twidth: number, tokens: any[], params: any[]): void;

    /**
     * Convert a bump map into a map in the format required by the renderer.
     * @param pic string - The path of the source image.
     * @param tex string - The path of the resultant image.
     * @param swrap string - The wrapping behavior of s coordinate.
     * @param twrap string - The wrapping behavior of t coordinate.
     * @param filter number - The pre-defined filter to use.
     * @param swidth number - The filter width multiplier for the s direction.
     * @param twidth number - The filter width multiplier for the t direction.
     * @param tokens any[] - A list of additional String] tokens to set.
     * @param params any[] - A list of the corresponding basic type to set for each token.
     */
    makeBump(pic: string, tex: string, swrap: string, twrap: string, filter: number, swidth: number, twidth: number, tokens: any[], params: any[]): void;

    /**
     * Adds a RiSpec RiTransformBegin() call.
     * @since 4.10.0.108
     */
    addTransformBegin(): void;

    /**
     * Adds a RiSpec RiTransformEnd() call.
     * @since 4.10.0.108
     */
    addTransformEnd(): void;

    /**
     * Adds a RiSpec RiTransformEnd() call after the owner.
     * @since 4.10.0.108
     */
    addScheduledTransformEnd(): void;

    /**
     * Adds a RiSpec RiConcatTransform() call.
     * @param transform DzMatrix4 - The transform to concatenate.
     * @since 4.10.0.108
     */
    addConcatTransform(transform: DzMatrix4): void;

    /**
     * Adds a RiSpec RiCoordinateSystem() call.
     * @param space string - The name for the coordinate system.
     * @since 4.10.0.108
     */
    addCoordinateSystem(space: string): void;

    /**
     * Adds a RiSpec RiCoordSysTransform() call.
     * @param space string - The name for the coordinate system.
     * @since 4.10.0.108
     */
    addCoordSysTransform(space: string): void;

    /**
     * Adds a RiSpec RiIdentity() call.
     * @since 4.10.0.108
     */
    addIdentity(): void;

    /**
     * Adds a RiSpec RiRotate() call.
     * @param angle number - angle -
     * @param dx number - dx -
     * @param dy number - dy -
     * @param dz number - dz -
     * @since 4.10.0.108
     */
    addRotate(angle: number, dx: number, dy: number, dz: number): void;

    /**
     * Adds a RiSpec RiScale() call.
     * @param dx number - dx -
     * @param dy number - dy -
     * @param dz number - dz -
     * @since 4.10.0.108
     */
    addScale(dx: number, dy: number, dz: number): void;

    /**
     * Adds a RiSpec DDiScopedCoordinateSystem() call.
     * @param space string - The name for the coordinate system.
     * @since 4.10.0.108
     */
    addScopedCoordinateSystem(space: string): void;

    /**
     * Adds a RiSpec RiSkew() call.
     * @param angle number - angle -
     * @param dx1 number - dx1 -
     * @param dy1 number - dy1 -
     * @param dz1 number - dz1 -
     * @param dx2 number - dx2 -
     * @param dy2 number - dy2 -
     * @param dz2 number - dz2 -
     * @since 4.10.0.108
     */
    addSkew(angle: number, dx1: number, dy1: number, dz1: number, dx2: number, dy2: number, dz2: number): void;

    /**
     * Adds a RiSpec RiTransform() call.
     * @param transform DzMatrix4 - The transform to set.
     * @since 4.10.0.108
     */
    addTransform(transform: DzMatrix4): void;

    /**
     * Adds a RiSpec RiTranslate() call.
     * @param dx number - dx -
     * @param dy number - dy -
     * @param dz number - dz -
     * @since 4.10.0.108
     */
    addTranslate(dx: number, dy: number, dz: number): void;

    /* Signals */

    /**
     * Transmitted when a property is added to this element.
     * @param prop DzProperty - The property added.
     */
    propertyAdded: ISignal<DzProperty>;

    /**
     * Transmitted when a property is added to or removed from this element.
     */
    propertyListChanged: ISignal<void>;

    /**
     * Transmitted when a property is removed from this element.
     * @param prop DzProperty - The property removed.
     */
    propertyRemoved: ISignal<DzProperty>;

    /* Undocumented Augment Members */

    /** @undocumented */
    static className(): string;
}
