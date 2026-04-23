/**
 * A top-level window used for short-term tasks.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/dialog_dz
 */
declare class DzDialog extends DzWidget {

    /* Properties */

    /**
     * Holds the title of the dialog.
     */
    caption: string; // String

    /**
     * Holds the orientation of the dialog extension.
     */
    orientation: number; // DzWidget::Orientation

    /**
     * Holds whether or not the size grip is enabled.
     */
    sizeGripEnabled: boolean; // Boolean

    /* Constructors */

    /**
     * @param parent QWidget
     */
    constructor(parent?: QWidget);

    /* Methods */

    /**
     * Closes the dialog.
     * @returns boolean true if the dialog was closed, otherwise false.
     */
    close(): boolean; // Boolean

    /**
     * Displays the dialog to the user.
     * @returns boolean true if the box was accepted, otherwise false.
     */
    exec(): boolean; // Boolean

    /**
     * @returns DzWidget The extension widget (if any) for the dialog, otherwise undefined.
     */
    extension(): DzWidget;

    /**
     * Causes the extension widget for the dialog to be hidden.
     */
    hideExtension(): void;

    /**
     * Sets the button that will cause the dialog to close and return true.
     * @param btn DzButton - The button to set.
     */
    setAcceptButton(btn: DzButton): void;

    /**
     * Sets the extension widget for the dialog.
     * @param extension DzWidget - The widget to set as the extension - use undefined or null to clear the extension.
     */
    setExtension(extension: DzWidget): void;

    /**
     * Sets the button that will cause the dialog to close and return false.
     * @param btn DzButton - The button to set.
     */
    setRejectButton(btn: DzButton): void;

    /**
     * Sets the extension widget visibility.
     * @param onOff boolean - If true, the extension (if any) is shown.
     */
    showExtension(onOff: boolean): void;

    /**
     * Causes the extension widget for the dialog to be shown.
     */
    showExtension(): void;
}
