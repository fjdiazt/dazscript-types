/**
 * Base class for all material types.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/material_dz
 */
declare class DzMaterial extends DzRefCountedItem {

    /* Properties */

    /**
     * Hold the author of the file for this material. (Read Only)
     * @since 4.8.1.21
     */
    assetAuthor: DzAuthor;

    /**
     * Hold the revision version of the asset file for this material. (Read Only)
     * @since 4.8.1.21
     */
    assetFileRevision: DzVersion;

    /**
     * Hold the asset id for this material.
     * @since 4.8.1.18
     */
    assetId: string; // String

    /**
     * Hold the modified date of the asset file for this material. (Read Only)
     * @since 4.8.1.21
     */
    assetModifiedDate: Date;

    /**
     * Holds whether or not the asset for this modifier needs to be saved. (Read Only)
     * @since 4.11.0.249
     */
    assetNeedSave: boolean; // Boolean

    /**
     * Hold the URI of the asset source for this material; only valid when the asset is in an embedded state - i.e. modified. (Read Only)
     * @since 4.8.1.21
     */
    assetSource: DzUri;

    /**
     * Holds the asset URI for this material. (Read Only)
     * @since 4.8.1.18
     */
    assetUri: DzUri;

    /**
     * The render priority for the material. Render priority controls the order in which materials are handled during a render. The higher the priority, the earlier the material will be handled. If several materials have the same render priority, those materials will be handled in an arbitrary order.
     */
    renderPriority: number; // DzRenderMgr::RenderPriority

    /* Static Methods */

    /**
     * @param which number
     * @returns DzMaterial The material with the given index.
     */
    static getMaterial(which: number): DzMaterial;

    /**
     * @returns number The number of materials that have been created
     */
    static getNumMaterials(): number; // Number

    /* Methods */

    /**
     * @param context DzElementDuplicateContext - The context of the material to duplicate.
     * @returns DzMaterial The duplicate material if a material could be duplicated, otherwise a DzDefaultMaterial.
     * @since 4.6.2.104
     */
    duplicateOrDefaultMaterial(context: DzElementDuplicateContext): DzMaterial;

    /**
     * Sets whether or not this material should propagate its render priority up to all the nodes that use it. Setting this to true will also ensure that the render priority is set for nodes that the material is assigned to at a later time.
     * @param propagate boolean
     */
    enablePropagateRenderPriorityToNodes(propagate: boolean): void;

    /**
     * @param shape DzShape
     * @returns DzUVSet The UV set that is used by this material for the given shape. May be NULL if the shape does not have any UV Sets.
     * @since 4.9.3.69
     */
    getActiveUVSet(shape: DzShape): DzUVSet;

    /**
     * @param geom DzGeometry
     * @returns DzUVSet The UV set that is used by this material for the given geometry. May be NULL if the geometry does not have any UV Sets.
     * @since 4.9.3.69
     */
    getActiveUVSet(geom: DzGeometry): DzUVSet;

    /**
     * Collects all the images that are being used by this material at the current time and inserts them into the given list if they are not already there.
     * @returns any[] A list of DzTextures currently used by this material.
     */
    getAllMaps(): any[]; // Array

    /**
     * @returns DzTexture The 'baked' map for the material. NULL if the material is not using a baked map.
     */
    getBakedMap(): DzTexture;

    /**
     * @returns number The opacity value for this material.
     */
    getBaseOpacity(): number; // Number

    /**
     * @returns DzBox3 The bounding box for this material.
     */
    getBoundingBox(): DzBox3;

    /**
     * @returns DzTexture The color ('texture') map for this material.
     */
    getColorMap(): DzTexture;

    /**
     * @returns Color The diffuse color for this material.
     */
    getDiffuseColor(): Color;

    /**
     * @returns number The material index of this material.
     */
    getIndex(): number; // Number

    /**
     * @returns float The current line end width.
     * @since 4.11.0.76
     */
    getLineEndWidth(): float;

