/**
 * Defines the layout of an Activity of the interface.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/activitylayout_dz
 */
declare class DzActivityLayout extends DzRefCountedItem {

    /* Properties */

    /**
     * The description of this activity
     */
    description: string; // String

    /**
     * The label of this activity
     */
    label: string; // String

    /* Constructors */

    /**
     * @param label string
     * @param desc string
     */
    constructor(label: string, desc: string);

    /* Methods */

    /**
     * Clears the memorized state of this activity.
     */
    clearMemorizedState(): void;

    /**
     * @param toolbar string - The name of the toolbar.
     * @returns boolean Whether or not the toolbar is enabled for this activity layout.
     */
    isToolBarEnabled(toolbar: string): boolean; // Boolean

    /**
     * Sets whether or not a toolbar is enabled in this activity.
     * @param toolbar string - The name of the toolbar.
     * @param onOff boolean - The enabled state to set.
     */
    setToolbarEnabled(toolbar: string, onOff: boolean): void;

    /* Signals */

    /**
     * Emitted when the layout's label has changed.
     * @param label string - The new label for the layout.
     */
    labelChanged: ISignal<string>;
}
