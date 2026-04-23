/**
 * Base class for all property types.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/property_dz
 */
declare class DzProperty extends DzBase {

    /* Properties */

    /**
     * Holds the author of the file for this property. (Read Only)
     * @since 4.8.1.21
     */
    assetAuthor: DzAuthor;

    /**
     * Holds the revision version of the asset file for this property. (Read Only)
     * @since 4.8.1.21
     */
    assetFileRevision: DzVersion;

    /**
     * Holds the asset id for this property.
     * @since 4.8.1.18
     */
    assetId: string; // String

    /**
     * Holds the modified date of the asset file for this property. (Read Only)
     * @since 4.8.1.21
     */
    assetModifiedDate: Date;

    /**
     * Holds whether or not the asset for this property needs to be saved. (Read Only)
     * @since 4.11.0.249
     */
    assetNeedSave: boolean; // Boolean

    /**
     * Holds the URI of the asset source for this property; only valid when the asset is in an embedded state - i.e. modified. (Read Only)
     * @since 4.8.1.21
     */
    assetSource: DzUri;

    /**
     * Holds the asset URI for this property. (Read Only)
     * @since 4.8.1.18
     */
    assetUri: DzUri;

    /**
     * Holds whether or not currentValueChanged() is emitted when the scene is cleared.
     * @since 4.8.0.34
     */
    emitValueChangedOnSceneClear: boolean; // Boolean

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of InterpolationType.
     */
    static InterpLinear: number;

    /**
     * DAZ enum member of InterpolationType.
     */
    static InterpConstant: number;

    /**
     * DAZ enum member of InterpolationType.
     */
    static InterpTCB: number;

    /**
     * DAZ enum member of InterpolationType.
     */
    static InterpHermite: number;

    /**
     * DAZ enum member of PropertyResetFlags.
     */
    static ResetValue: number;

    /**
     * DAZ enum member of PropertyResetFlags.
     */
    static ResetImages: number;

    /**
     * DAZ enum member of PropertyResetFlags.
     */
    static ResetToDefinition: number;

    /**
     * DAZ enum member of PropertyResetFlags.
     */
    static ResetDefault: number;

    /**
     * DAZ enum member of PropertyValueSettingsFlags.
     */
    static Standard: number;

    /**
     * DAZ enum member of PropertyValueSettingsFlags.
     */
    static IncludeDefault: number;

    /**
     * DAZ enum member of PropertyValueSettingsFlags.
     */
    static CurrentValue: number;

    /**
     * DAZ enum member of PropertyValueSettingsFlags.
     */
    static AdjustValue: number;

    /**
     * DAZ enum member of PropertyValueSettingsFlags.
     */
    static SkipImages: number;

    /* Methods */

    /**
     * Adds a value to a settings.
     * @param tm DzTime - The scene time to add the value for.
     * @param settings DzSettings - The settings to add the data to.
     * @param flags number - A bitwise OR of the flags for controlling the operation.
     * @since 4.7.1.72
     */
    addValueToSettings(tm: DzTime, settings: DzSettings, flags?: number): void;

    /**
     * Adds a value to a settings.
     * @param settings DzSettings - The settings to add the data to.
     * @param flags number - A bitwise OR of the flags for controlling the operation.
     * @since 4.7.1.72
     */
    addValueToSettings(settings: DzSettings, flags?: number): void;

    /**
     * Creates an undo item for the property.
     */
    beginEdit(): void;

    /**
     * @param rootNode DzNode - The node the path should be relative too. If null (default) the skeleton will be used when parented to a skeleton, otherwise the property's own node will be used if it is not part of a skeleton hierarchy.
     * @returns DzUri A id path URI representing this property, relative to the root node.
     * @since 4.15.1.76
     */
    buildIdUriToRoot(rootNode?: DzNode): DzUri;

    /**
     * @param rootNode DzNode - The node the path should be relative too. If null (default) the skeleton will be used when parented to a skeleton, otherwise the property's own node will be used if it is not part of a skeleton hierarchy.
     * @returns DzUri A name path URI representing this property, relative to the root node.
     * @since 4.9.2.20
     */
    buildNameUriToRoot(rootNode?: DzNode): DzUri;

    /**
     * @returns boolean true if it is legal to animate this property, otherwise false.
     */
    canAnimate(): boolean; // Boolean

    /**
     * @returns boolean true if the property can automatically follow a property on a following figure, otherwise false.
     */
    canAutoFollow(): boolean; // Boolean

    /**
     * Finish the edit operation but cancel any changes.
     */
    cancelEdit(): void;

    /**
     * Clears the region associated with this property.
     * @param preservePath boolean - If true (default), this property's path will not be affected, otherwise the region's path will be removed from this property's path.
     */
    clearRegion(preservePath?: boolean): void;

    /**
     * Copies the value(s) of the given property into this property.
     * @param prop DzProperty
     */
    copyFrom(prop: DzProperty): void;

    /**
     * Copies the value(s) of the property to a 'clipboard' so that they may be saved and applied (pasted) to another property; or to the same property.
     * @returns any The 'clipboard' which holds a copy of the current property's value(s). These values are a snapshot of the current state of the property, and will remain unchanged even if the property is changed or deleted. Undocumented DAZ type: propertyclipboard_dz.
     */
    copyToClipboard(): any; // propertyclipboard_dz; undocumented type

    /**
     * Creates a new property that forwards all edits of its values to the property it is an alias of.
     * @returns DzProperty The created property alias.
     */
    createAlias(): DzProperty;

    /**
     * @returns boolean true if the current value of the property is the same as the default value, otherwise false.
     */
    currentValueIsDefaultValue(): boolean; // Boolean

    /**
     * @returns boolean true if the current value of the property is the same as the value in the file definition, otherwise false.
     */
    currentValueIsDefinitionValue(): boolean; // Boolean

    /**
     * Deletes all keys on this property.
     */
    deleteAllKeys(): void;