    /**
     * @returns DzFloatProperty The property that controls the desired end width of a line.
     * @since 4.11.0.76
     */
    getLineEndWidthControl(): DzFloatProperty;

    /**
     * @returns Color The current line preview color.
     * @since 4.11.0.76
     */
    getLinePreviewColor(): Color;

    /**
     * @returns DzColorProperty The property that controls the color or lines for preview.
     * @since 4.11.0.76
     */
    getLinePreviewColorControl(): DzColorProperty;

    /**
     * @returns float The current line start width.
     * @since 4.11.0.76
     */
    getLineStartWidth(): float;

    /**
     * @returns DzFloatProperty The property that controls the desired start width of a line.
     * @since 4.11.0.76
     */
    getLineStartWidthControl(): DzFloatProperty;

    /**
     * @returns float The current line UV width.
     * @since 4.11.0.109
     */
    getLineUVWidth(): float;

    /**
     * @returns DzFloatProperty The property that controls the desired UV width of a line.
     * @since 4.11.0.109
     */
    getLineUVWidthControl(): DzFloatProperty;

    /**
     * @returns string The name for the type of shader (not the name for the material instance).
     */
    getMaterialName(): string; // String

    /**
     * @returns number The number of OpenGL texture maps necessary for rendering this material in OpenGL (e.g. one for a diffuse color map, one for an opacity map, etc.).
     */
    getNumGLMaps(): number; // Number

    /**
     * @returns DzTexture The opacity map for this material.
     */
    getOpacityMap(): DzTexture;

    /**
     * @returns DzBoolProperty The property that controls the render priority propagation for this material.
     */
    getPropagatePriorityControl(): DzBoolProperty;

    /**
     * @returns DzEnumProperty The property that controls the render priority for this material.
     */
    getRenderPriorityControl(): DzEnumProperty;

    /**
     * @returns any[] A list of the shader languages employed by this material.
     * @since 4.20.0.6
     */
    getShaderLanguages(): any[]; // Array

    /**
     * @returns any[] A list of the shapes this material is on.
     */
    getShapeList(): any[]; // Array

    /**
     * @returns DzFloatProperty The property that controls the smoothing angle for this material.
     */
    getSmoothAngleControl(): DzFloatProperty;

    /**
     * @returns DzBoolProperty The property that controls whether smoothing is enabled for this material.
     */
    getSmoothControl(): DzBoolProperty;

    /**
     * @returns number The current smoothing angle for the material.
     */
    getSmoothingAngle(): number; // Number

    /**
     * @returns any[] A list of (trimmed) tags on this material.
     * @since 4.7.1.29
     */
    getTags(): any[]; // Array

    /**
     * @returns DzStringProperty The property that holds the tags for this material.
     * @since 4.7.1.29
     */
    getTagsControl(): DzStringProperty;

    /**
     * @returns DzEnumProperty The property that controls the active UV set for this material.
     */
    getUVSetControl(): DzEnumProperty;

    /**
     * @returns boolean true if the material supports mapping of the Diffuse channel, otherwise false.
     */
    isColorMappable(): boolean; // Boolean

    /**
     * @returns boolean true if the material is currently drawn with a highlight, otherwise false.
     */
    isHighlighted(): boolean; // Boolean

    /**
     * @returns boolean true if the material supports mapping of the Opacity channel, otherwise false.
     */
    isOpacityMappable(): boolean; // Boolean

    /**
     * @returns boolean true if this material is opaque, otherwise false.
     */
    isOpaque(): boolean; // Boolean

    /**
     * @returns boolean Whether or not this material should propagate its render priority up to all the nodes that use it.
     */
    isPropagateRenderPriorityToNodesEnabled(): boolean; // Boolean

    /**
     * @returns boolean true if the material is selected, otherwise false.
     */
    isSelected(): boolean; // Boolean

    /**
     * @returns boolean true if smoothing is enabled for the material, otherwise false.
     */
    isSmoothingOn(): boolean; // Boolean

