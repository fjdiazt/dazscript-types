/**
 * Encapsulates a DAZ Script script context.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/scriptcontext_dz
 */
declare class DzScriptContext extends DzBase {

    /* Methods */

    /**
     * Accepts and finishes a hold on the undo stack started by calling beginUndo().
     * @param caption string - The brief description for the action that will be displayed to the user.
     */
    acceptUndo(caption: string): void;

    /**
     * @returns boolean true if one or more background progress operations are currently being tracked, otherwise false.
     */
    backgroundProgressIsActive(): boolean; // Boolean

    /**
     * @returns boolean true if the user has cancelled the current operation by pressing the 'Cancel' button on the background progress, otherwise false.
     */
    backgroundProgressIsCancelled(): boolean; // Boolean

    /**
     * Captures a view of scene selection.
     * @since 4.9.4.109
     */
    beginNodeSelectionHold(): void;

    /**
     * Starts a hold on the undo stack.
     */
    beginUndo(): void;

    /**
     * Cancels the current background progress tracking operation and closes the background progress if no other progress tracking operations are active. If the current operation can not be cancelled, this has no effect.
     * @since 4.22.1.110
     */
    cancelBackgroundProgress(): void;

    /**
     * Cancels the current script progress tracking operation and closes the progress dialog if no other progress tracking operations are active. If the current operation can not be cancelled, this has no effect.
     * @since 4.22.1.110
     */
    cancelProgress(): void;

    /**
     * Accepts the hold on the undo stack but immediately calls undo to restore the state of the stack to what it was before the matching beginUndo() call.
     */
    cancelUndo(): void;

    /**
     * Clears the application-standard busy cursor and returns the mouse cursor to the previous cursor. Match every call to setBusyCursor() with a call to this function.
     */
    clearBusyCursor(): void;

    /**
     * Clears all selection holds without restoring the selection.
     * @since 4.9.4.109
     */
    clearNodeSelectionHolds(): void;

    /**
     * Clears the override cursor stack.
     * @since 4.6.4.30
     */
    clearOverrideCursor(): void;

    /**
     * Clears the undo stack.
     */
    clearUndoStack(): void;

    /**
     * Removes a scene node selection hold on scene selection without restoring the selection.
     * @since 4.9.4.109
     */
    dropNodeSelectionHold(): void;

    /**
     * Accepts the actions performed since calling beginUndo() and removes the current hold on the undo stack without adding the items to the undo stack - the memory associated with the items is freed.
     */
    dropUndo(): void;

    /**
     * Ends the current background progress tracking operation and closes the background progress if no other background progress tracking operations are active.
     */
    finishBackgroundProgress(): void;

    /**
     * Ends the current background progress tracking operation and closes the background progress if no other background progress tracking operations are active.
     * @returns Object A map providing information about the background progress tracking operation (if any), otherwise an empty map.
     * @since 4.22.1.110
     */
    finishBackgroundProgressWithDetail(): Object;

    /**
     * Ends the current script progress tracking operation and closes the progress dialog if no other progress tracking operations are active.
     */
    finishProgress(): void;

    /**
     * Ends the current script progress tracking operation and closes the progress dialog if no other progress tracking operations are active.
     * @returns Object A map providing information about the progress tracking operation (if any), otherwise an empty map.
     * @since 4.22.1.110
     */
    finishProgressWithDetail(): Object;

    /**
     * @returns any[] The list of arguments passed (if any) to the script upon execution, otherwise an empty list.
     */
    getArguments(): any[]; // Array

    /**
     * This function converts an error code into a string message.
     * @param errCode number - The error code to convert.
     * @returns string A user-readable message that describes the error represented by the error code.
     */
    getErrorMessage(errCode: number): string; // String

    /**
     * @param obj QObject - The object to get the object parent of.
     * @returns QObject The QObject parent of obj.
     */
    getObjectParent(obj: QObject): QObject;

    /**
     * @returns DzAuthor The author of the current script (if any), otherwise and empty string.
     */
    getScriptAuthor(): DzAuthor;

    /**
     * @returns string The file name of the current script (if any), otherwise an empty string.
     */
    getScriptFileName(): string; // String

