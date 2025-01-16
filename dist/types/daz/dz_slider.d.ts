declare class DzSlider extends DzWidget {
    /* Properties */
    clamped: boolean;
    fullLengthEdit: boolean;
    isEditing: boolean;
    label: string;
    labelVisible: boolean;
    restorable: boolean;
    sensitivity: number;
    text: string;
    textEditable: boolean;
    textVisible: boolean;

    /* Methods */
    step(positive: boolean): void;

    /* Signals */
    editCancelled(): void;
    editEnd(): void;
    editStart(): void;
}