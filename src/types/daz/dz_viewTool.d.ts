/**
 * Base class for all tools that function in concert with a 3D viewport.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/viewtool_dz
 */
declare class DzViewTool extends DzBase {

    /* Methods */

    /**
     * Derived classes can return a popup menu that will be displayed when the user selects the options menu for the “Tool Settings” pane.
     * @returns DzActionMenu The option menu for the tool.
     */
    getOptionsMenu(): DzActionMenu;

    /* Signals */

    /**
     * Emitted when the view tool becomes the active tool in the viewport.
     */
    activated: ISignal<void>;

    /**
     * Emitted when the view tool stops being the active tool in the viewport.
     */
    deactivated: ISignal<void>;

    /**
     * Emitted when the view tool needs to be redrawn in the viewport.
     */
    drawnDataChanged: ISignal<void>;

    /**
     * Emitted when the option menu for the “Tool Settings” pane should be rebuilt to reflect options for the active tool.
     */
    rebuildMenu: ISignal<void>;

    /* Undocumented Augment Members */

    /** @undocumented */
    getName(): any;

    /** @undocumented */
    iskindof(p0:string): any;
}
