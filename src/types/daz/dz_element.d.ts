
/**
 * Base class for objects that have animatable/storable properties.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/element_dz
 */
declare class DzElement extends DzBase {
    /* Properties */

    /**
     * Holds the number used to uniquely identify this element in the scene. (Read Only)
     */
    elementID: number;

    /* Methods */

    /**
     * Hang a new custom data item off of this element. Data items will be deleted when this element is deleted, so ownership of the data item is transferred to the element after this call. Do not attempt to delete the data item yourself unless you call removeDataItem() first.
     * @param item DzElementData - The data item to attach to this element.
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     */
    addDataItem(item: DzElementData): DzError;

    /**
     * Adds a new private property to this element that will be available for connections or direct editing.
     * @param prop DzProperty - The property to add to the element.
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     */
    addPrivateProperty(prop: DzProperty): DzError;

    /**
     * Adds a new property to this element that will be available for connections or direct editing.
     * @param prop DzProperty - The property to add to the element.
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     */
    addProperty(prop: DzProperty): DzError;

    /**
     * Begins an editing operation for this element - DzProperty::beginEdit() will be called for all properties belonging to this element.
     */
    beginEdit(): void;

    /**
     * Cancels an editing operation for this element - DzProperty::cancelEdit() will be called for all properties belonging to this element.
     */
    cancelEdit(): void;

    /**
     * Removes all animation keys set on the properties of this element.
     */
    clearAllAnimData(): void;

    /**
     * Clears animation keys in the currently active animation layer. Removes animation data on all animatible properties owned by this element over the given range.
     * @param range DzTimeRange - The range of time over which keys will be removed.
     */
    clearAnimData(range: DzTimeRange): void;

    /**
     * Matches the properties on this element to properties on the given element by name, and then copies the values of matching properties on source to the properties on this element.
     * @param source DzElement - The element that this element should copy property values from.
     */
    copyFrom(source: DzElement): void;

    /**
     * Copies the property values of the element to a 'clipboard' so that they may be saved and applied (copied) to another element - or to the same element.
     * @param contentTypes any[] - A list of the contentTypes that should be included in the copy. An empty list will copy all property values.
     * @returns elementclipboard_dz The 'clipboard' which holds a copy of the current element's property values. These values are a snapshot of the current state of the element, and will remain unchanged even if the element is changed or deleted. The caller is responsible for deleting this element.
     */
    copyToClipboard(contentTypes?: any[]): any; //elementclipboard_dz;

    /**
     * Remove the data item from this element and deletes it.
     * @param item DzElementData - The data item to remove. The item is invalid after this call if DZ_NO_ERROR is returned.
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     */
    deleteDataItem(item: DzElementData): DzError;

    /**
     * @param dataName string - The name of the user data item to find.
     * @returns DzElementData The data item with the given name (if any), otherwise null.
     */
    findDataItem(dataName: string): DzElementData;

    /**
     * @param srcProp DzProperty - The property to search for a match.
     * @returns DzProperty The matching property (if any), otherwise null.
     */
    findMatchingProperty(srcProp: DzProperty): DzProperty;

    /**
     * @param name string - The name of the property to search for.
     * @returns DzProperty The private property with the given name (if any), otherwise null.
     */
    findPrivateProperty(name: string): DzProperty;

    /**
     * @param name string - The name of the property to search for.
     * @param caseSensitive boolean - Whether or not the search should be case sensitive.
     * @returns DzProperty The private property with the given name (if any), otherwise null.
     */
    findPrivateProperty(name: string, caseSensitive: boolean): DzProperty;

    /**
     * @param label string - The label of the property to search for.
     * @returns DzProperty The private property with the given label (if any), otherwise null.
     */
    findPrivatePropertyByLabel(label: string): DzProperty;

    /**
     * @param label string - The label of the property to search for.
     * @param caseSensitive boolean - Whether or not the search should be case sensitive.
     * @returns DzProperty The property with the given label (if any), otherwise null.
     */
    findPrivatePropertyByLabel(label: string, caseSensitive: boolean): DzProperty;

    /**
     * Locate a property by name.
     * @param name string - The name of the property to search for.
     * @returns DzProperty The property with the given name (if any), otherwise null.
     */
    findProperty(name: string): DzProperty;

