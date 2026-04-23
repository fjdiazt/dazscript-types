/**
 * The modifier component of dForm deformers.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/dformmodifier_dz
 */
declare class DzDFormModifier extends DzModifier {

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

    clearAltDFormer(): void;

    /**
     * @param atFront boolean
     * @returns DzDFormModifier
     */
    createAltGeomDFormer(atFront?: boolean): DzDFormModifier;

    /**
     * @returns DzDForm The dForm node that this modifier is driven by.
     */
    getDForm(): DzDForm;

    /**
     * @returns DzWeightMap
     */
    getInfluenceWeights(): DzWeightMap;

    /**
     * @returns DzBone
     */
    getMaskBone(): DzBone;

    /**
     * @returns DzFloatProperty The property that controls the strength of this modifier.
     * @since 4.9.3.137
     */
    getValueControl(): DzFloatProperty;

    invalidateInfluenceWeights(): void;

    /**
     * @returns boolean
     */
    isAppliedAsLegacy(): boolean; // Boolean

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

    /**
     * @param onOff boolean
     */
    setApplyAsLegacy(onOff: boolean): void;

    /**
     * Sets the dForm node that this modifier is driven by.
     * @param dform DzDForm - The dForm node that will control this modifier.
     */
    setDForm(dform: DzDForm): void;

    /**
     * @param map DzWeightMap
     * @returns DzError
     */
    setInfluenceWeights(map: DzWeightMap): DzError;

    /**
     * @param bone DzBone
     */
    setMaskBone(bone: DzBone): void;

    /**
     * @param map DzWeightMap
     * @param node DzNode
     * @returns DzError
     */
    setWeightMapFromZone(map: DzWeightMap, node: DzNode): DzError;

    /**
     * Generates a morph from this modifier. It searches for a morph of the same name and if it exists it adds its values to the allready existing morph. This was down to allow generation of a morph that is made from more than one dForm.
     * @param node DzNode - The target node.
     * @param name string - The name to assign to the morph.
     * @returns DzMorph The newly generated morph.
     */
    spawnMorph(node: DzNode, name: string): DzMorph;

    /* Signals */

    /**
     * Emitted when this modifier has been modified.
     */
    assetModified: ISignal<void>;

    /**
     * Emitted after this modifier has been saved.
     */
    assetWasSaved: ISignal<void>;

    /**
     * Emitted when the dForm node that is associated with this modifier has changed.
     * @param newDForm DzDForm - The new dForm node associated with this modifier.
     */
    dformChanged: ISignal<DzDForm>;

    /**
     * Emitted when the weight list for this modifier has changed.
     */
    weightListChanged: ISignal<void>;

    /**
     * Emitted when the weights on this modifier have changed.
     */
    weightsChanged: ISignal<void>;
}
