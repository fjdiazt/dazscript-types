declare class DzCheckListItem extends DzListViewItem {
    constructor(parent: DzListView | DzListViewItem, type?: number, id?: number);

    // Enumerations
    static RadioButton: number; // 0
    static CheckBox: number; // 1
    static RadioButtonController: number; // 2
    static CheckBoxController: number; // 3
    static Off: number; // 0
    static NoChange: number; // 1
    static On: number; // 2

    // Properties
    id: number; // -1
    height: number; // 16
    on: boolean; // false
    type: number; // 2
    tristate: boolean; // false
    state: number; // 0
    name: string; // CheckListItem
}