    /**
     * Locate a property by name.
     * @param name string - The name of the property to search for.
     * @param caseSensitive boolean - Whether or not the search should be case sensitive.
     * @returns DzProperty The property with the given name (if any), otherwise null.
     */
    findProperty(name: string, caseSensitive: boolean): DzProperty;

    /**
     * @param label string - The label of the property to search for.
     * @returns DzProperty The property with the given label (if any), otherwise null.
     */
    findPropertyByLabel(label: string): DzProperty;

    /**
     * @param label string - The label of the property to search for.
     * @param caseSensitive boolean - Whether or not the search should be case sensitive.
     * @returns DzProperty The property with the given label (if any), otherwise null.
     */
    findPropertyByLabel(label: string, caseSensitive: boolean): DzProperty;

    /**
     * Finishes an editing operation for this element - DzProperty::finishEdit() will be called for all properties belonging to this element.
     */
    finishEdit(): void;

    /**
     * Populates the given settings object with the attributes of this element. If this settings object is not empty the save filters will save out this settings information in the preset.
     * @param settings DzSettings - The settings object to put the information in.
     */
    getAttributes(settings: DzSettings): void;

    /**
     * See Also:
     * @param index number - The index of the data item to return.
     * @returns DzElementData The data item for this element at the given index.
     */
    getDataItem(index: number): DzElementData;

    /**
     * @returns any[] A list of the data items attached to this element.
     */
    getDataItemList(): QObject[];

    /**
     * @param which number - The index of the child element to return.
     * @returns DzElement The child of this element at the given index (if any), otherwise null.
     */
    getElementChild(which: number): DzElement;

    /**
     * @returns DzElement The element that is the parent of this element (if any), otherwise null.
     */
    getElementParent(): DzElement;

    /**
     * @returns string The user-facing label for this element.
     */
    getLabel(): string;

    /**
     * @returns DzScript The script that is executed when this element is loaded from a file (if any), otherwise null.
     */
    getLoadScript(): DzScript;

    /**
     * @returns number The number of user data items attached to this element.
     */
    getNumDataItems(): number;

    /**
     * @returns number The number of children this element has.
     */
    getNumElementChildren(): number;

    /**
     * @returns number The number of private properties currently owned by this element.
     */
    getNumPrivateProperties(): number;

    /**
     * @returns number The number of properties currently owned by this element.
     */
    getNumProperties(): number;

    /**
     * @param index number
     * @returns DzProperty The private property at the given index (if valid), otherwise null.
     */
    getPrivateProperty(index: number): DzProperty;

    /**
     * @returns DzPropertyGroupTree The property group tree for private properties owned by this element. If this element does not manage its own property grouping, the tree that is returned will be the tree of the element that manages the property groups for this element.
     */
    getPrivatePropertyGroups(): DzPropertyGroupTree;

    /**
     * @returns any[] A list of all private properties on this element.
     */
    getPrivatePropertyList(): DzProperty[];

    /**
     * @param index number
     * @returns DzProperty The property at the given index (if valid), otherwise null.
     */
    getProperty(index: number): DzProperty;

    /**
     * @returns DzPropertyGroupTree The property group tree for properties owned by this element. If this element does not manage its own property grouping, the tree that is returned will be the tree of the element that manages the property groups for this element.
     */
    getPropertyGroups(): DzPropertyGroupTree;

    /**
     * @returns any[] A list of all properties on this element.
     */
    getPropertyList(): DzProperty[];

    /**
     * @returns string The user-facing label for this type of element.
     * @since 4.12.1.103
     */
    getTypeLabel(): string;

    /**
     * @param dataName string - The name of the data item to make unique.
     * @returns string The original value if dataName is already unique, otherwise a unique name.
     * @since 4.9.3.117
     */
    getUniqueDataItemName(dataName: string): string;

    /**
     * See Also:
     * @returns boolean true if the element is in an editing operation, otherwise false.
     */
    inEdit(): boolean;

    /**
     * Adds a new private property to this element that will be available for connections or direct editing.
     * @param index number - The location in the list to insert the new property.
     * @param prop DzProperty - The property to add to the element.
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     */
    insertPrivateProperty(index: number, prop: DzProperty): DzError;

