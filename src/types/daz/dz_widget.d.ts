declare class DzWidget extends QObject {
    /* Properties */
    colorCount: number;
    depth: number;
    enabled: boolean;
    font: Font;
    globalX: number;
    globalY: number;
    height: number;
    heightMM: number;
    logicalDpiX: number;
    logicalDpiY: number;
    maxHeight: number;
    maxWidth: number;
    minHeight: number;
    minWidth: number;
    palette: Palette;
    paletteBackgroundColor: Color;
    paletteBackgroundPixmap: Pixmap;
    paletteForegroundColor: Color;
    physicalDpiX: number;
    physicalDpiY: number;
    toolTip: string;
    whatsThis: string;
    width: number;
    widthMM: number;
    x: number;
    y: number;

    /* Constructors */
    constructor(parent: DzWidget);

    /* Methods */
    findChildOfWidget(parent: DzWidget): DzWidget;
    getChildrenOfWidget(name?: string): any[];
    getLayout(): DzLayout;
    getWidget(): QWidget;
    grab(rectangle: Rect): Pixmap;
    grab(x?: number, y?: number, width?: number, height?: number): Pixmap;
    hide(): void;
    mapFrom(parent: DzWidget): Point;
    mapFromGlobal(pos: Point): Point;
    mapFromParent(pos: Point): Point;
    mapTo(parent: DzWidget): Point;
    mapToGlobal(pos: Point): Point;
    mapToParent(pos: Point): Point;
    reparent(parent: DzWidget): void;
    setFixedHeight(height: number): void;
    setFixedSize(width: number, height: number): void;
    setFixedWidth(width: number): void;
    setGeometry(x: number, y: number, w: number, h: number): void;
    show(): void;
}