/**
 * Describes a parametrically defined circle in three dimensional space.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/circle3_dz
 */
declare class DzCircle3 extends Object {

    /* Properties */

    /**
     * Holds the center of the circle in three dimensional space.
     */
    center: DzVec3;

    /**
     * Holds the normal of the plane that the circle lies on.
     */
    normal: DzVec3;

    /**
     * Holds the radius of the circle.
     */
    radius: number; // Number

    /* Constructors */

    /**
     * @param circle string | DzCircle3
     */
    constructor(circle: string | DzCircle3);

    constructor();

    /**
     * @param circle string
     */
    constructor(circle: string);

    /**
     * @param circle DzCircle3
     */
    constructor(circle: DzCircle3);

    /**
     * @param center DzVec3
     * @param normal DzVec3
     * @param radius number
     */
    constructor(center: DzVec3, normal: DzVec3, radius: number);

    /* Methods */

    /**
     * @returns string A string representation of this circle in the form "[[ centerX, centerY, centerZ ], [ normalX, normalY, normalZ ], radius ]".
     */
    toString(): string; // String
}