    /**
     * Deletes all keys within a specified range.
     * @param start number - The key index to start from.
     * @param end number - The key index to end at.
     * @returns number The number of keys deleted.
     */
    deleteKeys(start: number, end: number): number; // Number

    /**
     * Clears key values within the given range, including the endpoints.
     * @param interval DzTimeRange
     * @returns number The number of keys actually deleted.
     */
    deleteKeys(interval: DzTimeRange): number; // Number

    /**
     * Deletes all selected keys.
     * @returns number The number of keys actually removed.
     */
    deleteSelectedKeys(): number; // Number

    /**
     * @returns boolean true if the current property attributes are the same as the definitions, otherwise false.
     */
    doCurrentAttributesMatchDefinition(): boolean; // Boolean

    /**
     * @param tm DzTime
     * @returns number The index of the key if there is a key at the given time, otherwise -1.
     * @since 4.11.0.225
     */
    findKeyIndex(tm: DzTime): number; // Number

    /**
     * Searches node for a property that matches the name of this property.
     * @param node DzNode - The node to search.
     * @returns DzProperty
     */
    findMatchingProperty(node: DzNode): DzProperty;

    /**
     * Finalizes the undo item and pushes it on to the undo stack.
     */
    finishEdit(): void;

    /**
     * @param index number - The index of the alias to this property to get.
     * @returns DzProperty The alias to this property at index (if valid), otherwise null.
     */
    getAlias(index: number): DzProperty;

    /**
     * @returns DzProperty The property that this property is an alias of, or NULL if none (default).
     */
    getAliasTarget(): DzProperty;

    /**
     * Populates the given settings object with the attributes of this property.
     * @param settings DzPropertySettings
     */
    getAttributes(settings: DzPropertySettings): void;

    /**
     * @returns DzUri The auto-follow target URI for this property.
     * @since 4.9.2.19
     */
    getAutoFollowTargetUri(): DzUri;

    /**
     * @param idx number - The index of the controller on this property to get.
     * @returns DzController The i'th controller on this property.
     */
    getController(idx: number): DzController;

    /**
     * @returns any[] A list of the controllers on this property.
     */
    getControllerList(): any[]; // Array

    /**
     * @returns DzPropertyGroup The property group that this property belongs to (if any), otherwise null.
     */
    getGroup(): DzPropertyGroup;

    /**
     * @param controller DzController
     * @returns number The index of controllers that are slaved to this property (if any), otherwise -1.
     */
    getIndexOfSlaveControllers(controller: DzController): number; // Number

    /**
     * @param i number - The index of the key to get the interpolation values for.
     * @returns number The type of interpolation performed for the i'th key in the property.
     * @since 4.11.0.210
     */
    getKeyInterpolationType(i: number): number; // InterpolationType

    /**
     * @param i number - The index of the key to get the interpolation values for.
     * @returns any[] A list of 4 values for the interpolation type performed for the i'th key in the property.
     * @since 4.11.0.210
     */
    getKeyInterpolationTypeValues(i: number): any[]; // Array

    /**
     * @returns DzTimeRange The total range of keys on this property.
     */
    getKeyRange(): DzTimeRange;

    /**
     * @param i number - The index of the key time within the current key range.
     * @returns DzTime The time of the i'th key within the current key range.
     */
    getKeyTime(i: number): DzTime;

    /**
     * @returns string The user-defined label for this property.
     */
    getLabel(): string; // String

    /**
     * @returns number The number of aliases to this property that exist.
     */
    getNumAliases(): number; // Number

    /**
     * @returns number The number of controllers for this property
     */
    getNumControllers(): number; // Number

    /**
     * @returns number The total number of keys on this property.
     */
    getNumKeys(): number; // Number

    /**
     * @param range DzTimeRange - The range to get the number of keys in.
     * @returns number The number of keys that exist within the given range, including endpoints.
     */
    getNumKeys(range: DzTimeRange): number; // Number

    /**
     * @returns number The number of currently selected keys on this property.
     */
    getNumSelectedKeys(): number; // Number

    /**
     * @returns number The number of controllers that are slaved to this property.
     */
    getNumSlaveControllers(): number; // Number

    /**
     * @returns DzElement The current owner of this property.
     */
    getOwner(): DzElement;

    /**
     * @returns string The slash ('/') delimited hierarchical path of the group this property is assigned to.
     */
    getPath(): string; // String

    /**
     * @returns DzPresentation The presentation for this property (if any), otherwise null.
     */
    getPresentation(): DzPresentation;

    /**
     * @returns any The geometry region for this property (if any), otherwise null. Undocumented DAZ type: geometryregion_dz.
     */
    getRegion(): any; // geometryregion_dz; undocumented type

    /**
     * @returns DzTimeRange A range that encompasses all currently selected keys on this property.
     */
    getSelectedKeyRange(): DzTimeRange;

    /**
     * @param idx number
     * @returns DzController The i'th controller that is slaved to this property.
     */
    getSlaveController(idx: number): DzController;

    /**
     * @returns any[] A list of the controllers that are slaved to this property.
     */
    getSlaveControllerList(): any[]; // Array

    /**
     * @param styled boolean - If true, the returned classname should be the styled version (i.e., DS 4 vs DS 3). If false, the returned classname should be the base version.
     * @returns string The classname of the widget to use for displaying this property to the user.
     */
    getWidgetClass(styled?: boolean): string; // String

    /**
     * @param styled boolean - If true, the return value will be the name of the styled widget class.
     * @returns string The name of the styled widget class, otherwise the name of the standard widget class; this will be an empty string if the corresponding value has not been set.
     * @since 4.6.4.88
     */
    getWidgetClassOverride(styled?: boolean): string; // String

    /**
     * @returns boolean true if this property has controllers, otherwise false.
     */
    hasControllers(): boolean; // Boolean

    /**
     * @returns boolean true if this property has key data, otherwise false.
     */
    hasKeys(): boolean; // Boolean

