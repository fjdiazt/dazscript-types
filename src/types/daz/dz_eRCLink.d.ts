/**
 * DAZ Studio implementation of property links (aka ERC).
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/erclink_dz
 */
declare class DzERCLink extends DzNumericController {

    /* Properties */

    /**
     * Holds whether or not the controller is evaluated and applied.
     */
    active: boolean; // Boolean

    /**
     * Holds the addend value for the link.
     */
    addend: number; // Number

    /**
     * Holds whether or not the link will be automatically redirected when its owner is 'Fit To' another figure.
     */
    autoOverride: boolean; // Boolean

    /**
     * Holds whether or not the link is a user-link.
     */
    isUserLink: boolean; // Boolean

    /**
     * Holds the interpolation mode for links of the ERCKeyed type.
     */
    keyInterpolation: number; // ERCKeyInterpolation

    /**
     * Holds whether the controller will be saved with the output property (the property that owns the link), or the input property (the linked property).
     */
    saveWithOutput: boolean; // Boolean

    /**
     * Holds the scalar (multiplier) value for links of the ERCDeltaAdd type.
     */
    scalar: number; // Number

    /**
     * Holds the type of operation the link will perform when evaluated and applied.
     */
    type: number; // ERCType

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of ERCKeyInterpolation.
     */
    static LINEAR_INTERP: number;

    /**
     * DAZ enum member of ERCKeyInterpolation.
     */
    static CONSTANT_INTERP: number;

    /**
     * DAZ enum member of ERCKeyInterpolation.
     */
    static TCB_INTERP: number;

    /**
     * DAZ enum member of ERCType.
     */
    static ERCDeltaAdd: number;

    /**
     * DAZ enum member of ERCType.
     */
    static ERCDivideInto: number;

    /**
     * DAZ enum member of ERCType.
     */
    static ERCDivideBy: number;

    /**
     * DAZ enum member of ERCType.
     */
    static ERCMultiply: number;

    /**
     * DAZ enum member of ERCType.
     */
    static ERCSubtract: number;

    /**
     * DAZ enum member of ERCType.
     */
    static ERCAdd: number;

    /**
     * DAZ enum member of ERCType.
     */
    static ERCKeyed: number;

    /* Constructors */

    constructor();

    /**
     * @param copyFrom DzERCLink
     * @param property DzNumericProperty
     */
    constructor(copyFrom: DzERCLink, property?: DzNumericProperty);

    /**
     * @param type number
     * @param property DzNumericProperty
     * @param scalar number
     * @param addend number
     */
    constructor(type: number, property: DzNumericProperty, scalar?: number, addend?: number);

    /**
     * @param property DzNumericProperty
     * @param scalar number
     * @param addend number
     */
    constructor(property: DzNumericProperty, scalar?: number, addend?: number);

    /* Methods */

    /**
     * Adds a keyed value to the link if the type is ERCKeyed and the interpolation mode is LINEAR_INTERP or CONSTANT_INTERP.
     * @param key number - The value of the property that drives this link to add a keyed value for.
     * @param value number - The value of the property this link resides on to add a keyed value for.
     * @returns number If the keyed value was sucessfully added, the index that it was added at, otherwise 0.
     */
    addKeyValue(key: number, value: number): number; // Number

    /**
     * Adds a keyed value to the link if the type is ERCKeyed and the interpolation mode is TCB_INTERP.
     * @param key number - The value of the property that drives this link to add a keyed value for.
     * @param value number - The value of the property this link resides on to add a keyed value for.
     * @param t number - The tenstion value to set for the keyed value.
     * @param c number - The continuity value to set for the keyed value.
     * @param b number - The bias value to set for the keyed value.
     * @returns number If the keyed value was sucessfully added, the index that it was added at, otherwise 0.
     */
    addKeyValue(key: number, value: number, t: number, c: number, b: number): number; // Number

    /**
     * Clears all keyed values for links of the ERCKeyed type.
     */
    clearKeys(): void;

