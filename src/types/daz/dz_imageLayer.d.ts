/**
 * A single layer in a multi-layer texture image. (deprecated).
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/imagelayer_dz
 */
declare class DzImageLayer extends DzImageComponent {

    /* Methods */

    /**
     * @returns DzImageBlend
     */
    getBlendMode(): DzImageBlend;

    /**
     * @returns string A user-readable description of the layer.
     */
    getDescription(): string; // String

    /**
     * @returns DzImageMask
     */
    getMask(): DzImageMask;

    /**
     * Sets the blending mode for this image layer.
     * @param mode DzImageBlend - The new blending mode for the image layer. The layer takes ownership of this object and deletes it when it is no longer used.
     */
    setBlendMode(mode: DzImageBlend): void;

    /**
     * Sets the mask for this image layer.
     * @param mask DzImageMask - A pointer to the new mask for the image layer. The layer takes ownership of this object and deletes it when it is no longer used. To clear the current mask, pass in a NULL pointer.
     */
    setMask(mask: DzImageMask): void;

    /* Signals */

    /**
     * Emitted when the blend mode for the layer has been changed.
     * @param mode DzImageBlend
     */
    blendModeChanged: ISignal<DzImageBlend>;

    /**
     * Emitted when the mask for the layer has been changed.
     * @param mask DzImageMask
     */
    maskChanged: ISignal<DzImageMask>;
}
