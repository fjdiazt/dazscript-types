/**
 * The zone component of dForm deformers.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/dformzone_dz
 */
declare class DzDFormZone extends DzNode {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of DrawStyle.
     */
    static AxisOnly: number;

    /**
     * DAZ enum member of DrawStyle.
     */
    static Wireframe: number;

    /**
     * DAZ enum member of DrawStyle.
     */
    static Solid: number;

    /**
     * DAZ enum member of InfluenceMode.
     */
    static Sphere: number;

    /**
     * DAZ enum member of InfluenceMode.
     */
    static WeightMap: number;

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * @returns DzDForm The dForm for this zone.
     */
    getDForm(): DzDForm;

    /**
     * @returns number The influence mode of this deformer.
     * @since 4.6.2.34
     */
    getInfluenceMode(): number; // InfluenceMode

    /**
     * @returns DzEnumProperty The property that controls the influence mode for this dFormer.
     * @since 4.6.2.34
     */
    getInfluenceModeControl(): DzEnumProperty;

    /**
     * @returns DzFloatProperty The property that controls the opacity for this zone.
     */
    getOpacityControl(): DzFloatProperty;

    /**
     * @returns any The spline used to compute the falloff for this zone. Undocumented DAZ type: naturalspline_dz.
     */
    getSpline(): any; // naturalspline_dz; undocumented type

    /* Signals */

    /**
     * Emitted when the influence mode for this dForm zone has changed.
     */
    influenceModeChanged: ISignal<void>;
}
