declare class DzPropertySideNavHierarchy {
    /**
     * Returns the list of selected or unselected properties
     * @param selected If true, returns selected properties, if false, returns unselected properties
     */
    getPropertySelections(selected: boolean): DzProperty[];

    getPropertyView(): DzDragableSideNavPropertyListView;

    jumpToProperty(property: DzProperty): void;

    // TODO:
    getDisplayMode(): any;
    getFilterNavigationBar(): any;
    getGuidePage(): any;
    getNavDivider(): any;
    getRecurseChildrenGroups(): boolean;
    getSideNavigationView(): any;

    // getCurrentEditor(): QObject;
    // getPrimaryNode(): QObject;

}