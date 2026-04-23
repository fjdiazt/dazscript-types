/**
 * The primary component of dForm deformers.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/dform_dz
 */
declare class DzDForm extends DzNode {

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * Adds the effect of this dForm to the given node.
     * @param node DzNode - The node to apply this dForm's affect to.
     */
    applyToNode(node: DzNode): void;

    /**
     * @returns number The avatar scale factor for the representation of the dFormer.
     */
    getAvatarScale(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls the avatar scale factor for this dFormer.
     */
    getAvatarScaleControl(): DzFloatProperty;

    /**
     * @returns DzDFormBase The base for this dFormer.
     */
    getBase(): DzDFormBase;

    /**
     * @returns Color The color used in the gradient for weights at the maximum end of the scale.
     */
    getGradientMax(): Color;

    /**
     * @returns Color The color used in the gradient for weights at the minimum end of the scale.
     */
    getGradientMin(): Color;

    /**
     * @returns number The influence mode.
     */
    getInfluenceMode(): number; // DzDFormZone::InfluenceMode

    /**
     * Gets the i'th modifier of the dForm. The index is zero based. Can be used with getNumModifiers() to iterate over all the dForm modifiers.
     * @param i number - The index of the modifier to get.
     * @returns DzDFormModifier The target modifier at the requested index (if valid).
     */
    getModifier(i: number): DzDFormModifier;

    /**
     * Gets the i'th modifier of the dForm. The index is zero based. Can be used with getNumModifiers() to iterate over all the dForm modifiers.
     * @param node DzNode - The node to find the modifier on.
     * @returns DzDFormModifier The target modifier on the requested node.
     */
    getModifierForNode(node: DzNode): DzDFormModifier;

    /**
     * @returns number The number of dForm modifiers that are driven by this dForm.
     */
    getNumModifiers(): number; // Number

    /**
     * @returns number The opacity for the representation of the dFormer.
     */
    getOpacity(): number; // Number

    /**
     * @returns DzFloatProperty The property that controls opacity for drawing this dFormer.
     */
    getOpacityControl(): DzFloatProperty;

    /**
     * @returns DzDFormZone The zone for this dFormer.
     */
    getZone(): DzDFormZone;

    /**
     * Sets the avatar scale factor of the dForm representation.
     * @param val number - The new avatar scale factor for the dForm; 1.0 maintains 100% scale.
     */
    setAvatarScale(val: number): void;

    /**
     * Sets the base for this dForm.
     * @param base DzDFormBase - The dForm base to set.
     */
    setBase(base: DzDFormBase): void;

    /**
     * Sets the Color used in the gradient for weights at the maximum end of the scale.
     * @param color Color - The color to use for representing maximum weights.
     */
    setGradientMax(color: Color): void;

    /**
     * Sets the Color used in the gradient for weights at the minimum end of the scale.
     * @param color Color - The color to use for representing minimum weights.
     */
    setGradientMin(color: Color): void;

    /**
     * Sets the opacity of the dForm representation.
     * @param val number - The new opacity for the dForm; 0.0 is completely transparent, 1.0 is completely opaque.
     */
    setOpacity(val: number): void;

    /**
     * Sets the zone for this dForm.
     * @param zone DzDFormZone - The dForm zone to set.
     */
    setZone(zone: DzDFormZone): void;

    /* Signals */

    /**
     * Emitted when the dform modifier list for this dFormer has changed.
     */
    dformModifierListChanged: ISignal<void>;
}
