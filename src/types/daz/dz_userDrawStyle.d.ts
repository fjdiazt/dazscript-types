/**
 * Base class for DrawStyles that the user can select from the viewport menu.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/userdrawstyle_dz
 */
declare class DzUserDrawStyle extends DzRefCountedItem {

    /* Properties */

    /**
     * Whether or not the user style is available for use (Read Only).
     */
    isEnabled: boolean; // Boolean

    /* Methods */

    /**
     * @returns string A description/label for the DrawStyle; used for display in the viewport menu.
     */
    getDescription(): string; // String

    /**
     * @returns Pixmap A representative icon for the DrawStyle; used for display in the viewport menu.
     */
    getPixmap(): Pixmap;
}
