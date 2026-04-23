/**
 * Provides cross-platform support for persistent application settings.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/appsettings_dz
 */
declare class DzAppSettings extends DzBase {

    /* Constructors */

    constructor();

    /**
     * @param startPath string
     */
    constructor(startPath: string);

    /* Methods */

    /**
     * @param key string - The name of the value to check.
     * @returns boolean true if this settings contains the named value, otherwise false.
     */
    containsValue(key: string): boolean; // Boolean

    /**
     * Read a boolean value from the given key.
     * @param key string - The name of the value to read.
     * @param def boolean - Default value - this value is returned if the named value fails to be read.
     * @returns boolean The value of the requested key.
     */
    getBoolValue(key: string, def?: boolean): boolean; // Boolean

    /**
     * Read a color value from the given key.
     * @param key string - The name of the value to read.
     * @param def Color - Default value - this value is returned if the named value fails to be read.
     * @returns Color The value of the requested key.
     */
    getColorValue(key: string, def?: Color): Color;

    /**
     * Read a float color value from the given key.
     * @param key string - The name of the value to read.
     * @param def DzFloatColor - Default value - this value is returned if the named value fails to be read.
     * @returns DzFloatColor The value of the requested key.
     */
    getFloatColorValue(key: string, def?: DzFloatColor): DzFloatColor;

    /**
     * Read a floating point value from the given key.
     * @param key string - The name of the value to read.
     * @param def number - Default value - this value is returned if the named value fails to be read.
     * @returns number The value of the requested key.
     */
    getFloatValue(key: string, def?: number): number; // Number

    /**
     * Read a integer value from the given key.
     * @param key string - The name of the value to read.
     * @param def number - Default value - this value is returned if the named value fails to be read.
     * @returns number The value of the requested key.
     */
    getIntValue(key: string, def?: number): number; // Number

    /**
     * Read a string value from the given key.
     * @param key string - The name of the value to read.
     * @param def string - Default value - this value is returned if the named value fails to be read.
     * @returns string The value of the requested key.
     */
    getStringValue(key: string, def?: string): string; // String

    /**
     * Pops a temporary key path off the top of the stack.
     */
    popPath(): void;

    /**
     * Sets the current key path temporarily to the given path; popPath() can be called to remove this path.
     * @param path string - The sub-path to add to the current key path.
     */
    pushPath(path: string): void;

    /**
     * Removes a key (and all values, sub-keys/ by name.
     * @param key string - The name of the key to remove.
     * @returns boolean
     * @since 4.15.0.30
     */
    removeKey(key: string): boolean; // Boolean

    /**
     * Removes a setting by name.
     * @param key string - The name of the key to remove.
     * @returns boolean true if the key/value existed and was successfully removed, otherwise false.
     */
    removeValue(key: string): boolean; // Boolean

    /**
     * Sets a key with a boolean value.
     * @param key string - The name of the key to write.
     * @param setting boolean - The value to set.
     * @returns boolean true if the key/value was successfully set, otherwise false.
     */
    setBoolValue(key: string, setting: boolean): boolean; // Boolean

    /**
     * Sets a key with a color value.
     * @param key string - The name of the key to write.
     * @param setting Color - The value to set.
     * @returns boolean true if the key/value was successfully set, otherwise false.
     */
    setColorValue(key: string, setting: Color): boolean; // Boolean

    /**
     * Sets a key with a float color value.
     * @param key string - The name of the key to write.
     * @param setting DzFloatColor - The value to set.
     * @returns boolean true if the key/value was successfully set, otherwise false.
     */
    setFloatColorValue(key: string, setting: DzFloatColor): boolean; // Boolean

    /**
     * Sets a key with a floating point value.
     * @param key string - The name of the key to write.
     * @param setting number - The value to set.
     * @returns boolean true if the key/value was successfully set, otherwise false.
     */
    setFloatValue(key: string, setting: number): boolean; // Boolean

    /**
     * Sets a key with a integer value.
     * @param key string - The name of the key to write.
     * @param setting number - The value to set.
     * @returns boolean true if the key/value was successfully set, otherwise false.
     */
    setIntValue(key: string, setting: number): boolean; // Boolean

    /**
     * Sets a key with a string value.
     * @param key string - The name of the key to write.
     * @param setting string - The value to set.
     * @returns boolean true if the key/value was successfully set, otherwise false.
     */
    setStringValue(key: string, setting: string): boolean; // Boolean

    /* Undocumented Augment Members */

    /** @undocumented */
    getName(): any;

    /** @undocumented */
    iskindof(p0: string): any;
}
