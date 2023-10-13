declare class DzPropertySideNavHierarchy {
    /**
     * Returns the list of selected or unselected properties
     * @param selected If true, returns selected properties, if false, returns unselected properties
     */
    getPropertySelections(selected: boolean): DzProperty[];

    getPropertyView(): DzDragableSideNavPropertyListView;

    jumpToProperty(property: DzProperty): void;

    // TODO:
    getCurrentEditor(): QObject;
    getPrimaryNode(): QObject;

}