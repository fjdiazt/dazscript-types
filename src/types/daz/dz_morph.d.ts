/**
 * A three dimensional displacement map for a mesh.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/morph_dz
 */
declare class DzMorph extends DzModifier {

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

    /**
     * @param deltas DzMorphDeltas
     */
    constructor(deltas: DzMorphDeltas);

    /* Methods */

    /**
     * Clears the deltas of the selected vertices on mesh.
     * @param mesh DzVertexMesh - The mesh to clear deltas on.
     * @param selected boolean - If true, the selected vertices are cleared. If false, the non-selected vertices are cleared.
     * @param writeToStatusLine boolean - If , writes processing data to status line.
     * @returns DzError The deltas used by this morph.
     * @since 4.10.0.32
     */
    clearDeltasOnVertexSelection(mesh: DzVertexMesh, selected?: boolean, writeToStatusLine?: boolean): DzError;

    /**
     * @returns DzMorphDeltas
     */
    getDeltas(): DzMorphDeltas;

    /**
     * @returns number The limit for the active level of a High Definition (HD) morph.
     * @since 4.6.0.99
     */
    getHDLimit(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls the strength of this modifier.
     * @since 4.9.3.137
     */
    getValueControl(): DzFloatProperty;

    /**
     * Marks the asset as being modified.
     * @param newUri DzUri - The new file URI for the asset.
     * @returns boolean true if the asset at the specified URI is marked as modified, otherwise false.
     */
    modifyAsset(newUri: DzUri): boolean; // Boolean

    /**
     * Marks the asset as being modified.
     * @returns boolean true if the asset is marked as modified, otherwise false.
     */
    modifyAsset(): boolean; // Boolean

    /**
     * Replace the delta set that this morph is using.
     * @param deltas DzMorphDeltas - The new deltas for the morph. Delta sets are reference counted and so can be shared between multiple morphs.
     */
    setDeltas(deltas: DzMorphDeltas): void;

    /**
     * Sets the limit for the active level of a High Definition (HD) morph.
     * @param limit number - The limit to set.
     * @since 4.6.0.99
     */
    setHDLimit(limit: number): void;

    /**
     * Deprecated
     * @returns DzFloatProperty
     */
    getValueChannel(): DzFloatProperty;

    /* Signals */

    /**
     * Emitted when the deltas for the morph have been modified.
     */
    assetModified: ISignal<void>;

    /**
     * Emitted when the deltas for the morph have been saved.
     */
    assetWasSaved: ISignal<void>;

    /**
     * Emitted when the deltas for the morph has changed.
     */
    deltasChanged: ISignal<void>;

    /**
     * Emitted when the high definition (HD) deltas for the morph have changed.
     */
    hdLimitChanged: ISignal<void>;

    /* Undocumented Augment Members */

    /** @undocumented */
    clearHDDeltasOnFacetSelection(p0: DzFacetMesh): any;

    /** @undocumented */
    clearHDDeltasOnFacetSelection(p0: DzFacetMesh, p1: boolean): any;

    /** @undocumented */
    clearHDDeltasOnFacetSelection(p0: DzFacetMesh, p1: boolean, p2: boolean): any;

    /** @undocumented */
    createElementCopy(p0: DzElementDuplicateContext): any;

    /** @undocumented */
    createElementCopySignal(p0: DzElementDuplicateContext): any;

    /** @undocumented */
    doDuplicateElement(p0: DzElementDuplicateContext): any;

    /** @undocumented */
    doMergeElement(p0: DzElement, p1: DzElementDuplicateContext): any;

    /** @undocumented */
    duplicateElement(p0: DzElement, p1: DzElementDuplicateContext): any;

    /** @undocumented */
    duplicateElementSignal(p0: DzElement, p1: DzElementDuplicateContext): any;

    /** @undocumented */
    duplicateMissingCustomData(p0: DzElement): any;

    /** @undocumented */
    duplicateMissingCustomDataWithContext(p0: DzElement, p1: DzElementDuplicateContext): any;

    /** @undocumented */
    duplicateMissingPrivateProperties(p0: DzElement): any;

    /** @undocumented */
    duplicateMissingPrivatePropertiesWithContext(p0: DzElement, p1: DzElementDuplicateContext): any;

    /** @undocumented */
    duplicateMissingProperties(p0: DzElement): any;

    /** @undocumented */
    duplicateMissingPropertiesWithContext(p0: DzElement, p1: DzElementDuplicateContext): any;

    /** @undocumented */
    getName(): any;

    /** @undocumented */
    isDataItemNameUnique(p0: string): any;

    /** @undocumented */
    isDataItemNameUnique(p0: string, p1: boolean): any;

    /** @undocumented */
    isPrivatePropertyNameUnique(p0: string): any;

    /** @undocumented */
    isPrivatePropertyNameUnique(p0: string, p1: boolean): any;

    /** @undocumented */
    isPropertyNameUnique(p0: string): any;

    /** @undocumented */
    isPropertyNameUnique(p0: string, p1: boolean): any;

    /** @undocumented */
    iskindof(p0: string): any;

    /** @undocumented */
    mergeElement(p0: DzElement, p1: DzElementDuplicateContext): any;

    /** @undocumented */
    mergeElementSignal(p0: DzElement, p1: DzElementDuplicateContext): any;

    /** @undocumented */
    remapForTopologyChange(p0: DzShape, p1: DzIndexChangeSet): any;

    /** @undocumented */
    remapForTopologyChangeSlot(p0: DzShape, p1: DzIndexChangeSet): any;
}
