/**
 * Represents a sorted list of indices - such as a group of vertices, or faces.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/indexlist_dz
 */
declare class DzIndexList extends DzBase {

    /* Methods */

    /**
     * Adds an index to the list.
     * @param idx number - The index to append to the list.
     */
    addIndex(idx: number): void;

    /**
     * Adds a list of indices to this index list.
     * @param list DzIndexList - The list of indices to add.
     * @since 4.11.0.61
     */
    addIndices(list: DzIndexList): void;

    /**
     * Adds an index to the list. This method is faster in the case where it is likely the index being added is at the end of the current list.
     * @param idx number - The index to append to the list.
     */
    addSortedIndex(idx: number): void;

    /**
     * Removes all indices from the list and sets its count to zero.
     */
    clear(): void;

    /**
     * @returns number The number of indices in the list.
     */
    count(): number; // Number

    /**
     * Finds an index in the list.
     * @param idx number - The index to find in the list.
     * @returns number The index (in the list) for the requested index. Returns -1 if the index is not found.
     */
    findIndex(idx: number): number; // Number

    /**
     * @param i number - The position of the index to return.
     * @returns number The index at the given position in the list.
     */
    getIndex(i: number): number; // Number

    /**
     * @returns number If the list is not empty, the highest index in the list, otherwise -1.
     */
    getMaxIndex(): number; // Number

    /**
     * Adds an index to the list.
     * @param idx number - The index to append to the list.
     * @returns number The position in the list that the index actually exists.
     * @since 4.11.0.61
     */
    insertIndex(idx: number): number; // Number

    /**
     * Adds an index to the list. This method is faster in the case where it is likely the index being added is at the end of the current list.
     * @param idx number - The index to append to the list.
     * @returns number The position in the list that the index actually exists.
     * @since 4.11.0.61
     */
    insertSortedIndex(idx: number): number; // Number

    /**
     * Pre-sizes the list.
     * @param count number - The number of items to allocate room for in the size of the list.
     * @since 4.11.0.61
     */
    preSizeArray(count: number): void;

    /**
     * This function is typically called when a component (e.g. vertex or face) has been removed from the list that the indices in this list reference. This function removes the specified index from the list if it is found, and decrements all indices in the list greater than the specified index in order to 'clean-up' the list of indices.
     * @param idx number - The index of the item that needs to be removed.
     * @returns boolean true on success, otherwise false.
     */
    removeComponent(idx: number): boolean; // Boolean

    /**
     * Removes the specified index from the list.
     * @param idx number - The index to remove from the list.
     * @returns boolean
     */
    removeIndex(idx: number): boolean; // Boolean

    /**
     * Removes all indices in the toRemove list from this list.
     * @param toRemove DzIndexList - The list of indices to remove.
     * @returns boolean true on success, otherwise false.
     */
    removeIndexes(toRemove: DzIndexList): boolean; // Boolean

    /**
     * @returns any[] A list of the indices.
     * @since 4.11.0.61
     */
    toList(): any[]; // Array

    /**
     * @returns string The string representation of the object.
     * @since 4.11.0.61
     */
    toString(): string; // String

    /**
     * @returns any[] A list of the indices.
     * @since 4.22.1.92
     */
    toVector(): any[]; // Array
}
