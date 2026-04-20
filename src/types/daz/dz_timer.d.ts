/** Script wrapper for QTimer. */
declare class DzTimer extends QObject {
    /** Whether the timer is running. Read only. */
    readonly active: boolean;
    /** Timeout interval in milliseconds. Default 0 — fires as soon as the event queue is empty. */
    interval: number;
    /** If true, the timer fires only once; if false, repeats every interval milliseconds. */
    singleShot: number;

    constructor(parent?: QObject);

    /** Starts or restarts the timer with the given timeout in milliseconds. */
    start(msec: number): void;
    /** Starts or restarts the timer using the current interval property. */
    start(): void;
    /** Stops the timer. */
    stop(): void;

    /** Emitted when the timer times out. */
    timeout: ISignalT<void>;
}
