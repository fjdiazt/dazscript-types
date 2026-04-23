/**
 * Convenience object to make working with a String object easier.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/stringhelper_dz
 */
declare class DzStringHelper extends QObject {

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * @param text string - The string to inspect for special characters; using the regular expression "[/\\\\:*?\"<>|!. ]"
     * @param chars string - The character(s) to replace each occurence of a special character with
     * @returns string A copy of the input string, with each occurence of a special character replaced by chars
     */
    changeSpecialChars(text: string, chars: string): string; // String

    /**
     * @param text string - The string to check for matches
     * @param expression string - The regular expression to use
     * @returns any[] An array of strings, where each element is a match
     */
    getMatches(text: string, expression: string): any[]; // Array

    /**
     * @param text string - The string to split at each space
     * @param removeEmpties boolean - Whether or not to remove empty entries that result from multiple adjacent spaces
     * @returns any[] An array of strings, where each element is a word from the input string
     */
    getWords(text: string, removeEmpties: boolean): any[]; // Array

    /**
     * @param text string - The string to indent
     * @param level number - The number of tabs (\t) to prepend to the input string
     * @returns string A copy of the input string indented the specified number of times
     */
    indentString(text: string, level: number): string; // String

    /**
     * @param text string - The string to inspect for numeric characters; using the regular expression “^[0-9]”
     * @param chars string - The character(s) to prepend to the input string if it begines with a numeric character
     * @returns string A copy of the input string, with chars prepended if it began with a numeric character
     */
    prependCharsIfNumeric(text: string, chars: string): string; // String

    /**
     * @param source string - The string to replace the specified character(s) in
     * @param findText string - The character(s) to replace
     * @param replaceText string - The character(s) to replace with
     * @returns string A copy of the input string with all occurrences of findText replaced by replaceText
     */
    replaceAll(source: string, findText: string, replaceText: string): string; // String

    /**
     * @param text string - The string to strip all carriage return (\r) and linefeed (\n) characters from
     * @returns string A copy of the input string with all carriage return and linefeed characters removed
     */
    stripCRLF(text: string): string; // String

    /**
     * @param text string - The string to strip spaces from
     * @returns string A copy of the input string with all spaces removed
     */
    stripSpaces(text: string): string; // String
}