    /**
     * Adds a new property to this element that will be available for connections or direct editing.
     * @param index number - The index in the properties list to insert the property.
     * @param prop DzProperty - The property to insert in the element.
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     */
    insertProperty(index: number, prop: DzProperty): DzError;

    /**
     * Moves the given property from this element to newElement, if it can be removed. Properties can be specified as non-removable (i.e., DzProperty::isUserProperty()). Doing so makes it impossible to move that property to another element.
     * @param prop DzProperty - The property to remove from the element. If prop is not a user property, it returns DZ_ILLEGAL_ARGUMENT_ERROR. Note: This is also the return code for a null pointer. Passing a null pointer generates a log message, whereas passing a non-user property does not.
     * @param element DzElement
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     */
    movePrivateProperty(prop: DzProperty, element: DzElement): DzError;

    /**
     * Moves the given property from this element to newElement, if it can be removed. Properties can be specified as non-removable (e.g. the rotation channels of the DzNode class). Doing so makes it impossible to move that property to another element.
     * @param prop DzProperty - The property to remove from the element. If prop is not a user property, it returns DZ_ILLEGAL_ARGUMENT_ERROR. Note: This is also the return code for a null pointer. Passing a null pointer generates a log message, whereas passing a non-user property does not.
     * @param element DzElement
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     */
    moveProperty(prop: DzProperty, element: DzElement): DzError;

    /**
     * Remove the data item from this element.
     * @param item DzElementData - The data item to remove.
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     */
    removeDataItem(item: DzElementData): DzError;

    /**
     * Removes the given private property, if it can be removed. Properties can be specified as non-removable (i.e., DzProperty::isUserProperty() - e.g. the rotation channels of the DzNode class). Doing so makes it impossible to remove that property from this element.
     * @param prop DzProperty - The property to remove from the element.
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     */
    removePrivateProperty(prop: DzProperty): DzError;

    /**
     * Removes the given private property, if it can be removed. Properties can be specified as non-removable (i.e., DzProperty::isUserProperty() - e.g. the rotation channels of the DzNode class). Doing so makes it impossible to remove that property from this element.
     * @param name string - The name of the property to search for and remove if it is found.
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     */
    removePrivateProperty(name: string): DzError;

    /**
     * Attempts to remove the named property. Fails if the property could not be found or could not be removed.
     * @param name string - The name of the property to search for and remove if it is found.
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     */
    removeProperty(name: string): DzError;

    /**
     * Attempts to remove the named property. Fails if the property could not be found or could not be removed.
     * @param prop DzProperty - The property to remove from the element.
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     */
    removeProperty(prop: DzProperty): DzError;

    /**
     * Sets attributes in the handed in settings and returns a pointer to an element set by these settings. The element returned may not be a new element or null if the settings are not correct. Default implementation returns this with no changes.
     * @param settings DzSettings - The settings object containing the information.
     * @returns DzElement A new element, or this element if no changes were made. The caller is responsible for cleaning up the memory of the return element if it is not this.
     */
    setAttributes(settings: DzSettings): DzElement;

    /**
     * Sets the user-facing label (i.e., displayed in the interface) for this element.
     * @param name string - The new label for this element.
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     */
    setLabel(name: string): DzError;

    /**
     * Sets the script that will be executed when this element is loaded from a file.
     * @param script DzScript - The script that will be saved with this element and executed when it is loaded from file. This element takes ownership.
     */
    setLoadScript(script: DzScript): void;

    /**
     * @returns boolean true if this element should have its property groups and properties sorted after being created on load, otherwise false.
     */
    shouldSortOnLoad(): boolean;

    /** @undocumented */
    addElementChild(child: DzElement): void;

    /** @undocumented */
    addPrivatePropertyInternal(newprop: DzProperty): void;

    /** @undocumented */
    addPrivatePropertyToList(prop: DzProperty): DzError;

    /** @undocumented */
    addPropertyInternal(newprop: DzProperty): void;

    /** @undocumented */
    addPropertyToList(prop: DzProperty): DzError;

    /** @undocumented */
    defaultPropertyGroupTree(): DzPropertyGroupTree;

