/**
 * Script wrapper for QTabWidget.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/tabwidget_dz
 */
declare class DzTabWidget extends DzWidget {

    /* Properties */

    /**
     * The number of tabs in the tab stack. (Read Only)
     */
    count: number; // Number

    /**
     * The index position of the current tab page.
     */
    currentIndex: number; // Number

    /**
     * Whether the widget is rendered in a mode suitable for document pages, without a frame.
     */
    documentMode: boolean; // Boolean

    /**
     * Whether the tabs can be reordered.
     */
    movable: boolean; // Boolean

    /**
     * Holds which side of the widget the tab row is drawn on.
     */
    tabPosition: number; // TabPosition

    /**
     * Whether close buttons are automatically added to each tab.
     */
    tabsClosable: boolean; // Boolean

    /**
     * Whether a tab bar should use buttons to scroll tabs when it has many tabs.
     */
    usesScrollButtons: boolean; // Boolean

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of TabPosition.
     */
    static North: number;

    /**
     * DAZ enum member of TabPosition.
     */
    static South: number;

    /**
     * DAZ enum member of TabPosition.
     */
    static West: number;

    /**
     * DAZ enum member of TabPosition.
     */
    static East: number;

    /* Constructors */

    /**
     * @param parent DzWidget
     */
    constructor(parent: DzWidget);

    /* Methods */

    /**
     * Adds page as a new tab with the given label.
     * @param page DzWidget
     * @param label string
     * @returns number The index of the added tab
     */
    addTab(page: DzWidget, label: string): number; // Number

    /**
     * Removes all the pages, but does not delete them.
     */
    clear(): void;

    /**
     * @returns DzWidget The widget shown in the corner of the tab widget or null.
     */
    cornerWidget(): DzWidget;

    /**
     * @returns DzWidget The widget for the page currently being displayed.
     */
    currentWidget(): DzWidget;

    /**
     * @param page DzWidget
     * @returns number The index position of the page occupied by widget, or -1 if widget cannot be found.
     */
    indexOf(page: DzWidget): number; // Number

    /**
     * Inserts page as a new tab with the label label at position index.
     * @param index number
     * @param page DzWidget
     * @param label string
     * @returns number The index of the inserted tab.
     */
    insertTab(index: number, page: DzWidget, label: string): number; // Number

    /**
     * @param index number
     * @returns boolean true if the page at position index is enabled, otherwise false.
     */
    isTabEnabled(index: number): boolean; // bool

    /**
     * Removes the page at index from the tab widget.
     * @param index number
     */
    removeTab(index: number): void;

    /**
     * Sets widget to be shown in the corner of the tab widget.
     * @param widget DzWidget
     */
    setCornerWidget(widget: DzWidget): void;

    /**
     * Makes widget the current page.
     * @param page DzWidget
     */
    setCurrentWidget(page: DzWidget): void;

    /**
     * Sets the enabled state of the page at position index.
     * @param index number
     * @param enable boolean
     */
    setTabEnabled(index: number, enable: boolean): void;

    /**
     * Sets the label of the page at position index.
     * @param index number
     * @param label string
     */
    setTabText(index: number, label: string): void;

    /**
     * Sets the tool tip text for the page at position index.
     * @param index number
     * @param tip string
     */
    setTabToolTip(index: number, tip: string): void;

    /**
     * Sets the what's this text for the page at position index.
     * @param index number
     * @param text string
     */
    setTabWhatsThis(index: number, text: string): void;

    /**
     * @param index number
     * @returns string The label of the page at position index.
     */
    tabText(index: number): string; // String

    /**
     * @param index number
     * @returns string The tool tip for the page at position index.
     */
    tabToolTip(index: number): string; // String

    /**
     * @param index number
     * @returns string The whats this text for the page at position index.
     */
    tabWhatsThis(index: number): string; // String

    /**
     * @param index number
     * @returns DzWidget The widget for the page at position index.
     */
    widget(index: number): DzWidget;

    /* Signals */

    /**
     * Emitted whenever the current page index changes.
     * @param index number
     */
    currentChanged: ISignal<number>;

    /**
     * Emitted when the close button on a tab is clicked.
     * @param index number
     */
    tabCloseRequested: ISignal<number>;

    /* Undocumented Augment Members */

    /** @undocumented */
    currentPage: number; // -1

    /** @undocumented */
    changeTab(widget: DzWidget, text: QString): void;

    /** @undocumented */
    currentPageWidget(): DzWidget;

    /** @undocumented */
    label(index: number): void;

    /** @undocumented */
    page(page: number): void;

    /** @undocumented */
    removeTabToolTip(widget: DzWidget): void;

    /** @undocumented */
    setTabLabel(widget: DzWidget, label: QString): void;

    /** @undocumented */
    tabLabel(widget: DzWidget): void;

    /** @undocumented */
    removePage(widget: DzWidget): void;

    /** @undocumented */
    setCurrentPage(page: number): void;

    /** @undocumented */
    showPage(widget: DzWidget): void;
}
