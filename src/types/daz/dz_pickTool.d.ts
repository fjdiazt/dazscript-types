/**
 * A view tool for picking (selecting) items in a 3D viewport.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/picktool_dz
 */
declare class DzPickTool extends DzViewTool {

    /* Methods */

    /**
     * @returns number The current node click mode.
     */
    getNodeClickMode(): number; // DzViewportMgr::NodeClickMode

    /**
     * @returns number The line width for this tool.
     */
    lineWidth(): number; // Number

    /**
     * Sets the line width for this tool.
     * @param width number - The line width to set.
     */
    setLineWidth(width: number): void;

    /* Signals */

    /**
     * Emitted when the line width for this tool has changed.
     * @param width number - The new line width.
     */
    changedLineWidth: ISignal<number>;
}
