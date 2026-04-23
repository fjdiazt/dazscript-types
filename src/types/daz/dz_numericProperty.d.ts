/**
 * Base class of all numeric properties.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/numericproperty_dz
 */
declare class DzNumericProperty extends DzProperty {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of XYZInterest.
     */
    static NO_INTEREST: number;

    /**
     * DAZ enum member of XYZInterest.
     */
    static X_INTEREST: number;

    /**
     * DAZ enum member of XYZInterest.
     */
    static Y_INTEREST: number;

    /**
     * DAZ enum member of XYZInterest.
     */
    static Z_INTEREST: number;

    /**
     * DAZ enum member of XYZInterest.
     */
    static ALL_INTEREST: number;

    /* Methods */

    /**
     * Clear the image map for this property.
     */
    clearMap(): void;

    /**
     * Copies the map from another property to this one.
     * @param otherProp DzNumericProperty - The property to copy the map from.
     * @since 4.9.2.61
     */
    copyMapFrom(otherProp: DzNumericProperty): void;

    /**
     * @returns boolean true if the clamp on this property changes its value, otherwise false.
     * @since 4.9.0.24
     */
    doesClampChangeValue(): boolean; // Boolean

    /**
     * Searches node for a property that matches the name of this property.
     * @param node DzNode - The node to search.
     * @param useStrictMatching boolean - If true (default), any found property will only be considered a match if it is the same type as this property. If false, any found property will be considered a match if it inherits from DzNumericProperty.
     * @returns DzProperty
     */
    findMatchingProperty(node: DzNode, useStrictMatching?: boolean): DzProperty;

    /**
     * @returns number The default map gamma.
     * @since 4.5.2.23
     */
    getDefaultMapGamma(): number; // Number

    /**
     * @returns number The default map texture type.
     * @since 4.6.4.30
     */
    getDefaultMapTextureType(): number; // Number

    /**
     * @returns number The default value of this property as a double precision value.
     */
    getDoubleDefaultValue(): number; // Number

    /**
     * @param tm DzTime - The scene time to get the value for.
     * @returns number The value of this property, as a double precision number, at the given time.
     */
    getDoubleValue(tm: DzTime): number; // Number

    /**
     * @returns number The value of the property at the current time, as a double precision number.
     */
    getDoubleValue(): number; // Number

    /**
     * @returns DzNumericProperty The property that this property is connected to via auto-follow. If this property cannot auto-follow or is not connected to a property via auto-follow, then this method returns null.
     */
    getFollowProperty(): DzNumericProperty;

    /**
     * @returns number The difference between the current value of the follow property and its default value at the current time. If no auto-follow property is set, or auto-follow is not enabled for this property, then this method returns 0.
     */
    getFollowValue(): number; // Number

    /**
     * @param tm DzTime - The scene time for which to get the value.
     * @returns number The difference between the current value of the follow property and this properties default value tm. If no auto-follow property is set, or auto-follow is not enabled for this property, then this method returns 0.
     */
    getFollowValue(tm: DzTime): number; // Number

    /**
     * @returns DzNumericProperty The property that this property is directly linked to (if any), otherwise NULL.
     */
    getLinkProperty(): DzNumericProperty;

    /**
     * @returns DzTexture The image map at the current time (if any), otherwise null.
     */
    getMapValue(): DzTexture;

    /**
     * @param time DzTime - The time at which to get the map value for this property.
     * @returns DzTexture The image map for the given time (if any), otherwise null.
     */
    getMapValue(time: DzTime): DzTexture;

    /**
     * @returns any[] A list of the values this property has.
     * @since 4.6.4.98
     */
    getNDoubleValue(): any[]; // Array

    /**
     * @param tm DzTime - The scene time at which to get the value.
     * @returns any[] A list of the values this property has.
     * @since 4.6.4.98
     */
    getNDoubleValue(tm: DzTime): any[]; // Array

    /**
     * @returns number The number of values this property has.
     * @since 4.6.4.98
     */
    getNValueCount(): number; // Number

    /**
     * @returns DzTextureModifier The texture modifier for this property (if any), otherwise NULL.
     * @since 4.6.4.80
     */
    getTextureModifier(): DzTextureModifier;

    /**
     * @returns number The texture modifier flags.
     * @since 4.6.4.82
     */
    getTextureModifierFlags(): number; // Number

    /**
     * @param tm DzTime - The scene time at which to get the value.
     * @returns DzFloatColor The value of this property as a DzFloatColor.
     * @since 4.7.1.56
     */
    getValueAsFloatColor(tm: DzTime): DzFloatColor;

