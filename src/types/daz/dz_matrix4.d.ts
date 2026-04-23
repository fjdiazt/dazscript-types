/**
 * A 4 x 4 transformation matrix.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/matrix4_dz
 */
declare class DzMatrix4 extends Object {

    /* Properties */

    /**
     * Whether or not this matrix is identity
     */
    isIdentity: boolean; // Boolean

    /**
     * The value of this matrix at [1, 1]
     */
    m11: number; // Number

    /**
     * The value of this matrix at [1, 2]
     */
    m12: number; // Number

    /**
     * The value of this matrix at [1, 3]
     */
    m13: number; // Number

    /**
     * The value of this matrix at [1, 4]
     */
    m14: number; // Number

    /**
     * The value of this matrix at [2, 1]
     */
    m21: number; // Number

    /**
     * The value of this matrix at [2, 2]
     */
    m22: number; // Number

    /**
     * The value of this matrix at [2, 3]
     */
    m23: number; // Number

    /**
     * The value of this matrix at [2, 4]
     */
    m24: number; // Number

    /**
     * The value of this matrix at [3, 1]
     */
    m31: number; // Number

    /**
     * The value of this matrix at [3, 2]
     */
    m32: number; // Number

    /**
     * The value of this matrix at [3, 3]
     */
    m33: number; // Number

    /**
     * The value of this matrix at [3, 4]
     */
    m34: number; // Number

    /**
     * The value of this matrix at [4, 1]
     */
    m41: number; // Number

    /**
     * The value of this matrix at [4, 2]
     */
    m42: number; // Number

    /**
     * The value of this matrix at [4, 3]
     */
    m43: number; // Number

    /**
     * The value of this matrix at [4, 4]
     */
    m44: number; // Number

    /* Constructors */

    /**
     * @param initIdentity boolean
     */
    constructor(initIdentity?: boolean);

    /**
     * @param mtx string
     */
    constructor(mtx: string);

    /**
     * @param m11 number
     * @param m21 number
     * @param m31 number
     * @param m41 number
     * @param m12 number
     * @param m22 number
     * @param m32 number
     * @param m42 number
     * @param m13 number
     * @param m23 number
     * @param m33 number
     * @param m43 number
     * @param m14 number
     * @param m24 number
     * @param m34 number
     * @param m44 number
     */
    constructor(m11: number, m21: number, m31: number, m41: number, m12: number, m22: number, m32: number, m42: number, m13: number, m23: number, m33: number, m43: number, m14: number, m24: number, m34: number, m44: number);

    /**
     * @param xAxis DzVec3
     * @param yAxis DzVec3
     * @param zAxis DzVec3
     */
    constructor(xAxis: DzVec3, yAxis: DzVec3, zAxis: DzVec3);

    /**
     * @param rot DzQuat
     */
    constructor(rot: DzQuat);

    /**
     * @param mat DzMatrix4
     */
    constructor(mat: DzMatrix4);

    /* Methods */

    /**
     * @returns DzMatrix4 The inverse of this matrix.
     */
    inverse(): DzMatrix4;

    /**
     * Test and choose the best inverse for this matrix.
     * @since 4.9.2.18
     */
    invert(): void;

    /**
     * Sets this matrix to be identity.
     */
    makeIdentity(): void;

    /**
     * @returns DzMatrix3 The value of this matrix as a DzMatrix3.
     * @since 4.9.2.18
     */
    matrix3(): DzMatrix3;

    /**
     * Calculates the multiplication of this matrix by the given matrix.
     * @param mat DzMatrix4 - The matrix to multiply by.
     * @returns DzMatrix4 The result of the multiplication.
     * @since 4.14.1.36
     */
    multiply(mat: DzMatrix4): DzMatrix4;

    /**
     * Multiplies matrix by given column vector, giving column vector result.
     * @param vec DzVec3 - The vector to multiply this matrix by.
     * @returns DzVec3 The result of multiplying the given vector through this matrix.
     */
    multMatrixVec(vec: DzVec3): DzVec3;

    /**
     * Multiplies given row vector by matrix, giving row vector result.
     * @param vec DzVec3 - The vector to multiply this matrix by.
     * @returns DzVec3 The result of multiplying the given vector through this matrix.
     */
    multVecMatrix(vec: DzVec3): DzVec3;

    /**
     * Test for orthogonal 3×3 sub-matrix (orthonormal rows).
     * @returns boolean
     * @since 4.6.4.98
     */
    orthogonal(): boolean; // Boolean

    /**
     * Accumulates a uniform scale by pre-multiplying.
     * @param scale number - The scale to apply.
     */
    preScale(scale: number): void;

