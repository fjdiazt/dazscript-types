/**
 * class DzFilteredFileContentTab
 */
declare class DzFilteredFileContentTab {

    //#region Enumerations
    static PresetHint: number; // 0
    static EditorHint: number; // 32768
    static DefaultHint: number; // 65536
    static AdvancedHint: number; // 131072
    static MaxHint: number; // 2147483647
    //#endregion

    // Properties
    acceptDrops: boolean; // false
    accessibleDescription: string; // 
    accessibleName: string; // 
    autoFillBackground: boolean; // false
    baseSize: object; // [object Object]
    childrenRect: object; // [object Object]
    childrenRegion: object; // QVariant(QRegion)
    contextMenuPolicy: number; // 1
    cursor: object; // QVariant(QCursor)
    enabled: boolean; // true
    focus: boolean; // false
    focusPolicy: number; // 0
    font: object; // [object Object]
    frameGeometry: object; // [object Object]
    frameSize: object; // [object Object]
    fullScreen: boolean; // false
    geometry: object; // [object Object]
    height: number; // 388
    inputMethodHints: number; // 0
    isActiveWindow: boolean; // true
    layoutDirection: number; // 0
    locale: object; // QVariant(QLocale)
    maximized: boolean; // false
    maximumHeight: number; // 16777215
    maximumSize: object; // [object Object]
    maximumWidth: number; // 16777215
    minimized: boolean; // false
    minimumHeight: number; // 0
    minimumSize: object; // [object Object]
    minimumSizeHint: object; // [object Object]
    minimumWidth: number; // 0
    modal: boolean; // false
    mouseTracking: boolean; // false
    name: string; // SurfacesFileContentTab
    normalGeometry: object; // [object Object]
    objectName: string; // SurfacesFileContentTab
    palette: object; // [object Object]
    pos: object; // [object Object]
    rect: object; // [object Object]
    size: object; // [object Object]
    sizeHint: object; // [object Object]
    sizeIncrement: object; // [object Object]
    sizePolicy: object; // QVariant(QSizePolicy)
    stDateCreated: number; // 4
    stDateInstalled: number; // 3
    stDatePurchased: number; // 2
    stDesc: number; // -2147483648
    stGroupNum: number; // 7
    stLastUpdate: number; // 6
    stMask: number; // 2147483647
    stName: number; // 1
    stNone: number; // 0
    stReleaseDate: number; // 5
    stToken: number; // 8
    statusTip: string; // 
    styleSheet: string; // 
    toolTip: string; // 
    updatesEnabled: boolean; // true
    visible: boolean; // true
    whatsThis: string; // 
    width: number; // 432
    windowFilePath: string; // 
    windowIcon: object; // QVariant(QIcon)
    windowIconText: string; // 
    windowModality: number; // 0
    windowModified: boolean; // false
    windowOpacity: number; // 1
    windowTitle: string; // 
    x: number; // 0
    y: number; // 0

