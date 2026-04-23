/**
 * Provides a script defined widget that participates in a widget stack.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/guidepage_dz
 */
declare class DzGuidePage extends QWidget {

    /* Methods */

    /**
     * @returns string The default path to the script to execute in order to create the UI in this page, sans extension.
     * @since 4.10.0.41
     */
    defaultScriptPath(): string; // String

    /**
     * @returns boolean true if the page is the current widget in the stack, otherwise false.
     */
    isCurrentPage(): boolean; // Boolean

    /**
     * Sets whether the guide page is the current widget in the stack.
     * @param onOff boolean - If true, the guide page is set as the current widget, otherwise the other widget in the stack is raised.
     */
    makeCurrentPage(onOff: boolean): void;

    /**
     * Loads the contents of the page by calling the current script. A special script context is provided to this script which exposes a global “getWidget()” function that returns a DzWidget wrapper. This DzWidget can be used by the script to create, populate, and connect the UI components inside the widget.
     * @returns DzError DZ_NO_ERROR if no error is encountered, otherwise an appropriate error code.
     * @since 4.10.0.41
     */
    reload(): DzError;

    /**
     * @returns string The full path to the script to execute in order to create the UI in this page.
     * @since 4.10.0.41
     */
    scriptFilename(): string; // String

    /**
     * Loads the contents of the page by calling the script at scriptPath. A special script context is provided to this script which exposes a global “getWidget()” function that returns a DzWidget wrapper. This DzWidget can be used by the script to create, populate, and connect the UI components inside the widget.
     * @param scriptPath string - The path to the script to execute in order to create the UI in this page. The path can be absolute, relative to the resources folder in the application data path, or relative to the application resources path. If the path does not include an extension, an attempt is made to locate a script with one of the possible extensions (in dsa, dsb, dse, ds order) at the specified path until one is found.
     * @returns DzError DZ_NO_ERROR if no error is encountered, otherwise an appropriate error code.
     */
    setUiScript(scriptPath: string): DzError;
}
