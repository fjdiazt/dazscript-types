/**
 * A DzSourceFileData implementation that stores the source file path and group name for a geometry.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/geomsourcefiledata_dz
 */
declare class DzGeomSourceFileData extends DzSourceFileData {

    /* Properties */

    /**
     * The name of the group that the geometry came from.
     */
    groupName: string; // String

    /* Constructors */

    /**
     * @param filePath string
     * @param groupName string
     */
    constructor(filePath?: string, groupName?: string);
}
