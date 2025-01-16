declare class DzFloatProperty extends DzNumericProperty {
    static className(): QString;

    constructor();
    constructor(name: string, canAnimate: boolean, isUserProperty: boolean, defaultValue?: number);

    emitValueChangedOnSceneClear: boolean;

    /* Enums */
    static LINEAR_INTERP: number;
    static CONSTANT_INTERP: number;
    static TCB_INTERP: number;

    static HERMITE_INTERP: number;
    static NON_TRANSFORM: number;
    static SCALE: number;
    static TRANSLATE: number;

    static ROT_FIRST_AXIS: number;
    static ROT_SECOND_AXIS: number;
    static ROT_THIRD_AXIS: number;
    static NO_INTEREST: number;
    static X_INTEREST: number;
    static Y_INTEREST: number;
    static Z_INTEREST: number;
    static ALL_INTEREST: number;

    /* Methods */
    dynamicallyHiddenChanged(): any; // TODO ;
    dynamicallyAutoFollowChanged(): any; // TODO ;
    controllerListChanged(): any; // TODO ;
    slaveControllerListChanged(): any; // TODO ;
    aliasListChanged(): any; // TODO ;
    keysAreClamped(): any; // TODO ;
    setKeysAreClamped(): any; // TODO ;
    toggleKeysAreClamped(): any; // TODO ;
    setDynamicallyHidden(): any; // TODO ;
    setDynamicallyAutoFollow(): any; // TODO ;
    currentValueIsDefinitionValue(): any; // TODO ;
    doCopyBaseData(): any; // TODO ;
    getEmitValueChangedOnSceneClear(): any; // TODO ;
    setEmitValueChangedOnSceneClear(): any; // TODO ;
    isDynamicallyHidden(): any; // TODO ;
    isDynamicallyAutoFollow(): any; // TODO ;
    emitRemoved(): any; // TODO ;
    invalidateCacheValue(): any; // TODO ;
    addValueToSettings(tm: DzTime, settings: DzSettings, flags?: number): void; // TODO ;
    addValueToSettings(settings: DzSettings, flags?: number): any; // TODO ;
    setValueFromSettings(): any; // TODO ;
    setValueFromSettings(): any; // TODO ;
    addValueToSettings(): any; // TODO ;
    addValueToSettings(): any; // TODO ;
    setValueFromSettings(): any; // TODO ;
    setValueFromSettings(): any; // TODO ;
    setWidgetClassOverride(): any; // TODO ;
    getWidgetClassOverride(): any; // TODO ;
    getWidgetClassOverride(): any; // TODO ;
    hasWidgetClassOverride(): any; // TODO ;
    hasWidgetClassOverride(): any; // TODO ;
    isMappableChanged(): any; // TODO ;
    defaultMapGammaChanged(): any; // TODO ;
    defaultMapTextureTypeChanged(): any; // TODO ;
    textureModifierChanged(): any; // TODO ;
    textureModifierFlagsChanged(): any; // TODO ;
    getDefaultMapGamma(): any; // TODO ;
    setDefaultMapGamma(): any; // TODO ;
    getDefaultMapTextureType(): any; // TODO ;
    setDefaultMapTextureType(): any; // TODO ;
    setTextureModifier(): any; // TODO ;
    getTextureModifier(): any; // TODO ;
    setTextureModifierFlags(): any; // TODO ;
    getTextureModifierFlags(): any; // TODO ;
    getNDoubleValue(): any; // TODO ;
    getNDoubleValue(): any; // TODO ;
    getNValueCount(): any; // TODO ;
    getValueAsFloatColor(): any; // TODO ;
    getValueAsFloatColor(): any; // TODO ;
    getValueAsVec3(): any; // TODO ;
    getValueAsVec3(): any; // TODO ;
    getValueAsVec2(): any; // TODO ;
    getValueAsVec2(): any; // TODO ;
    getValueAsInt2(): any; // TODO ;
    getValueAsInt2(): any; // TODO ;
    getValueAsDouble(): any; // TODO ;
    getValueAsDouble(): any; // TODO ;
    emitDefaultMapGammaChanged(): any; // TODO ;
    emitDefaultMapTextureTypeChanged(): any; // TODO ;
    emitTextureModifierChanged(): any; // TODO ;
    emitTextureModifierFlagsChanged(): any; // TODO ;
    emitIsMappableChanged(): any; // TODO ;
    displayAsPercentChanged(): void;
    adjustValue(tm: DzTime, val: number): number;
    adjustValue(val: number): number;

    setValue(val: number): void;
    /**
     *
     * @param time
     * @param val
     * @deprecated
     */
    setValue(time: number, val: number, interp?: number): void;

    setValue(time: DzTime, val: number, interp: number): void;

    setValue(time: DzTime, val: number): void;

    setDefaultValue(val: number): void;
    setKeyValue(i: number, val: number): void;

    /**
     * Sets the interpolation method for the i'th key.
     * @param i The index of the key to change.
     * @param interp The type of interpolation to perform between this keyframe and the next.
     */
    setKeyInterpolation(i: number, interp: number): void;

    setSensitivity(sens: number): void;
    setDisplayAsPercent(onOff: boolean): void;
    multiply(val: number, applyToDefault: boolean): void;
    divide(val: number, applyToDefault: boolean): void;
    add(val: number, applyToDefault: boolean): void;
    subtract(val: number, applyToDefault: boolean): void;
    setTransformType(type: number): void;


    /**
     * This function is provided to make it easy to get the 'keyed' value of the property without any modifications.
     * When the value of a property is evaluated, first the value based on key interpolation is calculated, that value
     * is then passed to each of the controllers on the property (ERC links for example) which can modify that value.
     * This modified value is then returned as the value of the property by getValue().
     * This function returns the value of the property before the application of the controllers;
     * strictly the result of key interpolation.
     * @param time
     * @return The 'raw' value of the property at the current time; this is the actual value of the property without the contribution of property links, etc.
     */
    getRawValue(time?: DzTime | number): number;

    getValue(): number;
    getValue(time: DzTime): number;
    getValue(time: number): number;
    getLocalValue(tm: DzTime): number;
    getLocalValue(): number;
    getDefaultValue(): number;

    /**
     * Returns the raw Key value (no ERC or modifiers applied)
     * @param i The index of the key
     */
    getKeyValue(i: number): number;

    getKeyInterpolationType(i: number): number;

    // getKeyInterpolationType(i: number, param: number): number;
    // getKeyInterpolationType(i: number, param: number): number;
    // getKeyInterpolationType(i: number, param: number): number;
    getDisplayAsPercent(): boolean;
    getSensitivity(): number;
    getTransformType(): number;
    getScaledFollowValue(): any; // TODO ;
    emitDisplayAsPercentChanged(): void;
    getMax(): number
    getMin(): number
}