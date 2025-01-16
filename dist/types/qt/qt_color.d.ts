declare class QColor extends QObject {
    constructor();
    constructor(r: number, g: number, b: number, a?: number);

    red: number;
    blue: number;
    green: number;
    alpha: number;
    hue: number;
    name: string;
    rgb: number;
    saturation: number;
    value: number;
    dark(): QColor;
    light(): QColor;
    setRgb(r: number, g: number, b: number): void;
    setRgb(r: number, g: number, b: number, a: number): void;
    setRgb(value: number): void;
}