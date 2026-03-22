declare class Q3TextStream extends QObject {

    /* Properties */

    /* Methods */
    atEnd(): boolean;
    //codec(): QTextCodec;
    //device(): QIODevice;
    //eat_ws(): QChar;
    eof(): boolean;
    fill(obj: number): number;
    fill(): number;
    fill(obj: number): number;
    fill(): number;
    flags(f: number): number;
    flags(): number;
    flags(f: number): number;
    flags(): number;
    init(): void;
    input_bin(): number;
    input_dec(): number;
    input_double(): number;
    input_hex(): number;
    input_int(): number;
    input_oct(): number;
    //output_int(obj: number, obj: number, obj: boolean): Q3TextStream;
    precision(obj: number): number;
    precision(): number;
    precision(obj: number): number;
    precision(): number;
    read(p0: number): QString;
    readLine(): QString;
    readRawBytes(obj: string, len: number): Q3TextStream;
    reset(): void;
    //setCodec(obj: QTextCodec): void;
    //setDevice(obj: QIODevice): void;
    setEncoding(obj: any): void;
    setf(bits: number): number;
    setf(bits: number, mask: number): number;
    setf(bits: number): number;
    setf(bits: number, mask: number): number;
    skipWhiteSpace(): void;
    //ts_getbuf(obj: QChar, obj: number): number;
    //ts_getc(): QChar;
    //ts_getline(obj: QChar): number;
    //ts_isdigit(obj: QChar): boolean;
    //ts_isspace(obj: QChar): boolean;
    //ts_putc(obj: QChar): void;
    //ts_putc(obj: number): void;
    //ts_putc(obj: QChar): void;
    //ts_putc(obj: number): void;
    //ts_ungetc(obj: QChar): void;
    unsetDevice(): void;
    unsetf(bits: number): number;
    width(obj: number): number;
    width(): number;
    width(obj: number): number;
    width(): number;
    //writeBlock(p: QChar, len: number): Q3TextStream;
    //writeBlock(p: string, len: number): Q3TextStream;
    //writeBlock(p: QChar, len: number): Q3TextStream;
    //writeBlock(p: string, len: number): Q3TextStream;
    writeRawBytes(obj: string, len: number): Q3TextStream;
}