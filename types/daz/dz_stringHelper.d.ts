declare class DzStringHelper extends QObject {
    objectName: string; //
    stripSpaces(value: string): string;
    changeSpecialChars(value: string, special: string): any;
    prependCharsIfNumeric(value: string, chars: string): any;
    stripCRLF(value: string): any;
    getWords(s: string, flag: boolean): any;
    getMatches(value: string, search: string): any;
    indentString(value: string, indent: number): any;
    replaceAll(value: string, search: string, replace: string): any;
    name: string; //
    //className(): string;
}