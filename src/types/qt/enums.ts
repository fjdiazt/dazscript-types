const enum QtSizeType {
    Fixed = 0,// 0
    Minimum = 1, // MayGrow (1)
    Maximum = 2, // MayShrink (2)
    Preferred = 3, // MayGrow | MayShrink (3)
    MinimumExpanding = 5, // MayGrow | ExpMask (5)
    Expanding = 7, // MayGrow | MayShrink | ExpMask (7)
    Ignored = 4 // ExpMask (4)
}

const enum QtExpandData {
    NoDirection = 0,
    Horizontally = 1,
    Vertically = 2,
    Horizontal = 1, // Alias for Horizontally
    Vertical = 2,   // Alias for Vertically
    BothDirections = 3 // Horizontally | Vertically
}

const enum QtControlType {
    DefaultType = 0x00000000,
    ButtonBox = 0x00000001,
    CheckBox = 0x00000002,
    ComboBox = 0x00000004,
    Frame = 0x00000008,
    GroupBox = 0x00000010,
    Label = 0x00000020,
    Line = 0x00000040,
    LineEdit = 0x00000080,
    PushButton = 0x00000100,
    RadioButton = 0x00000200,
    Slider = 0x00000400,
    SpinBox = 0x00000800,
    TabWidget = 0x00001000,
    ToolButton = 0x00002000
}

/**
 * Specifies the focus policies that determine how a widget accepts focus.
 */
const enum QtFocusPolicy {
    /**
     * The widget does not accept focus.
     */
    NoFocus = 0,
    /**
     * The widget accepts focus by clicking.
     */
    ClickFocus = 1,
    /**
     * The widget accepts focus by pressing the Tab key.
     */
    TabFocus = 2,
    /**
     * The widget accepts focus by both clicking and pressing Tab.
     */
    StrongFocus = 3,
    /**
     * The widget accepts focus by all methods (clicking, Tab, or programmatically).
     */
    WheelFocus = 4
}