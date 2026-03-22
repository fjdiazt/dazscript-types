declare class DzGZFile extends DzFileInfo {
    constructor(file: string);
    static Append: number; // 4
    static ReadOnly: number; // 1
    static ReadWrite: number; // 3
    static Text: number; // 16
    static Translate: number; // 16
    static Truncate: number; // 8
    static WriteOnly: number; // 2
    name: string; //
    objectName: string; //
    absFileName(): any;
    baseName(): any;
    className(): any;
    close(): any;
    deleteLater(): any;
    destroyed(): void;
    destroyed(p0: QObject): void;
    eof(): any;
    exists(): any;
    extension(): any;
    fileName(): any;
    inherits(): any;
    isHidden(): any;
    isReadable(): any;
    isWritable(): any;
    lastRead(): any;
    open(p0: number): any;
    path(): any;
    read(): any;
    readByte(): any;
    readLine(): any;
    readLines(): any;
    remove(): any;
    size(): any;
    sizeStr(): any;
    unzip(p0: string): any;
    write(p0: string): any;
    write(p0: string, p1: number): any;
    writeByte(p0: number): any;
    writeLine(p0: string): any;
    zip(p0: string): any;
}