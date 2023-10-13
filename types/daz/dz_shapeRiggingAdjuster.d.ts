declare class DzShapeRiggingAdjuster {
    doAdjustments(): boolean;
    setAdjustCenterPoints(yesNo: boolean): void;
    setAdjustEndPoints(yesNo: boolean): void;
    setAdjustOrientation(yesNo: boolean): void;
    setExcludedBones(boneNames: string[]): void;
    setExcludedFacetGroups(groupNames: string): void;
    setFigure(figure: DzFigure): void;
}