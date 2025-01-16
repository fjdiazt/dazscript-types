declare class DzProcess extends QObject {
    static DupStderr: number;	// 8
    static Stderr: number;	// 4
    static Stdin: number;	// 1
    static Stdout: number;	// 2

    arguments: QObject;	//
    communication: number;	// 7
    exitStatus: number;	// 0
    name: string;	//
    normalExit: boolean;	// false
    objectName: string;	//
    running: boolean;	// false
    workingDirectory: string;	// C:/daz3d

    canReadLineStderr(): any;
    canReadLineStdout(): any;
    className(): any;
    closeStdin(): any;
    deleteLater(): any;
    destroyed(): void;
    destroyed(p0: QObject): void;
    inherits(): any;
    kill(): any;
    launch(p0: string): any;
    launch(p0: string, p1: string[]): any;
    launchFinished(): void;
    processExited(): void;
    readLineStderr(): any;
    readLineStdout(): any;
    readStderr(): any;
    readStdout(): any;
    readyReadStderr(): any;
    readyReadStdout(): any;
    start(): any;
    start(p0: string[]): any;
    tryTerminate(): any;
    writeToStdin(p0: string): any;
    wroteToStdin(): any;
}