declare class DzPushButton extends DzButton {
    autoDefault: boolean; // true
    default: boolean; // false
    flat: boolean; // false
    buttonStyle: number; // 0
    buttonTextFormat: number; // 132
    primitive: string; // PanelButtonCommand
    downArrowPrimitive: string; // DZ_ComboBoxArrow
    textStyle: string; // ButtonCommand
    elideMode: number; // 3
    displayDownArrow: boolean; // false
    iconMetric: string; // ButtonIconSize
    downArrowMetric: string; // DZ_ComboBoxArrowExtent
    sizedFromIcon: boolean;
    collapseEmptySpace: boolean;

    buttonStyleChanged(buttonStyle: number): ISignal;
    buttonTextFormatChanged(format: number): ISignal;
    primitiveChanged(name: QString): ISignal;
    downArrowPrimitiveChanged(name: QString): ISignal;
    textStyleChanged(style: QString): ISignal;
    elideModeChanged(mode: number): ISignal;
    displayDownArrowChanged(state: boolean): ISignal;
    iconMetricChanged(metric: QString): ISignal;
    downArrowMetricChanged(metric: QString): ISignal;
    setToggleButton(state: boolean): ISignal;
    setCheckable(checkable: boolean): void;

    static BCommand: number; // 0
    static BTool: number; // 1
    static BDefault: number; // 2
    static BBasic: number; // 3
    static BNoFrame: number; // 4
    static BCustom: number; // 5
}