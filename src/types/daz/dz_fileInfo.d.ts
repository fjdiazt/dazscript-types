/**
 * DAZ Script file information class.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/fileinfo_dz
 */
declare class DzFileInfo extends QObject {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of Permissions.
     */
    static ReadOwner: number;

    /**
     * DAZ enum member of Permissions.
     */
    static WriteOwner: number;

    /**
     * DAZ enum member of Permissions.
     */
    static ExeOwner: number;

    /**
     * DAZ enum member of Permissions.
     */
    static ReadUser: number;

    /**
     * DAZ enum member of Permissions.
     */
    static WriteUser: number;

    /**
     * DAZ enum member of Permissions.
     */
    static ExeUser: number;

    /**
     * DAZ enum member of Permissions.
     */
    static ReadGroup: number;

    /**
     * DAZ enum member of Permissions.
     */
    static WriteGroup: number;

    /**
     * DAZ enum member of Permissions.
     */
    static ExeGroup: number;

    /**
     * DAZ enum member of Permissions.
     */
    static ReadOther: number;

    /**
     * DAZ enum member of Permissions.
     */
    static WriteOther: number;

    /**
     * DAZ enum member of Permissions.
     */
    static ExeOther: number;

    /* Constructors */

    /**
     * @param file string
     */
    constructor(file: string);

    /* Methods */

    /**
     * @returns DzDir The file's absolute path as a DzDir object.
     * @since 4.9.3.35
     */
    absoluteDir(): DzDir;

    /**
     * @returns string The absolute path of the file, including the file name.
     * @since 4.9.3.29
     */
    absoluteFilePath(): string; // String

    /**
     * @returns string The absolute path of the file, excluding the file name.
     * @since 4.9.3.29
     */
    absolutePath(): string; // String

    /**
     * @returns string On Mac OS X, the proper localized name for a bundle if the path isBundle(). On all other platforms an empty string.
     * @since 4.9.3.29
     */
    bundleName(): string; // String

    /**
     * @returns boolean true if caching is enabled, otherwise false.
     * @since 4.9.3.29
     */
    caching(): boolean; // Boolean

    /**
     * @returns string The canonical path including the file name, i.e. an absolute path without symbolic links or redundant “.” or “..” elements. If the file does not exist, returns an empty string.
     * @since 4.9.3.29
     */
    canonicalFilePath(): string; // String

    /**
     * @returns string The canonical path excluding the file name, i.e. an absolute path without symbolic links or redundant “.” or “..” elements. If the file does not exist, returns an empty string.
     * @since 4.9.3.29
     */
    canonicalPath(): string; // String

    /**
     * @returns string The file name excluding the last '.' and extension.
     * @since 4.9.3.29
     */
    completeBaseName(): string; // String

    /**
     * @returns string All characters in the file name after (but not including) the first “.”.
     * @since 4.9.3.29
     */
    completeSuffix(): string; // String

    /**
     * @returns Date The date and time the file was created.
     */
    created(): Date;

    /**
     * @returns DzDir The path of the object's parent directory as a DzDir object.
     * @since 4.9.3.35
     */
    dir(): DzDir;

    /**
     * @returns boolean true if the file exists on the disk.
     */
    exists(): boolean; // Boolean

    /**
     * @returns string The name of the file, excluding the path.
     */
    fileName(): string; // String

    /**
     * @returns string The file name, including the path (which may be absolute or relative).
     * @since 4.9.3.29
     */
    filePath(): string; // String

    /**
     * @returns boolean true if the file path is absolute, otherwise false.
     * @since 4.9.3.29
     */
    isAbsolute(): boolean; // Boolean

    /**
     * @returns boolean true if this object points to a bundle or to a symbolic link to a bundle on Mac OS X, otherwise false.
     * @since 4.9.3.29
     */
    isBundle(): boolean; // Boolean

    /**
     * @returns boolean true if this object points to a directory or to a symbolic link to a directory, otherwise false.
     * @since 4.9.3.29
     */
    isDir(): boolean; // Boolean

