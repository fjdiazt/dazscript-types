/**
 * An image manipulator that scales an image layer horizontally and/or vertically. (deprecated).
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/scalemanip_dz
 */
declare class DzScaleManip extends DzImageManip {

    /* Properties */

    /**
     * Holds the scaling of the image across its width.
     */
    heightScale: number; // Number

    widthScale: number; // Number

    /* Constructors */

    /**
     * @param w number
     * @param h number
     */
    constructor(w?: number, h?: number);

    /* Methods */

    /**
     * Sets the scale for the image.
     * @param w number - The scaling of the image across its width. 1.0 is equivalent to 100%.
     * @param h number - The scaling of the image across its height. 1.0 is equivalent to 100%.
     */
    setScale(w: number, h: number): void;
}
