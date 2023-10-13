declare class DzGroupBox extends DzWidget {
    /* Properties */
    checkable: boolean; // false
    checked: boolean; // false
    flat: boolean; // false
    title: string; //
    columns: number; // 1
    orientation: number; // 1
    insideMargin: number; // 9
    insideSpacing: number; // 6
    margin: number;
    spacing: number;

    /* Methods */
    clicked(clicked: boolean): ISignal;
    clicked(): any;
    toggled(state: boolean): ISignal;
    addSpace(space: number): ISignal;
}