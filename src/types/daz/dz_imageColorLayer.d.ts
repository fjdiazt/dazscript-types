/**
 * A single layer in a multi-layer texture image that is filled with a solid color. (deprecated).
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/imagecolorlayer_dz
 */
declare class DzImageColorLayer extends DzImageLayer {

    /* Properties */

    /**
     * The color for this layer.
     */
    color: Color;

    /* Methods */

    /**
     * Sets the size for this color layer.
     * @param size Size - The new size to use.
     */
    setSize(size: Size): void;

    /* Signals */

    /**
     * Emitted when the layer color changes.
     * @param color Color - The new layer color
     */
    colorChanged: ISignal<Color>;

    /**
     * Emitted when the layer size changes.
     * @param size Size - The new layer size
     */
    sizeChanged: ISignal<Size>;
}
