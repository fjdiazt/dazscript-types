/**
 * A modifier for a DzTexture.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/texturemodifier_dz
 */
declare class DzTextureModifier extends DzRefCountedItem {

    /* Properties */

    /**
     * Holds the grayscale mode of this texture modifier.
     */
    grayscaleMode: number; // GrayscaleMode

    /**
     * Holds the number of horizontal tiles for this texture modifier.
     */
    horizontalTiles: number; // Number

    /**
     * Holds the horizontal tiling offset of this texture modifier.
     */
    horizontalTilingOffset: number; // Number

    /**
     * Holds whether or not this texture modifier inverts colors.
     */
    invert: boolean; // Boolean

    /**
     * Holds the offset of this texture modifier.
     */
    offset: number; // Number

    /**
     * Holds the scale of this texture modifier.
     */
    scale: number; // Number

    /**
     * Holds the number of vertical tiles for this texture modifier.
     */
    verticalTiles: number; // Number

    /**
     * Holds the vertical tiling offset of this texture modifier.
     */
    verticalTilingOffset: number; // Number

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of GrayscaleMode.
     */
    static Alpha: number;

    /**
     * DAZ enum member of GrayscaleMode.
     */
    static Average: number;

    /**
     * DAZ enum member of GrayscaleMode.
     */
    static Luminance: number;

    /**
     * DAZ enum member of GrayscaleMode.
     */
    static Maximum: number;

    /**
     * DAZ enum member of GrayscaleMode.
     */
    static RedChannel: number;

    /**
     * DAZ enum member of GrayscaleMode.
     */
    static GreenChannel: number;

    /**
     * DAZ enum member of GrayscaleMode.
     */
    static BlueChannel: number;

    /**
     * DAZ enum member of GrayscaleMode.
     */
    static GrayscaleDefault: number;

    /**
     * DAZ enum member of Modifications.
     */
    static NoModification: number;

    /**
     * DAZ enum member of Modifications.
     */
    static Scale: number;

    /**
     * DAZ enum member of Modifications.
     */
    static Offset: number;

    /**
     * DAZ enum member of Modifications.
     */
    static Invert: number;

    /**
     * DAZ enum member of Modifications.
     */
    static Grayscale: number;

    /**
     * DAZ enum member of Modifications.
     */
    static LocalTiling: number;

    /**
     * DAZ enum member of Modifications.
     */
    static InvalidModification: number;

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * @param modificationFlags number - A bitwise OR of the modification flags to calaculate the offset from.
     * @returns number The calculated offset based on the specified modification flags.
     */
    calcOffset(modificationFlags: number): number; // Number

    /**
     * @param modificationFlags number - A bitwise OR of the modification flags to calaculate the offset from.
     * @param flipPolarity boolean - Whether values in the image should be flipped or not (ie black = 1, white = 0)
     * @returns number The calculated offset based on the specified modification flags.
     * @since 4.14.1.8
     */
    calcOffset(modificationFlags: number, flipPolarity: boolean): number; // Number

    /**
     * @param modificationFlags number - A bitwise OR of the modification flags to calaculate the scale from.
     * @returns number The calculated scale based on the specified modification flags.
     */
    calcScale(modificationFlags: number): number; // Number

    /**
     * @param modificationFlags number - A bitwise OR of the modification flags to calaculate the scale from.
     * @param flipPolarity boolean - Whether values in the image should be flipped (black = 1, white = 0) or not
     * @returns number The calculated scale based on the specified modification flags.
     * @since 4.14.1.8
     */
    calcScale(modificationFlags: number, flipPolarity: boolean): number; // Number

    /**
     * @returns DzTextureModifier A deep copy of this texture modifier.
     */
    duplicate(): DzTextureModifier;

    /**
     * Populates the given settings object with the attributes of this texture modifier.
     * @param settings DzSettings - The settings object to populate.
     * @param modFlags number - A bitwise OR of the modifier flags to set.
     */
    getAttributes(settings: DzSettings, modFlags: number): void;

