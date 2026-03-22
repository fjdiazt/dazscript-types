
interface String {
    search(pattern: String): number;
    search(pattern: RegExp): number;

    endsWith(pattern: String): boolean;
    endsWith(pattern: RegExp): boolean;
    find(pattern: RegExp, startPos?: number): number;
    find(pattern: String, startPos?: number): number;
    /** @param startPos if omitted defaults to 'length -1'*/
    findRev(pattern: RegExp, startPos?: number): number;
    /** @param startPos if omitted defaults to 'length -1'*/
    findRev(pattern: String, startPos?: Number): number;

    startsWith(pattern: String): boolean;
    startsWith(pattern: RegExp): boolean;
    upper(): String;
    lower(): String;
    mid(startIndex: number, num: number): string;

    /**
     * Text to represent as a String
     * @param value The text to represent as a string.
     * @param fieldWidth Specifies the minimum amount of space that value is padded to. A positive fieldWidth will produce right aligned text, a negative fieldWidth will produce left aligned text.
     */
    //arg(value: String, fieldWidth?: Number): string;
    //arg(value: Number, fieldWidth?: Number): string;
    arg(value: any, fieldWidth?: Number): string;

    arg(): any;
    argDec(): any;
    argInt(): any;
    argStr(): any;
    endsWith(): any;
    find(): any;
    findRev(): any;
    isEmpty(): any;
    left(num: Number): string;
    lower(): any;
    mid(): any;
    right(num: number): string;
    searchRev(): any;
    startsWith(): any;
    upper(): any;
    toString(base: number): string;
}

