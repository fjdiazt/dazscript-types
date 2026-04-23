/**
 * An oriented 3D box.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/orientedbox3_dz
 */
declare class DzOrientedBox3 extends Object {

    /* Properties */

    /**
     * The box in 'local space' (without transforms applied)
     */
    localBox: DzBox3;

    /**
     * The transform matrix of the box in 3D space
     */
    transform: DzMatrix3;

    /* Constructors */

    /**
     * @param box string | DzOrientedBox3
     */
    constructor(box: string | DzOrientedBox3);

    constructor();

    /**
     * @param box string
     */
    constructor(box: string);

    /**
     * @param box DzOrientedBox3
     */
    constructor(box: DzOrientedBox3);

    /**
     * @param transform DzMatrix3
     */
    constructor(transform: DzMatrix3);

    /**
     * @param box DzBox3
     * @param transform DzMatrix3
     */
    constructor(box: DzBox3, transform: DzMatrix3);

    /**
     * @param box DzBox3
     * @param translation DzVec3
     * @param rotation DzQuat
     * @param scale DzVec3
     */
    constructor(box: DzBox3, translation: DzVec3, rotation: DzQuat, scale: DzVec3);

    /**
     * @param translation DzVec3
     * @param rotation DzQuat
     * @param scale DzVec3
     */
    constructor(translation: DzVec3, rotation: DzQuat, scale: DzVec3);

    /* Methods */

    /**
     * @returns string A string representation of this oriented box in the form "[[ minX, minY, minZ ], [ maxX, maxY, maxZ ], [ m11, m21, m31, m12, m22, m32, m13, m23, m33, m14, m24, m34 ]]".
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