    /**
     * @param modificationFlags number - A bitwise OR of the modification flags to get the grayscale mode from.
     * @returns number The grayscale mode based on the specified modification flags.
     */
    getGrayscaleMode(modificationFlags: number): number; // Number

    /**
     * @param modificationFlags number - A bitwise OR of the modification flags to get the number of horizontal tiles from.
     * @returns number The number of horizontal tiles for the specified modification flags.
     */
    getHorizontalTiles(modificationFlags: number): number; // Number

    /**
     * @param modificationFlags number - A bitwise OR of the modification flags to get the horizontal tiling offset from.
     * @returns number The horizontal tiling offset based on the specified modification flags.
     */
    getHorizontalTilingOffset(modificationFlags: number): number; // Number

    /**
     * @param modificationFlags number - A bitwise OR of the modification flags to get the offset from.
     * @returns number The offset based on the specified modification flags.
     */
    getOffset(modificationFlags: number): number; // Number

    /**
     * @param modificationFlags number - A bitwise OR of the modification flags to get the scale from.
     * @returns number The scale based on the specified modification flags.
     */
    getScale(modificationFlags: number): number; // Number

    /**
     * @param modificationFlags number - A bitwise OR of the modification flags to get the number of vertical tiles from.
     * @returns number The number of vertical tiles for the specified modification flags.
     */
    getVerticalTiles(modificationFlags: number): number; // Number

    /**
     * @param modificationFlags number - A bitwise OR of the modification flags to get the vertical tiling offset from.
     * @returns number The vertical tiling offset based on the specified modification flags.
     */
    getVerticalTilingOffset(modificationFlags: number): number; // Number

    /**
     * @param modificationFlags number - A bitwise OR of the modification flags that define 'default.'
     * @returns boolean true if this texture modifier is in its default state, otherwise false.
     */
    isDefault(modificationFlags: number): boolean; // Boolean

    /**
     * @param modificationFlag number
     * @param flipPolaritys boolean
     * @returns boolean The inverted state based on the specified modification flags.
     * @since 4.14.1.8
     */
    isInverted(modificationFlag: number, flipPolaritys: boolean): boolean; // Boolean

    /**
     * @param modificationFlags number - A bitwise OR of the modification flags to get the inverted state from.
     * @returns boolean The inverted state based on the specified modification flags.
     */
    isInverted(modificationFlags: number): boolean; // Boolean

    /**
     * Resets this texture modifier.
     */
    reset(): void;

    /**
     * Sets the attributes of this texture modifier using settings.
     * @param settings DzSettings - The settings with the data to set.
     * @param modFlags number - A bitwise OR of the modifier flags to set.
     * @param oldMod DzTextureModifier - The texture modifier (if any) to use for default values if a named value cannot be found in settings.
     */
    setAttributes(settings: DzSettings, modFlags: number, oldMod?: DzTextureModifier): void;

    /* Signals */

    /**
     * Emitted when the grayscale mode of the texture modifier has changed.
     */
    grayscaleModeChanged: ISignal<void>;

    /**
     * Emitted when the number of horizontal tiles for the texture modifier has changed.
     */
    horizontalTilesChanged: ISignal<void>;

    /**
     * Emitted when the horizontal tiling offset of the texture modifier has changed.
     */
    horizontalTilingOffsetChanged: ISignal<void>;

    /**
     * Emitted when the inversion of the texture modifier has changed.
     */
    invertedChanged: ISignal<void>;

    /**
     * Emitted when the offset of the texture modifier has changed.
     */
    offsetChanged: ISignal<void>;

    /**
     * Emitted when the scale of the texture modifier has changed.
     */
    scaleChanged: ISignal<void>;

    /**
     * Emitted when the settings of the texture modifier have changed.
     */
    settingsChanged: ISignal<void>;

    /**
     * Emitted when the number of vertical tiles for the texture modifier has changed.
     */
    verticalTilesChanged: ISignal<void>;

    /**
     * Emitted when the vertical tiling offset of the texture modifier has changed.
     */
    verticalTilingOffsetChanged: ISignal<void>;
}
