/**
 * An animatable node property.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/nodeproperty_dz
 */
declare class DzNodeProperty extends DzProperty {

    /* Constructors */

    constructor();

    /**
     * @param name string
     * @param canAnimate boolean
     * @param isUserProperty boolean
     */
    constructor(name: string, canAnimate: boolean, isUserProperty: boolean);

    /* Methods */

    /**
     * Excludes the given node from becoming the value of this property.
     * @param node DzNode - The node to exclude.
     */
    exclude(node: DzNode): void;

    /**
     * @returns DzNode The default value of the property (if any), otherwise NULL.
     */
    getDefaultValue(): DzNode;

    /**
     * @param i number
     * @returns DzNode The value of the property at the given key (if any), otherwise NULL.
     */
    getKeyValue(i: number): DzNode;

    /**
     * @param tm DzTime - The scene time for which to get the value of the property.
     * @returns DzNode The value of the property at the given time (if any), otherwise NULL.
     */
    getValue(tm: DzTime): DzNode;

    /**
     * @returns DzNode The value of the property (if any), otherwise NULL.
     */
    getValue(): DzNode;

    /**
     * @param node DzNode - The node to check for exclusion.
     * @returns boolean true if the given node is excluded from becoming the value of this property, otherwise false.
     */
    isExcluded(node: DzNode): boolean; // Boolean

    /**
     * Set the default value of the property.
     * @param node DzNode - The default value for this property.
     */
    setDefaultValue(node: DzNode): void;

    /**
     * Set the value of the property for the given key.
     * @param which number - The index of the key to set a value for.
     * @param node DzNode - The node to associate with the given key.
     */
    setKeyValue(which: number, node: DzNode): void;

    /**
     * Set the value of the property.
     * @param node DzNode - The node to associate with this property.
     */
    setValue(node: DzNode): void;

    /**
     * Set the value of the property at the given time.
     * @param tm DzTime - The scene time for which to set the value.
     * @param node DzNode - The node to associate with this property.
     */
    setValue(tm: DzTime, node: DzNode): void;

    /**
     * Removes the given node from the list of excluded nodes.
     * @param node DzNode - The node to unexclude.
     * @since 4.12.1.83
     */
    unexclude(node: DzNode): void;

    /* Signals */

    /**
     * Emitted immediately before the value of the property changes.
     */
    aboutToChange: ISignal<void>;

    /* Undocumented Augment Members */

    /** @undocumented */
    changeNode(node: DzNode): void;

    /** @undocumented */
    clearobject(): void;

    /** @undocumented */
    propertyChangeNotify(): void;

    /** @undocumented */
    showEvent(e: QShowEvent): void;

    /** @undocumented */
    updateNodeList(): void;

    /** @undocumented */
    updateValue(): void;
}
