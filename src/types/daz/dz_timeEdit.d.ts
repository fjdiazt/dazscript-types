/**
 * Script wrapper for QTimeEdit.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/timeedit_dz
 */
declare class DzTimeEdit extends DzDateTimeEdit {

    /* Properties */

    /**
     * Holds the maximum value for the widget.
     */
    max: Date;

    /**
     * Holds the minimum value for the widget.
     */
    min: Date;

    /**
     * Holds the separator used by the widget.
     */
    separator: string; // String

    /* Constructors */

    /**
     * @param parent DzWidget
     */
    constructor(parent: DzWidget);
}
