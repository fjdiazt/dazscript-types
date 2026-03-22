declare class DzLineEdit extends DzWidget {
    static Normal: number; // 0
    static NoEcho: number; // 1
    static Password: number; // 2
    static PasswordEchoOnEdit: number; // 3

    acceptableInput: boolean; // true
    alignment: number; // 129
    cursorPosition: number; // 0
    echoMode: number; // 0
    frame: boolean; // true
    hasSelectedText: boolean | (() => boolean); // false
    inputMask: string; //
    maxLength: number; // 32767
    modified: boolean; // false
    placeholderText: string; //
    readOnly: boolean; // false
    redoAvailable: boolean; // false
    selectedText: String | (() => String); //
    text: string; //
    undoAvailable: boolean; // false

    constructor(parent: DzWidget);

    lostFocus(): void;
    editingFinished(): any;
    returnPressed(): any;
    selectionChanged(): any;

    /**
     * Emitted when the current position changes.
     * oldPos, newPos
     */
    cursorPositionChanged: ISignalT<number, number>;
    textChanged: ISignalT<string>;

    textEdited(s: string): ISignal;
    hasAcceptableInput(): any;
    backspace(): any;
    clearModified(): any;
    cursorBackward(mark: boolean, p1?: number): any;
    cursorForward(mark: boolean, p1?: number): any;
    cursorWordBackward(flag: boolean): ISignal;
    cursorWordForward(flag: boolean): ISignal;
    del(): void;
    deselect(): void;
    end(mark: boolean): void;
    home(mark: boolean): void;
    selectionStart(): number;
    setSelection(start: number, length: number): void;
    clear(): void;
    copy(): any;
    cut(): void;
    paste(): void;
    redo(): void;
    selectAll(): any;
    undo(): void;
    getValidatorSettings(): DzSettings;
    setValidator(settings: DzSettings): void;
    setDoubleValidator(bottom: number, top: number, decimals: number, scientific?: boolean): void;
    setIntValidator(minimum: number, maximum: number): void;
    setRegExValidator(rx: QString, caseSensitive?: boolean): any;
}