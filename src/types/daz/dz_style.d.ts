/**
 * Class that defines the look and feel of the GUI.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/style_dz
 */
declare class DzStyle extends QObject {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of PixmapMode.
     */
    static Normal: number;

    /**
     * DAZ enum member of PixmapMode.
     */
    static Disabled: number;

    /**
     * DAZ enum member of PixmapMode.
     */
    static Active: number;

    /**
     * DAZ enum member of PixmapMode.
     */
    static Selected: number;

    /**
     * DAZ enum member of PixmapState.
     */
    static On: number;

    /**
     * DAZ enum member of PixmapState.
     */
    static Off: number;

    /* Static Methods */

    /**
     * Compiles a text-based style definition and its images into a single binary style definition file.
     * @param infile string - The name of the XML-based text style description.
     * @param outfile string - The name of the DAZ Studio style definition file to create.
     * @returns DzError true on success, otherwise false.
     */
    static compileStyleDefinition(infile: string, outfile: string): DzError;

    /**
     * @param name string - The name of the pixel metric to find the index of.
     * @returns number The index of the pixel metric with the given name (if any), otherwise -1.
     */
    static findPixelMetric(name: string): number; // Number

    /**
     * @param name string - The name of the primitive element to find the index of.
     * @returns number The index of the primitive element with the given name (if any), otherwise -1.
     */
    static findPrimitiveElement(name: string): number; // Number

    /**
     * @param name string - The name of the standard pixmap to find the index of.
     * @returns number The index of the standard pixmap with the given name (if any), otherwise -1.
     */
    static findStandardPixmap(name: string): number; // Number

    /**
     * @param name string - The name of the style hint to find the index of.
     * @returns number The index of the style hint with the given name (if any), otherwise -1.
     */
    static findStyleHint(name: string): number; // Number

    /**
     * @param name string - The name of the text style to find the index of.
     * @returns number The index of the text style with the given name (if any), otherwise -1.
     */
    static findTextStyle(name: string): number; // Number

    /**
     * @returns number The number of pixel metrics.
     */
    static getNumPixelMetrics(): number; // Number

    /**
     * @returns number The number of primitive elements.
     */
    static getNumPrimitiveElements(): number; // Number

    /**
     * @returns number The number of standard pixmaps.
     */
    static getNumStandardPixmaps(): number; // Number

    /**
     * @returns number The number of style hints.
     */
    static getNumStyleHints(): number; // Number

    /**
     * @returns number The number of text styles.
     */
    static getNumTextStyles(): number; // Number

    /**
     * @param which number - The index of the pixel metric to get the name of.
     * @returns string The name of the pixel metric at the given index (if any), otherwise an empty string.
     */
    static getPixelMetricName(which: number): string; // String

    /**
     * @param which number - The index of the primitive element to get the name of.
     * @returns string The name of the primitive element at the given index (if any), otherwise an empty string.
     */
    static getPrimitiveElementName(which: number): string; // String

    /**
     * @param which number - The index of the standard pixmap to get the name of.
     * @returns string The name of the standard pixmap at the given index (if any), otherwise an empty string.
     */
    static getStandardPixmapName(which: number): string; // String

    /**
     * @param which number - The index of the style hint to get the name of.
     * @returns string The name of the style hint at the given index (if any), otherwise an empty string.
     */
    static getStyleHintName(which: number): string; // String

    /**
     * @param which number - The index of the text style to get the name of.
     * @returns string The name of the text style at the given index (if any), otherwise an empty string.
     */
    static getTextStyleName(which: number): string; // String

    /* Methods */

    /**
     * @param className string
     * @param mode number
     * @param state number
     * @returns Pixmap A pixmap from the DzAction with the class name.
     */
    actionPixmap(className: string, mode: number, state: number): Pixmap;

    /**
     * @param name string
     * @returns number The index of the given interface color, or -1 if the color cannot be found.
     */
    findInterfaceColor(name: string): number; // Number

    /**
     * @param name string
     * @returns number The index of the given interface number, or -1 if the number cannot be found.
     * @since 4.9.0.43
     */
    findInterfaceNumber(name: string): number; // Number

    /**
     * @param name string
     * @returns Color The current value of the given interface color.
     */
    getInterfaceColor(name: string): Color;

