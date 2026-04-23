/**
 * A base class for defining the set of features that a given mode of a given render engine provides; feature sets.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/renderermode_dz
 */
declare class DzRendererMode extends QObject {

    /* Methods */

    /**
     * @returns string The name of the DzMaterial subclass that implements the default material for the renderer in the current mode.
     * @since 4.11.0.254
     */
    defaultMaterialClassName(): string; // String

    /**
     * @returns boolean true if any features of the renderer are enabled for the current mode, otherwise false.
     */
    hasFeatures(): boolean; // Boolean

    /**
     * @returns boolean true if the renderer is biased in the current mode, otherwise false.
     */
    isBiased(): boolean; // Boolean

    /**
     * @returns boolean true if the renderer is physically based in the current mode, otherwise false.
     */
    isPhysicallyBased(): boolean; // Boolean

    /**
     * @returns boolean true if the renderer is RenderMan compliant in the current mode, otherwise false.
     */
    isRenderManCompliant(): boolean; // Boolean

    /**
     * @returns any[] A list of the languages supported by the renderer in the current mode.
     * @since 4.11.0.254
     */
    supportedLanguages(): any[]; // Array

    /**
     * @returns boolean true if the renderer supports advanced camera options in the current mode, otherwise false.
     * @since 4.9.3.121
     */
    supportsAdvancedCamera(): boolean; // Boolean

    /**
     * @returns boolean true if the renderer supports camera aperture blades in the current mode, otherwise false.
     * @since 4.9.3.121
     */
    supportsCameraBlades(): boolean; // Boolean

    /**
     * @returns boolean true if the renderer supports the Catmark subdivision limit surface in the current mode, otherwise false.
     */
    usesCatmarkLimitSurface(): boolean; // Boolean
}
