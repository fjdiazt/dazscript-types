/**
 * Implements the logic of transferring weights, morph, maps, etc using projection.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/transferutility_dz
 */
declare class DzTransferUtility extends QObject {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of AssetType.
     */
    static NoAsset: number;

    /**
     * DAZ enum member of AssetType.
     */
    static GeometryAsset: number;

    /**
     * DAZ enum member of AssetType.
     */
    static NodeAsset: number;

    /**
     * DAZ enum member of BaseType.
     */
    static BaseGeom: number;

    /**
     * DAZ enum member of BaseType.
     */
    static BaseMorph: number;

    /**
     * DAZ enum member of BaseType.
     */
    static BaseCurrent: number;

    /**
     * DAZ enum member of SourceMorphTransferType.
     */
    static NoMorphs: number;

    /**
     * DAZ enum member of SourceMorphTransferType.
     */
    static NameList: number;

    /**
     * DAZ enum member of SourceMorphTransferType.
     */
    static Favorites: number;

    /**
     * DAZ enum member of SourceMorphTransferType.
     */
    static FavoritesAndSubComponets: number;

    /**
     * DAZ enum member of SourceMorphTransferType.
     */
    static ShapingAndPoseType: number;

    /**
     * DAZ enum member of SourceMorphTransferType.
     */
    static AllMorphs: number;

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * Performs the projection transfer based on the current settings.
     * @returns boolean true if the transfer was successful, otherwise false.
     */
    doTransfer(): boolean; // Boolean

    /**
     * @returns number The adaptive tolerance factor for calculating the projection.
     * @since 4.8.1.78
     */
    getAdaptiveTolerance(): number; // Number

    /**
     * @returns boolean true if a smoothing modifier will be added to the target figure, otherwise false.
     */
    getAddSmoothModifier(): boolean; // Boolean

    /**
     * @returns boolean true if the target geometry will be adjusted to the source base geometry, otherwise false.
     */
    getAdjustTargetBase(): boolean; // Boolean

    /**
     * @returns boolean true if polylines are projected as rigid topology, otherwise false.
     * @since 4.11.0.66
     */
    getConsiderLinesAsRigid(): boolean; // Boolean

    /**
     * @returns string The content type to be set on the presentation of the figure.
     */
    getContentType(): string; // String

    /**
     * @returns number The distance squared tolerance for calculating the projection.
     * @since 4.10.0.50
     */
    getDistanceSquaredTolerance(): number; // Number

    /**
     * @returns boolean true if the target figure will be fit to the source figure once the projection has been performed, otherwise false.
     */
    getFitToFigure(): boolean; // Boolean

    /**
     * @returns boolean true if the view will be locked during the transfer, otherwise false.
     */
    getLockViewOnTransfer(): boolean; // Boolean

    /**
     * @returns boolean true if node hierarchies will be merged on the target figure, otherwise false.
     */
    getMergeHierarchies(): boolean; // Boolean

    /**
     * @returns any[] A list of morph names that will be transferred (if any).
     */
    getMorphTransferList(): any[]; // Array

    /**
     * @returns number The nearness factor for calculating the projection.
     */
    getNearness(): number; // Number

    /**
     * @returns boolean true if existing morphs on the target figure will be replaced, otherwise false.
     */
    getOverrideExistingMorphs(): boolean; // Boolean

    /**
     * @returns boolean true if the target figure will be parented to the source figure once the projection has been performed, otherwise false.
     * @since 4.10.0.50
     */
    getParentToFigure(): boolean; // Boolean

    /**
     * @returns string The path to a template figure to use for projection.
     * @since 4.9.3.48
     */
    getProjectionTemplatePath(): string; // String

    /**
     * @returns boolean true if the original target node will be removed.
     * @since 4.21.1.27
     */
    getRemoveOriginalTarget(): boolean; // Boolean

    /**
     * @returns boolean true if unused bones should be removed from the target after skin binding is transferred, otherwise false.
     */
    getRemoveUnusedTargetBones(): boolean; // Boolean

    /**
     * @returns boolean true if unused bones are any bones that have no bone binding and any bones with a bone binding whose weight map is filled with a zero value. false (default) if unused bones are limited to any bones with a bone binding whose weight map is filled with a zero value.
     * @since 4.22.1.76
     */
    getRemoveUnusedTargetBonesIsGreedy(): boolean; // Boolean

    /**
     * @returns boolean true if the transfer of weightmaps will respect hidden facets on the target figure, otherwise false.
     */
    getRespectHiddenFacets(): boolean; // Boolean

    /**
     * @returns boolean true if smart left/right handling will be used during projection calculation, otherwise false.
     */
    getSmartLeftRightHandling(): boolean; // Boolean

