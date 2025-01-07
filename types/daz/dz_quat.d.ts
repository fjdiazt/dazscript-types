declare class DzQuat {
    constructor()
    constructor(quat: DzQuat)
    constructor(q0: number, q1: number, q2: number, q3: number)
    constructor(quat: DzVec3, radians: number)

    /* Properties */
    objectName: string;
    x: number;
    y: number;
    z: number;
    w: number;

    /* Methods */
    destroyed(): any; // TODO ;
    destroyed(): any; // TODO ;
    deleteLater(): any; // TODO ;
    inherits(): any; // TODO ;
    className(): any; // TODO ;
    toString(): any; // TODO ;
    isIdentity(): boolean;
    inverse(): DzQuat;
    multVec(src: DzVec3): DzVec3;
    multiply(rot: DzQuat): DzQuat;
    getValue(m: DzMatrix3): void;
    getValue(m: DzMatrix4): void;
    getValue(order: DzRotationOrder, angles: DzVec3): void;
    getValue(axis: DzVec3, radians: number): void;
    getValue(vec: DzVec3): void;
    getValue(q: number, q1: number, q2: number, q3: number): void;
    getValue(vec: number[]): void;
    getXAxis(vec?: DzVec3): DzVec3;
    getYAxis(vec?: DzVec3): DzVec3;
    getZAxis(vec?: DzVec3): DzVec3;
    invert(): void;
    makeClosest(r: DzQuat): void;
    scaleAngle(scaleFactor: number): void;
    makeIdentity(): void;
    normalize(): void;
    setValue(order: DzRotationOrder, angles: DzVec3): void;
    setValue(mtx: DzMatrix3): void;
    setValue(mtx: DzMatrix4): void;
    setValue(quat: DzQuat): void;
    setValue(axis: DzVec3, radians: number): void;
    setValue(vec: DzVec3): void;
    setValue(xAxis: DzVec3, yAxis: DzVec3): void;
    setValue(vec: number[], normalize: boolean): void;
    setValue(x: number, y: number, z: number, w: number, normalize: boolean): void;
    setValue(axis: number, radians: number): void;
    setValue(order: DzRotationOrder, angles: DzVec3): void;
    setValue(mtx: DzMatrix3): void;
    setValue(mtx: DzMatrix4): void;
    setValue(quat: DzQuat): void;
    setValue(axis: DzVec3, radians: number): void;
    setValue(vec: DzVec3): void;
    setValue(xAxis: DzVec3, yAxis: DzVec3): void;
    setValue(vec: number[], normalize: boolean): void;
    setValue(q: number, q1: number, q2: number, q3: number, normalize: boolean): void;
    setValue(axis: number, radians: number): void;
    setValue(order: DzRotationOrder, angles: DzVec3): void;
    setValue(mtx: DzMatrix3): void;
    setValue(mtx: DzMatrix4): void;
    setValue(quat: DzQuat): void;
    setValue(axis: DzVec3, radians: number): void;
    setValue(vec: DzVec3): void;
    setValue(xAxis: DzVec3, yAxis: DzVec3): void;
    setValue(vec: number[], normalize: boolean): void;
    setValue(q: number, q1: number, q2: number, q3: number, normalize: boolean): void;
    setValue(axis: number, radians: number): void;
    setValue(order: DzRotationOrder, angles: DzVec3): void;
    setValue(mtx: DzMatrix3): void;
    setValue(mtx: DzMatrix4): void;
    setValue(quat: DzQuat): void;
    setValue(axis: DzVec3, radians: number): void;
    setValue(vec: DzVec3): void;
    setValue(xAxis: DzVec3, yAxis: DzVec3): void;
    setValue(vec: number[], normalize: boolean): void;
    setValue(q: number, q1: number, q2: number, q3: number, normalize: boolean): void;
    setValue(axis: number, radians: number): void;
}