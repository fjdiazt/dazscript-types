declare class DzLayout extends QObject {
    margin: number; // 0
    spacing: number; // -1
    autoAdd: boolean; // false

    constructor(parent: DzWidget);
    constructor(parent: DzLayout);

    addWidget(widget: DzWidget): void;
    getLayout(): QLayout;
    itemAt(index: number): DzWidget;
}