    /**
     * @returns number The type of projection base that will be used for the source asset.
     */
    getSourceBase(): number; // BaseType

    /**
     * @returns DzMorph The morph that will be used for the source projection base, or NULL if a different base type will be used.
     */
    getSourceBaseMorph(): DzMorph;

    /**
     * @returns DzShape The shape containing the source asset if the source asset type is GeometryAsset, otherwise null.
     */
    getSourceGeom(): DzShape;

    /**
     * @returns DzNode The node containing the source asset if the source asset type is NodeAsset, otherwise null.
     */
    getSourceNode(): DzNode;

    /**
     * @returns number The type of asset currently set for the projection source.
     */
    getSourceType(): number; // AssetType

    /**
     * @returns number The type of projection base that will be used for the target asset.
     */
    getTargetBase(): number; // BaseType

    /**
     * @returns DzMorph The morph that will be used for the target projection base, or NULL if a different base type will be used.
     */
    getTargetBaseMorph(): DzMorph;

    /**
     * @returns DzShape The shape containing the target asset if the target asset type is GeometryAsset, otherwise null.
     */
    getTargetGeom(): DzShape;

    /**
     * @returns DzNode The node containing the target asset if the target asset type is NodeAsset, otherwise null.
     */
    getTargetNode(): DzNode;

    /**
     * @returns DzFigure The target output figure.
     */
    getTargetOutputFigure(): DzFigure;

    /**
     * @returns boolean true if the target will replace the source in the scene, otherwise false.
     */
    getTargetReplacesSource(): boolean; // Boolean

    /**
     * @returns number The type of asset currently set for the projection target.
     */
    getTargetType(): number; // AssetType

    /**
     * @returns boolean true if skin binding will be projected, otherwise false.
     */
    getTransferBinding(): boolean; // Boolean

    /**
     * @returns boolean true if face grouping will be projected, otherwise false.
     */
    getTransferFaceGroups(): boolean; // Boolean

    /**
     * @returns boolean true if material grouping will be projected, otherwise false.
     */
    getTransferMaterialGroups(): boolean; // Boolean

    /**
     * @returns boolean true if morphs will be projected, otherwise false.
     */
    getTransferMorphs(): boolean; // Boolean

    /**
     * @returns boolean true if region grouping will be projected, otherwise false.
     */
    getTransferRegionGroups(): boolean; // Boolean

    /**
     * @returns boolean true if the selection map will be projected, otherwise false.
     */
    getTransferSelectionMap(): boolean; // Boolean

    /**
     * @returns number Which morphs are projected from the source figure.
     */
    getTransferSourceMorphs(): number; // SourceMorphTransferType

    /**
     * @returns boolean true if morphs should be projected from the template figure, otherwise false.
     * @since 4.9.3.48
     */
    getTransferTemplateMorphs(): boolean; // Boolean

    /**
     * @returns boolean true if UV maps will be projected, otherwise false.
     */
    getTransferUVs(): boolean; // Boolean

    /**
     * @returns boolean true if near vertices will be used for calculation of the projection, otherwise false.
     */
    getUseNearness(): boolean; // Boolean

    /**
     * @returns boolean true if the specified content type should be used to set the target content type, otherwise false.
     */
    getUseSpecifiedContentType(): boolean; // Boolean

    /**
     * @returns boolean true if UV space will be used during projection calculation, otherwise false.
     * @since 4.9.3.1
     */
    getUVSpaceProjection(): boolean; // Boolean

    /**
     * @returns boolean true if vertices are looked at first on the source for projection, false if facets are looked at first.
     * @since 4.9.3.38
     */
    getVertexFirstProjection(): boolean; // Boolean

    /**
     * @returns boolean true if the morph that will be used for the source projection base is “Modifier/Clone”, otherwise false.
     * @since 4.9.4.84
     */
    isSourceBaseMorphClone(): boolean; // Boolean

    /**
     * Removes unused bones from the specified figure.
     * @param figure DzFigure - The figure to remove the unused bones from.
     */
    removeUnusedBones(figure: DzFigure): void;

    /**
     * Sets the adaptive tolerance factor if near vertices will be used to calculate the projection.
     * @param val number - The adaptive tolerance factor to set.
     * @since 4.8.1.78
     */
    setAdaptiveTolerance(val: number): void;

    /**
     * Sets whether or not to add a smoothing modifier to the target figure.
     * @param yesNo boolean
     */
    setAddSmoothModifier(yesNo: boolean): void;

    /**
     * Sets whether or not the target will be adjusted to the unmodified base geometry of the source.
     * @param onOff boolean - If true, the target geometry will be adjusted. If false, the target geometry will not be changed.
     */
    setAdjustTargetBase(onOff: boolean): void;

