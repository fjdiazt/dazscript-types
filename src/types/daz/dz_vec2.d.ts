/**
 * A two dimensional floating-point-based vector.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/vec2_dz
 */
declare class DzVec2 extends Object {

    /* Properties */

    /**
     * Holds the x component of this vector.
     */
    x: number; // Number

    /**
     * Holds the y component of this vector.
     */
    y: number; // Number

    /* Constructors */

    /**
     * @param vec string | DzInt2
     */
    constructor(vec: string | DzInt2);

    /**
     * @param vec string | DzVec2
     */
    constructor(vec: string | DzVec2);

    /**
     * @param vec DzInt2 | DzVec2
     */
    constructor(vec: DzInt2 | DzVec2);

    constructor();

    /**
     * @param vec string
     */
    constructor(vec: string);

    /**
     * @param vec DzInt2
     */
    constructor(vec: DzInt2);

    /**
     * @param vec DzVec2
     */
    constructor(vec: DzVec2);

    /**
     * @param vals any[]
     */
    constructor(vals: any[]);

    /**
     * @param x number
     * @param y number
     */
    constructor(x: number, y: number);

    /* Methods */

    /**
     * Sets the value of each component to its respective absolute value.
     */
    abs(): void;

    /**
     * @param vec DzVec2 - The vector to add to this vector.
     * @returns DzVec2 A vector that is the result of adding vec to this vector.
     */
    add(vec: DzVec2): DzVec2;

    /**
     * @returns number The average of each component of this vector.
     * @since 4.9.3.118
     */
    average(): number; // Number

    /**
     * Clamps each component of this vector.
     * @param min number - The minimum value.
     * @param max number - The maximum value.
     * @since 4.9.3.118
     */
    clamp(min: number, max: number): void;

    /**
     * @param min number - The minimum value.
     * @param max number - The maximum value.
     * @returns DzVec2 A copy of this vector where each component has been clamped to min and max.
     * @since 4.9.3.118
     */
    clamped(min: number, max: number): DzVec2;

    /**
     * @param max number - The maximum value.
     * @returns DzVec2 A copy of this vector where each component has been clamped to max.
     * @since 4.9.3.118
     */
    clampedMax(max: number): DzVec2;

    /**
     * @param min number - The minimum value.
     * @returns DzVec2 A copy of this vector where each component has been clamped to min.
     * @since 4.9.3.118
     */
    clampedMin(min: number): DzVec2;

    /**
     * Clamps the maximum value for each component of this vector.
     * @param max number - The maximum value.
     * @since 4.9.3.118
     */
    clampMax(max: number): void;

    /**
     * Clamps the minimum value for each component of this vector.
     * @param min number - The minimum value.
     * @since 4.9.3.118
     */
    clampMin(min: number): void;

    /**
     * @param vec DzVec2 - The target vector.
     * @returns DzVec2 The cross product of this vector and another vector.
     */
    cross(vec: DzVec2): DzVec2;

    /**
     * @param vec DzVec2 - The vector to divide by this vector.
     * @returns DzVec2 A vector that is the result of dividing vec by this vector.
     */
    divide(vec: DzVec2): DzVec2;

    /**
     * @param vec DzVec2 - The target vector.
     * @returns number The dot product of this vector and another vector.
     */
    dot(vec: DzVec2): number; // Number

    /**
     * Tests if this vector and another vector are considered equal, within a tolerance.
     * @param vec DzVec2 - The vector to compare this vector against.
     * @param tolerance number - The amount of deviation allowed.
     * @returns boolean true if all components are within tolerance of the components of the given vector.
     * @since 4.9.3.118
     */
    equals(vec: DzVec2, tolerance?: number): boolean; // Boolean

    /**
     * @param vec DzVec2 - The target vector.
     * @returns number The angle between this vector and a target vector. The sign of the angle is such that, when applied, it will swing this vector to the target vector.
     */
    getAngleTo(vec: DzVec2): number; // Number

    /**
     * @returns DzVec2 A vector with components set to (1.0, 1.0).
     * @since 4.14.1.27
     */
    identity(): DzVec2;

    /**
     * @returns number The length of this vector.
     */
    length(): number; // Number

    /**
     * @returns number The length of this vector, squared.
     */
    lengthSquared(): number; // Number

    /**
     * Performs a linear interpolation between v1 and v2 based on the value of t.
     * @param t number - The value to evaluate.
     * @param v1 DzVec2
     * @param v2 DzVec2
     * @returns DzVec2 v1 if t = 0.0. v2 if t = 1.0. Values outside the 0.0 ⇐ t ⇐ 1.0 range may also be used to return an extrapolated vector.
     * @since 4.9.3.118
     */
    linearInterp(t: number, v1: DzVec2, v2: DzVec2): DzVec2;

    /**
     * Sets the components of this vector to (1.0, 1.0).
     */
    makeIdentity(): void;

    /**
     * Sets the components of this vector to (0.0, 0.0).
     */
    makeZero(): void;

    /**
     * @param min number - The minimum value.
     * @param max number - The maximum value.
     * @returns DzVec2 A copy of this vector where each component has been modulated by min and max.
     * @since 4.9.3.118
     */
    modulate(min: number, max: number): DzVec2;

    /**
     * Modulates each component of this vector.
     * @param min number - The minimum value.
     * @param max number - The maximum value.
     * @since 4.9.3.118
     */
    modulo(min: number, max: number): void;

    /**
     * @param vec DzVec2 - The vector to multiply by this vector.
     * @returns DzVec2 A vector that is the result of multiplying vec by this vector.
     */
    multiply(vec: DzVec2): DzVec2;

    /**
     * Negates each component of this vector.
     */
    negate(): void;

    /**
     * Modifies this vector to be its unit length.
     */
    normalize(): void;

    /**
     * @returns DzVec2 A copy of this vector that has been normalized.
     */
    normalized(): DzVec2;

    /**
     * Sets this vector to have a specific length in the current direction.
     * @param length number
     */
    setLength(length: number): void;

    /**
     * Sets the value of each component to its respective squared value.
     */
    square(): void;

    /**
     * @param vec DzVec2 - The vector to subtract from this vector.
     * @returns DzVec2 A vector that is the result of subtracting vec from this vector.
     */
    subtract(vec: DzVec2): DzVec2;

    /**
     * @returns string A string representation of this vector in the form "[ x, y ]".
     */
    toString(): string; // String

    /**
     * @returns DzVec2 A vector with components set to (0.0, 0.0).
     * @since 4.14.1.27
     */
    zero(): DzVec2;

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
