declare class DzERCFreeze {

    // Enumerations
    static SubComponents: number; // 0
    static Controller: number; // 1

    // Properties
    objectName: string; //
    name: string; //

    // Methods
    addPropertiesToFreeze(p0: DzNode): any;
    deleteLater(): any;
    destroyed(): any;
    destroyed(p0: QObject): any;
    doFreeze(): boolean;
    getApplyController(): any;
    getAttenuateMode(): any;
    getAttenuateProperty(): any;
    getControllerNode(): any;
    getControllerProperty(): any;
    getKeyed(): any;
    getPropertiesToFreeze(): any;
    getRestoreFigure(): any;
    getRestoreRigging(): any;
    getRestoreSelectedItems(): any;
    setApplyController(p0: boolean): any;
    setAttenuateMode(p0: number): any;
    setAttenuateProperty(p0: DzNumericProperty): any;
    setControllerNode(p0: DzNode): any;
    setControllerProperty(p0: DzNumericProperty): any;
    setKeyed(p0: boolean): any;
    setPropertiesToFreeze(p0: DzProperty[]): any;
    setRestoreFigure(p0: boolean): any;
    setRestoreRigging(p0: boolean): any;
    setRestoreSelectedItems(p0: boolean): any;

    // Signals
    ERCChanged(): any;
}