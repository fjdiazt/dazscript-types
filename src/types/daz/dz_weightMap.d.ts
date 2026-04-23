/**
 * A map of vertex indices and the weights (values) associated to them.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/weightmap_dz
 */
declare class DzWeightMap extends DzRefCountedItem {

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * Clears the values of affected weights in this map.
     * @since 4.6.3.46
     */
    clearAffectedWeights(): void;

    /**
     * After making a shallow copy with the copy() method, this method can be used to “detach” the shallow copy, making it a deep copy that no longer shares its weight map values.
     */
    detach(): void;

    /**
     * Empties this weight map and frees the data for the vertex weight array.
     */
    empty(): void;

    /**
     * @param idx number - The index of the vertex to get the weight for.
     * @returns number The floating point equivalent (0.0 - 1.0) of the weight at the given index in the map.
     */
    getFloatWeight(idx: number): number; // Number

    /**
     * @returns number The number of vertices in this weight map that are affected.
     * @since 4.6.3.46
     */
    getNumAffected(): number; // Number

    /**
     * @returns number The number of weights for this map.
     */
    getNumWeights(): number; // Number

    /**
     * @returns DzFloatProperty The (private) property that controls the strength at which to apply this weight map.
     * @since 4.15.1.76
     */
    getStrengthControl(): DzFloatProperty;

    /**
     * @returns boolean true if this weight map contains any non-zero weights, otherwise false.
     */
    hasNonZeroWeight(): boolean; // Boolean

    /**
     * @returns boolean true if this weight map has no data, otherwise false.
     */
    isEmpty(): boolean; // Boolean

    /**
     * @returns boolean true if the weight values in this map should be considered non-editable when normalization examines this map.
     */
    isLocked(): boolean; // Boolean

    /**
     * @returns boolean true if the weight values need to be stored in the file, otherwise false.
     */
    isPersistent(): boolean; // Boolean

    /**
     * Merges the given weight map with this weight map.
     * @param map DzWeightMap - The weight map to merge.
     * @since 4.6.3.46
     */
    merge(map: DzWeightMap): void;

    /**
     * @param idx number - The index of the vertex to set the weight for.
     * @param weight number - The floating point equivalent (0.0 - 1.0) of the weight at the given index in the map.
     * @since 4.15.0.4
     */
    setFloatWeight(idx: number, weight: number): void;

    /**
     * Sets whether or not the weight values should be considered locked when normalization examines this map.
     * @param onOff boolean - If true, the weight values should be considered non-editable when normalization examines this map.
     */
    setLocked(onOff: boolean): void;

    /**
     * Sets the number of weights for the map, and resizes the data array.
     * @param nWeights number - The new number of weights (vertices) for the map.
     * @param keepExisting boolean - Whether or not to keep existing weights within the specified range.
     */
    setNumWeights(nWeights: number, keepExisting?: boolean): void;

    /**
     * Sets whether or not the weight values need to be stored in the file.
     * @param onOff boolean - If true, the weight values need to be stored in the file.
     */
    setPersistent(onOff: boolean): void;

    /**
     * Deprecated
     * @returns DzFloatProperty
     */
    getStrengthController(): DzFloatProperty;

    /* Signals */

    /**
     * Emitted when the weights in this map have changed.
     */
    weightValuesChanged: ISignal<void>;

    /* Undocumented Augment Members */

    /** @undocumented */
    copyFrom(element: DzElement): void;
}