    /**
     * @returns boolean true if this property has controllers that are slaved to it, otherwise false.
     */
    hasSlaveControllers(): boolean; // Boolean

    /**
     * @param styled boolean - If true, the return value will be based on whether or not an override for the styled widget class has been specified.
     * @returns boolean true if an override for the widget class has been specified, otherwise false.
     * @since 4.6.4.88
     */
    hasWidgetClassOverride(styled?: boolean): boolean; // Boolean

    /**
     * @returns boolean true if this property is an alias to another property, otherwise false (default).
     */
    isAlias(): boolean; // Boolean

    /**
     * @param prop DzProperty - The property in question.
     * @returns boolean true if this property and prop can be combined in the UI, otherwise false.
     */
    isCombinable(prop: DzProperty): boolean; // Boolean

    /**
     * @returns boolean true if this property should [temporarily] auto-follow, otherwise false.
     * @since 4.8.0.23
     */
    isDynamicallyAutoFollow(): boolean; // Boolean

    /**
     * @returns boolean true if this property should [temporarily] not be shown in the interface, otherwise false.
     */
    isDynamicallyHidden(): boolean; // Boolean

    /**
     * @returns boolean true if the property is being edited, otherwise false.
     */
    isEditing(): boolean; // Boolean

    /**
     * @returns boolean true if the property is a favorite, otherwise false.
     */
    isFavorite(): boolean; // Boolean

    /**
     * @returns boolean true if the property is a global favorite, otherwise false.
     */
    isGlobalFavorite(): boolean; // Boolean

    /**
     * @returns boolean true if this property should not be shown in the interface, otherwise false.
     */
    isHidden(): boolean; // Boolean

    /**
     * @param i number - The index of the key in question.
     * @returns boolean true if the key at the given index is selected, otherwise false.
     */
    isKeySelected(i: number): boolean; // Boolean

    /**
     * @returns boolean true if this property is locked, otherwise false.
     */
    isLocked(): boolean; // Boolean

    /**
     * @returns boolean true if the property will cause manipulation updates of the object in the viewport (default), otherwise false.
     */
    isManipulator(): boolean; // Boolean

    /**
     * @returns boolean true if the property is new, otherwise false.
     */
    isNew(): boolean; // Boolean

    /**
     * @returns boolean true if this property can be retrieved/set as a scalar numeric value, otherwise false.
     */
    isNumeric(): boolean; // Boolean

    /**
     * @returns boolean true if the property is currently overriding its controllers, otherwise false.
     */
    isOverridingControllers(): boolean; // Boolean

    /**
     * @returns boolean true if this property is private, otherwise false.
     */
    isPrivateProperty(): boolean; // Boolean

    /**
     * @returns boolean true if this property is for rigging, otherwise false.
     */
    isRigProperty(): boolean; // Boolean

    /**
     * @returns boolean true if the property is selected, otherwise false.
     */
    isSelected(): boolean; // Boolean

    /**
     * @returns boolean true if this property can be deleted by the user, otherwise false.
     */
    isUserProperty(): boolean; // Boolean

    /**
     * Locks/Unlocks this property. When locked, a property will not accept new key values or changes to current key values.
     * @param onOff boolean - If true, the property will be locked. If false, the property will be unlocked.
     */
    lock(onOff: boolean): void;

    /**
     * Marks the asset as being modified.
     * @param newUri DzUri - The URI for the asset.
     * @returns boolean true if the asset was successfully marked as being modified, otherwise false.
     */
    modifyAsset(newUri: DzUri): boolean; // Boolean

    /**
     * Marks the asset as being modified.
     * @returns boolean true if the asset was successfully marked as being modified, otherwise false.
     */
    modifyAsset(): boolean; // Boolean

    /**
     * Moves the controller ctrl to location newIdx
     * @param controller DzController - The controller to remove.
     * @param newIdx number - The index to move the controller to. If < 0 the controller will be moved to the beginning of the list. If >= DzProperty::getNumControllers(), the controller will be moved to the end of the list.
     * @returns boolean true if the move was successful, otherwise false.
     */
    moveControllerToIndex(controller: DzController, newIdx: number): boolean; // Boolean

    /**
     * Moves the controller at curIdx to newIdx
     * @param curIdx number - The index of the controller to move. If < 0 or >= DzProperty::getNumControllers() this method will return false.
     * @param newIdx number - The index to move the controller to. If < 0 the controller will be moved to the beginning of the list. If >= DzProperty::getNumControllers(), the controller will be moved to the end of the list.
     * @returns boolean true if the move was successful, otherwise false.
     */
    moveControllerToIndex(curIdx: number, newIdx: number): boolean; // Boolean

    /**
     * Creates a copy of this property. The property will not have controllers, an owner, be in a region, or be linked.
     * @returns DzProperty A duplicate of this property (if successful), otherwise null.
     */
    propertyDuplicate(): DzProperty;

    /**
     * @returns boolean true if the raw value of the property is the same as the value in the file definition, otherwise false.
     * @since 4.9.2.1
     */
    rawValueIsDefinitionValue(): boolean; // Boolean

    /**
     * Removes all controllers from this property.
     */
    removeAllControllers(): void;

    /**
     * Removes the controller that references the given property.
     * @param prop DzProperty - The property to remove the controller for.
     */
    removeController(prop: DzProperty): void;

    /**
     * Removes the controller at the given index from this property.
     * @param idx number - The index of the controller to remove.
     */
    removeController(idx: number): void;

    /**
     * Removes the given controller from this property.
     * @param controller DzController - The controller to remove.
     */
    removeController(controller: DzController): void;

    /**
     * Restores this property.
     * @param resetFlags number - A bitwise OR of the DzProperty::PropertyResetFlags to set.
     * @since 4.20.0.5
     */
    reset(resetFlags?: number): void;

    /**
     * Restores the attributes of this property to match its definition.
     * @since 4.20.1.35
     */
    restoreAttributesFromDefinition(): void;

