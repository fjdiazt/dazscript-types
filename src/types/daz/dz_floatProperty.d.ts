/**
 * An animatable floating-point property.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/floatproperty_dz
 */
declare class DzFloatProperty extends DzNumericProperty {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of InterpolationType.
     */
    static LINEAR_INTERP: number;

    /**
     * DAZ enum member of InterpolationType.
     */
    static CONSTANT_INTERP: number;

    /**
     * DAZ enum member of InterpolationType.
     */
    static TCB_INTERP: number;

    /**
     * DAZ enum member of InterpolationType.
     */
    static HERMITE_INTERP: number;

    /**
     * DAZ enum member of TransformType.
     */
    static NON_TRANSFORM: number;

    /**
     * DAZ enum member of TransformType.
     */
    static SCALE: number;

    /**
     * DAZ enum member of TransformType.
     */
    static TRANSLATE: number;

    /**
     * DAZ enum member of TransformType.
     */
    static ROT_FIRST_AXIS: number;

    /**
     * DAZ enum member of TransformType.
     */
    static ROT_SECOND_AXIS: number;

    /**
     * DAZ enum member of TransformType.
     */
    static ROT_THIRD_AXIS: number;

    /* Constructors */

    constructor();

    /**
     * @param name string
     * @param canAnimate boolean
     * @param isUserProperty boolean
     * @param defaultVal number
     */
    constructor(name: string, canAnimate: boolean, isUserProperty: boolean, defaultVal?: number);

    /* Methods */

    /**
     * Adds the given value to all the key values.
     * @param val number - The addend for the values.
     * @param applyToDefault boolean - If true, val will also be added to the default value for the property.
     */
    add(val: number, applyToDefault?: boolean): void;

    /**
     * Adjust the value of the property based on the contribution of property controllers.
     * @param val number - The 'final' value desired for the property.
     * @returns number A 'raw' value for the property that will result in the property having the given value with the current controllers.
     */
    adjustValue(val: number): number; // Number

    /**
     * Adjust the value of the property at the given time based on the contribution of property controllers.
     * @param tm DzTime - The scene time at which to adjust the value.
     * @param val number - The 'final' value desired for the property.
     * @returns number A 'raw' value for the property that will result in the property having the given value with the current controllers.
     */
    adjustValue(tm: DzTime, val: number): number; // Number

    /**
     * Divides all key values by the given amount.
     * @param val number - The divisor for the values.
     * @param applyToDefault boolean - If true, the default value for the property will also be divided.
     */
    divide(val: number, applyToDefault?: boolean): void;

    /**
     * @returns number The default value of the property.
     */
    getDefaultValue(): number; // Number

    /**
     * @returns boolean true if this property should be displayed as a percentage, false if this property should be displayed as a decimal.
     */
    getDisplayAsPercent(): boolean; // Boolean

    /**
     * @param i number - The index of the key to get the value for.
     * @returns number The value of the i'th key in the property.
     */
    getKeyValue(i: number): number; // Number

    /**
     * This function is provided for the special case of ERC link redirection; sometimes called 'cross-talk'. For example, if Figure A (a piece of clothing, for example) is 'Fit To' Figure B, the ERC links on Figure A are redirected to follow channels on Figure B; this is how morphs on an item of clothing will follow morphs on the figure, etc. This function will provide the value of the property ignoring any redirection of ERC links. So, for a figure that is not 'Fit To' another figure, this will return the same value as getValue(). For a figure that is 'Fit To' another figure, this will return the value that the property would have if the ERC link had not been redirected.
     * @returns number The value of the property at the current time without any ERC link redirection.
     */
    getLocalValue(): number; // Number

    /**
     * This function is provided for the special case of ERC link redirection; sometimes called 'cross-talk'. For example, if Figure A (a piece of clothing, for example) is 'Fit To' Figure B, the ERC links on Figure A are redirected to follow channels on Figure B; this is how morphs on an item of clothing will follow morphs on the figure, etc. This function will provide the value of the property ignoring any redirection of ERC links. So, for a figure that is not 'Fit To' another figure, this will return the same value as getValue(). For a figure that is 'Fit To' another figure, this will return the value that the property would have if the ERC link had not been redirected.
     * @param tm DzTime - The scene time to get the local value for.
     * @returns number The value of the property at the given time without any ERC link redirection.
     */
    getLocalValue(tm: DzTime): number; // Number

    /**
     * @returns number The maximum allowable value of the property.
     */
    getMax(): number; // Number

    /**
     * @returns number The minimum allowable value of the property.
     */
    getMin(): number; // Number

    /**
     * This function is provided to make it easy to get the 'keyed' value of the property without any modifications. When the value of a property is evaluated, first the value based on key interpolation is calculated, that value is then passed to each of the controllers on the property (ERC links for example) which can modify that value. This modified value is then returned as the value of the property by getValue(). This function returns the value of the property before the application of the controllers; strictly the result of key interpolation.
     * @returns number The 'raw' value of the property at the current time; this is the actual value of the property without the contribution of property links, etc.
     */
    getRawValue(): number; // Number

