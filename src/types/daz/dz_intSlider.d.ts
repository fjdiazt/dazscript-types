declare class DzIntSlider extends DzSlider {
    /* Properties */
    defaultValue: number;
    displayAsPercent: boolean;
    indeterminate: boolean;
    max: number;
    min: number;
    sensitivity: number;
    value: number;

    /* Constructors */
    constructor(parent: DzWidget);

    /* Signals */
    editCancelled(): void;
    valueChanged(value: number): void;
}
