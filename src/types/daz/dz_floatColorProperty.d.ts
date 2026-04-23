/**
 * An animatable floating point color property.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/floatcolorproperty_dz
 */
declare class DzFloatColorProperty extends DzColorProperty {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of InterpolationType.
     */
    static LINEAR_INTERP: number;

    /**
     * DAZ enum member of InterpolationType.
     */
    static CONSTANT_INTERP: number;

    /**
     * DAZ enum member of InterpolationType.
     */
    static TCB_INTERP: number;

    /**
     * DAZ enum member of InterpolationType.
     */
    static HERMITE_INTERP: number;

    /* Constructors */

    constructor();

    /**
     * @param name string
     * @param canAnimate boolean
     * @param isUserProperty boolean
     * @param initVal Color
     */
    constructor(name: string, canAnimate: boolean, isUserProperty: boolean, initVal: Color);

    /**
     * @param name string
     * @param canAnimate boolean
     * @param isUserProperty boolean
     */
    constructor(name: string, canAnimate: boolean, isUserProperty: boolean);

    /* Methods */

    /**
     * Adjust the value of the property based on the contribution of property controllers.
     * @param val DzFloatColor - The 'final' value desired for the property.
     * @returns DzFloatColor A 'raw' value for the property that will result in the property having the given value with the current controllers.
     */
    adjustFloatColorValue(val: DzFloatColor): DzFloatColor;

    /**
     * Adjust the value of the property at the given time based on the contribution of property controllers.
     * @param tm DzTime - The scene time at which to adjust the value.
     * @param val DzFloatColor - The 'final' value desired for the property.
     * @returns DzFloatColor A 'raw' value for the property that will result in the property having the given value with the current controllers.
     */
    adjustFloatColorValue(tm: DzTime, val: DzFloatColor): DzFloatColor;

    /**
     * @returns DzFloatColor The default float color value of the property.
     */
    getDefaultFloatColorValue(): DzFloatColor;

    /**
     * @returns DzFloatColor The difference between the current value of the follow property and its default value at the current time. If no auto-follow property is set, or auto-follow is not enabled for this property, then this method returns 0.
     */
    getFloatColorFollowValue(): DzFloatColor;

    /**
     * @param tm DzTime - The scene time for which to get the value.
     * @returns DzFloatColor The difference between the current value of the follow property and this properties default value tm. If no auto-follow property is set, or auto-follow is not enabled for this property, then this method returns 0.
     */
    getFloatColorFollowValue(tm: DzTime): DzFloatColor;

    /**
     * @returns DzFloatColor The float color value of the property at the current time.
     */
    getFloatColorValue(): DzFloatColor;

    /**
     * @param tm DzTime - The scene time to get the color value at.
     * @returns DzFloatColor The float color value of the property at the given time.
     */
    getFloatColorValue(tm: DzTime): DzFloatColor;

    /**
     * @returns number The maximum allowable value of the property.
     */
    getFloatMax(): number; // Number

    /**
     * @returns number The minimum allowable value of the property.
     */
    getFloatMin(): number; // Number

    /**
     * @returns number The sensitivity value for this property.
     */
    getFloatSensitivity(): number; // Number

    /**
     * @param i number - The index of the key to get the raw color value of.
     * @returns DzFloatColor The float color value of the property at the given key.
     */
    getKeyFloatColorValue(i: number): DzFloatColor;

    /**
     * This function is provided for the special case of ERC link redirection; sometimes called 'cross-talk'. For example, if Figure A (a piece of clothing, for example) is 'Fit To' Figure B, the ERC links on Figure A are redirected to follow channels on Figure B; this is how morphs on an item of clothing will follow morphs on the figure, etc. This function will provide the value of the property ignoring any redirection of ERC links. So, for a figure that is not 'Fit To' another figure, this will return the same value as getFloatColorValue(). For a figure that is 'Fit To' another figure, this will return the value that the property would have if the ERC link had not been redirected.
     * @returns DzFloatColor The value of the property at the current time without any ERC link redirection.
     */
    getLocalFloatColorValue(): DzFloatColor;

    /**
     * This function is provided for the special case of ERC link redirection; sometimes called 'cross-talk'. For example, if Figure A (a piece of clothing, for example) is 'Fit To' Figure B, the ERC links on Figure A are redirected to follow channels on Figure B; this is how morphs on an item of clothing will follow morphs on the figure, etc. This function will provide the value of the property ignoring any redirection of ERC links. So, for a figure that is not 'Fit To' another figure, this will return the same value as getFloatColorValue(). For a figure that is 'Fit To' another figure, this will return the value that the property would have if the ERC link had not been redirected.
     * @param tm DzTime - The scene time to get the local value for.
     * @returns DzFloatColor The value of the property at the current time without any ERC link redirection.
     */
    getLocalFloatColorValue(tm: DzTime): DzFloatColor;

    /**
     * @param tm DzTime - The scene time at which to get the 'raw' float color value.
     * @returns DzFloatColor The 'raw' float color value of the property.
     */
    getRawFloatColorValue(tm: DzTime): DzFloatColor;

    /**
     * @returns DzFloatColor The 'raw' float color value of the property at the current time.
     */
    getRawFloatColorValue(): DzFloatColor;

    /**
     * Sets the default float color value for this property.
     * @param val DzFloatColor - The new default value for the property.
     */
    setDefaultFloatColorValue(val: DzFloatColor): void;

    /**
     * Sets the float color value of the property at the current time.
     * @param val DzFloatColor - The value to set.
     */
    setFloatColorValue(val: DzFloatColor): void;

