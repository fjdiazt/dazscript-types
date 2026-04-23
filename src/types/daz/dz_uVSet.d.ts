/**
 * Represents vertex map containing the data for a UV set.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/uvset_dz
 */
declare class DzUVSet extends DzRefCountedItem {

    /* Properties */

    /**
     * Holds the author of the file for this vertex map. (Read Only)
     * @since 4.8.1.21
     */
    assetAuthor: DzAuthor;

    /**
     * Holds the revision version of the asset file for this vertex map. (Read Only)
     * @since 4.8.1.21
     */
    assetFileRevision: DzVersion;

    /**
     * Holds the asset id for this vertex map.
     * @since 4.8.1.18
     */
    assetId: string; // String

    /**
     * Holds the modified date of the asset file for this vertex map. (Read Only)
     * @since 4.8.1.21
     */
    assetModifiedDate: Date;

    /**
     * Holds whether or not the asset for this UV set needs to be saved. (Read Only)
     * @since 4.11.0.249
     */
    assetNeedSave: boolean; // Boolean

    /**
     * Holds the URI of the asset source for this vertex map; only valid when the asset is in an embedded state - i.e. modified. (Read Only)
     * @since 4.8.1.21
     */
    assetSource: DzUri;

    /**
     * Holds the asset URI for this vertex map. (Read Only)
     * @since 4.8.1.18
     */
    assetUri: DzUri;

    /* Constructors */

    constructor();

    /* Signals */

    /**
     * Emitted when the UV set has been modified.
     */
    assetModified: ISignal<void>;

    /**
     * Emitted after the UV set has been saved.
     */
    assetWasSaved: ISignal<void>;
}
