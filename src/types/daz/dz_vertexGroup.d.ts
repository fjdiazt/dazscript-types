/**
 * A collection of vertices.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/vertexgroup_dz
 */
declare class DzVertexGroup extends DzIndexList {

    /* Methods */

    /**
     * @returns DzGeometry The owner of the group.
     */
    getOwner(): DzGeometry;
}
