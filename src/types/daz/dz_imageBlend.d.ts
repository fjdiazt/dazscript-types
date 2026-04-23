/**
 * Base for objects that blend image layers together. (deprecated).
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/imageblend_dz
 */
declare class DzImageBlend extends QObject {

    /* Methods */

    /**
     * Used to blend src into dest.
     * @param dest DzImage - The destination image that the blending operation will add to.
     * @param src DzImage - The source image that is being blended into the destination image.
     */
    blendImage(dest: DzImage, src: DzImage): void;

    /**
     * @returns string The description of the blending operation that will be displayed to the user.
     */
    getDescription(): string; // String

    /* Signals */

    /**
     * Emitted when the blend method has changed.
     */
    blendMethodChanged: ISignal<void>;
}
