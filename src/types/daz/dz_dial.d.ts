/**
 * Script wrapper for QDial.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/dial_dz
 */
declare class DzDial extends DzWidget {

    /* Properties */

    /**
     * The current line step
     */
    lineStep: number; // Number

    /**
     * Holds the maximum value for the widget.
     */
    max: number; // Number

    /**
     * Holds the minimum value for the widget.
     */
    min: number; // Number

    /**
     * Holds whether to show notches.
     */
    notchesVisible: boolean; // Boolean

    /**
     * Holds the current notch size. (Read Only)
     */
    notchSize: number; // Number

    /**
     * Holds the target number of pixels between notches.
     */
    notchTarget: number; // Number

    /**
     * The current page step
     */
    pageStep: number; // Number

    /**
     * Holds whether to track the cursor, true by default.
     */
    tracking: boolean; // Boolean

    /**
     * Holds the value represented by the widget.
     */
    value: number; // Number

    /**
     * Holds whether the arrow can be rotated 360 degrees, or if some space is left at the bottom.
     */
    wrapping: boolean; // Boolean

    /* Constructors */

    /**
     * @param parent DzWidget
     */
    constructor(parent: DzWidget);

    /* Signals */

    /**
     * Emitted when dial moves, passes the new value of the dial.
     * @param value number
     */
    dialMoved: ISignal<number>;

    /**
     * Emitted when the dial is pressed by the user.
     */
    dialPressed: ISignal<void>;

    /**
     * Emitted when the dial is released by the user.
     */
    dialReleased: ISignal<void>;

    /**
     * Emitted when the value of the dial changes, passes the new value.
     * @param value number
     */
    valueChanged: ISignal<number>;
}