    /**
     * Sets the float color value of the property at the specified time.
     * @param tm DzTime - The scene time to set the value for.
     * @param val DzFloatColor - The value to set.
     * @param interp number - The type of interpolation to perform between this keyframe and the next.
     * @param param0 number - The parameter 0 for key interpolation: T value for TCB interpolation, starting slope value for Hermite interpolation.
     * @param param1 number - The parameter 1 for key interpolation: C value for TCB interpolation, ending slope value for Hermite interpolation.
     * @param param2 number - The parameter 2 for key interpolation: B value for TCB interpolation.
     */
    setFloatColorValue(tm: DzTime, val: DzFloatColor, interp: number, param0: number, param1: number, param2: number): void;

    /**
     * Sets the float color value of the property at the specified time.
     * @param tm DzTime - The scene time to set the value for.
     * @param val DzFloatColor - The value to set.
     * @param interp number - The type of interpolation to perform between this keyframe and the next.
     */
    setFloatColorValue(tm: DzTime, val: DzFloatColor, interp: number): void;

    /**
     * Sets the float color value of the property at the specified time.
     * @param tm DzTime - The scene time to set the value for.
     * @param val DzFloatColor - The value to set.
     */
    setFloatColorValue(tm: DzTime, val: DzFloatColor): void;

    /**
     * Set the maxinimum allowable value, as a float.
     * @param max number - The maximum value to set.
     */
    setFloatMax(max: number): void;

    /**
     * Set the mininimum allowable value, as a float.
     * @param min number - The minimum value to set.
     */
    setFloatMin(min: number): void;

    /**
     * Set the mininimum and maximum allowable values, as floats.
     * @param min number - The minimum value to set.
     * @param max number - The maximum value to set.
     */
    setFloatMinMax(min: number, max: number): void;

    /**
     * Set the sensitivity for this property. This value describes the amount of change in the value of this property caused by adjustment in the interface, especially if limits are off.
     * @param sens number - The value to set.
     */
    setFloatSensitivity(sens: number): void;

    /**
     * Sets the float color value of this property for the given key.
     * @param i number - The index of the key to set the value of.
     * @param val DzFloatColor - The new default value for the property.
     */
    setKeyFloatColorValue(i: number, val: DzFloatColor): void;

    /**
     * Sets the 'raw' float color value of the property at the specified time; this is the actual value of the property without the contribution of property links, etc.
     * @param tm DzTime - The scene time to set the raw value for.
     * @param val DzFloatColor - The value to set.
     */
    setRawFloatColorValue(tm: DzTime, val: DzFloatColor): void;

    /**
     * Sets the 'raw' float color value of the property at the current time; this is the actual value of the property without the contribution of property links, etc.
     * @param val DzFloatColor - The value to set.
     */
    setRawFloatColorValue(val: DzFloatColor): void;

    /* Undocumented Augment Members */

    /** @undocumented */
    emitAnimationBlendModeChanged(): void;

    /** @undocumented */
    emitAutoFollowTargetUriChanged(p0: DzUri): void;

    /** @undocumented */
    emitCanAnimateChanged(p0: boolean): void;

    /** @undocumented */
    emitCanAutoFollowChanged(p0: boolean): void;

    /** @undocumented */
    emitClampedChanged(p0: boolean): void;

    /** @undocumented */
    emitCurrentValueChanged(): void;

    /** @undocumented */
    emitDefaultMapGammaChanged(): void;

    /** @undocumented */
    emitDefaultMapTextureTypeChanged(): void;

    /** @undocumented */
    emitEditFinished(): void;

    /** @undocumented */
    emitIsManipulatorChanged(p0: boolean): void;

    /** @undocumented */
    emitIsMappableChanged(): void;

    /** @undocumented */
    emitIsUserPropertyChanged(p0: boolean): void;

    /** @undocumented */
    emitKeySelectionChanged(p0: DzTimeRange): void;

    /** @undocumented */
    emitLinked(): void;

    /** @undocumented */
    emitLockStateChanged(): void;

    /** @undocumented */
    emitMapChanged(): void;

    /** @undocumented */
    emitMinMaxChanged(): void;

    /** @undocumented */
    emitOverridingControllersChanged(p0: boolean): void;

    /** @undocumented */
    emitRemoved(): void;

    /** @undocumented */
    emitTextureModifierChanged(): void;

    /** @undocumented */
    emitTextureModifierFlagsChanged(): void;

    /** @undocumented */
    emitUnlinked(): void;

    /** @undocumented */
    emitValueChanged(p0: DzTimeRange): void;

    /** @undocumented */
    getEmitValueChangedOnSceneClear(): any;

    /** @undocumented */
    getFloatMinMax(p0: number, p1: number): any;

    /** @undocumented */
    getFloatMinMax(p0: number, p1: number): any;

    /** @undocumented */
    getGroupOnlyPath(): any;

    /** @undocumented */
    getKeyIndexRange(p0: DzTimeRange, p1: number): any;

    /** @undocumented */
    getName(): any;

    /** @undocumented */
    getValueAsDouble(): any;

    /** @undocumented */
    getValueAsDouble(p0: DzTime): any;

    /** @undocumented */
    invalidateCacheValue(): any;

    /** @undocumented */
    isKey(p0: DzTime, p1: number): any;

    /** @undocumented */
    iskindof(p0: string): any;

    /** @undocumented */
    keysAreClamped(): void;

    /** @undocumented */
    setCurrentAttributesAsDefinition(): any;

    /** @undocumented */
    setFollowListeners(): any;

    /** @undocumented */
    setKeyInterpolation(p0: number, p1?: number, p2?: number, p3?: number, p4?: number): any;

    /** @undocumented */
    toggleKeysAreClamped(): void;
}
