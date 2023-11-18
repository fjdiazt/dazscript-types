declare class DzListView extends DzScrollView {

    // Enumerations
    static Single: number; // 0
    static Multi: number; // 1
    static Extended: number; // 2
    static NoSelection: number; // 3

    static NoColumn: number; // 0
    static AllColumns: number; // 1
    static LastColumn: number; // 2

    static Accept: number; // 0
    static Reject: number; // 1

    static Manual: number; // 0
    static Maximum: number; // 1

    static Selected: number; // 0
    static Unselected: number; // 1
    static Checked: number; // 2
    static NotChecked: number; // 3
    static All: number; // 4

    // Properties
    allColumnsShowFocus: boolean; // false
    childCount: number; // 0
    columns: number; // 0
    defaultRenameAction: number; // 1
    itemMargin: number; // 1
    resizeMode: number; // 0
    rootIsDecorated: boolean; // false
    selectionMode: number; // 0
    showSortIndicator: boolean; // false
    showToolTips: boolean; // true
    sortColumn: number; // 0
    sortOrder: number; // 0
    treeStepSize: number; // 20

    // Methods
    addColumn(p0: string): any;
    clear(): any;
    clearSelection(): any;
    columnAlignment(p0: number): any;
    columnText(p0: number): any;
    columnWidth(p0: number): any;
    columnWidthMode(p0: number): any;
    currentItem(): DzListViewItem;
    deleteItem(p0: DzListViewItem): any;
    ensureItemVisible(p0: DzListViewItem): any;
    findChildOfWidget(p0: string): any;

    findItem(p0: string, p1: number): DzListViewItem;
    findItem(p0: string, p1: number, eComparisonFlags: any): DzListViewItem;

    firstChild(): any;
    getItems(eItemsMode: number): Array<DzListViewItem>;
    header(): any;
    hideColumn(p0: number): any;
    isOpen(p0: DzListViewItem): any;
    isRenaming(): any;
    isSelected(p0: DzListViewItem): any;
    lastItem(): any;
    removeColumn(p0: number): any;
    selectedItem(): DzListViewItem;
    setColumnAlignment(p0: number, p1: number): any;
    setColumnText(p0: number, p1: string): any;
    setColumnWidth(number: number, width: number): any;
    setColumnWidthMode(p0: number, eDSWidthMode: number): any;
    setCurrentItem(p0: DzListViewItem): any;
    setGeometry(p0: number, p1: number, p2: number, p3: number): any;
    setOpen(p0: DzListViewItem, p1: boolean): any;
    setSelected(p0: DzListViewItem, p1: boolean): any;
    setSelectionAnchor(p0: DzListViewItem): any;
    setSorting(p0: number): any;
    setSorting(p0: number, p1: boolean): any;
    sort(): any;

    // Signals
    clicked(p0: DzListViewItem): any;
    clicked(p0: DzListViewItem, p1: number, p2: number): any;
    collapsed(item: DzListViewItem): void;
    // contextMenuRequested: ISignal; // contextMenuRequested( DzListViewItem item, Point pos, Number col )
    contextMenuRequested: ISignalT<DzListViewItem, Point>
    currentChanged: ISignalT<DzListViewItem>; // currentChanged(p0:DzListViewItem): any;
    doubleClicked: ISignalT<DzListViewItem>; // doubleClicked(p0:DzListViewItem, p1:number, p2:number): any;
    expanded(item: DzListViewItem): void;
    itemRenamed(p0: DzListViewItem, p1: number): any;
    itemRenamed(p0: DzListViewItem, p1: number, p2: string): any;
    mouseButtonClicked(p0: number, p1: DzListViewItem, p2: number, p3: number): any;
    mouseButtonPressed(p0: number, p1: DzListViewItem, p2: number, p3: number): any;
    pressed(p0: DzListViewItem): any;
    pressed(p0: DzListViewItem, p1: number, p2: number): any;
    returnPressed: ISignal; // returnPressed(p0:DzListViewItem): any;
    rightButtonClicked(p0: DzListViewItem, p1: number, p2: number): any;
    rightButtonPressed(p0: DzListViewItem, p1: number, p2: number): any;
    // selectionChanged(): void;
    selectionChanged: ISignal; // selectionChanged(p0:DzListViewItem): void;
    spacePressed(p0: DzListViewItem): any;
}