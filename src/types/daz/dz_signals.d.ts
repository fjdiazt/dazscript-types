interface ISignal<T, T1 = any, T2 = any, T3 = any, T4 = any> {
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
    scritptCconnect(action: DzAction | ((sender: T, arg: T1, arg1: T2, arg2: T3) => void), funcName?: QString): void;
    scriptConnect(action: DzAction | ((sender: T, arg: T1, arg1: T2, arg2: T3, arg3: T4) => void), funcName?: QString): void;
    disconnect(): void;
}