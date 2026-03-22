declare class DzColorWgt extends DzWidget {
    /* Properties */
    defaultFloatColorValue: DzFloatColor;
    defaultValue: Color;
    displayAsInt: boolean;
    floatClamped: boolean;
    floatColorValue: DzFloatColor;
    floatMax: number;
    floatMin: number;
    indeterminate: boolean;
    isEditing: boolean;
    restorable: boolean;
    value: Color;

    /* Constructors */
    constructor(parent: DzWidget);

    /* Signals */
    colorChanged(color: Color): void;
    editEnd(): void;
    editStart(): void;
    floatColorChanged(color: DzFloatColor): void;
}