    /**
     * @returns DzFloatColor The value of this property as a float color.
     * @since 4.7.1.56
     */
    getValueAsFloatColor(): DzFloatColor;

    /**
     * @returns DzInt2 The value of this property as a DzInt2.
     * @since 4.7.1.56
     */
    getValueAsInt2(): DzInt2;

    /**
     * @param tm DzTime - The scene time at which to get the value.
     * @returns DzInt2 The value of this property as a DzInt2.
     * @since 4.7.1.56
     */
    getValueAsInt2(tm: DzTime): DzInt2;

    /**
     * @returns DzVec2 The value of this property as a DzVec2.
     * @since 4.7.1.56
     */
    getValueAsVec2(): DzVec2;

    /**
     * @param tm DzTime - The scene time at which to get the value.
     * @returns DzVec2 The value of this property as a DzVec2.
     * @since 4.7.1.56
     */
    getValueAsVec2(tm: DzTime): DzVec2;

    /**
     * @returns DzVec3 The value of this property as a DzVec3.
     * @since 4.7.1.56
     */
    getValueAsVec3(): DzVec3;

    /**
     * @param tm DzTime - The scene time at which to get the value.
     * @returns DzVec3 The value of this property as a DzVec3.
     * @since 4.7.1.56
     */
    getValueAsVec3(tm: DzTime): DzVec3;

    /**
     * @returns number The XYZ interest for this property (if any).
     */
    getXYZInterest(): number; // XYZInterest

    /**
     * Adds a controller to this property.
     * @param controller DzNumericController - The controller to insert.
     * @param idx number - The index where the controller should be inserted.
     */
    insertController(controller: DzNumericController, idx?: number): void;

    /**
     * @returns boolean true if this property's value is clamped (for display purposes), otherwise false.
     */
    isClamped(): boolean; // Boolean

    /**
     * @returns boolean true if the value of this property is invalid without a map assigned, otherwise false.
     */
    isInvalidWithoutMap(): boolean; // Boolean

    /**
     * @returns boolean true if this property has a direct link to another property, otherwise false.
     */
    isLinked(): boolean; // Boolean

    /**
     * @returns boolean true if this property is mappable (i.e., can have an associated image map), otherwise false.
     */
    isMappable(): boolean; // Boolean

    /**
     * @returns boolean true if this property is currently mapped, otherwise false.
     */
    isMapped(): boolean; // Boolean

    /**
     * @returns boolean true if this property is the master in a direct link between two properties.
     */
    isMaster(): boolean; // Boolean

    /**
     * @returns boolean true if this property is modulo over min and max (i.e., the amount in which the value exceeds the min or max is applied as the value in the same direction from the opposite limit), otherwise false.
     */
    isModulo(): boolean; // Boolean

    /**
     * Establishes a direct link between this property and the given property.
     * @param master DzNumericProperty - The property to be linked with this property.
     */
    linkTo(master: DzNumericProperty): void;

    /**
     * Sets the default map gamma.
     * @param gamma number - The gamma value to set.
     * @since 4.5.2.23
     */
    setDefaultMapGamma(gamma: number): void;

    /**
     * Sets the default map texture type.
     * @param type number - The map texture type to set.
     * @since 4.6.4.30
     */
    setDefaultMapTextureType(type: number): void;

    /**
     * Sets the default value for this property.
     * @param val number - The value to set as the default for this property.
     */
    setDoubleDefaultValue(val: number): void;

    /**
     * Sets the value for this property at the current time, or the default value if this property is not animatable, as a double precision number.
     * @param val number - The value to set the property to.
     */
    setDoubleValue(val: number): void;

    /**
     * Sets the value for this property at the given time; or the default value if this property is not animatable.
     * @param tm DzTime - The scene time to set the value for.
     * @param val number - The value to set for this property.
     */
    setDoubleValue(tm: DzTime, val: number): void;

    /**
     * Sets whether or not the value is clamped to its min and max.
     * @param val boolean - If true, this property is clamped.
     */
    setIsClamped(val: boolean): void;

    /**
     * Sets whether or not this property is mappable.
     * @param val boolean - If true, this property is mappable.
     */
    setIsMappable(val: boolean): void;

    /**
     * Sets whether or not the value is modulo over min and max; i.e., the amount in which the value exceeds the min or max is applied as the value in the same direction from the opposite limit.
     * @param val boolean - If true, this value is modulo over min and max.
     */
    setIsModulo(val: boolean): void;

