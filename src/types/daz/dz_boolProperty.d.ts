/**
 * An animatable boolean property.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/boolproperty_dz
 */
declare class DzBoolProperty extends DzIntProperty {

    /* Constructors */

    constructor();

    /**
     * @param name string
     * @param canAnimate boolean
     * @param isUserProperty boolean
     * @param initVal boolean
     */
    constructor(name: string, canAnimate: boolean, isUserProperty: boolean, initVal?: boolean);

    /* Methods */

    /**
     * @returns boolean The boolean value of the property at the current time.
     */
    getBoolValue(): boolean; // Boolean

    /**
     * @returns boolean The default boolean value of the property.
     */
    getDefaultBoolValue(): boolean; // Boolean

    /**
     * Sets the boolean value for this property at the current time - or the default value if this property is not animatable.
     * @param value boolean
     */
    setBoolValue(value: boolean): void;

    /**
     * Sets the default boolean value for this property.
     * @param val boolean - The new default value for the property.
     */
    setDefaultBoolValue(val: boolean): void;

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
    setKeyBoolValue(i: number, val: boolean): void;

    /** @undocumented */
    getRawBoolValue(tm: DzTime): boolean;

    /** @undocumented */
    getRawBoolValue(): boolean;

    /** @undocumented */
    getRawBoolValue(tm: DzTime): boolean;

    /** @undocumented */
    getRawBoolValue(): boolean;

    /** @undocumented */
    getKeyBoolValue(i: number): boolean;
}
