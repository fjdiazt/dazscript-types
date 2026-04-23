/**
 * Abstract base class of all persistent menus.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/persistentmenu_dz
 */
declare class DzPersistentMenu extends QObject {

    /* Methods */

    /**
     * Clear the active widget for this persistent menu.
     */
    clearActiveWgt(): void;

    /**
     * @returns DzActionMenu The DzActionMenu that belongs to this persistent menu. If one does not exist, it is created.
     * @since 4.6.0.76
     */
    getActionMenu(): DzActionMenu;

    /**
     * @returns QWidget The widget that launched this persistent menu (if any), otherwise null.
     */
    getActiveWgt(): QWidget;

    /**
     * Sets the active widget for this persistent menu.
     * @param wgt QWidget - The widget that launches the persistent menu.
     */
    setActiveWgt(wgt: QWidget): void;
}
