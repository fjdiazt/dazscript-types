declare class DzFileIOPresetMgr extends QObject {

    /* Properties */

    /* Methods */
    presetLoadFinished(): void;
    presetRemoved(presetName: QString, className: QString): void;
    presetAdded(presetName: QString, className: QString): void;
    getAvailablePresets(className: QString): String[];
    getAvailablePresets(className: QString): String[];
    getUserPresets(className: QString): String[];
    getUserPresets(className: QString): String[];
    getSystemPresets(className: QString): String[];
    getSystemPresets(className: QString): String[];
    getAvailableClasses(presetName: QString): String[];
    isUserPreset(presetName: QString): boolean;
    isSystemPreset(presetName: QString): boolean;
    presetExists(presetName: QString, className: QString): boolean;
    presetExists(id: number, className: QString): boolean;
    presetExists(presetName: QString, className: QString): boolean;
    presetExists(id: number, className: QString): boolean;
    presetExists(presetName: QString, className: QString): boolean;
    presetExists(id: number, className: QString): boolean;
    presetExists(presetName: QString, className: QString): boolean;
    presetExists(id: number, className: QString): boolean;
    saveUserPreset(presetName: QString, className: QString, keepCommonSettings: boolean, overwrite: boolean, settings: DzFileIOSettings): boolean;
    removeUserPreset(presetName: QString, className: QString): boolean;
    getPresetName(id: number, className: QString): QString;
    getPresetName(id: number, className: QString): QString;
    getPresetID(presetName: QString, className: QString): number;
    getPresetID(presetName: QString, className: QString): number;
    getSpecificSettings(presetName: QString, className: QString, settings: DzFileIOSettings): boolean;
    getCommonSettings(presetName: QString, settings: DzFileIOSettings): boolean;
    getCommonSettings(presetName: QString, className: QString, settings: DzFileIOSettings): boolean;
    getCommonSettings(presetName: QString, settings: DzFileIOSettings): boolean;
    getCommonSettings(presetName: QString, className: QString, settings: DzFileIOSettings): boolean;
    getAllSettings(presetName: QString, className: QString, settings: DzFileIOSettings): boolean;
    getSpecificDefaults(className: QString, settings: DzFileIOSettings): boolean;
    getCommonDefaults(className: QString, settings: DzFileIOSettings): boolean;
    getAllDefaults(className: QString, settings: DzFileIOSettings): boolean;
    getAllCurrentSettings(className: QString, settings: DzFileIOSettings): boolean;
    getCurrentCommonSettings(className: QString, settings: DzFileIOSettings): boolean;
    getCurrentSpecificSettings(className: QString, settings: DzFileIOSettings): boolean;
    getCommonApplicationDefaults(settings: DzFileIOSettings): void;
    getCustomPresetLabel(): QString;
    getLateralAxisKey(): QString;
    getVerticalAxisKey(): QString;
    getDepthAxisKey(): QString;
    getInvertLateralAxisKey(): QString;
    getInvertVerticalAxisKey(): QString;
    getInvertDepthAxisKey(): QString;
    getScaleKey(): QString;
}