    /**
     * @param which number
     * @returns Color The current value of the given interface color.
     */
    getInterfaceColor(which: number): Color;

    /**
     * @param which number
     * @returns Color The default value of the given interface color.
     */
    getInterfaceColorDefault(which: number): Color;

    /**
     * @param which number
     * @returns string A user-readable description for the given interface color.
     */
    getInterfaceColorDescription(which: number): string; // String

    /**
     * @param which number
     * @param settings DzSettings
     * @since 4.9.0.43
     */
    getInterfaceColorDisplaySettings(which: number, settings: DzSettings): void;

    /**
     * @param which number
     * @returns string The name for the given interface color.
     */
    getInterfaceColorName(which: number): string; // String

    /**
     * @param name string
     * @param defaultValue number
     * @returns number The current value of the given interface number.
     * @since 4.9.0.43
     */
    getInterfaceNumber(name: string, defaultValue?: number): number; // Number

    /**
     * @param which number
     * @returns number The current value of the given interface number.
     * @since 4.9.0.43
     */
    getInterfaceNumber(which: number): number; // Number

    /**
     * @param which number
     * @returns number The default value of the given interface number.
     * @since 4.9.0.43
     */
    getInterfaceNumberDefault(which: number): number; // Number

    /**
     * @param which number
     * @returns string A user-readable description for the given interface number.
     * @since 4.9.0.43
     */
    getInterfaceNumberDescription(which: number): string; // String

    /**
     * @param which number
     * @param settings DzSettings
     * @since 4.9.0.43
     */
    getInterfaceNumberDisplaySettings(which: number, settings: DzSettings): void;

    /**
     * @param which number
     * @returns string The name for the given interface number.
     * @since 4.9.0.43
     */
    getInterfaceNumberName(which: number): string; // String

    /**
     * @returns number The number of user-customizable interface colors for the current style
     */
    getNumInterfaceColors(): number; // Number

    /**
     * @returns number The number of user-customizable interface numbers for the current style.
     * @since 4.9.0.43
     */
    getNumInterfaceNumbers(): number; // Number

    /**
     * @returns string The name of the currently active style definition.
     */
    getStyleDefinition(): string; // String

    /**
     * @param metricName string - The name of the pixel metric to get; the name must match one of the pixel metric names from the style definition.
     * @returns number The value of the pixel metric with the given name.
     */
    pixelMetric(metricName: string): number; // Number

    /**
     * Sets the given interface color to the new value. The interface will not automatically update - the current style must be reloaded before the changes will take affect.
     * @param which number
     * @param color Color
     */
    setInterfaceColor(which: number, color: Color): void;

    /**
     * Sets the given interface number to the new value. The interface will not automatically update - the current style must be reloaded before the changes will take affect.
     * @param which number
     * @param value number
     * @since 4.9.0.43
     */
    setInterfaceNumber(which: number, value: number): void;

    /**
     * @param button QAbstractButton - The button to set the icon on.
     * @param pixmapName string - The name of the pixmap to convert into an icon; the name must match one of the standard pixmap names from the style definition.
     * @returns boolean true if the button icon was set, otherwise false.
     */
    setStyledIcon(button: QAbstractButton, pixmapName: string): boolean; // Boolean

    /**
     * @param pixmapName string - The name of the pixmap to get; the name must match one of the standard pixmap names from the style definition.
     * @returns Pixmap A pixmap with the given name (if any), otherwise NULL.
     */
    standardPixmap(pixmapName: string): Pixmap;

    /**
     * @param styleName string - The name of the text style to get the font of; the name must match one of the text style names from the style definition.
     * @returns Font The font of the text style with the given name.
     */
    textStyle(styleName: string): Font;

    /**
     * @param styleName string - The name of the text style to get the color of; the name must match one of the text style names from the style definition.
     * @returns Color The color of the text style with the given name.
     */
    textStyleColor(styleName: string): Color;

    /* Signals */

    /**
     * Emitted when the interface color settings have changed.
     */
    interfaceColorsChanged: ISignal<void>;

    /**
     * Emitted when the interface number settings have changed.
     */
    interfaceNumbersChanged: ISignal<void>;
}
