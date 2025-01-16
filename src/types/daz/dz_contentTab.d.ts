declare class DzContentTab extends DzTabWidget {
    getResultsContainer(): DzSearchContainer;
    getNavigationContainer(): DzTypeAssetContainer;

    // Signals
    // filterByContextChanged(p0:boolean): any;
    filterByContextChanged: ISignal;
}