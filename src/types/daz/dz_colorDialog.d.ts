/**
 * Script wrapper for QColorDialog.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/colordialog_dz
 */
declare class DzColorDialog extends QObject {

    /* Methods */

    /**
     * @param i number
     * @returns Color The i'th custom color in the color picker.
     */
    customColor(i: number): Color;

    /**
     * @returns number The number of custom colors in the color picker.
     */
    customCount(): number; // Number

    /**
     * Shows a color picker dialog to the user.
     * @param initial Color - The color that the dialog will start with.
     * @returns Color The color selected by the user.
     */
    getColor(initial?: Color): Color;

    /**
     * Set the i'th custom color in the color picker.
     * @param i number
     * @param c Color
     */
    setCustomColor(i: number, c: Color): void;

    /**
     * Set the i'th standard color in the color picker.
     * @param i number
     * @param c Color
     */
    setStandardColor(i: number, c: Color): void;
}
