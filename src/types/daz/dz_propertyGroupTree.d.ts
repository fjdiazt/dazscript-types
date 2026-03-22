declare class DzPropertyGroupTree extends DzBase {
    name: string;	//
    objectName: string;	//
    childListChanged(): void;
    findChild(name: string): DzPropertyGroup;
    findProperty(p0: QString): any;
    findPropertyByLabel(label: string): DzProperty;
    getAllPaths(): string[];
    getAllProperties(): DzProperty[];
    getDefaultGroup(): any;
    getFirstChild(): DzPropertyGroup;
    getName(): any;
    getOwner(): any;
    isPrivate(): any;
    makePersistent(): any;
    moveChildToIndex(childName: QString, newIndex: number): any;
    nameChanged(name: string): void;
    propertyVisiblityChanged(p0: DzPropertyGroup, p1: DzProperty): void;
    setIsPrivate(p0: boolean): any;
    sortGroups(): any;
    treeChanged(): void;
    treeSorted(): void;
}