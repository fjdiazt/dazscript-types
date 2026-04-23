/**
 * A class for starting/communicating with external programs.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/process_dz
 */
declare class DzProcess extends QObject {

    /* Properties */

    /**
     * Holds an Array of strings. The first being the program to execute, the rest being the command line arguments.
     */
    arguments: any[]; // Array

    /**
     * Holds the communication for the process.
     */
    communication: number; // Communication

    /**
     * Holds the exit status of the program when it has finished. 0 if the process is still running. (Read Only)
     */
    exitStatus: number; // Number

    /**
     * Holds whether or not the process has exited normally. (Read Only)
     */
    normalExit: boolean; // Boolean

    /**
     * Holds whether or not the process is currently running. (Read Only)
     */
    running: boolean; // Boolean

    /**
     * Holds the working directory for the process.
     */
    workingDirectory: string; // String

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of Communication.
     */
    static Stdin: number;

    /**
     * DAZ enum member of Communication.
     */
    static Stdout: number;

    /**
     * DAZ enum member of Communication.
     */
    static Stderr: number;

    /**
     * DAZ enum member of Communication.
     */
    static DupStderr: number;

    /* Constructors */

    constructor();

    /**
     * @param args any[]
     */
    constructor(args: any[]);

    /**
     * @param arg0 string
     */
    constructor(arg0: string);

    /* Methods */

    /**
     * @returns boolean true if it is possible to read an entire line of text from standard error, otherwise false.
     */
    canReadLineStderr(): boolean; // Boolean

    /**
     * @returns boolean true if it is possible to read an entire line of text from standard output, otherwise false.
     */
    canReadLineStdout(): boolean; // Boolean

    /**
     * Closes the process' standard input and deletes any pending data that has not been written to standard input.
     */
    closeStdin(): void;

    /**
     * Terminates the process.
     */
    kill(): void;

    /**
     * Attempts to run the process, writing buffer to the process' standard input. Standard input is closed if all of the data in buffer is written to it.
     * @param buffer string - The buffer to write to standard input with writeToStdin() using the local 8-bit representation of the string.
     * @param env any[] - The environment settings (if any), to set. If non-empty, values are expected to be in the form “NAME=VALUE”, and the process is started with these environment settings. If empty (default), the process is started with the same environment settings as the starting process.
     * @returns boolean true if the process was able to start, otherwise false.
     */
    launch(buffer: string, env?: any[]): boolean; // Boolean

    /**
     * @returns string A line of text from standard error, minus any trailing newline or carriage return characters if canReadLineStderr() is true, otherwise an empty string.
     */
    readLineStderr(): string; // String

    /**
     * @returns string A line of text from standard output, minus any trailing newline or carriage return characters if canReadLineStdout() is true, otherwise an empty string.
     */
    readLineStdout(): string; // String

    /**
     * Reads the data that the process has written to standard error. When new data is written, the readyReadStderr() signal is emitted.
     * @returns string The data written to standard error, or an empty string if there is no such data.
     */
    readStderr(): string; // String

    /**
     * Reads the data that the process has written to standard output. When new data is written, the readyReadStdout() signal is emitted.
     * @returns string The data written to standard output, or an empty string if there is no such data.
     */
    readStdout(): string; // String

    /**
     * Attempts to run the process for the program and arguments specified with the arguments property or as specified in the constructor.
     * @param env any[] - The environment settings (if any), to set. If non-empty, values are expected to be in the form “NAME=VALUE”, and the process is started with these environment settings. If empty (default), the process is started with the same environment settings as the starting process.
     * @returns boolean true if the process was able to start, otherwise false.
     */
    start(env?: any[]): boolean; // Boolean

    /**
     * Attempts to terminate the process.
     */
    tryTerminate(): void;

    /**
     * Writes buffer to standard input. The process may, or may not, read the data. The wroteToStdin() signal is emitted once all data in buffer has been written to the process.
     * @param buffer string - The buffer to write to.
     */
    writeToStdin(buffer: string): void;

    /* Signals */

    /**
     * Emitted when the process is started with launch(). If starting the process is successful, this signal is emitted after the data passed in has been written to standard input. If starting the process fails, this signal is emitted immediately.
     */
    launchFinished: ISignal<void>;

    /**
     * Emitted when the process has exited.
     */
    processExited: ISignal<void>;

    /**
     * Emitted when the process has written data to standard error.
     */
    readyReadStderr: ISignal<void>;

    /**
     * Emitted when the process has written data to standard output.
     */
    readyReadStdout: ISignal<void>;

    /**
     * Emitted if the data sent to standard input (via writeToStdin()) was actually written to the process.
     */
    wroteToStdin: ISignal<void>;
}
