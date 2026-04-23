/**
 * Implements “Alternate Geometry” in legacy figures.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/legacyalternategeometry_dz
 */
declare class DzLegacyAlternateGeometry extends DzElement {

    /* Methods */

    /**
     * @returns DzBone The bone that this alternate geometry is associated with (if any), otherwise null.
     */
    getBone(): DzBone;

    /**
     * @returns DzLegacyFigure The figure that this alternate geometry is associated with (if any), otherwise null.
     */
    getFigure(): DzLegacyFigure;

    /**
     * @returns DzObject The object that is associated with this alternate geometry (if any), otherwise null.
     */
    getObject(): DzObject;
}
