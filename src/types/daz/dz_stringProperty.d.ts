declare class DzStringProperty extends DzProperty {
    /**
     * Default Constructor. Creates a non-user property.
     */
    constructor();

    /**
     *
     * @param name The name of this property.
     * @param isUserProperty If true, creates a user property; user properties are properties that can be added/deleted by users.
     */
    constructor(name: string, isUserProperty: boolean);

    static className(): string;
    /* Properties */

    emitValueChangedOnSceneClear: boolean;

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
    setValue(val: QString): boolean;
    getValue(): QString;
    setAdvanceEditorWgtClass(): any; // TODO ;
    getAdvanceEditorWgtClass(): any; // TODO ;
}