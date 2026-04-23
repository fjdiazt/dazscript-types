/**
 * Script wrapper for QPushButton.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/pushbutton_dz
 */
declare class DzPushButton extends DzButton {

    /* Properties */

    /**
     * Holds whether or not the button has the auto-default feature and responds to the [Enter] key when it has the focus; true by default for buttons that have a DzDialog parent, otherwise false.
     */
    autoDefault: boolean; // Boolean

    /**
     * Holds the style that the button is drawn in.
     * @since 4.6.4.76
     */
    buttonStyle: number; // ButtonStyle

    /**
     * Holds the format that the button text is drawn in; DzWidget::AlignmentFlags and DzWidget::TextFlags OR'd together for the button label.
     * @since 4.6.4.76
     */
    buttonTextFormat: number; // Number

    /**
     * Holds whether or not the button will collapse empty space reserved for various parts of the button.
     * @since 4.11.0.43
     */
    collapseEmptySpace: boolean; // Boolean

    /**
     * Holds whether or not the button is the default button; false by default.
     */
    default: boolean; // Boolean

    /**
     * Holds whether or not to display the arrow for this button.
     * @since 4.6.4.76
     */
    displayDownArrow: boolean; // Boolean

    /**
     * Holds the name of the pixel metric used to define the size of the arrow on this button (if any).
     * @since 4.6.4.76
     */
    downArrowMetric: string; // String

    /**
     * Holds the name of the primitive element used to draw the arrow on this button (if any).
     * @since 4.6.4.76
     */
    downArrowPrimitive: string; // String

    /**
     * Holds the elide mode to be used for the text on this button.
     * @since 4.6.4.76
     */
    elideMode: number; // DzWidget::TextElideMode

    /**
     * Holds whether or not the border is disabled; false by default.
     */
    flat: boolean; // Boolean

    /**
     * Holds the name of the pixel metric used to define the size of the icon on this button (if any).
     * @since 4.6.4.76
     */
    iconMetric: string; // String

    /**
     * Holds text used for size hint; if empty current text is used.
     * @since 4.12.0.75
     */
    minimumWidthText: string; // String

    /**
     * Holds the name of the primitive element used to draw this button.
     * @since 4.6.4.76
     */
    primitive: string; // String

    /**
     * Holds whether or not the button will be sized based on the size of its icon (if any). If true, this overrides iconMetric.
     * @since 4.11.0.38
     */
    sizedFromIcon: boolean; // Boolean

    /**
     * Holds the name of the text style used to draw the label on this button.
     * @since 4.6.4.76
     */
    textStyle: string; // String

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of ButtonStyle.
     */
    static BCommand: number;

    /**
     * DAZ enum member of ButtonStyle.
     */
    static BTool: number;

    /**
     * DAZ enum member of ButtonStyle.
     */
    static BDefault: number;

    /**
     * DAZ enum member of ButtonStyle.
     */
    static BBasic: number;

    /**
     * DAZ enum member of ButtonStyle.
     */
    static BNoFrame: number;

    /**
     * DAZ enum member of ButtonStyle.
     */
    static BCustom: number;

    /* Constructors */

    /**
     * @param parent DzWidget
     */
    constructor(parent: DzWidget);

    /* Methods */

    /**
     * Sets whether or not the button is a toggle button.
     * @param yesNo boolean
     */
    setCheckable(yesNo: boolean): void;

    /**
     * Deprecated
     * @param yesNo boolean
     */
    setToggleButton(yesNo: boolean): void;

    /* Signals */

    /**
     * Emitted when buttonStyle on this button has changed.
     * @param style number - The new button style.
     * @since 4.6.4.76
     */
    buttonStyleChanged: ISignal<number>;

    /**
     * Emitted when buttonTextFormat on this button has changed.
     * @param format number - The new text format.
     * @since 4.6.4.76
     */
    buttonTextFormatChanged: ISignal<number>;

    /**
     * Emitted when collapseEmptySpace on this button has changed.
     * @param onOff boolean - The new state.
     * @since 4.11.0.43
     */
    collapseEmptySpaceChanged: ISignal<boolean>;

    /**
     * Emitted when displayDownArrow on this button has changed.
     * @param displayArrow boolean - The new state.
     * @since 4.6.4.76
     */
    displayDownArrowChanged: ISignal<boolean>;

    /**
     * Emitted when downArrowMetric on this button has changed.
     * @param name string - The name of the new down arrow metric.
     * @since 4.6.4.76
     */
    downArrowMetricChanged: ISignal<string>;

    /**
     * Emitted when downArrowPrimitive on this button has changed.
     * @param name string - The name of the new primitive.
     * @since 4.6.4.76
     */
    downArrowPrimitiveChanged: ISignal<string>;

    /**
     * Emitted when elideMode on this button has changed.
     * @param mode number - The new elide mode.
     * @since 4.6.4.76
     */
    elideModeChanged: ISignal<number>;

    /**
     * Emitted when iconMetric on this button has changed.
     * @param name string - The name of the new icon metric.
     * @since 4.6.4.76
     */
    iconMetricChanged: ISignal<string>;

    /**
     * Emitted when primitive on this button has changed.
     * @param name string - The name of the new primitive.
     * @since 4.6.4.76
     */
    primitiveChanged: ISignal<string>;

    /**
     * Emitted when sizedFromIcon on this button has changed.
     * @param onOff boolean - The new state.
     * @since 4.11.0.38
     */
    sizedFromIconChanged: ISignal<boolean>;

    /**
     * Emitted when textStyle on this button has changed.
     * @param name string - The name of the new text style.
     * @since 4.6.4.76
     */
    textStyleChanged: ISignal<string>;
}
