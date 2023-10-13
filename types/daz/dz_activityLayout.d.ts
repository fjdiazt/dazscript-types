declare class DzActivityLayout extends DzRefCountedItem {

    /* Properties */
    label: string;
    description: string;

    /* Methods */
    labelChanged(label: QString): void;
    setToolbarEnabled(toolbar: QString, onOff: boolean): void;
    isToolBarEnabled(toolbar: QString): boolean;
    clearMemorizedState(): void;
}