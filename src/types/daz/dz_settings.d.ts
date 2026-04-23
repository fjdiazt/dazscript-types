/**
 * Class for storing and passing simple sets of settings.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/settings_dz
 */
declare class DzSettings extends QObject {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of Type.
     */
    static StringValue: number;

    /**
     * DAZ enum member of Type.
     */
    static IntValue: number;

    /**
     * DAZ enum member of Type.
     */
    static BoolValue: number;

    /**
     * DAZ enum member of Type.
     */
    static FloatValue: number;

    /**
     * DAZ enum member of Type.
     */
    static SettingsValue: number;

    /* Constructors */

    constructor();

    /**
     * @param settings DzSettings
     */
    constructor(settings: DzSettings);

    /* Methods */

    /**
     * Clears all values from this settings object.
     */
    clear(): void;

    /**
     * Copies the setting with the given index to the specified settings object.
     * @param which number - The index of the setting to copy.
     * @param copyTo DzSettings - The settings object to copy the setting to.
     */
    copySetting(which: number, copyTo: DzSettings): void;

    /**
     * Copies the setting with the given index to the specified settings object.
     * @param key string - The key of the setting to copy.
     * @param copyTo DzSettings - The settings object to copy the setting to.
     */
    copySetting(key: string, copyTo: DzSettings): void;

    /**
     * Populates this settings object with the data encoded in a string.
     * @param settings string - The encoded string to load the data from.
     * @returns boolean true if the data was read successfully, otherwise false.
     */
    fromString(settings: string): boolean; // Boolean

    /**
     * Gets a boolean value from the settings.
     * @param key string - The key for the value to get.
     * @param def boolean
     * @returns boolean The value of the setting.
     */
    getBoolValue(key: string, def?: boolean): boolean; // Boolean

    /**
     * @param key string - The key for the value to get.
     * @param def number
     * @returns number The value of the setting.
     */
    getFloatValue(key: string, def?: number): number; // Number

    /**
     * Gets an integer value from the settings.
     * @param key string - The key for the value to get.
     * @param def number
     * @returns number The value of the setting.
     */
    getIntValue(key: string, def?: number): number; // Number

    /**
     * @param which number - The index of the value to get the key for.
     * @returns string The key for the setting at the given index (if valid), otherwise an empty string.
     */
    getKey(which: number): string; // String

    /**
     * @returns number The number of values stored in the settings.
     */
    getNumValues(): number; // Number

    /**
     * @param key string - The key of the value to find.
     * @returns number The index of the setting with the given key (if any), otherwise NULL.
     */
    getSettingIndex(key: string): number; // Number

    /**
     * @param key string - The key for the value to get.
     * @returns DzSettings The setting if key is found and is a SettingsValue, otherwise NULL.
     */
    getSettingsValue(key: string): DzSettings;

    /**
     * Gets a string value from the settings.
     * @param key string - The key for the value to get.
     * @param def string
     * @returns string The value of the setting.
     */
    getStringValue(key: string, def?: string): string; // String

    /**
     * @param which number - The index of the value to get.
     * @returns string The value of the setting at the given index in string form (if valid), otherwise an empty string.
     */
    getValue(which: number): string; // String

    /**
     * @param which number - The index of the value to get the type of.
     * @returns number The type of the setting at the given index (if valid), otherwise StringValue.
     */
    getValueType(which: number): number; // Type

    /**
     * @param key string - The name of the key to find.
     * @returns number The index of the key (if any), otherwise -1.
     */
    hasKey(key: string): number; // Number

    /**
     * Removes a value.
     * @param key string - The key for the value to remove.
     */
    removeValue(key: string): void;

    /**
     * Replaces the settings of this object with the settings of the specified object.
     * @param settings DzSettings - The object with the settings to replace this one with.
     */
    replaceWithSettings(settings: DzSettings): void;

    /**
     * Adds a boolean value.
     * @param key string - The key for the value to set.
     * @param value boolean - The boolean value for the setting.
     */
    setBoolValue(key: string, value: boolean): void;

    /**
     * Adds a float value.
     * @param key string - The key for the value to set.
     * @param value number - The floating point value for the setting.
     */
    setFloatValue(key: string, value: number): void;

    /**
     * Adds an integer value.
     * @param key string - The key for the value to set.
     * @param value number - The integer value for the setting.
     */
    setIntValue(key: string, value: number): void;

    /**
     * Adds a nested settings value.
     * @param key string - The key for the value to set.
     * @param settings DzSettings - The sub-setting value to add; a local copy is made.
     * @returns DzSettings The created settings object (if any), otherwise NULL.
     */
    setSettingsValue(key: string, settings: DzSettings): DzSettings;

    /**
     * Adds a nested (empty) settings value.
     * @param key string - The key for the value to set.
     * @returns DzSettings An empty settings object with the given key.
     */
    setSettingsValue(key: string): DzSettings;

    /**
     * Adds a string value.
     * @param key string - The key for the value to set.
     * @param value string - The string value for the setting.
     */
    setStringValue(key: string, value: string): void;

    /**
     * @returns Object A JSON object representation of the data.
     * @since 4.8.1.23
     */
    toJson(): Object;

    /**
     * @returns string A JSON encoded string representation of the data.
     * @since 4.8.1.23
     */
    toJsonString(): string; // String

    /**
     * Appends lines of code to a script object that will reconstruct this DzSettings object.
     * @param varName string - The identifier for the variable in the script that holds the settings object.
     * @param script DzScript - The script object to generate the settings lines in.
     * @param indent number - The indention level for the generated lines.
     * @param define boolean - If true, prepends a variable definition statement to the lines generated in script. If false, it is the caller's responsibility to ensure that varName is already defined in script and holds a valid DzSettings object.
     */
    toScript(varName: string, script: DzScript, indent: number, define?: boolean): void;

    /**
     * @returns string An XML encoded string representation of the data.
     */
    toString(): string; // String
}