    // Methods
    _clone: any;
    _getMethodsNames: any;
    _values: any;
    // aboutToSearch(p0:string, p1:stringList, p2:stringList, p3:stringList): any;
    browseAsset(p0: DzAssetPtr): any;
    browseCategory(p0: string): any;
    browseFolder(p0: DzAssetPtr): any;
    browseProduct(p0: DzAssetPtr): any;
    browseToCategory(p0: string): any;
    browseToCategory(p0: string, p1: boolean): any;
    cancelSearch(): any;
    className: any;
    cleared(): any;
    clone: any;
    close(): any;
    // contextMenuAboutToShow(p0:QMenu, p1:DzAssetList): any;
    deleteLater(): any;
    destroyed(): any;
    destroyed(p0: QObject): any;
    doDoubleClick(p0: QModelIndex): any;
    exploreAssetAddOns(): any;
    exploreAssetAddOns(p0: DzAssetPtr): any;
    exploreAssetProduct(): any;
    exploreAssetProduct(p0: DzAssetPtr): any;
    exploreAssetTargets(): any;
    exploreAssetTargets(p0: DzAssetPtr): any;
    finishSearch(): any;
    getAssistant(): any;
    getAssociatedAssetsView(): any;
    getCanDetach(): any;
    getCompatibilityBase(): any;
    getCurrentCategory(): any;
    getCurrentFilter(): any;
    getCurrentFilterNavigationBar(): any;
    getDocumentationUrl(): any;
    getExtendedCompatibilityBases(): any;
    getFilterByContext(): any;
    getFilterNavigationBar(): any;
    getGUID(): any;
    getGuidePage(): any;
    getHideSecondLevelCategories(): any;
    getHideTopLevelCategories(): any;
    getIcon(): any;
    getLabel(): any;
    getNavigationContainer(): any;
    getNumItems(): any;
    getNumSortingItems(): any;
    getPane(): any;
    getPreferredSectionID(): any;
    getProductAssetsView(): any;
    getResultsContainer(): any;
    getSearchHadMoreResults(): any;
    getSelectedAssets(): any;
    getSideNavigationCollapsible(): any;
    getSideNavigationWidth(): any;
    getSorting(): any;
    getSortingIndex(): any;
    getSourcePane(): any;
    getSubPaneAction(): any;
    getTypeFilters(): any;
    handleResultsViewMouseLeave(): any;
    handleShowDocumentationTriggered(): any;
    hide(): any;
    hideCompatibilityFilter(): any;
    hideFilterNavigationBar(): any;
    hideResultsFooterWidget(): any;
    hideSideNavigationHeaderWidget(): any;
    hideSortingBar(): any;
    inherits: any;
    init(p0: string): any;
    initSorting(p0: QComboBox): any;
    isAttachedToCustomPane(): any;
    isSearching(): any;
    loadAsset(): any;
    loadAsset(p0: DzAssetPtr): any;
    lower(): any;
    mergeAsset(): any;
    mergeAsset(p0: DzAssetPtr): any;
    moveToCustomPane(): any;
    navigationHeaderHeight(): any;
    openAsset(): any;
    openAsset(p0: DzAssetPtr): any;
    raise(): any;
    // raiseAssociatedAssetsView(p0:DzAssetPtr, p1:DzAssociatedAssetsView::AssociationMode, p2:boolean): any;
    raiseProductAssetsView(p0: DzAssetPtr, p1: boolean): any;
    // raiseToCurrent(p0:DzSubPane): any;
    removeFromCustomPane(): any;
    repanumber(): any;
    reset(): any;
    restoreSettings(p0: DzSettings): any;
    restoreSettings(p0: DzSettings): any;
    resultsFooterHeight(): any;
    // saveSettings(DzSettings&): any;
    saveSettings(p0: DzSettings): any;
    selectAssets(p0: string, p1: string[]): any;
    sendResultsViewDoubleClick(p0: QModelIndex): any;
    setCanDetach(p0: boolean): any;
    setCurrentFilter(p0: string): any;
    setDisabled(p0: boolean): any;
    setEnabled(p0: boolean): any;
    setFilterByContext(p0: boolean): any;
    setFocus(): any;
    setHidden(p0: boolean): any;
    setHideSecondLevelCategories(p0: boolean): any;
    setHideTopLevelCategories(p0: boolean): any;
    setPreferredSectionID(p0: number): any;
    setShown(p0: boolean): any;
    setSideNavigationCollapsible(p0: boolean): any;
    setSideNavigationWidth(p0: number): any;
    setSorting(p0: number): any;
    setSortingByIndex(p0: number): any;
    setStyleSheet(p0: string): any;
    setTypeFilters(p0: string[]): any;
    setVisible(p0: boolean): any;
    setWindowModified(p0: boolean): any;
    setWindowTitle(p0: string): any;
    show(): any;
    showCompatibilityFilter(): any;
    showFilterNavigationBar(): any;
    showFullScreen(): any;
    showMaximized(): any;
    showMinimized(): any;
    showNormal(): any;
    showPage(p0: number): any;
    showResultsFooterWidget(): any;
    showSideNavigationHeaderWidget(): any;
    showSortingBar(): any;
    showStartCMSButton(p0: boolean): any;
    stopSearch(): any;
    update(): any;
    updateFilterNavigationBar(): any;
    updateFilterNavigationBarPageCount(): any;
    updateFilterNavigationBarPageLabel(): any;
    updateMicroFocus(): any;
    updatePageView(): any;

    // Signals
    assetClicked(p0: DzAssetPtr): any;
    assetHoverChanged(p0: DzAssetPtr): any;
    currentCategoryChanged(p0: string): any;
    customContextMenuRequested(p0: number): any;
    filterByContextChanged(p0: boolean): any;
    handleEmptyNavigationViewClicked(): any;
    handleEmptyResultsViewClicked(): any;
    handleNumItemsPerPageChanged(): any;
    handlePageSizeDecrementClicked(): any;
    handlePageSizeIncrementClicked(): any;
    iconChanged(): any;
    labelChanged(p0: string): any;
    paneChanged(): any;
    preferredSectionIDChanged(): any;
    searchOptionsClicked(): any;
    settingsChanged(): any;
    shouldShowChanged(): any;
    sideNavigationCollapsibleChanged(p0: boolean): any;
}