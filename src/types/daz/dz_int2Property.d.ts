/**
 * An animatable integer property with 2 values.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/int2property_dz
 */
declare class DzInt2Property extends DzIntProperty {

    /* Constructors */

    constructor();

    /**
     * @param name string
     * @param canAnimate boolean
     * @param isUserProperty boolean
     * @param defaultVal DzInt2
     */
    constructor(name: string, canAnimate: boolean, isUserProperty: boolean, defaultVal: DzInt2);

    /**
     * @param name string
     * @param canAnimate boolean
     * @param isUserProperty boolean
     */
    constructor(name: string, canAnimate: boolean, isUserProperty: boolean);

    /* Methods */

    /**
     * Adjust the value of the property based on the contribution of property controllers.
     * @param val DzInt2 - The 'final' value desired for the property.
     * @returns DzInt2 A 'raw' value for the property that will result in the property having the given value with the current controllers.
     */
    adjustInt2Value(val: DzInt2): DzInt2;

    /**
     * Adjust the value of the property at the given time based on the contribution of property controllers.
     * @param tm DzTime - The scene time at which to adjust the value.
     * @param val DzInt2 - The 'final' value desired for the property.
     * @returns DzInt2 A 'raw' value for the property that will result in the property having the given value with the current controllers.
     */
    adjustInt2Value(tm: DzTime, val: DzInt2): DzInt2;

    /**
     * @returns DzInt2 The default value of the property.
     */
    getDefaultInt2Value(): DzInt2;

    /**
     * @returns DzInt2 The difference between the current value of the follow property and its default value at the current time. If no auto-follow property is set, or auto-follow is not enabled for this property, then this method returns 0.
     */
    getInt2FollowValue(): DzInt2;

    /**
     * @param tm DzTime - The scene time for which to get the value.
     * @returns DzInt2 The difference between the current value of the follow property and this properties default value tm. If no auto-follow property is set, or auto-follow is not enabled for this property, then this method returns 0.
     */
    getInt2FollowValue(tm: DzTime): DzInt2;

    /**
     * @returns DzInt2 The value of the property at the current time.
     */
    getInt2Value(): DzInt2;

    /**
     * @param tm DzTime - The scene time to get the value for.
     * @returns DzInt2 The value of the property at the given time.
     */
    getInt2Value(tm: DzTime): DzInt2;

    /**
     * @param i number
     * @returns DzInt2 The value of the i'th key in the property.
     */
    getKeyInt2Value(i: number): DzInt2;

    /**
     * This function is provided for the special case of ERC link redirection; sometimes called 'cross-talk'. For example, if Figure A (a piece of clothing, for example) is 'Fit To' Figure B, the ERC links on Figure A are redirected to follow channels on Figure B; this is how morphs on an item of clothing will follow morphs on the figure, etc. This function will provide the value of the property ignoring any redirection of ERC links. So, for a figure that is not 'Fit To' another figure, this will return the same value as getValue(). For a figure that is 'Fit To' another figure, this will return the value that the property would have if the ERC link had not been redirected.
     * @returns DzInt2 The value of the property at the current time without any ERC link redirection.
     */
    getLocalInt2Value(): DzInt2;

    /**
     * This function is provided for the special case of ERC link redirection; sometimes called 'cross-talk'. For example, if Figure A (a piece of clothing, for example) is 'Fit To' Figure B, the ERC links on Figure A are redirected to follow channels on Figure B; this is how morphs on an item of clothing will follow morphs on the figure, etc. This function will provide the value of the property ignoring any redirection of ERC links. So, for a figure that is not 'Fit To' another figure, this will return the same value as getValue(). For a figure that is 'Fit To' another figure, this will return the value that the property would have if the ERC link had not been redirected.
     * @param tm DzTime - The scene time to get the local value for.
     * @returns DzInt2 The value of the property at the given time without any ERC link redirection.
     */
    getLocalInt2Value(tm: DzTime): DzInt2;

    /**
     * This function is provided to make it easy to get the 'keyed' value of the property without any modifications. When the value of a property is evaluated, first the value based on key interpolation is calculated, that value is then passed to each of the controllers on the property (ERC links for example) which can modify that value. This modified value is then returned as the value of the property by getInt2Value(). This function returns the value of the property before the application of the controllers; strictly the result of key interpolation.
     * @param tm DzTime - The scene time to get the raw value for.
     * @returns DzInt2 The 'raw' value of the property at the given time - this is the actual value of the property without the contribution of property links, etc.
     */
    getRawInt2Value(tm: DzTime): DzInt2;

    /**
     * This function is provided to make it easy to get the 'keyed' value of the property without any modifications. When the value of a property is evaluated, first the value based on key interpolation is calculated, that value is then passed to each of the controllers on the property (ERC links for example) which can modify that value. This modified value is then returned as the value of the property by getInt2Value(). This function returns the value of the property before the application of the controllers; strictly the result of key interpolation.
     * @returns DzInt2 The 'raw' value of the property at the current time; this is the actual value of the property without the contribution of property links, etc.
     */
    getRawInt2Value(): DzInt2;

    /**
     * Sets the default value for this property.
     * @param val DzInt2 - The value to set the property to.
     */
    setDefaultInt2Value(val: DzInt2): void;

    /**
     * Sets the value for this property at the current time; or the default value if this property is not animatable.
     * @param val DzInt2 - The value to set.
     */
    setInt2Value(val: DzInt2): void;

    /**
     * Sets the value for this property at the given time; or the default value if this property is not animatable.
     * @param tm DzTime - The scene time to set the value at.
     * @param val DzInt2 - The value to set.
     */
    setInt2Value(tm: DzTime, val: DzInt2): void;

    /**
     * Sets the value of the i'th key.
     * @param i number - The index of the key to change.
     * @param val DzInt2 - The new value for the key.
     */
    setKeyInt2Value(i: number, val: DzInt2): void;

    /**
     * The same as calling setInt2Value( DzInt2 ).
     * @param val DzInt2
     */
    setRawInt2Value(val: DzInt2): void;

    /**
     * The same as calling setInt2Value( DzTime, DzInt2 ).
     * @param tm DzTime
     * @param val DzInt2
     */
    setRawInt2Value(tm: DzTime, val: DzInt2): void;
}
