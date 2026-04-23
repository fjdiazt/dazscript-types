/**
 * A node for creating a single (heavy) clone of another node in the scene.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/geometryshellnode_dz
 */
declare class DzGeometryShellNode extends DzNode {

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * @param group DzFaceGroup - The face group to get the visibility control for.
     * @returns DzBoolProperty The property (if any) that controls the visibility of facets in the face group specified, otherwise null.
     * @since 4.16.1.37
     */
    findFacetGroupVisibilityControl(group: DzFaceGroup): DzBoolProperty;

    /**
     * @param name string - The name of the face group to get the visibility control for.
     * @returns DzBoolProperty The property (if any) that controls the visibility of facets in the face group named name, otherwise null.
     * @since 4.16.1.37
     */
    findFacetGroupVisibilityControl(name: string): DzBoolProperty;

    /**
     * @param name string - The name of the material to get the visibility control for.
     * @returns DzBoolProperty The property (if any) that controls the visibility of facets in the material named name, otherwise null.
     * @since 4.16.1.37
     */
    findMaterialGroupVisibilityControl(name: string): DzBoolProperty;

    /**
     * @param material DzMaterial
     * @returns DzBoolProperty
     */
    findMaterialGroupVisibilityControl(material: DzMaterial): DzBoolProperty;

    /**
     * @returns DzNodeProperty The property that controls selection of the node that this node is a shell of.
     */
    getShellNodeControl(): DzNodeProperty;

    /**
     * @returns DzNode The node being targeted by this node (if any), otherwise NULL.
     * @since 4.15.0.20
     */
    getTarget(): DzNode;

    /* Undocumented Augment Members */

    /** @undocumented */
    addFacetGroupVisiblity(name: string): void;

    /** @undocumented */
    addMaterialGroupVisiblity(name: string): void;

    /** @undocumented */
    createProperties(): void;

    /** @undocumented */
    getIcon(): QIcon;

    /** @undocumented */
    getPixmap(state: number): QPixmap;

    /** @undocumented */
    removeFacetGroupVisiblity(name: string): void;

    /** @undocumented */
    removeMaterialGroupVisiblity(name: string): void;

    /** @undocumented */
    setShellVisiblity(newMesh: DzFacetMesh): void;

    /** @undocumented */
    setUpFaceGroups(mesh: DzFacetMesh): void;

    /** @undocumented */
    setUpMaterials(mesh: DzFacetMesh): void;

    /** @undocumented */
    targetNodeChanged(): void;

    /** @undocumented */
    tgtCacheInvalidated(): void;
}
