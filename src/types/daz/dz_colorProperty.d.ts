/**
 * An animatable color property.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/colorproperty_dz
 */
declare class DzColorProperty extends DzIntProperty {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of AnimationBlendMode.
     */
    static HSV: number;

    /**
     * DAZ enum member of AnimationBlendMode.
     */
    static HSL: number;

    /**
     * DAZ enum member of AnimationBlendMode.
     */
    static RGB: number;

    /* Constructors */

    constructor();

    /**
     * @param name string
     * @param canAnimate boolean
     * @param isUserProperty boolean
     * @param initVal Color
     */
    constructor(name: string, canAnimate: boolean, isUserProperty: boolean, initVal: Color);

    /**
     * @param name string
     * @param canAnimate boolean
     * @param isUserProperty boolean
     */
    constructor(name: string, canAnimate: boolean, isUserProperty: boolean);

    /* Static Methods */

    /**
     * Converts a string to an enumerated animation blend mode value.
     * @param str string - The string to convert.
     * @returns number The AnimationBlendMode corresponding to str.
     * @since 4.6.4.84
     */
    static animationBlendModeFromStr(str: string): number; // AnimationBlendMode

    /**
     * Converts an enumerated animation blend mode value to a string.
     * @param type number - The AnimationBlendMode to convert.
     * @returns string A string representation of the enumerated AnimationBlendMode value.
     * @since 4.6.4.84
     */
    static animationBlendModeToStr(type: number): string; // String

    /* Methods */

    /**
     * @returns number The animation blend mode for the property.
     * @since 4.6.4.84
     */
    getAnimationBlendMode(): number; // AnimationBlendMode

    /**
     * @returns Color The color value of the property at the current time.
     */
    getColorValue(): Color;

    /**
     * @param tm DzTime - The scene time to get the color value at.
     * @returns Color The color value of the property at the given time.
     */
    getColorValue(tm: DzTime): Color;

    /**
     * @returns Color The default color value of the property.
     */
    getDefaultColorValue(): Color;

    /**
     * @param i number - The index of the key to get the color value of.
     * @returns Color The raw color value of the property at the given key.
     */
    getKeyColorValue(i: number): Color;

    /**
     * @param tm DzTime - The scene time at which to get the raw color value.
     * @returns Color The raw color value of the property at the given time.
     */
    getRawColorValue(tm: DzTime): Color;

    /**
     * @returns Color The raw color value of the property.
     */
    getRawColorValue(): Color;

    /**
     * Sets the animation blend mode for the property.
     * @param mode number - The animation blend mode to set.
     * @since 4.6.4.84
     */
    setAnimationBlendMode(mode: number): void;

    /**
     * Sets the color value for this property at the given time; or the default value if this property is not animatable.
     * @param tm DzTime - The scene time at which to set the value.
     * @param val Color - The new value for the property.
     */
    setColorValue(tm: DzTime, val: Color): void;

    /**
     * Sets the color value for this property at the current time; or the default value if this property is not animatable.
     * @param val Color - The new value for the property.
     */
    setColorValue(val: Color): void;

    /**
     * Sets the default color value for this property.
     * @param val Color - The new default value for the property.
     */
    setDefaultColorValue(val: Color): void;

    /**
     * Sets the color value of this property for the given key.
     * @param i number - The index of the key to set the value of.
     * @param val Color - The new default value for the property.
     */
    setKeyColorValue(i: number, val: Color): void;

    /* Signals */

    /**
     * Emitted when the animation blend mode for this property has changed.
     */
    animationBlendModeChanged: ISignal<void>;

    /* Undocumented Augment Members */

    /** @undocumented */
    keysAreClamped(): any; // TODO ;

    /** @undocumented */
    setKeysAreClamped(): any; // TODO ;

    /** @undocumented */
    toggleKeysAreClamped(): any; // TODO ;

    /** @undocumented */
    doCopyBaseData(): any; // TODO ;

    /** @undocumented */
    getEmitValueChangedOnSceneClear(): any; // TODO ;

    /** @undocumented */
    setEmitValueChangedOnSceneClear(): any; // TODO ;

    /** @undocumented */
    emitRemoved(): any; // TODO ;

    /** @undocumented */
    invalidateCacheValue(): any; // TODO ;

    /** @undocumented */
    getValueAsDouble(): any; // TODO ;

    /** @undocumented */
    getValueAsDouble(): any; // TODO ;

    /** @undocumented */
    emitDefaultMapGammaChanged(): any; // TODO ;

    /** @undocumented */
    emitDefaultMapTextureTypeChanged(): any; // TODO ;

    /** @undocumented */
    emitTextureModifierChanged(): any; // TODO ;

    /** @undocumented */
    emitTextureModifierFlagsChanged(): any; // TODO ;

    /** @undocumented */
    emitIsMappableChanged(): any; // TODO ;

    /** @undocumented */
    emitAnimationBlendModeChanged(): any; // TODO ;
}
