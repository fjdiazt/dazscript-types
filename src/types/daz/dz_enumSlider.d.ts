/**
 * An integer slider that displays a set of string values in place of numeric values.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/enumslider_dz
 */
declare class DzEnumSlider extends DzIntSlider {

    /* Properties */

    /**
     * Holds the number of items on the slider. (Read Only)
     */
    count: number; // Number

    /* Constructors */

    /**
     * @param parent DzWidget
     */
    constructor(parent: DzWidget);

    /* Methods */

    /**
     * Adds a string to the list of items, and adjusts the maximum value for the slider.
     * @param label string - The string value to add to the list of items in the slider.
     * @returns number The index of the item - this is the numeric value of the slider that corresponds to the string value.
     */
    addItem(label: string): number; // Number

    /**
     * Clears the list of string values for this slider.
     */
    clear(): void;

    /**
     * @param index number - The index of the item to get.
     * @returns string The string representing the item specified.
     */
    getItem(index: number): string; // String

    /**
     * Moves an item from one position to another.
     * @param from number - The index of the item to move. If out of range, this method has no effect.
     * @param to number - The new index for the item. If out of range, from becomes the last item.
     */
    moveItem(from: number, to: number): void;

    /**
     * Removes the item at the specified position from the list.
     * @param index number - The index of the item. If out of range, this method has no effect.
     */
    removeItem(index: number): void;

    /**
     * Renames the item at the specified position.
     * @param index number - The index of the item to rename. If out of range, this method has no effect.
     * @param label string - The new value of the item at index.
     */
    renameItem(index: number, label: string): void;
}
