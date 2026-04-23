/**
 * Script wrapper for QWidget.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/widget_dz
 */
declare class DzWidget extends QObject {

    /* Properties */

    /**
     * Holds the number of different colors available for the widget. (Read Only)
     * @since 4.9.0.9
     */
    colorCount: number; // Number

    /**
     * Holds the bit depth (number of bit planes) of the widget. (Read Only)
     * @since 4.9.0.9
     */
    depth: number; // Number

    /**
     * Holds whether the widget is enabled.
     */
    enabled: boolean; // Boolean

    /**
     * Holds the Font for the widget and all child widgets that do not have a custom font of their own.
     */
    font: Font;

    /**
     * Holds the x position of the widget, relative to the desktop. (Read Only)
     */
    globalX: number; // Number

    /**
     * Holds the y position of the widget, relative to the desktop. (Read Only)
     */
    globalY: number; // Number

    /**
     * Holds the height of the widget.
     */
    height: number; // Number

    /**
     * Holds the height of the widget in millimeters. (Read Only)
     * @since 4.9.0.9
     */
    heightMM: number; // Number

    /**
     * Holds the horizontal resolution of the widget in dots per inch. (Read Only)
     * @since 4.9.0.9
     */
    logicalDpiX: number; // Number

    /**
     * Holds the vertical resolution of the widget in dots per inch. (Read Only)
     * @since 4.9.0.9
     */
    logicalDpiY: number; // Number

    /**
     * Holds the maximum height of the widget.
     */
    maxHeight: number; // Number

    /**
     * Holds the maximum width of the widget.
     */
    maxWidth: number; // Number

    /**
     * Holds the minimum height of the widget.
     */
    minHeight: number; // Number

    /**
     * Holds the minimum width of the widget.
     */
    minWidth: number; // Number

    /**
     * Holds the Palette for the widget and all child widgets that do not have a custom palette of their own.
     */
    palette: Palette;

    /**
     * Holds the background color of the widget.
     */
    paletteBackgroundColor: Color;

    /**
     * Holds the background Pixmap of the widget.
     */
    paletteBackgroundPixmap: Pixmap;

    /**
     * Holds the foreground color of the widget.
     */
    paletteForegroundColor: Color;

    /**
     * Holds the horizontal resolution of the widget in dots per inch. (Read Only)
     * @since 4.9.0.9
     */
    physicalDpiX: number; // Number

    /**
     * Holds the vertical resolution of the widget in dots per inch. (Read Only)
     * @since 4.9.0.9
     */
    physicalDpiY: number; // Number

    /**
     * Holds the tool tip text for the widget and all child widgets that do not have a custom tool tip text of their own.
     */
    toolTip: string; // String

    /**
     * Holds the “Whats This” text for the widget and all child widgets that do not have a custom “Whats This” text of their own.
     */
    whatsThis: string; // String

    /**
     * Holds the width of the widget.
     */
    width: number; // Number

    /**
     * Holds the width of the widget in millimeters. (Read Only)
     * @since 4.9.0.9
     */
    widthMM: number; // Number

    /**
     * Holds the x position of the widget, relative to its parent.
     */
    x: number; // Number

    /**
     * Holds the y position of the widget, relative to its parent.
     */
    y: number; // Number

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of AlignmentFlags.
     */
    static AlignLeft: number;

    /**
     * DAZ enum member of AlignmentFlags.
     */
    static AlignLeading: number;

    /**
     * DAZ enum member of AlignmentFlags.
     */
    static AlignRight: number;

    /**
     * DAZ enum member of AlignmentFlags.
     */
    static AlignTrailing: number;

    /**
     * DAZ enum member of AlignmentFlags.
     */
    static AlignHCenter: number;

    /**
     * DAZ enum member of AlignmentFlags.
     */
    static AlignJustify: number;

    /**
     * DAZ enum member of AlignmentFlags.
     */
    static AlignAbsolute: number;

    /**
     * DAZ enum member of AlignmentFlags.
     */
    static AlignHorizontal_Mask: number;

    /**
     * DAZ enum member of AlignmentFlags.
     */
    static AlignTop: number;

