/**
 * Encapsulates a DAZ Script script.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/script_dz
 */
declare class DzScript extends DzBase {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of ScriptFileMode.
     */
    static UseExtension: number;

    /**
     * DAZ enum member of ScriptFileMode.
     */
    static TextScriptFile: number;

    /**
     * DAZ enum member of ScriptFileMode.
     */
    static DAZScriptFile: number;

    /**
     * DAZ enum member of ScriptFileMode.
     */
    static EncDAZScriptFile: number;

    /**
     * DAZ enum member of ScriptLanguage.
     */
    static Unknown: number;

    /**
     * DAZ enum member of ScriptLanguage.
     */
    static DAZScript1: number;

    /**
     * DAZ enum member of ScriptLanguage.
     */
    static DAZScript2: number;

    /* Constructors */

    constructor();

    /**
     * @param script DzScript
     */
    constructor(script: DzScript);

    /* Static Methods */

    /**
     * @param filter DzFileFilter - The filter to add the binary extension to.
     * @since 4.22.1.143
     */
    static addScriptBinaryExtensionAsFilter(filter: DzFileFilter): void;

    /**
     * @param filter DzFileFilter - The filter to add the binary extensions to.
     */
    static addScriptBinaryExtensionsAsMultipleFilters(filter: DzFileFilter): void;

    /**
     * @param filter DzFileFilter - The filter to add the binary extensions to.
     */
    static addScriptBinaryExtensionsToFilter(filter: DzFileFilter): void;

    /**
     * @param filter DzFileFilter - The filter to add the encrypted binary extension to.
     * @since 4.22.1.143
     */
    static addScriptEncryptedBinaryExtensionAsFilter(filter: DzFileFilter): void;

    /**
     * @param filter DzFileFilter - The filter to add the open extensions to.
     */
    static addScriptOpenExtensionsAsMultipleFilters(filter: DzFileFilter): void;

    /**
     * @param filter DzFileFilter - The filter to add the open extensions to.
     */
    static addScriptOpenExtensionsToFilter(filter: DzFileFilter): void;

    /**
     * @param filter DzFileFilter - The filter to add the save extensions to.
     */
    static addScriptSaveExtensionsAsMultipleFilters(filter: DzFileFilter): void;

    /**
     * @param filter DzFileFilter - The filter to add the save extensions to.
     */
    static addScriptSaveExtensionsToFilter(filter: DzFileFilter): void;

    /**
     * @param filter DzFileFilter - The filter to add the plain text extension to.
     * @since 4.22.1.143
     */
    static addScriptTextExtensionAsFilter(filter: DzFileFilter): void;

    /**
     * @param filter DzFileFilter - The filter to add the plain text extensions to.
     * @param includeDeprecated boolean - Whether or not to include the deprecated extension(s).
     */
    static addScriptTextExtensionsAsMultipleFilters(filter: DzFileFilter, includeDeprecated?: boolean): void;

    /**
     * @param filter DzFileFilter - The filter to add the plain text extensions to.
     * @param includeDeprecated boolean - Whether or not to include the deprecated extension(s).
     */
    static addScriptTextExtensionsToFilter(filter: DzFileFilter, includeDeprecated?: boolean): void;

    /**
     * This function is provided as a quick method of evaluating DAZ Script statements without needing to create a DAZ Script object.
     * @param code string - The text string to evaluate as a script.
     * @param context QObject - The QObject instance (if any) that will provide the script's context.
     * @returns Object The value returned from the script's execution.
     */
    static evaluate(code: string, context?: QObject): Object;

    /**
     * @returns any[] A list of the script file extensions supported by the application.
     */
    static getScriptExtensions(): any[]; // Array

    /**
     * @param filenameWithoutExtension string - The path to the file, minus the '.' and the extension.
     * @returns string The path of the file, with extension, of the script found. Otherwise, an empty String.
     */
    static getScriptFile(filenameWithoutExtension: string): string; // String

    /**
     * @param extension string - The file extension (minus the '.') to check.
     * @returns boolean true if extension is a supported binary script extension, otherwise false.
     */
    static isScriptBinaryExtension(extension: string): boolean; // Boolean

    /**
     * @param filename string - The name of the file to check.
     * @returns boolean true if filename ends with a supported binary script extension, otherwise false.
     */
    static isScriptBinaryFile(filename: string): boolean; // Boolean

    /**
     * @param extension string - The file extension (minus the '.') to check.
     * @returns boolean true if extension is a supported script extension, otherwise false.
     */
    static isScriptExtension(extension: string): boolean; // Boolean

    /**
     * @param filename string - The name of the file to check.
     * @returns boolean true if filename ends with a supported script extension, otherwise false.
     */
    static isScriptFile(filename: string): boolean; // Boolean

    /**
     * @param extension string - The file extension (minus the '.') to check.
     * @returns boolean true if extension is a supported [ascii] plain text script extension, otherwise false.
     */
    static isScriptTextExtension(extension: string): boolean; // Boolean

    /**
     * @param filename string - The name of the file to check.
     * @returns boolean true if filename ends with a supported [ascii] plain text script extension, otherwise false.
     */
    static isScriptTextFile(filename: string): boolean; // Boolean

    /**
     * @param str string
     * @returns string A converted version of a string (which may contain special characters) that would be legal as a variable name in script. If the string contains no special characters, the result will be identical to the input.
     */
    static legalizeName(str: string): string; // String

    /* Methods */

