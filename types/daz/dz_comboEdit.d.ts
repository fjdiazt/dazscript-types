declare class DzComboEdit extends DzWidget {

    // Properties
    acceptableInput: boolean; // true
    alignment: number; // 129
    appendDelimiter: string; // ,
    colorCount: number; // 2147483647
    cursorPosition: number; // 0
    depth: number; // 32
    enabled: boolean; // true
    globalX: number; // 0
    globalY: number; // 0
    height: number; // 30
    heightMM: number; // 7
    holdModifierAppend: boolean; // false
    inputMask: string; //
    logicalDpiX: number; // 96
    logicalDpiY: number; // 96
    maxHeight: number; // 16777215
    maxLength: number; // 32767
    maxWidth: number; // 16777215
    menuSelectionIncludesPath: boolean; // false
    minHeight: number; // 0
    minWidth: number; // 0
    modified: boolean; // false
    name: string; // uuid-18beeab09da4adfa3
    objectName: string; // uuid-18beeab09da4adfa3
    palette: object; // [object Object]
    physicalDpiX: number; // 96
    physicalDpiY: number; // 96
    placeholderText: string; //
    readOnly: boolean; // false
    redoAvailable: boolean; // false
    statusTip: string; //
    submenuDelimiter: string; // >>
    text: string; //
    toolTip: string; //
    undoAvailable: boolean; // false
    usePathPopUp: boolean; // false

    // Methods
    addItem(p0: string): any;
    addItem(p0: string, p1: boolean): any;
    addItems(p0: string[]): any;
    addItems(p0: string[], p1: boolean): any;
    backspace(): any;
    clear(): any;
    clearText(): any;
    cursorBackward(): any;
    cursorBackward(p0: boolean): any;
    cursorBackward(p0: boolean, p1: number): any;
    cursorForward(): any;
    cursorForward(p0: boolean): any;
    cursorForward(p0: boolean, p1: number): any;
    cursorWordBackward(): any;
    cursorWordBackward(p0: boolean): any;
    cursorWordForward(): any;
    cursorWordForward(p0: boolean): any;
    cut(): any;
    del(): any;
    end(): any;
    end(p0: boolean): any;
    findChildOfWidget(p0: string): any;
    findItem(p0: string): any;
    getChildrenOfWidget(): any;
    getChildrenOfWidget(p0: string): any;
    getLayout(): any;
    getValidatorSettings(): any;
    getWidget(): any;
    grab(): any;
    grab(p0: QRect): any;
    grab(p0: number): any;
    grab(p0: number, p1: number): any;
    grab(p0: number, p1: number, p2: number): any;
    grab(p0: number, p1: number, p2: number, p3: number): any;
    hasAcceptableInput(): any;
    hasSelectedText(): any;
    hide(): any;
    home(): any;
    home(p0: boolean): any;
    insertItem(p0: number, p1: string): any;
    insertItem(p0: number, p1: string, p2: boolean): any;
    insertItems(p0: number, p1: string[]): any;
    insertItems(p0: number, p1: string[], p2: boolean): any;
    items(): any;
    paste(): any;
    redo(): any;
    removeItem(p0: string): any;
    selectAll(): any;
    selectedText(): any;
    selectionStart(): any;
    setDoubleValidator(p0: number, p1: number, p2: number): any;
    setDoubleValidator(p0: number, p1: number, p2: number, p3: boolean): any;
    setFixedHeight(p0: number): any;
    setFixedSize(p0: number, p1: number): any;
    setFixedWidth(p0: number): any;
    setGeometry(p0: number, p1: number, p2: number, p3: number): any;
    setIntValidator(p0: number, p1: number): any;
    setRegExValidator(p0: string): any;
    setRegExValidator(p0: string, p1: boolean): any;
    setSelection(p0: number, p1: number): any;
    setValidator(p0: DzSettings): any;
    show(): any;
    undo(): any;

    // Signals
    editingFinished(): any;
    textEdited: ISignalT<string>
    cursorPositionChanged(p0: number, p1: number): any;
    itemChanged: ISignalT<string>;
    returnPressed(): any;
    selectionChanged(): any;
    textChanged: ISignalT<string>
}