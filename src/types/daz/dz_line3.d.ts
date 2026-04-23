/**
 * A three dimensional line segment.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/line3_dz
 */
declare class DzLine3 extends Object {

    /* Properties */

    /**
     * Holds the line's ending point in three dimensional space.
     */
    end: DzVec3;

    /**
     * Holds the line's starting point in three dimensional space.
     */
    origin: DzVec3;

    /* Constructors */

    /**
     * @param line string | DzLine3
     */
    constructor(line: string | DzLine3);

    constructor();

    /**
     * @param line string
     */
    constructor(line: string);

    /**
     * @param line DzLine3
     */
    constructor(line: DzLine3);

    /**
     * @param origin DzVec3
     * @param end DzVec3
     */
    constructor(origin: DzVec3, end: DzVec3);

    /* Methods */

    /**
     * @returns DzVec3 The vector direction of this line (end - origin).
     * @since 4.11.0.216
     */
    getDirection(): DzVec3;

    /**
     * @param t number
     * @returns DzVec3 The point with the given parametric distance along the line.
     * @since 4.11.0.216
     */
    getPoint(t: number): DzVec3;

    /**
     * @param t number
     * @returns number The length of the line given a parametric distance along the line.
     * @since 4.11.0.216
     */
    length(t?: number): number; // Number

    /**
     * Tests the intersection of two lines. This line and the given line are assumed to be infinitely long in both directions (i.e. the intersection can be outside the origin-end segment of either line).
     * @param line DzLine3 - The line to test intersection with.
     * @param tolerance number - If not zero, specifies the maximum distance between lines that will be counted as an intersection.
     * @returns Object An object where the “intersects” property represents whether or not this line intersects with the given line, and the “intersection” property represents the intersection point if the lines intersect.
     * @since 4.11.0.216
     */
    linesIntersect(line: DzLine3, tolerance?: number): Object;

    /**
     * @param line DzLine3 - The line to calculate min distance from.
     * @returns Object An object where the “distance” property represents the minimum distance between this line and another line, the “s” property represents the parametric distance along this line, and the “t” property represents the parametric distance along the given line.
     * @since 4.11.0.216
     */
    minDistanceFromLine(line: DzLine3): Object;

    /**
     * @param line DzLine3 - The line to calculate min distance from.
     * @returns Object An object where the “distance” property represents the minimum distance squared between this line and another line, the “s” property represents the parametric distance along this line, and the “t” property represents the parametric distance along the given line.
     * @since 4.11.0.216
     */
    minDistanceFromLineSquared(line: DzLine3): Object;

    /**
     * @param pnt DzVec3 - The point to calculate the min distance from.
     * @param clampEnds boolean - If true, the parametric distance is clamped to the [0-1] range and the nearest point to the line segment is returned rather than the nearest distance to the infinite line formed by the two end points of the segment.
     * @returns Object An object where the “distance” property represents the minimum distance between this line and a point, and the “s” property represents the parametric distance along the line to the minimum perpendicular distance point.
     * @since 4.11.0.216
     */
    minDistanceFromPoint(pnt: DzVec3, clampEnds?: boolean): Object;

    /**
     * @param pnt DzVec3 - The point to calculate the min distance from.
     * @param clampEnds boolean - If true, the parametric distance is clamped to the [0-1] range and the nearest point to the line segment is returned rather than the nearest distance to the infinite line formed by the two end points of the segment.
     * @returns Object An object where the “distance” property represents the minimum distance squared between this line and a point, and the “s” property represents the parametric distance along the line to the minimum perpendicular distance point.
     * @since 4.11.0.216
     */
    minDistanceFromPointSquared(pnt: DzVec3, clampEnds?: boolean): Object;

    /**
     * @param ray DzLine3 - The ray to calculate min distance from.
     * @returns Object An object where the “distance” property represents the minimum distance between this line and a ray, the “seg_t” property represents the parametric distance along this line, and the “ray_t” property represents the parametric distance along the given ray.
     * @since 4.11.0.216
     */
    minDistanceFromRay(ray: DzLine3): Object;

    /**
     * @param ray DzLine3 - The ray to calculate min distance from.
     * @returns Object An object where the “distance” property represents the minimum distance squared between this line and a ray, the “seg_t” property represents the parametric distance along this line, and the “ray_t” property represents the parametric distance along the given ray.
     * @since 4.11.0.216
     */
    minDistanceFromRaySquared(ray: DzLine3): Object;

    /**
     * Reverses the direction of the line by mirroring the endpoint.
     * @since 4.11.0.216
     */
    negate(): void;

    /**
     * Calculates the intersection of this line and the plane specified. The plane is defined by a point on the plane and the normal to the plane.
     * @param planePoint DzVec3 - A point on the plane (to define the plane).
     * @param planeNormal DzVec3 - The normal to the plane (to define the plane).
     * @returns Object An object where the “intersects” property represents whether or not this line intersects with the given plane, the “t” property represents the parametric distance along this line to the intersection point (if there is one), and the “intersection” property represents the intersection point if the line and plane intersect.
     * @since 4.11.0.216
     */
    planeIntersect(planePoint: DzVec3, planeNormal: DzVec3): Object;

    /**
     * Tests the intersection of two line segments.
     * @param line DzLine3 - The line to test intersection with.
     * @param tolerance number - If not zero, specifies the maximum distance between lines that will be counted as an intersection.
     * @returns Object An object where the “intersects” property represents whether or not this line segment intersects with the given line segment, and the “intersection” property represents the intersection point if the lines intersect.
     * @since 4.11.0.216
     */
    segmentsIntersect(line: DzLine3, tolerance?: number): Object;

    /**
     * Sets the line to have the length given by setting the endpoint relative to the current origin.
     * @param length number
     * @since 4.11.0.216
     */
    setLength(length: number): void;

    /**
     * Swaps the origin for the endpoint.
     * @since 4.11.0.216
     */
    swapEnds(): void;

    /**
     * @returns string A string representation of this line in the form "[[ originX, originY, originZ ],[ endX, endY, endZ ]]".
     */
    toString(): string; // String
}
