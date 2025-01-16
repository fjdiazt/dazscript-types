declare class DzIntProperty extends DzNumericProperty {

    /* Properties */

    /* Methods */
    adjustValue(tm: DzTime, val: number): number;
    adjustValue(val: number): number;
    adjustValue(tm: DzTime, val: number): number;
    adjustValue(val: number): number;
    getDefaultValue(): number;
    getKeyValue(i: number): number;
    getKeys(): any;
    getLocalValue(tm: DzTime): number;
    getLocalValue(): number;
    getLocalValue(tm: DzTime): number;
    getLocalValue(): number;
    getMinMax(min: number, max: number): boolean;
    getRawValue(tm: DzTime): number;
    getRawValue(): number;
    getRawValue(tm: DzTime): number;
    getRawValue(): number;
    getSensitivity(): number;
    getValue(tm: DzTime): number;
    getValue(): number;
    getValue(tm: DzTime): number;
    getValue(): number;
    setDefaultValue(val: number): void;
    setKeyValue(keyIndex: number, val: number): void;
    setRawValue(tm: DzTime, val: number): void;
    setRawValue(val: number): void;
    setRawValue(tm: DzTime, val: number): void;
    setRawValue(val: number): void;
    setSensitivity(sens: number): void;
    setValue(tm: DzTime, val: number): void;
    setValue(val: number): void;
    setValue(tm: DzTime, val: number): void;
    setValue(val: number): void;
    addImageMenu(): void;
    calcEditRect(): QRect;
    calcLabelRect(): QRect;
    calcMinSize(): QSize;
    calcSliderRect(): QRect;
    calcTextRect(): QRect;
    enterEvent(e: QEvent): void;
    isMouseOverType(): boolean;
    isPropHidden(): boolean;
    leaveEvent(e: QEvent): void;
    mouseMoveEvent(e: QMouseEvent): void;
    mouseReleaseEvent(e: QMouseEvent): void;
    setIndent(indent: number): void;
    setIsMouseOverType(onOff: boolean): void;
    setLocked(onOff: boolean): void;
    setPropHidden(onOff: boolean): void;
    timerEvent(obj: QTimerEvent): void;
    updateImageMenuGeom(): void;
    isMouseOverSlider(): boolean;
    propStateChangeNotify(): void;
    propertyChangeNotify(): void;
    setIsMouseOverSlider(onOff: boolean): void;
    setValue(value: number): void;
    startEdit(): void;
    getMax(): number;
    getMin(): number;
}