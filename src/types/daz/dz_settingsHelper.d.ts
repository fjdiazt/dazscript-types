/**
 * Convenience object to make working with DzAppSettings even easier.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/settingshelper_dz
 */
declare class DzSettingsHelper extends QObject {

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * Retrieves a value from the subkey at the given key.
     * @param path string - The path of the key to retrieve the named value from; similar to a folder in the file system
     * @param name string - The name of the value to retrieve; the “key” in a key/value pair
     * @param value Object - The default value to return if the name is not found; the “value” in a key/value pair
     * @returns Object The object that represents the value at the specified path/name
     */
    get(path: string, name: string, value: Object): Object;

    /**
     * Retrieves whether a value exists at the given key.
     * @param path string - The path of the key to check for its existence; similar to a folder in the file system
     * @param name string - The name of the value to check for its existence; the “key” in a key/value pair
     * @returns boolean true if path/key exists, otherwise false.
     */
    hasValue(path: string, name: string): boolean; // Boolean

    /**
     * Removes a named value at the given path.
     * @param path string - The path of the key to remove; similar to a folder in the file system
     * @param name string - The name of the value to remove; the “key” in a key/value pair
     * @returns boolean true if path/key exists, otherwise false.
     * @since 4.9.0.38
     */
    removeValue(path: string, name: string): boolean; // Boolean

    /**
     * Records a named value to the path specified.
     * @param path string - The path of the key to place the named value at; similar to a folder in the file system
     * @param name string - The name of the value to record; the “key” in a key/value pair
     * @param value Object - The value to record; i.e. a Number, String, Boolean or Color; the “value” in a key/value pair
     */
    set(path: string, name: string, value: Object): void;
}
