declare class DzActionMenu extends QObject {
    /* Enums */
    static CustomMenu: number;
    static PaneMenu: number;
    static ViewToolMenu: number;
    static SaveAsMenu: number;
    static OpenRecentMenu: number;

    /* Properties */
    menuType: number;

    /* Methods */
    findOrCreateSubMenu(path: QString): DzActionMenu;
    findOrCreateSubMenu(path: QString, asDefault: boolean): DzActionMenu;
    itemListChanged(): void;
    clear(): void;
    insertItem(item: DzActionMenuItem, at: number): void;
    insertItem(item: DzActionMenuItem, at: number): void;
    removeItem(item: DzActionMenuItem): void;
    insertAction(action: QString, at: number): void;
    insertAction(action: QString, at: number): void;
    insertCustomAction(action: QString, at: number): void;
    insertCustomAction(action: QString, at: number): void;
    insertFileOpenAction(): any; // TODO ;
    insertFileOpenAction(): any; // TODO ;
    insertFileOpenAction(): any; // TODO ;
    insertFileMergeAction(): any; // TODO ;
    insertFileMergeAction(): any; // TODO ;
    insertFileMergeAction(): any; // TODO ;
    insertSeparator(where: number): void;
    insertSeparator(where: number): void;
    simplifySeparators(): void;
    hasItems(): boolean;
    getPath(): QString;
    getNumItems(): number;
    getItem(which: number): DzActionMenuItem;
    getItemList(): DzActionMenuItem[];
    getParentItem(): DzActionMenuItem;
    findSubMenu(name: QString): DzActionMenu;
    exec(pos: QPoint): void;
    exec(): void;
    exec(pos: QPoint): void;
    exec(): void;
}