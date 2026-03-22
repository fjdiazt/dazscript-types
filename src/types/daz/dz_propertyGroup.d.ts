declare class DzPropertyGroup extends DzBase {

    /* Properties */

    /* Methods */
    parentChanged(newParent: DzPropertyGroup): void;
    addedChild(newChild: DzPropertyGroup): void;
    removedChild(child: DzPropertyGroup): void;
    childListChanged(): void;
    treeChanged(): void;
    propertyVisiblityChanged(): any; // TODO ;
    getAllPaths(): String[];
    getAllProperties(): DzProperty[];
    getNumProperties(): number;
    getProperty(i: number): DzProperty;
    findProperty(): any; // TODO ;
    findProperty(): any; // TODO ;
    findProperty(): any; // TODO ;
    setUniquePropertyLabel(prop: DzProperty): void;
    movePropertyToIndex(prop: DzProperty, newIndex: number): boolean;
    movePropertyToIndex(propName: QString, newIndex: number): boolean;
    movePropertyToIndex(curIndex: number, newIndex: number): boolean;
    movePropertyToIndex(prop: DzProperty, newIndex: number): boolean;
    movePropertyToIndex(propName: QString, newIndex: number): boolean;
    movePropertyToIndex(curIndex: number, newIndex: number): boolean;
    indexOfProperty(prop: DzProperty): number;
    getPath(): QString;
    getParent(): DzPropertyGroup;
    findSibling(name: QString): DzPropertyGroup;
    getNextSibling(): DzPropertyGroup;
    getPreviousSibling(): any; // TODO ;
    getFirstChild(): DzPropertyGroup;
    findChild(name: QString): DzPropertyGroup;
    getTree(): DzPropertyGroupTree;
    moveChildToIndex(childName: QString, newIndex: number): boolean;
    getRegion(): DzGeometryRegion;
    isRegion(): boolean;
    setCollapsed(onOff: boolean): void;
    getCollapsed(): boolean;
    sort(): void;
    getDefaultGroupName(): any; // TODO ;
}