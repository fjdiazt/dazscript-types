/**
 * Base class for all property value maps. Meshes can have any number of maps of various types.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/map_dz
 */
declare class DzMap extends DzRefCountedItem {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of MapType.
     */
    static FLOAT_MAP: number;

    /**
     * DAZ enum member of MapType.
     */
    static FLOAT2_MAP: number;

    /**
     * DAZ enum member of MapType.
     */
    static FLOAT3_MAP: number;

    /**
     * DAZ enum member of MapType.
     */
    static INT_MAP: number;

    /**
     * DAZ enum member of MapType.
     */
    static SHORT_MAP: number;

    /* Constructors */

    /**
     * @param mapType number
     */
    constructor(mapType?: number);

    /* Methods */

    /**
     * Append a new value to the end of a float map.
     * @param val number - The new value to append to the map.
     */
    appendFloatValue(val: number): void;

    /**
     * Append a new value to the end of a integer map.
     * @param val number - The new value to append to the map.
     */
    appendIntValue(val: number): void;

    /**
     * Appends a value to a float 2 map.
     * @param val DzVec3 - The value to append to the map. The z value of the vector is ignored.
     */
    appendPnt2Vec(val: DzVec3): void;

    /**
     * Appends a value to a float 3 map.
     * @param val DzVec3 - The value to append to the map.
     */
    appendPnt3Vec(val: DzVec3): void;

    /**
     * Append a new value to the end of a short value map.
     * @param val number - The new value to append to the map.
     */
    appendShortValue(val: number): void;

    /**
     * Clears all map values. After this call, the number of values in the map will be zero.
     */
    clearAllData(): void;

    /**
     * @param idx number - Not used.
     * @returns number The maximum value of this map - for maps of the FLOAT_MAP type.
     * @since 4.6.4.28
     */
    getFloatMax(idx: number): number; // Number

    /**
     * @param idx number - Not used.
     * @returns number The minimum value of this map - for maps of the FLOAT_MAP type.
     * @since 4.6.4.28
     */
    getFloatMin(idx: number): number; // Number

    /**
     * @param idx number
     * @returns number The value of this map at the specified index (if valid), or the default value if the index is out of range - for maps of the FLOAT_MAP type.
     */
    getFloatValue(idx: number): number; // Number

    /**
     * @param idx number - The index of the value to retrieve.
     * @returns number The value of this map at the specified index (if valid), or the default value if the index is out of range - for maps of the INT_MAP type.
     */
    getIntValue(idx: number): number; // Number

    /**
     * @param idx number - Not used.
     * @returns number The maximum value of this map - for maps of the INT_MAP type.
     * @since 4.6.4.28
     */
    getIntValueMax(idx: number): number; // Number

    /**
     * @param idx number - Not used.
     * @returns number The minimum value of this map - for maps of the INT_MAP type.
     * @since 4.6.4.28
     */
    getIntValueMin(idx: number): number; // Number

    /**
     * @returns string The label for this map.
     */
    getLabel(): string; // String

    /**
     * @returns number The number of dimensions for this map.
     */
    getNumDimensions(): number; // Number

    /**
     * @returns number The number of values currently in this map.
     */
    getNumValues(): number; // Number

    /**
     * @returns DzGeometry The geometry that this map has been reordered to match, or NULL if none.
     */
    getOrderingGeometry(): DzGeometry;

    /**
     * @param idx number - The index of the value to retrieve.
     * @returns DzVec3 The value of this map at the specified index (if valid), or the default value if the index is out of range - for maps of the FLOAT2_MAP type. The value will be contained in the X and Y components of the vector - the Z component will always be zero.
     */
    getPnt2Vec(idx: number): DzVec3;

    /**
     * @param idx number - Not used.
     * @returns DzVec3 The maximum value of this map - for maps of the FLOAT2_MAP type.
     * @since 4.6.4.28
     */
    getPnt2VecMax(idx: number): DzVec3;

    /**
     * @param idx number - Not used.
     * @returns DzVec3 The minimum value of this map - for maps of the FLOAT2_MAP type.
     * @since 4.6.4.28
     */
    getPnt2VecMin(idx: number): DzVec3;

    /**
     * @param idx number - The index of the value to retrieve.
     * @returns DzVec3 The value of this map at the specified index (if valid), or the default value if the index is out of range - for maps of the FLOAT3_MAP type.
     */
    getPnt3Vec(idx: number): DzVec3;

    /**
     * @param idx number - Not used.
     * @returns DzVec3 The maximum value of this map - for maps of the FLOAT3_MAP type.
     * @since 4.6.4.28
     */
    getPnt3VecMax(idx: number): DzVec3;

