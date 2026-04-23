/**
 * DAZScript abstract base class for button widgets.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/button_dz
 */
declare class DzButton extends DzWidget {

    /* Properties */

    /**
     * Holds whether or not autoRepeat is enabled. false by default. If enabled, the clicked() signal is emitted at regular intervals if down is true. This property has no effect on toggle buttons.
     */
    autoRepeat: boolean; // Boolean

    /**
     * Holds the initial delay, in milliseconds, before auto-repetition begins
     */
    autoRepeatDelay: number; // Number

    /**
     * Holds the length of the auto-repetition interval, in milliseconds
     */
    autoRepeatInterval: number; // Number

    /**
     * Holds whether or not the button is checkable. false by default.
     */
    checkable: boolean; // Boolean

    /**
     * Holds whether or not the button is checked. Only applies to checkable buttons.
     */
    checked: boolean; // Boolean

    /**
     * Holds whether or not the button is pressed. true if the button is pressed down. false by default. The signals pressed() and clicked() are not emitted when this property set to true.
     */
    down: boolean; // Boolean

    /**
     * Holds the Pixmap shown on the button. If the Pixmap is monochrome (e.g. its depth is 1) and it does not have a mask, the Pixmap will be its own mask. This allows transparent bitmaps to be drawn, which are important for toggle buttons. 0 if no pixmap is set.
     */
    pixmap: Pixmap;

    /**
     * Holds the text displayed on the button. undefined by default. An ampersand (&) in the String automatically creates an accelerator for it using the character that follows the ampersand, as the accelerator key. Any previous accelerator will be overwritten, or cleared if no accelerator is defined by the text.
     */
    text: string; // String

    /**
     * Holds whether or not the button is a toggle (Read Only). false by default.
     */
    toggleButton: boolean; // Boolean

    /**
     * Deprecated
     */
    exclusiveToggle: boolean; // Boolean

    /**
     * Deprecated
     */
    on: boolean; // Boolean

    /**
     * Deprecated
     */
    toggleState: number; // ToggleState

    /**
     * Deprecated
     */
    toggleType: number; // ToggleType

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of ToggleState.
     */
    static Off: number;

    /**
     * DAZ enum member of ToggleState.
     */
    static NoChange: number;

    /**
     * DAZ enum member of ToggleState.
     */
    static On: number;

    /**
     * DAZ enum member of ToggleType.
     */
    static SingleShot: number;

    /**
     * DAZ enum member of ToggleType.
     */
    static Toggle: number;

    /**
     * DAZ enum member of ToggleType.
     */
    static Tristate: number;

    /* Methods */

    /**
     * Toggles the state of a toggle button.
     */
    toggle(): void;

    /* Signals */

    /**
     * Emitted when the button is pressed and then released.
     */
    clicked: ISignal<void>;

    /**
     * Emitted when the button is pressed.
     */
    pressed: ISignal<void>;

    /**
     * Emitted when the button is released.
     */
    released: ISignal<void>;

    /**
     * Emitted when toggleState on this button has changed.
     * @param state number
     */
    stateChanged: ISignal<number>;

    /**
     * Emitted when the button is toggled.
     * @param onOff boolean - true if the button is on, false if the button is off.
     */
    toggled: ISignal<boolean>;

    /* Undocumented Augment Members */

    /** @undocumented */
    autoExclusive: boolean; // false

    /** @undocumented */
    icon: QObject; // QVariant(QIcon)

    /** @undocumented */
    iconSize: QSizeWrapper; // [object Object]

    /** @undocumented */
    shortcut: QObject; //
}
