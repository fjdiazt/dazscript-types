declare class DzVec3 {
    constructor()
    constructor(vec3: DzVec3)
    constructor(x: number, y: number, z: number)
    /* Properties */
    objectName: string;
    x: number;
    y: number;
    z: number;

    /* Methods */
    destroyed(): any; // TODO ;
    destroyed(): any; // TODO ;
    deleteLater(): any; // TODO ;
    inherits(): any; // TODO ;
    className(): any; // TODO ;
    toString(): any; // TODO ;
    length(): number;
    lengthSquared(): number;
    normalized(): DzVec3;
    cross(vec: DzVec3): DzVec3;
    dot(vec: DzPnt3): number;
    dot(vec: DzVec3): number;
    getAngleTo(vec: DzVec3): number;
    getRotationTo(vec: DzVec3): DzQuat;
    add(vec: DzVec3): DzVec3;
    subtract(vec: DzVec3): DzVec3;
    multiply(vec: DzVec3): DzVec3
    divide(vec: DzVec3): DzVec3
    makeZero(): void;
    makeIdentity(): void;
    negate(): void;
    setLength(length: number): void;
    normalize(): void;
    square(): void;
    abs(): void;
}