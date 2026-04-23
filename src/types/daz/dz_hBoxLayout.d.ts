/**
 * Script wrapper for QHBoxLayout.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/hboxlayout_dz
 */
declare class DzHBoxLayout extends DzBoxLayout {

    /* Constructors */

    /**
     * @param parent DzWidget | DzLayout
     */
    constructor(parent: DzWidget | DzLayout);

    /**
     * @param parent DzWidget
     */
    constructor(parent: DzWidget);

    /**
     * @param parent DzLayout
     */
    constructor(parent: DzLayout);
}
