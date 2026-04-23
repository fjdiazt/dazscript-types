/**
 * Encapsulates a custom QToolBar that can be docked with a DzToolBar.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/dockbar_dz
 */
declare class DzDockBar extends QWidget {

    /* Properties */

    /**
     * Holds whether or not this bar is docked. (Read Only)
     */
    floating: boolean; // Boolean

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of DockArea.
     */
    static ToolBarTop: number;

    /**
     * DAZ enum member of DockArea.
     */
    static ToolBarBottom: number;

    /**
     * DAZ enum member of DockArea.
     */
    static ToolBarLeft: number;

    /**
     * DAZ enum member of DockArea.
     */
    static ToolBarRight: number;

    /**
     * DAZ enum member of DockArea.
     */
    static NoToolBarArea: number;

    /* Methods */

    /**
     * Docks this bar in the specified area of the DzActivityLayout, and shows the bar if it is hidden.
     * @param area number - The DockArea to dock this bar to.
     * @param beforeBar string - The name of the bar (if any) in the area to dock before.
     */
    dock(area: number, beforeBar?: string): void;

    /**
     * @returns number The dock area that this bar is docked in.
     */
    dockedArea(): number; // DockArea

    /**
     * @returns boolean true if this bar is not displayed, false if this bar is displayed.
     */
    isClosed(): boolean; // Boolean

    /**
     * Sets whether this bar is displayed.
     * @param onOff boolean - If true, this bar is not displayed. If false, this bar is displayed.
     */
    setClosed(onOff: boolean): void;

    /**
     * Undocks this bar, moves it to the specified global coordinates, and shows this bar if it is hidden.
     * @param pos Point - The global coordinates to position this bar at.
     */
    undock(pos: Point): void;
}
