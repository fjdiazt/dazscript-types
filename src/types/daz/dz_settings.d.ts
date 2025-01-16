declare class DzSettings extends QObject {
    // setStringValue(name: string, value: string): ISignal;
    setStringValue(name: string, value: string): boolean;
    setIntValue(name: string, value: number): any;
    setBoolValue(name: string, value: boolean): any;
    setFloatValue(name: string, value: number): any;
    setSettingsValue(name: string, settings: DzSettings): any;
    setSettingsValue(name: string): DzSettings;
    removeValue(name: string): void;
    clear(): any;
    getStringValue(name: string, s: string): string;
    getStringValue(s: string): string;
    getIntValue(s: string, value: number): number;
    getIntValue(s: string): number;
    getBoolValue(s: string, flag: boolean): boolean;
    getBoolValue(s: string): boolean;
    getFloatValue(s: string, value: number): number;
    getFloatValue(s: string): number;
    getSettingsValue(s: string): DzSettings;
    getSettingIndex(s: string): number;
    getNumValues(): any;
    hasKey(s: string): number;
    getKey(value: number): string;
    getValueType(value: number): number;
    getValue(value: number): string;
    fromString(s: string): any;
    toString(): any;
    copySetting(name: string, settings: DzSettings): any;
    copySetting(index: number, settings: DzSettings): any;
    replaceWithSettings(settings: DzSettings): any;
    toScript(name: string, script: DzScript, n: number, flag?: boolean): any;
    toJson(): Object;
    toJsonString(): string;

    StringValue: number; // 0
    IntValue: number; // 1
    BoolValue: number; // 2
    FloatValue: number; // 3
    SettingsValue: number; // 4
}