    /**
     * Select or deselect all keys.
     * @param onOff boolean - If true, the keys will be selected. If false, the keys will be deselected.
     * @returns number The number of keys whose state was changed.
     */
    selectAllKeys(onOff?: boolean): number; // Number

    /**
     * Selects/deselects the i'th key.
     * @param i number - The index of the key to select/deselect.
     * @param onOff boolean - If true, the key will be selected. If false, the key will be deselected.
     */
    selectKey(i: number, onOff?: boolean): void;

    /**
     * Sets the selection state of any keys in the given range.
     * @param range DzTimeRange - The range of keys to select/deselect.
     * @param onOff boolean - If true, the keys will be selected. If false, the keys will be deselected.
     * @returns number The number of keys whose selection state changed.
     */
    selectKeys(range: DzTimeRange, onOff: boolean): number; // Number

    /**
     * Sets attributes for this property. “UserProperty” and “RigProperty” attributes are not copied from the settings unless a bool setting of “ForceSetUser” and/or “ForceSetRig” is set on the property settings object respectively.
     * @param settings DzPropertySettings - The settings to use to set attributes.
     */
    setAttributes(settings: DzPropertySettings): void;

    /**
     * Sets a path to locate the property on the follow target to follow.
     * @param path DzUri - The URI for the property to automatically follow. The node path is assumed to be relative to the target skeleton.
     * @since 4.9.2.19
     */
    setAutoFollowTargetUri(path: DzUri): void;

    /**
     * Sets whether this property is animatable.
     * @param yesNo boolean - If true, the property is set to be animatable.
     */
    setCanAnimate(yesNo: boolean): void;

    /**
     * Sets whether or not the property can automatically follow properties on a following figure.
     * @param onOff boolean - If true, the property will be considered during auto-follow.
     */
    setCanAutoFollow(onOff: boolean): void;

    /**
     * Sets whether or not this property should [temporarily] auto-follow.
     * @param yesNo boolean - If true, the property dynamically auto-follows.
     * @since 4.8.0.23
     */
    setDynamicallyAutoFollow(yesNo: boolean): void;

    /**
     * Sets whether or not this property should be [temporarily] hidden in the interface.
     * @param yesNo boolean - If true, the property is dynamically hidden.
     * @since 4.8.0.23
     */
    setDynamicallyHidden(yesNo: boolean): void;

    /**
     * Sets whether or not this property is hidden in the interface.
     * @param yesNo boolean - If true, the property is hidden.
     */
    setHidden(yesNo: boolean): void;

    /**
     * Sets whether or not the property is a favorite.
     * @param onOff boolean - If true, the property will be set as a favorite.
     */
    setIsFavorite(onOff: boolean): void;

    /**
     * Sets whether or not the property is a global favorite.
     * @param onOff boolean - If true, the property will be set as a global favorite.
     */
    setIsGlobalFavorite(onOff: boolean): void;

    /**
     * Sets whether or not the property is one that will cause manipulation updates of the object in the viewport.
     * @param onOff boolean - If true, the property will be set as a manipulator.
     */
    setIsManipulator(onOff: boolean): void;

    /**
     * Sets whether this property is a rigging property.
     * @param yesNo boolean - If true, the property is set to be a rigging-property.
     */
    setIsRigProperty(yesNo: boolean): void;

    /**
     * Sets whether this property is a user property (i.e., can be deleted by the user).
     * @param yesNo boolean - If true, the property is set to be a user-property.
     */
    setIsUserProperty(yesNo: boolean): void;

    /**
     * Sets the interpolation method for the i'th key.
     * @param i number - The index of the key to change.
     * @param interp number - The type of interpolation to perform between this keyframe and the next.
     * @param param0 number - The 1st parameter for key interpolation; i.e., the T value for TCB interpolation, or the starting slope value for Hermite interpolation.
     * @param param1 number - The 2nd parameter for key interpolation; i.e., the C value for TCB interpolation, or the ending slope value for Hermite interpolation.
     * @param param2 number - The 3rd parameter for key interpolation; i.e., the B value for TCB interpolation, 0.0 for Hermite interpolation.
     * @since 4.11.0.210
     */
    setKeyInterpolationType(i: number, interp: number, param0: number, param1: number, param2: number): void;

    /**
     * Sets the interpolation method for the i'th key.
     * @param i number - The index of the key to change.
     * @param interp number - The type of interpolation to perform between this keyframe and the next.
     * @since 4.11.0.210
     */
    setKeyInterpolationType(i: number, interp: number): void;

    /**
     * Sets the label that the user sees in the interface for this property.
     * @param label string - The label to set; this should be unique among all the other properties of this property's owner.
     */
    setLabel(label: string): void;

    /**
     * Sets whether or not the property is marked new.
     * @param onOff boolean - If true, this property will be marked new.
     */
    setNew(onOff: boolean): void;

    /**
     * Sets whether or not this property will override its controllers.
     * @param onOff boolean - If true, this property will override its controllers.
     */
    setOverrideControllers(onOff: boolean): void;

    /**
     * Sets the group that this property belongs to.
     * @param path string - The slash ('/') delimited hierarchical path of the group to assign this property to.
     */
    setPath(path: string): void;

    /**
     * @param pres DzPresentation - The presentation to set on this property.
     */
    setPresentation(pres: DzPresentation): void;

    /**
     * @param reg any - The geometry region to set. Undocumented DAZ type: geometryregion_dz.
     */
    setRegion(reg: any): void;

    /**
     * Sets whether or not the property is selected.
     * @param onOff boolean - If true, the property will be set as selected.
     */
    setSelected(onOff: boolean): void;

    /**
     * Sets the value using settings.
     * @param settings DzSettings - The settings with the data to set.
     * @param flags number - A bitwise OR of the flags for controlling the operation.
     * @since 4.7.1.72
     */
    setValueFromSettings(settings: DzSettings, flags?: number): void;

