/**
 * The base class for custom data items that can be associated with the scene or elements of the scene.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/customdata_dz
 */
declare class DzCustomData extends DzBase {

    /* Methods */

    /**
     * @returns boolean true if this data item should be saved to file when the owning object is saved, otherwise false.
     */
    isPersistent(): boolean; // Boolean
}
