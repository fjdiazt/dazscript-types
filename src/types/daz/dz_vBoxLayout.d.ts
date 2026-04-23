/**
 * Script wrapper for QVBoxLayout.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/vboxlayout_dz
 */
declare class DzVBoxLayout extends DzBoxLayout {

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
