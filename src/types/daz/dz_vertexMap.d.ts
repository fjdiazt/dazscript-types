/**
 * Implements a map with one value per vertex, as well as supporting discontinuous values.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/vertexmap_dz
 */
declare class DzVertexMap extends DzRefCountedItem {

    /* Constructors */

    /**
     * @param mapType MapType
     */
    constructor(mapType?: MapType);

    /* Methods */

    /**
     * Adds a discontinuous data item to the map.
     * @param vertexIdx number - The index of the vertex that this data is for.
     * @param facetIdx number - The index of the facet that this data is for.
     * @param val number - The data value to add to the map.
     */
    addDctFloatValue(vertexIdx: number, facetIdx: number, val: number): void;

    /**
     * Adds a discontinuous data item to the map.
     * @param vertexIdx number - The index of the vertex that this data is for.
     * @param facetIdx number - The index of the facet that this data is for.
     * @param val number - The data value to add to the map.
     */
    addDctIntValue(vertexIdx: number, facetIdx: number, val: number): void;

    /**
     * Adds a discontinuous data item to the map.
     * @param vertexIdx number - The index of the vertex that this data is for.
     * @param facetIdx number - The index of the facet that this data is for.
     * @param val DzVec3 - The data value to add to the map.
     */
    addDctPnt2Vec(vertexIdx: number, facetIdx: number, val: DzVec3): void;

    /**
     * Adds a discontinuous data item to the map.
     * @param vertexIdx number - The index of the vertex that this data is for.
     * @param facetIdx number - The index of the facet that this data is for.
     * @param val DzVec3 - The data value to add to the map.
     */
    addDctPnt3Vec(vertexIdx: number, facetIdx: number, val: DzVec3): void;

    /**
     * Adds a discontinuous data item to the map.
     * @param vertexIdx number - The index of the vertex that this data is for.
     * @param facetIdx number - The index of the facet that this data is for.
     * @param val number - The data value to add to the map.
     */
    addDctShortValue(vertexIdx: number, facetIdx: number, val: number): void;

    /**
     * Removes all the discontinuous values from the map
     */
    clearDiscontinuousData(): void;

    /**
     * @param vertexIdx number - The index of the vertex to get data for
     * @param facetIdx number - The index of the facet to get data for
     * @returns number The index of the data item in the map for the given facet vertex.
     */
    getMapIndex(vertexIdx: number, facetIdx: number): number; // Number

    /**
     * @returns number The number of discontinuous vertices in the map.
     */
    getNumDiscontinuousVerts(): number; // Number

    /**
     * @returns number The number of vertices in the geometry that this vertex map is for.
     * @since 4.9.3.137
     */
    getTargetVertexCount(): number; // Number

    /**
     * Pre-sizes the discontinuous data for better memory performance.
     * @param disconCount number
     */
    preSizeDiscontinuous(disconCount: number): void;

    /**
     * Sets the facet vertex to have discontinuous data which points to the given map index. This function will update existing data for the facet vertex, or will create new data if necessary.
     * @param vertexIdx number - The index of the vertex that this data is for.
     * @param facetIdx number - The index of the facet to set the discontinuous map index for.
     * @param mapIdx number - The index of the map item that this facet vertex will use.
     */
    setDctIndex(vertexIdx: number, facetIdx: number, mapIdx: number): void;

    /**
     * Sets the vertex count of this vertex map.
     * @param vertCount number - The number of vertices in the mesh that this map is for.
     * @since 4.9.3.137
     */
    setTargetVertexCount(vertCount: number): void;

    /**
     * Reduces discontinuous data down to the minimum space required.
     */
    squeezeDiscontinuous(): void;

    /**
     * Updates a discontinuous value for a given facet and oldIdx. This does not remove any values from the map, it may add a new discontinuous value if the newIdx and oldIdx have different map values.
     * @param oldIdx number
     * @param newIdx number
     * @param facetIdx number
     */
    updateDctValue(oldIdx: number, newIdx: number, facetIdx: number): void;
}
