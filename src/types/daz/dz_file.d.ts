declare class DzFile extends DzFileInfo /*Q3TextStream*/ {

    /* Properties */
    static ReadOnly: number;
    static WriteOnly: number;
    static ReadWrite: number;
    static Append: number;
    static Truncate: number;
    static Text: number;
    static Translate: number;

    constructor(file: QString);

    /* Methods */
    copy(p0: QString): any;
    destroyed(): void;
    destroyed(p0: QObject): void;
    isTextModeEnabled(): void;
    link(p0: QString): any;
    open(p0: number): boolean;
    peek(p0: number): QByteArray;
    //permission(p0: Permissions): any;
    read(): String;
    read(p0: number): String;
    readByteLine(p0: number): any;
    rename(p0: QString): any;
    seek(p0: number): any;
    setCaching(p0: boolean): any;
    setFile(p0: QString): any;
    //setFile(p0: QFile): any;
    //setFile(p0: QDir, p1: QString): any;
    setFileName(p0: QString): any;
    //setPermissions(p0: Permissions): any;
    setTextModeEnabled(p0: boolean): void;
    write(p0: QString): any;
    write(p0: QByteArray): any;
    write(p0: QString, p1: number): any;
    writeByte(p0: number): any;
    writeLine(p0: QString): any;

    remove(): boolean;
    remove(fileName: QString): boolean;
    exists(fileName?: QString): boolean;
    isReadable(): boolean; // TODO ;
    isWritable(): boolean; // TODO ;
    isHidden(): boolean; // TODO ;
    size(): number;
    sizeStr(): any; // TODO ;
    open(accessMode: number, flags?: number): boolean;
    open(f: any, ioFlags: number, handleFlags: number): boolean;
    //open(f: any, flags: number, handleFlags: number): boolean;
    //open(fd: number, flags: number): boolean;
    //open(fd: number, ioFlags: number, handleFlags: number): boolean;
    close(): void;
    readByte(): number;
    readLines(): string[];
    readByteLine(): any; // TODO ;
    readAll(): any; // TODO ;
    writeByte(byte: number): void;
    write(data: String, length?: number): void;
    writeLine(data: String): void;
    copy(newName: QString): boolean;
    copy(fileName: QString, newName: QString): boolean;
}