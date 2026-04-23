/**
 * A container widget that can be displayed within a DzViewport.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/view_dz
 */
declare class DzView extends QWidget {

    /* Methods */

    /**
     * @returns string A user-readable description of the view.
     */
    getDescription(): string; // String

    /**
     * @returns Pixmap A pixmap icon to represent the view.
     */
    getIcon(): Pixmap;
}
