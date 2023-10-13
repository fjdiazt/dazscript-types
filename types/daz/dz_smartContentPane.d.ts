declare class DzSmartContentPane extends DzAbstractNodeEditorPane {    

    // Methods
    basicViewActivated(): any;
    browseToCategory(categoryPath: string): any; // TODO
    buildOptionsMenu(p0:DzActionMenu): any;
    close(): any;
    // contextMenuAboutToShow(p0:QMenu, p1:DzAssetList): any;
    // customContextMenuRequested(p0:QPonumber): any;
    deleteLater(): any;
    destroyed(): any;
    destroyed(p0:QObject): any;
    getCurrentCategory(): string;
    getCurrentFilter(): any;
    getCurrentFilterContext(): any;
    getCurrentTab(): DzContentTab;
    getDefaultSkin(): any;
    getFileContentTab(): DzFileContentTab;
    getInfoDivider(): any;
    getLabel(): any;
    getNumItemsPerPage(): any;
    getOptionsMenu(): any;
    getOptionsMenuVersion(): any;
    getOverrideSkin(): any;
    getPaneGroup(): any;
    getProductContentTab(): DzProductContentTab;
    hide(): any;
    hidePane(): any;
    isSyncingCategorySelection(): any;
    isSyncingFilterContext(): any;
    isSyncingFilterText(): any;
    lower(): any;
    makeGroupDockable(): any;
    makeGroupUndockable(): any;
    makeUndockable(): any;
    makeUndockable(p0:QSize): any;
    moveToGroup(p0:DzPaneGroup): any;
    raise(): any;
    refreshStyleSheet(): any;
    refreshStyleSheet(p0:boolean): any;
    repanumber(): any;
    // restoreSettings(p0:DzPaneSettings): any;
    // restoreSettings(p0:DzPaneSettings): any;
    // saveSettings(DzPaneSettings&): any;
    // saveSettings(p0:DzPaneSettings): any;
    setBasicViewMode(): any;
    setCurrentTab(p0:DzContentTab): any;
    setCurrentTab(p0:number): any;
    setDefaultSkin(p0:DzSkin): any;
    setDisabled(p0:boolean): any;
    setEnabled(p0:boolean): any;
    setFocus(): any;
    setHidden(p0:boolean): any;
    setLabel(p0:string): any;
    setNumItemsPerPage(p0:number): any;
    setOverrideSkin(p0:DzSkin): any;
    setOverrideSkin(p0:DzSkin, p1:boolean): any;
    setShown(p0:boolean): any;
    setStandardViewMode(): any;
    setStyleSheet(p0:string): any;
    setVisible(p0:boolean): any;
    setWindowModified(p0:boolean): any;
    setWindowTitle(p0:string): any;
    show(): any;
    // showAssetsInFileContentTab(p0:DzAssetList): any;
    // showAssetsInProductContentTab(p0:DzAssetList): any;
    showFullScreen(): any;
    showMaximized(): any;
    showMinimized(): any;
    showNormal(): any;
    showPane(): any;
    // showProductInProductContentTab(p0:DzProductAssetContainerPtr): any;
    standardViewActivated(): any;
    syncCategorySelection(p0:boolean): any;
    syncFilterContext(p0:boolean): any;
    syncFilterText(p0:boolean): any;
    toggleSyncCategorySelection(): any;
    toggleSyncFilterContext(): any;
    toggleSyncFilterText(): any;
    undock(): any;
    // undock(p0:QPonumber): any;
    // undock(p0:QPonumber, p1:QSize): any;
    undockGroup(): any;
    // undockGroup(p0:QPonumber): any;
    // undockGroup(p0:QPonumber, p1:QSize): any;
    update(): any;
    updateMicroFocus(): any;
    // updateSimpleWorkflowMode(DzSimpleWorkflowMgr::SimpleWorkflowModes): any;

    // Signals
    visibilityChanged(p0:boolean): any;
    menuChanged(): any;
    labelChanged(p0:string): any;
    tabBarHiddenChanged(p0:boolean): any;
    paneGroupChanged(p0:DzPaneGroup, p1:DzPaneGroup): any;
    currentTabChanged(p0:number): any;
    assetHoverChanged(p0:DzAssetPtr): any;
    syncCategorySelectionChanged(p0:boolean): any;
    syncFilterTextChanged(p0:boolean): any;
    syncFilterContextChanged(p0:boolean): any;
    showVendorCategorizationChanged(p0:boolean): any;
}