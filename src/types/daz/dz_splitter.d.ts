declare class DzSplitter extends DzWidget {

    //#region Enumerations
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

    // Properties
    childrenCollapsible: boolean; // true
    handleWidth: number; // 7
    opaqueResize: boolean; // true
    orientation: number; // 1

    // Methods
    addWidget(p0: DzWidget): any;
    count(): any;
    indexOf(p0: DzWidget): any;
    insertWidget(p0: number, p1: DzWidget): any;
    isCollapsible(p0: number): any;
    restoreState(p0: ByteArray): boolean;
    saveState(): ByteArray;
    setCollapsible(p0: number, p1: boolean): any;
    setStretchFactor(index: number, strech: number): any;
    widget(p0: number): DzWidget;
}