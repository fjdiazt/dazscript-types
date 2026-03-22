declare class DzTextEdit extends DzWidget {

    textChanged: ISignal;

    text: string;
    plainText: string;
    html: string;
    acceptRichText: boolean; // true
    documentTitle: string; //
    blockCount: number; // 1
    paragraphs: number; // 1
    lines: number; // 1
    length: number; // 1
    italic: boolean; // false
    bold: boolean; // false
    underline: boolean; // false
    color: QColor;
    linkUnderline: boolean; // false
    pointSize: number; // 0
    readOnly: boolean;
    redoAvailable: boolean; // false
    undoAvailable: boolean; // false
    undoRedoEnabled: boolean; // true
    textColor: Color; // [object Object]
    textBackgroundColor: Color; // [object Object]

    constructor(parent: DzWidget);

    hasSelectedText(): boolean;
    selectedText(): String;
    selectionStart(): number;
    selectionEnd(): number;
    selectionParaStart(): number;
    selectionIndexStart(): number;
    selectionParaEnd(): number;
    selectionIndexEnd(): number;
    append(text: String): void;
    clear(): void;
}