    /**
     * DAZ enum member of AlignmentFlags.
     */
    static AlignBottom: number;

    /**
     * DAZ enum member of AlignmentFlags.
     */
    static AlignVCenter: number;

    /**
     * DAZ enum member of AlignmentFlags.
     */
    static AlignVertical_Mask: number;

    /**
     * DAZ enum member of AlignmentFlags.
     */
    static AlignCenter: number;

    /**
     * DAZ enum member of AlignmentFlags.
     */
    static AlignAuto: number;

    /**
     * DAZ enum member of Orientation.
     */
    static Horizontal: number;

    /**
     * DAZ enum member of Orientation.
     */
    static Vertical: number;

    /**
     * DAZ enum member of SortOrder.
     */
    static AscendingOrder: number;

    /**
     * DAZ enum member of SortOrder.
     */
    static DescendingOrder: number;

    /**
     * DAZ enum member of SortOrder.
     */
    static Ascending: number;

    /**
     * DAZ enum member of SortOrder.
     */
    static Descending: number;

    /**
     * DAZ enum member of TextElideMode.
     */
    static ElideLeft: number;

    /**
     * DAZ enum member of TextElideMode.
     */
    static ElideRight: number;

    /**
     * DAZ enum member of TextElideMode.
     */
    static ElideMiddle: number;

    /**
     * DAZ enum member of TextElideMode.
     */
    static ElideNone: number;

    /**
     * DAZ enum member of TextFlag.
     */
    static TextSingleLine: number;

    /**
     * DAZ enum member of TextFlag.
     */
    static TextDontClip: number;

    /**
     * DAZ enum member of TextFlag.
     */
    static TextExpandTabs: number;

    /**
     * DAZ enum member of TextFlag.
     */
    static TextShowMnemonic: number;

    /**
     * DAZ enum member of TextFlag.
     */
    static TextWordWrap: number;

    /**
     * DAZ enum member of TextFlag.
     */
    static TextWrapAnywhere: number;

    /**
     * DAZ enum member of TextFlag.
     */
    static TextDontPrint: number;

    /**
     * DAZ enum member of TextFlag.
     */
    static TextIncludeTrailingSpaces: number;

    /**
     * DAZ enum member of TextFlag.
     */
    static TextHideMnemonic: number;

    /**
     * DAZ enum member of TextFlag.
     */
    static TextJustificationForced: number;

    /**
     * DAZ enum member of TextFlag.
     */
    static TextForceLeftToRight: number;

    /**
     * DAZ enum member of TextFlag.
     */
    static TextForceRightToLeft: number;

    /**
     * DAZ enum member of TextFlag.
     */
    static TextLongestVariant: number;

    /**
     * DAZ enum member of TextFlag.
     */
    static TextBypassShaping: number;

    /**
     * DAZ enum member of TextInteractionFlags.
     */
    static NoTextInteraction: number;

    /**
     * DAZ enum member of TextInteractionFlags.
     */
    static TextSelectableByMouse: number;

    /**
     * DAZ enum member of TextInteractionFlags.
     */
    static TextSelectableByKeyboard: number;

    /**
     * DAZ enum member of TextInteractionFlags.
     */
    static LinksAccessibleByMouse: number;

    /**
     * DAZ enum member of TextInteractionFlags.
     */
    static LinksAccessibleByKeyboard: number;

    /**
     * DAZ enum member of TextInteractionFlags.
     */
    static TextEditable: number;

    /**
     * DAZ enum member of TextInteractionFlags.
     */
    static TextEditorInteraction: number;

    /**
     * DAZ enum member of TextInteractionFlags.
     */
    static TextBrowserInteraction: number;

    /* Constructors */

    /**
     * @param parent DzWidget
     */
    constructor(parent: DzWidget);

    /* Methods */

    /**
     * @param name string
     * @returns DzWidget The child widget named name, otherwise undefined.
     */
    findChildOfWidget(name: string): DzWidget;

    /**
     * @param name string
     * @returns any[] A list of this widget's children.
     */
    getChildrenOfWidget(name?: string): any[]; // Array

    /**
     * @returns DzLayout The layout managing this widget.
     */
    getLayout(): DzLayout;

