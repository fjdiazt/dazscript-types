declare class DzContentReplaceMgr extends QObject {

    /* Properties */
    ALWAYS_REPLACE: number;
    NEVER_REPLACE: number;
    ASK_WHEN_MATCHING: number;
    ASK_TO_REPLACE: number;

    /* Methods */
    contentReplaceModeChanged(mode: number): void;
    getReplaceMode(): number;
    setReplaceMode(mode: number): void;
    getNewContentPath(): QString;
    setNewContentPath(contentPath: QString): void;
    getNewContentType(): QString;
    setNewContentType(contentType: QString): void;
    getReplaceNodes(replaceNodes: DzNode[]): void;
    setReplaceNodes(replaceNodes: DzNode[]): void;
    getPotentialReplaceNodes(potentialReplaceNodes: DzNode[], baseNode: DzNode): void;
    getDefaultReplaceNodes(defaultReplaceNodes: DzNode[], baseNode: DzNode): void;
    updateReplaceNodes(baseNode: DzNode): void;
    removeReplaceNodes(): void;
    clearReplaceData(): void;
    initReplaceForContentLoad(path: QString, baseNode: DzNode): void;
    doReplace(): void;
}