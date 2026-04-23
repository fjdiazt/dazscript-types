/**
 * Implements the logic of 'baking' a numeric property to the numeric properties it controls.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/ercbake_dz
 */
declare class DzERCBake extends QObject {

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * Performs the ERC bake based on the current settings.
     * @returns boolean true if the bake operation was successful, otherwise false.
     */
    doBake(): boolean; // Boolean

    /**
     * Performs the ERC bake based on the current settings.
     * @param warn boolean
     * @returns boolean true if the bake operation was successful, otherwise false.
     */
    doBakeKeyed(warn: boolean): boolean; // Boolean

    /**
     * @returns DzNumericProperty The property (if any) that controls the properties that will be baked when doBake() is called.
     */
    getControllerProperty(): DzNumericProperty;

    /**
     * Sets the property that controls the properties that will be baked when doBake() is called.
     * @param prop DzNumericProperty - The property to set as the controller to bake.
     */
    setControllerProperty(prop: DzNumericProperty): void;

    /* Signals */

    ERCChanged: ISignal<void>;
}
