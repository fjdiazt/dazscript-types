declare class DzScript extends QObject {

    /* Properties */
    objectName: string;
    name: string;
    static UseExtension: number;
    static TextScriptFile: number;
    static DAZScriptFile: number;
    static EncDAZScriptFile: number;
    static Unknown: number;
    static DAZScript1: number;
    static DAZScript2: number;

    constructor(name?: string);
    constructor(script: DzScript);

    /* Methods */
    nameChanged(name: String): any;
    className(): string;
    makePersistent(): any;
    inherits(base: String): any;
    iskindof(kind: String): any;
    getName(): any;
    executeScript(script: DzScript, ...list: string[]): any;
    checkSyntax(): any;
    execute(): boolean;
    execute(...list: any[]): boolean;
    call(funcname: String, ...args: any[]): any;
    loadFromFile(filename: String, b: boolean): any;
    loadFromFile(filename: String): any;
    getLastStatus(): any;
    addCode(code: String): any;
    addLines(line: String, value: number): any;
    addLines(s: string): any;
    addLine(s: string, n: number): any;
    addLine(s: string): any;
    setCode(s: string): any;
    makeEncrypted(): any;
    clear(): any;
    setContext(scriptContext: DzScriptContext): any;
    convertToDAZScript2(): any;
    getFilename(): any;
    saveToFile(name: String, scriptFileMode: number, filetype: String): any;
    saveToFile(name: String, scriptFileMode: number): any;
    saveToFile(name: String): any;
    getCode(): any;
    isEmpty(): any;
    isEncrypted(): any;
    wasConverted(scriptLanguage: any): any;
    wasConverted(): any;
    result(): any;
    errorMessage(): any;
    errorLine(): any;
    stackTrace(): any;
    getScriptVersion(): any;
    getScriptType(): any;
    getScriptLanguage(): any;
    getAuthor(): any;
    getShouldReuseInterpreter(): any;
    setReuseInterpreter(flag: boolean): any;
    evaluate(code: String, context: QObject, compatibilityMode: boolean): any;
    evaluate(code: String, context: QObject): any;
    evaluate(code: String): any;
    isScriptFile(filename: String): any;
    isScriptBinaryFile(filename: String): any;
    isScriptTextFile(filename: String): any;
    isScriptExtension(filename: String): any;
    isScriptBinaryExtension(filename: String): any;
    isScriptTextExtension(filename: String): any;
    getScriptFile(filenameWithoutExtension: String): any;
    addScriptOpenExtensionsToFilter(filter: DzFileFilter): any;
    addScriptSaveExtensionsToFilter(filter: DzFileFilter): any;
    addScriptBinaryExtensionsToFilter(filter: DzFileFilter): any;
    addScriptTextExtensionsToFilter(filter: DzFileFilter, flag: boolean): any;
    addScriptTextExtensionsToFilter(filter: DzFileFilter): any;
    addScriptOpenExtensionsAsMultipleFilters(filter: DzFileFilter): any;
    addScriptSaveExtensionsAsMultipleFilters(filter: DzFileFilter): any;
    addScriptBinaryExtensionsAsMultipleFilters(filter: DzFileFilter): any;
    addScriptTextExtensionsAsMultipleFilters(filter: DzFileFilter, flag: boolean): any;
    addScriptTextExtensionsAsMultipleFilters(filter: DzFileFilter): any;
    getScriptExtensions(): any;
    legalizeName(name: String): any;
}