    /**
     * This function is provided to make it easy to get the 'keyed' value of the property without any modifications. When the value of a property is evaluated, first the value based on key interpolation is calculated, that value is then passed to each of the controllers on the property (ERC links for example) which can modify that value. This modified value is then returned as the value of the property by getValue(). This function returns the value of the property before the application of the controllers; strictly the result of key interpolation.
     * @param tm DzTime - The scene time to get the raw value for.
     * @returns number The 'raw' value of the property at the given time; this is the actual value of the property without the contribution of property links, etc.
     */
    getRawValue(tm: DzTime): number; // Number

    /**
     * @returns number The sensitivity value for this property.
     */
    getSensitivity(): number; // Number

    /**
     * @returns number The transform type for this property.
     */
    getTransformType(): number; // TransformType

    /**
     * @returns number The value of the property at the current time.
     */
    getValue(): number; // Number

    /**
     * @param tm DzTime - The scene time to get the value for.
     * @returns number The value of the property at the given time.
     */
    getValue(tm: DzTime): number; // Number

    /**
     * Multiplies all key values by the given amount.
     * @param val number - The multiplier for the values.
     * @param applyToDefault boolean - If true, the default value for the property will also be multiplied.
     */
    multiply(val: number, applyToDefault?: boolean): void;

    /**
     * Sets the default value for this property.
     * @param val number - The value to set as the default for this property.
     */
    setDefaultValue(val: number): void;

    /**
     * Sets whether this property should have its value displayed as a percentage; the default is false (value is displayed as a decimal).
     * @param onOff boolean
     */
    setDisplayAsPercent(onOff: boolean): void;

    /**
     * Sets the value of the i'th key.
     * @param i number
     * @param val number - The value to set.
     */
    setKeyValue(i: number, val: number): void;

    /**
     * Set the maximum allowable value.
     * @param max number - The maximum value to set.
     */
    setMax(max: number): void;

    /**
     * Set the mininimum allowable value.
     * @param min number - The minimum value to set.
     */
    setMin(min: number): void;

    /**
     * Set the mininimum and maximum allowable values.
     * @param min number - The minimum value to set.
     * @param max number - The maximum value to set.
     */
    setMinMax(min: number, max: number): void;

    /**
     * Set the sensitivity for this property. This value describes the amount of change in the value of this property caused by adjustment in the interface, especially if limits are off.
     * @param sens number - The value to set.
     */
    setSensitivity(sens: number): void;

    /**
     * Sets the transform type for this property.
     * @param type number - The enumeration value for the type of transform.
     */
    setTransformType(type: number): void;

    /**
     * Sets the value for this property at the given time; or the default value if this property is not animatable.
     * @param tm DzTime - The scene time to set the value at.
     * @param val number - The value to set the property to.
     * @param interp number - The type of interpolation to perform between this keyframe and the next.
     * @param param0 number - The parameter 0 for key interpolation: T value for TCB interpolation, starting slope value for Hermite interpolation.
     * @param param1 number - The parameter 1 for key interpolation: C value for TCB interpolation, ending slope value for Hermite interpolation.
     * @param param2 number - The parameter 2 for key interpolation: B value for TCB interpolation
     */
    setValue(tm: DzTime, val: number, interp: number, param0: number, param1: number, param2: number): void;

    /**
     * Sets the value for this property at the current time; or the default value if this property is not animatable. This function differs from setRawValue() in that it takes into account any controllers on the property such that calling setValue( getValue() ) should not change the value of the property.
     * @param val number - The value to set.
     */
    setValue(val: number): void;

    /**
     * Sets the value for this property at the given time; or the default value if this property is not animatable. This function differs from setRawValue() in that it takes into account any controllers on the property such that calling setValue( getValue() ) should not change the value of the property.
     * @param tm DzTime - The scene time to set the value at.
     * @param val number - The value to set.
     * @param interp number - The type of interpolation to perform between this keyframe and the next. Parameters for interpolation are set to defaults.
     */
    setValue(tm: DzTime, val: number, interp: number): void;

    /**
     * Sets the value for this property at the given time; or the default value if this property is not animatable. This function differs from setRawValue() in that it takes into account any controllers on the property such that calling setValue( getValue() ) should not change the value of the property.
     * @param tm DzTime - The scene time to set the value at.
     * @param val number - The value to set.
     */
    setValue(tm: DzTime, val: number): void;

    /**
     * Subtracts the given value to all the key values.
     * @param val number - The value to be subtracted from the key values.
     * @param applyToDefault boolean - If true, val will also be subtracted from the default value for the property.
     */
    subtract(val: number, applyToDefault?: boolean): void;

    /* Signals */

    /**
     * Emitted if the way this property is displayed changed.
     */
    displayAsPercentChanged: ISignal<void>;

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
    setKeyInterpolation(i: number, interp: number): void;

    /** @undocumented */
    getScaledFollowValue(): any; // TODO ;

    /** @undocumented */
    emitDisplayAsPercentChanged(): void;
}
