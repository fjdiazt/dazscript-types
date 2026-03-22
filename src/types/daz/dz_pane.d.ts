declare class DzPane extends QWidget {
    getLabel(): String;
    getOptionsMenu(): DzActionMenu;
    refresh(): void;
    hidePane(): void;
    showPane(): void;
}