/**
 * Provides a mechanism to control the lifetime of a reference counted object.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/scripthandle_dz
 */
declare class DzScriptHandle extends QObject {

    /* Properties */

    /**
     * Holds the object whose lifetime is being controlled.
     */
    handle: Object;

    /**
     * Used to accesses the value of handle as a QObject. (Read Only)
     */
    object: Object;

    /**
     * Holds whether or not handle can be used to retrieve a valid QObject. (Read Only)
     */
    valid: boolean; // Boolean

    /* Constructors */

    constructor();

    /**
     * @param handle Object
     */
    constructor(handle: Object);
}
