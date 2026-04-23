/**
 * Implements a layer component in a layered texture.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/texturelayer_dz
 */
declare class DzTextureLayer extends DzTextureComponent {

    /* Properties */

    /**
     * Holds the blend mode of this texture layer.
     */
    blendMode: number; // BlendMode

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of BlendMode.
     */
    static BlendAlpha: number;

    /**
     * DAZ enum member of BlendMode.
     */
    static BlendAdd: number;

    /**
     * DAZ enum member of BlendMode.
     */
    static BlendSubtract: number;

    /**
     * DAZ enum member of BlendMode.
     */
    static BlendMultiply: number;

    /**
     * DAZ enum member of BlendMode.
     */
    static BlendModeSourceOver: number;

    /**
     * DAZ enum member of BlendMode.
     */
    static BlendModeDestinationOver: number;

    /**
     * DAZ enum member of BlendMode.
     */
    static BlendModeClear: number;

    /**
     * DAZ enum member of BlendMode.
     */
    static BlendModeSource: number;

    /**
     * DAZ enum member of BlendMode.
     */
    static BlendModeDestination: number;

    /**
     * DAZ enum member of BlendMode.
     */
    static BlendModeSourceIn: number;

    /**
     * DAZ enum member of BlendMode.
     */
    static BlendModeDestinationIn: number;

    /**
     * DAZ enum member of BlendMode.
     */
    static BlendModeSourceOut: number;

    /**
     * DAZ enum member of BlendMode.
     */
    static BlendModeDestinationOut: number;

    /**
     * DAZ enum member of BlendMode.
     */
    static BlendModeSourceAtop: number;

    /**
     * DAZ enum member of BlendMode.
     */
    static BlendModeDestinationAtop: number;

    /**
     * DAZ enum member of BlendMode.
     */
    static BlendModeXor: number;

    /**
     * DAZ enum member of BlendMode.
     */
    static BlendModePlus: number;

    /**
     * DAZ enum member of BlendMode.
     */
    static BlendModeMultiply: number;

    /**
     * DAZ enum member of BlendMode.
     */
    static BlendModeScreen: number;

    /**
     * DAZ enum member of BlendMode.
     */
    static BlendModeOverlay: number;

    /**
     * DAZ enum member of BlendMode.
     */
    static BlendModeDarken: number;

    /**
     * DAZ enum member of BlendMode.
     */
    static BlendModeLighten: number;

    /**
     * DAZ enum member of BlendMode.
     */
    static BlendModeColorDodge: number;

    /**
     * DAZ enum member of BlendMode.
     */
    static BlendModeColorBurn: number;

    /**
     * DAZ enum member of BlendMode.
     */
    static BlendModeHardLight: number;

    /**
     * DAZ enum member of BlendMode.
     */
    static BlendModeSoftLight: number;

    /**
     * DAZ enum member of BlendMode.
     */
    static BlendModeDifference: number;

    /**
     * DAZ enum member of BlendMode.
     */
    static BlendModeExclusion: number;

    /* Static Methods */

    /**
     * @param mode number - The blend mode to get the label for.
     * @returns string A label for the blend mode (if valid), otherwise an empty string.
     * @since 4.20.1.80
     */
    static blendModeAsLabel(mode: number): string; // String

    /* Methods */

    /**
     * Removes any mask that may be on this layer.
     */
    clearMask(): void;

    /**
     * Creates a mask for this texture layer.
     * @param maskLabel string - The label of the mask.
     * @returns DzTextureMask The mask on this layer, otherwise null. If a mask already exists on this layer, the mask's label is changed to the label specified. If a mask does not exist on this layer, a new mask is created and assigned the label specified.
     */
    createMask(maskLabel: string): DzTextureMask;

    /**
     * @returns DzTextureMask The mask on this layer (if any), otherwise null.
     */
    getMask(): DzTextureMask;

    /**
     * @returns boolean true if this texture layer has a mask that needs to be refreshed or this layer has been modified on disk since it was last loaded/updated, otherwise false.
     */
    needsRefresh(): boolean; // Boolean

    /**
     * Sets a mask on this texture layer.
     * @param mask DzTextureMask - The mask to set.
     */
    setMask(mask: DzTextureMask): void;

    /* Signals */

    /**
     * Emitted just before the mask for the texture layer is changed.
     * @param oldMask DzTextureMask - The current texture mask.
     * @param newMask DzTextureMask - The texture mask being assigned.
     */
    aboutToChangeMask: ISignal<DzTextureMask, DzTextureMask>;

    /**
     * Emitted when the blend mode the texture layer has changed.
     * @param mode number - The new blend mode.
     */
    blendModeChanged: ISignal<number>;

    /**
     * Emitted when the mask for the texture layer has changed.
     * @param oldMask DzTextureMask - The old texture mask.
     * @param newMask DzTextureMask - The new texture mask.
     */
    maskChanged: ISignal<DzTextureMask, DzTextureMask>;
}
