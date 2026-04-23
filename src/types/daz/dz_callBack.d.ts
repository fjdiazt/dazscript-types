/**
 * DAZ Script callback object.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/callback_dz
 */
declare class DzCallBack extends QObject {

    /* Methods */

    /**
     * Adds the callback to the given callback group.
     * @param group string - The name of the group to add the callback to.
     */
    addToGroup(group: string): void;

    /**
     * Disconnects from the signal that triggers this callback.
     */
    clearConnection(): void;

    /**
     * Clears the script Function assigned to this callback.
     * @since 4.11.0.270
     */
    clearScriptFunction(): void;

    /**
     * @param i number
     * @returns Object The i'th argument from the current execution of the callback.
     */
    getArg(i: number): Object;

    /**
     * @returns number The number of arguments for the current execution of the callback.
     */
    getArgCount(): number; // Number

    /**
     * @returns boolean true if this callback is not processed during a scene load but is instead processed at the end of a scene load, otherwise false.
     */
    getBlockedDuringSceneLoad(): boolean; // Boolean

    /**
     * @returns boolean true if this callback is set to be deleted after it has been executed, otherwise false.
     * @since 4.6.4.67
     */
    getDeleteAfterExecution(): boolean; // Boolean

    /**
     * @param name string - The name of the property to retrieve the value of.
     * @returns QVariant The value of the dynamic property (if any).
     * @since 4.9.4.90
     */
    getDynamicProperty(name: string): QVariant;

    /**
     * @returns any[] A list of the groups that this callback belongs to.
     */
    getGroups(): any[]; // Array

    /**
     * @returns boolean true if this callback is processed as an event, otherwise false.
     */
    getProcessAsEvent(): boolean; // Boolean

    /**
     * @returns string The script that is executed when the signal is emitted.
     */
    getScript(): string; // String

    /**
     * @returns QObject The object that sent the signal, or NULL.
     */
    getSender(): QObject;

    /**
     * @returns boolean true if getScript() for this callback is the actual code that gets executed, false if getScript() contains the filename of the script to execute.
     */
    isEvaluated(): boolean; // Boolean

    /**
     * Removes this callback from the group callback group.
     * @param group string - The name of the group to remove the callback from.
     */
    removeFromGroup(group: string): void;

    /**
     * @param onOff boolean - If true, this callback will not be processed while the scene is loading, it will be processed when the scene is finished loading.
     */
    setBlockedDuringSceneLoad(onOff: boolean): void;

    /**
     * Makes the connection that triggers this callback.
     * @param sender QObject - The object that the signal belongs to.
     * @param signal string - The signature of the signal to connect to.
     * @returns boolean
     */
    setConnection(sender: QObject, signal: string): boolean; // Boolean

    /**
     * Makes the connection that triggers this callback.
     * @param sender QObject - The object that the signal belongs to.
     * @param signal string - The signature of the signal to connect to.
     * @param garbageCollect boolean - If true, remove this callback from the DzCallBackMgr when sender is deleted.
     * @returns boolean
     */
    setConnection(sender: QObject, signal: string, garbageCollect: boolean): boolean; // Boolean

    /**
     * Makes the connection that triggers this callback.
     * @param sender QObject - The object that the signal belongs to.
     * @param signalList any[] - List of signal signatures to connect to.
     * @param garbageCollect boolean - If true, remove this callback from the DzCallBackMgr when sender is deleted.
     * @returns number The number of connections in signalList that are established, or -1 if sender is null.
     */
    setConnections(sender: QObject, signalList: any[], garbageCollect: boolean): number; // Number

    /**
     * @param onOff boolean - If true, sets this callback to be deleted after it has been executed.
     * @since 4.6.4.67
     */
    setDeleteAfterExecution(onOff: boolean): void;

    /**
     * Sets a dynamic property on this callback.
     * @param name string - The name of the property to set.
     * @param value QVariant - The value to set.
     * @since 4.9.4.90
     */
    setDynamicProperty(name: string, value: QVariant): void;

    /**
     * @param onOff boolean - If true, sets this callback to trigger as it is encountered in the event stack.
     */
    setProcessAsEvent(onOff: boolean): void;

    /**
     * Sets the script that will be executed by this callback.
     * @param script string - The filename or code of the script to execute.
     * @param evaluate boolean - If script is the actual code and it should be embedded, set this to true, otherwise it is assumed that script is the path of a script file to execute.
     */
    setScript(script: string, evaluate: boolean): void;

    /**
     * Connects this callback to a script Function.
     * @param functionRef Function - The script Function to call.
     * @param thisObject Object - The object to bind to 'this' in the scope of functionRef.
     * @since 4.11.0.270
     */
    setScriptFunction(functionRef: Function, thisObject: Object): void;

    /**
     * Connects this callback to a script Function.
     * @param functionRef Function - The script Function to call.
     * @since 4.11.0.270
     */
    setScriptFunction(functionRef: Function): void;

    /* Undocumented Augment Members */

    /** @undocumented */
    getArguments(which: number): object;
}
