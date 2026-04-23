/**
 * An animatable integer property.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/intproperty_dz
 */
declare class DzIntProperty extends DzNumericProperty {

    /* Constructors */

    constructor();

    /**
     * @param name string
     * @param canAnimate boolean
     * @param isUserProperty boolean
     * @param defaultVal number
     */
    constructor(name: string, canAnimate: boolean, isUserProperty: boolean, defaultVal?: number);

    /* Methods */

    /**
     * Adjust the value of the property based on the contribution of property controllers.
     * @param val number - The 'final' value desired for the property.
     * @returns number A 'raw' value for the property that will result in the property having the given value with the current controllers.
     */
    adjustValue(val: number): number; // Number

    /**
     * Adjust the value of the property at the given time based on the contribution of property controllers.
     * @param tm DzTime - The scene time at which to adjust the value.
     * @param val number - The 'final' value desired for the property.
     * @returns number A 'raw' value for the property that will result in the property having the given value with the current controllers.
     */
    adjustValue(tm: DzTime, val: number): number; // Number

    /**
     * @returns number The default value of the property.
     */
    getDefaultValue(): number; // Number

    /**
     * @param i number - The index of the key to get the value for.
     * @returns number The value of the i'th key in the property.
     */
    getKeyValue(i: number): number; // Number

    /**
     * This function is provided for the special case of ERC link redirection; sometimes called 'cross-talk'. For example, if Figure A (a piece of clothing, for example) is 'Fit To' Figure B, the ERC links on Figure A are redirected to follow channels on Figure B; this is how morphs on an item of clothing will follow morphs on the figure, etc. This function will provide the value of the property ignoring any redirection of ERC links. So, for a figure that is not 'Fit To' another figure, this will return the same value as getValue(). For a figure that is 'Fit To' another figure, this will return the value that the property would have if the ERC link had not been redirected.
     * @param tm DzTime - The scene time to get the local value for.
     * @returns number The value of the property at the given time without any ERC link redirection.
     */
    getLocalValue(tm: DzTime): number; // Number

    /**
     * This function is provided for the special case of ERC link redirection; sometimes called 'cross-talk'. For example, if Figure A (a piece of clothing, for example) is 'Fit To' Figure B, the ERC links on Figure A are redirected to follow channels on Figure B; this is how morphs on an item of clothing will follow morphs on the figure, etc. This function will provide the value of the property ignoring any redirection of ERC links. So, for a figure that is not 'Fit To' another figure, this will return the same value as getValue(). For a figure that is 'Fit To' another figure, this will return the value that the property would have if the ERC link had not been redirected.
     * @returns number The value of the property at the current time without any ERC link redirection.
     */
    getLocalValue(): number; // Number

    /**
     * @returns number The maximum allowable value of the property.
     */
    getMax(): number; // Number

    /**
     * @returns number The minimum allowable value of the property.
     */
    getMin(): number; // Number

    /**
     * This function is provided to make it easy to get the 'keyed' value of the property without any modifications. When the value of a property is evaluated, first the value based on key interpolation is calculated, that value is then passed to each of the controllers on the property (ERC links for example) which can modify that value. This modified value is then returned as the value of the property by getValue(). This function returns the value of the property before the application of the controllers; strictly the result of key interpolation.
     * @returns number The 'raw' value of the property at the current time; this is the actual value of the property without the contribution of property links, etc.
     */
    getRawValue(): number; // Number

    /**
     * This function is provided to make it easy to get the 'keyed' value of the property without any modifications. When the value of a property is evaluated, first the value based on key interpolation is calculated, that value is then passed to each of the controllers on the property (ERC links for example) which can modify that value. This modified value is then returned as the value of the property by getValue(). This function returns the value of the property before the application of the controllers; strictly the result of key interpolation.
     * @param tm DzTime - The scene time to get the raw value for.
     * @returns number The 'raw' value of the property at the given time; this is the actual value of the property without the contribution of property links, etc.
     */
    getRawValue(tm: DzTime): number; // Number

