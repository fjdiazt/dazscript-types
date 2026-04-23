/**
 * A container class for an element used to hold settings for controlling a simulation.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/simulationsettingsprovider_dz
 */
declare class DzSimulationSettingsProvider extends DzRefCountedItem {

    /* Properties */

    /**
     * Holds the author of the file for this material. (Read Only)
     */
    assetAuthor: DzAuthor;

    /**
     * Holds the revision version of the asset file for this material. (Read Only)
     */
    assetFileRevision: DzVersion;

    /**
     * Holds the asset id for this material.
     */
    assetId: string; // String

    /**
     * Holds the modified date of the asset file for this material. (Read Only)
     */
    assetModifiedDate: Date;

    /**
     * Holds whether or not the asset for this modifier needs to be saved. (Read Only)
     * @since 4.11.0.249
     */
    assetNeedSave: boolean; // Boolean

    /**
     * Holds the URI of the asset source for this material; only valid when the asset is in an embedded state - i.e. modified. (Read Only)
     */
    assetSource: DzUri;

    /**
     * Holds the asset URI for this material. (Read Only)
     */
    assetUri: DzUri;

    /* Methods */

    /**
     * @param context DzElementDuplicateContext - The context of the simulation settings provider to duplicate.
     * @returns DzSimulationSettingsProvider The duplicate simulation settings provider if one could be duplicated, otherwise NULL.
     */
    duplicateProvider(context: DzElementDuplicateContext): DzSimulationSettingsProvider;

    /**
     * @returns DzShape The shape for this simulation settings provider (if any), otherwise NULL.
     * @since 4.10.0.64
     */
    getShape(): DzShape;

    /**
     * Marks the asset as being modified.
     * @param newUri DzUri - The new file URI for the asset.
     * @returns boolean true on success, otherwise false.
     */
    modifyAsset(newUri: DzUri): boolean; // Boolean

    /**
     * Marks the asset as being modified.
     * @returns boolean true on success, otherwise false.
     */
    modifyAsset(): boolean; // Boolean

    /**
     * Determine if this provider should always embed.
     * @returns boolean true.
     */
    shouldAlwaysEmbed(): boolean; // Boolean

    /* Signals */

    /**
     * Emitted when this provider has been modified.
     */
    assetModified: ISignal<void>;

    /**
     * Emitted after this provider has been saved.
     */
    assetWasSaved: ISignal<void>;

    /**
     * Emitted when the settings on this provider has changed.
     */
    settingsChanged: ISignal<void>;

    /**
     * Emitted when the shape that this provider is assigned to has changed.
     * @param newShape DzShape - The shape that this provider is now assigned to.
     * @param oldShape DzShape - The shape that this provider was previously assigned to (if any), otherwise NULL.
     * @since 4.10.0.64
     */
    shapeChanged: ISignal<DzShape, DzShape>;
}
