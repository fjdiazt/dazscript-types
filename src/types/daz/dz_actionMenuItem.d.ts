/**
 * Class that encapsulates an 'Action Menu Item'.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/actionmenuitem_dz
 */
declare class DzActionMenuItem extends QObject {

    /* Properties */

    /**
     * Holds the identifier for the Action (classname), CustomAction (GUID), FileOpenAction or FileMergeAction (file path) to perform.
     */
    action: string; // String

    /**
     * Holds whether or not this menu item is considered to be placed by the application (true) or placed by the user (false).
     * @since 4.6.0.83
     */
    isDefault: boolean; // Boolean

    /**
     * Holds the label displayed for the item.
     * @since 4.6.0.76 - Note: Prior to 4.12.1.68, items of the Action and CustomAction type would yeild an empty string.
     */
    label: string; // String

    /**
     * Holds the type of this menu item. (Read Only)
     */
    type: number; // Type

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of Type.
     */
    static Separator: number;

    /**
     * DAZ enum member of Type.
     */
    static Action: number;

    /**
     * DAZ enum member of Type.
     */
    static CustomAction: number;

    /**
     * DAZ enum member of Type.
     */
    static SubMenu: number;

    /**
     * DAZ enum member of Type.
     */
    static FileOpenAction: number;

    /**
     * DAZ enum member of Type.
     */
    static FileMergeAction: number;

    /* Methods */

    /**
     * @returns DzActionMenu The menu that this item is in.
     * @since 4.11.0.164
     */
    getParentMenu(): DzActionMenu;

    /**
     * @returns DzActionMenu The submenu that is displayed by this menu item (if any), otherwise null.
     */
    getSubMenu(): DzActionMenu;

    /**
     * Causes the file for a FileOpenAction or FileMergeAction item to load.
     * @since 4.6.0.44
     */
    loadFile(): void;

    /**
     * Sets the menu that is displayed as a submenu when this menu item is activated.
     * @param menu DzActionMenu - The menu that is displayed as a submenu when this menu item is activated. The menu item takes ownership of this menu - this menu will be deleted when this item is destroyed.
     */
    setSubMenu(menu: DzActionMenu): void;
}
