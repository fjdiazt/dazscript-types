/**
 * Base class of all local space modifiers that are scene assets.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/meshmodifier_dz
 */
declare class DzMeshModifier extends DzModifier {

    /* Properties */

    /**
     * Holds the author of the file for this property. (Read Only)
     */
    assetAuthor: DzAuthor;

    /**
     * Holds the revision version of the asset file for this property. (Read Only)
     */
    assetFileRevision: DzVersion;

    /**
     * Holds the asset id for this property.
     */
    assetId: string; // String

    /**
     * Holds the modified date of the asset file for this property. (Read Only)
     */
    assetModifiedDate: Date;

    /**
     * Holds whether or not the asset for this modifier needs to be saved. (Read Only)
     * @since 4.11.0.249
     */
    assetNeedSave: boolean; // Boolean

    /**
     * Holds the URI of the asset source for this property; only valid when the asset is in an embedded state - i.e. modified. (Read Only)
     */
    assetSource: DzUri;

    /**
     * Holds the asset URI for this property. (Read Only)
     */
    assetUri: DzUri;

    /* Methods */

    /**
     * @returns boolean true if the asset can be automatically loaded based on its location on disk, otherwise false.
     */
    canLoadFromAutoLocation(): boolean; // Boolean

    /**
     * Marks the asset as being modified.
     * @returns boolean true on success, otherwise false.
     */
    modifyAsset(): boolean; // Boolean

    /**
     * Marks the asset as being modified.
     * @param newUri DzUri - The new file URI for the asset.
     * @returns boolean true on success, otherwise false.
     */
    modifyAsset(newUri: DzUri): boolean; // Boolean

    /* Signals */

    /**
     * Emitted when this modifier has been modified.
     */
    assetModified: ISignal<void>;

    /**
     * Emitted after this modifier has been saved.
     */
    assetWasSaved: ISignal<void>;
}
