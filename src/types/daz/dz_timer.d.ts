/**
 * Script wrapper for QTimer.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/timer_dz
 */
declare class DzTimer extends QObject {

    /* Properties */

    /**
     * Holds whether the timer is running. (Read Only)
     */
    active: boolean; // Boolean

    /**
     * Holds the timeout interval in milliseconds; default is 0 - will time out as soon as all events in the window system's event queue have been processed.
     */
    interval: number; // Number

    /**
     * Holds whether the timer is the type that runs only once; if false, timer runs every interval milliseconds.
     */
    singleShot: number; // Number

    /* Constructors */

    /**
     * @param parent QObject
     */
    constructor(parent?: QObject);

    /* Methods */

    /**
     * Starts, or restarts, the timer with a timeout interval of msec milliseconds. If the timer is already running, it will be stopped and restarted. If singleShot is true, the timer will be started only once.
     * @param msec number - The duration, in milliseconds, for the timer to run.
     */
    start(msec: number): void;

    /**
     * Starts, or restarts, the timer with a timeout interval of interval milliseconds. If the timer is already running, it will be stopped and restarted. If singleShot is true, the timer will be started only once.
     */
    start(): void;

    /**
     * Stops the timer.
     */
    stop(): void;

    /* Signals */

    /**
     * Emitted when the timer times out.
     */
    timeout: ISignal<void>;
}
