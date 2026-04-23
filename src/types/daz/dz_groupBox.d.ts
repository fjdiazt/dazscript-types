/**
 * Script wrapper for Q3GroupBox.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/groupbox_dz
 */
declare class DzGroupBox extends DzWidget {

    /* Properties */

    /**
     * Holds the alignment of the group box title.
     */
    alignment: number; // DzWidget::AlignmentFlags

    /**
     * Holds whether or not the group box is checkable.
     */
    checkable: boolean; // Boolean

    /**
     * Holds whether or not the group box is checked.
     */
    checked: boolean; // Boolean

    /**
     * Holds the number of columns in the group box.
     */
    columns: number; // Number

    /**
     * Holds whether or not the group box is painted flat (without a frame).
     */
    flat: boolean; // Boolean

    /**
     * Holds the margin between items inside the group box and the frame.
     */
    insideMargin: number; // Number

    /**
     * Holds the spacing between items inside the group box.
     */
    insideSpacing: number; // Number

    /**
     * Holds the orientation of the group box.
     */
    orientation: number; // DzWidget::Orientation

    /**
     * Holds the title of the group box.
     */
    title: string; // String

    /* Constructors */

    /**
     * @param parent DzWidget
     */
    constructor(parent: DzWidget);

    /* Methods */

    /**
     * Adds an empty cell at the next free position. If space is greater than 0, the empty cell uses space as its fixed width (if Orientation is Horizontal) or height (if Orientation is Vertical).
     * @param space number
     */
    addSpace(space: number): void;

    /* Signals */

    /**
     * Emitted when the DzGroupBox's check box is clicked. Passes the new state of the check box.
     * @param checked boolean
     */
    clicked: ISignal<boolean>;

    /**
     * Emitted when the DzGroupBox's check box is toggled. Passes the new state of the check box.
     * @param onOff boolean
     */
    toggled: ISignal<boolean>;

    /* Undocumented Augment Members */

    /** @undocumented */
    margin: number;

    /** @undocumented */
    spacing: number;
}