    /**
     * Marks the asset as being modified. Makes the current author the author of the file.
     * @returns boolean true if the asset was successfully marked as modified, otherwise false.
     */
    modifyAsset(): boolean; // Boolean

    /**
     * Marks the asset as being modified. Makes the current author the author of the file. Sets the file URI for the asset to the given URI.
     * @param newUri DzUri - The new file URI to set for the asset.
     * @returns boolean true if the asset was successfully marked as modified, otherwise false.
     */
    modifyAsset(newUri: DzUri): boolean; // Boolean

    /**
     * @returns boolean
     */
    needsPtex(): boolean; // Boolean

    /**
     * @returns boolean true if the rendering geometry needs the additional dPds and dPdsM parameters for shaders, otherwise false.
     */
    needsTangentSpaceParams(): boolean; // Boolean

    /**
     * Set the selection state for this material.
     * @param onOff boolean - If true, the material will be selected. If false, the material will be deselected.
     */
    select(onOff: boolean): void;

    /**
     * Set the 'baked' shader map for this material. This overrides any current material settings and just draws the map. This is useful for representing the results of off-line shaders that can not be represented in OpenGL - the results of the shader are 'baked' onto a texture map, and then applied to the material with this function.
     * @param img DzTexture - The image that will be applied to the material instead of the current material settings. If NULL, the current baked map is cleared and the material is returned to using its current settings.
     */
    setBakedMap(img: DzTexture): void;

    /**
     * Set the opacity value for this material.
     * @param val number
     */
    setBaseOpacity(val: number): void;

    /**
     * Set the color ('texture') map for this material.
     * @param img DzTexture
     */
    setColorMap(img: DzTexture): void;

    /**
     * Set the diffuse color for this material.
     * @param color Color
     */
    setDiffuseColor(color: Color): void;

    /**
     * @param width number - The desired width for the line end.
     * @since 4.11.0.76
     */
    setLineEndWidth(width: number): void;

    /**
     * Sets whether or not smoothing is enabled for the material.
     * @param color Color - The color to use for preview lines.
     * @since 4.11.0.76
     */
    setLinePreviewColor(color: Color): void;

    /**
     * @param width number - The desired width for the line start.
     * @since 4.11.0.76
     */
    setLineStartWidth(width: number): void;

    /**
     * @param width number - The desired width for the line UV.
     * @since 4.11.0.109
     */
    setLineUVWidth(width: number): void;

    /**
     * Set the opacity map for this material.
     * @param img DzTexture
     */
    setOpacityMap(img: DzTexture): void;

    /**
     * Sets the smoothing angle for the material. This only has effect on the material if smoothing is enabled.
     * @param angle number - The smoothing angle for the material. Any edges on the mesh where angle of the normals of the adjacent facets is less than this value will be smoothed. Higher values mean more smoothing, lower values mean less smoothing.
     */
    setSmoothingAngle(angle: number): void;

    /**
     * Sets whether or not smoothing is enabled for the material.
     * @param onOff boolean - If true, smoothing is applied according to the smoothing angle. If false, no smoothing is applied to the material.
     */
    setSmoothingOn(onOff: boolean): void;

    /**
     * Default implementation returns true if the materials are the same class.
     * @param otherMat DzMaterial
     * @returns boolean true if these materials are using the same shaders, otherwise false.
     */
    shadersMatch(otherMat: DzMaterial): boolean; // Boolean

    /**
     * @returns boolean true if this material should always embed into a DSON scene, otherwise false.
     */
    shouldAlwaysEmbed(): boolean; // Boolean

    /**
     * Causes this material to be drawn with a highlight based on the styles current highlight color. This is used by material selection tools, etc, to give visual feedback to the user about a material in the viewport.
     */
    startDrawHighlight(): void;

    /**
     * Causes this material to stop being drawn with a highlight.
     */
    stopDrawHighlight(): void;

    /**
     * Deprecated
     * @returns number
     */
    getNumUVMaps(): number; // Number

    /* Signals */

