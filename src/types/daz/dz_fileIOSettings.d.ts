/**
 * Base class for all file I/O options. File I/O classes should use this to pass the options supported by the class.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/fileiosettings_dz
 */
declare class DzFileIOSettings extends DzSettings {

    /* Constructors */

    constructor();

    /**
     * @param settings DzFileIOSettings
     */
    constructor(settings: DzFileIOSettings);
}