    /**
     * Appends the given code to the end of the current script.
     * @param code string - The text to append to the current script.
     */
    addCode(code: string): void;

    /**
     * Appends the given string and a newline character to the script.
     * @param line string - The text to add to the script.
     * @param indentLevel number - The number of tab characters to insert in front of the line.
     */
    addLine(line: string, indentLevel?: number): void;

    /**
     * Appends the given code to the end of the current script.
     * @param code string - The text to append to the current script.
     * @param indentLevel number - The number of tab characters to insert in front of each line.
     */
    addLines(code: string, indentLevel?: number): void;

    /**
     * Calls a function in the script.
     * @param func string - The name of the function to call.
     * @param args any[] - A list of arguments to pass to the function.
     * @returns boolean true if the function was called successfully, false if there was an error.
     */
    call(func: string, args: any[]): boolean; // Boolean

    /**
     * Checks the syntax of the script for errors using the current interpreter.
     * @returns boolean true if the syntax is valid, otherwise false.
     */
    checkSyntax(): boolean; // Boolean

    /**
     * Clears any code in the current script, and clears the encryption state if the script was read from an encrypted file.
     */
    clear(): void;

    /**
     * Converts the script to DAZ Script 2 syntax.
     * @returns boolean
     */
    convertToDAZScript2(): boolean; // Boolean

    /**
     * @returns number The line number that the last error occurred on.
     */
    errorLine(): number; // Number

    /**
     * @returns string The last error message gathered from a call to execute(). An empty string if no error has been encountered for this script.
     */
    errorMessage(): string; // String

    /**
     * Execute the script.
     * @returns boolean true if the script was executed successfully, false if there was an error.
     */
    execute(): boolean; // Boolean

    /**
     * Execute the script with an argument list.
     * @param args any[] - The list of arguments to pass to the script.
     * @returns boolean true if the script was executed successfully, false if there was an error.
     */
    execute(args: any[]): boolean; // Boolean

    /**
     * @returns DzAuthor The author of this script if it was loaded from a file that provides authorship information.
     */
    getAuthor(): DzAuthor;

    /**
     * @returns string The code of the current script.
     */
    getCode(): string; // String

    /**
     * @returns string The name and path of the file associated with this script. An empty string is returned if this script is not associated with a file.
     */
    getFilename(): string; // String

    /**
     * @returns boolean true if the last execution was successful, otherwise false.
     */
    getLastStatus(): boolean; // Boolean

    /**
     * @returns number An enumerated value indicating the scripting language of the script.
     */
    getScriptLanguage(): number; // ScriptLanguage

    /**
     * @returns string A string describing the kind of script that this script is
     */
    getScriptType(): string; // String

    /**
     * @returns DzVersion The version of DAZ Studio that this script was saved from. The current version if the script was not loaded from a file.
     */
    getScriptVersion(): DzVersion;

    /**
     * @returns boolean true if the same context is used between uses of call(); otherwise false (default).
     */
    getShouldReuseInterpreter(): boolean; // Boolean

    /**
     * @returns boolean true if the script is empty; otherwise false.
     */
    isEmpty(): boolean; // Boolean

    /**
     * @returns boolean true if the contents of the script are encrypted (i.e. read from an encrypted file); otherwise false.
     */
    isEncrypted(): boolean; // Boolean

    /**
     * Loads the script from a file.
     * @param filename string - The path of the script file to load.
     * @param convert boolean - If true (default), converts the file to DAZ Script 2.
     * @returns boolean true if the script was successfully loaded, otherwise false.
     */
    loadFromFile(filename: string, convert?: boolean): boolean; // Boolean

    /**
     * Sets the script to be encrypted.
     */
    makeEncrypted(): void;

    /**
     * @returns Object The result of the last script execution.
     */
    result(): Object;

    /**
     * Save the script to a file.
     * @param filename string - The filename of the file to save to.
     * @param mode number - The type of file to save.
     * @param filetype string - The filetype that is saved as part of the file information.
     * @param version DzVersion - The version of the file to be written.
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     * @since 4.11.0.129
     */
    saveFile(filename: string, mode: number, filetype?: string, version?: DzVersion): DzError;

    /**
     * Save the script to a file.
     * @param filename string - The filename of the file to save to.
     * @returns DzError
     * @since 4.11.0.129
     */
    saveFile(filename: string): DzError;

    /**
     * Replaces the existing code of the script with code.
     * @param code string - The new text for the script.
     */
    setCode(code: string): void;

    /**
     * Sets whether the same context is used between uses of call().
     * @param onoff boolean
     */
    setReuseInterpreter(onoff: boolean): void;

    /**
     * @returns any[] The stack trace for the last time an error was reported during a call to execute(). An empty list if no error has been encountered.
     */
    stackTrace(): any[]; // Array

    /**
     * Access to whether or not the script was converted from the enumerated value specified.
     * @param language number
     * @returns boolean true if the script was converted
     */
    wasConverted(language?: number): boolean; // Boolean

    /**
     * Deprecated
     * @param filename string
     * @param mode number
     * @param filetype string
     * @returns DzError
     */
    saveToFile(filename: string, mode?: number, filetype?: string): DzError;

    /* Undocumented Augment Members */

    /** @undocumented */
    iskindof(kind: String): any;

    /** @undocumented */
    getName(): any;

    /** @undocumented */
    executeScript(script: DzScript, ...list: string[]): any;

    /** @undocumented */
    setContext(scriptContext: DzScriptContext): any;
}
