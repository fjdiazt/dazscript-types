/**
 * Convenience object to make working with an Array object easier.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/arrayhelper_dz
 */
declare class DzArrayHelper extends QObject {

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * @param list any[] - The Array to append object to
     * @param value Object - The Object to append to list
     * @returns any[] A copy of list with object appended if object did not already exist in list
     */
    addToArray(list: any[], value: Object): any[]; // Array

    /**
     * @param list any[] - The Array to check for object
     * @param value Object - The Object to check list for
     * @returns number The index into list if object was found, otherwise -1
     */
    isInArray(list: any[], value: Object): number; // Number

    /**
     * @param list any[] - The Array to check for object
     * @param obj Object
     * @returns number The index into list if object was found, otherwise -1
     */
    isInArrayByName(list: any[], obj: Object): number; // Number
}
