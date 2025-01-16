/**
 * @deprecated use ISignal<T>
 */
interface ISignal {
    scriptConnect(action: DzAction | ((sender: any) => void), funcName?: QString): void;
    scriptConnect(action: DzAction | ((sender: any, arg: any) => void), funcName?: QString): void;
    /**
     * @deprecated
     */
    connect(action: DzAction | ((sender: any) => void), funcName?: QString): void;
    /**
    * @deprecated
    */
    connect(action: DzAction | ((sender: any, arg: any) => void), funcName?: QString): void;
    disconnect(): void;
}

interface ISignalT<T, T1 = any, T2 = any> {
    /**
     * @deprecated
     */
    connect(action: DzAction | ((sender: T) => void), funcName?: QString): void;
    /**
     * @deprecated
     */
    connect(action: DzAction | ((sender: T, arg: T1) => void), funcName?: QString): void;
    /**
     * @deprecated
     */
    connect(action: DzAction | ((sender: T, arg: T1, arg1: T2) => void), funcName?: QString): void;
    scriptConnect(action: DzAction | ((sender: T) => void), funcName?: QString): void;
    scriptConnect(action: DzAction | ((sender: T, arg: T1) => void), funcName?: QString): void;
    scriptConnect(action: DzAction | ((sender: T, arg: T1, arg1: T2) => void), funcName?: QString): void;
    disconnect(): void;
}