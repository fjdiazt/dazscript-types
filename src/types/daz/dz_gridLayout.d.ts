/**
 * Script wrapper for QGridLayout.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/gridlayout_dz
 */
declare class DzGridLayout extends DzLayout {

    /* Constructors */

    /**
     * @param parent DzWidget | DzLayout
     */
    constructor(parent: DzWidget | DzLayout);

    /**
     * @param parent DzWidget
     */
    constructor(parent: DzWidget);

    /**
     * @param parent DzLayout
     */
    constructor(parent: DzLayout);

    /* Methods */

    /**
     * Adds a layout to the items managed by this layout.
     * @param item DzLayout - The layout to add to this layout.
     * @param row number - The row to insert the layout into.
     * @param col number - The column to insert the layout into.
     * @param rowSpan number - The number of rows the layout should span (1 if not specified).
     * @param colSpan number - The number of columns the layout should span (1 if not specified).
     */
    addLayout(item: DzLayout, row: number, col: number, rowSpan?: number, colSpan?: number): void;

    /**
     * Adds a widget to the items managed by this layout.
     * @param item DzWidget - The widget to add to the layout.
     * @param row number - The row to insert the widget into.
     * @param col number - The column to insert the widget into.
     * @param rowSpan number - The number of rows the widget should span (1 if not specified).
     * @param colSpan number - The number of columns the widget should span (1 if not specified).
     */
    addWidget(item: DzWidget, row: number, col: number, rowSpan?: number, colSpan?: number): void;

    /**
     * @returns number The number of columns in this layout.
     */
    colCount(): number; // Number

    /**
     * @param col number - The index of the column.
     * @returns number The minimum width for the column.
     */
    colSpacing(col: number): number; // Number

    /**
     * @param col number - The index of the column.
     * @returns number The relative amount of stretch for the column.
     */
    colStretch(col: number): number; // Number

    /**
     * @returns number The number of rows in this layout.
     */
    rowCount(): number; // Number

    /**
     * @param row number - The index of the row.
     * @returns number The minimum height for the row.
     */
    rowSpacing(row: number): number; // Number

    /**
     * @param row number - The index of the row.
     * @returns number The relative amount of stretch for the row.
     */
    rowStretch(row: number): number; // Number

    /**
     * Sets the minimum width for a column.
     * @param col number - The index of the column.
     * @param minSize number - The minimum width to set.
     */
    setColSpacing(col: number, minSize: number): void;

    /**
     * Sets the relative amount of stretch for a column.
     * @param col number - The index of the column.
     * @param stretch number - The stretch factor to set.
     */
    setColStretch(col: number, stretch: number): void;

    /**
     * Sets the minimum height for a row.
     * @param row number - The index of the row.
     * @param minSize number - The minimum height to set.
     */
    setRowSpacing(row: number, minSize: number): void;

    /**
     * Sets the relative amount of stretch for a row.
     * @param row number - The index of the column.
     * @param stretch number - The stretch factor to set.
     */
    setRowStretch(row: number, stretch: number): void;

    /**
     * Deprecated
     * @param item DzWidget
     * @param fromRow number
     * @param toRow number
     * @param fromCol number
     * @param toCol number
     */
    addMultiCellWidget(item: DzWidget, fromRow: number, toRow: number, fromCol: number, toCol: number): void;

    /**
     * Deprecated
     * @param item DzLayout
     * @param fromRow number
     * @param toRow number
     * @param fromCol number
     * @param toCol number
     */
    addMultiCellLayout(item: DzLayout, fromRow: number, toRow: number, fromCol: number, toCol: number): void;
}
