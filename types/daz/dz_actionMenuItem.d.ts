declare class DzActionMenuItem {
    static Separator: number;
    static Action: number;
    static CustomAction: number;
    static SubMenu: number;
    static FileOpenAction: number;
    static FileMergeAction: number;

    action: QString;
    label: string;
    isDefault: boolean;
    type: number;

    getParentMenu(): DzActionMenu;
    getSubMenu(): DzActionMenu;
    loadFile(): void;
    setSubMenu(menu: DzActionMenu): void;
}