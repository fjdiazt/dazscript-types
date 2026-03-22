declare class DzDynamicDividerWgt extends DzWidget {

    constructor(parent: DzWidget);
    constructor(parent: DzWidget, firstChild: DzWidget, secondChild: DzWidget);

    // Properties
    actualDividerPercent: number; // 0.5
    dividerOrientation: number; // 1
    dividerType: number; // 0
    margin: number; // 2
    minimized: boolean; // false
    moveDisabled: boolean; // false
    preferredDividerPercent: number; // 0.5
    preferredWidget: number; // 3
    preferredWidgetExtent: number; // -1
    spacing: number; // 2
    toggleDirection: number; // 3
    toggleEnabled: boolean; // false

    // Methods
    moveDivider(p0: number): any;
    setDividerBar(orientation: number, barStyle: number): any;
    setFirstWidget(p0: DzWidget): any;
    setPreferredWidgetExtent(widgetType: number, extend: number): any;
    setSecondWidget(p0: DzWidget): any;
    setToggleState(p0: boolean): any;
    swapFirstAndSecondWidgets(): any;
    toggleWidget(): any;

    //#region Enumerations
    static DOHorizontal: number; // 0
    static DOVertical: number; // 1
    static BSFull: number; // 0
    static BSSemi: number; // 1
    static BSThin: number; // 2
    static WTLeftOrTop: number; // 0
    static WTRightOrBottom: number; // 1
    static WTBoth: number; // 2
    static WTNone: number; // 3
    static RTStretchFirst: number; // 0
    static RTStretchSecond: number; // 1
    static RTStretchBoth: number; // 2
    static Horizontal: number; // 1
    static Vertical: number; // 2
    static AscendingOrder: number; // 0
    static DescendingOrder: number; // 1
    static Ascending: number; // 0
    static Descending: number; // 1
    static AlignLeft: number; // 1
    static AlignLeading: number; // 1
    static AlignRight: number; // 2
    static AlignTrailing: number; // 2
    static AlignHCenter: number; // 4
    static AlignJustify: number; // 8
    static AlignAbsolute: number; // 16
    static AlignHorizontal_Mask: number; // 31
    static AlignTop: number; // 32
    static AlignBottom: number; // 64
    static AlignVCenter: number; // 128
    static AlignVertical_Mask: number; // 224
    static AlignCenter: number; // 132
    static AlignAuto: number; // 1
    static TextSingleLine: number; // 256
    static TextDontClip: number; // 512
    static TextExpandTabs: number; // 1024
    static TextShowMnemonic: number; // 2048
    static TextWordWrap: number; // 4096
    static TextWrapAnywhere: number; // 8192
    static TextDontPrint: number; // 16384
    static TextIncludeTrailingSpaces: number; // 134217728
    static TextHideMnemonic: number; // 32768
    static TextJustificationForced: number; // 65536
    static TextForceLeftToRight: number; // 131072
    static TextForceRightToLeft: number; // 262144
    static TextLongestVariant: number; // 524288
    static TextBypassShaping: number; // 1048576
    static NoTextInteraction: number; // 0
    static TextSelectableByMouse: number; // 1
    static TextSelectableByKeyboard: number; // 2
    static LinksAccessibleByMouse: number; // 4
    static LinksAccessibleByKeyboard: number; // 8
    static TextEditable: number; // 16
    static TextEditorInteraction: number; // 19
    static TextBrowserInteraction: number; // 13
    static ElideLeft: number; // 0
    static ElideRight: number; // 1
    static ElideMiddle: number; // 2
    static ElideNone: number; // 3
    //#endregion
}