    /**
     * Sets the value using settings.
     * @param tm DzTime - The scene time to set the value at.
     * @param settings DzSettings - The settings with the data to set.
     * @param flags number - A bitwise OR of the flags for controlling the operation.
     * @since 4.7.1.72
     */
    setValueFromSettings(tm: DzTime, settings: DzSettings, flags?: number): void;

    /**
     * Sets the name of the widget class to override the default widget class for this property.
     * @param styledWgtClassName string - The name of the styled widget class.
     * @param wgtClassName string - The name of the standard widget class.
     * @returns DzError DZ_NO_ERROR if no error occurs, otherwise an appropriate error code.
     * @since 4.6.4.88
     */
    setWidgetClassOverride(styledWgtClassName: string, wgtClassName: string): DzError;

    /* Signals */

    /**
     * Emitted when the alias list for this property has changed.
     */
    aliasListChanged: ISignal<void>;

    /**
     * Emitted when this property has been modified.
     */
    assetModified: ISignal<void>;

    /**
     * Emitted after this property has been saved.
     */
    assetWasSaved: ISignal<void>;

    /**
     * Emitted when the URI for the auto-follow target of this property has changed.
     * @param path DzUri - The new URI for the auto-follow target.
     */
    autoFollowTargetUriChanged: ISignal<DzUri>;

    /**
     * Emitted when animation for this property is enabled or disabled.
     * @param enabled boolean - If true, animation was enabled for the property, otherwise animation was disabled.
     */
    canAnimateChanged: ISignal<boolean>;

    /**
     * Emitted when the state for whether this property can auto-follow changed.
     * @param canAutoFollow boolean - true if the property can auto-follow, otherwise false.
     */
    canAutoFollowChanged: ISignal<boolean>;

    /**
     * Emitted when the controller list for this property has changed.
     */
    controllerListChanged: ISignal<void>;

    /**
     * Emitted when the value of this property at the current time has changed. If the current time changes and this property has animation data, this signal is emitted as appropriate. Subclasses of DzProperty should call emitCurrentValueChanged() when the value has changed.
     */
    currentValueChanged: ISignal<void>;

    /**
     * Emitted when the dynamically auto-follow hidden state of this property is changed.
     * @param onOff boolean
     */
    dynamicallyAutoFollowChanged: ISignal<boolean>;

    /**
     * Emitted when the dynamically hidden state of this property is changed.
     * @param hidden boolean - true if the property is currently dynamically hidden in the interface, otherwise false.
     */
    dynamicallyHiddenChanged: ISignal<boolean>;

    /**
     * Emitted when editing of this property has finished.
     */
    editFinished: ISignal<void>;

    /**
     * Emitted when the group this property is in changed.
     * @param group DzPropertyGroup - The group this property was added to.
     */
    groupChanged: ISignal<DzPropertyGroup>;

    /**
     * Emitted when the hidden state of this property is changed.
     * @param hidden boolean - true if the property is currently hidden in the interface, otherwise false.
     */
    hiddenChanged: ISignal<boolean>;

    /**
     * Emitted when this property is set or unset as a favorite.
     * @param onOff boolean - If true, the property is now a favorite, otherwise the property is no longer a favorite.
     */
    isFavoriteChanged: ISignal<boolean>;

    /**
     * Emitted when this property is set or unset as a global favorite.
     * @param onOff boolean - If true, the property is now a global favorite, otherwise the property is no longer a global favorite.
     */
    isGlobalFavoriteChanged: ISignal<boolean>;

    /**
     * Emitted when this property is set or unset as a manipulator.
     * @param isManip boolean - If true, the property is now a manipulator, otherwise the property is no longer a manipulator.
     */
    isManipulatorChanged: ISignal<boolean>;

    /**
     * Emitted when this property is set or unset as a user property.
     * @param isUserProp boolean - If true, the property is now a user property, otherwise the property is no longer a user property.
     */
    isUserPropertyChanged: ISignal<boolean>;

    /**
     * Emitted when the selection state of this property's keys has changed.
     * @param range DzTimeRange - The range in which selection changed.
     */
    keySelectionChanged: ISignal<DzTimeRange>;

    /**
     * Emitted when the label of this property is changed.
     * @param newLabel string - The new label of this property.
     */
    labelChanged: ISignal<string>;

    /**
     * Emitted when the lock state of this property has changed.
     */
    lockStateChanged: ISignal<void>;

    /**
     * Emitted when the new state of this property has changed.
     */
    newStateChanged: ISignal<void>;

    /**
     * Emitted when the state for whether this property overrides its controllers changed.
     * @param overriding boolean
     */
    overridingControllersChanged: ISignal<boolean>;

    /**
     * Emitted when the presentation icon for this property has changed.
     */
    presentationIconChanged: ISignal<void>;

    /**
     * Emitted when this property is destroyed.
     * @param prop DzProperty
     */
    propertyDeleted: ISignal<DzProperty>;

    /**
     * Emitted when the region for this property has changed.
     */
    regionChanged: ISignal<void>;

    /**
     * Emitted when this property is removed.
     */
    removed: ISignal<void>;

    /**
     * Emitted when this property is selected or deselected.
     */
    selectionStateChanged: ISignal<void>;

    /**
     * Emitted when the slave controller list for this property has changed.
     */
    slaveControllerListChanged: ISignal<void>;

    /**
     * Emitted when the value of this property is changed.
     * @param range DzTimeRange - The range over which the property has changed.
     */
    valueChanged: ISignal<DzTimeRange>;

    /* Undocumented Augment Members */

    /** @undocumented */
    isPrivate: boolean;

    /** @undocumented */
    addAlias(prop: DzProperty, alias: DzProperty): void;

    /** @undocumented */
    addAlias(alias: DzProperty): void;

    /** @undocumented */
    addAlias(prop: DzProperty, alias: DzProperty): void;

    /** @undocumented */
    addAlias(alias: DzProperty): void;

    /** @undocumented */
    addSlaveController(control: DzController): void;

    /** @undocumented */
    clearGroup(): void;

