/**
 * Manager responsible for file I/O preset settings.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/fileiopresetmgr_dz
 */
declare class DzFileIOPresetMgr extends QObject {

    /* Methods */

    /**
     * @param className string
     * @param settings DzFileIOSettings
     * @returns boolean
     */
    getAllCurrentSettings(className: string, settings: DzFileIOSettings): boolean; // Boolean

    /**
     * @param className string
     * @param settings DzFileIOSettings
     * @returns boolean
     */
    getAllDefaults(className: string, settings: DzFileIOSettings): boolean; // Boolean

    /**
     * @param presetName string
     * @param className string
     * @param settings DzFileIOSettings
     * @returns boolean
     */
    getAllSettings(presetName: string, className: string, settings: DzFileIOSettings): boolean; // Boolean

    /**
     * @param presetName string - The name of the preset to get available classes for.
     * @returns any[] the available classes (typically importers or exporters) of the given preset
     */
    getAvailableClasses(presetName: string): any[]; // Array

    /**
     * @param className string - The name of the class to get available presets for. This is typically, but not always, the name of an importer or exporter, such as “DzObjImporter.” If className is empty, returns all presets
     * @returns any[] the available presets for the given class name
     */
    getAvailablePresets(className: string): any[]; // Array

    /**
     * @param settings DzFileIOSettings
     */
    getCommonApplicationDefaults(settings: DzFileIOSettings): void;

    /**
     * @param className string
     * @param settings DzFileIOSettings
     * @returns boolean
     */
    getCommonDefaults(className: string, settings: DzFileIOSettings): boolean; // Boolean

    /**
     * Populates settings with the values for common to all presets named presetName
     * @param presetName string - The name of the preset to get common settings for
     * @param className string
     * @param settings DzFileIOSettings - The settings object to populate with preset values
     * @returns boolean true if successful, false if presetName does not represent a valid preset
     */
    getCommonSettings(presetName: string, className: string, settings: DzFileIOSettings): boolean; // Boolean

    /**
     * @param className string
     * @param settings DzFileIOSettings
     * @returns boolean
     */
    getCurrentCommonSettings(className: string, settings: DzFileIOSettings): boolean; // Boolean

    /**
     * @param className string
     * @param settings DzFileIOSettings
     * @returns boolean
     */
    getCurrentSpecificSettings(className: string, settings: DzFileIOSettings): boolean; // Boolean

    /**
     * @returns string The name of the custom preset
     */
    getCustomPresetLabel(): string; // String

    /**
     * @returns string The key for the depth axis common setting
     */
    getDepthAxisKey(): string; // String

    /**
     * @returns string The key for the invert depth axis common setting
     */
    getInvertDepthAxisKey(): string; // String

    /**
     * @returns string The key for the invert lateral axis common setting
     */
    getInvertLateralAxisKey(): string; // String

    /**
     * @returns string The key for the invert vertical axis common setting
     */
    getInvertVerticalAxisKey(): string; // String

    /**
     * @returns string The key for the lateral axis common setting
     */
    getLateralAxisKey(): string; // String

    /**
     * @param presetName string
     * @param className string - The optional class name for the given preset. If not passed in or empty then the method will not take into account whether the preset has settings for the given class name.
     * @returns number the id of the preset with the given name, or an -1 if the preset does not exist. Will also return -1 even if the preset exists when className is not empty and the given preset does not have settings for that specific class.
     */
    getPresetID(presetName: string, className?: string): number; // Number

    /**
     * @param id number - The id of the desired preset
     * @param className string - The optional class name for the given preset. If not passed in or empty then the method will not take into account whether the preset has settings for the given class name.
     * @returns string the name of the preset with the given id, or an empty string if the preset does not exist. Will also return an empty string even if the preset exists when className is not empty and the given preset does not have settings for that specific class.
     */
    getPresetName(id: number, className?: string): string; // String

    /**
     * Note:
     * @returns string The key for the scale common setting
     */
    getScaleKey(): string; // String

    /**
     * @param className string
     * @param settings DzFileIOSettings
     * @returns boolean
     */
    getSpecificDefaults(className: string, settings: DzFileIOSettings): boolean; // Boolean

    /**
     * @param presetName string
     * @param className string
     * @param settings DzFileIOSettings
     * @returns boolean
     */
    getSpecificSettings(presetName: string, className: string, settings: DzFileIOSettings): boolean; // Boolean

    /**
     * @param className string - The name of the class to get available presets for. This is typically, but not always, the name of an importer or exporter, such as “DzObjImporter.” If className is empty, returns all system presets
     * @returns any[] the available system-defined presets for the given class name
     */
    getSystemPresets(className: string): any[]; // Array

    /**
     * @param className string - The name of the class to get available presets for. This is typically, but not always, the name of an importer or exporter, such as “DzObjImporter.” If className is empty, returns all user presets
     * @returns any[] the available user-defined presets for the given class name
     */
    getUserPresets(className: string): any[]; // Array

    /**
     * @returns string The key for the vertical axis common setting
     */
    getVerticalAxisKey(): string; // String

    /**
     * @param presetName string - The name of the preset to check
     * @returns boolean true if the preset is a system preset, false if it is a user preset or does not exist
     */
    isSystemPreset(presetName: string): boolean; // Boolean

    /**
     * @param presetName string - The name of the preset to check
     * @returns boolean true if the preset is a user preset, false if it is a system preset or does not exist
     */
    isUserPreset(presetName: string): boolean; // Boolean

    /**
     * @param id number - The id of the preset to check
     * @param className string - The optional class name for the given preset. If not passed in or empty then the check will not take into account whether the preset has settings for the given class name
     * @returns boolean true if the given preset exists, false otherwise
     */
    presetExists(id: number, className?: string): boolean; // Boolean

    /**
     * @param presetName string - The name of the preset to check
     * @param className string - The optional class name for the given preset. If not passed in or empty then the check will not take into account whether the preset has settings for the given class name
     * @returns boolean true if the given preset exists, false otherwise
     */
    presetExists(presetName: string, className?: string): boolean; // Boolean

    /**
     * Attempts to remove the preset with the given preset name and class name.
     * @param presetName string
     * @param className string
     * @returns boolean true if successful, false if the preset could not be removed
     */
    removeUserPreset(presetName: string, className: string): boolean; // Boolean

    /**
     * Attempts to save a user preset with the given preset name and class name
     * @param presetName string - The name of the preset to save
     * @param className string - The name of the class to save settings for presetName
     * @param keepCommonSettings boolean - If a preset named presetName already exists, this settings determines what to do with common settings in the settings parameter. If true, the existing common settings will be kept and those in the settings will be ignored.
     * @param settings DzFileIOSettings - The settings to associate with the new preset
     * @returns boolean true if the preset was saved, false otherwise
     */
    saveUserPreset(presetName: string, className: string, keepCommonSettings: boolean, settings: DzFileIOSettings): boolean; // Boolean

    /* Signals */

    /**
     * Emitted when a preset is added
     * @param presetName string - The name of the preset that was added
     * @param className string - The name of the class that was added
     */
    presetAdded: ISignal<string, string>;

    /**
     * Emitted when presets have been loaded from file and are ready to use
     */
    presetLoadFinished: ISignal<void>;

    /**
     * Emitted when a preset is removed
     * @param presetName string - The name of the preset that was removed
     * @param className string - The name of the class that was removed
     */
    presetRemoved: ISignal<string, string>;
}
