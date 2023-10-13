declare class DzColorProperty extends DzIntProperty {

    /* Properties */
    emitValueChangedOnSceneClear: boolean;
    HSV: number;
    HSL: number;
    RGB: number;
    NO_INTEREST: number;
    X_INTEREST: number;
    Y_INTEREST: number;
    Z_INTEREST: number;
    ALL_INTEREST: number;

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
    addValueToSettings(): any; // TODO ;
    addValueToSettings(): any; // TODO ;
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
    animationBlendModeChanged(): any; // TODO ;
    setColorValue(tm: DzTime, val: QColor): void;
    setColorValue(val: QColor): void;
    setColorValue(tm: DzTime, val: QColor): void;
    setColorValue(val: QColor): void;
    setDefaultColorValue(val: QColor): void;
    setKeyColorValue(i: number, val: QColor): void;
    getColorValue(tm: DzTime): QColor;
    getColorValue(): QColor;
    getColorValue(tm: DzTime): QColor;
    getColorValue(): QColor;
    getDefaultColorValue(): QColor;
    getRawColorValue(tm: DzTime): QColor;
    getRawColorValue(): QColor;
    getRawColorValue(tm: DzTime): QColor;
    getRawColorValue(): QColor;
    getKeyColorValue(i: number): QColor;
    animationBlendModeToStr(): any; // TODO ;
    animationBlendModeFromStr(): any; // TODO ;
    setAnimationBlendMode(): any; // TODO ;
    getAnimationBlendMode(): any; // TODO ;
    emitAnimationBlendModeChanged(): any; // TODO ;
}