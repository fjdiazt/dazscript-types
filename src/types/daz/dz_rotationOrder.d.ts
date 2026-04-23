/**
 * A class representing a rotation order.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/rotationorder_dz
 */
declare class DzRotationOrder extends Object {

    /* Properties */

    /**
     * The index of the first axis of rotation. ( x = 0, y = 1, z = 2 )
     */
    firstAxis: number; // Number

    /**
     * The enumerated representation of the order of rotation; XYZ = 0, XZY, YXZ, YZX, ZXY, ZYX.
     */
    order: number; // Number

    /**
     * The index of the second axis of rotation. ( x = 0, y = 1, z = 2 )
     */
    secondAxis: number; // Number

    /**
     * The index of the third axis of rotation. ( x = 0, y = 1, z = 2 )
     */
    thirdAxis: number; // Number

    /* Constructors */

    /**
     * @param order string | DzRotationOrder
     */
    constructor(order: string | DzRotationOrder);

    /**
     * @param order string | number
     */
    constructor(order: string | number);

    /**
     * @param order DzRotationOrder | number
     */
    constructor(order: DzRotationOrder | number);

    constructor();

    /**
     * @param order string
     */
    constructor(order: string);

    /**
     * @param order DzRotationOrder
     */
    constructor(order: DzRotationOrder);

    /**
     * @param firstAxis number
     * @param secondAxis number
     * @param thirdAxis number
     */
    constructor(firstAxis: number, secondAxis: number, thirdAxis: number);

    /**
     * @param order number
     */
    constructor(order: number);

    /* Methods */

    /**
     * Sets the order of rotation by the given axes.
     * @param firstAxis number - The first axis in the rotation order: x = 0, y = 1, z = 2
     * @param secondAxis number - The second axis in the rotation order: x = 0, y = 1, z = 2
     * @param thirdAxis number - Not used - value is implied.
     * @since 4.14.1.32
     */
    setOrder(firstAxis: number, secondAxis: number, thirdAxis: number): void;

    /**
     * @returns string A string representation of this rotation order - all uppercase letters.
     */
    toString(): string; // String

    /* Undocumented Augment Members */

    /** @undocumented */
    objectName: string;

    /** @undocumented */
    destroyed(): any; // TODO ;

    /** @undocumented */
    destroyed(): any; // TODO ;

    /** @undocumented */
    deleteLater(): any; // TODO ;

    /** @undocumented */
    inherits(): any; // TODO ;

    /** @undocumented */
    className(): any; // TODO ;
}
