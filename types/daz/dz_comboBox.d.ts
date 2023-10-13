declare class DzComboBox extends DzWidget {
    /* Properties */

    count: number; // 0
    currentItem: number; // -1
    currentText: string; //
    maxVisibleItems: number; // 10
    minimumContentsLength: number; // 0
    insertPolicy: number; // 3
    sizeAdjustPolicy: number; // 1

    //activated(index: number): ISignal;
    //activated(item: QString): ISignal;
    activated: ISignal;
    /** currentIndexChanged(index: number): ISignal;
     * currentIndexChanged(item: QString): ISignal;
     */
    currentIndexChanged: ISignal;
    textChanged: ISignal;

    addItem(text: QString): void;
    addItem(text: QString, userData: QString): void;
    addItems(items: QString[]): void;
    highlighted(index: number): ISignal;
    highlighted(item: QString): ISignal;
    findData(data: QString): ISignal;
    findText(text: QString): number;
    insertItem(index: number, item: QString, data?: QString): ISignal;
    insertItems(index: number, items: QString[]): ISignal;
    insertSeparator(index: number): ISignal;
    //itemData(index: number): ISignal;
    itemData(index: number): string;
    itemText(index: number): ISignal;
    removeItem(index: number): ISignal;
    setItemData(index: number, data: QString): ISignal;
    setItemText(index: number, text: QString): ISignal;
    clear(): any;
    insertItem(item: QString): ISignal;

    text(index: number): QString;
    /** text(index: number): ISignal; */
    //text: ISignal;


    static NoInsert: number; // 0
    static InsertAtTop: number; // 1
    static InsertAtCurrent: number; // 2
    static InsertAtBottom: number; // 3
    static InsertAfterCurrent: number; // 4
    static InsertBeforeCurrent: number; // 5
    static InsertAlphabetically: number; // 6
    static AdjustToContents: number; // 0
    static AdjustToContentsOnFirstShow: number; // 1
    static AdjustToMinimumContentsLength: number; // 2
    static AdjustToMinimumContentsLengthWithIcon: number; // 3
}