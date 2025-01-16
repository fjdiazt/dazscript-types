declare class DzERCBake {
    doBake(): boolean;
    doBakeKeyed(warn: boolean): boolean;
    getControllerProperty(): DzNumericNodeProperty;
    setControllerProperty(property: DzNumericProperty): void;
}