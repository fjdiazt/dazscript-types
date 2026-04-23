/**
 * Script wrapper for Q3CheckListItem.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/checklistitem_dz
 */
declare class DzCheckListItem extends DzListViewItem {

    /* Properties */

    /**
     * Holds whether or not the item is toggled on (checked).
     */
    on: boolean; // Boolean

    /**
     * Holds the state of the item.
     */
    state: number; // ToggleState

    /**
     * Holds whether or not the item is tristate.
     */
    triState: boolean; // Boolean

    /**
     * Holds the type of the item. (Read Only)
     */
    type: number; // Type

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of ToggleState.
     */
    static Off: number;

    /**
     * DAZ enum member of ToggleState.
     */
    static NoChange: number;

    /**
     * DAZ enum member of ToggleState.
     */
    static On: number;

    /**
     * DAZ enum member of Type.
     */
    static RadioButton: number;

    /**
     * DAZ enum member of Type.
     */
    static CheckBox: number;

    /**
     * DAZ enum member of Type.
     */
    static RadioButtonController: number;

    /**
     * DAZ enum member of Type.
     */
    static CheckBoxController: number;

    /* Constructors */

    /**
     * @param parent DzListView | DzCheckListItem
     * @param type number
     * @param id number
     */
    constructor(parent: DzListView | DzCheckListItem, type?: number, id?: number);

    /**
     * @param parent DzListView | DzListViewItem
     * @param type number
     * @param id number
     */
    constructor(parent: DzListView | DzListViewItem, type?: number, id?: number);

    /**
     * @param parent DzCheckListItem | DzListViewItem
     * @param type number
     * @param id number
     */
    constructor(parent: DzCheckListItem | DzListViewItem, type?: number, id?: number);

    /**
     * @param parent DzListView
     * @param type number
     * @param id number
     */
    constructor(parent: DzListView, type?: number, id?: number);

    /**
     * @param parent DzCheckListItem
     * @param type number
     * @param id number
     */
    constructor(parent: DzCheckListItem, type?: number, id?: number);

    /**
     * @param parent DzListViewItem
     * @param type number
     * @param id number
     */
    constructor(parent: DzListViewItem, type?: number, id?: number);

    /* Undocumented Augment Members */

    /** @undocumented */
    tristate: boolean; // false
}
