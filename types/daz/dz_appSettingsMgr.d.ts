declare class DzAppSettingsMgr extends QObject {

    /* Properties */

    /* Methods */
    pushPath(path: QString): void;
    popPath(): void;
    setBoolValue(key: QString, setting: boolean): boolean;
    setIntValue(key: QString, setting: number): boolean;
    setFloatValue(key: QString, setting: number): boolean;
    setStringValue(key: QString, setting: QString): boolean;
    setColorValue(key: QString, setting: QColor): boolean;
    removeValue(key: QString): boolean;
    getBoolValue(key: QString, def: boolean, ok: boolean): boolean;
    getBoolValue(key: QString, def: boolean, ok: boolean): boolean;
    getBoolValue(key: QString, def: boolean, ok: boolean): boolean;
    getIntValue(key: QString, def: number, ok: boolean): number;
    getIntValue(key: QString, def: number, ok: boolean): number;
    getIntValue(key: QString, def: number, ok: boolean): number;
    getFloatValue(key: QString, def: number, ok: boolean): number;
    getFloatValue(key: QString, def: number, ok: boolean): number;
    getFloatValue(key: QString, def: number, ok: boolean): number;
    getStringValue(key: QString, def: QString, ok: boolean): QString;
    getStringValue(key: QString, def: QString, ok: boolean): QString;
    getStringValue(key: QString, def: QString, ok: boolean): QString;
    getColorValue(key: QString, def: QColor, ok: boolean): QColor;
    getColorValue(key: QString, def: QColor, ok: boolean): QColor;
    getColorValue(key: QString, def: QColor, ok: boolean): QColor;
}