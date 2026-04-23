/**
 * A DzSceneData implementation that allows arbitrary data to be associated with the scene.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/simplescenedata_dz
 */
declare class DzSimpleSceneData extends DzSceneData {

    /* Constructors */

    /**
     * @param name string
     * @param persistent boolean
     */
    constructor(name: string, persistent?: boolean);

    /* Methods */

    /**
     * @returns DzSettings The settings owned by this scene data item.
     */
    getSettings(): DzSettings;
}
