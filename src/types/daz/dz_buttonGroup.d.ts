/**
 * Script wrapper for QButtonGroup.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/buttongroup_dz
 */
declare class DzButtonGroup extends DzGroupBox {

    /* Properties */

    /**
     * Holds the number of buttons in this group (Read Only)
     */
    count: number; // Number

    /**
     * Holds whether or not this group is exclusive for all toggle buttons (the default is false)
     */
    exclusive: boolean; // Boolean

    /**
     * Holds whether or not this group is exclusive for radio buttons (the default is true)
     */
    radioButtonExclusive: boolean; // Boolean

    /**
     * Holds the checked button in an exclusive group
     */
    selected: number; // Number

    /* Constructors */

    /**
     * @param parent DzWidget
     */
    constructor(parent: DzWidget);

    /* Methods */

    /**
     * Adds the specified button to this group. This is only necessary if the button was not created as a child of the group.
     * @param button DzButton - The button to add.
     */
    addButton(button: DzButton): void;

    /**
     * Adds the specified button to this group with the specified id. This is only necessary if the button was not created as a child of the group.
     * @param button DzButton - The button to add.
     * @param id number - The id to assign.
     */
    addButton(button: DzButton, id: number): void;

    /**
     * @param id number - The id of the button to get.
     * @returns DzButton The button in this group with the specified id (if any), otherwise null.
     * @since 4.15.0.21
     */
    button(id: number): DzButton;

    /**
     * @returns any[] A list of the buttons in this group.
     */
    buttons(): any[]; // Array

    /**
     * @returns DzButton The button that is currently checked (selected) in this group.
     * @since 4.15.0.21
     */
    checkedButton(): DzButton;

    /**
     * @param button DzButton - The button to get the id of.
     * @returns number The id of the specified button (if any), otherwise -1.
     */
    id(button: DzButton): number; // Number

    /**
     * Inserts the specified button into this group, with the specified id. This is only necessary if the button was not created as a child of the group.
     * @param button DzButton - The button to insert.
     * @param id number - The id to assign.
     * @returns number The id of button in the group.
     */
    insert(button: DzButton, id?: number): number; // Number

    /**
     * Removes the specified button from this group.
     * @param button DzButton - The button to remove.
     */
    removeButton(button: DzButton): void;

    /**
     * Deprecated
     * @param button DzButton
     */
    remove(button: DzButton): void;

    /* Signals */

    /**
     * Emitted when a button in the group is pressed
     * @param id number
     */
    pressed: ISignal<number>;

    /**
     * Emitted when a button in the group is released
     * @param id number
     */
    released: ISignal<number>;
}
