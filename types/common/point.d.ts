declare class Point extends QObject {

    // Properties
    objectName: string; //
    x: number; // 0
    y: number; // 30
    name: string; //

    constructor();
    constructor(pnt: Point);
    constructor(x: Number, y: Number);

    // Methods
    className: any;
    cursorPos(): any;
    deleteLater(): any;
    inherits: any;
}