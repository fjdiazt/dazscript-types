/**
 * Represents a polygonal face within a polygon mesh.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/facet_dz
 */
declare class DzFacet extends Object {

    /* Properties */

    /**
     * Holds the index of this face in the cage mesh
     */
    cageIndex: number; // Number

    /**
     * Holds the index of the first edge, otherwise -1
     */
    edgeIdx1: number; // Number

    /**
     * Holds the index of the second edge, otherwise -1
     */
    edgeIdx2: number; // Number

    /**
     * Holds the index of the third edge, otherwise -1
     */
    edgeIdx3: number; // Number

    /**
     * Holds the index of the fourth edge normal (if any), otherwise -1
     */
    edgeIdx4: number; // Number

    /**
     * Holds the index of the face group this face belongs to
     */
    faceGroupIndex: number; // Number

    /**
     * Holds the index of the material group this face belongs to
     */
    materialIndex: number; // Number

    /**
     * Holds the index of the first vertex normal
     */
    normIdx1: number; // Number

    /**
     * Holds the index of the second vertex normal
     */
    normIdx2: number; // Number

    /**
     * Holds the index of the third vertex normal
     */
    normIdx3: number; // Number

    /**
     * Holds the index of the fourth vertex normal (if any), otherwise -1
     */
    normIdx4: number; // Number

    /**
     * Holds the index of the first texture vertex
     */
    uvwIdx1: number; // Number

    /**
     * Holds the index of the second texture vertex
     */
    uvwIdx2: number; // Number

    /**
     * Holds the index of the third texture vertex
     */
    uvwIdx3: number; // Number

    /**
     * Holds the index of the fourth texture vertex (if any), otherwise -1
     */
    uvwIdx4: number; // Number

    /**
     * Holds the index of the first vertex
     */
    vertIdx1: number; // Number

    /**
     * Holds the index of the second vertex
     */
    vertIdx2: number; // Number

    /**
     * Holds the index of the third vertex
     */
    vertIdx3: number; // Number

    /**
     * Holds the index of the fourth vertex (if any), otherwise -1
     */
    vertIdx4: number; // Number

    /* Constructors */

    /**
     * @param facet string | DzFacet
     */
    constructor(facet: string | DzFacet);

    constructor();

    /**
     * @param facet string
     */
    constructor(facet: string);

    /**
     * @param facet DzFacet
     */
    constructor(facet: DzFacet);

    /* Methods */

    /**
     * Set the facet to a default state.
     */
    clear(): void;

    clearTriFanCount(): void;

    clearTriFanRoot(): void;

    /**
     * @returns number
     */
    getTriFanCount(): number; // Number

    /**
     * @returns number
     */
    getTriFanEdgeCount(): number; // Number

    /**
     * @returns number
     */
    getTriFanMaxEdgeIdx(): number; // Number

    /**
     * @returns number
     */
    getTriFanOffset(): number; // Number

    /**
     * @returns number
     */
    getTriFanRoot(): number; // Number

    /**
     * @returns boolean true if this is a 4 sided polygon, otherwise false
     */
    isQuad(): boolean; // Boolean

    /**
     * @returns boolean true if this is a 3 sided polygon, otherwise false
     */
    isTri(): boolean; // Boolean

    /**
     * @returns boolean
     */
    isTriFan(): boolean; // Boolean

    /**
     * @returns boolean
     */
    isTriFanChild(): boolean; // Boolean

    /**
     * @returns boolean
     */
    isTriFanRoot(): boolean; // Boolean

    /**
     * @param count number
     */
    setTriFanCount(count: number): void;

    /**
     * @param rootIdx number
     */
    setTriFanRoot(rootIdx: number): void;

    /**
     * @returns string A string representation of this facet in the form "[[ vertIdx1, vertIdx2, vertIdx3, vertIdx4 ], [ uvwIdx1, uvwIdx2, uvwIdx3, uvwIdx4 ], [ normIdx1, normIdx2, normIdx3, normIdx4 ], [ edgeIdx1, edgeIdx2, edgeIdx3, edgeIdx4 ], materialIndex, faceGroupIndex, cageIndex ]".
     */
    toString(): string; // String
}
