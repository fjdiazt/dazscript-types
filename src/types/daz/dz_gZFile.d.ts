/**
 * DAZ Script *.gz (gzip) file I/O class.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/gzfile_dz
 */
declare class DzGZFile extends DzFileInfo {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of AccessMode.
     */
    static ReadOnly: number;

    /**
     * DAZ enum member of AccessMode.
     */
    static WriteOnly: number;

    /**
     * DAZ enum member of AccessMode.
     */
    static ReadWrite: number;

    /**
     * DAZ enum member of AccessMode.
     */
    static Append: number;

    /**
     * DAZ enum member of AccessMode.
     */
    static Truncate: number;

    /**
     * DAZ enum member of AccessMode.
     */
    static Text: number;

    /**
     * DAZ enum member of AccessMode.
     */
    static Translate: number;

    /* Constructors */

    /**
     * @param file string
     */
    constructor(file: string);

    /* Methods */

    /**
     * Closes the file.
     */
    close(): void;

    /**
     * @returns boolean true if the current file position is at the end of the file, otherwise false.
     */
    eof(): boolean; // Boolean

    /**
     * Open the file with the given mode.
     * @param accessMode number - The access mode to open with.
     * @returns boolean true if the file was opened successfully, otherwise false.
     */
    open(accessMode: number): boolean; // Boolean

    /**
     * Reads the entire file.
     * @returns string The uncompressed file contents as a string.
     */
    read(): string; // String

    /**
     * Read one uncompressed character from the file buffer.
     * @returns number The next uncompressed character read from the file.
     */
    readByte(): number; // Number

    /**
     * Read a line of text from the file.
     * @returns ByteArray The next file line as a byte array.
     * @since 4.16.1.25
     */
    readByteLine(): ByteArray;

    /**
     * Read an uncompressed line of text from the file.
     * @returns string The next uncompressed file line as a string.
     */
    readLine(): string; // String

    /**
     * Uncompresses the entire file and splits it into lines of text.
     * @returns any[] A list of uncompressed text lines from the file.
     */
    readLines(): any[]; // Array

    /**
     * Unzips this file into the given filename.
     * @param filename string - The name of the file to write to.
     * @returns boolean
     */
    unzip(filename: string): boolean; // Boolean

    /**
     * Write a string to the file compression buffer.
     * @param data string - The string to write to the file.
     * @param length number - The maximum number of characters to write to the file. If this is less than 1 (default), the whole string is written.
     */
    write(data: string, length?: number): void;

    /**
     * Write a single byte (character) to the file compression buffer.
     * @param byte number - The character to write to the file.
     */
    writeByte(byte: number): void;

    /**
     * Write a line of text to the file compression buffer.
     * @param data string - The string to write to the file - a new line character will be written immediately following the string contents.
     */
    writeLine(data: string): void;

    /**
     * Replaces this file's contents with the gzipped contents of the given file. If this file does not exist, it will be created.
     * @param filename string - The name of the file to replace this file's contents with.
     * @returns boolean true if the file was successfully zipped, otherwise false.
     */
    zip(filename: string): boolean; // Boolean
}
