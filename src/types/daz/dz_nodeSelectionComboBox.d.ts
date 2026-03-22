declare class DzNodeSelectionComboBox extends DzWidget {
    constructor(parent: DzWidget, nodeType?: string, allowNone?: boolean);

    clearNodeSelection(): void;
    getNodes(): DzNode[];
    getSelectedNode(): DzNode;
    hidePopup(): void;
    setNode(node: DzNode): void;
    setNodes(nodes: DzNode[]): void;
    setSelectedNode(node: DzNode): void;
    showPopup(): void;

    nodeSelectionChanged: ISignal;
}