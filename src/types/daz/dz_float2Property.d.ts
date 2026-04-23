/**
 * An animatable floating-point property with 2 values.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/float2property_dz
 */
declare class DzFloat2Property extends DzFloatProperty {

    /* Constructors */

    constructor();

    /**
     * @param name string
     * @param canAnimate boolean
     * @param isUserProperty boolean
     * @param defaultVal DzVec2
     */
    constructor(name: string, canAnimate: boolean, isUserProperty: boolean, defaultVal: DzVec2);

    /**
     * @param name string
     * @param canAnimate boolean
     * @param isUserProperty boolean
     */
    constructor(name: string, canAnimate: boolean, isUserProperty: boolean);

    /* Methods */

    /**
     * Adjust the value of the property based on the contribution of property controllers.
     * @param val DzVec2 - The 'final' value desired for the property.
     * @returns DzVec2 A 'raw' value for the property that will result in the property having the given value with the current controllers.
     */
    adjustFloat2Value(val: DzVec2): DzVec2;

    /**
     * Adjust the value of the property at the given time based on the contribution of property controllers.
     * @param tm DzTime - The scene time at which to adjust the value.
     * @param val DzVec2 - The 'final' value desired for the property.
     * @returns DzVec2 A 'raw' value for the property that will result in the property having the given value with the current controllers.
     */
    adjustFloat2Value(tm: DzTime, val: DzVec2): DzVec2;

    /**
     * @returns DzVec2 The default value of the property.
     */
    getDefaultFloat2Value(): DzVec2;

    /**
     * @returns DzVec2 The difference between the current value of the follow property and its default value at the current time. If no auto-follow property is set, or auto-follow is not enabled for this property, then this method returns 0.
     */
    getFloat2FollowValue(): DzVec2;

    /**
     * @param tm DzTime - The scene time for which to get the value.
     * @returns DzVec2 The difference between the current value of the follow property and this properties default value tm. If no auto-follow property is set, or auto-follow is not enabled for this property, then this method returns 0.
     */
    getFloat2FollowValue(tm: DzTime): DzVec2;

    /**
     * @returns DzVec2 The value of the property at the current time.
     */
    getFloat2Value(): DzVec2;

    /**
     * @param tm DzTime - The scene time to get the value for.
     * @returns DzVec2 The value of the property at the given time.
     */
    getFloat2Value(tm: DzTime): DzVec2;

    /**
     * @param i number
     * @returns DzVec2 The value of the i'th key in the property.
     */
    getKeyFloat2Value(i: number): DzVec2;

    /**
     * This function is provided for the special case of ERC link redirection; sometimes called 'cross-talk'. For example, if Figure A (a piece of clothing, for example) is 'Fit To' Figure B, the ERC links on Figure A are redirected to follow channels on Figure B; this is how morphs on an item of clothing will follow morphs on the figure, etc. This function will provide the value of the property ignoring any redirection of ERC links. So, for a figure that is not 'Fit To' another figure, this will return the same value as getValue(). For a figure that is 'Fit To' another figure, this will return the value that the property would have if the ERC link had not been redirected.
     * @returns DzVec2 The value of the property at the current time without any ERC link redirection.
     */
    getLocalFloat2Value(): DzVec2;

    /**
     * This function is provided for the special case of ERC link redirection; sometimes called 'cross-talk'. For example, if Figure A (a piece of clothing, for example) is 'Fit To' Figure B, the ERC links on Figure A are redirected to follow channels on Figure B; this is how morphs on an item of clothing will follow morphs on the figure, etc. This function will provide the value of the property ignoring any redirection of ERC links. So, for a figure that is not 'Fit To' another figure, this will return the same value as getValue(). For a figure that is 'Fit To' another figure, this will return the value that the property would have if the ERC link had not been redirected.
     * @param tm DzTime - The scene time to get the local value for.
     * @returns DzVec2 The value of the property at the given time without any ERC link redirection.
     */
    getLocalFloat2Value(tm: DzTime): DzVec2;

    /**
     * This function is provided to make it easy to get the 'keyed' value of the property without any modifications. When the value of a property is evaluated, first the value based on key interpolation is calculated, that value is then passed to each of the controllers on the property (ERC links for example) which can modify that value. This modified value is then returned as the value of the property by getFloat2Value(). This function returns the value of the property before the application of the controllers; strictly the result of key interpolation.
     * @param tm DzTime - The scene time to get the raw value for.
     * @returns DzVec2 The 'raw' value of the property at the given time - this is the actual value of the property without the contribution of property links, etc.
     */
    getRawFloat2Value(tm: DzTime): DzVec2;

    /**
     * This function is provided to make it easy to get the 'keyed' value of the property without any modifications. When the value of a property is evaluated, first the value based on key interpolation is calculated, that value is then passed to each of the controllers on the property (ERC links for example) which can modify that value. This modified value is then returned as the value of the property by getFloat2Value(). This function returns the value of the property before the application of the controllers; strictly the result of key interpolation.
     * @returns DzVec2 The 'raw' value of the property at the current time; this is the actual value of the property without the contribution of property links, etc.
     */
    getRawFloat2Value(): DzVec2;

    /**
     * Sets the default value for this property.
     * @param val DzVec2 - The value to set the property to.
     */
    setDefaultFloat2Value(val: DzVec2): void;

    /**
     * Sets the value for this property at the given time; or the default value if this property is not animatable.
     * @param tm DzTime - The scene time to set the value at.
     * @param val DzVec2 - The value to set the property to.
     */
    setFloat2Value(tm: DzTime, val: DzVec2): void;

    /**
     * Sets the value for this property at the current time; or the default value if this property is not animatable.
     * @param val DzVec2 - The value to set the property to.
     */
    setFloat2Value(val: DzVec2): void;

    /**
     * Sets the value for this property at the given time; or the default value if this property is not animatable.
     * @param tm DzTime - The scene time to set the value at.
     * @param val DzVec2 - The value to set the property to.
     * @param interp InterpolationType - The type of interpolation to perform between this keyframe and the next. Parameters for interpolation are set to defaults.
     */
    setFloat2Value(tm: DzTime, val: DzVec2, interp: InterpolationType): void;

    /**
     * Sets the value for this property at the given time; or the default value if this property is not animatable.
     * @param tm DzTime - The scene time to set the value at.
     * @param valIn DzVec2 - The value to set the property to.
     * @param interp InterpolationType - The type of interpolation to perform between this keyframe and the next.
     * @param param0 number - The parameter 0 for key interpolation: T value for TCB interpolation, starting slope value for Hermite interpolation.
     * @param param1 number - The parameter 1 for key interpolation: C value for TCB interpolation, ending slope value for Hermite interpolation.
     * @param param2 number - The parameter 2 for key interpolation: B value for TCB interpolation
     */
    setFloat2Value(tm: DzTime, valIn: DzVec2, interp: InterpolationType, param0: number, param1: number, param2: number): void;

    /**
     * Sets the value of the i'th key.
     * @param i number - The index of the key to change.
     * @param val DzVec2 - The new value for the key.
     */
    setKeyFloat2Value(i: number, val: DzVec2): void;
}
