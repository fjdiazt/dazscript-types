declare class DzWidget extends QObject {

    // Enums
    // Qt::FocusPolicy
    static NoFocus: number; // 0
    static TabFocus: number; // 1
    static ClickFocus: number; // 2
    static StrongFocus: number; // 11
    static WheelFocus: number; // 15

    static AlignAbsolute: number;	// 16
    static AlignAuto: number;	// 1
    static AlignBottom: number;	// 64
    static AlignCenter: number;	// 132
    static AlignHCenter: number;	// 4
    static AlignHorizontal_Mask: number;	// 31
    static AlignJustify: number;	// 8
    static AlignLeading: number;	// 1
    static AlignLeft: number;	// 1
    static AlignRight: number;	// 2
    static AlignTop: number;	// 32
    static AlignTrailing: number;	// 2
    static AlignVCenter: number;	// 128
    static AlignVertical_Mask: number;	// 224

    static Ascending: number;	// 0
    static AscendingOrder: number;	// 0
    static Descending: number;	// 1
    static DescendingOrder: number;	// 1

    static ElideLeft: number;	// 0
    static ElideMiddle: number;	// 2
    static ElideNone: number;	// 3
    static ElideRight: number;	// 1

    static Horizontal: number;	// 1
    static Vertical: number;	// 2

    static NoTextInteraction: number;	// 0
    static TextSelectableByKeyboard: number;	// 2
    static TextSelectableByMouse: number;	// 1
    static LinksAccessibleByMouse: number;	// 4
    static LinksAccessibleByKeyboard: number;	// 8
    static TextBrowserInteraction: number;	// 13
    static TextEditable: number;	// 16
    static TextEditorInteraction: number;	// 19

    static TextBypassShaping: number;	// 1048576
    static TextDontClip: number;	// 512
    static TextDontPrint: number;	// 16384
    static TextExpandTabs: number;	// 1024
    static TextForceLeftToRight: number;	// 131072
    static TextForceRightToLeft: number;	// 262144
    static TextHideMnemonic: number;	// 32768
    static TextIncludeTrailingSpaces: number;	// 134217728
    static TextJustificationForced: number;	// 65536
    static TextLongestVariant: number;	// 524288

    static TextShowMnemonic: number;	// 2048
    static TextSingleLine: number;	// 256
    static TextWordWrap: number;	// 4096
    static TextWrapAnywhere: number;	// 8192

    colorCount: number;	// 2147483647
    depth: number;	// 32
    enabled: boolean;	// true
    font: QFont;	// [object Object]
    globalX: number;	// 0
    globalY: number;	// 0
    height: number;	// 30
    heightMM: number;	// 9
    logicalDpiX: number;	// 96
    logicalDpiY: number;	// 96
    maxHeight: number;	// 16777215
    maxWidth: number;	// 16777215
    minHeight: number;	// 0
    minWidth: number;	// 0
    name: string;	//
    objectName: string;	//
    orientation: number;
    paletteBackgroundColor: QColor;	// [object Object]
    paletteBackgroundPixmap: QPixmap;	// [object Object]
    paletteForegroundColor: QColor;	// [object Object]
    physicalDpiX: number;	// 96
    physicalDpiY: number;	// 96
    statusTip: string;	//
    toolTip: string;	//
    whatsThis: string;	//
    width: number;	// 100
    widthMM: number;	// 31
    x: number;	// 0
    y: number;	// 0

    constructor(parent: QWidget);
    constructor(parent?: DzWidget, x?: number);

    deleteLater(): any;
    destroyed(): void;
    destroyed(p0: QObject): void;
    findChildOfWidget(p0: QString): any;
    getChildrenOfWidget(): Array<DzWidget>;
    getChildrenOfWidget(p0: QString): any;
    getLayout(): any;
    getWidget(): QWidget;
    grab(): any;
    grab(p0: QRect): any;
    grab(p0: number): any;
    grab(p0: number, p1: number): any;
    grab(p0: number, p1: number, p2: number): any;
    grab(p0: number, p1: number, p2: number, p3: number): any;
    hide(): any;
    mapFrom(p0: DzWidget, p1: QPoint): any;
    mapFromGlobal(p0: QPoint): any;
    mapFromParent(p0: QPoint): any;
    mapTo(p0: DzWidget, p1: QPoint): any;
    mapToGlobal(p0: QPoint): any;
    mapToParent(p0: QPoint): any;
    reparent(p0: DzWidget, p1: QPoint): any;
    reparent(p0: DzWidget, p1: QPoint, p2: boolean): any;
    setFixedHeight(p0: number): any;
    setFixedSize(width: number, height: number): any;
    setFixedWidth(p0: number): any;
    setGeometry(x: number, y: number, w: number, h: number): any;
    show(): any;
}