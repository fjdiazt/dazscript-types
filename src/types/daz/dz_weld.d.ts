/**
 * Represents a welding operation between bone geometries.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/weld_dz
 */
declare class DzWeld extends DzBase {

    /* Constructors */

    constructor();

    /**
     * @param weldBone DzBone
     * @param targetBone DzBone
     */
    constructor(weldBone: DzBone, targetBone: DzBone);

    /* Methods */

    /**
     * @returns DzBone The bone whose geometry is not modified by the weld operation.
     */
    getTargetBone(): DzBone;

    /**
     * @returns DzBone The bone whose geometry is modified by the weld operation.
     */
    getWeldBone(): DzBone;

    /**
     * Sets the bone that will be welded to - the welding operation will not modify this bone's geometry, only the normals on the border.
     * @param targetBone DzBone
     */
    setTargetBone(targetBone: DzBone): void;

    /**
     * Sets the bone that will be welded - the welding operation will move boundary points in this bone's geometry, and recalculate the affected normals.
     * @param weldBone DzBone
     */
    setWeldBone(weldBone: DzBone): void;

    /* Signals */

    /**
     * Emitted when the target bone has changed.
     */
    targetBoneChanged: ISignal<void>;

    /**
     * Emitted when the weld bone has changed.
     */
    weldBoneChanged: ISignal<void>;
}
