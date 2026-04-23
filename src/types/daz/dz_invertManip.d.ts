/**
 * An image manipulator that inverts the color channels of an image layer. (deprecated).
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/invertmanip_dz
 */
declare class DzInvertManip extends DzImageManip {

    /* Properties */

    on: boolean; // Boolean

    /* Constructors */

    /**
     * @param onOff boolean
     */
    constructor(onOff?: boolean);

    /* Methods */

    /**
     * @returns boolean true if the image's colors will be inverted, otherwise false.
     */
    isOn(): boolean; // Boolean

    /**
     * Sets whether or not the invert manipulator is applied.
     * @param onOff boolean - If true, the manipulator is applied, if false, the image's colors are not inverted.
     */
    setOn(onOff: boolean): void;
}
