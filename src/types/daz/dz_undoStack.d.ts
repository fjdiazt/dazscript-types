declare class DzUndoStack {
    // Properties
    objectName: string; // UndoStack
    name: string; // UndoStack

    // Methods
    accept(str: QString): any;
    beginHold(): any;
    canPushItems(): any;
    canRedo(): any;
    canUndo(): any;
    cancel(): any;
    clearAll(): any;
    deleteLater(): any;
    drop(): any;
    getCaption(): any;
    getCaption(n: number): any;
    getCurrentIndex(): any;
    getNumItems(): any;
    getNumRedoItems(): any;
    getNumUndoItems(): any;
    getRedoCaption(): QString;
    getUndoCaption(): QString;
    hasItems(): any;
    isInUndoRedo(): any;
    lock(): any;
    push(item: any /*DzUndoItem*/): any; // TODO
    redo(): any;
    // redoAvailable(bool): any;
    // redoCaptionChanged(QString): any;
    undo(): any;
    // undoAvailable(bool): any;
    // undoCaptionChanged(QString): any;
    unlock(): any;
}