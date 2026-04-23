/**
 * A floating point (decimal) slider widget.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/floatslider_dz
 */
declare class DzFloatSlider extends DzSlider {

    /* Properties */

    /**
     * Holds the default value of the slider.
     * @since 4.11.0.369
     */
    defaultValue: number; // Number

    /**
     * Holds whether the slider text is displayed as a percentage value. false by default.
     */
    displayAsPercent: boolean; // Boolean

    /**
     * If true, the slider is considered to have an 'indeterminate' or '<?>' value. false by default.
     */
    indeterminate: boolean; // Boolean

    /**
     * Holds the maximum value of the slider. Any attempt to set this to a value that is less than the current min will fail.
     */
    max: number; // Number

    /**
     * Holds the minimum value of the slider. Any attempt to set this to a value that is greater than the current max will fail.
     */
    min: number; // Number

    /**
     * Holds the current value of the slider.
     */
    value: number; // Number

    /* Constructors */

    /**
     * @param parent DzWidget
     */
    constructor(parent: DzWidget);

    /* Signals */

    /**
     * Emitted when the value of the slider changes, passes the new value.
     * @param value number
     */
    valueChanged: ISignal<number>;
}
