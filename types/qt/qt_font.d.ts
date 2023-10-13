declare class QFont extends QObject {
    bold: boolean;	// false
    family: string;	// Arial
    italic: boolean;	// false
    pixelSize: number;	// 250
    pointSize: number;	// -1
    strikeout: boolean;	// false
    underline: boolean;	// false

    constructor(family: string);
}