    /**
     * Sets whether or not polylines are projected as rigid topology; whether or not all vertices of a given polyline transform based on the relative position of its first vertex, or individually based on their own respective positions.
     * @param onOff boolean - If true, polylines are projected as rigid topology. If false, polylines are projected as non-rigid topology.
     * @since 4.11.0.66
     */
    setConsiderLinesAsRigid(onOff: boolean): void;

    /**
     * Sets the content type to be set on the presentation of the figure.
     * @param conType string - The content type to set.
     */
    setContentType(conType: string): void;

    /**
     * Sets the distance squared tolerance to use for calculating the projection.
     * @param val number - The distance squared tolerance value to set.
     * @since 4.10.0.50
     */
    setDistanceSquaredTolerance(val: number): void;

    /**
     * Sets whether or not the target figure will be fit to the source figure once the projection has been performed.
     * @param yesNo boolean - If true, the target figure will be fit to the source figure.
     */
    setFitToFigure(yesNo: boolean): void;

    /**
     * Sets whether or not the view will be locked during the transfer.
     * @param onOff boolean - If true, the view will be locked during the transfer.
     */
    setLockViewOnTransfer(onOff: boolean): void;

    /**
     * Sets whether or not node hierarchies will be merged on the target figure.
     * @param onOff boolean - If true, node hierarchies will be merged.
     */
    setMergeHierarchies(onOff: boolean): void;

    /**
     * Sets the list of morph names to transfer.
     * @param list any[] - The list of morph names to set.
     */
    setMorphTransferList(list: any[]): void;

    /**
     * Sets the nearness factor if near vertices will be used to calculate the projection.
     * @param val number - The nearness factor to set.
     */
    setNearness(val: number): void;

    /**
     * Sets whether or not to override morphs that already exist onthe target figure.
     * @param onOff boolean - If true (default), existing morphs on the target figure will be replaced.
     */
    setOverrideExistingMorphs(onOff: boolean): void;

    /**
     * Sets whether or not the target figure will be parented to the source figure once the projection has been performed.
     * @param yesNo boolean - If true, the target figure will be parented to the source figure.
     * @since 4.10.0.50
     */
    setParentToFigure(yesNo: boolean): void;

    /**
     * Sets the path to a template figure to use for projection.
     * @param path string - The path of the projection template to set.
     * @since 4.9.3.48
     */
    setProjectionTemplatePath(path: string): void;

    /**
     * Sets whether or not the original target node will be removed.
     * @param onOff boolean - If true, the original target node will not be removed. If false, the original target node will be removed.
     * @since 4.21.1.27
     */
    setRemoveOriginalTarget(onOff: boolean): void;

    /**
     * Sets whether or not unused bones should be removed from the target after skin binding is transferred.
     * @param onOff boolean - If true, unused bones will be removed from the target after skin binding is transferred. If false, unused bones will not be removed from the target.
     */
    setRemoveUnusedTargetBones(onOff: boolean): void;

    /**
     * Sets whether or not removing unused bones should be greedy.
     * @param onOff boolean - If true, unused bones are any bones that have no bone binding and any bones with a bone binding whose weight map is filled with a zero value. If false, unused bones are bones with a bone binding whose weight map is filled with a zero value.
     * @since 4.22.1.76
     */
    setRemoveUnusedTargetBonesIsGreedy(onOff: boolean): void;

    /**
     * Sets whether or not the transfer of weightmaps will respect hidden facets on the target figure.
     * @param onOff boolean - If true, the transfer of weightmaps will respect hidden facets on the target figure.
     */
    setRespectHiddenFacets(onOff: boolean): void;

    /**
     * Sets whether importers that may need to be invoked should run silently, or with user input. Currently this only affects transfers using DzTransferPoserFigureAssets. This needs to be called before setSource() or setTarget() are called.
     * @param onOff boolean
     */
    setSilentImporters(onOff: boolean): void;

    /**
     * Sets whether or not smart left/right handling will be used during projection calculation.
     * @param onOff boolean - If true, smart left/right handling will be used. If false, smart left/right handling will not be used.
     */
    setSmartLeftRightHandling(onOff: boolean): void;

    /**
     * Sets the source asset to be the geometry contained by the given node.
     * @param node DzNode - The node to use as a projection source.
     * @returns boolean
     */
    setSource(node: DzNode): boolean; // Boolean

    /**
     * Sets the source asset to be the geometry contained by the given shape.
     * @param geom DzShape
     * @returns boolean
     */
    setSource(geom: DzShape): boolean; // Boolean

