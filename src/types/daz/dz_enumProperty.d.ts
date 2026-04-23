/**
 * An animatable enum property.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/enumproperty_dz
 */
declare class DzEnumProperty extends DzIntProperty {

    /* Constructors */

    constructor();

    /**
     * @param name string
     * @param canAnimate boolean
     * @param isUserProperty boolean
     */
    constructor(name: string, canAnimate: boolean, isUserProperty: boolean);

    /* Methods */

    /**
     * Adds a string to the available choices for this property. Duplicates are not allowed.
     * @param item string - The string to add to the list of items.
     * @param index number - The index to insert the item at. If invalid, the item is appended to the list.
     * @returns number The index of the newly added item is returned, or -1 on error.
     */
    addItem(item: string, index?: number): number; // Number

    /**
     * Searches the property for an item that matches the given string.
     * @param str string - The string to find.
     * @returns number The index of the item that matches the given string (if any), otherwise -1.
     */
    findItemString(str: string): number; // Number

    /**
     * @returns string The string representation of the default value.
     */
    getDefaultStringValue(): string; // String

    /**
     * @param i number - The index of the item to return.
     * @returns string The string representation of the i'th item (if valid), otherwise an empty string.
     */
    getItem(i: number): string; // String

    /**
     * @param i number - The index of the key to return the value of.
     * @returns string The string representation of the i'th key value (if valid), otherwise an empty string.
     */
    getKeyStringValue(i: number): string; // String

    /**
     * @returns number The number of enumerated items.
     */
    getNumItems(): number; // Number

    /**
     * @returns string The string representation of the raw value (if valid), otherwise the default string.
     */
    getRawStringValue(): string; // String

    /**
     * @param tm DzTime - The scene time at which to get the raw value of the property.
     * @returns string The string representation of the raw value at the given time (if valid), otherwise the default string.
     */
    getRawStringValue(tm: DzTime): string; // String

    /**
     * @param tm DzTime - The scene time at which to get the value.
     * @returns string The string representation of the value at the given time.
     */
    getStringValue(tm: DzTime): string; // String

    /**
     * @returns string The string representation of the current value.
     */
    getStringValue(): string; // String

    /**
     * @param item string
     * @returns string An item string that is guaranteed to be unique. If item is not already in the list, it is returned. Otherwise, a number will be appended to item to make it unique.
     */
    getUniqueItemString(item: string): string; // String

    /**
     * Removes all items and makes this property essentially invalid.
     */
    removeAllItems(): void;

    /**
     * Removes the item at the given index.
     * @param index number
     * @returns boolean true if the item was successfully removed, otherwise false.
     */
    removeItem(index: number): boolean; // Boolean

    /**
     * Replaces the item at the given index with the given string.
     * @param index number - The index of the item to replace.
     * @param item string - The new item to place into the list.
     * @returns boolean false if the index is out of range or the string is invalid (empty), otherwise true.
     */
    replaceItem(index: number, item: string): boolean; // Boolean

    /**
     * Sets the items for this property.
     * @param items any[] - The list of items to set.
     * @since 4.5.2.20
     */
    setItems(items: any[]): void;

    /**
     * Sets the current value of the property to the index of the item that matches the given string.
     * @param str string - The string to match.
     * @returns boolean true on success, false if the given string does not match an item in this property.
     */
    setValueFromString(str: string): boolean; // Boolean

    /**
     * Sets the value of the property at the given time to the index of the item that matches the given string.
     * @param tm DzTime - The scene time to set the value of the property at.
     * @param str string - The string to match.
     * @returns boolean true on success, false if the given string does not match an item in this property.
     */
    setValueFromString(tm: DzTime, str: string): boolean; // Boolean

    /* Signals */

    /**
     * Emitted when the item list (list of legal values for this property) changes.
     */
    itemListChanged: ISignal<void>;

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
    emitItemListChanged(): void;
}
