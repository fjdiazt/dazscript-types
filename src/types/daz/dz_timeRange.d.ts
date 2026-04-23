/**
 * Represents an interval of time with a beginning and an end.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/timerange_dz
 */
declare class DzTimeRange extends Object {

    /* Properties */

    /**
     * The end of this time range.
     */
    end: DzTime;

    /**
     * The start of this time range.
     */
    start: DzTime;

    /* Constructors */

    /**
     * @param range string | DzTimeRange
     */
    constructor(range: string | DzTimeRange);

    constructor();

    /**
     * @param range string
     */
    constructor(range: string);

    /**
     * @param range DzTimeRange
     */
    constructor(range: DzTimeRange);

    /**
     * @param start DzTime
     * @param end DzTime
     */
    constructor(start: DzTime, end: DzTime);

    /* Methods */

    /**
     * Adds the given amount of time to both ends of this range.
     * @param time DzTime - The amount of time to add.
     */
    add(time: DzTime): void;

    /**
     * Extends the ends of this time range by the given amount of time, effectively expanding it by 2 * the specified time.
     * @param time DzTime - The amount of time to extend by - must be non-negative.
     */
    extendEndsBy(time: DzTime): void;

    /**
     * @returns DzTime The length of this time range (end - start).
     */
    getDuration(): DzTime;

    /**
     * Expands this time range to include the given time.
     * @param time DzTime - The time to include.
     */
    include(time: DzTime): void;

    /**
     * Expands this time range to include the given time range.
     * @param range DzTimeRange - The time range to include.
     */
    include(range: DzTimeRange): void;

    /**
     * Sets this time range to the intersection with the given time range.
     * @param range DzTimeRange - The time range to intersect.
     */
    intersect(range: DzTimeRange): void;

    /**
     * @returns boolean true if this time range is length 0, otherwise false.
     */
    isEmpty(): boolean; // Boolean

    /**
     * @param time DzTime
     * @returns boolean true if the given time falls inside this range, otherwise false.
     */
    isIncluded(time: DzTime): boolean; // Boolean

    /**
     * @param range DzTimeRange
     * @returns boolean true if the given range falls inside this range, otherwise false.
     */
    isIncluded(range: DzTimeRange): boolean; // Boolean

    /**
     * Sets this time range to be empty.
     */
    makeEmpty(): void;

    /**
     * @param range DzTimeRange
     * @returns boolean true if the given range overlaps this range, otherwise false.
     */
    overlaps(range: DzTimeRange): boolean; // Boolean

    /**
     * Subtracts the given amount of time from both ends of this range.
     * @param time DzTime - The amount of time to subtract.
     */
    subtract(time: DzTime): void;

    /**
     * @returns string A string representation of this time range in the form "[ start, end ]".
     */
    toString(): string; // String

    /* Undocumented Augment Members */

    /** @undocumented */
    objectName: string;

    /** @undocumented */
    destroyed(): any; // TODO ;

    /** @undocumented */
    destroyed(): any; // TODO ;

    /** @undocumented */
    deleteLater(): any; // TODO ;

    /** @undocumented */
    inherits(): any; // TODO ;

    /** @undocumented */
    className(): any; // TODO ;
}
