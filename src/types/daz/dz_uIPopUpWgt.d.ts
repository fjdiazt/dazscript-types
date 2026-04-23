/**
 * A popup widget constructed from a QtDesigner *.ui file.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/uipopupwgt_dz
 */
declare class DzUIPopUpWgt extends QWidget {

    /* Constructors */

    /**
     * @param parent QWidget
     */
    constructor(parent: QWidget);

    /* Methods */

    /**
     * @returns string The filename that was used to load the ui file.
     */
    getFileName(): string; // String

    /**
     * @returns QWidget The current main QWidget.
     */
    getUIWidget(): QWidget;

    /**
     * @returns string The current working directory for the ui file.
     */
    getWorkingDirectory(): string; // String

    /**
     * Sets the main widget for this popup from the ui file.
     * @param filename string - The path to the ui file to show in the widget.
     */
    loadUI(filename: string): void;

    /**
     * Moves the popup to the point defined.
     * @param newPos Point - The position to move the popup widget to
     */
    movePopUp(newPos: Point): void;

    /**
     * Sets the widget for the ui popup widget.
     * @param widget QWidget - The widget for the popup
     */
    setWidget(widget: QWidget): void;

    /**
     * Note:
     * @param str string - The working directory for the ui loader.
     */
    setWorkingDirectory(str: string): void;
}
