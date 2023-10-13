declare class DzCallBackMgr extends QObject {

    /* Properties */

    /* Methods */

    createCallBack(name: QString, script?: QString, seval?: boolean): DzCallBack;
    clearAllCallBacks(): void;
    deleteCallBack(callBack: DzCallBack): void;
    deleteCallBack(name: QString): void;
    deleteCallBack(index: number): void;
    deleteCallBack(callBack: DzCallBack): void;
    deleteCallBack(name: QString): void;
    deleteCallBack(index: number): void;
    deleteCallBackGroup(name: QString): void;
    deleteCallBack(callBack: DzCallBack): void;
    deleteCallBack(name: QString): void;
    deleteCallBack(index: number): void;
    getCallBack(name: QString): DzCallBack;
    getCallBack(index: number): DzCallBack;
    getCallBack(name: QString): DzCallBack;
    getCallBack(index: number): DzCallBack;
    getCallBackIndex(name: QString): number;
    getNumCallBacks(): number;
    getGroup(name: QString): QObject[];
    getCallBackList(): QObject[];
    getSignalSignature(obj: QObject, signalName: QString): String[];
    getSignalSignature(obj: QObject, signalName: QString): String[];
}