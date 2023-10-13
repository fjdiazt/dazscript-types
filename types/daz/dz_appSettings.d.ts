declare class DzAppSettings {
    constructor();
    constructor(startPath: string)

    name: string;	//
    objectName: string;	//
    className(): any;
    className(): any;
    containsValue(p0: string): any;
    deleteLater(): any;
    destroyed(): void;
    destroyed(p0: QObject): void;
    getBoolValue(p0: string): any;
    getBoolValue(p0: string, p1: boolean): any;
    getBoolValue(p0: string, p1: boolean, p2: boolean): any;
    getColorValue(p0: string): any;
    getColorValue(p0: string, p1: Color): any;
    getColorValue(p0: string, p1: Color, p2: boolean): any;
    getFloatColorValue(p0: string): any;
    getFloatColorValue(p0: string, p1: DzFloatColor): any;
    getFloatColorValue(p0: string, p1: DzFloatColor, p2: boolean): any;
    getFloatValue(p0: string): any;
    getFloatValue(p0: string, p1: number): any;
    getFloatValue(p0: string, p1: number, p2: boolean): any;
    getIntValue(p0: string): any;
    getIntValue(p0: string, p1: number): any;
    getIntValue(p0: string, p1: number, p2: boolean): any;
    getName(): any;
    getStringValue(p0: string): any;
    getStringValue(p0: string, p1: string): any;
    getStringValue(p0: string, p1: string, p2: boolean): any;
    inherits(): any;
    inherits(p0: string): any;
    iskindof(p0: string): any;
    makePersistent(): any;
    nameChanged(p0: string): void;
    popPath(): void;
    pushPath(path: string): void;
    removeValue(p0: string): any;
    setBoolValue(p0: string, p1: boolean): any;
    setColorValue(p0: string, p1: Color): any;
    setFloatColorValue(p0: string, p1: DzFloatColor): any;
    setFloatValue(p0: string, p1: number): any;
    setIntValue(p0: string, p1: number): any;
    setStringValue(p0: string, p1: string): any;
}