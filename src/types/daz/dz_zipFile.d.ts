/**
 * DAZ Script *.zip (zlib) file I/O class.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/zipfile_dz
 */
declare class DzZipFile extends DzFileInfo {

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
    static Append: number;

    /* Constructors */

    /**
     * @param file string
     */
    constructor(file: string);

    /* Methods */

    /**
     * Creates a directory entry within this zip.
     * @param pathOnDisk string - The absolute path of the source directory.
     * @param pathInZip string - The relative path for the directory within this zip - this value should not start with a slash, but should end with one.
     * @returns boolean true if this zip file is open for writing and the operation was successful, otherwise false.
     * @since 4.9.3.149
     */
    addDirToZip(pathOnDisk: string, pathInZip: string): boolean; // Boolean

    /**
     * Compresses the specified file into this zip.
     * @param pathOnDisk string - The absolute path of the file to compress.
     * @param pathInZip string - The relative path for the file within this zip - this value should not start with a slash.
     * @returns boolean true if this zip file is open for writing and the operation was successful, otherwise false.
     * @since 4.9.3.149
     */
    addFileToZip(pathOnDisk: string, pathInZip: string): boolean; // Boolean

    /**
     * Closes this zip file.
     */
    close(): void;

    /**
     * Compresses all of the files in the specified directory into this zip.
     * @param path string - The absolute base path of the directory to compress.
     * @param recursive boolean - If true (default), the entire hierarchy of folders and files within path are compressed. If false, only the files in the specified path are compressed.
     * @returns boolean true if this zip file is open for writing and the operation was successful, otherwise false.
     */
    compressAll(path: string, recursive?: boolean): boolean; // Boolean

    /**
     * Extracts all of the files from this zip file. The relative path of the files are appended to the specified base path.
     * @param basePath string - The base path to extract the files to.
     * @returns boolean true if this zip file is open for reading and the operation was successful, otherwise false.
     */
    extractAll(basePath: string): boolean; // Boolean

    /**
     * Extracts the current file from this zip file. The relative path of the current file is appended to the specified base path.
     * @param basePath string - The base path to extract to.
     * @returns boolean true if this zip file is open for reading and the operation was successful, otherwise false.
     * @since 4.9.3.149
     */
    extractCurrentFile(basePath: string): boolean; // Boolean

    /**
     * @returns number The external file attributes of the current file if this zip file is open for reading, otherwise 0.
     * @since 4.16.1.25
     */
    getCurrentFileAttributes(): number; // Number

    /**
     * @returns string The comment for the current file if this zip file is open for reading, otherwise an empty string.
     */
    getCurrentFileComment(): string; // String

    /**
     * @returns number The compressed size of the current file if this zip file is open for reading, otherwise 0.
     * @since 4.9.3.149
     */
    getCurrentFileCompressedSize(): number; // Number

    /**
     * @returns string The compression method of the current file if this zip file is open for reading, otherwise an empty string.
     * @since 4.9.3.149
     */
    getCurrentFileCompressionMethod(): string; // String

    /**
     * @returns number The ratio of compression on the current file if this zip file is open for reading, otherwise -1.
     * @since 4.9.3.149
     */
    getCurrentFileCompressionRatio(): number; // Number

    /**
     * @returns string The CRC value of the current file if this zip file is open for reading otherwise an empty string.
     * @since 4.9.3.149
     */
    getCurrentFileCRC(): string; // String

    /**
     * @returns Date The timestamp of the current file if this zip file is open for reading otherwise an invalid Date.
     * @since 4.16.1.25
     */
    getCurrentFileDateTime(): Date;

    /**
     * @returns boolean true if this zip file is open for reading and the current entry is a folder, otherwise false.
     * @since 4.9.3.149
     */
    getCurrentFileIsFolder(): boolean; // Boolean

    /**
     * @returns string The name of the current file if this zip file is open for reading, otherwise an empty string.
     */
    getCurrentFileName(): string; // String

    /**
     * @returns number The compressed size of the current file if this zip file is open for reading, otherwise 0.
     * @since 4.9.3.149
     */
    getCurrentFileUncompressedSize(): number; // Number

    /**
     * @returns any[] A list of the file names in this zip file if this zip file is open for reading, otherwise an empty list.
     */
    getFileNames(): any[]; // Array

    /**
     * @returns string The global comment for this zip file (if any), otherwise an empty string.
     */
    getGlobalComment(): string; // String

    /**
     * @returns number The number of entries in this zip file if this zip file is open, otherwise 0.
     */
    getNumEntries(): number; // Number

    /**
     * Sets the current file of this zip file to the first file.
     * @returns boolean true if this zip file is open for reading and the operation was successful, otherwise false.
     */
    goToFirstFile(): boolean; // Boolean

    /**
     * Sets the current file of this zip file to the next file.
     * @returns boolean true if this zip file is open for reading and the operation was successful, otherwise false.
     */
    goToNextFile(): boolean; // Boolean

    /**
     * Attempts to locate an entry within this zip file.
     * @param pathInZip string - The relative path of the entry to locate - this value should not start with a slash.
     * @returns boolean true if this zip file is open for reading and the file was found, otherwise false.
     */
    locateFile(pathInZip: string): boolean; // Boolean

    /**
     * Opens this zip file in the specified mode.
     * @param mode number - The access mode to open with.
     * @returns boolean true if the file was opened successfully, otherwise false.
     */
    open(mode: number): boolean; // Boolean

    /**
     * Sets the global comment for this zip file.
     * @param comment string - The comment to set.
     * @returns boolean true if this zip file is open for writing and the comment was set, otherwise false.
     * @since 4.9.3.149
     */
    setGlobalComment(comment: string): boolean; // Boolean

    /**
     * Deprecated
     * @returns number
     * @since 4.9.3.149
     */
    getCurrentFileAtributes(): number; // Number
}