    /** @undocumented */
    duplicateMissingCustomData(tgt: DzElement): void;

    /** @undocumented */
    duplicateMissingPrivateProperties(tgt: DzElement): void;

    /** @undocumented */
    duplicateMissingProperties(tgt: DzElement): void;

    /** @undocumented */
    elementChildIterator(): DzElementListIterator;

    /** @undocumented */
    getIsPropertyTreeOwnedByParent(): boolean;

    /** @undocumented */
    insertPrivatePropertyInList(index: number, prop: DzProperty): DzError;

    /** @undocumented */
    insertPropertyInList(index: number, prop: DzProperty): DzError;

    /** @undocumented */
    isDataItemNameUnique(dataName: QString, makeUnique: boolean): boolean;

    /** @undocumented */
    isPrivatePropertyNameUnique(name: QString, makeUnique: boolean): boolean;

    /** @undocumented */
    isPropertyNameUnique(name: QString, makeUnique: boolean): boolean;

    /** @undocumented */
    privatePropertyListIterator(): DzPropertyListIterator;

    /** @undocumented */
    propertyListIterator(): DzPropertyListIterator;

    /** @undocumented */
    regroupPrivateProperties(tree: DzPropertyGroupTree): void;

    /** @undocumented */
    regroupProperties(tree: DzPropertyGroupTree): void;

    /** @undocumented */
    removeElementChild(child: DzElement): void;

    /** @undocumented */
    setElementParent(elem: DzElement, regroup: boolean): void;

    /** @undocumented */
    setIsPropertyTreeOwnedByParent(onoff: boolean): void;

    /** @undocumented */
    getElementName(): QString;

    /** @undocumented */
    paste(elem: DzElement, contentTypes: String[]): DzError;

    /** @undocumented */
    duplicate(owner: DzElement): DzElementData;

    /** @undocumented */
    writeDataItem(dataItem: DzElementData, io: any): boolean;

    /** @undocumented */
    writeScene(io: any): boolean;

    /** @undocumented */
    shouldWriteProperty(prop: DzProperty): boolean;

    /** @undocumented */
    applyToProperty(prop: DzProperty, opts: DzFileIOSettings): boolean;

    /** @undocumented */
    getPropertyName(): QString;

    /** @undocumented */
    setPropertyName(name: QString): void;

    /** @undocumented */
    writeProperty(file: DzAssetOutFile, io: any, prop: DzProperty): boolean;

    /** @undocumented */
    writePropertyValue(file: DzAssetOutFile, io: any, prop: DzProperty): boolean;

    /** @undocumented */
    applyToElement(elem: DzElement, checkPrivateProperties: boolean, opts: DzFileIOSettings): boolean;

    /** @undocumented */
    writeElementProperties(file: DzAssetOutFile, io: any, elem: DzElement, filter: DzElementPropertyIOFilter): boolean;

    /** @undocumented */
    writeProperties(file: DzAssetOutFile, io: any, propIt: DzPropertyListIterator, filter: DzElementPropertyIOFilter): boolean;

    /* Signals */

    /**
     * Emitted when this element's label is changed.
     */
    labelChanged: ISignalT<string>;

    /**
     * Emitted when this element's parent is changed.
     */
    parentChanged: ISignalT<void>;

    /**
     * Emitted when a private property is added to this element.
     */
    privatePropertyAdded: ISignalT<DzProperty>;

    /**
     * Emitted when a private property is added to or removed from this element.
     */
    privatePropertyListChanged: ISignalT<void>;

    /**
     * Emitted when a private property is removed from this element.
     */
    privatePropertyRemoved: ISignalT<DzProperty>;

    /**
     * Emitted when the private property tree has changed.
     */
    privatePropertyTreeChanged: ISignalT<void>;

    /**
     * Emitted when a property is added to this element.
     */
    propertyAdded: ISignalT<DzProperty>;

    /**
     * Emitted when a property is added to or removed from this element.
     */
    propertyListChanged: ISignalT<void>;

    /**
     * Emitted when a property is removed from this element.
     */
    propertyRemoved: ISignalT<DzProperty>;

    /**
     * Emitted when the property tree has changed.
     */
    propertyTreeChanged: ISignalT<void>;
}