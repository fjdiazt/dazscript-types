/**
 * The main object class.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/object_dz
 */
declare class DzObject extends DzElement {

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * Adds a modifier to the modifier stack.
     * @param modifier DzModifier - The modifier to add to this object's modifier stack.
     * @param index number - The position in the list to insert the modifer. If this is less than 0 (default), the modifier is appended to the end of the list.
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     */
    addModifier(modifier: DzModifier, index?: number): DzError;

    /**
     * Add a shape to this object.
     * @param shape DzShape - The shape that will be added to this object's list of possible shapes.
     * @param index number - The position in the list to insert the shape. If this is less than 0 (default), the shape is appended to the end of the list.
     * @returns DzError
     */
    addShape(shape: DzShape, index?: number): DzError;

    /**
     * @param name string - The name of the modifier to get.
     * @returns DzModifier The modifier in the stack with the given name (if any), otherwise NULL.
     */
    findModifier(name: string): DzModifier;

    /**
     * @param mod DzModifier - The modifier to find the index for.
     * @returns number The index of the modifier in the modifier stack (if any), otherwise -1.
     */
    findModifierIndex(mod: DzModifier): number; // Number

    /**
     * @param mod DzModifier - The modifier to find the index for.
     * @returns number The index of the modifier in the modifier stack (if any), otherwise -1.
     */
    findModifierIndexFromEnd(mod: DzModifier): number; // Number

    /**
     * @param node DzNode
     * @param isRender boolean
     */
    forceCacheUpdate(node: DzNode, isRender?: boolean): void;

    /**
     * @returns DzBox3 A world space bounding box for this object.
     */
    getBoundingBox(): DzBox3;

    /**
     * @returns DzVertexMesh The final world-space transformed mesh for the current shape.
     */
    getCachedGeom(): DzVertexMesh;

    /**
     * Get the current shape.
     * @returns DzShape The current shape this object is caching/drawing.
     */
    getCurrentShape(): DzShape;

    /**
     * @returns DzEnumProperty The property that controls the current shape of this object.
     */
    getGeometryControl(): DzEnumProperty;

    /**
     * @returns DzBox3 A local space bounding box for this object; cached by the last call to evaluate().
     */
    getLocalBoundingBox(): DzBox3;

    /**
     * @returns DzOrientedBox3 A local space oriented bounding box for this object; cached by the last call to evaluate().
     */
    getLocalOrientedBox(): DzOrientedBox3;

    /**
     * @param which number - The index of the modifier in the stack to get.
     * @returns DzModifier The modifier at the given position in the modifier stack (if any), otherwise NULL.
     */
    getModifier(which: number): DzModifier;

    /**
     * @returns number The number of modifiers in the local modifier stack for this object.
     */
    getNumModifiers(): number; // Number

    /**
     * @returns number The number of possible shapes that this object can display.
     */
    getNumShapes(): number; // Number

    /**
     * @param which number - Index of the shape to get.
     * @returns DzShape The shape at the given index (if any), otherwise NULL.
     */
    getShape(which: number): DzShape;

    /**
     * Flags this object to reevaluate its geometry pipeline the next time the cached shape is requested.
     */
    invalidateCache(): void;

    /**
     * @returns boolean true when this object is currently building, otherwise false.
     * @since 4.12.0.10
     */
    isBuildingGeom(): boolean; // Boolean

    /**
     * @returns boolean true if the geom that this object is currently building is still valid, otherwise false.
     * @since 4.12.0.10
     */
    isBuildingGeomValid(): boolean; // Boolean

    /**
     * Moves the modifier from its source object to this object's modifier stack. DZ_ILLEGAL_ARGUMENT_ERROR is returned if there is not a modifier, or if the modifier's element parent is not an object. This move is not undo-able.
     * @param modifier DzModifier - The modifier to add to this object's modifier stack.
     * @param index number - The position in the list to insert the modifer. If this is less than 0 (default), the modifier is appended to the end of the list.
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     */
    moveModifier(modifier: DzModifier, index?: number): DzError;

