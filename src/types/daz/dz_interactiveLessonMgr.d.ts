/**
 * Manager responsible for handling interactive lessons.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/interactivelessonmgr_dz
 */
declare class DzInteractiveLessonMgr extends QObject {

    /* Properties */

    /**
     * The width of the progress indicator displayed above the instruction box.
     */
    progressWidth: number; // Number

    /* Methods */

    /**
     * Starts the lesson using a list of instructions in a separate file.
     * @param path string - The absolute path to a file that provides a list of instructions for the lesson.
     */
    begin(path: string): void;

    /**
     * Starts the lesson using the instructions list.
     * @param instructions any[] - The list of instructions for the lesson.
     */
    begin(instructions: any[]): void;

    /**
     * @returns number The index of the current instruction within the lesson.
     */
    currentIndex(): number; // Number

    /**
     * @returns string The path of the current lesson.
     */
    currentPath(): string; // String

    /**
     * @returns boolean The query of the current instruction within the lesson.
     */
    currentQuery(): boolean; // Boolean

    /**
     * @returns number
     */
    currentQuery(): number; // Number

    /**
     * @returns string
     */
    currentQuery(): string; // String

    /**
     * @returns string The type of the current instruction within the lesson.
     */
    currentType(): string; // String

    /**
     * @param classname string
     * @param info string
     * @param tag string
     * @param locateOnly boolean
     * @returns string A string representation of an “action” type instruction.
     */
    getActionInstruction(classname: string, info: string, tag?: string, locateOnly?: boolean): string; // String

    /**
     * @param activity string
     * @param info string
     * @param tag string
     * @param locateOnly boolean
     * @returns string A string representation of an “activity” type instruction.
     */
    getActivityInstruction(activity: string, info: string, tag?: string, locateOnly?: boolean): string; // String

    /**
     * @param info string
     * @param button string
     * @returns string A string representation of a “display” type instruction.
     */
    getDisplayInstruction(info: string, button?: string): string; // String

    /**
     * @param type string
     * @param query ByteArray
     * @param info string
     * @param tag string
     * @param locateOnly boolean
     * @returns string A string representation of an instruction.
     */
    getInstruction(type: string, query: ByteArray, info: string, tag?: string, locateOnly?: boolean): string; // String

    /**
     * @param type string
     * @param query string
     * @param info string
     * @param tag string
     * @param locateOnly boolean
     * @returns string A string representation of an instruction if the type is valid, otherwise an empty string.
     */
    getInstruction(type: string, query: string, info: string, tag?: string, locateOnly?: boolean): string; // String

    /**
     * @param type string
     * @param query boolean
     * @param info string
     * @param tag string
     * @param locateOnly boolean
     * @returns string A string representation of an instruction.
     */
    getInstruction(type: string, query: boolean, info: string, tag?: string, locateOnly?: boolean): string; // String

    /**
     * @param type string
     * @param query number
     * @param info string
     * @param tag string
     * @param locateOnly boolean
     * @returns string A string representation of an instruction.
     */
    getInstruction(type: string, query: number, info: string, tag?: string, locateOnly?: boolean): string; // String

    /**
     * @param layout string
     * @param info string
     * @param tag string
     * @param locateOnly boolean
     * @returns string A string representation of an “layout” type instruction.
     */
    getLayoutInstruction(layout: string, info: string, tag?: string, locateOnly?: boolean): string; // String

    /**
     * @param widgetPath string
     * @param info string
     * @param tag string
     * @param locateOnly boolean
     * @returns string A string representation of a “widget” type instruction.
     */
    getWidgetInstruction(widgetPath: string, info: string, tag?: string, locateOnly?: boolean): string; // String

    /**
     * @returns any[]
     */
    instructionTypes(): any[]; // Array

    /**
     * @returns boolean true if the lesson is currently running, otherwise false.
     */
    isRunning(): boolean; // Boolean

    iterate(): void;

    /**
     * Skips the next instruction in the lesson.
     */
    skip(): void;

    /**
     * Stops the lesson.
     */
    stop(): void;

    /* Signals */

    /**
     * Emitted when an instruction in an interactive lesson has been skipped.
     */
    skipped: ISignal<void>;

    /**
     * Emitted when an interactive lesson has started.
     */
    started: ISignal<void>;

    /**
     * Emitted when an interactive lesson has stepped to the next instruction.
     */
    stepped: ISignal<void>;

    /**
     * Emitted when an interactive lesson is stopped.
     * @param success boolean - Whether or not the lesson stopped because it has reached the end.
     */
    stopped: ISignal<boolean>;

    /* Undocumented Augment Members */

    /** @undocumented */
    scheduleStop(): any; // TODO ;

    /** @undocumented */
    scheduleSkip(): any; // TODO ;

    /** @undocumented */
    menuHook(): any; // TODO ;

    /** @undocumented */
    menuHook(): any; // TODO ;

    /** @undocumented */
    getRecordedInstructions(): any; // TODO ;

    /** @undocumented */
    startRecording(): any; // TODO ;

    /** @undocumented */
    finishRecording(): any; // TODO ;
}