    /**
     * Makes a deep copy of this link.
     * @param newProperty DzNumericProperty - The property to drive the duplicated link with.
     * @returns DzERCLink A deep copy of this link, driven by the specified property.
     */
    duplicate(newProperty?: DzNumericProperty): DzERCLink;

    /**
     * @param key number - The value of the property that drives this link to find the index of.
     * @returns number If the type of the link is ERCKeyed, the index of key, otherwise -1.
     */
    findKeyIndex(key: number): number; // Number

    /**
     * @returns DzNumericProperty The property that is currently driving this link. Typically, this will return the same value as getProperty(), however, if autoOverride is enabled, and the property's owner is 'Fit To' another node, this will return the property on the node that this link has been redirected to.
     */
    getCurrentProperty(): DzNumericProperty;

    /**
     * @param which number - The index of the keyed value to get the key for.
     * @returns number If the type of link is ERCKeyed and which is within the range of keyed values, the key at which, otherwise 0.
     */
    getKey(which: number): number; // Number

    /**
     * @param val number
     * @returns number If the link is the ERCKeyed type, the interpolated value of the operation at tm, otherwise 0.
     */
    getKeyOpValue(val: number): number; // Number

    /**
     * @param which number - The index of the keyed value to get the bias value for.
     * @returns number If the type of link is ERCKeyed, which is within the range of keyed values, and the interpolation mode is TCB_INTERP, the bias value at which, otherwise 0.
     */
    getKeyParamB(which: number): number; // Number

    /**
     * @param which number - The index of the keyed value to get the continuity value for.
     * @returns number If the type of link is ERCKeyed, which is within the range of keyed values, and the interpolation mode is TCB_INTERP, the continuity value at which, otherwise 0.
     */
    getKeyParamC(which: number): number; // Number

    /**
     * @param which number - The index of the keyed value to get the tension value for.
     * @returns number If the type of link is ERCKeyed, which is within the range of keyed values, and the interpolation mode is TCB_INTERP, the tension value at which, otherwise 0.
     */
    getKeyParamT(which: number): number; // Number

    /**
     * @param which number - The index of the keyed value to get the value for.
     * @returns number If the type of link is ERCKeyed and which is within the range of keyed values, the value at which, otherwise 0.
     */
    getKeyValue(which: number): number; // Number

    /**
     * @returns number The number of keyed values for a link of the ERCKeyed type.
     */
    getNumKeyValues(): number; // Number

    /**
     * @returns DzNumericProperty The property that drives this link.
     */
    getProperty(): DzNumericProperty;

    /**
     * Presizes the array of keyed values in order to improve the performance of adding keyed values.
     * @param count number - The number of keyed values to be added.
     */
    presizeKeys(count: number): void;

    /**
     * Removes a keyed value from the link if the link type is ERCKeyed.
     * @param which number - The keyed value (of the property that drives this link) to remove.
     * @returns boolean true if which is within the range of keyed values, otherwise false.
     */
    removeKeyValue(which: number): boolean; // Boolean

    /**
     * Sets the property that drives this link.
     * @param prop DzNumericProperty - The property to drive this link with.
     */
    setProperty(prop: DzNumericProperty): void;

    /* Signals */

    /**
     * @param prop DzProperty
     */
    ercSourcePropertyRemoved: ISignal<DzProperty>;

    /**
     * @param which number
     */
    keyChanged: ISignal<number>;

    keyInterpolationChanged: ISignal<void>;

    keysListChanged: ISignal<void>;

    /**
     * Emitted when the source property or current property is deleted.
     * @param prop DzProperty - The property that was deleted.
     */
    propertyDeleted: ISignal<DzProperty>;

    saveWithOutputChanged: ISignal<void>;

    scalarChanged: ISignal<void>;

    stageChanged: ISignal<void>;

    typeChanged: ISignal<void>;

    /* Undocumented Augment Members */

    /** @undocumented */
    getName(): any;

    /** @undocumented */
    iskindof(p0: string): any;
}
