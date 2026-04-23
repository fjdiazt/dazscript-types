/**
 * A container class for a geometry and related materials, etc.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/shape_dz
 */
declare class DzShape extends DzElement {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of GeometryType.
     */
    static BaseGeometry: number;

    /**
     * DAZ enum member of GeometryType.
     */
    static WorkingGeometry: number;

    /**
     * DAZ enum member of GeometryType.
     */
    static AssemblyGeometry: number;

    /* Constructors */

    constructor();

    /* Static Methods */

    /**
     * @param node DzNode - The node to get the current shape for.
     * @returns DzShape The current shape for node (if any), otherwise null.
     * @since 4.9.3.62
     */
    static getCurrentShapeForNode(node: DzNode): DzShape;

    /* Methods */

    /**
     * Adds the given material to the available material list for this shape. Also sets the currently active material index.
     * @param mat DzMaterial
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     */
    addMaterial(mat: DzMaterial): DzError;

    /**
     * Sets the selection status to false for all materials of this shape.
     */
    clearMaterialSelection(): void;

    /**
     * Creates a material face group and a default material.
     * @param name string - The name of the material face group (surface) to create.
     * @returns DzError DZ_NO_ERROR if a DzMaterialFaceGroup named name doesn't already exist on the shape (or can be created), and the shape has geometry, otherwise an appropriate error code.
     */
    createMaterial(name: string): DzError;

    /**
     * Finds a material on the shape by name.
     * @param materialName string - The name of the material face group to find the material for.
     * @returns DzMaterial The first material named materialName in the list of materials for the shape, otherwise null.
     */
    findMaterial(materialName: string): DzMaterial;

    /**
     * @param materialName string - The name of the material face group to find.
     * @returns number The index of the first material named materialName in the list of materials for the shape, -1 if no material with that name is found.
     */
    findMaterialIndex(materialName: string): number; // Number

    /**
     * @param mat DzMaterial - The (shared) material to find.
     * @returns number The index of the given material in the list, -1 if the material is not in the list for this shape.
     */
    findMaterialIndex(mat: DzMaterial): number; // Number

    /**
     * Attempts to find the materials named materialName.
     * @param materialName string - The name of the material face group (surface) to find.
     * @returns any[] A list of the materials named materialName.
     */
    findMaterials(materialName: string): any[]; // Array

    /**
     * @returns any[] A list of all materials for this shape.
     */
    getAllMaterials(): any[]; // Array

    /**
     * @returns any[] A list of all materials on this shape, ordered by render priority from highest to lowest.
     */
    getAllRenderPrioritizedMaterials(): any[]; // Array

    /**
     * @returns any[] A list of all selected materials in this shape.
     */
    getAllSelectedMaterials(): any[]; // Array

    /**
     * @returns DzGeometry The assembly geometry.
     */
    getAssemblyGeometry(): DzGeometry;

    /**
     * @param type number - The type of geometry to return.
     * @returns DzGeometry Geometry of the specified type if it exists, otherwise the geometry from the next previous stage that does exist.
     * @since 4.11.0.163
     */
    getCurrentGeometry(type?: number): DzGeometry;

    /**
     * @returns DzGeometry The geometry this shape references.
     */
    getGeometry(): DzGeometry;

    /**
     * @param which number - The index of the material in the list to return.
     * @returns DzMaterial If which is within range, the (shared) material at the index in the list for the shape, otherwise null.
     */
    getMaterial(which: number): DzMaterial;

    /**
     * @param isRender boolean - If true, the geometry will be render-quality.
     * @returns DzVertexMesh The version of the assembly geometry that can be modified.
     */
    getModifiableAssemblyGeom(isRender: boolean): DzVertexMesh;

    /**
     * @returns DzNode The node associated with this shape (if any), otherwise null.
     * @since 4.9.3.62
     */
    getNode(): DzNode;

    /**
     * @returns number The number of materials in the list for this shape.
     */
    getNumMaterials(): number; // Number

    /**
     * @param which number - The index of the material in the list of selected materials to return.
     * @returns DzMaterial If which is within range, the (shared) material in the selected list for the shape.
     */
    getSelectedMaterial(which: number): DzMaterial;

    /**
     * @returns boolean true if this shape assembles multiple geometries together, otherwise false.
     */
    hasAssemblyGeometry(): boolean; // Boolean

