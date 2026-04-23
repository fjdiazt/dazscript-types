/**
 * Base class for all slider widgets.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/slider_dz
 */
declare class DzSlider extends DzWidget {

    /* Properties */

    /**
     * Holds whether the slider obeys its limits. false by default.
     */
    clamped: boolean; // Boolean

    /**
     * Holds whether editing the slider text causes the edit field to consume the full height/width of the slider. false by default.
     */
    fullLengthEdit: boolean; // Boolean

    /**
     * Holds whether the value is currently being edited. (Read Only)
     */
    isEditing: boolean; // Boolean

    /**
     * Holds the label text for the slider.
     */
    label: string; // String

    /**
     * Holds whether the slider's label is visible.
     */
    labelVisible: boolean; // Boolean

    /**
     * Holds whether the default value is restorable if the user holds the [Alt] key when clicked.
     */
    restorable: boolean; // Boolean

    /**
     * Holds the sensitivity of the slider.
     */
    sensitivity: number; // Number

    /**
     * Holds the text of the slider. (Read Only)
     */
    text: string; // String

    /**
     * Holds whether the slider text is editable by the user. false by default.
     */
    textEditable: boolean; // Boolean

    /**
     * Holds whether the slider text is visible to the user. true by default.
     */
    textVisible: boolean; // Boolean

    /* Methods */

    /**
     * Steps this slider by its sensitivity value.
     * @param positive boolean - If true, the slider value will be incremented by its sensitivity value. If false, the slider value will be decremented by its sensitivity value.
     */
    step(positive: boolean): void;

    /* Signals */

    /**
     * Emitted when the user cancels an edit of the slider.
     */
    editCancelled: ISignal<void>;

    /**
     * Emitted when the user releases the slider.
     */
    editEnd: ISignal<void>;

    /**
     * Emitted when the user starts dragging the slider.
     */
    editStart: ISignal<void>;
}
