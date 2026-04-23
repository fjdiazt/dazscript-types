/**
 * A view tool that translates, rotates, and scales the selected node(s).
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/universaltool_dz
 */
declare class DzUniversalTool extends DzTransformTool {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of CoordinateSpace.
     */
    static WorldSpace: number;

    /**
     * DAZ enum member of CoordinateSpace.
     */
    static LocalSpace: number;

    /**
     * DAZ enum member of CoordinateSpace.
     */
    static ObjectSpace: number;

    /**
     * DAZ enum member of CoordinateSpace.
     */
    static CameraSpace: number;

    /**
     * DAZ enum member of CoordinateSpace.
     */
    static GimbalSpace: number;

    /* Methods */

    /**
     * @param node DzNode - The node to get the adjusted coordinate space for.
     * @returns number The coordinate space that the tool is operating in, for the given node.
     */
    getAdjustedCoordinateSpace(node: DzNode): number; // CoordinateSpace

    /**
     * @returns number The coordinate space that the tool is operating in.
     */
    getCoordinateSpace(): number; // CoordinateSpace

    /**
     * @returns Color The color of the guides (if any); the default is Color( 0, 255, 255 ).
     */
    getGuidesColor(): Color;

    /**
     * @returns boolean true if rotation of secondary nodes is active, otherwise false.
     */
    getRotateSecondaryNodes(): boolean; // Boolean

    /**
     * @returns boolean true if scaling of secondary nodes is active, otherwise false.
     */
    getScaleSecondaryNodes(): boolean; // Boolean

    /**
     * @returns boolean true if the guides option is active, otherwise false.
     */
    getShowGuides(): boolean; // Boolean

    /**
     * @returns boolean true if the home menu should be shown, otherwise false.
     */
    getShowHomeMenu(): boolean; // Boolean

    /**
     * @returns boolean true if the pins menu should be shown, otherwise false.
     */
    getShowPinsMenu(): boolean; // Boolean

    /**
     * @returns boolean true if showing the free rotate handle on the rotate gizmo is enabled, otherwise false.
     */
    getShowRotateFreeHandle(): boolean; // Boolean

    /**
     * @returns boolean true if the rotate gizmo is enabled, otherwise false.
     */
    getShowRotateGizmo(): boolean; // Boolean

    /**
     * @returns boolean true if showing the handle for the axes that correspond with “screen space” on the rotate gizmo is enabled, otherwise false.
     */
    getShowRotateScreenHandle(): boolean; // Boolean

    /**
     * @returns boolean true if showing the X axis handle on the rotate gizmo is enabled, otherwise false.
     */
    getShowRotateXHandle(): boolean; // Boolean

    /**
     * @returns boolean true if showing the Y axis handle on the rotate gizmo is enabled, otherwise false.
     */
    getShowRotateYHandle(): boolean; // Boolean

    /**
     * @returns boolean true if showing the Z axis handle on the rotate gizmo is enabled, otherwise false.
     */
    getShowRotateZHandle(): boolean; // Boolean

    /**
     * @returns boolean true if the scale gizmo is enabled, otherwise false.
     */
    getShowScaleGizmo(): boolean; // Boolean

    /**
     * @returns boolean true if showing the uniform scale handle on the scale gizmo is enabled, otherwise false.
     */
    getShowScaleUniformHandle(): boolean; // Boolean

    /**
     * @returns boolean true if showing the X axis handle on the scale gizmo is enabled, otherwise false.
     */
    getShowScaleXHandle(): boolean; // Boolean

    /**
     * @returns boolean true if showing the Y axis handle on the scale gizmo is enabled, otherwise false.
     */
    getShowScaleYHandle(): boolean; // Boolean

    /**
     * @returns boolean true if showing the Z axis handle on the scale gizmo is enabled, otherwise false.
     */
    getShowScaleZHandle(): boolean; // Boolean

    /**
     * @returns boolean true if the translate gizmo is enabled, otherwise false.
     */
    getShowTranslateGizmo(): boolean; // Boolean

    /**
     * @returns boolean true if showing the screen handle on the translate gizmo is enabled, otherwise false.
     */
    getShowTranslateScreenHandle(): boolean; // Boolean

    /**
     * @returns boolean true if showing the X axis handle on the translate gizmo is enabled, otherwise false.
     */
    getShowTranslateXHandle(): boolean; // Boolean

    /**
     * @returns boolean true if showing the Y axis handle on the translate gizmo is enabled, otherwise false.
     */
    getShowTranslateYHandle(): boolean; // Boolean

    /**
     * @returns boolean true if showing the Z axis handle on the translate gizmo is enabled, otherwise false.
     */
    getShowTranslateZHandle(): boolean; // Boolean

