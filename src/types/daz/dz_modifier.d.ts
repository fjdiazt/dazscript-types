/**
 * Base class of all local space modifiers.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/modifier_dz
 */
declare class DzModifier extends DzElement {

    /* Methods */

    /**
     * @returns number The section that this modifier was assigned to in the DzObject modifier stack (list).
     * @since 4.11.0.44
     */
    getAssignedModifierStackSectionID(): number; // Number

    /**
     * @returns number The section that this modifier should be a part of in the DzObject modifier stack (list).
     * @since 4.11.0.44
     */
    getPreferredModifierStackSectionID(): number; // Number

    /**
     * @returns number The value used to mark a modifier as not having a section ID.
     * @since 4.11.0.44
     */
    getUnknownModifierStackSectionID(): number; // Number

    /* Signals */

    /**
     * Emitted immediately before the modifier is removed from its owner.
     */
    aboutToBeRemoved: ISignal<void>;

    /**
     * Emitted when the modifier has been added to its owner.
     */
    added: ISignal<void>;

    /**
     * Emitted when the modifier has changed and needs to be reapplied.
     */
    currentValueChanged: ISignal<void>;

    /**
     * Emitted when the modifier has been removed from its owner.
     */
    removed: ISignal<void>;

    /* Undocumented Augment Members */

    /** @undocumented */
    apply(geom: DzVertexMesh, node: DzNode): DzError;

    /** @undocumented */
    applyInverse(geom: DzVertexMesh, node: DzNode): DzError;

    /** @undocumented */
    isWeightMapModifier(): boolean;

    /** @undocumented */
    setIsWeightMapModifier(onoff: boolean): void;

    /** @undocumented */
    getMorph(): DzMorph;

    /** @undocumented */
    getParentUri(morph: DzMorph): string;

    /** @undocumented */
    setOverrideParentPath(parentPath: string): void;

    /** @undocumented */
    writeModifierInstances(io: any): boolean;
}
