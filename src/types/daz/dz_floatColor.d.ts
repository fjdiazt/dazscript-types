/**
 * A 4-component floating point color value.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/floatcolor_dz
 */
declare class DzFloatColor extends Object {

    /* Properties */

    /**
     * Holds the alpha value for the color. Should be in the [0,1] range.
     */
    alpha: string; // String

    /**
     * Holds the blue value for the color. Should be in the [0,1] range.
     */
    blue: string; // String

    /**
     * Holds the green value for the color. Should be in the [0,1] range.
     */
    green: string; // String

    /**
     * Holds the red value for the color. Should be in the [0,1] range.
     */
    red: string; // String

    /* Constructors */

    /**
     * @param color string | any[]
     */
    constructor(color: string | any[]);

    /**
     * @param color string | Color
     */
    constructor(color: string | Color);

    /**
     * @param color string | DzFloatColor
     */
    constructor(color: string | DzFloatColor);

    /**
     * @param color any[] | Color
     */
    constructor(color: any[] | Color);

    /**
     * @param color any[] | DzFloatColor
     */
    constructor(color: any[] | DzFloatColor);

    /**
     * @param color Color | DzFloatColor
     */
    constructor(color: Color | DzFloatColor);

    constructor();

    /**
     * @param color string
     */
    constructor(color: string);

    /**
     * @param r number
     * @param g number
     * @param b number
     * @param a number
     */
    constructor(r: number, g: number, b: number, a?: number);

    /**
     * @param val number
     * @param alpha number
     */
    constructor(val: number, alpha?: number);

    /**
     * @param color any[]
     */
    constructor(color: any[]);

    /**
     * @param color Color
     */
    constructor(color: Color);

    /**
     * @param color DzFloatColor
     */
    constructor(color: DzFloatColor);

    /* Methods */

    /**
     * Modifies the color such that the value of no component is less than min and no more than max.
     * @param min number - The minimum value to allow in each component of the color.
     * @param max number - The maximum value to allow in each component of the color.
     * @param includeAlpha boolean - If true, the alpha component is also clamped.
     */
    clamp(min: number, max: number, includeAlpha?: boolean): void;

    /**
     * @param min number - The minimum value to allow in each component of the color.
     * @param max number - The maximum value to allow in each component of the color.
     * @param includeAlpha boolean - If true, the alpha component is also clamped.
     * @returns DzFloatColor A copy of this color where the value of no component is less than min and no more than max.
     */
    clamped(min: number, max: number, includeAlpha?: boolean): DzFloatColor;

    /**
     * @param max number - The maximum value to allow in each component of the color.
     * @param includeAlpha boolean - If true, the alpha component is also clamped.
     * @returns DzFloatColor A copy of this color where the value of no component is more than max.
     */
    clampedMax(max: number, includeAlpha?: boolean): DzFloatColor;

    /**
     * @param min number - The minimum value to allow in each component of the color.
     * @param includeAlpha boolean - If true, the alpha component is also clamped.
     * @returns DzFloatColor A copy of this color where the value of no component is less than min.
     */
    clampedMin(min: number, includeAlpha?: boolean): DzFloatColor;

    /**
     * Modifies the color such that the value of no component is more than max.
     * @param max number - The maximum value to allow in each component of the color.
     * @param includeAlpha boolean - If true, the alpha component is also clamped.
     */
    clampMax(max: number, includeAlpha?: boolean): void;

    /**
     * Modifies the color such that the value of no component is less than min.
     * @param min number - The minimum value to allow in each component of the color.
     * @param includeAlpha boolean - If true, the alpha component is also clamped.
     */
    clampMin(min: number, includeAlpha?: boolean): void;

    /**
     * @param color DzFloatColor - The color to test this color against.
     * @param tolerance number - The amount of deviation to allow in each component of the color.
     * @returns boolean true if this color is within tolerance of color, otherwise false.
     */
    equals(color: DzFloatColor, tolerance?: number): boolean; // Boolean

    /**
     * Applies a gamma value to the color.
     * @param gamma number - The gamma value to apply.
     * @param doAlpha boolean - If true, applies gamma to the alpha channel of the color.
     */
    gammaColor(gamma?: number, doAlpha?: boolean): void;

