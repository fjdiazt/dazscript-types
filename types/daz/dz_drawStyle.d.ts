declare class DzDrawStyle extends DzBase {
    // Enumerations
    WireBox: number; // 0
    SolidBox: number; // 1
    Wireframe: number; // 2
    LitWireframe: number; // 3
    HiddenLine: number; // 4
    WireShaded: number; // 5
    SmoothShaded: number; // 6
    WireTextured: number; // 7
    Textured: number; // 8
    GLSLShader: number; // 9
    Unshaded: number; // 10
    Picking: number; // 11
    WIRE_BOX: number; // 0
    SOLID_BOX: number; // 1
    WIREFRAME: number; // 2
    LIT_WIREFRAME: number; // 3
    HIDDEN_LINE: number; // 4
    WIRE_SHADED: number; // 5
    SMOOTH_SHADED: number; // 6
    WIRE_TEXTURED: number; // 7
    TEXTURED: number; // 8
    GLSL_SHADER: number; // 9
    UNSHADED: number; // 10
    PICKING: number; // 11
    DrawOpaqueOnly: number; // 0
    DrawTransparentOnly: number; // 1
    DrawBoth: number; // 2
    DRAW_OPAQUE_ONLY: number; // 0
    DRAW_TRANSPARENT_ONLY: number; // 1
    DRAW_BOTH: number; // 2
    PickNone: number; // 0
    PickFaces: number; // 1
    PickPoints: number; // 2
    PickNodes: number; // 3
    PickMaterials: number; // 4
    PICK_NONE: number; // 0
    PICK_FACES: number; // 1
    PICK_POINTS: number; // 2
    PICK_NODES: number; // 3
    PICK_MATERIALS: number; // 4

    // Properties
    objectName: string; //
    name: string; //
    drawObjectsOnly: boolean; // false
    drawShadowCastersOnly: boolean; // false
    renderQuality: boolean; // false
    drawCuesDefault: boolean; // true
    isUserStyle: boolean; // true

    // Methods
    drawCues(): any;
    forceUseLighting(): any;
    pass(): any;
    regionsEnabled(): any;
    selectionMapsEnabled(): any;
    shadeStyle(): any;
    shader(): any;
}