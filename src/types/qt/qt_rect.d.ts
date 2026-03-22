declare class QRect extends QObject {
    // Static properties

    // Properties
    bottom: number;
    center: QPoint;
    height: number;
    left: number;
    name: string;
    objectName: string;
    right: number;
    top: number;
    width: number;
    x: number;
    y: number;

    // Methods
    className(): any;
    contains(r: QRect): any;
    deleteLater(): any;
    destroyed(o: QObject): any;
    destroyed(): any;
    inherits(): any;
    intersection(r: QRect): any;
    intersects(r: QRect): any;
    isEmpty(): any;
    isNull(): any;
    moveBottom(n: number): any;
    moveBy(x: number, y: number): any;
    moveLeft(n: number): any;
    moveRight(n: number): any;
    moveTop(n: number): any;
    normalize(): any;
    united(r: QRect): any;
}