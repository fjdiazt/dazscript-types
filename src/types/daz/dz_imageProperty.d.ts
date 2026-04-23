/**
 * A static (non-animatable) image property.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/imageproperty_dz
 */
declare class DzImageProperty extends DzProperty {

    /* Constructors */

    constructor();

    /**
     * @param name string
     * @param isUserProperty boolean
     */
    constructor(name: string, isUserProperty: boolean);

    /* Methods */

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
     * @returns DzTexture The image value of this property.
     */
    getValue(): DzTexture;

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
     * Sets the texture value on this property.
     * @param val DzTexture - The texture value to set.
     * @returns boolean
     */
    setValue(val: DzTexture): boolean; // Boolean

    /**
     * Sets the image value.
     * @param imgFile string - The path of the image to set as the value; can be absolute or relative to a mapped directory.
     * @returns boolean
     */
    setValue(imgFile: string): boolean; // Boolean

    /* Signals */

    /**
     * Emitted when the default map gamma for this property has changed.
     */
    defaultMapGammaChanged: ISignal<void>;

    /**
     * Emitted when the default map texture type for this property has changed.
     */
    defaultMapTextureTypeChanged: ISignal<void>;

    /**
     * Emitted when the texture modifier for this property has changed.
     */
    textureModifierChanged: ISignal<void>;

    /**
     * Emitted when the flags on the texture modifier for this property have changed.
     */
    textureModifierFlagsChanged: ISignal<void>;

    /* Undocumented Augment Members */

    /** @undocumented */
    keysAreClamped(): any; // TODO ;

    /** @undocumented */
    setKeysAreClamped(): any; // TODO ;

    /** @undocumented */
    toggleKeysAreClamped(): any; // TODO ;

    /** @undocumented */
    doCopyBaseData(): any; // TODO ;

    /** @undocumented */
    getEmitValueChangedOnSceneClear(): any; // TODO ;

    /** @undocumented */
    setEmitValueChangedOnSceneClear(): any; // TODO ;

    /** @undocumented */
    emitRemoved(): any; // TODO ;

    /** @undocumented */
    invalidateCacheValue(): any; // TODO ;

    /** @undocumented */
    emitDefaultMapGammaChanged(): any; // TODO ;

    /** @undocumented */
    emitDefaultMapTextureTypeChanged(): any; // TODO ;

    /** @undocumented */
    emitTextureModifierChanged(): any; // TODO ;

    /** @undocumented */
    emitTextureModifierFlagsChanged(): any; // TODO ;
}