    /**
     * Accumulates a general scale by pre-multiplying.
     * @param vec DzVec3
     */
    preScale(vec: DzVec3): void;

    /**
     * Accumulates a scale along an arbitrary axis by pre-multiplying.
     * @param scale number - The scale to apply.
     * @param direction DzVec3 - The direction to scale.
     * @since 4.9.2.18
     */
    preScale(scale: number, direction: DzVec3): void;

    /**
     * Shears the matrix along the x and y axis (by pre-multiplying).
     * @param xShear number - The value to shear along the x axis.
     * @param yShear number - The value to shear along the y axis.
     * @since 4.9.2.18
     */
    preShearXY(xShear: number, yShear: number): void;

    /**
     * Shears the matrix along the x and z axis (by pre-multiplying).
     * @param xShear number - The value to shear along the x axis.
     * @param zShear number - The value to shear along the z axis.
     * @since 4.9.2.18
     */
    preShearXZ(xShear: number, zShear: number): void;

    /**
     * Shears the matrix along the y and z axis (by pre-multiplying).
     * @param yShear number - The value to shear along the y axis.
     * @param zShear number - The value to shear along the z axis.
     * @since 4.9.2.18
     */
    preShearYZ(yShear: number, zShear: number): void;

    /**
     * Accumulate a translation by pre-multiplying.
     * @param vec DzVec3 - The point at which to translate.
     */
    preTranslate(vec: DzVec3): void;

    /**
     * Accumulate rotation (by post-multiplying).
     * @param rot DzQuat - The quaternion at which to rotate.
     */
    rotate(rot: DzQuat): void;

    /**
     * Accumulate rotation around the X axis (by post-multiplying).
     * @param radians number - The radians at which to rotate.
     */
    rotateX(radians: number): void;

    /**
     * Accumulate rotation around the Y axis (by post-multiplying).
     * @param radians number - The radians at which to rotate.
     */
    rotateY(radians: number): void;

    /**
     * Accumulate rotation around the Z axis (by post-multiplying).
     * @param radians number - The radians at which to rotate.
     */
    rotateZ(radians: number): void;

    /**
     * @param i number
     * @returns DzVec3 The first three elements of the i'th row of this matrix.
     * @since 4.9.2.18
     */
    row(i: number): DzVec3;

    /**
     * Accumulates a scale along an arbitrary axis (by post-multiplying).
     * @param scale number - The scale to apply.
     * @param direction DzVec3 - The direction to scale.
     * @since 4.9.2.18
     */
    scale(scale: number, direction: DzVec3): void;

    /**
     * Accumulates a general scale (by post-multiplying).
     * @param vec DzVec3 - The scale to apply.
     */
    scale(vec: DzVec3): void;

    /**
     * Accumulates a uniform scale (by post-multiplying).
     * @param scale number - The scale to apply.
     */
    scale(scale: number): void;

    /**
     * Sets the first three elements of the i'th row of this matrix.
     * @param i number - The row to set.
     * @param vec DzVec3 - The values for the first three elements.
     */
    setRow(i: number, vec: DzVec3): void;

    /**
     * Sets matrix to translate by given vector, leaving rotation as is.
     * @param vec DzVec3 - The point at which to translate.
     */
    setTrans(vec: DzVec3): void;

    /**
     * Shears this matrix along the x and y axis (by post-multiplying).
     * @param xShear number - The value to shear along the x axis.
     * @param yShear number - The value to shear along the y axis.
     * @since 4.9.2.18
     */
    shearXY(xShear: number, yShear: number): void;

    /**
     * Shears this matrix along the x and z axis (by post-multiplying).
     * @param xShear number - The value to shear along the x axis.
     * @param zShear number - The value to shear along the z axis.
     * @since 4.9.2.18
     */
    shearXZ(xShear: number, zShear: number): void;

    /**
     * Shears this matrix along the y and z axis (by post-multiplying).
     * @param yShear number - The value to shear along the y axis.
     * @param zShear number - The value to shear along the z axis.
     * @since 4.9.2.18
     */
    shearYZ(yShear: number, zShear: number): void;

    /**
     * @returns string A string representation of this matrix in the form "[ m11, m21, m31, m41, m12, m22, m32, m42, m13, m23, m33, m43, m14, m24, m34, m44 ]".
     */
    toString(): string; // String

    /**
     * @returns number The trace of this matrix.
     * @since 4.9.2.18
     */
    trace(): number; // Number

    /**
     * Accumulate a translation (by post-multiplying).
     * @param vec DzVec3 - The point at which to translate.
     */
    translate(vec: DzVec3): void;

    /**
     * @returns DzMatrix4 The transpose of this matrix.
     * @since 4.9.2.18
     */
    transpose(): DzMatrix4;
}
