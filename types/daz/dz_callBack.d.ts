declare class DzCallBack extends QObject {
    static className(): string;

    addToGroup(group: string): any;
    clearConnection(): void;
    getArguments(which: number): object;
    getArgCount(): number;
    getGroups(): any[];
    getScript(): string;
    getSender(): object;
    isEvaluated(): boolean;
    removeFromGroup(group: string): void;
    setConnection(sender: object, signal: string): void;
    setScript(script: string, evaluate: boolean): void;
    setProcessAsEvent(process: boolean): void;
    setBlockedDuringSceneLoad(blocked: boolean): void;
    setConnections(o: object, methodDefinitionNames: string[], b: boolean): void;
}