    /**
     * @returns string The file type that this script was saved out as.
     */
    getScriptType(): string; // String

    /**
     * @returns string The version of the current script (if any), otherwise and empty string.
     */
    getScriptVersionString(): string; // String

    /**
     * This function allows a script to test if two QObject-derived variables point to the same instance.
     * @param ptr1 QObject
     * @param ptr2 QObject
     * @returns boolean true if the pointers point to the same object, otherwise false.
     */
    pointersAreEqual(ptr1: QObject, ptr2: QObject): boolean; // Boolean

    /**
     * Pauses execution of the script and allows the GUI thread time to process events.
     */
    processEvents(): void;

    /**
     * @returns boolean true if one or more script progress operations are currently being tracked, otherwise false.
     */
    progressIsActive(): boolean; // Boolean

    /**
     * @returns boolean true if the user has cancelled the current operation by pressing the 'Cancel' button on the script progress dialog, otherwise false.
     */
    progressIsCancelled(): boolean; // Boolean

    /**
     * Restores the scene selection to the view at last call to beginNodeSelectionHold().
     * @since 4.9.4.109
     */
    restoreNodeSelectionHold(): void;

    /**
     * Sets the string to display in the status bar.
     * @param info string - The string to display in the status bar as the current description of the operation.
     * @since 4.22.1.110
     */
    setBackgroundProgressInfo(info: string): void;

    /**
     * Sets the application-standard busy cursor - increments the count of busy cursors set in the context of the current script execution. Match every call to this function with a call to clearBusyCursor() to restore the previous cursor.
     */
    setBusyCursor(): void;

    /**
     * Sets the string to display in the progress dialog.
     * @param info string - The string to display in the progress dialog as the current description of the operation.
     * @since 4.22.1.110
     */
    setProgressInfo(info: string): void;

    /**
     * Pauses the script for the specified number of milliseconds without blocking the application event loop.
     * @param milliseconds number - The duration, in milliseconds, to sleep.
     * @since 4.8.0.45
     */
    sleep(milliseconds: number): void;

    /**
     * Displays a background progress bar to the user if one is not already being displayed and starts a progress tracking operation.
     * @param info string - The string to display in the status bar as the current description of the operation.
     * @param totalSteps number - The number of progress steps for the operation to be complete.
     * @param isCancellable boolean - If true, the user is given the option to cancel the operation.
     */
    startBackgroundProgress(info: string, totalSteps?: number, isCancellable?: boolean): void;

    /**
     * Displays a script progress dialog to the user if one is not already being displayed and starts a progress tracking operation.
     * @param info string - The string to display in the progress dialog as the current description of the operation.
     * @param totalSteps number - The number of progress steps for the operation to be complete.
     * @param isCancellable boolean - If true, the user is given the option to cancel the operation.
     * @param showTimeElapsed boolean - If true, the amount of time since the progress operation was started will be displayed in the dialog.
     */
    startProgress(info: string, totalSteps?: number, isCancellable?: boolean, showTimeElapsed?: boolean): void;

    /**
     * Steps the current background progress forward the specified number of steps.
     * @param numSteps number - The number of steps to move the progress indicator forward.
     */
    stepBackgroundProgress(numSteps?: number): void;

    /**
     * Steps the current script progress dialog forward the specified number of steps.
     * @param numSteps number - The number of steps to move the progress indicator forward.
     */
    stepProgress(numSteps?: number): void;

    /**
     * Sets the current background progress to the specified number of steps.
     * @param position number - The number of steps to set as the current position for the progress indicator.
     */
    updateBackgroundProgress(position: number): void;

    /**
     * Sets the current script progress dialog to the specified number of steps.
     * @param position number - The number of steps to set as the current position for the progress indicator.
     */
    updateProgress(position: number): void;

    /**
     * Deprecated
     * @returns boolean
     */
    shiftPressed(): boolean; // Boolean

    /**
     * Deprecated
     * @returns boolean
     */
    ctrlPressed(): boolean; // Boolean

    /**
     * @returns QDesktopWidget
     */
    getDesktop(): QDesktopWidget;
}