    /** @undocumented */
    controllerListIterator(): DzControllerListIterator;

    /** @undocumented */
    copyBaseData(prop: DzProperty): void;

    /** @undocumented */
    definitionLoadFromDAZ(): boolean;

    /** @undocumented */
    emitCanAnimateChanged(enabled: boolean): void;

    /** @undocumented */
    emitCanAutoFollowChanged(canAutoFollow: boolean): void;

    /** @undocumented */
    emitCurrentValueChanged(): void;

    /** @undocumented */
    emitEditFinished(): void;

    /** @undocumented */
    emitIsManipulatorChanged(isManip: boolean): void;

    /** @undocumented */
    emitIsUserPropertyChanged(isUserProp: boolean): void;

    /** @undocumented */
    emitKeySelectionChanged(range: DzTimeRange): void;

    /** @undocumented */
    emitLockStateChanged(): void;

    /** @undocumented */
    emitOverridingControllersChanged(overriding: boolean): void;

    /** @undocumented */
    emitValueChanged(range: DzTimeRange): void;

    /** @undocumented */
    ensurePropertyType(prop: DzProperty, srcProp: DzProperty): DzProperty;

    /** @undocumented */
    getAssetType(): any;

    /** @undocumented */
    getFlags(): number;

    /** @undocumented */
    getGroupOnlyPath(): string;

    /** @undocumented */
    getKeyIndexRange(iv: DzTimeRange, start: number): number;

    /** @undocumented */
    getPropertyDefinition(): DzPropertyDefinition;

    /** @undocumented */
    insertController(controller: DzController, idx: number): void;

    /** @undocumented */
    isKey(t: DzTime, index: number): boolean;

    /** @undocumented */
    regroup(tree: DzPropertyGroupTree): void;

    /** @undocumented */
    removeAlias(prop: DzProperty, alias: DzProperty): void;

    /** @undocumented */
    removeSlaveController(control: DzController): void;

    /** @undocumented */
    setCurrentAttributesAsDefinition(): void;

    /** @undocumented */
    setFlags(int: number): void;

    /** @undocumented */
    setGroup(group: DzPropertyGroup): void;

    /** @undocumented */
    setIsPrivateProperty(yesNo: boolean): void;

    /** @undocumented */
    setOwner(owner: DzElement): void;

    /** @undocumented */
    slaveControllerListIterator(): DzControllerListIterator;

    /** @undocumented */
    toQObject(): QObject;

    /** @undocumented */
    toQObject(): any;

    /** @undocumented */
    toQObject(): QObject;

    /** @undocumented */
    toQObject(): any;

    /** @undocumented */
    updateControllerState(): void;

    /** @undocumented */
    updateTime(): void;

    /** @undocumented */
    valueIsReplaced(): boolean;

    /** @undocumented */
    paste(prop: DzProperty): DzError;

    /** @undocumented */
    addChild(child: DzPropertyGroup): void;

    /** @undocumented */
    addProperty(prop: DzProperty): void;

    /** @undocumented */
    addSibling(sibling: DzPropertyGroup): void;

    /** @undocumented */
    addedChild(newChild: DzPropertyGroup): void;

    /** @undocumented */
    childListChanged(): void;

    /** @undocumented */
    collectAllPaths(paths: String[]): void;

    /** @undocumented */
    findChild(name: string): DzPropertyGroup;

    /** @undocumented */
    findSibling(name: string): DzPropertyGroup;

    /** @undocumented */
    getAllPaths(): String[];

    /** @undocumented */
    getCollapsed(): boolean;

    /** @undocumented */
    getFirstChild(): DzPropertyGroup;

    /** @undocumented */
    getNextSibling(): DzPropertyGroup;

    /** @undocumented */
    getNumProperties(): number;

    /** @undocumented */
    getParent(): DzPropertyGroup;

    /** @undocumented */
    getProperties(): DzPropertyListIterator;

    /** @undocumented */
    getTree(): DzPropertyGroupTree;

    /** @undocumented */
    hasProperty(label: string, exclude: DzProperty): boolean;

    /** @undocumented */
    indexOfProperty(prop: DzProperty): number;

    /** @undocumented */
    isRegion(): boolean;

    /** @undocumented */
    moveChildToIndex(childName: string, newIndex: number): boolean;

    /** @undocumented */
    movePropertyToIndex(prop: DzProperty, newIndex: number): boolean;

    /** @undocumented */
    movePropertyToIndex(propName: string, newIndex: number): boolean;

    /** @undocumented */
    movePropertyToIndex(curIndex: number, newIndex: number): boolean;

    /** @undocumented */
    movePropertyToIndex(prop: DzProperty, newIndex: number): boolean;

    /** @undocumented */
    movePropertyToIndex(propName: string, newIndex: number): boolean;

    /** @undocumented */
    movePropertyToIndex(curIndex: number, newIndex: number): boolean;

    /** @undocumented */
    movePropertyToIndex(prop: DzProperty, newIndex: number): boolean;

    /** @undocumented */
    movePropertyToIndex(propName: string, newIndex: number): boolean;

    /** @undocumented */
    movePropertyToIndex(curIndex: number, newIndex: number): boolean;

    /** @undocumented */
    parentChanged(newParent: DzPropertyGroup): void;

    /** @undocumented */
    removeChild(child: DzPropertyGroup): void;

    /** @undocumented */
    removeProperty(prop: DzProperty): void;

    /** @undocumented */
    removedChild(child: DzPropertyGroup): void;

    /** @undocumented */
    setCollapsed(onOff: boolean): void;

    /** @undocumented */
    setParent(parent: DzPropertyGroup): void;

    /** @undocumented */
    setTree(tree: DzPropertyGroupTree): void;

    /** @undocumented */
    setUniquePropertyLabel(prop: DzProperty): void;

    /** @undocumented */
    sort(): void;

    /** @undocumented */
    sortGroups(sortSibs: boolean): DzPropertyGroup;

    /** @undocumented */
    treeChanged(): void;

