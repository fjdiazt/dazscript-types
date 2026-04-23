/**
 * Provides a mapping between face groups and nodes associated with a mesh.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/selectionmap_dz
 */
declare class DzSelectionMap extends DzBase {

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * Adds a new face group/node mapping to the selection map.
     * @param faceGroupName string - The name of the face group that will map to the given node.
     * @param node DzNode - The node that will be selected when the face group is clicked on in the viewport.
     * @param replaceIfExists boolean - If true, checks to see if the face group is already mapped, and replaces the mapped node with the given node. If false, the operation will fail if the face group is already mapped.
     * @returns DzError DZ_NO_ERROR on success, otherwise an error code.
     */
    addPair(faceGroupName: string, node: DzNode, replaceIfExists?: boolean): DzError;

    /**
     * Clears all pairs in the map.
     */
    clearAll(): void;

    /**
     * Clears the missing groups based on the face groups on mesh.
     * @param mesh DzFacetMesh - The reference mesh.
     */
    clearMissingGroups(mesh: DzFacetMesh): void;

    /**
     * Searches for the first group for a node.
     * @param node DzNode - The node to find the group for.
     * @returns string The name of the group for node.
     */
    findGroupForNode(node: DzNode): string; // String

    /**
     * Searches for the first node for a group.
     * @param groupName string - The name of the group to find.
     * @returns DzNode null if it fails, else the found node for group.
     */
    findNodeForGroup(groupName: string): DzNode;

    /**
     * Searches for the first pair.
     * @param node DzNode - The node to find the mapping for.
     * @returns number The index of the mapping for the node, or -1 if no mapping for the node exists.
     */
    findPair(node: DzNode): number; // Number

    /**
     * Searches for the first pair.
     * @param groupName string - The name of the face group to find the mapping for.
     * @returns number The index of the mapping for the face group, or -1 if no mapping for the face group exists.
     */
    findPair(groupName: string): number; // Number

    /**
     * @returns number The number of face group/node mappings in the selection map.
     */
    getNumPairs(): number; // Number

    /**
     * @param index number - The index of the face group/node mapping to look up.
     * @returns string The name of the face group for the mapping.
     */
    getPairGroup(index: number): string; // String

    /**
     * @param index number - The index of the face group/node mapping to look up.
     * @returns DzNode The node for the mapping.
     */
    getPairNode(index: number): DzNode;

    /**
     * Removes a face group/node mapping from the selection map.
     * @param index number - The index of the mapping to remove.
     * @returns DzError DZ_NO_ERROR on success, otherwise an error code.
     */
    removePair(index: number): DzError;

    /* Signals */

    /**
     * Emitted when the map changes.
     */
    mapModified: ISignal<void>;

    /**
     * Emitted when the visibility of the node in a given pair changes.
     */
    visibilityChanged: ISignal<void>;
}