    /**
     * Emitted when the material has been modified.
     */
    assetModified: ISignal<void>;

    /**
     * Emitted after the material has been saved.
     */
    assetWasSaved: ISignal<void>;

    /**
     * Transmitted when the baked map of this material changes.
     */
    bakedMapChanged: ISignal<void>;

    /**
     * Emitted when the UV line width changes
     * @since 4.11.0.109
     */
    lineUVWidthChanged: ISignal<void>;

    /**
     * Emitted when the start or end line width changes
     * @since 4.11.0.76
     */
    lineWidthChanged: ISignal<void>;

    /**
     * Transmitted when the selection state of this material changes.
     * @param mat DzMaterial
     * @param onOff boolean
     */
    selectionStateChanged: ISignal<DzMaterial, boolean>;

    /**
     * Transmitted when one of the values of this material changes.
     */
    settingsChanged: ISignal<void>;

    /**
     * Transmitted when the smoothing settings of this material change.
     */
    smoothingChanged: ISignal<void>;

    /**
     * Emitted when the tags on this material change.
     */
    tagsChanged: ISignal<void>;

    /**
     * Transmitted when the uv settings of this material change.
     */
    uvsChanged: ISignal<void>;

    /* Undocumented Augment Members */

    /** @undocumented */
    addedTo(shape: DzShape): void;

    /** @undocumented */
    allowsAutoBake(): boolean;

    /** @undocumented */
    connectForAutoBake(): void;

    /** @undocumented */
    createProperties(copyFrom: DzMaterial): void;

    /** @undocumented */
    followMaterialChanged(): void;

    /** @undocumented */
    getAssetType(): any;

    /** @undocumented */
    getFollowBlendControl(): DzFloatProperty;

    /** @undocumented */
    getFollowMaterial(): DzMaterial;

    /** @undocumented */
    getRenderPriority(): number;

    /** @undocumented */
    init(doCreateProperties: boolean, copyFrom: DzMaterial): void;

    /** @undocumented */
    isRenderingAsCoShader(): boolean;

    /** @undocumented */
    multiTexturingSupported(): boolean;

    /** @undocumented */
    propagateRenderPriorityToNodes(): void;

    /** @undocumented */
    removedFrom(shape: DzShape): void;

    /** @undocumented */
    requestAutoBake(): void;

    /** @undocumented */
    resetBakedMap(): void;

    /** @undocumented */
    setCoShader(settings: DzRenderSettings, info: DzCoShaderInfo): void;

    /** @undocumented */
    setFollowMaterial(mat: DzMaterial): void;

    /** @undocumented */
    setGL(style: DzDrawStyle): void;

    /** @undocumented */
    setGLBakeMat(style: DzDrawStyle): void;

    /** @undocumented */
    setGLHighlight(style: DzDrawStyle): void;

    /** @undocumented */
    setGLMat(style: DzDrawStyle): void;

    /** @undocumented */
    setRender(settings: DzRenderSettings): void;

    /** @undocumented */
    setRenderPriority(priority: number): void;

    /** @undocumented */
    setRenderPriority(priority: number): void;

    /** @undocumented */
    setRenderPriority(priority: number): void;

    /** @undocumented */
    setRenderPriority(priority: number): void;

    /** @undocumented */
    setShader(settings: DzRenderSettings): void;

    /** @undocumented */
    setTextureConvertShader(settings: DzRenderSettings): void;

    /** @undocumented */
    setTextureConvertTokens(settings: DzRenderSettings): number;

    /** @undocumented */
    shapeListIterator(): DzShapeListIterator;

    /** @undocumented */
    toQObject(): QObject;

    /** @undocumented */
    toQObject(): any;

    /** @undocumented */
    toQObject(): QObject;

    /** @undocumented */
    toQObject(): any;

    /** @undocumented */
    triggerAutoBake(): void;

    /** @undocumented */
    unsetGL(style: DzDrawStyle): void;

    /** @undocumented */
    unsetGLBakeMat(style: DzDrawStyle): void;

