/**
 * Provides management of OpenGL extensions and basic state.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/opengl_dz
 */
declare class DzOpenGL extends QObject {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of OGLTexQuality.
     */
    static OGLLow: number;

    /**
     * DAZ enum member of OGLTexQuality.
     */
    static OGLMed: number;

    /**
     * DAZ enum member of OGLTexQuality.
     */
    static OGLHigh: number;

    /**
     * DAZ enum member of OGLTexQuality.
     */
    static OGLBest: number;

    /* Constructors */

    constructor();

    constructor();

    /* Methods */

    /**
     * @returns number the opacity value of the bounding box for active ( highlighted ) nodes.
     */
    getBoundingBoxActiveOpacity(): number; // Number

    /**
     * @returns number the length of the edges of the bounding boxes.
     */
    getBoundingBoxEdgeLength(): number; // Number

    /**
     * @returns number the opacity value of the bounding box for inactive nodes that are selected.
     */
    getBoundingBoxInactiveOpacity(): number; // Number

    /**
     * @returns number The number of bit depth of the client depth buffer.
     */
    getDepthBufferBits(): number; // Number

    /**
     * @returns boolean true if nodes should be drawn with a highlight
     */
    getDrawNodeHighlight(): boolean; // Boolean

    /**
     * @returns number The major version number of OpenGL supported on the current hardware.
     */
    getMajorVersion(): number; // Number

    /**
     * @returns number The maximim texture size supported by the client.
     */
    getMaxTextureSize(): number; // Number

    /**
     * @returns number The maximim number of textures supported by the client.
     */
    getMaxTextureUnits(): number; // Number

    /**
     * @returns number The minor version number of OpenGL supported on the current hardware.
     */
    getMinorVersion(): number; // Number

    /**
     * @returns number The number auxiliary buffers supported by the client.
     */
    getNumAuxBuffers(): number; // Number

    /**
     * @returns number The maximim number of lights supported by the client.
     */
    getNumLights(): number; // Number

    /**
     * @returns number The number of supported OpenGL extensions
     */
    getNumOGLExtensions(): number; // Number

    /**
     * @returns number The OpenGL major and minor version numbers supported on the current hardware.
     */
    getOpenGLVersion(): number; // Number

    /**
     * @returns any A pointer to the application-wide global PBuffer object Undocumented DAZ type: pbuffer_dz.
     */
    getPBuffer(): any; // pbuffer_dz; undocumented type

    /**
     * @returns number The release number of OpenGL supported on the current hardware.
     */
    getReleaseNumber(): number; // Number

    /**
     * @returns number the opacity value of the wireframe for the generated edges of a subdivided mesh.
     */
    getSubDivisionWireOpacity(): number; // Number

    /**
     * @returns number The current quality setting for loading OpenGL textures
     */
    getTextureQuality(): number; // OGLTexQuality

    /**
     * @returns number The maximum dimension for a texture map based on the current OpenGL texture quality setting.
     */
    getTextureQualityMaxSize(): number; // Number

    /**
     * @returns number the opacity value of the wireframe for drawn triangulation of quads.
     * @since 4.9.3.142
     */
    getTriDivisionWireOpacity(): number; // Number

    /**
     * @returns number the opacity value of the wireframe for the edges of a mesh.
     */
    getWireframeOpacity(): number; // Number

    /**
     * @returns boolean true if the user has enabled display optimization and if its supported.
     */
    isDisplayOptimizationEnabled(): boolean; // Boolean

    /**
     * @returns boolean true if the user has enabled hardware antialiasing.
     */
    isMultisampleEnabled(): boolean; // Boolean

    /**
     * @returns boolean true if the client supports hardware antialiasing.
     */
    isMultisampleSupported(): boolean; // Boolean

    /**
     * @param extension string - The extension to check
     * @returns boolean true if the given OpenGL extension is supported
     */
    isOGLExtensionSupported(extension: string): boolean; // Boolean

    /**
     * Checks for support of the four following extensions: GL_ARB_shader_objects, GL_ARB_fragment_shader, GL_ARB_vertex_shader, GL_ARB_shading_language_100. All four extensions must exist for this function to return true.
     * @returns boolean true if OpenGL Shader Language is supported
     */
    isOGLShaderLanguageSupported(): boolean; // Boolean

    /**
     * @returns boolean true if the client supports hardware shadow mapping.
     */
    isShadowingSupported(): boolean; // Boolean

    /**
     * @returns boolean true if the client supports Vertex Buffer Objects.
     */
    isVBOSupported(): boolean; // Boolean

    /**
     * Sets the opacity of the bounding box for active ( highlighted ) nodes.
     * @param opacity number - The opacity value to be used
     */
    setBoundingBoxActiveOpacity(opacity: number): void;

    /**
     * Sets the length of the edges of the bounding boxes.
     * @param length number - The edge length to be used
     */
    setBoundingBoxEdgeLength(length: number): void;

    /**
     * Sets the opacity of the bounding box for inactive nodes that are selected.
     * @param opacity number - The opacity value to be used
     */
    setBoundingBoxInactiveOpacity(opacity: number): void;

    /**
     * Sets whether or not display optimization is enabled in the OpenGL viewports
     * @param onOff boolean - If true, display optimizations will be enabled
     */
    setDisplayOptimizationEnabled(onOff: boolean): void;

    /**
     * @param onOff boolean - If true, nodes will be drawn with a highlight
     */
    setDrawNodeHighlight(onOff: boolean): void;

    /**
     * Sets whether or not multisampling is enabled in the OpenGL viewports
     * @param onOff boolean - if true, multisampling is enabled
     */
    setMultisampleEnabled(onOff: boolean): void;

    /**
     * Sets the opacity of the wireframe for the generated edges of a subdivided mesh.
     * @param opacity number - The opacity value
     */
    setSubDivisionWireOpacity(opacity: number): void;

    /**
     * Sets the quality setting for loading OpenGL textures
     * @param quality number - The quality of the texture
     */
    setTextureQuality(quality: number): void;

    /**
     * Sets the opacity of the wireframe for the generated edges of a subdivided mesh.
     * @param opacity number - The opacity value
     * @since 4.9.3.142
     */
    setTriDivisionWireOpacity(opacity: number): void;

    /**
     * Sets the opacity of the wireframe for the edges of a mesh.
     * @param opacity number - The opacity value
     */
    setWireframeOpacity(opacity: number): void;

    /* Signals */

    /**
     * @param value number
     */
    boundingBoxActiveOpacityChanged: ISignal<number>;

    /**
     * @param value number
     */
    boundingBoxEdgeLengthChanged: ISignal<number>;

    /**
     * @param value number
     */
    boundingBoxInactiveOpacityChanged: ISignal<number>;

    /**
     * Emitted when display optimization is disabled or enabled.
     * @param onOff boolean - If true, display optimization was enabled. If false, display optimization was disabled.
     */
    displayOptimizationEnabled: ISignal<boolean>;

    /**
     * Emitted when multisample is disabled or enabled.
     * @param onOff boolean - If true, multipsample was enabled. If false, multisample was disabled.
     */
    multisampleEnabled: ISignal<boolean>;

    /**
     * @param value number
     */
    subDivisionWireOpacityChanged: ISignal<number>;

    /**
     * @param value number
     */
    subWireframeOpacityChanged: ISignal<number>;

    /**
     * Emitted when the texture quality setting has changed.
     * @param quality number - The new texture quality setting.
     */
    textureQualityChanged: ISignal<number>;
}