    /**
     * @returns boolean true if the shape needs to build differently for render than for OpenGL draw, otherwise false.
     */
    hasDifferentRenderThanDraw(): boolean; // Boolean

    /**
     * Inserts the given material at the given index in the material list, or appends to the list of index is < 0 or out of range. Also sets the currently active material index.
     * @param mat DzMaterial - The (shared) material to be added to the list of materials for this shape.
     * @param index number - The index at which to insert the material. If -1, it will be appended to the end of the material list.
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     */
    insertMaterial(mat: DzMaterial, index?: number): DzError;

    /**
     * Removes the given material from this shape. Also removes any references to this materal that existed on any faces.
     * @param mat DzMaterial - The (shared) material to be removed from the list of materials for this shape.
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     */
    removeMaterial(mat: DzMaterial): DzError;

    /**
     * @param materialName string - The name of the material face group to remove.
     * @param defaultName string - The name of the material face group to assign the removed materials faces to. If empty a default is used.
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     */
    removeMaterialByName(materialName: string, defaultName?: string): DzError;

    /**
     * Attempts to find and replace the given material with the new material.
     * @param currentMat DzMaterial - The (shared) material to be replaced.
     * @param newMat DzMaterial - The (shared) material to be added.
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     */
    replaceMaterial(currentMat: DzMaterial, newMat: DzMaterial): DzError;

    /* Signals */

    /**
     * Emitted when the mesh for this shape is about to be finalized.
     * @param mesh DzVertexMesh - The mesh that is about to be finalized.
     */
    aboutToFinalize: ISignal<DzVertexMesh>;

    /**
     * Emitted when a material associated with this shape is about to replaced with another material.
     * @param currentMat DzMaterial
     * @param newMat DzMaterial
     * @since 4.15.1.97
     */
    aboutToReplaceMaterial: ISignal<DzMaterial, DzMaterial>;

    /**
     * Emitted when the assembly has changed.
     */
    assemblyChanged: ISignal<void>;

    /**
     * Emitted when assembly needs to be checked before build.
     * @since 4.9.2.23
     */
    assemblyNeedsConfigurationCheck: ISignal<void>;

    /**
     * Emitted when the geometry referenced by this shape changes or is swapped out.
     */
    geomChanged: ISignal<void>;

    /**
     * Emitted after a material has been added to the shape.
     * @param mat DzMaterial - The material that was added to the shape.
     */
    materialAdded: ISignal<DzMaterial>;

    /**
     * Emitted when a material associated with this shape changes.
     */
    materialChanged: ISignal<void>;

    /**
     * Emitted after a material has been added to or removed from the shape.
     */
    materialListChanged: ISignal<void>;

    /**
     * Emitted after a material has been removed from the shape.
     * @param mat DzMaterial - The material that was removed from the shape.
     */
    materialRemoved: ISignal<DzMaterial>;

    /**
     * Emitted when a material associated with this shape is replaced with another material.
     * @param oldMat DzMaterial
     * @param newMat DzMaterial
     * @since 4.15.1.97
     */
    materialReplaced: ISignal<DzMaterial, DzMaterial>;

    /**
     * Emitted after a material used by this shape is selected.
     * @param mat DzMaterial - The material that was selected.
     */
    materialSelected: ISignal<DzMaterial>;

    /**
     * Emitted after a material used by this shape is selected or deselected.
     */
    materialSelectionChanged: ISignal<void>;

    /**
     * Emitted after a material used by this shape is deselected.
     * @param mat DzMaterial - The material that was deselected.
     */
    materialUnselected: ISignal<DzMaterial>;

    /**
     * Emitted when the smoothing settings for the shape have changed.
     */
    smoothingChanged: ISignal<void>;

    /**
     * Emitted when subdivision for the shape has changed.
     */
    subdivisonChanged: ISignal<void>;

    /**
     * Emitted when the current UV set has changed.
     */
    uvsChanged: ISignal<void>;

    /**
     * Emitted when vertex selection for the shape has changed.
     */
    vertexSelectionChanged: ISignal<void>;

    /* Undocumented Augment Members */

    /** @undocumented */
    addRigidityGroup(group: DzRigidityGroup): void;

    /** @undocumented */
    addShapeInstance(instance: DzAbstractShapeInstance): void;

    /** @undocumented */
    buildRegionMaps(): void;

    /** @undocumented */
    buildRegionMapsRecurse(region: DzGeometryRegion): void;

