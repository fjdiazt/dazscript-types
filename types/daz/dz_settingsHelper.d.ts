declare class DzSettingsHelper extends QObject {
    objectName: string; //
    set(toolName: string, name: string, value: QVariant): any;
    get(toolName: string, name: string, value: QVariant): any;
    hasValue(toolName: string, name: string): any;
    removeValue(p0: string, p1: string): any;
    name: string; //
}