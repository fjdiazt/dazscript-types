/**
 * Represents a sorted list of indices that is constructable from script.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/scriptindexlist_dz
 */
declare class DzScriptIndexList extends DzIndexList {

    /* Constructors */

    /**
     * @param list any[] | DzIndexList
     */
    constructor(list: any[] | DzIndexList);

    constructor();

    /**
     * @param list any[]
     */
    constructor(list: any[]);

    /**
     * @param list DzIndexList
     */
    constructor(list: DzIndexList);

    /**
     * @param name string
     */
    constructor(name: string);

    /* Methods */

    /**
     * Sets the indices in this list.
     * @param list any[] - The list of indices to set.
     */
    setIndices(list: any[]): void;
}