    /** @undocumented */
    decode(src: QMimeSource, propGroupList: DzPropertyGroup[]): boolean;

    /** @undocumented */
    decode(src: QMimeData, propGroupList: DzPropertyGroup[]): void;

    /** @undocumented */
    decode(src: QMimeSource, propGroupList: DzPropertyGroup[]): boolean;

    /** @undocumented */
    decode(src: QMimeData, propGroupList: DzPropertyGroup[]): void;

    /** @undocumented */
    encode(propGroupList: DzPropertyGroup[]): number[];

    /** @undocumented */
    addChild(child: DzPropertyGroup): void;

    /** @undocumented */
    childListChanged(): void;

    /** @undocumented */
    collectAllPaths(paths: String[]): void;

    /** @undocumented */
    findChild(name: string): DzPropertyGroup;

    /** @undocumented */
    getAllPaths(): String[];

    /** @undocumented */
    getDefaultGroup(): DzPropertyGroup;

    /** @undocumented */
    getFirstChild(): DzPropertyGroup;

    /** @undocumented */
    getPropertyGroup(path: string): DzPropertyGroup;

    /** @undocumented */
    moveChildToIndex(childName: string, newIndex: number): boolean;

    /** @undocumented */
    removeChild(child: DzPropertyGroup): void;

    /** @undocumented */
    setIsPrivate(onoff: boolean): void;

    /** @undocumented */
    setOwner(owner: DzElement): void;

    /** @undocumented */
    sortGroups(): void;

    /** @undocumented */
    treeChanged(): void;

    /** @undocumented */
    findPropertyOnNode(propName: string, node: DzNode): DzProperty;

    /** @undocumented */
    findPropertyOnNodeByInternalName(internalName: string, node: DzNode): DzProperty;

    /** @undocumented */
    findPropertyOnNodeByLabel(label: string, node: DzNode): DzProperty;

    /** @undocumented */
    getErcController(controlledProp: DzProperty, controllingProp: DzProperty): DzERCLink;

    /** @undocumented */
    getInternalName(prop: DzProperty): string;

    /** @undocumented */
    getNode(prop: DzProperty): DzNode;

    /** @undocumented */
    getNodeName(prop: DzProperty): string;

    /** @undocumented */
    getNodeType(prop: DzProperty): string;

    /** @undocumented */
    getPrivatePropertiesOnNode(prop: DzProperty, propList: DzProperty[]): void;

    /** @undocumented */
    getPrivatePropertiesOnNode(node: DzNode, propList: DzProperty[]): void;

    /** @undocumented */
    getPrivatePropertiesOnNode(prop: DzProperty, propList: DzProperty[]): void;

    /** @undocumented */
    getPrivatePropertiesOnNode(node: DzNode, propList: DzProperty[]): void;

    /** @undocumented */
    getPropertiesOnElement(elem: DzElement, propList: DzProperty[]): void;

    /** @undocumented */
    getPropertiesOnNode(prop: DzProperty, propList: DzProperty[], includeModifiers: boolean): void;

    /** @undocumented */
    getPropertiesOnNode(node: DzNode, propList: DzProperty[], includeModifiers: boolean): void;

    /** @undocumented */
    getPropertiesOnNode(prop: DzProperty, propList: DzProperty[], includeModifiers: boolean): void;

    /** @undocumented */
    getPropertiesOnNode(node: DzNode, propList: DzProperty[], includeModifiers: boolean): void;

    /** @undocumented */
    getRegionPropertiesOnNode(curNode: DzNode, propList: DzProperty[]): void;

    /** @undocumented */
    getRegionPropertiesRecurse(region: DzGeometryRegion, propList: DzProperty[]): void;

    /** @undocumented */
    isAtDefaultValue(prop: DzProperty): boolean;

    /** @undocumented */
    isDFormModProperty(prop: DzProperty): DzProperty;

    /** @undocumented */
    isLegacyJointProperty(prop: DzProperty): DzProperty;

    /** @undocumented */
    isLegacyProperty(prop: DzProperty): boolean;

    /** @undocumented */
    isModifierProperty(prop: DzProperty): DzProperty;

    /** @undocumented */
    isMorphProperty(prop: DzProperty): DzProperty;

    /** @undocumented */
    isNodeProperty(prop: DzProperty): DzProperty;

    /** @undocumented */
    isTransformProperty(prop: DzProperty): DzProperty;

    /** @undocumented */
    setInternalName(prop: DzProperty, name: string): boolean;

    /** @undocumented */
    setPropertyPath(prop: DzProperty, inPath: string): void;

    /** @undocumented */
    decode(src: QMimeSource, propList: DzProperty[]): boolean;

    /** @undocumented */
    decode(src: QMimeData, propList: DzProperty[]): void;

    /** @undocumented */
    decode(src: QMimeSource, propList: DzProperty[]): boolean;

    /** @undocumented */
    decode(src: QMimeData, propList: DzProperty[]): void;

    /** @undocumented */
    encode(propList: DzProperty[]): number[];

    /** @undocumented */
    addProperty(prop: DzProperty): void;

    /** @undocumented */
    propertyValueChanged(): void;

    /** @undocumented */
    createEditor(parent: QWidget, option: QStyleOptionViewItem, index: QModelIndex): QWidget;

    /** @undocumented */
    getPropertyWgt(node: DzPropertyListNodePtr): DzPropertyWgt;

    /** @undocumented */
    isCardMode(): boolean;

    /** @undocumented */
    paint(painter: QPainter, option: QStyleOptionViewItem, index: QModelIndex): void;

    /** @undocumented */
    setCardMode(onOff: boolean): void;

    /** @undocumented */
    setEditorData(editor: QWidget, index: QModelIndex): void;

    /** @undocumented */
    sizeHint(option: QStyleOptionViewItem, index: QModelIndex): Size;

    /** @undocumented */
    updateControlOnlySettings(): void;

