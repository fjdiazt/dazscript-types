/**
 * Implements the logic of 'freezing' the numeric properties to a controller property.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/ercfreeze_dz
 */
declare class DzERCFreeze extends QObject {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of AttenuateMode.
     */
    static SubComponents: number;

    /**
     * DAZ enum member of AttenuateMode.
     */
    static Controller: number;

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * Adds all numeric properties on node whose values differ from their raw values to the list of properties to 'freeze' (link) to the controller property.
     * @param node DzNode - The node to add the numeric properties from.
     * @returns boolean true if node, getControllerNode(), and getControllerProperty() are defined and it succeeds, otherwise false.
     */
    addPropertiesToFreeze(node: DzNode): boolean; // Boolean

    /**
     * Performs the ERC freeze based on the current settings.
     * @returns boolean true if the freeze operation was successful, otherwise false.
     */
    doFreeze(): boolean; // Boolean

    /**
     * @returns boolean true if the controller property will be set to the value that causes the 'frozen' properties to be at their current value once the 'freeze' operation is complete, otherwise false.
     */
    getApplyController(): boolean; // Boolean

    /**
     * @returns number The mode that determines how the attenuate property will be used.
     */
    getAttenuateMode(): number; // AttenuateMode

    /**
     * @returns DzNumericProperty If set, the property that will be used to attenuate either the controller property, or the affect of the controller property on the properties returned by getPropertiesToFreeze(), depending on the AttenuateMode set.
     */
    getAttenuateProperty(): DzNumericProperty;

    /**
     * @returns DzNode The node that the controller property is on.
     */
    getControllerNode(): DzNode;

    /**
     * @returns DzNumericProperty The property that the properties returned by getPropertiesToFreeze() will be linked to when doFreeze() is called.
     */
    getControllerProperty(): DzNumericProperty;

    /**
     * @returns boolean true if the DzERCLink created between the controller property and the 'frozen' properties will be a DzERCLink::ERCKeyed, otherwise false.
     */
    getKeyed(): boolean; // Boolean

    /**
     * @returns any[] The list of properties that will be linked to the property returned by getControllerProperty() when doFreeze() is called.
     */
    getPropertiesToFreeze(): any[]; // Array

    /**
     * @returns boolean true if the Restore Figure action will be executed once the 'freeze' operation is complete, otherwise false.
     */
    getRestoreFigure(): boolean; // Boolean

    /**
     * @returns boolean true if the Restore Figure Rigging action will be executed once the 'freeze' operation is complete, otherwise false.
     */
    getRestoreRigging(): boolean; // Boolean

    /**
     * @returns boolean true if the Restore Selected Item(s) action will be executed once the 'freeze' operation is complete, otherwise false.
     * @since 4.11.0.362
     */
    getRestoreSelectedItems(): boolean; // Boolean

    /**
     * Sets whether or not the controller property will be set to the value that causes the 'frozen' properties to be at their current value once the 'freeze' operation is complete.
     * @param yesNo boolean - If true, the controller property will be applied.
     */
    setApplyController(yesNo: boolean): void;

    /**
     * Sets the mode that determines how the attenuate property will be used.
     * @param mode number - The attenuate mode to set.
     */
    setAttenuateMode(mode: number): void;

    /**
     * Sets the property that will be used to attenuate either the controller property, or the affect of the controller property on the properties returned by getPropertiesToFreeze(), depending on the AttenuateMode set.
     * @param prop DzNumericProperty - The property to set.
     */
    setAttenuateProperty(prop: DzNumericProperty): void;

    /**
     * Sets the node that the controller property is on.
     * @param node DzNode - The node to set.
     */
    setControllerNode(node: DzNode): void;

    /**
     * Sets the property that the properties returned by getPropertiesToFreeze() will be linked to when doFreeze() is called.
     * @param prop DzNumericProperty - The property to set as the controller.
     */
    setControllerProperty(prop: DzNumericProperty): void;

    /**
     * Sets whether or not the DzERCLink created between the controller property and the 'frozen' properties will be a DzERCLink::ERCKeyed (using the keys in timeline) or a DzERCLink::ERCDeltaAdd.
     * @param yesNo boolean - If true, the DzERCLink will be a DzERCLink::ERCKeyed.
     */
    setKeyed(yesNo: boolean): void;

    /**
     * Sets the list of properties that will be linked to the property returned by getControllerProperty() when doFreeze() is called.
     * @param propList any[] - The list of properties.
     */
    setPropertiesToFreeze(propList: any[]): void;

    /**
     * Sets whether or not the Restore Figure action will be executed once the 'freeze' operation is complete.
     * @param yesNo boolean - If true, the Restore Figure action will be executed.
     */
    setRestoreFigure(yesNo: boolean): void;

    /**
     * Sets whether or not the Restore Figure Rigging action will be executed once the 'freeze' operation is complete.
     * @param yesNo boolean - If true, the Restore Figure Rigging action will be executed.
     */
    setRestoreRigging(yesNo: boolean): void;

    /**
     * Sets whether or not the Restore Selected Item(s) action will be executed once the 'freeze' operation is complete.
     * @param yesNo boolean - If true, the Restore Selected Item(s) action will be executed.
     * @since 4.11.0.362
     */
    setRestoreSelectedItems(yesNo: boolean): void;

    /* Signals */

    ERCChanged: ISignal<void>;
}
