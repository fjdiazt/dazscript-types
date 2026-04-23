/**
 * A static (non-animatable) string property.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/stringproperty_dz
 */
declare class DzStringProperty extends DzProperty {

    /* Constructors */

    constructor();

    /**
     * @param name string
     * @param isUserProperty boolean
     */
    constructor(name: string, isUserProperty: boolean);

    /* Methods */

    /**
     * @returns string The default string value of this property.
     * @since 4.20.0.5
     */
    getDefaultValue(): string; // String

    /**
     * @returns string The string value of this property.
     */
    getValue(): string; // String

    /**
     * Sets the default string value of this property.
     * @param val string - The string value to set.
     * @returns boolean
     * @since 4.20.0.5
     */
    setDefaultValue(val: string): boolean; // Boolean

    /**
     * Sets the string value of this property.
     * @param val string - The string value to set.
     * @returns boolean
     */
    setValue(val: string): boolean; // Boolean

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
    setAdvanceEditorWgtClass(): any; // TODO ;

    /** @undocumented */
    getAdvanceEditorWgtClass(): any; // TODO ;
}
