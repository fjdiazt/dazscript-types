declare class DzListBox extends DzScrollView {
    // LayoutMode enum
    static FixedNumber: number
    static FitToWidth: number
    static FitToHeight: number
    static Variable: number

    // SelectionMode enum
    static Single: number;
    static Multi: number;
    static Extended: number;
    static NoSelection: number;

    /* Properties */
    columnMode: number;
    count: number;
    currentItem: number;
    currentText: string;
    numColumns: number;
    numItemsVisible: number;
    numRows: number;
    rowMode: number;
    selected: number;
    selectionMode: number;
    topItem: number;
    variableHeight: boolean;
    variableWidth: boolean;

    /* Methods */
    clear(): void;
    insertItem(text: string): void;
    isSelected(index: number): boolean;
    /**
     * Removes the given item from the list box
     * @param index
     */
    removeItem(index: number): any;
    /**
     * Sets whether the item at the given index is selected
     * @param index
     * @param selected
     */
    setSelected(index: number, selected: boolean): void;
    text(index: number): string;

    // Signals
    currentChanged: ISignal;

    // TODO:
    getWidget(): any; // TODO ;
    getLayout(): any; // TODO ;
    show(): any; // TODO ;
    hide(): any; // TODO ;
    setFixedSize(): any; // TODO ;
    setFixedWidth(): any; // TODO ;
    setFixedHeight(): any; // TODO ;
    setGeometry(): any; // TODO ;
    getChildrenOfWidget(): any; // TODO ;
    getChildrenOfWidget(): any; // TODO ;
    findChildOfWidget(): any; // TODO ;
    reparent(): any; // TODO ;
    reparent(): any; // TODO ;
    highlighted(): any; // TODO ;
    //selected(s: String): any; // TODO ;
    highlighted(): any; // TODO ;
    //selected(index: number): any; // TODO ;

    selectionChanged(): any; // TODO ;

    clicked(): any; // TODO ;
    pressed(): any; // TODO ;
    pressed(): any; // TODO ;
    doubleClicked(): any; // TODO ;
    returnPressed(): any; // TODO ;
    rightButtonClicked(): any; // TODO ;
    rightButtonPressed(): any; // TODO ;
    mouseButtonPressed(): any; // TODO ;
    mouseButtonClicked(): any; // TODO ;
    contextMenuRequested(): any; // TODO ;
    onItem(): any; // TODO ;
    onViewport(): any; // TODO ;


    ensureCurrentVisible(): any; // TODO ;
    clearSelection(): any; // TODO ;
    selectAll(): any; // TODO ;
    invertSelection(): any; // TODO ;
    sort(): any; // TODO ;
    sort(): any; // TODO ;
}