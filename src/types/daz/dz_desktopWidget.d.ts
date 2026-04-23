/**
 * Script wrapper for QDesktopWidget.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/desktopwidget_dz
 */
declare class DzDesktopWidget extends DzWidget {

    /* Properties */

    /**
     * Holds the index of the screen that is configured to be the primary screen on the system.
     */
    primaryScreen: number; // Number

    /**
     * Holds the number of screens currently available on the system.
     */
    screenCount: number; // Number

    /**
     * Holds if the system manages the available screens in a virtual desktop.
     */
    virtualDesktop: boolean; // Boolean

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * @param screen number - The index of the screen to get the available geometry for. The default screen is used if this is -1.
     * @returns Rect The available geometry of the screen at the specified index (if any). What is available will be a sub-rect of screenGeometry() based on what the platform decides is available (for example excludes the dock and menu bar on Mac OS X, or the task bar on Windows).
     */
    availableGeometry(screen?: number): Rect;

    /**
     * @param widget QWidget - The widget on the screen to get the available geometry for.
     * @returns Rect The available geometry of the screen which contains widget.
     */
    availableGeometry(widget: QWidget): Rect;

    /**
     * @param point Point - The position on the screen to get the available geometry for.
     * @returns Rect The available geometry of the screen which contains point.
     */
    availableGeometry(point: Point): Rect;

    /**
     * @param index number - The index of the screen to get information for. The default screen is used if this is -1.
     * @returns Object An object that represents the screen at the specified index (if any). If the system uses a virtual desktop, the returned object will have the geometry of the entire virtual desktop; i.e. the bounds of all screens as one.
     * @since 4.15.0.19
     */
    screen(index?: number): Object;

    /**
     * @param point Point - The Point on the screen to get the geometry for.
     * @returns Rect The geometry of the screen which contains point.
     */
    screenGeometry(point: Point): Rect;

    /**
     * @param screen number - The index of the screen to get the geometry for. The default screen is used if this is outside the range of screens.
     * @returns Rect The geometry of the screen at the specified index.
     */
    screenGeometry(screen?: number): Rect;

    /**
     * @param widget QWidget - The widget on the screen to get the geometry for.
     * @returns Rect The geometry of the screen which contains widget.
     */
    screenGeometry(widget: QWidget): Rect;

    /**
     * @param point Point - The Point to get the screen number for.
     * @returns number The index of the screen that contains the Pointpoint, or -1 if is not on a screen.
     */
    screenNumber(point: Point): number; // Number

    /**
     * @param widget QWidget - The widget to get the screen number for.
     * @returns number The index of the screen that contains the largest part of widget, or -1 if the widget not on a screen.
     */
    screenNumber(widget?: QWidget): number; // Number

    /* Signals */

    /**
     * Emitted when the size of a screen changes.
     * @param screen number - The index of the screen that changed.
     */
    resized: ISignal<number>;

    /**
     * Emitted when the number of screens changes to newCount.
     * @param newCount number - The new count of screens.
     */
    screenCountChanged: ISignal<number>;

    /**
     * Emitted when the work area available on a screen changes.
     * @param screen number - The index of the screen that changed.
     */
    workAreaResized: ISignal<number>;
}