    /**
     * @returns boolean true if “snapping” for rotation is active, otherwise false.
     */
    getSnapRotation(): boolean; // Boolean

    /**
     * @returns number The interval (in degrees) for rotations performed using the manipulator to “snap” to.
     */
    getSnapRotationValue(): number; // Number

    /**
     * @returns boolean true if snapping for scale is active, otherwise false.
     */
    getSnapScale(): boolean; // Boolean

    /**
     * @returns number The interval (in percent) for scaling performed using the manipulator to “snap” to.
     */
    getSnapScaleValue(): number; // Number

    /**
     * @returns boolean true if “snapping” for translation is active, otherwise false.
     */
    getSnapTranslation(): boolean; // Boolean

    /**
     * @returns number The interval (in centimeters) for translations performed using the manipulator to “snap” to.
     */
    getSnapTranslationValue(): number; // Number

    /**
     * @returns boolean true if transforms of secondary nodes is active, otherwise false.
     */
    getTransformSecondaryNodes(): boolean; // Boolean

    /**
     * @returns boolean true if translation of secondary nodes is active, otherwise false.
     */
    getTranslateSecondaryNodes(): boolean; // Boolean

    /**
     * @returns boolean true if this tool provides a guide, otherwise false.
     */
    providesGuide(): boolean; // Boolean

    /**
     * @returns boolean true if this tool provides the ability to rotate nodes, otherwise false.
     */
    providesRotation(): boolean; // Boolean

    /**
     * @returns boolean true if this tool provides the ability to scale nodes, otherwise false.
     */
    providesScale(): boolean; // Boolean

    /**
     * @returns boolean true if this tool provides the ability to translate nodes, otherwise false.
     */
    providesTranslation(): boolean; // Boolean

    /**
     * Sets the coordinate space that the tool is operating in.
     * @param space number - The coordinate space to set.
     */
    setCoordinateSpace(space: number): void;

    /**
     * Sets the color of guides.
     * @param color Color - The color to set.
     */
    setGuidesColor(color: Color): void;

    /**
     * Sets whether or not to apply rotation of the primary selection to secondary nodes.
     * @param yesNo boolean - If true, rotation of the primary selection is applied to secondary nodes.
     */
    setRotateSecondaryNodes(yesNo: boolean): void;

    /**
     * Sets whether or not to apply scaling of the primary selection to secondary nodes.
     * @param yesNo boolean - If true, scaling of the primary selection is applied to secondary nodes.
     */
    setScaleSecondaryNodes(yesNo: boolean): void;

    /**
     * Sets whether or not to show guides.
     * @param yesNo boolean - If true, guides will be shown.
     */
    setShowGuides(yesNo: boolean): void;

    /**
     * Sets whether or not to show the home menu.
     * @param yesNo boolean - If true, the home menu is shown.
     */
    setShowHomeMenu(yesNo: boolean): void;

    /**
     * Sets whether or not to show the pins menu.
     * @param yesNo boolean - If true, the pins menu is shown.
     */
    setShowPinsMenu(yesNo: boolean): void;

    /**
     * Sets whether or not to show the free rotate handle on the rotate gizmo.
     * @param yesNo boolean - If true, the handle will be shown.
     */
    setShowRotateFreeHandle(yesNo: boolean): void;

    /**
     * Sets whether or not to show the rotate gizmo.
     * @param yesNo boolean - If true, the rotate gizmo will be shown.
     */
    setShowRotateGizmo(yesNo: boolean): void;

    /**
     * Sets whether or not to show the handle for the axes that correspond with “screen space” on the rotate gizmo.
     * @param yesNo boolean - If true, the handle will be shown.
     */
    setShowRotateScreenHandle(yesNo: boolean): void;

    /**
     * Sets whether or not to show the X axis handle on the rotate gizmo.
     * @param yesNo boolean - If true, the handle will be shown.
     */
    setShowRotateXHandle(yesNo: boolean): void;

    /**
     * Sets whether or not to show the Y axis handle on the rotate gizmo.
     * @param yesNo boolean - If true, the handle will be shown.
     */
    setShowRotateYHandle(yesNo: boolean): void;

    /**
     * Sets whether or not to show the Z axis handle on the rotate gizmo.
     * @param yesNo boolean - If true, the handle will be shown.
     */
    setShowRotateZHandle(yesNo: boolean): void;

    /**
     * Sets whether or not to show the scale gizmo.
     * @param yesNo boolean - If true, the scale gizmo will be shown.
     */
    setShowScaleGizmo(yesNo: boolean): void;

    /**
     * Sets whether or not to show the uniform scale handle.
     * @param yesNo boolean - If true, the handle will be shown.
     */
    setShowScaleUniformHandle(yesNo: boolean): void;

