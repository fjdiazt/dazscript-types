/**
 * Implements a parametrically defined (“legacy”) figure.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/legacyfigure_dz
 */
declare class DzLegacyFigure extends DzSkeleton {

    /* Constructors */

    constructor();

    /* Static Methods */

    /**
     * Attempts to convert a simple node with geometry into a figure.
     * @param srcNode DzNode - The source node to convert.
     * @param rootBoneName string - The name to assign to the root bone of the figure.
     * @param inheritSkeleton boolean - If true (default) and srcNode is parented to a bone, the skeleton that bone belongs to and the bone hierarchy up to that bone will be used to create the new figure.
     * @returns DzLegacyFigure The figure produced by the conversion (if any), otherwise null.
     */
    static convertPropToFigure(srcNode: DzNode, rootBoneName: string, inheritSkeleton?: boolean): DzLegacyFigure;

    /* Methods */

    /**
     * Adds an alternate geometry to this figure for the specified bone - if one does not already exist.
     * @param bone DzBone - The bone to add an alternate geometry for.
     * @param createAlais boolean
     * @returns DzLegacyAlternateGeometry The alternate geometry associated with the specified bone.
     */
    addAlternateGeometry(bone: DzBone, createAlais?: boolean): DzLegacyAlternateGeometry;

    /**
     * Adds a welding operation to this figure.
     * @param weld DzWeld - The welding operation to add to the figure. This figure takes ownership of the object and deletes it when it is no longer used.
     */
    addWeld(weld: DzWeld): void;

    /**
     * @param bone DzBone - The bone to check.
     * @returns boolean true if the specified bone is used by a weld operation, otherwise false.
     */
    boneUsedByWeld(bone: DzBone): boolean; // Boolean

    /**
     * Clears vertex maps - causes vertex weights to be recalculated.
     */
    clearVertexMaps(): void;

    /**
     * Attempts to find an alternate geometry on this figure for a specified bone.
     * @param bone DzBone - The bone to find an alternate geometry for.
     * @returns DzLegacyAlternateGeometry The alternate geometry associated with the specified bone (if any), otherwise null.
     */
    findAlternateGeometry(bone: DzBone): DzLegacyAlternateGeometry;

    /**
     * Attempts to find an alternate geometry on this figure for a bone with the specified name.
     * @param boneName string - The name of the bone to find an alternate geometry for.
     * @returns DzLegacyAlternateGeometry The alternate geometry associated with the specified bone (if any), otherwise null.
     */
    findAlternateGeometry(boneName: string): DzLegacyAlternateGeometry;

    /**
     * @param target DzBone - The bone whose geometry is not modified to find the weld operation for.
     * @returns DzWeld The weld operation for the specified bone (if any), otherwise null.
     */
    findWeldByTargetBone(target: DzBone): DzWeld;

    /**
     * @param weldBone DzBone - The bone whose geometry is modified to find the weld operation for.
     * @returns DzWeld The weld operation for the specified bone (if any), otherwise null.
     */
    findWeldByWeldBone(weldBone: DzBone): DzWeld;

    /**
     * @param index number - The index of the alternate geometry to retrieve.
     * @returns DzLegacyAlternateGeometry The alternate geometry at the specified index (if valid), otherwise null.
     */
    getAlternateGeometry(index: number): DzLegacyAlternateGeometry;

    /**
     * @returns number The number of alternate geometries for this figure.
     */
    getNumAlternateGeometries(): number; // Number

    /**
     * @returns number The number of welding operations for this figure.
     */
    getNumWelds(): number; // Number

    /**
     * @param which number - The index of the welding operation to retrieve.
     * @returns DzWeld The welding operation at the specified index (if valid), otherwise null.
     */
    getWeld(which: number): DzWeld;

    /**
     * Invalidates vertex maps - causes vertex weights to be recalculated.
     */
    invalidateVertexMaps(): void;

    /**
     * Removes all welding operations from this figure.
     */
    removeAllWelds(): void;

    /**
     * @param alt DzLegacyAlternateGeometry - The alternate geometry to remove.
     * @returns boolean true if the alternate geometry is removed, otherwise false.
     */
    removeAlternateGeometry(alt: DzLegacyAlternateGeometry): boolean; // bool

    /**
     * Removes a welding operation from this figure.
     * @param weld DzWeld - The welding operation to remove.
     */
    removeWeld(weld: DzWeld): void;

    /* Signals */

    /**
     * Emitted when the list of weld operations for this skeleton has changed.
     */
    weldListChanged: ISignal<void>;
}
