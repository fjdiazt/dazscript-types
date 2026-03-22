declare class DzPersistentMenu {
    clearActiveWgt(): void
    getActionMenu(): DzActionMenu
    getActiveWgt(): QWidget
    setActiveWgt(widget: QWidget): void
}