/**
 * Represents a grouping of properties.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/propertygroup_dz
 */
declare class DzPropertyGroup extends DzBase {

    /* Static Methods */

    /**
     * @returns string The name of the default group.
     * @since 4.7.1.66
     */
    static getDefaultGroupName(): string; // String

    /* Methods */

    /**
     * @param name string - The name of the property group to look for.
     * @returns DzPropertyGroup The child with the given name (if any), otherwise NULL.
     */
    findChild(name: string): DzPropertyGroup;

    /**
     * @param propName string - The name of the property to find.
     * @param traverse boolean - If true, the siblings of this group will be checked.
     * @param recurse boolean - If true, the children of this group will be checked.
     * @returns DzProperty The property in this group with the given name (if any), otherwise null.
     * @since 4.7.1.34
     */
    findProperty(propName: string, traverse?: boolean, recurse?: boolean): DzProperty;

    /**
     * @param propLabel string - The label of the property to find.
     * @param traverse boolean - If true, the siblings of this group will be checked.
     * @param recurse boolean - If true, the children of this group will be checked.
     * @returns DzProperty The property in this group with the given label (if any), otherwise null.
     * @since 4.9.3.11
     */
    findPropertyByLabel(propLabel: string, traverse?: boolean, recurse?: boolean): DzProperty;

    /**
     * @param name string - The name of the sibling to look for.
     * @returns DzPropertyGroup The sibling with the given name (if any), otherwise NULL.
     */
    findSibling(name: string): DzPropertyGroup;

    /**
     * Provided for convenience and DAZ Script access.
     * @returns any[] A list of all property group paths begining with this group.
     */
    getAllPaths(): any[]; // Array

    /**
     * @returns any[] A list of all properties in this group.
     * @since 4.9.4.101
     */
    getAllProperties(): any[]; // Array

    /**
     * @returns boolean true if the group is collapsed, otherwise false.
     */
    getCollapsed(): boolean; // Boolean

    /**
     * @returns DzPropertyGroup The first child group, if any.
     */
    getFirstChild(): DzPropertyGroup;

    /**
     * @returns DzPropertyGroup The next sibling to this group (if any), otherwise NULL.
     */
    getNextSibling(): DzPropertyGroup;

    /**
     * @returns number The number of properties in this group.
     */
    getNumProperties(): number; // Number

    /**
     * @returns DzPropertyGroup The current parent of this group.
     */
    getParent(): DzPropertyGroup;

    /**
     * @returns string The path of this group.
     */
    getPath(): string; // String

    /**
     * @returns DzPropertyGroup The previous sibling (if any), otherwise NULL.
     * @since 4.7.1.66
     */
    getPreviousSibling(): DzPropertyGroup;

    /**
     * @param i number - The index of the property to return.
     * @returns DzProperty The i'th property in this group.
     */
    getProperty(i: number): DzProperty;

    /**
     * @returns any The region associated with this property group (if any), otherwise NULL. Undocumented DAZ type: geometryregion_dz.
     */
    getRegion(): any; // geometryregion_dz; undocumented type

    /**
     * @returns DzPropertyGroupTree The property group tree that this group belongs to.
     */
    getTree(): DzPropertyGroupTree;

    /**
     * @param prop DzProperty
     * @returns number The index of prop in the group, or -1 if prop is not in the group.
     */
    indexOfProperty(prop: DzProperty): number; // Number

    /**
     * @returns boolean true if this group is associated with a geometryregion_dz, otherwise false.
     */
    isRegion(): boolean; // Boolean

    /**
     * Moves the specified property to a new position within the group.
     * @param prop DzProperty - The property to move. This property must be in this group to be successful.
     * @param newIndex number - The location to move prop to; if not a valid index, prop is moved to the end of the list.
     * @returns boolean true if the move was successful, otherwise false.
     */
    movePropertyToIndex(prop: DzProperty, newIndex: number): boolean; // Boolean

    /**
     * Sets whether or not the group is displayed as collapsed in the interface.
     * @param onOff boolean - If true, the group is collapsed. If false, the group is expanded.
     */
    setCollapsed(onOff: boolean): void;

    /**
     * Sets the label of prop to a unique version of itself.
     * @param prop DzProperty - The property to set the label on.
     */
    setUniquePropertyLabel(prop: DzProperty): void;

    /**
     * Alpha-numerically sorts the property groups, and the properties in them.
     */
    sort(): void;

    /* Signals */

    /**
     * Emitted when a child has been added to the group.
     * @param newChild DzPropertyGroup - The newly added group.
     */
    addedChild: ISignal<DzPropertyGroup>;

    /**
     * Emitted when the child list of the group has changed.
     */
    childListChanged: ISignal<void>;

    /**
     * Emitted when the parent of the group has changed.
     * @param newParent DzPropertyGroup - The new parent of the group.
     */
    parentChanged: ISignal<DzPropertyGroup>;

    /**
     * Emitted when the visibility of a property in the group has changed.
     * @param grp DzPropertyGroup - The group containing the property.
     * @param prop DzProperty - The property that changed.
     */
    propertyVisiblityChanged: ISignal<DzPropertyGroup, DzProperty>;

    /**
     * Emitted when a child has been removed from the group.
     * @param child DzPropertyGroup - The group that has been removed.
     */
    removedChild: ISignal<DzPropertyGroup>;

    /**
     * Emitted when the tree has changed.
     */
    treeChanged: ISignal<void>;

    /* Undocumented Augment Members */

    /** @undocumented */
    moveChildToIndex(childName: QString, newIndex: number): boolean;
}