    /**
     * Sets whether or not to show the X axis handle on the scale gizmo.
     * @param yesNo boolean - If true, the handle will be shown.
     */
    setShowScaleXHandle(yesNo: boolean): void;

    /**
     * Sets whether or not to show the Y axis handle on the scale gizmo.
     * @param yesNo boolean - If true, the handle will be shown.
     */
    setShowScaleYHandle(yesNo: boolean): void;

    /**
     * Sets whether or not to show the Z axis handle on the scale gizmo.
     * @param yesNo boolean - If true, the handle will be shown.
     */
    setShowScaleZHandle(yesNo: boolean): void;

    /**
     * Sets whether or not to show the translate gizmo.
     * @param yesNo boolean - If true, the translate gizmo will be shown.
     */
    setShowTranslateGizmo(yesNo: boolean): void;

    /**
     * Sets whether or not to show the translate handles for the axis that correspond with “screen space.”
     * @param yesNo boolean - If true, the handles will be shown.
     */
    setShowTranslateScreenHandle(yesNo: boolean): void;

    /**
     * Sets whether or not to show the X axis handle on the translate gizmo.
     * @param yesNo boolean - If true, the handle will be shown.
     */
    setShowTranslateXHandle(yesNo: boolean): void;

    /**
     * Sets whether or not to show the Y axis handle on the translate gizmo.
     * @param yesNo boolean - If true, the handle will be shown.
     */
    setShowTranslateYHandle(yesNo: boolean): void;

    /**
     * Sets whether or not to show the Z axis handle on the translate gizmo.
     * @param yesNo boolean - If true, the handle will be shown.
     */
    setShowTranslateZHandle(yesNo: boolean): void;

    /**
     * Sets whether or not snapping for rotation values is active.
     * @param yesNo boolean - If true, rotation values set by the tool will be “snapped” to specific intervals.
     */
    setSnapRotation(yesNo: boolean): void;

    /**
     * Sets the interval for snappping rotation values.
     * @param value number - The value to set.
     */
    setSnapRotationValue(value: number): void;

    /**
     * Sets whether or not snapping for scale values is active.
     * @param yesNo boolean - If true, scale values set by the tool will be “snapped” to specific intervals.
     */
    setSnapScale(yesNo: boolean): void;

    /**
     * Sets the interval for snappping scale values.
     * @param value number - The value to set.
     */
    setSnapScaleValue(value: number): void;

    /**
     * Sets whether or not snapping for translation values is active.
     * @param yesNo boolean - If true, translation values set by the tool will be “snapped” to specific intervals.
     */
    setSnapTranslation(yesNo: boolean): void;

    /**
     * Sets the interval for snappping translation values.
     * @param value number - The value to set.
     */
    setSnapTranslationValue(value: number): void;

    /**
     * Sets whether or not to apply manipulation of the primary selection to secondary nodes.
     * @param yesNo boolean - If true, manipulation of the primary selection is applied to secondary nodes.
     */
    setTransformSecondaryNodes(yesNo: boolean): void;

    /**
     * Sets whether or not to apply translation of the primary selection to secondary nodes.
     * @param yesNo boolean - If true, translation of the primary selection is applied to secondary nodes.
     */
    setTranslateSecondaryNodes(yesNo: boolean): void;

    /* Signals */

    /**
     * Emitted when the coordinate space for this tool has changed.
     * @param space number - The new coordinate space.
     */
    coordinateSpaceChanged: ISignal<number>;

    /**
     * Emitted when the color for guides on this tool has changed.
     * @param color Color - The new color.
     */
    guidesColorChanged: ISignal<Color>;

    /**
     * Emitted when the state of rotations being applied to secondary nodes for this tool has changed.
     * @param yesNo boolean - The new state of the option.
     */
    rotateSecondaryNodesChanged: ISignal<boolean>;

    /**
     * Emitted when the state of scaling being applied to secondary nodes for this tool has changed.
     * @param yesNo boolean - The new state of the option.
     */
    scaleSecondaryNodesChanged: ISignal<boolean>;

    /**
     * Emitted when the state of showing guides on this tool has changed.
     * @param yesNo boolean - The new state of the option.
     */
    showGuidesChanged: ISignal<boolean>;

    /**
     * Emitted when the state of the Home Menu option for this tool has changed.
     * @param yesNo boolean - The new state of the option.
     */
    showHomeMenuChanged: ISignal<boolean>;

    /**
     * Emitted when the state of the Pins Menu option for this tool has changed.
     * @param yesNo boolean - The new state of the option.
     */
    showPinsMenuChanged: ISignal<boolean>;

    /**
     * Emitted when the state of showing the free rotate handle on this tool has changed.
     * @param yesNo boolean - The new state of the option.
     */
    showRotateFreeHandleChanged: ISignal<boolean>;

