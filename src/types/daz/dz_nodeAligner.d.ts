/**
 * Implements the logic of adjusting node positions to align them.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/nodealigner_dz
 */
declare class DzNodeAligner extends QObject {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of AlignX.
     */
    static NoneX: number;

    /**
     * DAZ enum member of AlignX.
     */
    static AlignXLefts: number;

    /**
     * DAZ enum member of AlignX.
     */
    static AlignXCenters: number;

    /**
     * DAZ enum member of AlignX.
     */
    static AlignXOrigins: number;

    /**
     * DAZ enum member of AlignX.
     */
    static AlignXRights: number;

    /**
     * DAZ enum member of AlignX.
     */
    static StackXLefts: number;

    /**
     * DAZ enum member of AlignX.
     */
    static StackXRights: number;

    /**
     * DAZ enum member of AlignX.
     */
    static DistributeXLefts: number;

    /**
     * DAZ enum member of AlignX.
     */
    static DistributeXCenters: number;

    /**
     * DAZ enum member of AlignX.
     */
    static DistributeXOrigins: number;

    /**
     * DAZ enum member of AlignX.
     */
    static DistributeXRights: number;

    /**
     * DAZ enum member of AlignY.
     */
    static NoneY: number;

    /**
     * DAZ enum member of AlignY.
     */
    static AlignYTops: number;

    /**
     * DAZ enum member of AlignY.
     */
    static AlignYCenters: number;

    /**
     * DAZ enum member of AlignY.
     */
    static AlignYOrigins: number;

    /**
     * DAZ enum member of AlignY.
     */
    static AlignYBottoms: number;

    /**
     * DAZ enum member of AlignY.
     */
    static StackYTops: number;

    /**
     * DAZ enum member of AlignY.
     */
    static StackYBottoms: number;

    /**
     * DAZ enum member of AlignY.
     */
    static DistributeYTops: number;

    /**
     * DAZ enum member of AlignY.
     */
    static DistributeYCenters: number;

    /**
     * DAZ enum member of AlignY.
     */
    static DistributeYOrigins: number;

    /**
     * DAZ enum member of AlignY.
     */
    static DistributeYBottoms: number;

    /**
     * DAZ enum member of AlignZ.
     */
    static NoneZ: number;

    /**
     * DAZ enum member of AlignZ.
     */
    static AlignZFronts: number;

    /**
     * DAZ enum member of AlignZ.
     */
    static AlignZCenters: number;

    /**
     * DAZ enum member of AlignZ.
     */
    static AlignZOrigins: number;

    /**
     * DAZ enum member of AlignZ.
     */
    static AlignZBacks: number;

    /**
     * DAZ enum member of AlignZ.
     */
    static StackZFronts: number;

    /**
     * DAZ enum member of AlignZ.
     */
    static StackZBacks: number;

    /**
     * DAZ enum member of AlignZ.
     */
    static DistributeZFronts: number;

    /**
     * DAZ enum member of AlignZ.
     */
    static DistributeZCenters: number;

    /**
     * DAZ enum member of AlignZ.
     */
    static DistributeZOrigins: number;

    /**
     * DAZ enum member of AlignZ.
     */
    static DistributeZBacks: number;

    /**
     * DAZ enum member of UnitSize.
     */
    static UnitsM: number;

    /**
     * DAZ enum member of UnitSize.
     */
    static UnitsCM: number;

    /**
     * DAZ enum member of UnitSize.
     */
    static UnitsYD: number;

    /**
     * DAZ enum member of UnitSize.
     */
    static UnitsFT: number;

    /**
     * DAZ enum member of UnitSize.
     */
    static UnitsIN: number;

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * Adds a node to the list of node to be processed.
     * @param node DzNode - The node to add to the list.
     * @returns DzError DZ_NO_ERROR (0x00000000) if node was sucessfully added to the list, DZ_ALREADY_EXISTS_ERROR (0x00000050) if node is already in the list, and DZ_ILLEGAL_ARGUMENT_ERROR (0x00000060) if node is null.
     */
    addNode(node: DzNode): DzError;

    /**
     * @returns boolean true if the current list of nodes, in conjuction with the current option configuration, can be applied, otherwise false.
     */
    canAlign(): boolean; // Boolean

    /**
     * Clears the list of nodes to be processed.
     */
    clearNodes(): void;

    /**
     * Performs an alignment of nodes, based on the current options set.
     * @returns boolean true if the alignment operation was successful, otherwise false.
     */
    doAlign(): boolean; // Boolean

    /**
     * @returns any[] The list of nodes that alignment operations will be performed on (if any), otherwise an empty list.
     */
    getNodes(): any[]; // Array

    /**
     * @returns number The align operation to perform along the X axis.
     */
    getXAlign(): number; // AlignX

    /**
     * @param size number - The size of units to get.
     * @returns number The number of units along the X axis, in the specified size.
     */
    getXUnits(size?: number): number; // Number

    /**
     * @returns boolean true if using an interval along the X axis is enabled, otherwise false.
     */
    getXUseInterval(): boolean; // Boolean

    /**
     * @returns number The align operation to perform along the Y axis.
     */
    getYAlign(): number; // AlignY

    /**
     * @param size number - The size of units to get.
     * @returns number The number of units along the Y axis, in the specified size.
     */
    getYUnits(size?: number): number; // Number

    /**
     * @returns boolean true if using an interval along the Y axis is enabled, otherwise false.
     */
    getYUseInterval(): boolean; // Boolean

    /**
     * @returns number The align operation to perform along the Z axis.
     */
    getZAlign(): number; // AlignZ

    /**
     * @param size number - The size of units to get.
     * @returns number The number of units along the Z axis, in the specified size.
     */
    getZUnits(size?: number): number; // Number

    /**
     * @returns boolean true if using an interval along the Z axis is enabled, otherwise false.
     */
    getZUseInterval(): boolean; // Boolean

    /**
     * Sets the align operation to perform along the X axis.
     * @param align number - The align operation to perform.
     */
    setXAlign(align: number): void;

    /**
     * Sets the interval to use along the X axis.
     * @param units number - The number of units to set.
     * @param size number - The size of the unit to set.
     */
    setXUnits(units: number, size?: number): void;

    /**
     * Sets whether or not to use an interval along the X axis.
     * @param onOff boolean - If true, the interval is used.
     */
    setXUseInterval(onOff: boolean): void;

    /**
     * Sets the align operation to perform along the Y axis.
     * @param align number - The align operation to perform.
     */
    setYAlign(align: number): void;

    /**
     * Sets the interval to use along the Y axis.
     * @param units number - The number of units to set.
     * @param size number - The size of the unit to set.
     */
    setYUnits(units: number, size?: number): void;

    /**
     * Sets whether or not to use an interval along the Y axis.
     * @param onOff boolean - If true, the interval is used.
     */
    setYUseInterval(onOff: boolean): void;

    /**
     * Sets the align operation to perform along the Z axis.
     * @param align number - The align operation to perform.
     */
    setZAlign(align: number): void;

    /**
     * Sets the interval to use along the Z axis.
     * @param units number - The number of units to set.
     * @param size number - The size of the unit to set.
     */
    setZUnits(units: number, size?: number): void;

    /**
     * Sets whether or not to use an interval along the Z axis.
     * @param onOff boolean - If true, the interval is used.
     */
    setZUseInterval(onOff: boolean): void;

    /* Signals */

    /**
     * Emitted when the state of whether or not alignment is possible has changed.
     * @param onOff boolean
     */
    canAlignChanged: ISignal<boolean>;
}
