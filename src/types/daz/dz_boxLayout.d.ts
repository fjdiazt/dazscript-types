/**
 * Script wrapper for QBoxLayout.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/boxlayout_dz
 */
declare class DzBoxLayout extends DzLayout {

    /* Properties */

    /**
     * Holds the direction of the layout.
     */
    direction: number; // Direction

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of Direction.
     */
    static LeftToRight: number;

    /**
     * DAZ enum member of Direction.
     */
    static RightToLeft: number;

    /**
     * DAZ enum member of Direction.
     */
    static TopToBottom: number;

    /**
     * DAZ enum member of Direction.
     */
    static BottomToTop: number;

    /* Constructors */

    /**
     * @param parent DzWidget | DzLayout
     * @param direction number
     */
    constructor(parent: DzWidget | DzLayout, direction?: number);

    /**
     * @param parent DzWidget
     * @param direction number
     */
    constructor(parent: DzWidget, direction?: number);

    /**
     * @param parent DzLayout
     * @param direction number
     */
    constructor(parent: DzLayout, direction?: number);

    /* Methods */

    /**
     * Adds a layout to the items managed by this layout.
     * @param item DzLayout - The layout to add.
     * @param stretch number - The stretch factor to set.
     */
    addLayout(item: DzLayout, stretch?: number): void;

    /**
     * Adds a non-stretchable space to the end of this layout.
     * @param size number - The size to set.
     */
    addSpacing(size: number): void;

    /**
     * Adds a stretchable space to the end of this layout.
     * @param stretch number - The stretch factor to set.
     */
    addStretch(stretch?: number): void;

    /**
     * Limits the minimum dimension perpendicular to the direction of this layout.
     * @param size number - The size to set.
     */
    addStrut(size: number): void;

    /**
     * Adds a widget to the items managed by this layout.
     * @param item DzWidget - The widget to add.
     * @param stretch number - The stretch factor to set.
     */
    addWidget(item: DzWidget, stretch?: number): void;

    /* Undocumented Augment Members */

    /** @undocumented */
    setGeometry(p0: number, p1: number, p2: number, p3: number): any;
}
