declare class DzEnumProperty extends DzIntProperty {

    /* Properties */
    emitValueChangedOnSceneClear: boolean;
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
    itemListChanged(): void;
    addItem(item: QString, index: number): number;
    addItem(item: QString, index: number): number;
    removeItem(index: number): boolean;
    removeAllItems(): void;
    replaceItem(index: number, item: QString): boolean;
    setValueFromString(tm: DzTime, str: QString): boolean;
    setValueFromString(str: QString): boolean;
    setValueFromString(tm: DzTime, str: QString): boolean;
    setValueFromString(str: QString): boolean;
    setItems(): any; // TODO ;
    getDefaultStringValue(): QString;
    getRawStringValue(tm: DzTime): QString;
    getRawStringValue(): QString;
    getRawStringValue(tm: DzTime): QString;
    getRawStringValue(): QString;
    getKeyStringValue(i: number): QString;
    getNumItems(): number;
    getItem(i: number): QString;
    getUniqueItemString(item: QString): QString;
    findItemString(str: QString): number;
    emitItemListChanged(): void;
}