    /**
     * Set the image map for this property.
     * @param imgFile string - The name of the file to use as an image map.
     */
    setMap(imgFile: string): void;

    /**
     * Set the image map for this property.
     * @param img DzTexture - The image map for this property.
     */
    setMap(img: DzTexture): void;

    /**
     * Sets whether or not this property value is valid when no map is assigned.
     * @param val boolean - If true, this property must have a map assigned.
     */
    setMustHaveMap(val: boolean): void;

    /**
     * Sets the texture modifier.
     * @param txtMod DzTextureModifier - The texture modifier to set.
     * @since 4.6.4.80
     */
    setTextureModifier(txtMod: DzTextureModifier): void;

    /**
     * Sets texture modifier flags for this property.
     * @param flags number - The texture modifier flags to set.
     * @since 4.6.4.82
     */
    setTextureModifierFlags(flags: number): void;

    /**
     * Set the XYZ interest for this property.
     * @param interest number - The new XYZ interest for this property.
     */
    setXYZInterest(interest: number): void;

    /**
     * Unlinks this property.
     */
    unlink(): void;

    /* Signals */

    /**
     * Emitted when the clamped state for this property has changed.
     * @param onOff boolean - If true, then this property is clamped
     */
    clampedChanged: ISignal<boolean>;

    /**
     * Emitted when the default map gamma for this property has changed.
     */
    defaultMapGammaChanged: ISignal<void>;

    /**
     * Emitted when the default map texture type for this property has changed.
     */
    defaultMapTextureTypeChanged: ISignal<void>;

    /**
     * Emitted when the state of whether or not this property is mappable has changed.
     */
    isMappableChanged: ISignal<void>;

    /**
     * Emitted when the property is linked to another property.
     */
    linked: ISignal<void>;

    /**
     * Emitted when the image map for this property has changed.
     */
    mapChanged: ISignal<void>;

    /**
     * Emitted when the min and/or max values for this property have changed.
     */
    minMaxChanged: ISignal<void>;

    /**
     * Emitted when the texture modifier for this property has changed.
     */
    textureModifierChanged: ISignal<void>;

    /**
     * Emitted when the flags on the texture modifier for this property have changed.
     */
    textureModifierFlagsChanged: ISignal<void>;

    /**
     * Emitted when the property is unlinked from another property.
     */
    unlinked: ISignal<void>;

    /* Undocumented Augment Members */

    /** @undocumented */
    applyControllers(tm: DzTime, raw: number, local: boolean): number;

    /** @undocumented */
    applyControllersInverse(tm: DzTime, raw: number, local: boolean): number;

    /** @undocumented */
    changeFollowBone(bone: DzBone): void;

    /** @undocumented */
    changeFollowNode(node: DzNode): void;

    /** @undocumented */
    changeFollowTarget(skel: DzSkeleton): void;

    /** @undocumented */
    clearLink(): void;

    /** @undocumented */
    emitClampedChanged(onOff: boolean): void;

    /** @undocumented */
    emitLinked(): void;

    /** @undocumented */
    emitMapChanged(): void;

    /** @undocumented */
    emitMinMaxChanged(): void;

    /** @undocumented */
    emitUnlinked(): void;

    /** @undocumented */
    getMin(): number;

    /** @undocumented */
    getMax(): number;

    /** @undocumented */
    linkNotify(): void;

    /** @undocumented */
    removeFollowNode(): void;

    /** @undocumented */
    removeFollowProperty(): void;

    /** @undocumented */
    setFollowListeners(): void;

    /** @undocumented */
    setFollowProperty(prop: DzNumericProperty): void;

    /** @undocumented */
    setLink(link: DzNumericProperty, isMaster: boolean): void;

    /** @undocumented */
    addImageMapMenu(): void;

    /** @undocumented */
    addLabel(): void;

    /** @undocumented */
    addTieWgt(): void;

    /** @undocumented */
    addWidget(wgt: QWidget): void;

    /** @undocumented */
    changeMap(map: DzTexture): void;

    /** @undocumented */
    getMapDisplay(): number;

    /** @undocumented */
    setLayout(layout: number): void;

    /** @undocumented */
    setMapDisplay(mode: number): void;

    /** @undocumented */
    showEvent(e: QShowEvent): void;

    /** @undocumented */
    updateLabel(): void;

    /** @undocumented */
    updateLayout(layout: number): void;

    /** @undocumented */
    updateValue(): void;
}
