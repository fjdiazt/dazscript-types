declare class DzListViewItem extends QObject {
    constructor(parent: DzListView | DzListViewItem, id?: number);
    dragEnabled: boolean;	// false
    dropEnabled: boolean;	// false
    enabled: boolean;	// true
    expandable: boolean;	// false
    height: number;	// 16
    id: number;	// -1
    multiLinesEnabled: boolean;	// false
    name: string;	// ListViewItem
    objectName: string;	// ListViewItem
    open: boolean;	// false
    selectable: boolean;	// true
    selected: boolean;	// false
    visible: boolean;	// true
    addDataItem(p0: string, p1: QVariant): any;
    childCount(): any;
    className(): any;
    compare(p0: DzListViewItem, p1: number, p2: boolean): any;
    deleteItem(p0: DzListViewItem): any;
    deleteLater(): any;
    depth(): any;
    destroyed(): void;
    destroyed(p0: QObject): void;
    firstChild(): DzListViewItem;
    getDataItem(p0: string): any;
    getNumDataItems(): any;
    inherits(): any;
    insertItem(p0: DzListViewItem): any;
    itemAbove(): DzListViewItem;
    itemBelow(): DzListViewItem;
    key(p0: number, p1: boolean): any;
    listView(): DzListView;
    moveItem(p0: DzListViewItem): any;
    nextSibling(): any;
    parent(): DzListViewItem;
    pixmap(p0: number): any;
    removeItem(p0: DzListViewItem): any;
    renameEnabled(p0: number): void;
    setPixmap(p0: number, p1: QPixmap): any;
    setRenameEnabled(p0: number, p1: boolean): void;
    setText(p0: number, p1: string): any;
    sort(): any;
    sortChildItems(p0: number, p1: boolean): any;
    startRename(p0: number): any;
    text(p0: number): string;
}