/**
 * Specifies how a widget resizes based on its content or the layout.
 */
declare class QSizePolicy {
    constructor()
    constructor(horizontal: QtSizeType, vertical: QtSizeType, hfw?: boolean);

    // Properties
    horizontalPolicy: QtSizeType;
    verticalPolicy: QtSizeType;
    horizontalStretch: number;
    verticalStretch: number;

    // Methods
    horData(): QtSizeType;
    verData(): QtSizeType;
    mayShrinkHorizontally(): boolean;
    mayShrinkVertically(): boolean;
    mayGrowHorizontally(): boolean;
    mayGrowVertically(): boolean;
    expanding(): QtExpandData;
    setHorData(d: QtSizeType): void;
    setVerData(d: QtSizeType): void;
    setHeightForWidth(b: boolean): void;
    hasHeightForWidth(): boolean;
    horStretch(): number;
    verStretch(): number;
    setHorStretch(sf: number): void;
    setVerStretch(sf: number): void;
    transpose(): void;
    equals(s: QSizePolicy): boolean;
    notEquals(s: QSizePolicy): boolean;
}

