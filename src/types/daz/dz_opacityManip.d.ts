/**
 * An image manipulator that sets the alpha channel of an entire image layer to a specified value. (deprecated).
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/opacitymanip_dz
 */
declare class DzOpacityManip extends DzImageManip {

    /* Properties */

    opacity: number; // Number

    /* Constructors */

    /**
     * @param opacity number
     */
    constructor(opacity?: number);

    /* Methods */

    /**
     * @returns number The opacity value for the image.
     */
    getOpacity(): number; // Number

    /**
     * Sets the opacity for the image.
     * @param opacity number - The new opacity value for the image. This should be in the range 0.0 - 1.0.
     */
    setOpacity(opacity: number): void;
}
