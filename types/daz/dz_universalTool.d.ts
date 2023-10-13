declare class DzUniversalTool extends DzTransformTool {

    // Enums
    //CoordinateSpace
    static WorldSpace: number;
    static LocalSpace: number;
    static ObjectSpace: number;
    static CameraSpace: number;
    static GimbalSpace: number;

    getAdjustedCoordinateSpace(p0:DzNode): any;
    getCoordinateSpace(): any;
    getGuidesColor(): any;
    getRotateSecondaryNodes(): any;
    getScaleSecondaryNodes(): any;
    getShowGuides(): any;
    getShowHomeMenu(): any;
    getShowPinsMenu(): any;
    getShowRotateFreeHandle(): any;
    getShowRotateGizmo(): any;
    getShowRotateScreenHandle(): any;
    getShowRotateXHandle(): any;
    getShowRotateYHandle(): any;
    getShowRotateZHandle(): any;
    getShowScaleGizmo(): any;
    getShowScaleUniformHandle(): any;
    getShowScaleXHandle(): any;
    getShowScaleYHandle(): any;
    getShowScaleZHandle(): any;
    getShowTranslateGizmo(): any;
    getShowTranslateScreenHandle(): any;
    getShowTranslateXHandle(): any;
    getShowTranslateYHandle(): any;
    getShowTranslateZHandle(): any;
    getSnapRotation(): any;
    getSnapRotationValue(): any;
    getSnapScale(): any;
    getSnapScaleValue(): any;
    getSnapTranslation(): any;
    getSnapTranslationValue(): any;
    getTransformSecondaryNodes(): any;
    getTranslateSecondaryNodes(): any;
    providesGuide(): any;
    providesRotation(): any;
    providesScale(): any;
    providesTranslation(): any;
    setCoordinateSpace(p0:number): any;
    setGuidesColor(p0:QColor): any;
    setRotateSecondaryNodes(p0:boolean): any;
    setScaleSecondaryNodes(p0:boolean): any;
    setShowGuides(p0:boolean): any;
    setShowHomeMenu(p0:boolean): any;
    setShowPinsMenu(p0:boolean): any;
    setShowRotateFreeHandle(p0:boolean): any;
    setShowRotateGizmo(p0:boolean): any;
    setShowRotateScreenHandle(p0:boolean): any;
    setShowRotateXHandle(p0:boolean): any;
    setShowRotateYHandle(p0:boolean): any;
    setShowRotateZHandle(p0:boolean): any;
    setShowScaleGizmo(p0:boolean): any;
    setShowScaleUniformHandle(p0:boolean): any;
    setShowScaleXHandle(p0:boolean): any;
    setShowScaleYHandle(p0:boolean): any;
    setShowScaleZHandle(p0:boolean): any;
    setShowTranslateGizmo(p0:boolean): any;
    setShowTranslateScreenHandle(p0:boolean): any;
    setShowTranslateXHandle(p0:boolean): any;
    setShowTranslateYHandle(p0:boolean): any;
    setShowTranslateZHandle(p0:boolean): any;
    setSnapRotation(p0:boolean): any;
    setSnapRotationValue(p0:number): any;
    setSnapScale(p0:boolean): any;
    setSnapScaleValue(p0:number): any;
    setSnapTranslation(p0:boolean): any;
    setSnapTranslationValue(p0:number): any;
    setTransformSecondaryNodes(p0:boolean): any;
    setTranslateSecondaryNodes(p0:boolean): any;
    stylize(): any;

    // Signals
    coordinateSpaceChanged(p0:number): any;
    showHomeMenuChanged(p0:boolean): any;
    showPinsMenuChanged(p0:boolean): any;
    showTranslateGizmoChanged(p0:boolean): any;
    showTranslateXHandleChanged(p0:boolean): any;
    showTranslateYHandleChanged(p0:boolean): any;
    showTranslateZHandleChanged(p0:boolean): any;
    showTranslateScreenHandleChanged(p0:boolean): any;
    showRotateGizmoChanged(p0:boolean): any;
    showRotateXHandleChanged(p0:boolean): any;
    showRotateYHandleChanged(p0:boolean): any;
    showRotateZHandleChanged(p0:boolean): any;
    showRotateFreeHandleChanged(p0:boolean): any;
    showRotateScreenHandleChanged(p0:boolean): any;
    showScaleGizmoChanged(p0:boolean): any;
    showScaleXHandleChanged(p0:boolean): any;
    showScaleYHandleChanged(p0:boolean): any;
    showScaleZHandleChanged(p0:boolean): any;
    showScaleUniformHandleChanged(p0:boolean): any;
    showGuidesChanged(p0:boolean): any;
    guidesColorChanged(p0:QColor): any;
    snapTranslationChanged(p0:boolean): any;
    snapTranslationValueChanged(p0:number): any;
    snapRotationChanged(p0:boolean): any;
    snapRotationValueChanged(p0:number): any;
    snapScaleChanged(p0:boolean): any;
    snapScaleValueChanged(p0:number): any;
    transformSecondaryNodesChanged(p0:boolean): any;
    translateSecondaryNodesChanged(p0:boolean): any;
    rotateSecondaryNodesChanged(p0:boolean): any;
    scaleSecondaryNodesChanged(p0:boolean): any;
}