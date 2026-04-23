/**
 * Describes a parametrically defined box in three dimensional space.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/box3_dz
 */
declare class DzBox3 extends Object {

    /* Properties */

    /**
     * Holds the maximum corner of this box.
     */
    max: DzVec3;

    /**
     * Holds the maximum value of this box on the x axis.
     */
    maxX: number; // Number

    /**
     * Holds the maximum value of this box on the y axis.
     */
    maxY: number; // Number

    /**
     * Holds the maximum value of this box on the z axis.
     */
    maxZ: number; // Number

    /**
     * Holds the minimum corner of this box.
     */
    min: DzVec3;

    /**
     * Holds the minimum value of this box on the x axis.
     */
    minX: number; // Number

    /**
     * Holds the minimum value of this box on the y axis.
     */
    minY: number; // Number

    /**
     * Holds the minimum value of this box on the z axis.
     */
    minZ: number; // Number

    /* Constructors */

    /**
     * @param box string | DzBox3
     */
    constructor(box: string | DzBox3);

    constructor();

    /**
     * @param box string
     */
    constructor(box: string);

    /**
     * @param xMin number
     * @param yMin number
     * @param zMin number
     * @param xMax number
     * @param yMax number
     * @param zMax number
     */
    constructor(xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number);

    /**
     * @param min DzVec3
     * @param max DzVec3
     */
    constructor(min: DzVec3, max: DzVec3);

    /**
     * @param box DzBox3
     */
    constructor(box: DzBox3);

    /* Methods */

    /**
     * @param point DzVec3 - The point to find the closest point in this box to.
     * @returns DzVec3 The closest point in this box to point. Returns point if point is already in this box.
     * @since 4.9.3.33
     */
    closestPoint(point: DzVec3): DzVec3;

    /**
     * @param point DzVec3 - The point to check whether or not this box contains it.
     * @returns boolean true if point is inside this box, otherwise false.
     * @since 4.9.3.48
     */
    containsPoint(point: DzVec3): boolean; // Boolean

    /**
     * @returns DzVec3 The center point of this box.
     */
    getCenter(): DzVec3;

    /**
     * Tests this box for intersection with the ray, and determines the two points on this box intersected by the line.
     * @param ray DzLine3 - The line to test for intersection with this box.
     * @returns Object An object where the “intersects” property represents whether or not this box intersects with the given line, the “firstIntersection” property represents the first intersection point, and the “lastIntersection” property represents the last intersection point if ray intersects.
     * @since 4.14.1.36
     */
    getIntersection(ray: DzLine3): Object;

    /**
     * @returns number The corner to corner distance of this box.
     */
    getSize(): number; // Number

    /**
     * Creates a new box by transforming the corners of this box through the given matrix and then including them.
     * @param matrix DzMatrix3 - The transform to apply.
     * @returns DzBox3 A copy of this box that has been transformed by the matrix.
     */
    getTransformedBox(matrix: DzMatrix3): DzBox3;

    /**
     * @param vec DzVec3 - The point to include in this box.
     */
    include(vec: DzVec3): void;

    /**
     * Grows this box, if necessary, to include the given box.
     * @param box DzBox3 - The box to include in this box.
     */
    include(box: DzBox3): void;

    /**
     * @returns boolean true if this box is valid, false if it is uninitialized.
     * @since 4.9.3.33
     */
    isValid(): boolean; // Boolean

    /**
     * Provides a fast intersection test without returning the intersection locations. This function is much faster than getIntersection().
     * @param ray DzLine3 - The line to test for intersection with this box.
     * @param tolerance number - The amount of deviation allowed and still be considered an intersection.
     * @returns boolean true if the ray intersects this box, otherwise false.
     * @since 4.9.3.33
     */
    testIntersection(ray: DzLine3, tolerance: number): boolean; // Boolean

    /**
     * @returns string A string representation of this box in the form "[[ minX, minY, minZ ],[ maxX, maxY, maxZ ]]".
     */
    toString(): string; // String

    /**
     * Translates this box by adding the given vector.
     * @param vec DzVec3 - The vector to translate by.
     */
    translate(vec: DzVec3): void;
}
