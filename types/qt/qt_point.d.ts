declare class QPoint extends QObject {
    x: number;	// 0
    y: number;	// 0

    constructor(x: number, y: number);
    constructor(srcPt: QPoint);
}