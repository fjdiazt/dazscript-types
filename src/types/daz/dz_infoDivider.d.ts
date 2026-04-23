/**
 * Provides a divider bar with an information panel as the second widget.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/infodivider_dz
 */
declare class DzInfoDivider extends QWidget {

    /* Methods */

    /**
     * @returns number The current divider position, or -1 if minimized.
     */
    getActualDividerPercent(): number; // Number

    /**
     * @returns DzInfoTabs The info tabs for this divider bar. The info divider allows you to display tips, metadata, and other info relating to your product.
     */
    getInfoTabs(): DzInfoTabs;

    /**
     * @returns number The preffered relative position of the divider.
     */
    getPreferredDividerPercent(): number; // Number

    /**
     * @returns number The minimized (toggled) state as a Number.
     */
    getToggleState(): number; // Number

    /**
     * This method is the same as DzInfoDivider::isToggled()
     * @returns boolean true if the divider bar is in a minimized state, othewise false.
     */
    isMinimized(): boolean; // Boolean

    /**
     * This method is the same as DzInfoDivider::isMinimized()
     * @returns boolean true if the divider bar is in a minimized state, otherwise false.
     */
    isToggled(): boolean; // Boolean

    /**
     * Moves the divider distance pixels from the current location.
     * @param distance number - The distance in pixels from the current location. If the new location will cause the divider to be displayed in an invalid location, it will be displayed in the closest location to where it was dragged
     */
    moveDivider(distance: number): void;

    /**
     * Sets the location of the divider bar.
     * @param distance number
     */
    setPreferredDividerPercent(distance: number): void;

    /**
     * Sets the toggled state of this divider bar.
     * @param state number - The new state of this divider bar:
    
     0 = Not Minimized
    
     1 = Half Minimized
    
     2 = Full Minimized
     */
    setToggleState(state: number): void;

    /**
     * Toggles the second widget between fully closed and fully open.
     */
    toggleClosed(): void;

    /**
     * @returns boolean true if this divider bar can be toggled, otherwise false.
     */
    toggleEnabled(): boolean; // Boolean

    /**
     * Toggles the minimized state of the second widget. If toggling is disabled, this method has no effect. If either the first or second widget is null, toggling this method will also have no effect.
     */
    toggleMinimized(): void;
}
