/**
 * DAZ Script file I/O class.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/file_dz
 */
declare class DzFile extends DzFileInfo {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of FileError.
     */
    static NoError: number;

    /**
     * DAZ enum member of FileError.
     */
    static ReadError: number;

    /**
     * DAZ enum member of FileError.
     */
    static WriteError: number;

    /**
     * DAZ enum member of FileError.
     */
    static FatalError: number;

    /**
     * DAZ enum member of FileError.
     */
    static ResourceError: number;

    /**
     * DAZ enum member of FileError.
     */
    static OpenError: number;

    /**
     * DAZ enum member of FileError.
     */
    static AbortError: number;

    /**
     * DAZ enum member of FileError.
     */
    static TimeOutError: number;

    /**
     * DAZ enum member of FileError.
     */
    static UnspecifiedError: number;

    /**
     * DAZ enum member of FileError.
     */
    static RemoveError: number;

    /**
     * DAZ enum member of FileError.
     */
    static RenameError: number;

    /**
     * DAZ enum member of FileError.
     */
    static PositionError: number;

    /**
     * DAZ enum member of FileError.
     */
    static ResizeError: number;

    /**
     * DAZ enum member of FileError.
     */
    static PermissionsError: number;

    /**
     * DAZ enum member of FileError.
     */
    static CopyError: number;

    /**
     * DAZ enum member of OpenModeFlag.
     */
    static NotOpen: number;

    /**
     * DAZ enum member of OpenModeFlag.
     */
    static ReadOnly: number;

    /**
     * DAZ enum member of OpenModeFlag.
     */
    static WriteOnly: number;

    /**
     * DAZ enum member of OpenModeFlag.
     */
    static ReadWrite: number;

    /**
     * DAZ enum member of OpenModeFlag.
     */
    static Append: number;

    /**
     * DAZ enum member of OpenModeFlag.
     */
    static Truncate: number;

    /**
     * DAZ enum member of OpenModeFlag.
     */
    static Text: number;

    /**
     * DAZ enum member of OpenModeFlag.
     */
    static Translate: number;

    /* Constructors */

    /**
     * @param file string
     */
    constructor(file: string);

    /* Methods */

    /**
     * Closes the file, sets its openMode() to NotOpen, and resets the error string.
     */
    close(): void;

    /**
     * @param newName string - The path to copy this file to.
     * @returns boolean true if copying the file is successful, otherwise false.
     */
    copy(newName: string): boolean; // Boolean

    /**
     * @returns boolean true if the current position is at the end of the file, otherwise false.
     */
    eof(): boolean; // Boolean

    /**
     * @returns number The file error status.
     * @since 4.9.3.35
     */
    error(): number; // FileError

    /**
     * @returns string A human-readable description of the last error that occurred.
     * @since 4.9.3.35
     */
    errorString(): string; // String

    /**
     * @returns boolean true if the file is open, otherwise false.
     * @since 4.9.3.35
     */
    isOpen(): boolean; // Boolean

    /**
     * @returns boolean true if the Text OpenModeFlag is enabled, otherwise false.
     * @since 4.9.3.35
     */
    isTextModeEnabled(): boolean; // Boolean

    /**
     * Creates a link named linkName that points to the file currently specified by fileName(). What a link is depends on the underlying filesystem (be it a shortcut on Windows or a symbolic link on Mac OS X).
     * @param linkName string
     * @returns boolean true if successful, otherwise false (for example, if a file with the name newName already exists).
     * @since 4.9.3.35
     */
    link(linkName: string): boolean; // Boolean

    /**
     * Opens the file and sets its openMode() to mode.
     * @param mode OpenMode - The access mode to open with.
     * @returns boolean true if the file was opened successfully, otherwise false.
     */
    open(mode: OpenMode): boolean; // Boolean

    /**
     * @returns OpenMode The mode in which the device has been opened.
     * @since 4.9.3.35
     */
    openMode(): OpenMode;

