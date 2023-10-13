declare class Image {
    static Format_Invalid: number; //0
    static Format_Mono: number; //1
    static Format_MonoLSB: number; //2
    static Format_Indexed8: number; //3
    static Format_RGB32: number; //4
    static Format_ARGB32: number; //5
    static Format_ARGB32_Premultiplied: number; //6
    static Format_RGB16: number; //7
    static Format_ARGB8565_Premultiplied: number; //8
    static Format_RGB666: number; //9
    static Format_ARGB6666_Premultiplied: number; //10
    static Format_RGB555: number; //11
    static Format_ARGB8555_Premultiplied: number; //12
    static Format_RGB888: number; //13
    static Format_RGB444: number; //14
    static Format_ARGB4444_Premultiplied: number; //15
    alphaBuffer: boolean;	// false
    depth: number;	// 0
    dotsPerMeterX: number;	// 0
    dotsPerMeterY: number;	// 0
    format: number;	// 0
    height: number;	// 0
    name: string;	//
    numColors: number;	// 0
    objectName: string;	//
    offset: QPoint;	// [object Object]
    size: QSizeWrapper;	// [object Object]
    width: number;	// 0

    constructor();
    constructor(width: number, height: number, format: number);
    constructor(image: Image);
    constructor(filename: string);

    color(p0: number): any;
    compositeAtop(other: QImage, x?: number, y?: number): Image;
    compositeColorBurn(other: QImage, x?: number, y?: number): Image;
    compositeColorDodge(other: QImage, x?: number, y?: number): Image;
    compositeDarken(other: QImage, x?: number, y?: number): Image;
    compositeDifference(other: QImage, x?: number, y?: number): Image;
    compositeExclusion(other: QImage, x?: number, y?: number): Image;
    compositeHardLight(other: QImage, x?: number, y?: number): Image;
    compositeIn(other: QImage, x?: number, y?: number): Image;
    compositeLighten(other: QImage, x?: number, y?: number): Image;
    compositeMultiply(other: QImage, x?: number, y?: number): Image;
    compositeOut(other: QImage, x?: number, y?: number): Image;
    compositeOver(other: QImage, x?: number, y?: number): Image;
    compositeOverlay(other: QImage, x?: number, y?: number): Image;
    compositePlus(other: QImage, x?: number, y?: number): Image;
    compositeScreen(other: QImage, x?: number, y?: number): Image;
    compositeSoftLight(other: QImage, x?: number, y?: number): Image;
    compositeXor(other: QImage, x?: number, y?: number): Image;
    convertDepth(p0: number): any;
    copy(p0: QRect): any;
    copy(p0: number, p1: number, p2: number, p3: number): any;
    create(p0: QSize, p1: number): any;
    create(p0: QSize, p1: number, p2: number): any;
    create(p0: number, p1: number, p2: number): any;
    create(p0: number, p1: number, p2: number, p3: number): any;
    destroyed(): void;
    destroyed(p0: QObject): void;
    drawText(p0: number, p1: number, p2: QString, p3: QFont, p4: QColor): any;
    drawText(p0: number, p1: number, p2: QString, p3: QFont, p4: QColor, p5: number): any;
    fill(p0: QColor): any;
    getColorMask(p0: QColor): any;
    getColorMask(p0: QColor, p1: boolean): any;
    getColorMask(p0: QColor, p1: boolean, p2: number): any;
    invertPixels(p0: boolean): any;
    load(p0: QString): any;
    loadFromData(p0: QByteArray): any;
    loadFromData(p0: QByteArray, p1: QString): any;
    mirror(p0: boolean, p1: boolean): any;
    over(p0: QImage): any;
    over(p0: QImage, p1: number): any;
    over(p0: QImage, p1: number, p2: number): any;
    pixel(p0: number, p1: number): any;
    save(p0: QString): any;
    scale(p0: QSize): any;
    scale(p0: number, p1: number): any;
    setAlphaFromImage(p0: QImage): any;
    setColor(p0: number, p1: QColor): any;
    setPixel(p0: number, p1: number, p2: QColor): any;
    setText(p0: QString, p1: QString): any;
    smoothScale(p0: QSize): any;
    smoothScale(p0: number, p1: number): any;
    text(p0: QString): any;
    under(p0: QImage): any;
    under(p0: QImage, p1: number): any;
    under(p0: QImage, p1: number, p2: number): any;
}