/**
 * Base class of windows that can be docked in a DzDockArea.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/dockwindow_dz
 */
declare class DzDockWindow {

    /* Methods */

    /**
     * Re-Docks this window in the last area it was docked in.
     */
    dock(): void;

    /**
     * Docks this window in the given area.
     * @param area DzDockArea - The area to dock this window.
     * @param newColumn boolean - If true, a new column will be added to the dock area for this window.
     */
    dock(area: DzDockArea, newColumn?: boolean): void;

    /**
     * Docks this window in the given area in the given column number.
     * @param area DzDockArea - The area to dock this window.
     * @param columnNum number - The column within the area to dock this window.
     */
    dock(area: DzDockArea, columnNum: number): void;

    /**
     * @returns DzDockArea The area that this window is currently docked in, or the last area it was docked in if it is undocked.
     */
    getArea(): DzDockArea;

    /**
     * @returns number The last width (or height) of the column (or row) that this window is docked in.
     */
    getColumnDimension(): number; // Number

    /**
     * @returns number The column of the dock area that this window was last docked in.
     */
    getColumnNum(): number; // Number

    /**
     * @returns Size The last undocked size of this window (if any).
     */
    getLastSize(): Size;

    /**
     * @returns number The actual length for this window while docked.
     */
    getLength(): number; // Number

    /**
     * @returns number The minimum length for this window (if it is not minimized) while docked.
     */
    getMinimumLength(): number; // Number

    /**
     * @returns number The preferred length for this window while docked.
     */
    getPreferredLength(): number; // Number

    /**
     * @returns boolean true if the this window is currently docked, otherwise false.
     */
    isDocked(): boolean; // Boolean

    /**
     * @returns boolean true if the value returned by length() is the only valid length for this window currently, otherwise false.
     */
    isLengthFixed(): boolean; // Boolean

    /**
     * @returns boolean true if the this window is currently minimized, otherwise false.
     */
    isMinimized(): boolean; // Boolean

    /**
     * Sets this window to a minimized state.
     */
    minimize(): void;

    /**
     * Returns this window to its former length if it is minimized.
     */
    restore(): void;

    /**
     * Store the width (or height) of the column (or row) that this window is docked in.
     * @param dimension number - The width (or height) to set.
     */
    setColumnDimension(dimension: number): void;

    /**
     * Sets the column of the dock area that this window was last docked in.
     * @param columnNum number - The column number to set.
     */
    setColumnNum(columnNum: number): void;

    /**
     * Sets the length for this window while docked.
     * @param length number - The new length for this window.
     */
    setLength(length: number): void;

    /**
     * Sets the preferred length for this window while docked.
     * @param length number - The new preferred length for this window.
     */
    setPreferredLength(length: number): void;

    /**
     * Sets the visibility of the resizing handles.
     * @param yesNo boolean
     */
    setResizeHandlesVisible(yesNo: boolean): void;

    /**
     * Sets the visibility of the title bar.
     * @param yesNo boolean
     */
    setTitleBarVisible(yesNo: boolean): void;

    /**
     * Toggles this window between its docked and undocked state. Calls dock() if this window is undocked, or undock() if it is docked.
     */
    toggleDock(): void;

    /**
     * Toggles this window between the minimized and restored state.
     */
    toggleMinimized(): void;

    /**
     * Undocks this window.
     */
    undock(): void;

    /* Signals */

    /**
     * Emitted when this window is docked.
     */
    docked: ISignal<void>;

    /**
     * Emitted when the value returned by length() has changed.
     */
    lengthChanged: ISignal<void>;

    /**
     * Emitted when this window becomes minimized.
     * @param window DzDockWindow - This window.
     */
    minimized: ISignal<DzDockWindow>;

    outlineDrawFinished: ISignal<void>;

    outlineDrawStarting: ISignal<void>;

    /**
     * Emitted when this window is restored.
     * @param window DzDockWindow - This window.
     */
    restored: ISignal<DzDockWindow>;

    /**
     * Emitted when this window is undocked.
     */
    undocked: ISignal<void>;
}
