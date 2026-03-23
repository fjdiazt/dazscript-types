/**
 * Base type of script accessible objects in the Daz Studio API.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/object_q
 */
declare class QObject {

    /* Properties */

    /**
     * Holds the name of the object.
     */
    objectName: string;

    /**
     * Holds the name of the object.
     */
    name: string;

    /* Methods */

    /**
     * Emitted immediately before the object is destroyed.
     * @param obj QObject
     */
    destroyed(obj?: QObject): void;

    /**
     * Schedules this object for deletion.
     */
    deleteLater(): void;

    /**
     * @param classname string - The name of the class to test for inheritance.
     * @returns boolean true if the object inherits classname, otherwise false.
     */
    inherits(classname: string): boolean;

    /**
     * @returns string A string representation of the object classname.
     */
    className(): string;

    /** @undocumented */
    update(): void;
}