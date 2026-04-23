/**
 * Encapsulates an item in a DzToolBar.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/toolbaritem_dz
 */
declare class DzToolBarItem extends QObject {

    /* Properties */

    /**
     * If the item type is Action, holds the QObject::className() of the DzAction which is activated by this item. If the item type is CustomAction, holds the name (GUID) of the Custom Action that is activated by this item.
     */
    action: string; // String

    /**
     * The type of the toolbar item. (Read Only)
     */
    type: number; // Type

    /**
     * If the item type is CustomWidget, holds the path to the script to execute in order to create the UI of the widget for this item. The path can be absolute, relative to the application resources path, or relative to the resources folder in the application data path.
     */
    uiScript: string; // String

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
    static CustomWidget: number;

    /**
     * DAZ enum member of Type.
     */
    static ViewportLeftAlignSpacer: number;

    /**
     * DAZ enum member of Type.
     */
    static ViewportCenterAlignSpacer: number;
}
