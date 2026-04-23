/**
 * A 4 x 3 transformation matrix.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/matrix3_dz
 */
declare class DzMatrix3 extends Object {

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
     * @param m12 number
     * @param m22 number
     * @param m32 number
     * @param m13 number
     * @param m23 number
     * @param m33 number
     * @param m14 number
     * @param m24 number
     * @param m34 number
     */
    constructor(m11: number, m21: number, m31: number, m12: number, m22: number, m32: number, m13: number, m23: number, m33: number, m14: number, m24: number, m34: number);

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
     * @param mat DzMatrix3
     */
    constructor(mat: DzMatrix3);

    /* Methods */

    /**
     * @returns number The determinant of the upper 3×3 part of this matrix.
     * @since 4.9.2.18
     */
    det3(): number; // Number

    /**
     * @returns DzMatrix3 The inverse of this matrix.
     */
    inverse(): DzMatrix3;

    /**
     * Sets this matrix to be identity.
     */
    makeIdentity(): void;

    /**
     * @returns DzMatrix4 This matrix as a 4×4 matrix.
     * @since 4.9.2.18
     */
    matrix4(): DzMatrix4;

    /**
     * Calculates the multiplication of this matrix by the given matrix.
     * @param mat DzMatrix3 - The matrix to multiply by.
     * @returns DzMatrix3 The result of the multiplication.
     */
    multiply(mat: DzMatrix3): DzMatrix3;

    /**
     * Multiplies this matrix by given column vector, giving column vector result.
     * @param vec DzVec3 - The vector to multiplying this matrix by.
     * @returns DzVec3 The result of multiplying the given vector through this matrix.
     */
    multMatrixVec(vec: DzVec3): DzVec3;

    /**
     * Transforms the given vector through this matrix.
     * @param vec DzVec3 - The vector to transform through this matrix.
     * @returns DzVec3
     * @since 4.9.2.18
     */
    multVec(vec: DzVec3): DzVec3;

    /**
     * Sets the rotation part of this matrix to zero.
     */
    noRot(): void;

    /**
     * Sets the scale part of this matrix to unity.
     */
    noScale(): void;

    /**
     * Sets the translation part of this matrix to zero.
     */
    noTrans(): void;

    /**
     * Test for orthogonal 3×3 sub-matrix (orthonormal rows).
     * @returns boolean
     */
    orthogonal(): boolean; // Boolean

    /**
     * Orthogonalize this matrix.
     */
    orthogonalize(): void;

    /**
     * Accumulate rotation by pre-multiplying.
     * @param rot DzQuat - The quaternion at which to rotate.
     */
    preRotate(rot: DzQuat): void;

    /**
     * Accumulate rotation around the X axis by pre-multiplying.
     * @param radians number - The radians at which to rotate.
     */
    preRotateX(radians: number): void;

    /**
     * Accumulate rotation around the Y axis by pre-multiplying.
     * @param radians number - The radians at which to rotate.
     */
    preRotateY(radians: number): void;

    /**
     * Accumulate rotation around the Z axis by pre-multiplying.
     * @param radians number - The radians at which to rotate.
     */
    preRotateZ(radians: number): void;

    /**
     * Accumulate a translation by pre-multiplying.
     * @param vec DzVec3 - The point at which to translate.
     */
    preTranslate(vec: DzVec3): void;

    /**
     * Accumulate rotation (by post-multiplying).
     * @param rot DzQuat - The quaternion at which to rotate
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
     * @returns DzVec3 The i'th row of this matrix.
     * @since 4.9.2.18
     */
    row(i: number): DzVec3;

    /**
     * Accumulates a scale along an arbitrary axis (by post-multiplying).
     * @param scale number - The scale to apply.
     * @param direction DzVec3
     * @param affectTrans boolean - Whether or not to affect the transform rows.
     * @since 4.9.2.18
     */
    scale(scale: number, direction: DzVec3, affectTrans?: boolean): void;

    /**
     * @param vec DzVec3
     * @param affectTrans boolean
     */
    scale(vec: DzVec3, affectTrans?: boolean): void;

    /**
     * @param scale number
     * @param affectTrans boolean
     */
    scale(scale: number, affectTrans?: boolean): void;

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
     * @returns string A string representation of this matrix in the form "[ m11, m21, m31, m12, m22, m32, m13, m23, m33, m14, m24, m34 ]".
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