    /**
     * Sets the Transfer Utility to use the current world-space cached geometry of the source asset for the projection base instead of a morph or the unmodified base geometry. Only valid if the source asset is a node.
     * @returns boolean false if the source asset is not a node, otherwise true.
     */
    setSourceBaseCurrent(): boolean; // Boolean

    /**
     * Sets the morph that will be applied to the source geometry before the projection is calculated. Only valid if the source asset is a node.
     * @param morph DzMorph - The morph that will act as the projection base.
     * @returns boolean true if the morph will be used, false if the morph is invalid or the source asset is not a node.
     */
    setSourceBaseMorph(morph: DzMorph): boolean; // Boolean

    /**
     * Sets the target asset to be the geometry contained by the given node.
     * @param node DzNode - The node to use as a projection target.
     * @returns boolean
     */
    setTarget(node: DzNode): boolean; // Boolean

    /**
     * Sets the target asset to be the geometry contained by the given shape.
     * @param geom DzShape
     * @returns boolean
     */
    setTarget(geom: DzShape): boolean; // Boolean

    /**
     * Sets the Transfer Utility to use the current world-space cached geometry of the target asset for the projection base instead of a morph or the unmodified base geometry. Only valid if the target asset is a node.
     * @returns boolean false if the target asset is not a node, otherwise true.
     */
    setTargetBaseCurrent(): boolean; // Boolean

    /**
     * @param morph DzMorph
     * @returns boolean The morph that will be used for the target projection base, or NULL if a different base type will be used.
     */
    setTargetBaseMorph(morph: DzMorph): boolean; // Boolean

    /**
     * ets whether or not the target will replace the source in the scene.
     * @param onOff boolean - If true, the source will be replaced by the target. If false, the source will not be replaced by the target.
     */
    setTargetReplacesSource(onOff: boolean): void;

    /**
     * Sets whether or not skin binding will be projected to the target.
     * @param onOff boolean - If true, the skin binding weights will be projected. If false, the skin binding weights will not be projected.
     */
    setTransferBinding(onOff: boolean): void;

    /**
     * Sets whether or not face grouping will be projected to the target.
     * @param onOff boolean - If true, the face groups will be projected. If false, the face groups will not be projected.
     */
    setTransferFaceGroups(onOff: boolean): void;

    /**
     * Sets whether or not material grouping will be projected to the target.
     * @param onOff boolean - If true, the material groups will be projected. If false, the material groups will not be projected.
     */
    setTransferMaterialGroups(onOff: boolean): void;

    /**
     * Sets whether or not morphs will be projected to the target.
     * @param onOff boolean - If true, the morphs will be projected. If false, no morphs will be projected.
     */
    setTransferMorphs(onOff: boolean): void;

    /**
     * Sets whether or not region grouping will be projected to the target.
     * @param onOff boolean - If true, the face groups will be projected. If false, the face groups will not be projected.
     */
    setTransferRegionGroups(onOff: boolean): void;

    /**
     * Sets whether or not the selection map will be created on the target.
     * @param onOff boolean - If true, the selection map will be projected. If false, the selection map will not be projected.
     */
    setTransferSelectionMap(onOff: boolean): void;

    /**
     * Sets which type of morphs to project from the source figure.
     * @param type number - The type of morphs on the source figure to project.
     */
    setTransferSourceMorphs(type: number): void;

    /**
     * Sets whether or not morphs should be projected from the template figure.
     * @param onOff boolean - If true, morphs will be projected from the template figure.
     * @since 4.9.3.48
     */
    setTransferTemplateMorphs(onOff: boolean): void;

    /**
     * Sets whether or not UV maps will be projected to the target.
     * @param onOff boolean - If true, the UV maps will be projected. If false, the UV maps will not be projected.
     */
    setTransferUVs(onOff: boolean): void;

    /**
     * Sets whether or not face near vertices will be used to calculate the projection.
     * @param onOff boolean - If true, near vertices will be used, otherwise only the closest mesh location will be used.
     */
    setUseNearness(onOff: boolean): void;

    /**
     * Sets whether or not the specified content type should be used to set the target content type.
     * @param yesNo boolean - If true, the specified content type will be used to set the target content type. If false, the specified content type will not be used to set the target content type.
     */
    setUseSpecifiedContentType(yesNo: boolean): void;

    /**
     * Sets whether or not UV space will be used during projection calculation.
     * @param onOff boolean - If true, UV space will be used during projection calculation. If false, UV space will not be used during projection calculation.
     * @since 4.9.3.1
     */
    setUVSpaceProjection(onOff: boolean): void;

    /**
     * Sets whether vertices or facets on the source are looked at first for projection.
     * @param onOff boolean - If true, vertices are looked at first. If false, facets are looked at first.
     * @since 4.9.3.38
     */
    setVertexFirstProjection(onOff: boolean): void;
}
