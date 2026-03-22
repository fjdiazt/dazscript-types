declare class DzBox3 extends QObject {

    /* Properties */
    min: DzVec3;
    max: DzVec3;
    minX: number;
    minY: number;
    minZ: number;
    maxX: number;
    maxY: number;
    maxZ: number;

    /* Methods */
    toString(): any; // TODO ;
    getSize(): number;
    getCenter(): DzVec3;
    getTransformedBox(): any; // TODO ;
    include(box: DzBox3): void;
    include(pnt: DzVec3): void;
    include(pnt: number[]): void;
    translate(): any; // TODO ;
}