    /**
     * @returns Color The RGB value of this color, including its alpha.
     */
    getColor(): Color;

    /**
     * @returns number A suitable grayscale equivalent of this color.
     */
    getGrayscale(): number; // Number

    /**
     * @returns any[] An array consisting of the hue, saturation, lightness and alpha component values.
     */
    getHsl(): any[]; // Array

    /**
     * @returns any[] An array consisting of the hue, saturation, value and alpha component values.
     */
    getHsv(): any[]; // Array

    /**
     * @returns number The maximum value for this color.
     */
    getMaxRGBValue(): number; // Number

    /**
     * @returns number The relative luminance for this color (linearized sRGB), calculated as: Y = 0.212671*R + 0.715160*G + 0.072169*B
     */
    getRelativeLuminance(): number; // Number

    /**
     * @returns any[] An array consisting of the red, green, blue and alpha component values.
     */
    getRgba(): any[]; // Array

    /**
     * Linerizes the color based on a gamma value.
     * @param gamma number - The gamma value to linearize by.
     * @param doAlpha boolean - If true, linearizes the alpha channel of the color by gamma.
     */
    linearizeColor(gamma?: number, doAlpha?: boolean): void;

    /**
     * @param min number - The minimum value to allow in each component of the color.
     * @param max number - The maximum value to allow in each component of the color.
     * @param includeAlpha boolean - If true, the alpha component is also clamped.
     * @returns DzFloatColor A copy of this color where the value of each component is modulated between min and max.
     */
    modulate(min: number, max: number, includeAlpha?: boolean): DzFloatColor;

    /**
     * Modifies the color such that the value of each component is modulated between min and max.
     * @param min number - The minimum value to allow in each component of the color.
     * @param max number - The maximum value to allow in each component of the color.
     * @param includeAlpha boolean - If true, the alpha component is also modulated.
     */
    modulo(min: number, max: number, includeAlpha?: boolean): void;

    /**
     * Sets a HSL value on the color.
     * @param h number - The value to set on the hue component.
     * @param s number - The value to set on the saturation component.
     * @param l number - The value to set on the lightness component.
     * @param a number - The value to set on the alpha component.
     */
    setHsl(h: number, s: number, l: number, a?: number): void;

    /**
     * Sets the color according to an array of the hue, saturation, lightness and (optionally) alpha component values.
     * @param list any[]
     */
    setHsl(list: any[]): void;

    /**
     * Sets the color according to an array of the hue, saturation, value and alpha component values.
     * @param list any[]
     */
    setHsv(list: any[]): void;

    /**
     * Sets a HSV value on the color.
     * @param h number - The value to set on the hue component.
     * @param s number - The value to set on the saturation component.
     * @param v number - The value to set on the value component.
     * @param a number - The value to set on the alpha component.
     */
    setHsv(h: number, s: number, v: number, a?: number): void;

    /**
     * Sets the color according to an array of the red, green, blue and alpha component values.
     * @param list any[]
     */
    setRgba(list: any[]): void;

    /**
     * Sets the color values. Values should be in the [0,1] range.
     * @param r number - The red value for the color.
     * @param g number - The green value for the color.
     * @param b number - The blue value for the color.
     * @param a number - The alpha value for the color.
     */
    setValue(r: number, g: number, b: number, a?: number): void;

    /**
     * Sets the color.
     * @param color Color - The color to set.
     */
    setValue(color: Color): void;

    /**
     * @returns string A string representation of this floating point color in the form "[ red, green, blue, alpha ]".
     */
    toString(): string; // String

    /* Undocumented Augment Members */

    /** @undocumented */
    objectName: string;

    /** @undocumented */
    destroyed(): any; // TODO ;

    /** @undocumented */
    destroyed(): any; // TODO ;

    /** @undocumented */
    deleteLater(): any; // TODO ;

    /** @undocumented */
    inherits(): any; // TODO ;

    /** @undocumented */
    className(): any; // TODO ;

    /** @undocumented */
    getGreyscale(): number;
}
