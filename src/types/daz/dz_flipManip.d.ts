/**
 * An image manipulator that flips an image layer horizontally and/or vertically. (deprecated).
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/flipmanip_dz
 */
declare class DzFlipManip extends DzImageManip {

    /* Methods */

    /**
     * @returns boolean true if the image will be flipped horizontally, false if the image is not flipped horizontally.
     */
    flipHorizontal(): boolean; // Boolean

    /**
     * @returns boolean true if the image will be flipped vertically, false if the image is not flipped vertically.
     */
    flipVertical(): boolean; // Boolean

    /**
     * Sets whether or not the image is flipped horizontally.
     * @param onOff boolean - If true, the image will be flipped horizontally, otherwise the image is not flipped horizontally.
     */
    setFlipHorizontal(onOff: boolean): void;

    /**
     * Sets whether or not the image is flipped vertically.
     * @param onOff boolean - If true, the image will be flipped vertically, otherwise the image is not flipped vertically.
     */
    setFlipVertical(onOff: boolean): void;
}