    /** @undocumented */
    unsetGLHighlight(style: DzDrawStyle): void;

    /** @undocumented */
    unsetGLMat(style: DzDrawStyle): void;

    /** @undocumented */
    unsetRender(settings: DzRenderSettings): void;

    /** @undocumented */
    updateUVList(): void;

    /** @undocumented */
    getShouldRenderAsCurve(): boolean;

    /** @undocumented */
    setRenderAsCurve(onOff: boolean): void;

    /** @undocumented */
    currentValueInAnimation(): boolean;

    /** @undocumented */
    getMaterialIncludeProperties(): DzProperty[];

    /** @undocumented */
    setWriteAnimation(onOff: boolean): void;

    /** @undocumented */
    setWriteInstances(onOff: boolean): void;

    /** @undocumented */
    writeAnimations(prop: DzProperty, io: any, foundAnimation: boolean): boolean;

    /** @undocumented */
    writeAnimations(io: any): boolean;

    /** @undocumented */
    writeAnimations(prop: DzProperty, io: any, foundAnimation: boolean): boolean;

    /** @undocumented */
    writeAnimations(io: any): boolean;

    /** @undocumented */
    writeMaterialInstances(io: any): boolean;

    /** @undocumented */
    writeUVSetAnimation(mat: DzMaterial, io: any, propRef: QString): boolean;

    /** @undocumented */
    activate(): void;

    /** @undocumented */
    aimCamera(view: Dz3DViewport): void;

    /** @undocumented */
    clearHighlighting(): void;

    /** @undocumented */
    contextMenu(view: Dz3DViewport, menu: DzMenu, pos: QPoint): void;

    /** @undocumented */
    deactivate(): void;

    /** @undocumented */
    draw(style: DzDrawStyle, view: Dz3DViewport): void;

    /** @undocumented */
    drawMaterial(mat: DzMaterial): void;

    /** @undocumented */
    drawSelectedMaterials(): void;

    /** @undocumented */
    frameCamera(view: Dz3DViewport): void;

    /** @undocumented */
    getPane(parent: QWidget): QWidget;

    /** @undocumented */
    getPropertyFromUser(imageOnly: boolean, mat: DzMaterial): DzProperty;

    /** @undocumented */
    getSelectionBoundingBox(box: DzBox3): void;

    /** @undocumented */
    getSurfacePane(): DzSurfacesPane;

    /** @undocumented */
    menuSelection(id: number): void;

    /** @undocumented */
    mouseLeave(view: Dz3DViewport, e: QEvent): void;

    /** @undocumented */
    mouseOver(view: Dz3DViewport, e: QMouseEvent, accel: number): void;

    /** @undocumented */
    mousePress(view: Dz3DViewport, e: QMouseEvent, accel: number): boolean;

    /** @undocumented */
    rebuildSelectedMats(): void;

    /** @undocumented */
    selectAllMaterials(match: DzMaterial): void;

    /** @undocumented */
    selectAllMaterials(onOff: boolean, match: DzMaterial, useTextureMap: boolean, prop: DzProperty): void;

    /** @undocumented */
    selectAllMaterials(match: DzMaterial): void;

    /** @undocumented */
    selectAllMaterials(onOff: boolean, match: DzMaterial, useTextureMap: boolean, prop: DzProperty): void;

    /** @undocumented */
    setHighlightMaterial(mat: DzMaterial, view: Dz3DViewport): void;

    /** @undocumented */
    setHighlightSelected(onOff: boolean): void;

    /** @undocumented */
    setHighlightWidth(width: number): void;

    /** @undocumented */
    stylize(): void;

    /** @undocumented */
    updateNodeSelection(): void;

    /** @undocumented */
    whatsThisText(): QString;

    /** @undocumented */
    buildSelectionGroup(parent: QWidget): void;

    /** @undocumented */
    highlightSelectedChanged(): void;

    /** @undocumented */
    initOptions(): void;

    /** @undocumented */
    outlineWidthChanged(): void;
}
