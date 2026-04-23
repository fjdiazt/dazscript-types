/**
 * Implements a weight-mapped mesh binding.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/skinbinding_dz
 */
declare class DzSkinBinding extends DzModifier {

    /* Properties */

    /**
     * Holds the author of the file for this skin binding. (Read Only)
     * @since 4.8.1.21
     */
    assetAuthor: DzAuthor;

    /**
     * Holds the revision version of the asset file for this skin binding. (Read Only)
     * @since 4.8.1.21
     */
    assetFileRevision: DzVersion;

    /**
     * Holds the asset id for this skin binding.
     * @since 4.8.1.18
     */
    assetId: string; // String

    /**
     * Holds the modified date of the asset file for this skin binding. (Read Only)
     * @since 4.8.1.21
     */
    assetModifiedDate: Date;

    /**
     * Holds whether or not the asset for this skin binding needs to be saved. (Read Only)
     * @since 4.11.0.249
     */
    assetNeedSave: boolean; // Boolean

    /**
     * Holds the URI of the asset source for this skin binding; only valid when the asset is in an embedded state - i.e. modified. (Read Only)
     * @since 4.8.1.21
     */
    assetSource: DzUri;

    /**
     * Holds the asset URI for this skin binding. (Read Only)
     * @since 4.8.1.18
     */
    assetUri: DzUri;

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of BindingMode.
     */
    static General: number;

    /**
     * DAZ enum member of BindingMode.
     */
    static Local: number;

    /**
     * DAZ enum member of BindingMode.
     */
    static Blended: number;

    /**
     * DAZ enum member of BlendMode.
     */
    static BlendLocalGeneral: number;

    /**
     * DAZ enum member of BlendMode.
     */
    static BlendLinearDualQuat: number;

    /**
     * DAZ enum member of GeneralMapMode.
     */
    static Linear: number;

    /**
     * DAZ enum member of GeneralMapMode.
     */
    static DualQuat: number;

    /**
     * DAZ enum member of NormalizeType.
     */
    static NormalizeNone: number;

    /**
     * DAZ enum member of NormalizeType.
     */
    static NormalizeX: number;

    /**
     * DAZ enum member of NormalizeType.
     */
    static NormalizeY: number;

    /**
     * DAZ enum member of NormalizeType.
     */
    static NormalizeZ: number;

    /**
     * DAZ enum member of NormalizeType.
     */
    static NormalizeGeneral: number;

    /**
     * DAZ enum member of NormalizeType.
     */
    static NormalizeScale: number;

    /**
     * DAZ enum member of NormalizeType.
     */
    static NormalizeWeight: number;

    /**
     * DAZ enum member of NormalizeType.
     */
    static NormalizeAll: number;

    /**
     * DAZ enum member of PriorityType.
     */
    static RootLowest: number;

    /**
     * DAZ enum member of PriorityType.
     */
    static RootHighest: number;

    /**
     * DAZ enum member of ScaleMode.
     */
    static ScaleMaps: number;

    /**
     * DAZ enum member of ScaleMode.
     */
    static BindingMaps: number;

    /* Undocumented Augment Members */

    /** @undocumented */
    findBoneBinding(name: string): DzBoneBinding;

    /** @undocumented */
    addBoneBinding(boneBinding: DzBoneBinding): void;
}
