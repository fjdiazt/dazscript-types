/**
 * Base class for all property controller types.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/controller_dz
 */
declare class DzController extends DzBase {

    /* Properties */

    /**
     * The description of the controller (Read Only)
     */
    description: string; // String

    /**
     * The effect of the controller (Read Only)
     */
    effect: number; // ControllerEffect

    /**
     * The description of the controller when slave (Read Only)
     * @since 4.9.0.53
     */
    slaveDescription: string; // String

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of ControllerEffect.
     */
    static None: number;

    /**
     * DAZ enum member of ControllerEffect.
     */
    static Additive: number;

    /**
     * DAZ enum member of ControllerEffect.
     */
    static Replace: number;

    /* Methods */

    /**
     * @returns DzProperty
     */
    getOwner(): DzProperty;

    /* Signals */

    attributeChanged: ISignal<void>;

    /**
     * Emitted when the value of this controller has changed.
     */
    currentValueChanged: ISignal<void>;

    /* Undocumented Augment Members */

    /** @undocumented */
    getProperty(): DzNumericProperty;

    /** @undocumented */
    getCurrentProperty(): DzNumericNodeProperty;
}
