/**
 * Widget that makes up a column in a DzDockArea.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/dockareacolumn_dz
 */
declare class DzDockAreaColumn extends QWidget {

    /* Methods */

    /**
     * @returns number The current depth of this column. This is the same as width() for Right and Left dock areas, or height() for Top and Bottom dock areas.
     */
    depth(): number; // Number

    /**
     * @returns number The number of windows docked in this column.
     */
    getNumWindows(): number; // Number

    /**
     * @returns number The preferred depth of this column.
     */
    getPreferredDepth(): number; // Number

    /**
     * @param which number - The index of the window to return.
     * @returns DzDockWindow The docked window at the given index (if valid), otherwise NULL.
     */
    getWindow(which: number): DzDockWindow;

    /**
     * @returns boolean true if this column is currently minimized, otherwise false.
     */
    isMinimized(): boolean; // Boolean

    /**
     * Minimizes this column, if it is not already. The column shrinks so that only its resizing handle is visible.
     */
    minimize(): void;

    /**
     * @returns number The minimum depth of this column.
     */
    minimumDepth(): number; // Number

    /**
     * Restores this column to its previous depth if this column is currently minimized.
     */
    restore(): void;

    /**
     * Sets the 'depth' of this column.
     * @param depth number - The new depth for this column. If less than the minimum depth, this column becomes the minimum depth.
     */
    setPreferredDepth(depth: number): void;

    /**
     * Toggles whether or not this column is minimized - if minimized, this column restores itself, if full size this column becomes minimized.
     */
    toggleMinimized(): void;
}
