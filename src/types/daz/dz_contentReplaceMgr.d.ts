/**
 * Manager responsible for scene item replacement based on content type.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/contentreplacemgr_dz
 */
declare class DzContentReplaceMgr extends QObject {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of ContentReplaceMode.
     */
    static ALWAYS_REPLACE: number;

    /**
     * DAZ enum member of ContentReplaceMode.
     */
    static ASK_TO_REPLACE: number;

    /**
     * DAZ enum member of ContentReplaceMode.
     */
    static NEVER_REPLACE: number;

    /**
     * DAZ enum member of ContentReplaceMode.
     */
    static ASK_WHEN_MATCHING: number;

    /* Methods */

    /**
     * Resets all replace data to default values, excluding replace mode.
     */
    clearReplaceData(): void;

    /**
     * Performs all the necessary steps to remove content marked for replacement.
     */
    doReplace(): void;

    /**
     * @param baseNode DzNode - The base node.
     * @returns any[] A list of nodes attached to baseNode that would be replaced by default.
     * @since 4.11.0.184
     */
    getDefaultReplaceNodeList(baseNode: DzNode): any[]; // Array

    /**
     * @returns string The path of the new content.
     */
    getNewContentPath(): string; // String

    /**
     * @returns string The type of the new content.
     */
    getNewContentType(): string; // String

    /**
     * @param baseNode DzNode - The base node.
     * @returns any[] A list of nodes attached to baseNode that could potentially be replaced.
     * @since 4.11.0.184
     */
    getPotentialReplaceNodeList(baseNode: DzNode): any[]; // Array

    /**
     * @returns number The content replace mode.
     */
    getReplaceMode(): number; // ContentReplaceMode

    /**
     * @returns any[] The nodes in the scene to be replaced.
     * @since 4.11.0.184
     */
    getReplaceNodeList(): any[]; // Array

    /**
     * Performs all the necessary initialization for doing content replacement when the given file will be loaded, using items attached to baseNode as potential items to replace.
     * @param path string
     * @param baseNode DzNode
     */
    initReplaceForContentLoad(path: string, baseNode: DzNode): void;

    /**
     * Removes all nodes in the replace list from the scene.
     */
    removeReplaceNodes(): void;

    /**
     * @param contentPath string - The path of the new content.
     */
    setNewContentPath(contentPath: string): void;

    /**
     * @param contentType string - The type of the new content.
     */
    setNewContentType(contentType: string): void;

    /**
     * Sets the content replace mode.
     * @param mode number - The mode to set.
     */
    setReplaceMode(mode: number): void;

    /**
     * Sets the list of nodes in the scene to be replaced.
     * @param replaceNodes any[] - The list of nodes to set.
     */
    setReplaceNodes(replaceNodes: any[]): void;

    /**
     * Updates the replace list to contain all items that should be removed during content load. If the replace mode is ALWAYS_REPLACE, the list will contain all nodes attached (following, parented, etc.) to baseNode whose type matches the current “New Content Type” (as set through setNewContentType()). If the replace mode is ASK_TO_REPLACE, a dialog will allow the user to select what nodes should be replaced.
     * @param baseNode DzNode
     */
    updateReplaceNodes(baseNode: DzNode): void;

    /* Signals */

    /**
     * Emitted when the content replace mode has changed.
     * @param mode number - The new content replace mode.
     */
    contentReplaceModeChanged: ISignal<number>;

    /* Undocumented Augment Members */

    /** @undocumented */
    getReplaceNodes(replaceNodes: DzNode[]): void;

    /** @undocumented */
    getPotentialReplaceNodes(potentialReplaceNodes: DzNode[], baseNode: DzNode): void;

    /** @undocumented */
    getDefaultReplaceNodes(defaultReplaceNodes: DzNode[], baseNode: DzNode): void;
}
