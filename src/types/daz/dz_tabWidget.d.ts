declare class DzTabWidget extends DzWidget {
    static North: number; // 0
    static South: number; // 1
    static West: number; // 2
    static East: number; // 3

    count: number; // 0
    currentPage: number; // -1
    currentIndex: number; // -1
    documentMode: boolean; // false
    movable: boolean; // false
    tabPosition: number; // 0
    tabsClosable: boolean; // false
    usesScrollButtons: boolean; // true

    tabCloseRequested(index: number): void;
    addTab(widget: DzWidget, name: QString): number;
    clear(): any;
    cornerWidget(): DzWidget;
    currentWidget(): DzWidget;
    indexOf(widget: DzWidget): void;
    insertTab(index: number, widget: DzWidget, name: QString): void;
    isTabEnabled(index: number): void;
    removeTab(index: number): void;
    setCornerWidget(widget: DzWidget): void;
    setTabEnabled(index: number, state: boolean): void;
    setTabText(index: number, text: QString): void;
    setTabToolTip(index: number, text: QString): void;
    setTabWhatsThis(index: number, text: QString): void;
    tabText(index: number): void;
    tabToolTip(index: number): void;
    tabWhatsThis(index: number): void;
    widget(index: number): void;
    setCurrentWidget(widget: DzWidget): void;
    changeTab(widget: DzWidget, text: QString): void;
    currentPageWidget(): DzWidget;
    insertTab(widget: DzWidget, text: QString, index: number): void;
    insertTab(widget: DzWidget, text: QString): void;
    isTabEnabled(widget: DzWidget): void;
    label(index: number): void;
    page(page: number): void;
    removeTabToolTip(widget: DzWidget): void;
    setTabEnabled(widget: DzWidget, state: boolean): void;
    setTabLabel(widget: DzWidget, label: QString): void;
    setTabToolTip(widget: DzWidget, toolTip: QString): void;
    tabLabel(widget: DzWidget): void;
    tabToolTip(widget: DzWidget): void;
    removePage(widget: DzWidget): void;
    setCurrentPage(page: number): void;
    showPage(widget: DzWidget): void;

    // Signals
    currentChanged: ISignalT<number> | ISignalT<DzWidget>; //currentChanged(index: number): void;
}