    /**
     * Peeks at most maxSize bytes from the file, without side effects (i.e., if you read after you peek, you will get the same data).
     * @param maxSize number
     * @returns ByteArray The data peeked.
     * @since 4.9.3.35
     */
    peek(maxSize: number): ByteArray;

    /**
     * @returns number The position that data is written to or read from.
     * @since 4.9.3.35
     */
    pos(): number; // Number

    /**
     * Reads at most maxSize bytes from the file.
     * @param maxSize number
     * @returns ByteArray The data read.
     * @since 4.9.3.35
     */
    read(maxSize: number): ByteArray;

    /**
     * Read the entire file.
     * @returns string The file contents as a string.
     */
    read(): string; // String

    /**
     * Read the entire file.
     * @returns ByteArray All bytes of the file.
     */
    readAll(): ByteArray;

    /**
     * Read one character from the file.
     * @returns number The character read from the file.
     */
    readByte(): number; // Number

    /**
     * Reads a line from the file, but no more than maxSize characters.
     * @param maxSize number - The maximum number of characters to read. Since 4.9.3.35.
     * @returns ByteArray The bytes read.
     */
    readByteLine(maxSize?: number): ByteArray;

    /**
     * Read a line of text from the file.
     * @returns string The file line as a string.
     */
    readLine(): string; // String

    /**
     * Read the entire file and split it into lines of text.
     * @returns any[] All lines from the file.
     */
    readLines(): any[]; // Array

    /**
     * @param newName string
     * @returns boolean
     */
    rename(newName: string): boolean; // Boolean

    /**
     * Seeks to the start of input.
     * @returns boolean true on success, otherwise false (for example, if the file is not open).
     * @since 4.9.3.35
     */
    reset(): boolean; // Boolean

    /**
     * Sets the current position to pos.
     * @param pos number
     * @returns boolean true on success, otherwise false.
     * @since 4.9.3.35
     */
    seek(pos: number): boolean; // Boolean

    /**
     * Sets the name of the file to name. The name can have no path, a relative path, or an absolute path.
     * @param name string
     * @since 4.9.3.35
     */
    setFileName(name: string): void;

    /**
     * Sets the permissions for the file to permissions.
     * @param permissions Permissions
     * @returns boolean true if successful, otherwise false (for example, if the permissions cannot be modified).
     * @since 4.9.3.35
     */
    setPermissions(permissions: Permissions): boolean; // Boolean

    /**
     * If enabled is true, sets the Text flag on the file, otherwise the Text flag is removed.
     * @param enabled boolean
     * @since 4.9.3.35
     */
    setTextModeEnabled(enabled: boolean): void;

    /**
     * Write a string to the file.
     * @param data string - The string to write to the file.
     * @param maxSize number - The maximum number of characters to write to the file. If this is less than 1 (default), the whole string is written.
     * @returns number The number of bytes that were actually written, or -1 if an error occurred. (since 4.9.3.35)
     */
    write(data: string, maxSize?: number): number; // Number

    /**
     * Write a single byte (character) to the file.
     * @param byte number - The character to write to the file.
     */
    writeByte(byte: number): void;

    /**
     * Writes the content of byteArray to the file.
     * @param byteArray ByteArray
     * @returns number The number of bytes that were actually written, or -1 if an error occurred.
     * @since 4.14.0.7
     */
    writeBytes(byteArray: ByteArray): number; // Number

    /**
     * Write a line to the file.
     * @param data string - The string to write to the file - a new line character will be written immediately following the string contents.
     */
    writeLine(data: string): void;

    /**
     * Write a UTF-8 line to file.
     * @param data string - The string to write to the file - a new line character will be written immediately following the string contents.
     * @since 4.16.1.25
     */
    writeLineUtf8(data: string): void;

    /**
     * Write a UTF-8 string to file.
     * @param data string - The string to write to the file.
     * @param length number - The number of characters to write to the file. If this is less than 1 (default), the whole string is written.
     * @returns number The number of bytes that were actually written, or -1 if an error occurred.
     * @since 4.16.1.25
     */
    writeUtf8(data: string, length?: number): number; // Number
}
