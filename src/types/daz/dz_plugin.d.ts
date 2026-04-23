/**
 * Class that defines a DAZ Studio plug-in.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/plugin_dz
 */
declare class DzPlugin extends QObject {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of Status.
     */
    static Loaded: number;

    /**
     * DAZ enum member of Status.
     */
    static RequiresRestart: number;

    /**
     * DAZ enum member of Status.
     */
    static ManuallyDisabled: number;

    /**
     * DAZ enum member of Status.
     */
    static EvaluationInvalid: number;

    /**
     * DAZ enum member of Status.
     */
    static Failed: number;

    /* Methods */

    /**
     * @returns string The author of the plug-in.
     */
    getAuthor(): string; // String

    /**
     * @returns string The author's description of the plug-in.
     */
    getDescription(): string; // String

    /**
     * @returns string The evaluation information of the plug-in in string form.
     */
    getEvaluationInformation(): string; // String

    /**
     * @returns string The absolute file path to the plug-in; set by DzApp when the plug-in is loaded.
     */
    getFilename(): string; // String

    /**
     * @returns boolean true if the plug-in should load on application start, otherwise false.
     */
    getLoadOnStart(): boolean; // Boolean

    /**
     * @returns string The name of the plug-in.
     */
    getName(): string; // String

    /**
     * @returns any[] A list of prefixes that can be used to serialize this plugin (if any), otherwise an empty list.
     * @since 4.11.0.35
     */
    getPrefixes(): any[]; // Array

    /**
     * @returns number The load state of the plug-in.
     */
    getStatus(): number; // Status

    /**
     * @returns string Additional information about the plug-in load state.
     */
    getStatusInformation(): string; // String

    /**
     * @returns string The string representation of the plug-in load state.
     */
    getStatusString(): string; // String

    /**
     * @returns DzVersion The version number of the plug-in.
     */
    getVersion(): DzVersion;

    /**
     * @returns string The version number of the plug-in in string form.
     */
    getVersionString(): string; // String

    /**
     * @returns boolean true if the plug-in is activated, otherwise false. A plug-in is considered activated if it has either been registered or it is within an evaluation period.
     */
    isActivated(): boolean; // Boolean

    /**
     * @returns boolean true if the plug-in has been registered, otherwise false. A plug-in is considered registered if a valid serial number for the plug-in has been applied, or if the plug-in does not use serial number registration. A plug-in that is within an evaluation period is not considered registered.
     */
    isRegistered(): boolean; // Boolean

    /**
     * @param serialNumber string - The serial number to validate.
     * @param saveIfValid boolean - If true, the serial number will be saved if it is found to be valid.
     * @returns boolean true if the serial number is valid for the plug-in, otherwise false.
     */
    validateSerialNumber(serialNumber: string, saveIfValid: boolean): boolean; // Boolean
}
