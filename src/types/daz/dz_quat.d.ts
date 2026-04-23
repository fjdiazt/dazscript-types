/**
 * A quaternion rotation class.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/quat_dz
 */
declare class DzQuat extends Object {

    /* Properties */

    /**
     * Holds the w component of this quaternion.
     */
    w: number; // Number

    /**
     * Holds the x component of this quaternion.
     */
    x: number; // Number

    /**
     * Holds the y component of this quaternion.
     */
    y: number; // Number

    /**
     * Holds the z component of this quaternion.
     */
    z: number; // Number

    /* Constructors */

    /**
     * @param quat string | DzQuat
     */
    constructor(quat: string | DzQuat);

    /**
     * @param mtx DzMatrix3 | DzMatrix4
     */
    constructor(mtx: DzMatrix3 | DzMatrix4);

    constructor();

    /**
     * @param quat string
     */
    constructor(quat: string);

    /**
     * @param quat DzQuat
     */
    constructor(quat: DzQuat);

    /**
     * @param mtx DzMatrix3
     */
    constructor(mtx: DzMatrix3);

    /**
     * @param mtx DzMatrix4
     */
    constructor(mtx: DzMatrix4);

    /**
     * @param order DzRotationOrder
     * @param angles DzVec3
     */
    constructor(order: DzRotationOrder, angles: DzVec3);

    /**
     * @param axis DzVec3
     * @param radians number
     */
    constructor(axis: DzVec3, radians: number);

    /**
     * @param x number
     * @param y number
     * @param z number
     * @param w number
     * @param normalize boolean
     */
    constructor(x: number, y: number, z: number, w: number, normalize?: boolean);

    /* Methods */

    /**
     * @param quat DzQuat - The quaternion to be compared.
     * @param tolerance number - The maximum allowable deviation.
     * @returns boolean true if this quaternion is considered equal to quat, otherwise false.
     * @since 4.9.3.121
     */
    equals(quat: DzQuat, tolerance?: number): boolean; // Boolean

    /**
     * @returns number The angle of rotation for this quaternion (in radians).
     * @since 4.10.0.110
     */
    getAngleOfRotation(): number; // Number

    /**
     * @returns DzVec3 The axis of rotation for this quaternion.
     * @since 4.10.0.110
     */
    getAxisOfRotation(): DzVec3;

    /**
     * @param axis1 number - The first axis in the rotation order.
     * @param axis2 number - The second axis in the rotation order.
     * @param axis3 number - The third axis in the rotation order.
     * @returns DzVec3 The Euler angles representing this rotation given the rotation order.
     */
    getValue(axis1: number, axis2: number, axis3: number): DzVec3;

    /**
     * @returns DzVec3 The X axis that corresponds to the local coordinate frame of this rotation (the rotated coordinate axes).
     */
    getXAxis(): DzVec3;

    /**
     * @returns DzVec3 The Y axis that corresponds to the local coordinate frame of this rotation (the rotated coordinate axes).
     */
    getYAxis(): DzVec3;

    /**
     * @returns DzVec3 The Z axis that corresponds to the local coordinate frame of this rotation (the rotated coordinate axes).
     */
    getZAxis(): DzVec3;

    /**
     * @returns DzQuat A null (identity) quaternion with components set to (0.0, 0.0, 0.0, 1.0).
     * @since 4.14.1.27
     */
    identity(): DzQuat;

    /**
     * @returns DzQuat The inverse of the rotation.
     */
    inverse(): DzQuat;

    /**
     * Changes a rotation to be its inverse.
     */
    invert(): void;

    /**
     * @returns boolean true if the quaternion is an identity rotation.
     */
    isIdentity(): boolean; // Boolean

    /**
     * Makes sure that this rotation lies on the same side of the hypersphere as the one given. If not, it is altered to do so.
     * @param quat DzQuat
     */
    makeClosest(quat: DzQuat): void;

    /**
     * Sets the quaternion to the identity quaternion. Zero this rotation.
     */
    makeIdentity(): void;

    /**
     * @param quat DzQuat - The quaternion to multiply by.
     * @returns DzQuat The result of post-multiplying this quaternion by quat.
     */
    multiply(quat: DzQuat): DzQuat;

    /**
     * Multiplies the given vector by the matrix of this rotation. Vector is forced to unit length.
     * @param vec DzVec3 - The vector to multiply.
     * @returns DzVec3 The result of multiplying the given vector through the rotation, as a unit vector.
     */
    multVec(vec: DzVec3): DzVec3;

    /**
     * Normalizes a rotation quaternion to unit 4D length
     */
    normalize(): void;

    /**
     * Keep the axis the same. Multiply the angle of rotation by the amount 'scaleFactor'
     * @param val number
     */
    scaleAngle(val: number): void;

    /**
     * Sets the value to a rotation of radians around one of the primary axes (axis == 0:x, 1:y, 2:z)
     * @param axis number
     * @param radians number
     */
    setValue(axis: number, radians: number): void;

    /**
     * Sets the quaternion to an Euler rotation of angles around each axis given the rotation order.
     * @param axis1 number - The first axis in the rotation order.
     * @param axis2 number - The second axis in the rotation order.
     * @param axis3 number - The third axis in the rotation order.
     * @param angles DzVec3 - The angles of each axis, where axis == 1:x, 2:y, 3:z.
     */
    setValue(axis1: number, axis2: number, axis3: number, angles: DzVec3): void;

    /**
     * Sets the value based on the angle and axis of rotation.
     * @param axis DzVec3
     * @param radians number
     */
    setValue(axis: DzVec3, radians: number): void;

    /**
     * Sets the values of this quaternion.
     * @param x number - The x component.
     * @param y number - The y component.
     * @param z number - The z component.
     * @param w number - The w component.
     * @param normalize boolean
     */
    setValue(x: number, y: number, z: number, w: number, normalize?: boolean): void;

    /**
     * Preforms spherical linear interpolation between two quaternions.
     * @param rot0 DzQuat - The from rotation.
     * @param rot1 DzQuat - The to rotation.
     * @param t number - The value to interpolate.
     * @returns DzQuat As t goes from 0 to 1, the value goes from rot0 to rot1.
     * @since 4.9.3.121
     */
    slerp(rot0: DzQuat, rot1: DzQuat, t: number): DzQuat;

    /**
     * @returns string A string representation of this quaternion in the form "[ x, y, z, w ]".
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
