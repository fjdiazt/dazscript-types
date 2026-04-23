/**
 * A displacement map along the normals of a mesh.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/pushmodifier_dz
 */
declare class DzPushModifier extends DzModifier {

    /* Properties */

    /**
     * Holds the author of the file for this modifier. (Read Only)
     * @since 4.8.1.21
     */
    assetAuthor: DzAuthor;

    /**
     * Holds the revision version of the asset file for this modifier. (Read Only)
     * @since 4.8.1.21
     */
    assetFileRevision: DzVersion;

    /**
     * Holds the asset id for this modifier.
     * @since 4.8.1.18
     */
    assetId: string; // String

    /**
     * Holds the modified date of the asset file for this modifier. (Read Only)
     * @since 4.8.1.21
     */
    assetModifiedDate: Date;

    /**
     * Holds whether or not the asset for this modifier needs to be saved. (Read Only)
     * @since 4.11.0.249
     */
    assetNeedSave: boolean; // Boolean

    /**
     * Holds the URI of the asset source for this modifier; only valid when the asset is in an embedded state - i.e. modified. (Read Only)
     * @since 4.8.1.21
     */
    assetSource: DzUri;

    /**
     * Holds the asset URI for this modifier. (Read Only)
     * @since 4.8.1.18
     */
    assetUri: DzUri;

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * @returns DzWeightMap The weight map being used as the modifier's influence weight (if any), otherwise null.
     */
    getInfluenceWeights(): DzWeightMap;

    /**
     * @returns DzFloatProperty The property that controls the strength of this modifier.
     * @since 4.9.3.137
     */
    getValueControl(): DzFloatProperty;

    /**
     * Marks the weights on this modifier as having changed, and notifies the geometry of the need for an update. Emits the weightsChanged() and currentValueChanged() signals.
     */
    invalidateInfluenceWeights(): void;

    /**
     * Return true if this push modifier is setup to be after the smoothing modifier
     * @returns boolean
     * @since 4.12.0.76
     */
    isPostSmooth(): boolean; // Boolean

    /**
     * Marks the asset as being modified.
     * @returns boolean true if the asset is marked as modified, otherwise false.
     */
    modifyAsset(): boolean; // Boolean

    /**
     * Marks the asset as being modified.
     * @param newUri DzUri - The new file URI for the asset.
     * @returns boolean true if the asset at the specified URI is marked as modified, otherwise false.
     */
    modifyAsset(newUri: DzUri): boolean; // Boolean

    /**
     * Sets or clears the weight map associated with the modifier.
     * @param map DzWeightMap - The weight map to use as the modifier's influence weight; use NULL to clear the existing map.
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     */
    setInfluenceWeights(map: DzWeightMap): DzError;

    setToPostSmooth(): void;

    /* Signals */

    /**
     * Emitted when the asset for the modifier has been modified.
     */
    assetModified: ISignal<void>;

    /**
     * Emitted when the asset for the modifier has been saved.
     */
    assetWasSaved: ISignal<void>;

    /**
     * Emitted when the list of weights for this modifier has changed.
     */
    weightListChanged: ISignal<void>;

    /**
     * Emitted when the weights for this modifier has changed.
     */
    weightsChanged: ISignal<void>;

    /* Undocumented Augment Members */

    /** @undocumented */
    createProperties(): void;

    /** @undocumented */
    getAssetType(): any;

    /** @undocumented */
    getValueChannel(): DzFloatProperty;

    /** @undocumented */
    toQObject(): QObject;
}