    /**
     * Emitted when the state of showing the rotate gizmo for this tool has changed.
     * @param yesNo boolean - The new state of the option.
     */
    showRotateGizmoChanged: ISignal<boolean>;

    /**
     * Emitted when the state of showing the rotate handle for screen space on this tool has changed.
     * @param yesNo boolean - The new state of the option.
     */
    showRotateScreenHandleChanged: ISignal<boolean>;

    /**
     * Emitted when the state of showing the rotate handle for the X axis on this tool has changed.
     * @param yesNo boolean - The new state of the option.
     */
    showRotateXHandleChanged: ISignal<boolean>;

    /**
     * Emitted when the state of showing the rotate handle for the Y axis on this tool has changed.
     * @param yesNo boolean - The new state of the option.
     */
    showRotateYHandleChanged: ISignal<boolean>;

    /**
     * Emitted when the state of showing the rotate handle for the Z axis on this tool has changed.
     * @param yesNo boolean - The new state of the option.
     */
    showRotateZHandleChanged: ISignal<boolean>;

    /**
     * Emitted when the state of showing the scale gizmo for this tool has changed.
     * @param yesNo boolean - The new state of the option.
     */
    showScaleGizmoChanged: ISignal<boolean>;

    /**
     * Emitted when the state of showing the uniform scale handle on this tool has changed.
     * @param yesNo boolean - The new state of the option.
     */
    showScaleUniformHandleChanged: ISignal<boolean>;

    /**
     * Emitted when the state of showing the scale handle for the X axis on this tool has changed.
     * @param yesNo boolean - The new state of the option.
     */
    showScaleXHandleChanged: ISignal<boolean>;

    /**
     * Emitted when the state of showing the scale handle for the Y axis on this tool has changed.
     * @param yesNo boolean - The new state of the option.
     */
    showScaleYHandleChanged: ISignal<boolean>;

    /**
     * Emitted when the state of showing the scale handle for the Z axis on this tool has changed.
     * @param yesNo boolean - The new state of the option.
     */
    showScaleZHandleChanged: ISignal<boolean>;

    /**
     * Emitted when the state of showing the translate gizmo for this tool has changed.
     * @param yesNo boolean - The new state of the option.
     */
    showTranslateGizmoChanged: ISignal<boolean>;

    /**
     * Emitted when the state of showing the translate handle for screen space on this tool has changed.
     * @param yesNo boolean - The new state of the option.
     */
    showTranslateScreenHandleChanged: ISignal<boolean>;

    /**
     * Emitted when the state of showing the translate handle for the X axis on this tool has changed.
     * @param yesNo boolean - The new state of the option.
     */
    showTranslateXHandleChanged: ISignal<boolean>;

    /**
     * Emitted when the state of showing the translate handle for the Y axis on this tool has changed.
     * @param yesNo boolean - The new state of the option.
     */
    showTranslateYHandleChanged: ISignal<boolean>;

    /**
     * Emitted when the state of showing the translate handle for the Z axis on this tool has changed.
     * @param yesNo boolean - The new state of the option.
     */
    showTranslateZHandleChanged: ISignal<boolean>;

    /**
     * Emitted when the state of snapping rotation values on this tool has changed.
     * @param yesNo boolean - The new state of the option.
     */
    snapRotationChanged: ISignal<boolean>;

    /**
     * Emitted when the value for rotation snapping on this tool has changed.
     * @param value number - The new value for the option.
     */
    snapRotationValueChanged: ISignal<number>;

    /**
     * Emitted when the state of snapping scale values on this tool has changed.
     * @param yesNo boolean - The new state of the option.
     */
    snapScaleChanged: ISignal<boolean>;

    /**
     * Emitted when the value for scale snapping on this tool has changed.
     * @param value number - The new value for the option.
     */
    snapScaleValueChanged: ISignal<number>;

    /**
     * Emitted when the state of snapping translation values on this tool has changed.
     * @param yesNo boolean - The new state of the option.
     */
    snapTranslationChanged: ISignal<boolean>;

    /**
     * Emitted when the value for translation snapping on this tool has changed.
     * @param value number - The new value for the option.
     */
    snapTranslationValueChanged: ISignal<number>;

    /**
     * Emitted when the state of transforms being applied to secondary nodes for this tool has changed.
     * @param yesNo boolean - The new state of the option.
     */
    transformSecondaryNodesChanged: ISignal<boolean>;

    /**
     * Emitted when the state of translations being applied to secondary nodes for this tool has changed.
     * @param yesNo boolean - The new state of the option.
     */
    translateSecondaryNodesChanged: ISignal<boolean>;

    /* Undocumented Augment Members */

    /** @undocumented */
    stylize(): any;
}
