/**
 * A divider bar that handles resize events and toggling automatically.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/dynamicdividerwgt_dz
 */
declare class DzDynamicDividerWgt extends DzWidget {

    /* Properties */

    /**
     * Holds the actual position of the divider bar as a percentage in decimal format (0.5 = 50%).
     */
    actualDividerPercent: number; // Number

    /**
     * Holds the orientation of the divider bar.
     */
    dividerOrientation: number; // DividerOrientation

    /**
     * Holds the type of divider bar used.
     */
    dividerType: number; // BarStyle

    /**
     * Holds the margin surrounding this object.
     */
    margin: number; // Number

    /**
     * Holds whether the divider bar is currently minimized.
     */
    minimized: boolean; // Boolean

    /**
     * Holds whether the divider bar can be moved by dragging.
     */
    moveDisabled: boolean; // Boolean

    /**
     * Holds the preferred position of the divider bar as a percentage in decimal format (0.5 = 50%).
     */
    preferredDividerPercent: number; // Number

    /**
     * Holds the preferred widget type.
     */
    preferredWidget: number; // WidgetType

    /**
     * Holds the preferred extent of the widget. This value is only used if the value of DzDynamicDividerWgt::preferredWidget is not DzDividerBar::WTNone.
     */
    preferredWidgetExtent: number; // Number

    /**
     * Holds the spacing between the widgets and the divider bar.
     */
    spacing: number; // Number

    /**
     * Holds the direction the toggle bar will be minimized when clicked.
     */
    toggleDirection: number; // WidgetType

    /**
     * Holds whether the divider bar can be minimized when clicked.
     */
    toggleEnabled: boolean; // Boolean

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of BarStyle.
     */
    static BSFull: number;

    /**
     * DAZ enum member of BarStyle.
     */
    static BSSemi: number;

    /**
     * DAZ enum member of BarStyle.
     */
    static BSThin: number;

    /**
     * DAZ enum member of DividerOrientation.
     */
    static DOHorizontal: number;

    /**
     * DAZ enum member of DividerOrientation.
     */
    static DOVertical: number;

    /**
     * DAZ enum member of ResizeType.
     */
    static RTStretchFirst: number;

    /**
     * DAZ enum member of ResizeType.
     */
    static RTStretchSecond: number;

    /**
     * DAZ enum member of ResizeType.
     */
    static RTStretchBoth: number;

    /**
     * DAZ enum member of WidgetType.
     */
    static WTLeftOrTop: number;

    /**
     * DAZ enum member of WidgetType.
     */
    static WTRightOrBottom: number;

    /**
     * DAZ enum member of WidgetType.
     */
    static WTBoth: number;

    /**
     * DAZ enum member of WidgetType.
     */
    static WTNone: number;

    /* Constructors */

    /**
     * @param parent DzWidget
     */
    constructor(parent: DzWidget);

    /**
     * @param parent DzWidget
     * @param firstChild DzWidget
     * @param secondChild DzWidget
     */
    constructor(parent: DzWidget, firstChild: DzWidget, secondChild: DzWidget);

    /* Methods */

    /**
     * Moves the divider distance pixels from the current location. If the new location will cause the divider to be displayed in an invalid location (based on minimum size requirements of the widgets), it will be moved and displayed as close as possible to the desired location.
     * @param distance number - The distance in pixels from the current location.
     */
    moveDivider(distance: number): void;

    /**
     * Sets the divider bar to be used for this object
     * @param orientation number - The orientation of the divider bar.
     * @param barStyle number
     */
    setDividerBar(orientation: number, barStyle: number): void;

    /**
     * Sets the left (or top) widget, depending on the orientation.
     * @param first DzWidget - The widget to be used in the left (or top) position. (should not be undefined)
     */
    setFirstWidget(first: DzWidget): void;

    /**
     * Sets the preferred extent (width or height depending on orientation) for the specified widget. If this extent cannot be used (usually due to minimum size constraints) then the divider will be positioned as close as possible to the preferred extent.
     * @param widget number - The widget that should be sized. Values other than WTLeftOrTop or WTRightOrBottom will cause this method to have no effect.
     * @param extent number - The extent to be set for the widget.
     * @since 4.9.0.33
     */
    setPreferredWidgetExtent(widget: number, extent: number): void;

    /**
     * Sets the right (or bottom) widget, depending on the orientation.
     * @param second DzWidget - The widget to be used in the right (or bottom) position. (should not be undefined)
     */
    setSecondWidget(second: DzWidget): void;

    /**
     * Toggles the widget to the specified minimized state, if needed.
     * @param minimized boolean - Whether the divider should be minimized or not.
     * @since 4.9.0.33
     */
    setToggleState(minimized: boolean): void;

    /**
     * Swaps the left (or top) and right (or bottom) widget.
     * @since 4.9.0.33
     */
    swapFirstAndSecondWidgets(): void;

    /**
     * Toggles the widget in the direction specified by toggleDirection. If toggling is disabled, this method has no effect. If either the first or second widget is undefined, this method will also have no effect.
     */
    toggleWidget(): void;
}
