declare class QFrame extends QWidget {
    /* Properties */

    /* Methods */
    constructor(parent: QWidget, name: string, f: number);
    changeEvent(obj: QEvent): void;
    drawFrame(obj: QPainter): void;
    event(e: QEvent): boolean;
    frameRect(): QRect;
    frameShadow(): number;
    frameShape(): number;
    frameStyle(): number;
    frameWidth(): number;
    lineWidth(): number;
    midLineWidth(): number;
    paintEvent(obj: QPaintEvent): void;
    setFrameRect(obj: QRect): void;
    setFrameShadow(obj: number): void;
    setFrameShape(obj: number): void;
    setFrameStyle(obj: number): void;
    setLineWidth(obj: number): void;
    setMidLineWidth(obj: number): void;
    sizeHint(): QSize;
}