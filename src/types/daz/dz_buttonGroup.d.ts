declare class DzButtonGroup extends DzGroupBox {

    /* Properties */
    alignment: number;
    checkable: boolean;
    checked: boolean;
    flat: boolean;
    title: string;
    columns: number;
    orientation: number;
    insideMargin: number;
    insideSpacing: number;
    exclusive: boolean;
    radioButtonExclusive: boolean;
    selected: number;
    count: number;

    /* Methods */
    getWidget(): any; // TODO ;
    getLayout(): any; // TODO ;
    show(): any; // TODO ;
    hide(): any; // TODO ;
    setFixedSize(): any; // TODO ;
    setFixedWidth(): any; // TODO ;
    setFixedHeight(): any; // TODO ;
    setGeometry(): any; // TODO ;
    getChildrenOfWidget(): any; // TODO ;
    getChildrenOfWidget(): any; // TODO ;
    findChildOfWidget(): any; // TODO ;
    reparent(): any; // TODO ;
    reparent(): any; // TODO ;
    clicked(): any; // TODO ;
    clicked(): any; // TODO ;
    toggled(): any; // TODO ;
    addSpace(): any; // TODO ;
    pressed(): any; // TODO ;
    released(): any; // TODO ;
    clicked(): any; // TODO ;
    addButton(obj: DzButton): void;
    addButton(obj: DzButton, id: number): void;
    button(id: number): DzButton;
    buttons(): DzButton[];
    checkedButton(): DzButton;
    id(button: DzButton): number;
    removeButton(obj: DzButton): void;
    insert(): any; // TODO ;
    insert(): any; // TODO ;
    remove(): any; // TODO ;
}