/**
 * The application undo stack.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/undostack_dz
 */
declare class DzUndoStack extends QObject {

    /* Methods */

    /**
     * It is recommended that you use Global::acceptUndo() instead of calling this function directly to avoid leaving the undo stack open.
     * @param caption string - A descriptive string to display for the undo list.
     */
    accept(caption: string): void;

    /**
     * It is recommended that you use Global::beginUndo() instead of calling this function directly to avoid leaving the undo stack open.
     */
    beginHold(): void;

    /**
     * It is recommended that you use Global::cancelUndo() instead of calling this function directly to avoid leaving the undo stack open.
     */
    cancel(): void;

    /**
     * @returns boolean true if undo items can be pushed onto the stack, otherwise false.
     */
    canPushItems(): boolean; // Boolean

    /**
     * @returns boolean true if redo() can be called, otherwise false.
     */
    canRedo(): boolean; // Boolean

    /**
     * @returns boolean true if undo() can be called, otherwise false.
     */
    canUndo(): boolean; // Boolean

    /**
     * Clears the undo stack. This must be called at least whenever the list changes.
     */
    clearAll(): void;

    /**
     * It is recommended that you use Global::dropUndo() instead of calling this function directly to avoid leaving the undo stack open.
     */
    drop(): void;

    /**
     * @param offset number - The number of positions from the current position.
     * @returns string If getCurrentIndex() + offset is within the [0, getNumItems() - 1] range, the caption assigned to the item at the index, otherwise an empty string.
     * @since 4.9.3.61
     */
    getCaption(offset?: number): string; // String

    /**
     * @returns number The index of the current position in the stack.
     * @since 4.9.3.61
     */
    getCurrentIndex(): number; // Number

    /**
     * @returns number The total number of items in the undo stack.
     */
    getNumItems(): number; // Number

    /**
     * @returns number The total number of list items on the redo stack.
     */
    getNumRedoItems(): number; // Number

    /**
     * @returns number The total number of list items on the undo stack.
     */
    getNumUndoItems(): number; // Number

    /**
     * @returns string The caption assigned to the redo item at the top of the stack.
     */
    getRedoCaption(): string; // String

    /**
     * @returns string The caption assigned to the undo item at the top of the stack.
     */
    getUndoCaption(): string; // String

    /**
     * @returns boolean true if there are items on the undo stack, otherwise false.
     */
    hasItems(): boolean; // Boolean

    /**
     * @returns boolean true if the undo stack is currently engaged in an undo/redo operation. This is useful for items that need to perform certain operations if the undo stack is not the one effecting data changes.
     */
    isInUndoRedo(): boolean; // Boolean

    /**
     * Disables items from being pushed onto the stack. This will be toggled by items to prevent undo operations from creating new undo items during an undo. Every call to lock() must be matched by a call to unlock().
     */
    lock(): void;

    /**
     * Calls redo on the item at the top of the stack, then moves the pointer to the next item in the stack.
     * @returns boolean true on success, false on error or if the stack is empty.
     */
    redo(): boolean; // Boolean

    /**
     * Calls undo on the item at the top of the stack, then moves the pointer to the previous item in the stack.
     * @returns boolean true if successful, false on error or if the stack is empty.
     */
    undo(): boolean; // Boolean

    /**
     * Enables items to be pushed onto the stack after a lock() call.
     */
    unlock(): void;

    /* Signals */

    /**
     * Emitted when the availability of the redo stack changes.
     * @param yesNo boolean
     */
    redoAvailable: ISignal<boolean>;

    /**
     * Emitted when the caption of the redo stack changes.
     * @param caption string
     */
    redoCaptionChanged: ISignal<string>;

    /**
     * Emitted when the availability of the undo stack changes.
     * @param yesNo boolean
     */
    undoAvailable: ISignal<boolean>;

    /**
     * Emitted when the caption of the undo stack changes.
     * @param caption string
     */
    undoCaptionChanged: ISignal<string>;

    /* Undocumented Augment Members */

    /** @undocumented */
    push(item: any /*DzUndoItem*/): any; // TODO
}
