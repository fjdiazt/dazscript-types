/**
 * DAZScript color widget.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/colorwgt_dz
 */
declare class DzColorWgt extends DzWidget {

    /* Properties */

    /**
     * Holds the default float value of the widget. 4.11.0.371
     */
    defaultFloatColorValue: DzFloatColor;

    /**
     * Holds the deafult value of the widget.
     * @since 4.11.0.371
     */
    defaultValue: Color;

    /**
     * Holds whether values of each component are displayed as integers in the [0, 255] range, or as floating point values. true by default.
     * @since 4.11.0.218
     */
    displayAsInt: boolean; // Boolean

    /**
     * Holds whether the float color value of this control is clamped.
     * @since 4.11.0.218
     */
    floatClamped: boolean; // Boolean

    /**
     * Holds the current float value of the widget.
     * @since 4.11.0.218
     */
    floatColorValue: DzFloatColor;

    /**
     * Holds the maximum allowable value for any component of a float color.
     * @since 4.11.0.218
     */
    floatMax: number; // Number

    /**
     * Holds the minimum allowable value for any component of a float color.
     * @since 4.11.0.218
     */
    floatMin: number; // Number

    /**
     * Holds whether the widget is considered to have an 'indeterminate' or 'Multiple' value. false by default.
     */
    indeterminate: boolean; // Boolean

    /**
     * Holds whether the value is currently being edited. (Read Only)
     * @since 4.11.0.218
     */
    isEditing: boolean; // Boolean

    /**
     * Holds whether the default value is restorable if the user holds the [Alt] key when clicked.
     * @since 4.11.0.371
     */
    restorable: boolean; // Boolean

    /**
     * Holds the current value of the widget.
     */
    value: Color;

    /* Constructors */

    /**
     * @param parent DzWidget
     */
    constructor(parent: DzWidget);

    /* Signals */

    /**
     * Emitted when the color is changed.
     * @param color Color - The new color value of the control.
     */
    colorChanged: ISignal<Color>;

    /**
     * Emitted when an editing operation on the slider ends - e.g. the user finishes spinning a color field.
     */
    editEnd: ISignal<void>;

    /**
     * Emitted when an editing operation on the widget begins - e.g. the user starts spinning a color field.
     */
    editStart: ISignal<void>;

    /**
     * Emitted when the color is changed.
     * @param color DzFloatColor - The new float color value of the control.
     * @since 4.11.0.218
     */
    floatColorChanged: ISignal<DzFloatColor>;
}
