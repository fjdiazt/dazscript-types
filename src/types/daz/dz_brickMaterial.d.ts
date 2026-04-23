/**
 * Material that uses Shader Bricks to generate its shader.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/brickmaterial_dz
 */
declare class DzBrickMaterial extends defaultbrickuser_dz {

    /* Constructors */

    constructor();

    /* Static Methods */

    /**
     * Converts the given default material to a brick material.
     * @param mat DzDefaultMaterial - The material to be converted.
     * @returns DzBrickMaterial
     */
    static convertDefaultMaterial(mat: DzDefaultMaterial): DzBrickMaterial;

    /**
     * Converts the given Uber Iray material to a brick material.
     * @param mat DzMaterial - The material to be converted.
     * @returns DzBrickMaterial
     */
    static convertUberIrayMaterial(mat: DzMaterial): DzBrickMaterial;

    /* Methods */

    /**
     * Adds the given brick to this brick material.
     * @param brick DzShaderBrick - The brick to add.
     * @returns number The id of the added brick.
     */
    addBrick(brick: DzShaderBrick): number; // Number

    /**
     * @returns boolean true if this brick material allows auto-baking, otherwise false.
     */
    allowsAutoBake(): boolean; // Boolean

    /**
     * Apply a copy of this material to all selected materials in the scene.
     */
    applyToScene(): void;

    /**
     * Deletes all bricks in this material.
     */
    deleteAllBricks(): void;

    /**
     * Deletes the brick with the given id from the material.
     * @param id number - The id of the brick to delete.
     */
    deleteBrick(id: number): void;

    /**
     * Deletes the given brick from the material.
     * @param brick DzShaderBrick - The brick to delete.
     */
    deleteBrick(brick: DzShaderBrick): void;

    /**
     * Takes this brick material out of edit mode.
     */
    endEditMode(): void;

    /**
     * @param id number - The id of the desired brick.
     * @returns DzShaderBrick The brick at the given id.
     */
    getBrick(id: number): DzShaderBrick;

    /**
     * @returns any[] A list of the ids for the bricks associated with this brick material.
     */
    getBrickIDs(): any[]; // Array

    /**
     * @param i number - The index of the desired brick set.
     * @returns DzBrickSet The brick set at the specified location.
     */
    getBrickSet(i: number): DzBrickSet;

    /**
     * @returns string The user name of this brick material.
     */
    getBrickUserName(): string; // String

    /**
     * @returns string The extension for this brick material.
     */
    getExtension(): string; // String

    /**
     * @returns number The number of brick sets in this brick material.
     */
    getNumBrickSets(): number; // Number

    /**
     * Invalidates the brick sets, causing them to be rebuilt.
     */
    invalidateSets(): void;

    /**
     * @returns boolean true if this brick material is currently in edit mode, otherwise false.
     */
    isInEditMode(): boolean; // Boolean

    /**
     * Sets the user name of this brick material.
     * @param name string - The new name for this brick material.
     */
    setBrickUserName(name: string): void;

    /**
     * Sets the name for this brick material.
     * @param name string - The new name to be used.
     */
    setMaterialName(name: string): void;

    /**
     * Sets whether or not this brick material needs Ptex parameters.
     * @param onoff boolean - If true, this brick material needs Ptex parameters.
     */
    setNeedsPtexParams(onoff: boolean): void;

    /**
     * Sets whether this brick material needs tangent space parameters.
     * @param onoff boolean - If true, this brick material will need tangent space parameters.
     */
    setNeedsTangentSpaceParams(onoff: boolean): void;

    /**
     * Puts this brick material in edit mode.
     */
    startEditMode(): void;

    /**
     * Sets whether the identifier is updated when this brick material is invalidated.
     * @param onOff boolean - If true, the identifier will be updated when this brick material is invalidated.
     */
    updateIdentifierOnSetInvalidate(onOff: boolean): void;

    /**
     * @returns boolean true if this brick material uses local shader space.
     */
    usesLocalShaderSpace(): boolean; // Boolean

    /* Signals */

    /**
     * Emitted when a brick is added to this brick material.
     * @param brick DzShaderBrick - The brick that was added.
     */
    brickAdded: ISignal<DzShaderBrick>;

    /**
     * Emitted when a brick is removed from this brick material.
     * @param brick DzShaderBrick - The brick that was removed.
     */
    brickRemoved: ISignal<DzShaderBrick>;

    /**
     * Emitted when file generation is finished.
     */
    generateFilesFinished: ISignal<void>;

    /**
     * Emitted when file generation is started.
     */
    generateFilesStarted: ISignal<void>;

    /* Undocumented Augment Members */

    /** @undocumented */
    moveBrick(brick: number, brickUser: IDzBrickUser): any;

    /** @undocumented */
    getIdentifier(): any;

    /** @undocumented */
    setIdentifier(uuid: QUuid): any;

    /** @undocumented */
    fromScene(): any;

    /** @undocumented */
    unsetRender(settings: DzRenderSettings): any;

    /** @undocumented */
    removeSet(brickSet: DzBrickSet): any;

    /** @undocumented */
    brickIDChanged(brickId: number): any;
}
