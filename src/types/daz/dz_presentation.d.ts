/**
 * Represents the presentation for an asset.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/presentation_dz
 */
declare class DzPresentation extends DzBase {

    /* Properties */

    /**
     * The auto fit base that this asset is.
     * @since 4.5.2.13
     */
    autoFitBase: string; // String

    /**
     * A color hint to be used in conjunction with colorB to define a 2 color linear gradient used by UI elements displayed to the user.
     */
    colorA: Color;

    /**
     * A color hint to be used in conjunction with colorA to define a 2 color linear gradient used by UI elements displayed to the user.
     */
    colorB: Color;

    /**
     * A human readable, end-user facing, description of the item that the presentation is attached to.
     */
    description: string; // String

    /**
     * The other bases this item may be treated like.
     * @since 4.12.2.44
     */
    extendedBases: any[]; // Array

    /**
     * The relative path (uri) corresponding to a large image. For a DzFloatProperty that applies a DzMorph, this image is used for display as a “Card” (vertical slider). If iconSmall is not defined, the path defined here is also used (scaled) for the horizontal slider.
     */
    iconLarge: string; // String

    /**
     * The relative path (uri) corresponding to a small image. For a DzFloatProperty that applies a DzMorph, this image is used for display in a horizontal slider. If this is not defined and a value is defined for iconLarge, its value will be used and the image will be scaled down.
     */
    iconSmall: string; // String

    /**
     * A human readable label for the presentation.
     */
    label: string; // String

    /**
     * The preferred base this item tries to follow. If this is does not match the autoFitBase of the follow target, auto-fit will try to convert the content.
     * @since 4.5.2.13
     */
    preferredBase: string; // String

    /**
     * A hint to the intended purpose of what the presentation is attached to. For a DzFloatProperty that applies a DzMorph intended to adjust the shape of the underlying structure of an object (e.g. “Nose Height” or “Eye Width”), this would be “Modifier/Shape”. For a DzFloatProperty intended to be used for posing a DzBone of a figure, or to adjust a DzMorph that makes non-structural this would be “Modifier/Pose”.
     */
    type: string; // String

    /* Constructors */

    constructor();

    /* Undocumented Augment Members */

    /** @undocumented */
    iconReady(): void;

    /** @undocumented */
    attributeChanged(): void;
}
