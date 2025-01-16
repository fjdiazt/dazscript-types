declare class DzTimeRange {
    constructor(start: number, end: number);
    constructor(start: DzTime, end: DzTime);

    /* Properties */
    objectName: string;
    start: number;
    end: number;

    /* Methods */
    destroyed(): any; // TODO ;
    destroyed(): any; // TODO ;
    deleteLater(): any; // TODO ;
    inherits(): any; // TODO ;
    className(): any; // TODO ;
    toString(): any; // TODO ;
    getDuration(): DzTime;
    isEmpty(): boolean;
    isIncluded(t: DzTime): boolean;
    isIncluded(iv: DzTimeRange): boolean;
    isIncluded(t: DzTime): boolean;
    isIncluded(iv: DzTimeRange): boolean;
    overlaps(iv: DzTimeRange): boolean;
    add(): any; // TODO ;
    subtract(): any; // TODO ;
    include(t: DzTime): void;
    include(interval: DzTimeRange): void;
    include(t: DzTime): void;
    include(interval: DzTimeRange): void;
    intersect(interval: DzTimeRange): void;
    extendEndsBy(val: DzTime): void;
    makeEmpty(): void;
}