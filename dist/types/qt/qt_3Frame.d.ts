declare class Q3Frame extends QFrame {

    /* Properties */

    /* Methods */
    contentsRect(): QRect;
    drawContents(obj: QPainter): void;
    frameChanged(): void;
    resizeEvent(obj: QResizeEvent): void;
    setMargin(obj: number): void;
}