    /**
     * @param idx number - Not used.
     * @returns DzVec3 The minimum value of this map - for maps of the FLOAT3_MAP type.
     * @since 4.6.4.28
     */
    getPnt3VecMin(idx: number): DzVec3;

    /**
     * @param idx number - The index of the value to retrieve.
     * @returns number The value of this map at the specified index (if valid), or the default value if the index is out of range - for maps of the SHORT_MAP type.
     */
    getShortValue(idx: number): number; // Number

    /**
     * @param idx number - Not used.
     * @returns number The maximum value of this map - for maps of the SHORT_MAP type.
     * @since 4.6.4.28
     */
    getShortValueMax(idx: number): number; // Number

    /**
     * @param idx number - Not used.
     * @returns number The minimum value of this map - for maps of the SHORT_MAP type.
     * @since 4.6.4.28
     */
    getShortValueMin(idx: number): number; // Number

    /**
     * @returns number The type of this map.
     */
    getType(): number; // MapType

    /**
     * @returns boolean true if the values of the map are in unit space, otherwise false.
     * @since 4.6.4.28
     */
    inUnitSpace(): boolean; // Boolean

    /**
     * Invalidates the calculated minimum and maximum values for this map.
     * @since 4.6.4.28
     */
    invalidateMinMax(): void;

    /**
     * @returns DzMap A copy of this map.
     * @since 4.11.0.300
     */
    makeCopy(): DzMap;

    /**
     * Pre-allocates size of the data array.
     * @param num number - The new number of values to pre-allocate for this map.
     */
    preSize(num: number): void;

    /**
     * Sets the default value for a float map. This is the value returned if the map is empty or a map data value is requested that is outside the index range of this map.
     * @param defaultVal number
     */
    setDefaultFloatValue(defaultVal: number): void;

    /**
     * Sets the default value for an integer map. This is the value returned if the map is empty or a map data value is requested that is outside the index range of this map.
     * @param defaultVal number
     */
    setDefaultIntValue(defaultVal: number): void;

    /**
     * Sets the default value of a float 2 map.
     * @param defaultVal DzVec3 - The default value of this map. The z value of the vector is ignored.
     */
    setDefaultPnt2Vec(defaultVal: DzVec3): void;

    /**
     * Sets the default value of a float 3 map.
     * @param defaultVal DzVec3 - The default value of this map.
     */
    setDefaultPnt3Vec(defaultVal: DzVec3): void;

    /**
     * Sets the default value for a short value map. This is the value returned if the map is empty or a map data value is requested that is outside the index range of this map.
     * @param defaultVal number
     */
    setDefaultShortValue(defaultVal: number): void;

    /**
     * Set one of the currently existing data values on a float map.
     * @param idx number - The index of the value to set.
     * @param val number - The new value.
     */
    setFloatValue(idx: number, val: number): void;

    /**
     * Set one of the currently existing data values on a integer map.
     * @param idx number - The index of the entry to set.
     * @param val number - The value of this map at the specified index (if valid).
     */
    setIntValue(idx: number, val: number): void;

    /**
     * Sets the user-readable label for the map.
     * @param label string - The new label for the map.
     */
    setLabel(label: string): void;

    /**
     * Changes the type of this map.
     * @param mapType number - The new type for the map.
     * @param keepData boolean - If true, the existing data will be converted to the new type as much as possible. If false, the existing data is lost, and the number of values in the map will be zero.
     */
    setMapType(mapType: number, keepData?: boolean): void;

    /**
     * Sets the size of the data array. Does not initialize newly allocated values.
     * @param num number - The new number of values contained in this map.
     */
    setNumValues(num: number): void;

    /**
     * Set one of the currently existing data values on a float 2 map.
     * @param idx number - The index of the entry to set.
     * @param val DzVec3 - The value of this map at the specified index (if valid). The z value of the vector is ignored.
     */
    setPnt2Vec(idx: number, val: DzVec3): void;

    /**
     * Set one of the currently existing data values on a float 3 map.
     * @param idx number - The index of the entry to set
     * @param val DzVec3 - The value of this map at the specified index (if valid).
     */
    setPnt3Vec(idx: number, val: DzVec3): void;

    /**
     * Set one of the currently existing data values on a short value map.
     * @param idx number - The index of the entry to set.
     * @param val number - The value of this map at the specified index (if valid).
     */
    setShortValue(idx: number, val: number): void;

    /* Signals */

    /**
     * Emitted when the map's label changes.
     */
    labelChanged: ISignal<void>;

    /**
     * Emitted whenever values are added, removed or modified on the map.
     */
    mapModified: ISignal<void>;
}
