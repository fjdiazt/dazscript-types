declare class DzLabel extends DzWidget {
    /* Properties */
    alignment: number; // 129
    hasSelectedText: boolean; // false
    indent: number; // -1
    openExternalLinks: boolean; // false
    pixmap: QPixmap; // [object Object]
    scaledContents: boolean; // false
    selectedText: string; //
    text: QString; //
    textFormat: number; // 2
    textInteractionFlags: number; // 4
    wordWrap: boolean; // false


    /* Methods */

    constructor(parent: DzWidget);
    clear(): any;
    buddy(): any;
    setBuddy(widget: DzWidget): ISignal;
}