    /** @undocumented */
    updateEditorGeometry(editor: QWidget, option: QStyleOptionViewItem, index: QModelIndex): void;

    /** @undocumented */
    addProperty(prop: DzProperty): void;

    /** @undocumented */
    clearProperties(): void;

    /** @undocumented */
    columnCount(parent: QModelIndex): number;

    /** @undocumented */
    data(index: QModelIndex, role: number): QVariant;

    /** @undocumented */
    event(eve: QEvent): boolean;

    /** @undocumented */
    flags(index: QModelIndex): number;

    /** @undocumented */
    getIndexForNode(propNode: DzPropertyListNode): QModelIndex;

    /** @undocumented */
    getPropertyNodeForIndex(index: QModelIndex): DzPropertyListNodePtr;

    /** @undocumented */
    index(row: number, column: number, parent: QModelIndex): QModelIndex;

    /** @undocumented */
    parent(index: QModelIndex): QModelIndex;

    /** @undocumented */
    processLabelUpdates(): void;

    /** @undocumented */
    processPropUpdates(): void;

    /** @undocumented */
    propertyChanged(): void;

    /** @undocumented */
    propertyHiddenStateChange(): void;

    /** @undocumented */
    propertyLabelChanged(lbl: string): void;

    /** @undocumented */
    removeProp(prop: DzProperty): void;

    /** @undocumented */
    rowCount(parent: QModelIndex): number;

    /** @undocumented */
    addProperty(prop: DzProperty): void;

    /** @undocumented */
    getNumProperties(): number;

    /** @undocumented */
    getProperties(): DzProperty[];

    /** @undocumented */
    removeProperty(prop: DzProperty): boolean;

    /** @undocumented */
    updateNew(): void;

    /** @undocumented */
    addProperty(prop: DzProperty): boolean;

    /** @undocumented */
    addPropertyGroup(group: DzPropertyGroup, showHidden: boolean): boolean;

    /** @undocumented */
    addPropertyGroupRecurse(root: DzPropertyGroup, showHidden: boolean): boolean;

    /** @undocumented */
    addPropertyToGroup(prop: DzProperty, widGroup: DzWidgetGroup): boolean;

    /** @undocumented */
    addPropertyTree(tree: DzPropertyGroupTree, showHidden: boolean): boolean;

    /** @undocumented */
    centralWidget(): QWidget;

    /** @undocumented */
    clear(): void;

    /** @undocumented */
    moveWidgetListGroupToEnd(widgetListGroup: DzWidgetGroup): boolean;

    /** @undocumented */
    resetLayout(): void;

    /** @undocumented */
    resizeEvent(e: QResizeEvent): void;

    /** @undocumented */
    setNewGroupsCollapsed(open: boolean): void;

    /** @undocumented */
    deleteProperty(temp: DzProperty): void;

    /** @undocumented */
    getArg(i: number): string;

    /** @undocumented */
    getArgType(i: number): any;

    /** @undocumented */
    getDirection(): number;

    /** @undocumented */
    getNumArgs(): number;

    /** @undocumented */
    getNumProperties(): number;

    /** @undocumented */
    getNumTokensNeeded(): number;

    /** @undocumented */
    getProperty(i: number): DzProperty;

    /** @undocumented */
    getPropertyMapToken(i: number): number;

    /** @undocumented */
    getStringValue(i: number): string;

    /** @undocumented */
    getType(): any;

    /** @undocumented */
    getTypeForToken(i: number): any;

    /** @undocumented */
    propertyDestoyed(): void;

    /** @undocumented */
    setDirection(i: number): void;

    /** @undocumented */
    setProperty(prop: DzProperty, arg: string, mapArg: string): void;

    /** @undocumented */
    setShouldWriteTokenInShader(onoff: boolean): void;

    /** @undocumented */
    setTokenInBuffer(): void;

    /** @undocumented */
    shouldWriteTokenInShader(i: number): boolean;

    /** @undocumented */
    clicked(): void;

    /** @undocumented */
    isDefault(): boolean;

    /** @undocumented */
    mousePressEvent(event: QMouseEvent): void;

    /** @undocumented */
    paintEvent(e: QPaintEvent): void;

    /** @undocumented */
    setIsDefault(onOff: boolean): void;

    /** @undocumented */
    aboutToShowOptionsDialog(): void;

    /** @undocumented */
    addProperty(prop: DzProperty): DzError;

    /** @undocumented */
    clearPropertyList(): void;

    /** @undocumented */
    doOptionsDialog(): boolean;

    /** @undocumented */
    fastUpdate(): void;

    /** @undocumented */
    getFirstProperty(): DzProperty;

    /** @undocumented */
    getNumProperties(): number;

    /** @undocumented */
    getNumTotalProperties(): number;

    /** @undocumented */
    getProperties(): DzPropertyListIterator;

    /** @undocumented */
    getPropertyHiddenState(): number;

    /** @undocumented */
    getViewItemStyleOptions(): number;

    /** @undocumented */
    isFastMode(): boolean;

    /** @undocumented */
    isShowingControlOnly(): boolean;

    /** @undocumented */
    mouseDoubleClickEvent(e: QMouseEvent): void;

    /** @undocumented */
    mousePressEvent(e: QMouseEvent): void;

    /** @undocumented */
    propertySelectionChanged(): void;

    /** @undocumented */
    removeAllProperties(): void;

    /** @undocumented */
    removeDeletedProperty(prop: DzProperty): void;

    /** @undocumented */
    resetProperties(allowUndo: boolean): void;

    /** @undocumented */
    setFastMode(mode: boolean): void;

    /** @undocumented */
    setLevel(level: number): void;

    /** @undocumented */
    setPropertyList(list: DzProperty[]): void;

    /** @undocumented */
    setViewItemStyleOptions(flags: number): void;

    /** @undocumented */
    showControlOnly(onOff: boolean): void;

    /** @undocumented */
    updateFromList(): void;

    /** @undocumented */
    updatePropertyHiddenState(): void;
}
