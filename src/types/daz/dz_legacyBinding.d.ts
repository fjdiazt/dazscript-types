/**
 * Implements a parametrically defined (“legacy”) mesh binding.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/legacybinding_dz
 */
declare class DzLegacyBinding extends DzModifier {

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
}
