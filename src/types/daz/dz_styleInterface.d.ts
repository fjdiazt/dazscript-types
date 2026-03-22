declare class DzStyleInterface extends QObject {

    /* Properties */

    /* Methods */
    commonStyleSubElementRect(subElement: number): QRect;
    drawPrimitive(pe: number, opt: QStyleOption, p: QPainter, w: QWidget): void;
    systemStyleSizeFromContents(ct: number): QSize;
    systemStyleSubElementRect(subElement: number): QRect;
    textStyle(ts: number, option: QStyleOption, widget: QWidget): DzTextStyle;
}