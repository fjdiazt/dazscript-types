/**
 * An image manipulator that rotates an image layer in 90 degree increments. (deprecated).
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/rotatemanip_dz
 */
declare class DzRotateManip extends DzImageManip {

    /* Properties */

    degrees: number; // Number

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of Rotation.
     */
    static RotNone: number;

    /**
     * DAZ enum member of Rotation.
     */
    static Rot90: number;

    /**
     * DAZ enum member of Rotation.
     */
    static Rot180: number;

    /**
     * DAZ enum member of Rotation.
     */
    static Rot270: number;

    /* Constructors */

    /**
     * @param rot number
     */
    constructor(rot?: number);

    /* Methods */

    /**
     * @returns number The number of degrees the image will be rotated. Currently, the only possible values are 0, 90, 180, 270.
     */
    getDegrees(): number; // Number

    /**
     * @returns number The type of rotation for the image.
     */
    getRotation(): number; // Rotation

    /**
     * Sets the amount of rotation for the image.
     * @param deg number
     */
    setDegrees(deg: number): void;

    /**
     * Sets the type of rotation for the image.
     * @param rot number - The rotation to apply to the image.
     */
    setRotation(rot: number): void;
}
