/**
 * A DzElementData implementation that allows arbitrary data to be associated with an element of the scene.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/simpleelementdata_dz
 */
declare class DzSimpleElementData extends DzElementData {

    /* Constructors */

    /**
     * @param name string
     * @param persistent boolean
     */
    constructor(name: string, persistent?: boolean);

    /* Methods */

    /**
     * @returns DzSettings The settings owned by this element data item.
     */
    getSettings(): DzSettings;

    /* Undocumented Augment Members */

    /** @undocumented */
    getName(): any;

    /** @undocumented */
    iskindof(p0: string): any;
}
