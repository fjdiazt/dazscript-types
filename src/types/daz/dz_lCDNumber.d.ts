/**
 * Script wrapper for QLCDNumber.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/lcdnumber_dz
 */
declare class DzLCDNumber extends DzWidget {

    /* Properties */

    /**
     * Holds the display mode of the number.
     */
    mode: number; // Mode

    /**
     * Holds the number of digits displayed in the widget.
     */
    numDigits: number; // Number

    /**
     * Holds the style of the number.
     */
    segmentStyle: number; // SegmentStyle

    /**
     * Holds whether or not the decimal point is drawn between digits; takes up a digit of its own if false.
     */
    smallDecimalPoint: boolean; // Boolean

    /**
     * Holds the value of the number.
     */
    value: number; // Number

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of Mode.
     */
    static Hex: number;

    /**
     * DAZ enum member of Mode.
     */
    static Dec: number;

    /**
     * DAZ enum member of Mode.
     */
    static Oct: number;

    /**
     * DAZ enum member of Mode.
     */
    static Bin: number;

    /**
     * DAZ enum member of Mode.
     */
    static HEX: number;

    /**
     * DAZ enum member of Mode.
     */
    static DEC: number;

    /**
     * DAZ enum member of Mode.
     */
    static OCT: number;

    /**
     * DAZ enum member of Mode.
     */
    static BIN: number;

    /**
     * DAZ enum member of SegmentStyle.
     */
    static Outline: number;

    /**
     * DAZ enum member of SegmentStyle.
     */
    static Filled: number;

    /**
     * DAZ enum member of SegmentStyle.
     */
    static Flat: number;

    /* Constructors */

    /**
     * @param parent DzWidget
     */
    constructor(parent: DzWidget);

    /* Methods */

    /**
     * Displays the number specified.
     * @param number number - The decimal value to display.
     * @since 4.15.0.21
     */
    displayFloat(number: number): void;

    /**
     * Displays the number specified.
     * @param number number - The integer value to display.
     * @since 4.15.0.21
     */
    displayInt(number: number): void;

    /**
     * Displays the number represented by the specified string.
     * @param number string - The number to display. Digits and symbols that can be shown: 0/O, 1, 2, 3, 4, 5/S, 6, 7, 8, 9/g, minus, decimal point, A, B, C, D, E, F, h, H, L, o, P, r, u, U, Y, colon, degree sign (specified as single quote in the string) and space. Spaces are substituted for illegal characters.
     * @since 4.15.0.21
     */
    displayString(number: string): void;

    /**
     * Deprecated
     * @param number string
     */
    display(number: string): void;

    /**
     * Deprecated
     * @param number number
     */
    display(number: number): void;

    /* Signals */

    /**
     * Emitted when the number is set to a value that exceeds the number of digits.
     */
    overflow: ISignal<void>;
}
