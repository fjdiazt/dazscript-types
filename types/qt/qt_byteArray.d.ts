declare class QByteArray {
    constructor();
    constructor(string: string);

    // Properties
    length: number;    //27192
    name: string;
    objectName: string;
    size: number;    //27192

    // Methods
    byteAt(pos: number): number;
    charAt(pos: number): number;
    className(): string;
    convertToString(): string;
    convertToStringFromUtf16(): string;
    convertToStringFromUtf8(): string;
    deleteLater(): any;
    destroyed(o: QObject): any;
    destroyed(): any;
    fromBase64(byteArray: QByteArray): any;
    fromHex(byteArray: QByteArray): any;
    fromPercentEncoding(byteArray: QByteArray): any;
    inherits(): any;
    toBase64(): QByteArray;
    toHex(): any;
    toPercentEncoding(byteArray: QByteArray, byteArray2: QByteArray): any;
    toPercentEncoding(byteArray: QByteArray): any;
    toPercentEncoding(): any;
}