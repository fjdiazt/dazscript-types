declare class DzNodeProperty extends DzProperty {
    static className(): string;
    /** Properties */

    /** Methods */
    aboutToChange(): void;
    exclude(node: DzNode): void;
    getDefaultValue(): DzNode;
    getKeyValue(i: number): DzNode;
    getValue(tm: DzTime): DzNode;
    getValue(): DzNode;
    getValue(tm: DzTime): DzNode;
    getValue(): DzNode;
    isExcluded(node: DzNode): boolean;
    setDefaultValue(val: DzNode): void;
    setKeyValue(which: number, val: DzNode): void;
    setValue(val: DzNode): void;
    setValue(tm: DzTime, val: DzNode): void;
    setValue(val: DzNode): void;
    setValue(tm: DzTime, val: DzNode): void;
    changeNode(node: DzNode): void;
    clearobject(): void;
    isExcluded(node: DzNode): boolean;
    propertyChangeNotify(): void;
    setValue(val: DzNode): void;
    showEvent(e: QShowEvent): void;
    updateNodeList(): void;
    updateValue(): void;
}