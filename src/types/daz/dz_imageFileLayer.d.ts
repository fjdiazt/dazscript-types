/**
 * A single layer in a multi-layer texture image that references an image file for its data. (deprecated).
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/imagefilelayer_dz
 */
declare class DzImageFileLayer extends DzImageLayer {

    /* Properties */

    /**
     * The filename of the image that this layer references.
     */
    filename: string; // String

    /* Signals */

    /**
     * Emitted when the file name associated with this layer changes
     * @param filename string - The new file name
     */
    filenameChanged: ISignal<string>;
}
