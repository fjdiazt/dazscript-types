declare class Color extends QColor {
    constructor();
    constructor(r: number, g: number, b: number, a?: number);
    constructor(color: Color);
    constructor(colorName: string)
}