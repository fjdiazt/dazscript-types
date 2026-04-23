/**
 * Script wrapper for QCheckBox.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/checkbox_dz
 */
declare class DzCheckBox extends DzButton {

    /* Properties */

    /**
     * Holds whether or not the checkbox is a tri-state checkbox. The default is two-state (e.g. tri-state is false).
     */
    tristate: boolean; // Boolean

    /* Constructors */

    /**
     * @param parent DzWidget
     */
    constructor(parent: DzWidget);
}
