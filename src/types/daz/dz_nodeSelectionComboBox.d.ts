/**
 * DAZScript combobox widget with a custom popup designed for choosing a DzNode.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/nodeselectioncombobox_dz
 */
declare class DzNodeSelectionComboBox extends DzWidget {

    /* Constructors */

    /**
     * @param parent DzWidget
     * @param nodeType string
     * @param allowNone boolean
     */
    constructor(parent: DzWidget, nodeType?: string, allowNone?: boolean);

    /* Methods */

    /**
     * Clears the selection of any node(s).
     * @since 4.10.0.27
     */
    clearNodeSelection(): void;

    /**
     * @returns any[] The list of nodes to be shown in the popup.
     */
    getNodes(): any[]; // Array

    /**
     * @returns DzNode The node selected in the popup.
     */
    getSelectedNode(): DzNode;

    /**
     * Hide the popup.
     */
    hidePopup(): void;

    /**
     * Sets the node from the scene to be shown in the popup.
     * @param node DzNode - The DzNode to show.
     */
    setNode(node: DzNode): void;

    /**
     * Sets the nodes from the scene to be shown in the popup.
     * @param nodes any[] - A list of the DzNode objects to show.
     */
    setNodes(nodes: any[]): void;

    /**
     * Sets the node from the scene to be selected.
     * @param node DzNode - The DzNode to select.
     */
    setSelectedNode(node: DzNode): void;

    /**
     * Display the popup.
     */
    showPopup(): void;

    /* Signals */

    /**
     * Emitted when the selected DzNode changes.
     */
    nodeSelectionChanged: ISignal<void>;
}
