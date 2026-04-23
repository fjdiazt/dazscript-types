/**
 * Represents the root of a property group tree.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/propertygrouptree_dz
 */
declare class DzPropertyGroupTree extends DzBase {

    /* Methods */

    /**
     * @param name string - The name of the property group to look for.
     * @returns DzPropertyGroup The child with the given path (if any), otherwise NULL.
     */
    findChild(name: string): DzPropertyGroup;

    /**
     * Attempts to find a property with a given name.
     * @param name string - The name of the property to find.
     * @returns DzProperty The found property (if any), otherwise NULL.
     * @since 4.7.1.43
     */
    findProperty(name: string): DzProperty;

    /**
     * Attempts to find a property with a given label.
     * @param label string - The label of the property to find.
     * @returns DzProperty The found property (if any), otherwise NULL.
     * @since 4.11.0.166
     */
    findPropertyByLabel(label: string): DzProperty;

    /**
     * @returns any[] A list of all property group paths in this tree.
     */
    getAllPaths(): any[]; // Array

    /**
     * @returns any[] A list of all properties in this tree.
     * @since 4.9.4.101
     */
    getAllProperties(): any[]; // Array

    /**
     * @returns DzPropertyGroup The default property group for the tree; i.e., “General”
     */
    getDefaultGroup(): DzPropertyGroup;

    /**
     * @returns DzPropertyGroup The first child group (if any), otherwise NULL.
     */
    getFirstChild(): DzPropertyGroup;

    /**
     * @returns DzElement The element that this property group tree belongs to.
     */
    getOwner(): DzElement;

    /**
     * @returns boolean true if this property group tree is private, otherwise false.
     */
    isPrivate(): boolean; // bool

    /**
     * Sets whether or not this property group tree is private.
     * @param onoff boolean
     */
    setIsPrivate(onoff: boolean): void;

    /**
     * Alpha-numerically sorts the property groups, keeping “General” at the top.
     */
    sortGroups(): void;

    /* Signals */

    /**
     * Emitted when the child list of the group has changed.
     */
    childListChanged: ISignal<void>;

    /**
     * Emitted when the visibility of a property in the tree has changed.
     * @param grp DzPropertyGroup - The group containing the property.
     * @param prop DzProperty - The property that changed.
     */
    propertyVisiblityChanged: ISignal<DzPropertyGroup, DzProperty>;

    /**
     * Emitted when the tree has changed.
     */
    treeChanged: ISignal<void>;

    /**
     * Emitted when the tree is sorted.
     */
    treeSorted: ISignal<void>;

    /* Undocumented Augment Members */

    /** @undocumented */
    getName(): any;

    /** @undocumented */
    moveChildToIndex(childName: QString, newIndex: number): any;
}
