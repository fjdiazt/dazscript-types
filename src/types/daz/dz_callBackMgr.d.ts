/**
 * Manager responsible for handling callback objects.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/callbackmgr_dz
 */
declare class DzCallBackMgr extends QObject {

    /* Methods */

    /**
     * Deletes all callbacks.
     */
    clearAllCallBacks(): void;

    /**
     * Creates a DzCallBack object.
     * @param name string - The name for the callback.
     * @param script string - The filename or code of the script to execute.
     * @param evaluate boolean - If script is the actual code and it should be embedded, set this to true, otherwise it is assumed that script is the path of a script file to execute.
     * @returns DzCallBack
     */
    createCallBack(name: string, script: string, evaluate: boolean): DzCallBack;

    /**
     * Creates a DzCallBack object.
     * @param name string - The name for the callback.
     * @returns DzCallBack
     */
    createCallBack(name: string): DzCallBack;

    /**
     * Deletes the callback at the given index.
     * @param index number - The index of the callback to delete.
     */
    deleteCallBack(index: number): void;

    /**
     * Deletes all callbacks with the given name.
     * @param name string - The name of the callback to delete.
     */
    deleteCallBack(name: string): void;

    /**
     * Deletes the specified callback.
     * @param callBack DzCallBack - The callback to delete.
     */
    deleteCallBack(callBack: DzCallBack): void;

    /**
     * Deletes all callbacks in a given group.
     * @param name string - The name of the group with callbacks to delete.
     */
    deleteCallBackGroup(name: string): void;

    /**
     * @param index number
     * @returns DzCallBack The callback at index if at least one callback exists and index is within the range [0, getNumCallBacks() - 1], otherwise null.
     */
    getCallBack(index: number): DzCallBack;

    /**
     * @param name string
     * @returns DzCallBack The first DzCallBack object with the given name.
     */
    getCallBack(name: string): DzCallBack;

    /**
     * @param name string
     * @returns number The index of the first callback named name.
     */
    getCallBackIndex(name: string): number; // Number

    /**
     * @returns any[] The list of all callbacks.
     */
    getCallBackList(): any[]; // Array

    /**
     * @param name string
     * @returns any[] The list of callbacks in the group named name.
     */
    getGroup(name: string): any[]; // Array

    /**
     * @returns number The number of callbacks.
     */
    getNumCallBacks(): number; // Number

    /**
     * @param obj QObject
     * @param signalName string
     * @returns any[] A list of strings that represent the signature(s) of the signal with the specified name.
     */
    getSignalSignature(obj: QObject, signalName?: string): any[]; // Array
}
