/**
 * Script wrapper for QScrollArea.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/scrollarea_dz
 */
declare class DzScrollArea extends DzWidget {

    /* Properties */

    /**
     * Holds the alignment of the widget.
     */
    alignment: number; // DzWidget::AlignmentFlags

    /**
     * Holds the size of the viewport as if the scroll bars had no valid scrolling range. (Read Only)
     * @since 4.9.3.93
     */
    maximumViewportSize: Size;

    /**
     * Holds whether the scroll area should resize the view widget.
     */
    widgetResizable: boolean; // Boolean

    /* Constructors */

    /**
     * @param parent DzWidget
     */
    constructor(parent: DzWidget);

    /* Methods */

    /**
     * Scrolls the contents of the scroll area so that childWidget is visible inside the viewport with margins specified in pixels by xmargin and ymargin. If the specified point cannot be reached, the contents are scrolled to the nearest valid position.
     * @param x number - The x coordinate.
     * @param y number - The y coordinate.
     * @param xmargin number - The margin in the horizontal direction.
     * @param ymargin number - The margin in the vertical direction.
     */
    ensureVisible(x: number, y: number, xmargin?: number, ymargin?: number): void;

    /**
     * Scrolls the contents of the scroll area so that childWidget is visible inside the viewport with margins specified in pixels by xmargin and ymargin. If the specified point cannot be reached, the contents are scrolled to the nearest valid position.
     * @param childWidget DzWidget - The child to scroll to.
     * @param xmargin number - The margin in the horizontal direction.
     * @param ymargin number - The margin in the vertical direction.
     */
    ensureWidgetVisible(childWidget: DzWidget, xmargin?: number, ymargin?: number): void;

    /**
     * Hides the frame around the scroll area.
     */
    hideFrame(): void;

    /**
     * Sets whether to display the horizontal scrollbar.
     * @param onOff boolean - If true, the horizontal scrollbar is always displayed. If false, the horizontal scrollbar is never displayed.
     */
    setHorizontalScrollbarDisplay(onOff: boolean): void;

    /**
     * Sets whether to display the vertical scrollbar.
     * @param onOff boolean - If true, the vertical scrollbar is always displayed. If false, the vertical scrollbar is never displayed.
     */
    setVerticalScrollbarDisplay(onOff: boolean): void;

    /**
     * Sets the contents of the scroll area to a widget.
     * @param widget DzWidget - The widget to set as a child of the scroll area; this widget will be destroyed when the scroll area is deleted or when a new widget is set.
     */
    setWidget(widget: DzWidget): void;
}