    /** @undocumented */
    draw(style: DzDrawStyle, wsGeom: DzGeometry): void;

    /** @undocumented */
    findAssemblyMaterialIndex(mat: DzMaterial): number;

    /** @undocumented */
    findLeafRegion(regionName: string): DzGeometryRegion;

    /** @undocumented */
    findRigidityGroup(group: string): DzRigidityGroup;

    /** @undocumented */
    geomTopologyChanged(): void;

    /** @undocumented */
    geometryRegionChanged(): void;

    /** @undocumented */
    geometryRegionSelectionChanged(): void;

    /** @undocumented */
    getAllRenderAssemblyPrioritizedMaterials(prioritizedMaterials: DzMaterialPtr[]): void;

    /** @undocumented */
    getAssemblyMaterial(which: number): DzMaterial;

    /** @undocumented */
    getFacetToLeafMap(): any;

    /** @undocumented */
    getFacetMesh(): DzFacetMesh;

    /** @undocumented */
    getGeometryRegion(): DzGeometryRegion;

    /** @undocumented */
    getGeometryRegionLeafSelection(): DzGeometryRegion;

    /** @undocumented */
    getGeometryRegionSelection(): DzGeometryRegion;

    /** @undocumented */
    getLeafRegion(index: number): DzGeometryRegion;

    /** @undocumented */
    getModifiableGeom(isRender: boolean, currentCache: DzVertexMesh): DzVertexMesh;

    /** @undocumented */
    getNumAssemblyMaterials(): number;

    /** @undocumented */
    getNumFacetToRegionLeafValues(): number;

    /** @undocumented */
    getNumLeafRegions(): number;

    /** @undocumented */
    getNumRigidityGroups(): number;

    /** @undocumented */
    getNumSelectedMaterials(): number;

    /** @undocumented */
    getNumShapeInstances(): number;

    /** @undocumented */
    getRenderPrioritizedMaterials(inputMaterials: DzMaterialPtr[], prioritizedMaterials: DzMaterialPtr[]): void;

    /** @undocumented */
    getRigidityGroup(which: number): DzRigidityGroup;

    /** @undocumented */
    getRigidityGroups(): DzRigidityGroup[];

    /** @undocumented */
    getRigidityMap(): DzWeightMap;

    /** @undocumented */
    getShapeInstance(which: number): DzAbstractShapeInstance;

    /** @undocumented */
    getShapeInstance(): DzAbstractShapeInstance[];

    /** @undocumented */
    invalidateGeomCaches(): void;

    /** @undocumented */
    invalidateWorkingMesh(): void;

    /** @undocumented */
    isSubDivisionEnabled(): any;

    /** @undocumented */
    mergesSnapGeometry(): boolean;

    /** @undocumented */
    modifyGeometryAsset(): void;

    /** @undocumented */
    moveGeometryRegion(newShape: DzShape): void;

    /** @undocumented */
    rebuildBaseMap(whichUVSet: number): void;

    /** @undocumented */
    removeRigidityGroup(group: DzRigidityGroup): void;

    /** @undocumented */
    removeShapeInstance(instance: DzAbstractShapeInstance): boolean;

    /** @undocumented */
    render(settings: DzRenderSettings, wsGeom: DzGeometry): void;

    /** @undocumented */
    rigidityGroupIterator(): DzRigidityGroupListIterator;

    /** @undocumented */
    rigidityGroupListChanged(): void;

    /** @undocumented */
    rigidityMapChanged(): void;

    /** @undocumented */
    setGeometryRegion(region: DzGeometryRegion): void;

    /** @undocumented */
    setGeometryRegionLeafSelection(sel: DzGeometryRegion): void;

    /** @undocumented */
    setGeometryRegionSelection(sel: DzGeometryRegion): void;

    /** @undocumented */
    setRigidityMap(map: DzWeightMap): void;

    /** @undocumented */
    shapeInstancesIterator(): DzAbstractShapeInstanceListIterator;

    /** @undocumented */
    updateGeom(): void;

    /** @undocumented */
    updateMaterialSelection(mat: DzMaterial, onOff: boolean): void;

    /** @undocumented */
    updateMaterials(): void;

    /** @undocumented */
    updateRegionMap(): void;

    /** @undocumented */
    updateSmoothing(): void;

    /** @undocumented */
    updateUVs(): void;
}