    /**
     * @returns number The sensitivity setting for this property.
     */
    getSensitivity(): number; // Number

    /**
     * @param tm DzTime - The scene time to get the value for.
     * @returns number The value of the property at the given time.
     */
    getValue(tm: DzTime): number; // Number

    /**
     * @returns number The value of the property at the current time.
     */
    getValue(): number; // Number

    /**
     * Sets the default value for this property.
     * @param val number - The value to set as the default for this property.
     */
    setDefaultValue(val: number): void;

    /**
     * Sets the value of the i'th key.
     * @param i number - The index of the key to set the value for.
     * @param val number - The value to set.
     */
    setKeyValue(i: number, val: number): void;

    /**
     * Set the maximum allowable value.
     * @param max number - The maximum value to set.
     */
    setMax(max: number): void;

    /**
     * Set the mininimum allowable value.
     * @param min number - The minimum value to set.
     */
    setMin(min: number): void;

    /**
     * Set the mininimum and maximum allowable values.
     * @param min number - The minimum value to set.
     * @param max number - The maximum value to set.
     */
    setMinMax(min: number, max: number): void;

    /**
     * Set the sensitivity for this property. This value describes the amount of change in the value of this property caused by adjustment in the interface, especially if limits are off.
     * @param sens number - The value to set.
     */
    setSensitivity(sens: number): void;

    /**
     * Sets the value for this property at the given time; or the default value if this property is not animatable. This function differs from setRawValue() in that it takes into account any controllers on the property such that calling setValue( getValue() ) should not change the value of the property.
     * @param tm DzTime - The scene time to set the value at.
     * @param val number - The value to set.
     */
    setValue(tm: DzTime, val: number): void;

    /**
     * Sets the value for this property at the current time; or the default value if this property is not animatable. This function differs from setRawValue() in that it takes into account any controllers on the property such that calling setValue( getValue() ) should not change the value of the property.
     * @param val number - The value to set.
     */
    setValue(val: number): void;

    /* Undocumented Augment Members */

    /** @undocumented */
    getKeys(): any;

    /** @undocumented */
    getMinMax(min: number, max: number): boolean;

    /** @undocumented */
    setRawValue(tm: DzTime, val: number): void;

    /** @undocumented */
    setRawValue(val: number): void;

    /** @undocumented */
    setRawValue(tm: DzTime, val: number): void;

    /** @undocumented */
    setRawValue(val: number): void;

    /** @undocumented */
    addImageMenu(): void;

    /** @undocumented */
    calcEditRect(): QRect;

    /** @undocumented */
    calcLabelRect(): QRect;

    /** @undocumented */
    calcMinSize(): QSize;

    /** @undocumented */
    calcSliderRect(): QRect;

    /** @undocumented */
    calcTextRect(): QRect;

    /** @undocumented */
    enterEvent(e: QEvent): void;

    /** @undocumented */
    isMouseOverType(): boolean;

    /** @undocumented */
    isPropHidden(): boolean;

    /** @undocumented */
    leaveEvent(e: QEvent): void;

    /** @undocumented */
    mouseMoveEvent(e: QMouseEvent): void;

    /** @undocumented */
    mouseReleaseEvent(e: QMouseEvent): void;

    /** @undocumented */
    setIndent(indent: number): void;

    /** @undocumented */
    setIsMouseOverType(onOff: boolean): void;

    /** @undocumented */
    setLocked(onOff: boolean): void;

    /** @undocumented */
    setPropHidden(onOff: boolean): void;

    /** @undocumented */
    timerEvent(obj: QTimerEvent): void;

    /** @undocumented */
    updateImageMenuGeom(): void;

    /** @undocumented */
    isMouseOverSlider(): boolean;

    /** @undocumented */
    propStateChangeNotify(): void;

    /** @undocumented */
    propertyChangeNotify(): void;

    /** @undocumented */
    setIsMouseOverSlider(onOff: boolean): void;

    /** @undocumented */
    startEdit(): void;
}
