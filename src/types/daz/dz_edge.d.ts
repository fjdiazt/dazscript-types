/**
 * Represents a segment on a face between two vertices.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/edge_dz
 */
declare class DzEdge extends Object {

    /* Properties */

    /**
     * Holds the offset from the cage.
     */
    cageOffsetA: number; // Number

    /**
     * Holds the index of a DzFacet this edge belongs to.
     */
    facetA: number; // Number

    /**
     * Holds the index of the other DzFacet this edge belongs to (if any), otherwise this is an open edge.
     */
    facetB: number; // Number

    /**
     * Holds the index of this edge.
     */
    index: number; // Number

    /**
     * Holds the offset …
     */
    offsetA: number; // Number

    /**
     * Holds the offset …
     */
    offsetB: number; // Number

    /**
     * Holds the index of the vertex this edge originates at.
     */
    vertIdx1: number; // Number

    /**
     * Holds the index of the vertex this edge ends at.
     */
    vertIdx2: number; // Number

    /* Constructors */

    /**
     * @param edge string | DzEdge
     */
    constructor(edge: string | DzEdge);

    constructor();

    /**
     * @param edge string
     */
    constructor(edge: string);

    /**
     * @param vertex1 number
     * @param vertex2 number
     */
    constructor(vertex1: number, vertex2: number);

    /**
     * @param edge DzEdge
     */
    constructor(edge: DzEdge);

    /* Methods */

    /**
     * @returns boolean true if this is an open edge, otherwise false.
     */
    isOpenEdge(): boolean; // Boolean

    /**
     * @returns string A string representation of this edge in the form "[ vertIdx1, vertIdx2, facetA, facetB, offsetA, offsetB, index ]".
     */
    toString(): string; // String
}