    /**
     * @returns QWidget The wrapped QWidget.
     */
    getWidget(): QWidget;

    /**
     * Paints the widget, restricted by the given rectangle, into a pixmap. If the widget has any children, they are also painted in the appropriate positions.
     * @param rectangle Rect - The rectangle, relative to the top left corner of the widget, to capture.
     * @returns Pixmap If the rectangle does not overlap the widget's rectangle, or an error occurs, the pixmap will be null. If the rectangle is a superset of the widget, the areas outside the widget are covered with the widget's background.
     * @since 4.9.3.105
     */
    grab(rectangle: Rect): Pixmap;

    /**
     * Paints the widget, restricted by the given rectangle, into a pixmap. If the widget has any children, they are also painted in the appropriate positions.
     * @param x number - The relative x position of the rectangle to capture.
     * @param y number - The relative y position of the rectangle to capture.
     * @param width number
     * @param height number
     * @returns Pixmap If the rectangle defined by x, y, w, and h does not overlap the widget's rectangle, or an error occurs, the pixmap will be null. If the rectangle is a superset of the widget, the areas outside the widget are covered with the widget's background.
     * @since 4.9.3.105
     */
    grab(x?: number, y?: number, width?: number, height?: number): Pixmap;

    /**
     * Hide the widget; make it invisible.
     */
    hide(): void;

    /**
     * Translates the widget coordinate pos from the coordinate system of parent to this widget's coordinate system. parent must not be undefined and must be a parent of the calling widget.
     * @param parent DzWidget - The widget in the parent chain to map from.
     * @param pos Point - The position to map.
     * @returns Point
     * @since 4.9.0.9
     */
    mapFrom(parent: DzWidget, pos: Point): Point;

    /**
     * Translates the global screen coordinate pos to widget coordinates.
     * @param pos Point - The position to map.
     * @returns Point
     * @since 4.9.0.9
     */
    mapFromGlobal(pos: Point): Point;

    /**
     * Translates the widget coordinate pos from the coordinate system of the parent widget to this widget's coordinate system.
     * @param pos Point - The position to map.
     * @returns Point
     * @since 4.9.0.9
     */
    mapFromParent(pos: Point): Point;

    /**
     * Translates the widget coordinate pos to the coordinate system of parent. parent must not be undefined and must be a parent of the calling widget.
     * @param parent DzWidget - The widget in the parent chain to map to.
     * @param pos Point - The position to map.
     * @returns Point
     * @since 4.9.0.9
     */
    mapTo(parent: DzWidget, pos: Point): Point;

    /**
     * Translates the widget coordinate pos to global screen coordinates. For example, mapToGlobal( Point(0, 0) ) would give the global coordinates of the top-left pixel of the widget.
     * @param pos Point - The position to map.
     * @returns Point
     * @since 4.9.0.9
     */
    mapToGlobal(pos: Point): Point;

    /**
     * Translates the widget coordinate pos to a coordinate in the parent widget.
     * @param pos Point - The position to map.
     * @returns Point
     * @since 4.9.0.9
     */
    mapToParent(pos: Point): Point;

    /**
     * Reparents the widget.
     * @param parent DzWidget - The new parent widget for this widget.
     * @param pnt Point - The location in the new parent widget to place this widget.
     * @param showIt boolean - If true, show() is called on the widget after it is reparented.
     */
    reparent(parent: DzWidget, pnt: Point, showIt?: boolean): void;

    /**
     * Sets a fixed height for the widget.
     * @param height number
     */
    setFixedHeight(height: number): void;

    /**
     * Sets a fixed width and height for the widget.
     * @param width number
     * @param height number
     */
    setFixedSize(width: number, height: number): void;

    /**
     * Sets a fixed width for the widget.
     * @param width number
     */
    setFixedWidth(width: number): void;

    /**
     * Sets the position and size for the widget (relative to its parent).
     * @param x number
     * @param y number
     * @param w number
     * @param h number
     */
    setGeometry(x: number, y: number, w: number, h: number): void;

    /**
     * Show the widget; make it visible if its parent is visible.
     */
    show(): void;

    /* Undocumented Augment Members */

    /** @undocumented */
    reparent(parent: DzWidget): void;
}
