declare class QPixmap {
    depth: number;	// 32
    height: number;	// 129
    name: string;	//
    objectName: string;	//
    rect: QRect;	// [object Object]
    size: QSizeWrapper;	// [object Object]
    width: number;	// 160

    constructor();
    constructor(w: number, h: number);
    constructor(file: string);
    constructor(pixmap: QPixmap);

    destroyed(): void;
    destroyed(p0: QObject): void;
    fill(p0: QColor): any;
    fromImage(p0: QImage): any;
    load(p0: QString): any;
    // loadFromData(p0: QByteArray): boolean;
    // loadFromData(p0: QByteArray, p1: QString): boolean;
    resize(p0: QSize): void;
    resize(p0: number, p1: number): any;
    save(p0: QString): any;
    toImage(): QImage;
}