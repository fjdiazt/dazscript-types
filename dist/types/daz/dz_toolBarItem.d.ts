declare class DzToolBarItem {
    static Separator: number;
    static Action: number;
    static CustomAction: number;
    static CustomWidget: number;
    static ViewportLeftAlignSpacer: number;
    static ViewportCenterAlignSpacer: number;

    /**
     * If the item type is Action, holds the QObject::className() of the DzAction which is activated by this item. If the item type is CustomAction, holds the name (GUID) of the Custom Action that is activated by this item.
     * If the action has not been set, or the type of the item is not Action or CustomAction, holds an empty string.
     */
    action: string;
    /**
     * The type of the toolbar item. (Read Only)
     */
    type: number;
    /**
     * If the item type is CustomWidget, holds the path to the script to execute in order to create the UI of the widget for this item. The path can be absolute, relative to the application resources path, or relative to the resources folder in the application data path.
     * If the type of the item is not CustomWidget, holds an empty string.
     * See Also:
     *      DzApp::getResourcesPath()
     *      DzApp::getAppDataPath()
     */
    uiScript: string;
}