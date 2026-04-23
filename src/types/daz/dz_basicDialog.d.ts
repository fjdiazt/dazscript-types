/**
 * A basic dialog that provides typical buttons found on most DAZ Studio dialogs.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/basicdialog_dz
 */
declare class DzBasicDialog extends DzDialog {

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * Adds a button into the horizontal layout of the dialog's button bar.
     * @param btn DzButton - The button to add to the dialog's button layout.
     * @param index number - The position in the button bar to insert the button.
     */
    addButton(btn: DzButton, index?: number): void;

    /**
     * Adds a layout into the main vertical layout of the dialog.
     * @param layout DzLayout
     * @param stretch number - The stretch factor for the child layout.
     */
    addLayout(layout: DzLayout, stretch?: number): void;

    /**
     * Adds spacing into the main vertical layout of the dialog.
     * @param spacing number - The amount of spacing to add.
     */
    addSpacing(spacing: number): void;

    /**
     * Adds stretch into the main vertical layout of the dialog.
     * @param stretch number - The stretch factor for the added stretchable space.
     */
    addStretch(stretch?: number): void;

    /**
     * Adds a widget into the main vertical layout of the dialog.
     * @param child DzWidget - The widget to add to the dialog's main layout.
     * @param stretch number - The stretch factor for the child widget.
     * @param alignment number - The alignment for the child widget.(since 4.9.3.93)
     */
    addWidget(child: DzWidget, stretch?: number, alignment?: number): void;

    /**
     * Inserts a layout into the main vertical layout of the dialog.
     * @param index number - The index to insert the layout at.
     * @param layout DzLayout - The layout to add to the dialog's main layout.
     * @param stretch number - The stretch factor for the child layout.
     * @since 4.12.1.28
     */
    insertLayout(index: number, layout: DzLayout, stretch?: number): void;

    /**
     * Inserts a widget into the main vertical layout of the dialog.
     * @param index number - The index to insert the widget at.
     * @param child DzWidget - The widget to add to the dialog's main layout.
     * @param stretch number - The stretch factor for the child widget.
     * @param alignment number - The alignment for the child widget.
     * @since 4.9.3.93
     */
    insertWidget(index: number, child: DzWidget, stretch?: number, alignment?: number): void;

    /**
     * Sets the 'Accept' button is set as the default button for the dialog.
     * @since 4.12.0.84
     */
    setAcceptButtonAsDefault(): void;

    /**
     * Enables or disables the Accept button. By default, the button is enabled.
     * @param onOff boolean - If true, the 'Accept' button will be available to the user. If false, the button will not be shown.
     */
    setAcceptButtonEnabled(onOff: boolean): void;

    /**
     * Sets the text for the dialog's accept button. By default, the button is labelled 'Accept'.
     * @param text string - The new label for the accept button.
     */
    setAcceptButtonText(text: string): void;

    /**
     * Sets the 'Apply' button is set as the default button for the dialog.
     * @since 4.12.0.84
     */
    setApplyButtonAsDefault(): void;

    /**
     * Enables or disables the Apply button. By default, the button is disabled.
     * @param onOff boolean - If true, the 'Apply' button will be available to the user. If false, the button will not be shown.
     */
    setApplyButtonEnabled(onOff: boolean): void;

    /**
     * Sets the text for the dialog's apply button. By default, the button is labelled 'Apply'.
     * @param text string - The new label for the apply button.
     */
    setApplyButtonText(text: string): void;

    /**
     * Sets the 'Cancel' button is set as the default button for the dialog.
     * @since 4.12.0.84
     */
    setCancelButtonAsDefault(): void;

    /**
     * Enables or disables the Cancel button. By default, the button is enabled.
     * @param onOff boolean - If true, the 'Cancel' button will be available to the user. If false, the button will not be shown.
     */
    setCancelButtonEnabled(onOff: boolean): void;

    /**
     * Sets the text for the dialog's cancel button. By default, the button is labelled 'Cancel'.
     * @param text string - The new label for the cancel button.
     */
    setCancelButtonText(text: string): void;

    /**
     * Set the default button for the dialog.
     * @param btn DzButton - The button to set as the default for the dialog.
     * @since 4.12.0.84
     */
    setDefaultButton(btn: DzButton): void;

    /**
     * Sets the 'Help' button is set as the default button for the dialog.
     * @since 4.12.0.84
     */
    setHelpButtonAsDefault(): void;

    /**
     * Enables or disables the Help button. By default, the button is enabled.
     * @param onOff boolean - If true, the 'Help' button will be available to the user. If false, the button will not be shown.
     */
    setHelpButtonEnabled(onOff: boolean): void;

    /**
     * Shows or hides the 'Accept' button. By default, the button is shown.
     * @param onOff boolean - If true, the 'Accept' button will be available to the user. If false, the button will not be shown.
     */
    showAcceptButton(onOff: boolean): void;

    /**
     * Shows or hides the 'Apply' button. By default, the button is hidden.
     * @param onOff boolean - If true, the 'Apply' button will be available to the user. If false, the button will not be shown.
     */
    showApplyButton(onOff: boolean): void;

    /**
     * Shows or hides the 'Cancel' button. By default, the button is shown.
     * @param onOff boolean - If true, the 'Cancel' button will be available to the user. If false, the button will not be shown.
     */
    showCancelButton(onOff: boolean): void;

    /**
     * Shows or hides the 'What's This' button. By default, the button is shown.
     * @param onOff boolean - If true, the 'What's This' button will be available to the user. If false, the button will not be shown.
     */
    showHelpButton(onOff: boolean): void;

    /**
     * Deprecated
     * @param onOff boolean
     */
    enableApplyButton(onOff: boolean): void;

    /**
     * Deprecated
     * @param onOff boolean
     */
    enableCancelButton(onOff: boolean): void;

    /**
     * Deprecated
     * @param onOff boolean
     */
    enableHelpButton(onOff: boolean): void;

    /* Signals */

    /**
     * Emitted when the 'Apply' button is clicked by the user.
     */
    applyClicked: ISignal<void>;
}
