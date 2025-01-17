declare class Rect extends QObject {
    /* Properties */
    bottom: number;
    center: Point;
    height: number;
    left: number;
    right: number;
    top: number;
    width: number;
    x: number;
    y: number;

    /* Constructors */
    constructor();
    constructor();
    constructor(xVal: number, yVal: number, wVal: number, hVal: number);

    /* Methods */
    contains(): boolean;
    intersection(rect: Rect): Rect;
    intersects(): boolean;
    isEmpty(): boolean;
    isNull(): boolean;
    moveBottom(pos: number): void;
    moveBy(dx: number, dy: number): void;
    moveLeft(pos: number): void;
    moveRight(pos: number): void;
    moveTop(pos: number): void;
    normalize(): void;
    normalize(): void;
    union(rect: Rect): Rect;
}
