/**
 * Script wrapper for Q3Header.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/header_dz
 */
declare class DzHeader extends DzWidget {

    /* Properties */

    /**
     * Holds whether or not the header sections respond to mouse clicks.
     */
    clickEnabled: boolean; // Boolean

    /**
     * Holds whether or not the header sections can be moved.
     */
    movingEnabled: boolean; // Boolean

    /**
     * Holds whether or not the header sections can be resized.
     */
    resizeEnabled: boolean; // Boolean

    /**
     * Holds whether or not the header sections can be stretched.
     */
    stretchEnabled: boolean; // Boolean

    /* Methods */

    /**
     * @param section number - The section to check.
     * @returns boolean true if the header for a given section responds to mouse clicks, otherwise false.
     */
    isClickEnabled(section: number): boolean; // bool

    /**
     * @param section number - The section to check.
     * @returns boolean true if resizing for a given section is enabled, otherwise false.
     */
    isResizeEnabled(section: number): boolean; // bool

    /**
     * @param section number - The section to check.
     * @returns boolean true if stretching for a given section is enabled, otherwise false.
     */
    isStretchEnabled(section: number): boolean; // Boolean

    /**
     * Sets whether or not the header for a given section responds to mouse clicks.
     * @param enable boolean - true to enable, false to disable.
     * @param section number - The section to enable/disable clicking in.
     */
    setClickEnabled(enable: boolean, section: number): void;

    /**
     * Sets whether or not resizing for a given section is enabled.
     * @param enable boolean - true to enable, false to disable.
     * @param section number - The section to enable/disable resizing of.
     */
    setResizeEnabled(enable: boolean, section: number): void;

    /**
     * Sets whether or not stretch for a given section is enabled.
     * @param enable boolean - true to enable, false to disable.
     * @param section number - The section to enable/disable stretching of.
     */
    setStretchEnabled(enable: boolean, section: number): void;

    /* Signals */

    /**
     * Emitted when an item in the header is clicked
     * @param section number
     */
    clicked: ISignal<number>;

    /**
     * Emitted when an item in the header changes index
     * @param section number
     * @param fromIndex number
     * @param toIndex number
     */
    indexChange: ISignal<number, number, number>;

    /**
     * Emitted when an item in the header is pressed
     * @param section number
     */
    pressed: ISignal<number>;

    /**
     * Emitted when an item in the header is released
     * @param section number
     */
    released: ISignal<number>;

    /**
     * Emitted when an item in the header is double clicked
     * @param section number
     */
    sectionHandleDoubleClicked: ISignal<number>;

    /**
     * Emitted when an item in the header changes size
     * @param section number
     * @param oldSize number
     * @param newSize number
     */
    sizeChange: ISignal<number, number, number>;

    /* Undocumented Augment Members */

    /** @undocumented */
    statusTip: string;	//
}
