declare class DzSlider extends DzWidget {

    /* Properties */
    clamped: boolean;
    displayAsPercent: boolean;
    indeterminate: boolean;
    label: String;
    labelVisible: boolean;
    max: number;
    min: number;
    sensitivity: number;
    text: String;
    textEditable: boolean;
    textVisible: boolean;
    value: number;
    defaultValue: number;

    restorable: boolean;

    /* Methods */
    calcEditRect(): QRect;
    calcLabelRect(): QRect;
    calcMinSize(): QSize;
    calcSliderRect(): QRect;
    calcTextRect(): QRect;
    dragSpinner(delta: number): void;
    editBoxChange(text: QString): void;
    editCancelled(): void;
    editEnd(): void;
    editStart(): void;
    endSpinnerDrag(): void;
    finishEdit(): void;
    getArea(): number;
    getEditRect(): QRect;
    getEndWidthPixelMetric(): number;
    getLabel(): QString;
    getLabelRect(): QRect;
    getPosition(): number;
    getSliderOrientation(): number;
    getSliderRect(): QRect;
    getSliderThicknessPixelMetric(): number;
    getState(): number;
    getText(): QString;
    getTextRect(): QRect;
    isClamped(): boolean;
    isEditing(): boolean;
    isInState(value: number): boolean;
    isTextEditable(): boolean;
    isTextVisible(): boolean;
    leaveEvent(e: QEvent): void;
    mouseMoveEvent(e: QMouseEvent): void;
    mousePressEvent(e: QMouseEvent): void;
    mouseReleaseEvent(e: QMouseEvent): void;
    paintEvent(e: QPaintEvent): void;
    resizeEvent(e: QResizeEvent): void;
    setClamped(onOff: boolean): void;
    setLabel(label: QString): void;
    setNoChange(onOff: boolean): void;
    setPosition(pos: number): void;
    setShowLabel(onOff: boolean): void;
    setText(text: QString): void;
    setTextEditable(onOff: boolean): void;
    setTextVisible(onOff: boolean): void;
    showEdit(rect: QRect): void;
    showingLabel(): boolean;
    startSpinnerDrag(pos: number): void;
    step(positive: boolean): void;
    tabletEvent(e: QTabletEvent): void;
    textChanged(text: QString): void;
    timerEvent(e: QTimerEvent): void;
    updateMinSize(): void;
    updateRect(): void;
}