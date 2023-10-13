declare class ByteArray extends QByteArray {
    constructor();
    constructor(byteArray: ByteArray);
    constructor(str: string);
    fromBase64(byteArray: ByteArray): ByteArray;
    fromBase64(str: string): ByteArray;
}