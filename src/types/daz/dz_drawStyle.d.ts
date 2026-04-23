/**
 * Encapsulates the drawing parameters for a 3D view.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/drawstyle_dz
 */
declare class DzDrawStyle extends DzRefCountedItem {

    /* Properties */

    /**
     * Whether or not visual cues (such as bounding boxes for selected nodes) should be drawn when appropriate.
     */
    drawCuesDefault: boolean; // Boolean

    /**
     * Whether or not only objects should be drawn.
     */
    drawObjectsOnly: boolean; // Boolean

    /**
     * Whether or not only shadow casters should be drawn.
     */
    drawShadowCastersOnly: boolean; // Boolean

    /**
     * Whether or not the style is a user style (Read Only).
     */
    isUserStyle: boolean; // Boolean

    /**
     * Whether or not the draw is render quality.
     */
    renderQuality: boolean; // Boolean

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of ShadeStyle.
     */
    static WireBox: number;

    /**
     * DAZ enum member of ShadeStyle.
     */
    static SolidBox: number;

    /**
     * DAZ enum member of ShadeStyle.
     */
    static Wireframe: number;

    /**
     * DAZ enum member of ShadeStyle.
     */
    static LitWireframe: number;

    /**
     * DAZ enum member of ShadeStyle.
     */
    static HiddenLine: number;

    /**
     * DAZ enum member of ShadeStyle.
     */
    static WireShaded: number;

    /**
     * DAZ enum member of ShadeStyle.
     */
    static SmoothShaded: number;

    /**
     * DAZ enum member of ShadeStyle.
     */
    static WireTextured: number;

    /**
     * DAZ enum member of ShadeStyle.
     */
    static Textured: number;

    /**
     * DAZ enum member of ShadeStyle.
     */
    static GLSLShader: number;

    /**
     * DAZ enum member of ShadeStyle.
     */
    static Unshaded: number;

    /**
     * DAZ enum member of ShadeStyle.
     */
    static Picking: number;

    /* Methods */

    /**
     * @returns boolean true if visual cues (such as bounding boxes for selected nodes) should be drawn for the current drawing operation, false if visual cues should not be drawn.
     */
    drawCues(): boolean; // Boolean

    /**
     * If the current shade style is not using lighting, this method will set the shade style to the nearest match that uses single-pass drawing and lighting.
     */
    forceUseLighting(): void;

    /**
     * @returns number The current pass number; a second pass is drawn for the hidden line and wire shaded styles.
     */
    pass(): number; // Number

    /**
     * @returns boolean true if regions are enabled, false if regions are disabled.
     */
    regionsEnabled(): boolean; // Boolean

    /**
     * @returns boolean true if selection maps are enabled, false if selection maps are disabled.
     */
    selectionMapsEnabled(): boolean; // Boolean

    /**
     * @returns any The scene shader for this draw operation (if any), otherwise NULL. Undocumented DAZ type: sceneshader_dz.
     */
    shader(): any; // sceneshader_dz; undocumented type

    /**
     * @returns number The shading style for the current drawing operation.
     */
    shadeStyle(): number; // ShadeStyle

    /* Undocumented Augment Members */

    /** @undocumented */
    WIRE_BOX: number; // 0

    /** @undocumented */
    SOLID_BOX: number; // 1

    /** @undocumented */
    WIREFRAME: number; // 2

    /** @undocumented */
    LIT_WIREFRAME: number; // 3

    /** @undocumented */
    HIDDEN_LINE: number; // 4

    /** @undocumented */
    WIRE_SHADED: number; // 5

    /** @undocumented */
    SMOOTH_SHADED: number; // 6

    /** @undocumented */
    WIRE_TEXTURED: number; // 7

    /** @undocumented */
    TEXTURED: number; // 8

    /** @undocumented */
    GLSL_SHADER: number; // 9

    /** @undocumented */
    UNSHADED: number; // 10

    /** @undocumented */
    PICKING: number; // 11

    /** @undocumented */
    DrawOpaqueOnly: number; // 0

    /** @undocumented */
    DrawTransparentOnly: number; // 1

    /** @undocumented */
    DrawBoth: number; // 2

    /** @undocumented */
    DRAW_OPAQUE_ONLY: number; // 0

    /** @undocumented */
    DRAW_TRANSPARENT_ONLY: number; // 1

    /** @undocumented */
    DRAW_BOTH: number; // 2

    /** @undocumented */
    PickNone: number; // 0

    /** @undocumented */
    PickFaces: number; // 1

    /** @undocumented */
    PickPoints: number; // 2

    /** @undocumented */
    PickNodes: number; // 3

    /** @undocumented */
    PickMaterials: number; // 4

    /** @undocumented */
    PICK_NONE: number; // 0

    /** @undocumented */
    PICK_FACES: number; // 1

    /** @undocumented */
    PICK_POINTS: number; // 2

    /** @undocumented */
    PICK_NODES: number; // 3

    /** @undocumented */
    PICK_MATERIALS: number; // 4

    /** @undocumented */
    objectName: string; //

    /** @undocumented */
    name: string; //
}
