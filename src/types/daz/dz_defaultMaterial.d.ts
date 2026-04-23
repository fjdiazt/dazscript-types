/**
 * The default RenderMan Shader Language (RSL) based implementation of a material.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/defaultmaterial_dz
 */
declare class DzDefaultMaterial extends DzRefCountedItem {

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * @returns Color The ambient color for this material.
     */
    getAmbientColor(): Color;

    /**
     * @returns DzColorProperty The property that controls ambient color.
     */
    getAmbientColorControl(): DzColorProperty;

    /**
     * @returns DzTexture The ambient color map for this material.
     */
    getAmbientColorMap(): DzTexture;

    /**
     * @returns number The ambient strength for this material.
     */
    getAmbientStrength(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls ambient strength.
     */
    getAmbientStrengthControl(): DzFloatProperty;

    /**
     * @returns DzTexture The ambient strength map for this material.
     */
    getAmbientValueMap(): DzTexture;

    /**
     * @returns DzFloatProperty The property that controls bump mapping.
     */
    getBumpControl(): DzFloatProperty;

    /**
     * @returns DzTexture The bump map for this material.
     */
    getBumpMap(): DzTexture;

    /**
     * @returns number The maximum bump for this material.
     */
    getBumpMax(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls the bump mapping maximum.
     */
    getBumpMaxControl(): DzFloatProperty;

    /**
     * @returns number The minimum bump for this material.
     */
    getBumpMin(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls the bump mapping minimum.
     */
    getBumpMinControl(): DzFloatProperty;

    /**
     * @returns number The bump strength for this material.
     */
    getBumpStrength(): number; // Number

    /**
     * @returns DzColorProperty The property that controls diffuse color.
     */
    getDiffuseColorControl(): DzColorProperty;

    /**
     * @returns number The diffuse strength for this material.
     */
    getDiffuseStrength(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls diffuse strength.
     */
    getDiffuseStrengthControl(): DzFloatProperty;

    /**
     * @returns DzTexture The diffuse strength map for this material.
     */
    getDiffuseValueMap(): DzTexture;

    /**
     * @returns DzFloatProperty The property that controls displacement mapping.
     */
    getDisplacementControl(): DzFloatProperty;

    /**
     * @returns DzTexture The displacement map for this material.
     */
    getDisplacementMap(): DzTexture;

    /**
     * @returns number The maximum displacement (displacement that white maps to) for this material.
     */
    getDisplacementMax(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls the displacement mapping maximum.
     */
    getDisplacementMaxControl(): DzFloatProperty;

    /**
     * @returns number The minimum displacement for this material.
     */
    getDisplacementMin(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls the displacement mapping minimum.
     */
    getDisplacementMinControl(): DzFloatProperty;

    /**
     * @returns number The displacement strength for this material.
     */
    getDisplacementStrength(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls glossiness.
     */
    getGlossinessControl(): DzFloatProperty;

    /**
     * @returns number The glossines strength for this material.
     */
    getGlossinessStrength(): number; // Number

    /**
     * @returns DzTexture The glossines strength map for this material.
     */
    getGlossinessValueMap(): DzTexture;

    /**
     * @returns number The horizontal offset value.
     */
    getHorizontalOffset(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls the horizontal offset of an image.
     */
    getHorizontalOffsetControl(): DzFloatProperty;

    /**
     * @returns number The number of horizontal tiles.
     */
    getHorizontalTiles(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls the horizontal tiling of an image.
     */
    getHorizontalTilesControl(): DzFloatProperty;

    /**
     * @returns number The index of refraction for this material.
     */
    getIndexOfRefraction(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls the index of refraction.
     */
    getIndexOfRefractionControl(): DzFloatProperty;

    /**
     * @returns DzBoolProperty The property that controls whether multiplication through opacity is enabled.
     */
    getMultThroughOpacityControl(): DzBoolProperty;

    /**
     * @returns DzTexture Image for the nomal map.
     */
    getNormalValueMap(): DzTexture;

    /**
     * @returns DzImageProperty The property that controls the normal value map.
     */
    getNormalValueMapControl(): DzImageProperty;

    /**
     * @returns DzFloatProperty The property that controls opacity.
     */
    getOpacityControl(): DzFloatProperty;

    /**
     * @returns Color The reflection color for this material.
     */
    getReflectionColor(): Color;

    /**
     * @returns DzColorProperty The property that controls reflection color.
     */
    getReflectionColorControl(): DzColorProperty;

    /**
     * @returns DzTexture The reflection map for this material.
     */
    getReflectionMap(): DzTexture;

    /**
     * @returns number The reflection strength for this material.
     */
    getReflectionStrength(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls reflection strength.
     */
    getReflectionStrengthControl(): DzFloatProperty;

    /**
     * @returns DzTexture The reflection strength map for this material.
     */
    getReflectionValueMap(): DzTexture;

    /**
     * @returns Color The refraction color for this material.
     */
    getRefractionColor(): Color;

    /**
     * @returns DzColorProperty The property that controls refraction color.
     */
    getRefractionColorControl(): DzColorProperty;

    /**
     * @returns DzTexture The refraction map for this material.
     */
    getRefractionColorMap(): DzTexture;

    /**
     * @returns number The refraction strength for this material.
     */
    getRefractionStrength(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls refraction strength.
     */
    getRefractionStrengthControl(): DzFloatProperty;

    /**
     * @returns DzTexture The refraction strength map for this material.
     */
    getRefractionValueMap(): DzTexture;

    /**
     * @returns Color The scatter color for this material.
     */
    getScatterColor(): Color;

    /**
     * @returns DzColorProperty The property that controls scatter color.
     */
    getScatterColorControl(): DzColorProperty;

    /**
     * @returns DzTexture The scatter map for this material.
     */
    getScatterColorMap(): DzTexture;

    /**
     * @returns Color The sheen color for this material.
     */
    getSheenColor(): Color;

    /**
     * @returns DzColorProperty The property that controls sheen color.
     */
    getSheenColorControl(): DzColorProperty;

    /**
     * @returns DzTexture The sheen map for this material.
     */
    getSheenColorMap(): DzTexture;

    /**
     * @returns Color The specular color for this material.
     */
    getSpecularColor(): Color;

    /**
     * @returns DzColorProperty The property that controls specular color.
     */
    getSpecularColorControl(): DzColorProperty;

    /**
     * @returns DzTexture The specular color map for this material.
     */
    getSpecularColorMap(): DzTexture;

    /**
     * @returns number The specular strength for this material.
     */
    getSpecularStrength(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls specular strength.
     */
    getSpecularStrengthControl(): DzFloatProperty;

    /**
     * @returns DzTexture The specular strength map for this material.
     */
    getSpecularValueMap(): DzTexture;

    /**
     * @returns number The surface type for this material.
     */
    getSurfaceType(): number; // Number

    /**
     * @returns DzEnumProperty The property that controls surface type.
     */
    getSurfaceTypeControl(): DzEnumProperty;

    /**
     * @returns number The thickness for this material.
     */
    getThickness(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls thickness.
     */
    getThicknessControl(): DzFloatProperty;

    /**
     * @returns DzTexture The thickness map for this material.
     */
    getThicknessValueMap(): DzTexture;

    /**
     * @returns number The vertical offset value.
     */
    getVerticalOffset(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls the vertical offset of an image.
     */
    getVerticalOffsetControl(): DzFloatProperty;

    /**
     * @returns number The number of vertical tiles.
     */
    getVerticalTiles(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls the vertical tiling of an image.
     */
    getVerticalTilesControl(): DzFloatProperty;

    /**
     * @returns boolean The value of the multiply through opacity parameter.
     */
    isMultThroughOpacity(): boolean; // Boolean

    /**
     * @returns boolean Whether the renderman geometry needs the additional dPds adm dPdsM parameters,used for some shaders. This is true if the material has a normal map and it is in tangent space
     */
    needsTangentSpaceParams(): boolean; // Boolean

    /**
     * Set the ambient color for this material.
     * @param color Color - The new ambient color for the material.
     */
    setAmbientColor(color: Color): void;

    /**
     * Set the ambient color map for this material.
     * @param img DzTexture - The new ambient color map for the material.
     */
    setAmbientColorMap(img: DzTexture): void;

    /**
     * Set the ambient strength for this material.
     * @param val number - The new ambient strength for the material.
     */
    setAmbientStrength(val: number): void;

    /**
     * Set the ambient strength map for this material.
     * @param img DzTexture - The new ambient strength map for this material.
     */
    setAmbientValueMap(img: DzTexture): void;

    /**
     * Set the map for the bump strength channel.
     * @param img DzTexture - The new bump map for this material.
     */
    setBumpMap(img: DzTexture): void;

    /**
     * Set the maximum bump for this material.
     * @param val number - The new bump maximum
     */
    setBumpMax(val: number): void;

    /**
     * Set the minimum bump for this material.
     * @param val number - The new bump minimum.
     */
    setBumpMin(val: number): void;

    /**
     * Set the bump strength for this material.
     * @param val number - The new bump strength for this material.
     */
    setBumpStrength(val: number): void;

    /**
     * Set the diffuse strength for this material.
     * @param val number - The new diffuse strength for the material.
     */
    setDiffuseStrength(val: number): void;

    /**
     * Set the diffuse strength map for this material.
     * @param img DzTexture - The new diffuse strength map for the material.
     */
    setDiffuseValueMap(img: DzTexture): void;

    /**
     * Set the displacement map for this material.
     * @param img DzTexture - The new displacement map for the material.
     */
    setDisplacementMap(img: DzTexture): void;

    /**
     * Set the maximum displacement for this material.
     * @param val number - The new maximum displacement for this material.
     */
    setDisplacementMax(val: number): void;

    /**
     * Set the minimum displacement for this material.
     * @param val number - The new minimum displacement for this material.
     */
    setDisplacementMin(val: number): void;

    /**
     * Set the displacement strength for this material.
     * @param val number - The new displacement strength for this material
     */
    setDisplacementStrength(val: number): void;

    /**
     * Set glossiness for this material.
     * @param size number - The new highlight size (glossiness) for the material.
     */
    setGlossinessStrength(size: number): void;

    /**
     * Set glossiness value map for this material.
     * @param img DzTexture - A pointer to the new glossiness value map for the material. NULL to clear the map.
     */
    setGlossinessValueMap(img: DzTexture): void;

    /**
     * Set the horizontal offset for the material
     * @param offset number - The value of the horizontal offset in each tile for the material
     */
    setHorizontalOffset(offset: number): void;

    /**
     * Set the horizontal tiling for the material
     * @param tiles number - The number of horizontal tiles for the material
     */
    setHorizontalTiles(tiles: number): void;

    /**
     * Set the index of refraction for this material.
     * @param val number - The new index of refraction for the material.
     */
    setIndexOfRefraction(val: number): void;

    /**
     * Set the multiply through opacity parameter. If true, Specular highlights are multiplied through the opacity of the material (i.e. a transparent material will not show specular highlights). If false, specular highlights can contribute to the local opacity of the material (i.e. transparent objects show highlights)
     * @param onOff boolean - Whether or not specularity is multiplied through opacity.
     */
    setMultThroughOpacity(onOff: boolean): void;

    /**
     * Set the normal map for this material.
     * @param img DzTexture - A pointer to the new map map for the material. NULL to clear the map.
     */
    setNormalValueMap(img: DzTexture): void;

    /**
     * Set the reflection color for this material.
     * @param color Color - The new reflection color for the material.
     */
    setReflectionColor(color: Color): void;

    /**
     * Set the reflection map for this material.
     * @param img DzTexture - The new reflection map for the material.
     */
    setReflectionMap(img: DzTexture): void;

    /**
     * Set the reflection strength for this material.
     * @param val number - The new reflection strength for the material.
     */
    setReflectionStrength(val: number): void;

    /**
     * Set reflection strength map for this material.
     * @param img DzTexture - The new reflection strength map for the material.
     */
    setReflectionValueMap(img: DzTexture): void;

    /**
     * Set the refraction color for this material.
     * @param color Color - The new refraction color for the material.
     */
    setRefractionColor(color: Color): void;

    /**
     * Set the refraction color map for this material.
     * @param img DzTexture - The new refraction color map for the material.
     */
    setRefractionColorMap(img: DzTexture): void;

    /**
     * Set the refraction strength for this material.
     * @param val number - The new refraction strength for the material.
     */
    setRefractionStrength(val: number): void;

    /**
     * Set the refraction strength map for this material.
     * @param img DzTexture - A pointer to the new refraction strength map for the material. NULL to clear the map.
     */
    setRefractionValueMap(img: DzTexture): void;

    /**
     * Set the scatter color for this material.
     * @param color Color - The new scatter color for the material.
     */
    setScatterColor(color: Color): void;

    setScatterColorMap(): void;

    /**
     * Set the sheen color for this material.
     * @param color Color - The new sheen color for the material.
     */
    setSheenColor(color: Color): void;

    setSheenColorMap(): void;

    /**
     * Set base specular color for this material.
     * @param color Color - The new specular color for the material
     */
    setSpecularColor(color: Color): void;

    /**
     * Set the specular color map for this material.
     * @param img DzTexture - A pointer to the new specular color map for the material. NULL to clear the map.
     */
    setSpecularColorMap(img: DzTexture): void;

    /**
     * Set base specular strength for this material.
     * @param size number - The new specular strength for the material.
     */
    setSpecularStrength(size: number): void;

    /**
     * Set specular strength map for this material.
     * @param img DzTexture - A pointer to the new specular strength map for the material. NULL to clear the map.
     */
    setSpecularValueMap(img: DzTexture): void;

    /**
     * Set the surface type for this material.
     * @param val number - The index of the surface type for the material.
     */
    setSurfaceType(val: number): void;

    setThickness(): void;

    setThicknessValueMap(): void;

    /**
     * Set the vertical offset for the material
     * @param offset number - The value of the vertical offset in each tile for the material
     */
    setVerticalOffset(offset: number): void;

    /**
     * Set the vertical tiling for the material
     * @param tiles number - The number of vertical tiles for the material.
     */
    setVerticalTiles(tiles: number): void;

    /* Undocumented Augment Members */

    /** @undocumented */
    elementID: number;

    /** @undocumented */
    renderPriority: number;

    /** @undocumented */
    propertyListInTreeChanged(): any; // TODO ;

    /** @undocumented */
    privatePropertyListInTreeChanged(): any; // TODO ;

    /** @undocumented */
    mergeElementSignal(): any; // TODO ;

    /** @undocumented */
    duplicateElementSignal(): any; // TODO ;

    /** @undocumented */
    createElementCopySignal(): any; // TODO ;

    /** @undocumented */
    moveDataItemToIndex(): any; // TODO ;

    /** @undocumented */
    findDataItemIndex(): any; // TODO ;

    /** @undocumented */
    duplicateMissingCustomDataWithContext(): any; // TODO ;

    /** @undocumented */
    duplicateMissingPropertiesWithContext(): any; // TODO ;

    /** @undocumented */
    duplicateMissingPrivatePropertiesWithContext(): any; // TODO ;

    /** @undocumented */
    doMergeElement(): any; // TODO ;

    /** @undocumented */
    doDuplicateElement(): any; // TODO ;

    /** @undocumented */
    mergeElement(): any; // TODO ;

    /** @undocumented */
    duplicateElement(): any; // TODO ;

    /** @undocumented */
    createElementCopy(): any; // TODO ;

    /** @undocumented */
    calcNeedsPtexSignal(): any; // TODO ;

    /** @undocumented */
    tagsChanged(): any; // TODO ;

    /** @undocumented */
    isOpaque(): boolean;

    /** @undocumented */
    getTags(): any; // TODO ;

    /** @undocumented */
    getTagsControl(): any; // TODO ;

    /** @undocumented */
    needsPtex(): any; // TODO ;

    /** @undocumented */
    duplicateOrDefaultMaterial(): any; // TODO ;

    /** @undocumented */
    calcNeedsPtex(): any; // TODO ;
}
