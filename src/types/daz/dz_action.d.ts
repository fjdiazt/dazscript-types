/**
 * Class that implements a user action.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/action_dz
 */
declare class DzAction extends QObject {

    /* Properties */

    /**
     * Holds the action group that this action belongs to (Read Only)
     */
    actionGroup: string; // String

    /**
     * Holds whether this action will auto-repeat when the keyboard shortcut combination is held down.
     */
    autoRepeat: boolean; // Boolean

    /**
     * Holds whether this action is checkable (has an on/off state).
     */
    checkable: boolean; // Boolean

    /**
     * Holds whether this action is checked (on) - checkable must be true.
     */
    checked: boolean; // Boolean

    /**
     * Holds the primary menu that this action is added to by default, if the user has not chosen a custom location (Read Only)
     */
    defaultMenu: string; // String

    /**
     * Holds the menus that this action is added to by default, if the user has not chosen a custom location (Read Only).
     * @since 4.6.2.62
     */
    defaultMenus: any[]; // Array

    /**
     * Holds the settings revealed by a DzAction subclass author as being supported when triggerWithSettings() is called. (Read Only)
     * @since 4.22.1.31
     */
    defaultSettings: Object;

    /**
     * Holds the default keyboard shortcut (hotkey) that is associated with this action (Read Only before 4.6.4.48)
     */
    defaultShortcut: string; // String

    /**
     * Holds the primary toolBar that this action is added to by default, if the user has not chosen a custom location (Read Only)
     */
    defaultToolBar: string; // String

    /**
     * Holds the toolBars that this action is added to by default, if the user has not chosen a custom location (Read Only).
     * @since 4.6.2.62
     */
    defaultToolBars: any[]; // Array

    /**
     * Holds the user-readable description of the action.
     */
    description: string; // String

    /**
     * Holds the documentation URL for the action. (Read Only)
     * @since 4.22.1.157
     */
    documentationUrl: string; // String

    /**
     * Holds whether this action is enabled. Disabled actions cannot be triggered by the user via the UI.
     */
    enabled: boolean; // Boolean

    /**
     * Holds the image file that is used as the icon for this action (if any).
     */
    iconFile: string; // String

    /**
     * Holds the map describing image files that are used in the icon for this action (if any).
     * @since 4.22.1.169
     */
    iconMap: Object;

    /**
     * Holds the descriptive icon text for this action.
     */
    iconText: string; // String

    /**
     * Holds whether this action should show an icon in a menu.
     */
    iconVisibleInMenu: boolean; // Boolean

    /**
     * Holds the primary shortcut key sequence for this action.
     */
    shortcut: string; // String

    /**
     * Holds the text of the action with any mnemonic (&) and/or trailing ellipsis (…) removed. (Read Only)
     * @since 4.22.1.130
     */
    simpleText: string; // String

    /**
     * Holds the status bar text for this action.
     */
    statusTip: string; // String

    /**
     * Holds the standard pixmap that is used as the icon for this action (if any).
     * @since 4.11.0.43
     */
    styleIcon: number; // Number

    /**
     * Holds the label for this action.
     */
    text: string; // String

    /**
     * Holds the popup tool tip text for this action.
     */
    toolTip: string; // String

    /**
     * Holds the settings used when triggerWithSettings() is called - will be empty if/when trigger() is called. (Read Only)
     * @since 4.16.1.18
     */
    triggerSettings: Object;

    /**
     * Holds whether this action can be seen in the UI (e.g., in menus and toolbars).
     */
    visible: boolean; // Boolean

    /**
     * Holds the brief description text for this action.
     */
    whatsThis: string; // String

    /* Methods */

    /**
     * @returns boolean true if this action offers a modified behavior when a keyboard modifier combination is pressed and the action is triggered, otherwise false.
     * @since 4.22.1.31
     */
    hasModifier(): boolean; // Boolean

    /**
     * Activates the action in the 'Hover' state programatically.
     */
    hover(): void;

    /**
     * @param modifiers number - A bitwise OR of the keyboard modifiers to retrieve a description for.
     * @returns string The description of the modified behavior for the specified keyboard modifier combination (if any), otherwise an empty string.
     * @since 4.22.1.31
     */
    modifierDescription(modifiers: number): string; // String

    /**
     * Sets the action's toggle state.
     * @param onOff boolean - If true, the action's toggle state is set on, otherwise, its toggle state is set off.
     */
    setChecked(onOff: boolean): void;

    /**
     * Disables/Enables the action in the interface.
     * @param onOff boolean - If true, the action will be 'grayed out' in menus, and the user will be unable to activate it. If false, the action will be enabled.
     */
    setDisabled(onOff: boolean): void;

    /**
     * Enables/Disables the action in the interface.
     * @param onOff boolean - If true, the action will be displayed normally in menus, and the user will be able to activate it. If false, the action will be disabled.
     */
    setEnabled(onOff: boolean): void;

    /**
     * The same as calling setChecked( !onOff ). This method is provided for convenience when connecting this slot to a signal that emits a value that is the inverse of the desired onOff state.
     * @param onOff boolean - If true, the action's toggle state is set off, otherwise, its toggle state is set on.
     */
    setOff(onOff: boolean): void;

    /**
     * Sets whether the action is visible in the interface.
     * @param onOff boolean - If true, the action will be displayed in menus and toolbars that it has been added to. If false, the action will not be displayed in any menus or toolbars.
     */
    setVisible(onOff: boolean): void;

    /**
     * Toggles the action programatically.
     */
    toggle(): void;

    /**
     * Activates the action programatically.
     */
    trigger(): void;

    /**
     * Triggers this action with the settings provided.
     * @param settings Object - The settings to use when the action is triggered.
     * @since 4.16.1.18
     */
    triggerWithSettings(settings: Object): void;

    /* Signals */

    /**
     * Emitted when an action has changed.
     */
    changed: ISignal<void>;

    /**
     * Emitted when an action is highlighted by the user; for example, when the user pauses with the cursor over a menu option, toolbar button, or presses an action's shortcut key combination.
     */
    hovered: ISignal<void>;

    /**
     * Emitted immediately before executeAction() is called.
     * @since 4.6.3.32
     */
    preExecute: ISignal<void>;

    /**
     * Emitted when a toggle action changes state. checked is the new action state, true for on, false for off.
     * @param checked boolean
     */
    toggled: ISignal<boolean>;

    /**
     * Emitted when an action is activated by the user; for example, when the user clicks a menu option, toolbar button, or presses an action's shortcut key combination, or when trigger() was called. Notably, it is not emitted when setChecked() or toggle() is called. checked is true if the action is checked, or false if the action is unchecked.
     * @param checked boolean
     */
    triggered: ISignal<boolean>;

    /* Conflicting Signals */

    /**
     * @param onOff boolean
     */
    /**
     * TypeScript conflict: DAZ documents this as a signal, but a property with the same name is also documented.
     * Left commented because TypeScript does not allow both declarations in the same class.
     */
    // enabled: ISignal<boolean>;

    /* Undocumented Augment Members */

    /** @undocumented */
    setOn(onOff: boolean): void;
}
