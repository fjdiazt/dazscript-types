/**
 * A mask component in a multi-layer texture image. (deprecated).
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/imagemask_dz
 */
declare class DzImageMask extends DzImageComponent {

    /* Properties */

    /**
     * The filename of the image that this mask references.
     */
    filename: string; // String

    /* Signals */

    /**
     * Emitted when the file name associated with this mask changes
     * @param filename string - The new file name
     */
    filenameChanged: ISignal<string>;
}
