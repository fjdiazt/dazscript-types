/**
 * An image manipulator that offsets an image layer horizontally and/or vertically. (deprecated).
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/offsetmanip_dz
 */
declare class DzOffsetManip extends DzImageManip {

    /* Properties */

    xOffset: number; // Number

    /**
     * Holds the horizontal offset.
     */
    yOffset: number; // Number

    /* Constructors */

    /**
     * @param x number
     * @param y number
     */
    constructor(x?: number, y?: number);

    /* Methods */

    /**
     * Sets the offset for the image.
     * @param x number - The offset for the image in x.
     * @param y number - The offset for the image in y.
     */
    setOffset(x: number, y: number): void;
}
