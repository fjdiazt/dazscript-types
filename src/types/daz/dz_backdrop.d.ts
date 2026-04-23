/**
 * Backdrop that gets drawn behind viewport scenes.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/backdrop_dz
 */
declare class DzBackdrop extends DzElement {

    /* Properties */

    /**
     * Holds the background color of the backdrop.
     * @since 4.6.4.30
     */
    backgroundColor: Color;

    /**
     * Holds whether or not the backdrop is flipped horizontally.
     */
    flipHorizontal: boolean; // Boolean

    /**
     * Holds whether or not the backdrop is flipped vertically.
     */
    flipVertical: boolean; // Boolean

    /**
     * Holds the rotation applied to the backdrop.
     */
    rotation: number; // Rotation

    /**
     * Holds whether or not the backdrop is visible in the viewport.
     * @since 4.6.4.30
     */
    visible: boolean; // Boolean

    /**
     * Holds whether or not the backdrop is visible in a render.
     * @since 4.6.4.32
     */
    visibleInRender: boolean; // Boolean

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of Rotation.
     */
    static NO_ROTATION: number;

    /**
     * DAZ enum member of Rotation.
     */
    static ROTATE_LEFT_90: number;

    /**
     * DAZ enum member of Rotation.
     */
    static ROTATE_RIGHT_90: number;

    /**
     * DAZ enum member of Rotation.
     */
    static ROTATE_180: number;

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * Changes the render aspect ratio to match the backdrop image, and the image dimensions.
     * @since 4.6.4.33
     */
    adjustRenderAspectRatioToMatchTexture(): void;

    /**
     * Changes the render image dimensions and aspect ratio to match the backdrop image.
     * @since 4.6.4.33
     */
    adjustRenderDimensionsToMatchTexture(): void;

    /**
     * Clears the current back drop image, and resets all parameters.
     */
    clear(): void;

    /**
     * @returns DzColorProperty The property that controls the backdrop color or tinting.
     * @since 4.6.4.35
     */
    getBackgroundColorControl(): DzColorProperty;

    /**
     * @returns DzBoolProperty The property that controls whether the backdrop is flipped horizontally.
     */
    getHorizontalFlipControl(): DzBoolProperty;

    /**
     * @returns DzMaterial An editable instance of the material used to shade the backdrop.
     */
    getMaterial(): DzMaterial;

    /**
     * @returns DzEnumProperty The property that controls rotation of the backdrop.
     */
    getRotationControl(): DzEnumProperty;

    /**
     * @returns DzTexture The current backdrop image.
     */
    getTexture(): DzTexture;

    /**
     * @returns DzBoolProperty The property that controls whether the backdrop is flipped vertically.
     */
    getVerticalFlipControl(): DzBoolProperty;

    /**
     * @returns DzBoolProperty The property that controls whether the backdrop is visible.
     * @since 4.6.4.32
     */
    getVisibleControl(): DzBoolProperty;

    /**
     * @returns DzBoolProperty The property that controls whether the backdrop is visible in a render.
     * @since 4.6.4.32
     */
    getVisibleInRenderControl(): DzBoolProperty;

    /**
     * Sets the backdrop image.
     * @param img DzTexture - The backdrop image.
     */
    setTexture(img: DzTexture): void;

    /**
     * Deprecated
     * @param parent QWidget
     */
    showOptions(parent?: QWidget): void;

    /* Signals */

    /**
     * Emitted when the background color of this backdrop changes.
     * @since 4.6.4.30
     */
    backgroundColorChanged: ISignal<void>;

    /**
     * Emitted when the information in this backdrop changes.
     */
    drawnDataChanged: ISignal<void>;

    /**
     * Emitted when the visibility of this backdrop changes.
     * @since 4.6.4.32
     */
    visiblityChanged: ISignal<void>;

    /* Undocumented Augment Members */

    /** @undocumented */
    mergeElementSignal(): any; // TODO ;

    /** @undocumented */
    duplicateElementSignal(): any; // TODO ;

    /** @undocumented */
    createElementCopySignal(): any; // TODO ;

    /** @undocumented */
    duplicateMissingCustomDataWithContext(): any; // TODO ;

    /** @undocumented */
    duplicateMissingPropertiesWithContext(): any; // TODO ;

    /** @undocumented */
    duplicateMissingPrivatePropertiesWithContext(): any; // TODO ;

    /** @undocumented */
    doMergeElement(): any; // TODO ;

    /** @undocumented */
    doDuplicateElement(): any; // TODO ;

    /** @undocumented */
    mergeElement(): any; // TODO ;

    /** @undocumented */
    duplicateElement(): any; // TODO ;

    /** @undocumented */
    createElementCopy(): any; // TODO ;
}
