/**
 * The base component of dForm deformers.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/dformbase_dz
 */
declare class DzDFormBase extends DzNode {

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * @returns DzDForm The dForm for this base.
     */
    getDForm(): DzDForm;
}