    /**
     * Moves the given shape from its source object to this object. Operation fails if the shape's element parent is not a different dzobject with this shape in its shape list.
     * @param shape DzShape - The shape that will be added to this object's list of possible shapes.
     * @param index number - The position in the list to insert the shape. If this is less than 0 (default), the shape is appended to the end of the list.
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     */
    moveShape(shape: DzShape, index?: number): DzError;

    /**
     * Removes all the modifiers from the modifier stack.
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     */
    removeAllModifiers(): DzError;

    /**
     * Remove all shapes from this object.
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     */
    removeAllShapes(): DzError;

    /**
     * Removes a modifier from the modifier stack.
     * @param modifier DzModifier - The modifier to remove from this object's modifier stack.
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     */
    removeModifier(modifier: DzModifier): DzError;

    /**
     * Remove a shape from this object.
     * @param index number - The index of the shape to remove from this object's list of possible shapes.
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     */
    removeShape(index: number): DzError;

    /* Signals */

    /**
     * Emitted when a modifier is about to be added to this object.
     * @param mod DzModifier - The modifier that is about to be added to the object.
     */
    aboutToAddModifier: ISignal<DzModifier>;

    /**
     * Emitted when this object is about to be deleted.
     */
    aboutToDelete: ISignal<void>;

    /**
     * Emitted when the vertex mesh for this object is about to be finalized.
     * @param mesh DzVertexMesh - The vertex mesh about to be finalized.
     */
    aboutToFinalize: ISignal<DzVertexMesh>;

    /**
     * Emitted when the cached geometry for this object has been finalized.
     */
    cachedGeomFinalized: ISignal<void>;

    /**
     * Emitted when the cached geometry for this object has been invalidated.
     */
    cachedGeomInvalidated: ISignal<void>;

    /**
     * Emitted when the cached geometry for this object has been updated.
     */
    cachedGeomUpdated: ISignal<void>;

    /**
     * Emitted when the cached topology for this object has changed.
     */
    cachedTopologyChanged: ISignal<void>;

    /**
     * Emitted when the current shape is swapped out.
     */
    currentShapeSwitched: ISignal<void>;

    /**
     * Emitted when this object needs to be redrawn.
     */
    drawnDataChanged: ISignal<void>;

    /**
     * Emitted when the material list for the current shape changes.
     */
    materialListChanged: ISignal<void>;

    /**
     * Emitted when the material selection state for the current shape changes.
     */
    materialSelectionChanged: ISignal<void>;

    /**
     * Emitted when the material selection state for the current shape changes.
     */
    materialSelectionSetsChanged: ISignal<void>;

    /**
     * Emitted when a modifier is added to this object.
     * @param mod DzModifier - The modifier added to the object.
     */
    modifierAdded: ISignal<DzModifier>;

    /**
     * Emitted when a modifier is removed from this object.
     * @param mod DzModifier - The modifier removed from the object.
     */
    modifierRemoved: ISignal<DzModifier>;

    /**
     * Emitted when a modifier is added to or removed from this object.
     */
    modifierStackChanged: ISignal<void>;

    /**
     * Emitted when a shape is added to this object.
     * @param shape DzShape - The shape added to the object.
     */
    shapeAdded: ISignal<DzShape>;

    /**
     * Emitted when a shape is removed from this object.
     * @param shape DzShape - The shape removed from the object.
     */
    shapeRemoved: ISignal<DzShape>;

    /**
     * Emitted when the topology of the current shape for this object has changed.
     */
    shapeTopologyChanged: ISignal<void>;

    /**
     * Emitted when the current uv set for the object has changed.
     */
    uvsChanged: ISignal<void>;

    /* Undocumented Augment Members */

    /** @undocumented */
    createElementCopy(p0: DzElementDuplicateContext): any;

    /** @undocumented */
    createElementCopySignal(p0: DzElementDuplicateContext): any;

    /** @undocumented */
    getName(): any;

    /** @undocumented */
    iskindof(p0: string): any;

    /** @undocumented */
    setAllPrivatePropertyAttributesAsDefinitions(): any;

    /** @undocumented */
    setAllPropertyAttributesAsDefinitions(): any;
}
