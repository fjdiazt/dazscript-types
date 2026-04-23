/**
 * Base Class for Device objects.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/device_dz
 */
declare class DzDevice extends QObject {

    /* Methods */

    /**
     * @param settings DzSettings - This will be set to the default settings for the device.
     */
    getDefaultSettings(settings: DzSettings): void;

    /**
     * @returns string A user-readable description of the device.
     */
    getDescription(): string; // String

    /**
     * @returns string The name of the device.
     */
    getDeviceName(): string; // String

    /**
     * @param settings DzSettings - This will be set to the current settings for the device.
     */
    getSettings(settings: DzSettings): void;

    /**
     * Changes the current settings for the device.
     * @param settings DzSettings - The new settings for the device.
     */
    setSettings(settings: DzSettings): void;
}
