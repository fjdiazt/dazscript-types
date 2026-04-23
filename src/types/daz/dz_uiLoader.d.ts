/**
 * Script wrapper for QUiLoader.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/uiloader_dz
 */
declare class DzUiLoader extends QObject {

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * Adds a path to the list of paths the .ui loader searches when locating QtDesigner plug-ins.
     * @param path string - The path to add.
     */
    addPluginPath(path: string): void;

    /**
     * @returns any[] A list of the names of layouts that can be built using createLayout().
     */
    availableLayouts(): any[]; // Array

    /**
     * @returns any[] A list of the names of widgets that can be built using createWidget().
     */
    availableWidgets(): any[]; // Array

    /**
     * Clears the list of paths the .ui loader searches when locating QtDesigner plug-ins.
     */
    clearPluginPaths(): void;

    /**
     * Creates a new layout.
     * @param className string - The name of the class to create an instance of.
     * @param parent QObject - The object to parent the layout to.
     * @param name string - The name to assign to the layout.
     * @returns DzLayout The created layout (if any), otherwise null.
     */
    createLayout(className: string, parent?: QObject, name?: string): DzLayout;

    /**
     * Creates a new widget.
     * @param className string - The name of the class to create an instance of.
     * @param parent DzWidget - The widget to parent the widget to.
     * @param name string - The name to assign to the widget.
     * @returns DzWidget The created widget (if any), otherwise null.
     */
    createWidget(className: string, parent: DzWidget, name?: string): DzWidget;

    /**
     * Loads a QtDesigner form (*.ui) and creates a new widget.
     * @param filePath string
     * @param parent DzWidget - The widget to parent the contents of the file to.
     * @returns DzWidget A widget parented to parent that holds the contents of the loaded form (if any), otherwise null.
     */
    load(filePath: string, parent?: DzWidget): DzWidget;

    /**
     * @returns any[] A list of the paths the .ui loader searches when locating custom QtDesigner widget plug-ins.
     */
    pluginPaths(): any[]; // Array

    /**
     * Sets the base directory of the .ui loader. The .ui loader looks for other resources, such as icons and resource files, in paths relative to this directory.
     * @param dir string - The path to use as the base directory for other resources.
     */
    setWorkingDirectory(dir: string): void;

    /**
     * @returns string The working directory of the .ui loader.
     */
    workingDirectory(): string; // String
}
