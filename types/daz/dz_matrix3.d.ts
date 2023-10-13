declare class DzMatrix3 {

    /* Properties */
    objectName: string;
    m11: number;
    m12: number;
    m13: number;
    m14: number;
    m21: number;
    m22: number;
    m23: number;
    m24: number;
    m31: number;
    m32: number;
    m33: number;
    m34: number;
    isIdentity: boolean;

    /* Methods */
    destroyed(): any; // TODO ;
    destroyed(): any; // TODO ;
    deleteLater(): any; // TODO ;
    inherits(): any; // TODO ;
    className(): any; // TODO ;
    toString(): any; // TODO ;
    inverse(): DzMatrix3;
    orthogonal(): boolean;
    multMatrixVec(): any; // TODO ;
    multiply(): any; // TODO ;
    makeIdentity(): void;
    noTrans(): void;
    noRot(): void;
    noScale(): void;
    orthogonalize(): void;
    setTrans(pnt: DzVec3): void;
    translate(v: DzVec3): void;
    preTranslate(v: DzVec3): void;
    rotateX(radians: number): void;
    rotateY(radians: number): void;
    rotateZ(radians: number): void;
    rotate(rot: DzQuat): void;
    preRotateX(radians: number): void;
    preRotateY(radians: number): void;
    preRotateZ(radians: number): void;
    preRotate(rot: DzQuat): void;
    scale(vec: DzVec3, affectTrans: boolean): void;
    scale(scale: number, affectTrans: boolean): void;
    scale(scale: number, direction: DzVec3, affectTrans: boolean): void;
    scale(vec: DzVec3, affectTrans: boolean): void;
    scale(scale: number, affectTrans: boolean): void;
    scale(scale: number, direction: DzVec3, affectTrans: boolean): void;
}