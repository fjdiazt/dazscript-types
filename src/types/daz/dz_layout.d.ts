/**
 * Script wrapper for QLayout.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/layout_dz
 */
declare class DzLayout extends QObject {

    /* Properties */

    /**
     * Holds the common width (in pixels) of the outside border between the items in this layout and the parent. If the width of the boarder is not common for each edge, this value will be -1. Setting this value sets a common width for each edge.
     */
    margin: number; // Number

    /**
     * Holds the spacing (in pixels) between the items in this layout.
     */
    spacing: number; // Number

    /**
     * Deprecated
     */
    autoAdd: boolean; // Boolean

    /* Methods */

    /**
     * Adds a widget to the items managed by this layout.
     * @param item DzWidget - The widget to add.
     */
    addWidget(item: DzWidget): void;

    /**
     * @returns QLayout The wrapped QLayout.
     */
    getLayout(): QLayout;

    /* Undocumented Augment Members */

    /** @undocumented */
    constructor(parent: DzWidget);

    /** @undocumented */
    constructor(parent: DzLayout);

    /** @undocumented */
    itemAt(index: number): DzWidget;
}
