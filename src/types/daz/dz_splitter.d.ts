/**
 * Script wrapper for QSplitter.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/splitter_dz
 */
declare class DzSplitter extends DzWidget {

    /* Properties */

    /**
     * Holds whether the children widgets of the splitter are collapsible.
     */
    childrenCollapsible: boolean; // Boolean

    /**
     * Holds the width of the splitter handle.
     */
    handleWidth: number; // Number

    /**
     * Holds whether resizing is opaque.
     */
    opaqueResize: boolean; // Boolean

    /**
     * Holds the orientation of the splitter.
     */
    orientation: number; // DzWidget::Orientation

    /* Constructors */

    /**
     * @param parent DzWidget
     */
    constructor(parent: DzWidget);

    /* Methods */

    /**
     * @param widget DzWidget
     */
    addWidget(widget: DzWidget): void;

    /**
     * @returns number
     */
    count(): number; // Number

    /**
     * @param widget DzWidget
     * @returns number
     */
    indexOf(widget: DzWidget): number; // Number

    /**
     * @param index number
     * @param widget DzWidget
     */
    insertWidget(index: number, widget: DzWidget): void;

    /**
     * @param index number
     * @returns boolean
     */
    isCollapsible(index: number): boolean; // Boolean

    /**
     * @param state ByteArray
     * @returns boolean
     */
    restoreState(state: ByteArray): boolean; // Boolean

    /**
     * @returns ByteArray
     */
    saveState(): ByteArray;

    /**
     * @param index number
     * @param collapse boolean
     */
    setCollapsible(index: number, collapse: boolean): void;

    /**
     * @param index number
     * @param stretch number
     */
    setStretchFactor(index: number, stretch: number): void;

    /**
     * @param index number
     * @returns DzWidget
     */
    widget(index: number): DzWidget;
}