    /**
     * @returns boolean true if this object points to file that is executable, otherwise false.
     * @since 4.9.3.29
     */
    isExecutable(): boolean; // Boolean

    /**
     * @returns boolean true if this object points to a file or to a symbolic link to a file, otherwise false (e.g., a directory).
     * @since 4.9.3.29
     */
    isFile(): boolean; // Boolean

    /**
     * @returns boolean true if the file is 'hidden', otherwise false.
     */
    isHidden(): boolean; // Boolean

    /**
     * @returns boolean true if the file is readable by the user, otherwise false.
     */
    isReadable(): boolean; // Boolean

    /**
     * @returns boolean true if the file path is relative, otherwise false.
     * @since 4.9.3.29
     */
    isRelative(): boolean; // Boolean

    /**
     * @returns boolean true if the object points to a directory or to a symbolic link to a directory, and that directory is the root directory, otherwise false.
     * @since 4.9.3.29
     */
    isRoot(): boolean; // Boolean

    /**
     * @returns boolean true if this object points to a symbolic link (shortcut on Windows), otherwise false.
     * @since 4.9.3.29
     */
    isSymLink(): boolean; // Boolean

    /**
     * @returns boolean true if the file is writable by the user, otherwise false.
     */
    isWritable(): boolean; // Boolean

    /**
     * @returns Date The date and time the file was last modified.
     */
    lastModified(): Date;

    /**
     * @returns Date The date and time the file was last accessed.
     */
    lastRead(): Date;

    /**
     * Converts the file's path to an absolute path if it is not already in that form.
     * @returns boolean true if the path was converted, otherwise false.
     * @since 4.9.3.29
     */
    makeAbsolute(): boolean; // Boolean

    /**
     * @returns string The absolute path of the file.
     */
    path(): string; // String

    /**
     * Tests for file permissions. The permissions argument can be several Permissions OR-ed together to check for permission combinations.
     * @param permissions number
     * @returns boolean true if the file has the permissions specified, otherwise false.
     * @since 4.9.3.35
     */
    permission(permissions: number): boolean; // Boolean

    /**
     * @returns number The complete OR-ed together combination of Permissions for the file.
     * @since 4.9.3.29
     */
    permissions(): number; // Permissions

    /**
     * Refreshes information about the file, i.e. reads in information from the file system the next time a cached property is fetched.
     * @since 4.9.3.29
     */
    refresh(): void;

    /**
     * Delete the file from the disk.
     * @returns boolean true if successful, otherwise false.
     */
    remove(): boolean; // Boolean

    /**
     * Sets whether or not caching of file information caching is enabled. When caching is enabled, file information is read from the file system the first time it's needed, but generally not later.
     * @param enable boolean
     * @since 4.9.3.29
     */
    setCaching(enable: boolean): void;

    /**
     * Sets the file to provide information about to file.
     * @param file string
     * @since 4.9.3.29
     */
    setFile(file: string): void;

    /**
     * Sets the file to provide information about to file in dir.
     * @param dir DzDir
     * @param file string
     * @since 4.9.3.29
     */
    setFile(dir: DzDir, file: string): void;

    /**
     * Sets the file to provide information about to file.
     * @param file DzFile
     * @since 4.9.3.29
     */
    setFile(file: DzFile): void;

    /**
     * @returns number The file size in bytes. If the file does not exist or cannot be fetched, 0 is returned.
     */
    size(): number; // Number

    /**
     * @returns string The file size in bytes, formatted in an easy-to-read manner.
     */
    sizeStr(): string; // String

    /**
     * @returns string All characters in the file after, but not including, the last '.'.
     * @since 4.9.3.29
     */
    suffix(): string; // String

    /**
     * @returns string The absolute path that the file or directory a symbolic link (shortcut on Windows) points to, or a an empty string if the object is not a symbolic link.
     * @since 4.9.3.29
     */
    symLinkTarget(): string; // String

    /**
     * Deprecated
     * @returns string
     */
    absFileName(): string; // String

    /**
     * Deprecated
     * @returns string
     */
    extension(): string; // String

    /**
     * Deprecated
     * @returns string
     */
    baseName(): string; // String
}
