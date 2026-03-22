declare class DzSelectionMap extends DzBase {
    addPair(faceGroupName: string, node: DzNode, replaceIfExists: boolean): DzError;
    findGroupForNode(node: DzNode): string;
}