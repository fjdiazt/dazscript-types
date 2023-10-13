declare class DzGridLayout extends DzLayout {

    constructor(parent: DzWidget);
    constructor(parent: DzLayout);

    setRowStretch(row: number, stretch: number): ISignal;
    setColStretch(col: number, stretch: number): ISignal;
    setRowSpacing(row: number, minSize: number): ISignal;
    setColSpacing(col: number, minSize: number): ISignal;
    rowStretch(row: number): number;
    colStretch(col: number): number;
    rowSpacing(row: number): number;
    colSpacing(col: number): number;
    rowCount(): number;
    colCount(): number;
    addWidget(widget: DzWidget): void;
    addWidget(widget: DzWidget, row: number, col: number, rowSpan?: number, colSpan?: number): void;
    addMultiCellWidget(widget: DzWidget, fromRow: number, toRow: number, fromCol: number, toCol: number): void;
    addLayout(layout: DzLayout, row: number, col: number, rowSpan?: number, colSpan?: number): void;
    addMultiCellLayout(layout: DzLayout, fromRow: number, toRow: number, fromCol: number, toCol: number): void;
}