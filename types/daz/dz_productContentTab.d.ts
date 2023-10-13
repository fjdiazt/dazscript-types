declare class DzProductContentTab extends DzContentTab {

    // Properties
    objectName: string; // ProductContentTab
    modal: boolean; // false
    windowModality: number; // 0
    enabled: boolean; // true
    geometry: object; // [object Object]
    frameGeometry: object; // [object Object]
    normalGeometry: object; // [object Object]
    x: number; // 0
    y: number; // 0
    pos: object; // [object Object]
    frameSize: object; // [object Object]
    size: object; // [object Object]
    width: number; // 578
    height: number; // 673
    rect: object; // [object Object]
    childrenRect: object; // [object Object]
    childrenRegion: object; // QVariant(QRegion)
    sizePolicy: object; // QVariant(QSizePolicy)
    minimumSize: object; // [object Object]
    maximumSize: object; // [object Object]
    minimumWidth: number; // 0
    minimumHeight: number; // 0
    maximumWidth: number; // 16777215
    maximumHeight: number; // 16777215
    sizeIncrement: object; // [object Object]
    baseSize: object; // [object Object]
    cursor: object; // QVariant(QCursor)
    mouseTracking: boolean; // false
    isActiveWindow: boolean; // true
    focusPolicy: number; // 0
    focus: boolean; // false
    contextMenuPolicy: number; // 1
    updatesEnabled: boolean; // true
    visible: boolean; // false
    minimized: boolean; // false
    maximized: boolean; // false
    fullScreen: boolean; // false
    sizeHint: object; // [object Object]
    acceptDrops: boolean; // false
    windowTitle: string; // 
    windowIcon: object; // QVariant(QIcon)
    windowIconText: string; // 
    windowOpacity: number; // 1
    windowModified: boolean; // false
    toolTip: string; // 
    statusTip: string; // 
    whatsThis: string; // 
    accessibleName: string; // 
    accessibleDescription: string; // 
    layoutDirection: number; // 0
    autoFillBackground: boolean; // false
    styleSheet: string; // 
    locale: object; // QVariant(QLocale)
    windowFilePath: string; // 
    inputMethodHints: number; // 0
    stNone: number; // 0
    stName: number; // 1
    stDatePurchased: number; // 2
    stDateInstalled: number; // 3
    stDateCreated: number; // 4
    stReleaseDate: number; // 5
    stLastUpdate: number; // 6
    stGroupNum: number; // 7
    stToken: number; // 8
    stDesc: number; // -2147483648
    stMask: number; // 2147483647
    name: string; // ProductContentTab

    // Methods
    _clone: any;
    _getMethodsNames: any;
    // aboutToSearch(p0:string, p1:stringList, p2:stringList, p3:stringList): any;
    browseCategory(p0:string): any;
    // browseProduct(p0:DzProductAssetContainerPtr): any;
    browseToCategory(p0:string): any;
    browseToCategory(p0:string, p1:boolean): any;
    cancelCloudRequest(): any;
    cancelSearch(): any;
    className: any;
    cleared(): any;
    close(): any;
    // contextMenuAboutToShow(p0:QMenu, p1:DzAssetList): any;
    // customContextMenuRequested(p0:QPonumber): any;
    deleteLater(): any;
    destroyed(): any;
    destroyed(p0:QObject): any;
    doDoubleClick(p0:QModelIndex): any;
    exploreProduct(): any;
    // exploreProduct(p0:DzProductAssetContainerPtr): any;
    finishSearch(): any;
    getAssistant(): any;
    getAssociatedAssetsView(): any;
    getCompatibilityBase(): any;
    getCurrentCategory(): any;
    getCurrentFilter(): any;
    getCurrentFilterNavigationBar(): any;
    getExtendedCompatibilityBases(): any;
    getFilterByContext(): any;
    getFilterNavigationBar(): any;
    getGuidePage(): any;
    getHideSecondLevelCategories(): any;
    getHideTopLevelCategories(): any;
    getInstallStateFilterFlags(): any;
    getNumItems(): any;
    getNumSortingItems(): any;
    getProductAssetsView(): DzProductAssetsView;
    getSearchHadMoreResults(): any;
    getSelectedProducts(): DzProductAssetContainer[];
    getSideNavigationCollapsible(): any;
    getSideNavigationWidth(): any;
    getSorting(): any;
    getSortingIndex(): any;
    getTypeFilters(): any;
    handleEmptyNavigationViewClicked(): any;
    handleEmptyResultsViewClicked(): any;
    handlePageSizeDecrementClicked(): any;
    handlePageSizeIncrementClicked(): any;
    handleResultsViewMouseLeave(): any;
    hide(): any;
    hideCompatibilityFilter(): any;
    hideFilterNavigationBar(): any;
    hideResultsFooterWidget(): any;
    hideSideNavigationHeaderWidget(): any;
    hideSortingBar(): any;
    inherits: any;
    init(p0:string): any;
    initSorting(p0:QComboBox): any;
    installProducts(): any;
    isSearching(): boolean;
    lower(): any;
    raise(): any;
    // raiseAssociatedAssetsView(p0:DzAssetPtr, p1:DzAssociatedAssetsView::AssociationMode, p2:boolean): any;
    raiseProductAssetsView(p0:DzAssetPtr, p1:boolean): any;
    repanumber(): any;
    searchOptionsClicked(): any;
    selectProducts(p0:string, p1:string[]): any;
    sendResultsViewDoubleClick(p0:QModelIndex): any;
    setCurrentFilter(p0:string): any;
    setDisabled(p0:boolean): any;
    setEnabled(p0:boolean): any;
    setFilterByContext(p0:boolean): any;
    setFocus(): any;
    setHidden(p0:boolean): any;
    setHideSecondLevelCategories(p0:boolean): any;
    setHideTopLevelCategories(p0:boolean): any;
    setInstallStateFilterFlags(p0:number): any;
    setShown(p0:boolean): any;
    setSideNavigationCollapsible(p0:boolean): any;
    setSideNavigationWidth(p0:number): any;
    setSorting(p0:number): any;
    setSortingByIndex(p0:number): any;
    setStyleSheet(p0:string): any;
    // setTypeFilters(p0:stringList): any;
    setVisible(p0:boolean): any;
    setWindowModified(p0:boolean): any;
    setWindowTitle(p0:string): any;
    show(): any;
    showCompatibilityFilter(): any;
    showFilterNavigationBar(): any;
    showFullScreen(): any;
    showMaximized(): any;
    showMinimized(): any;
    showNormal(): any;
    // showPage(p0:number): any;
    showResultsFooterWidget(): any;
    showSideNavigationHeaderWidget(): any;
    showSortingBar(): any;
    showStartCMSButton(p0:boolean): any;
    stopSearch(): any;
    uninstallProducts(): any;
    update(): any;
    updateFilterNavigationBar(): any;
    updateFilterNavigationBarPageCount(): any;
    updateFilterNavigationBarPageLabel(): any;
    updateMicroFocus(): any;
    updatePageView(): any;
    updateProducts(): any;
    updateProductsMetadata(): any;

    // Signals
    sideNavigationCollapsibleChanged(p0:boolean): any;
    currentCategoryChanged(p0:string): any;
    handleNumItemsPerPageChanged(): any;
    assetHoverChanged(p0:DzAssetPtr): any;
    installStateFilterFlagsChanged(p0:number): any;
}