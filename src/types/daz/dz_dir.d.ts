/**
 * DAZ Script directory access class.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/dir_dz
 */
declare class DzDir extends QObject {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of Filters.
     */
    static Dirs: number;

    /**
     * DAZ enum member of Filters.
     */
    static Files: number;

    /**
     * DAZ enum member of Filters.
     */
    static Drives: number;

    /**
     * DAZ enum member of Filters.
     */
    static NoSymLinks: number;

    /**
     * DAZ enum member of Filters.
     */
    static AllEntries: number;

    /**
     * DAZ enum member of Filters.
     */
    static All: number;

    /**
     * DAZ enum member of Filters.
     */
    static TypeMask: number;

    /**
     * DAZ enum member of Filters.
     */
    static Readable: number;

    /**
     * DAZ enum member of Filters.
     */
    static Writable: number;

    /**
     * DAZ enum member of Filters.
     */
    static Executable: number;

    /**
     * DAZ enum member of Filters.
     */
    static PermissionMask: number;

    /**
     * DAZ enum member of Filters.
     */
    static RWEMask: number;

    /**
     * DAZ enum member of Filters.
     */
    static Modified: number;

    /**
     * DAZ enum member of Filters.
     */
    static Hidden: number;

    /**
     * DAZ enum member of Filters.
     */
    static System: number;

    /**
     * DAZ enum member of Filters.
     */
    static AccessMask: number;

    /**
     * DAZ enum member of Filters.
     */
    static AllDirs: number;

    /**
     * DAZ enum member of Filters.
     */
    static CaseSensitive: number;

    /**
     * DAZ enum member of Filters.
     */
    static NoDotAndDotDot: number;

    /**
     * DAZ enum member of Filters.
     */
    static NoDot: number;

    /**
     * DAZ enum member of Filters.
     */
    static NoDotDot: number;

    /**
     * DAZ enum member of Filters.
     */
    static NoFilter: number;

    /**
     * DAZ enum member of SortFlags.
     */
    static Name: number;

    /**
     * DAZ enum member of SortFlags.
     */
    static Time: number;

    /**
     * DAZ enum member of SortFlags.
     */
    static Size: number;

    /**
     * DAZ enum member of SortFlags.
     */
    static Unsorted: number;

    /**
     * DAZ enum member of SortFlags.
     */
    static SortByMask: number;

    /**
     * DAZ enum member of SortFlags.
     */
    static DirsFirst: number;

    /**
     * DAZ enum member of SortFlags.
     */
    static Reversed: number;

    /**
     * DAZ enum member of SortFlags.
     */
    static IgnoreCase: number;

    /**
     * DAZ enum member of SortFlags.
     */
    static DirsLast: number;

    /**
     * DAZ enum member of SortFlags.
     */
    static LocaleAware: number;

    /**
     * DAZ enum member of SortFlags.
     */
    static Type: number;

    /**
     * DAZ enum member of SortFlags.
     */
    static NoSort: number;

    /* Constructors */

    /**
     * @param path string
     */
    constructor(path: string);

    /* Static Methods */

    /**
     * @param path string
     * @returns string The simplest version of the input, but not the canonical path; removes multiple adjacent directory separators (e.g. “//”) and resolves any dot and/or dotdot (e.g. “.” or “..”) found in the path. Symbolic links are kept.
     * @since 4.9.3.35
     */
    static cleanPath(path: string): string; // String

    /**
     * @returns DzDir The application's current directory. The directory is constructed using the absolute path of the current directory, ensuring that its path() will be the same as its absolutePath().
     * @since 4.9.3.35
     */
    static current(): DzDir;

    /**
     * @returns string The absolute path of the application's current directory.
     * @since 4.9.3.35
     */
    static currentPath(): string; // String

    /**
     * @param pathName string
     * @returns string pathName using '/' as the path separator instead of the native path separator.
     * @since 4.9.3.35
     */
    static fromNativeSeparators(pathName: string): string; // String

    /**
     * @returns DzDir The user's home directory. The directory is constructed using the absolute path of the home directory, ensuring that its path() will be the same as its absolutePath().
     * @since 4.9.3.35
     */
    static home(): DzDir;

    /**
     * @returns string The absolute path of the user's home directory. Under Windows this function will return the directory of the current user's profile. Under non-Windows operating systems the HOME environment variable is used if it exists, otherwise the path returned by the rootPath().
     * @since 4.9.3.35
     */
    static homePath(): string; // String

    /**
     * @param path string
     * @returns boolean true if path is absolute, otherwise false.
     * @since 4.9.3.35
     */
    static isAbsolutePath(path: string): boolean; // Boolean

    /**
     * @param path string
     * @returns boolean true if path is relative, otherwise false.
     * @since 4.9.3.35
     */
    static isRelativePath(path: string): boolean; // Boolean

    /**
     * @param filter string
     * @param fileName string
     * @returns boolean true if fileName matches the wildcard (glob) pattern filter, otherwise false. The filter may contain multiple patterns separated by spaces or semicolons. The matching is case insensitive.
     * @since 4.9.3.35
     */
    static match(filter: string, fileName: string): boolean; // Boolean

    /**
     * @param filters any[]
     * @param fileName string
     * @returns boolean true if fileName matches any of the wildcard (glob) patterns in the list of filters, otherwise false. The matching is case insensitive.
     * @since 4.9.3.35
     */
    static match(filters: any[], fileName: string): boolean; // Boolean

    /**
     * @returns DzDir The root directory. The directory is constructed using the absolute path of the root directory, ensuring that its path() will be the same as its absolutePath().
     * @since 4.9.3.35
     */
    static root(): DzDir;

    /**
     * @returns string The absolute path of the root directory. For Windows this normally returns “c:/”; i.e. the root of the system drive. For Mac OS X this returns “/”.
     * @since 4.9.3.35
     */
    static rootPath(): string; // String

    /**
     * @returns string The native directory separator; “\” under Windows, “/” under Mac OS X.
     * @since 4.9.3.35
     */
    static separator(): string; // String

    /**
     * Sets the application's current working directory to path.
     * @param path string
     * @returns boolean true if the directory was successfully changed, otherwise false.
     * @since 4.9.3.35
     */
    static setCurrent(path: string): boolean; // Boolean

    /**
     * @returns DzDir The system's temporary directory. The directory is constructed using the absolute path of the temp directory, ensuring that its path() will be the same as its absolutePath().
     * @since 4.9.3.35
     */
    static temp(): DzDir;

    /**
     * @returns string The absolute path of the system's temporary directory. On Windows this is usually the path in the TEMP or TMP environment variable. On Mac OS X this is the path in the TMPDIR environment variable or /tmp if TMPDIR is not defined. Whether a directory separator is added to the end or not, depends on the operating system.
     * @since 4.9.3.35
     */
    static tempPath(): string; // String

    /**
     * @param pathName string
     * @returns string pathName with the '/' separators converted to separators that are appropriate for the underlying operating system. On Windows, '/' will be converted to '\'. On Mac OS X the returned string may be the same as pathName.
     * @since 4.9.3.35
     */
    static toNativeSeparators(pathName: string): string; // String

    /* Methods */

    /**
     * @param fileName string - The name of the file get the absolute path for.
     * @returns string The absolute path (a path that starts with “/” or with a drive specification) to file, which may contain symbolic links, but never contains redundant “.”, “..” or multiple separators. Does not check if the file actually exists in the directory.
     * @since 4.9.3.35
     */
    absoluteFilePath(fileName: string): string; // String

    /**
     * @returns string The absolute path (a path that starts with “/” or with a drive specification), which may contain symbolic links, but never contains redundant “.”, “..” or multiple separators.
     * @since 4.9.3.35
     */
    absolutePath(): string; // String

    /**
     * @returns string The canonical path, i.e. a path without symbolic links or redundant “.” or “..” elements.
     */
    canonicalPath(): string; // String

    /**
     * Changes the current directory to dirName.
     * @param dirName string - The path to change to; can be relative or absolute.
     * @returns boolean true if dirName exists and is readable, otherwise false.
     */
    cd(dirName: string): boolean; // Boolean

    /**
     * Changes the directory by moving one directory up from the current directory.
     * @returns boolean true if the new directory exists and is readable, otherwise false.
     */
    cdUp(): boolean; // Boolean

    /**
     * Makes a copy of a file.
     * @param srcFile string - The path of the source file to copy.
     * @param destFile string - The path of the file that source will be copied to.
     * @returns boolean true if srcFile and destFile are the same or if the operation is successful, otherwise false.
     */
    copy(srcFile: string, destFile: string): boolean; // Boolean

    /**
     * @returns number The total number of directories and files in the directory.
     * @since 4.9.3.35
     */
    count(): number; // Number

    /**
     * @returns string The the name of the directory (not the whole path, just the folder name). If the directory has no name (e.g. it is the root directory) an empty string is returned.
     */
    dirName(): string; // String

    /**
     * @param nameFilter string - The wildcard (globbing) name filter (that understands * and ? wildcards) to use; overrides any value set with setNameFilters().
     * @param filters number - A bitwise OR of the filtering options to use.
     * @param sort number - A bitwise OR of the sorting options to use.
     * @returns any[] A list of the names of all the files/directories in the directory, ordered according to the name and attribute filters previously set with setNameFilters() and setFilter(), and sorted according to the flags set with setSorting(), if the directory is exists, is readable, and contains matches.
     */
    entryList(nameFilter: string, filters?: number, sort?: number): any[]; // Array

    /**
     * @param nameFilters any[] - The list of wildcard (globbing) name filters (that understands * and ? wildcards) to use; overrides any value set with setNameFilters().
     * @param filters number - A bitwise OR of the filtering options to use.
     * @param sort number - A bitwise OR of the sorting options to use.
     * @returns any[] A list of the names of all the files/directories in the directory, ordered according to the name and attribute filters previously set with setNameFilters() and setFilter(), and sorted according to the flags set with setSorting(), if the directory is exists, is readable, and contains matches.
     */
    entryList(nameFilters: any[], filters?: number, sort?: number): any[]; // Array

    /**
     * @param filters number - A bitwise OR of the filtering options to use.
     * @param sort number - A bitwise OR of the sorting options to use.
     * @returns any[] A list of the names of all the files/directories in the directory, ordered according to the name and attribute filters previously set with setNameFilters() and setFilter(), and sorted according to the flags set with setSorting(), if the directory is exists, is readable, and contains matches.
     * @since 4.9.3.35
     */
    entryList(filters?: number, sort?: number): any[]; // Array

    /**
     * @returns boolean true if the directory exists, otherwise false.
     */
    exists(): boolean; // Boolean

    /**
     * @param name string - The name of the file to check for.
     * @returns boolean true if the file exists, otherwise false.
     * @since 4.9.3.35
     */
    exists(name: string): boolean; // Boolean

    /**
     * @param fileName string
     * @returns string The path of a file named file in the directory; does not check if the file actually exists.
     */
    filePath(fileName: string): string; // String

    /**
     * @returns number The value set by setFilter().
     * @since 4.9.3.35
     */
    filter(): number; // Filters

    /**
     * @param extentions any[]
     * @param recursive boolean - If true, the retrieval of file paths should recurse sub-directories.
     * @returns any[] An array containing the absolute paths of files under the directory.
     */
    getFilesFromDir(extentions: any[], recursive?: boolean): any[]; // Array

    /**
     * @returns boolean true if the directory's path is absolute, otherwise false.
     */
    isAbsolute(): boolean; // Boolean

    /**
     * @returns boolean true if the directory is readable and we can open files by name, otherwise false.
     */
    isReadable(): boolean; // Boolean

    /**
     * @returns boolean true if the directory path is relative, otherwise false.
     */
    isRelative(): boolean; // Boolean

    /**
     * @returns boolean true if the directory is the root directory, otherwise false.
     */
    isRoot(): boolean; // Boolean

    /**
     * Converts the directory path to an absolute path. If it is already absolute nothing happens.
     * @returns boolean true if the conversion succeeded, otherwise false.
     * @since 4.9.3.35
     */
    makeAbsolute(): boolean; // Boolean

    /**
     * Creates a new directory.
     * @param dirName string - The relative path of a sub-directory to create. If empty (default), this directory's absolute path will be used.
     * @returns boolean true if dirName does not already exist when this function is called and the sub-directory is successfully created, otherwise false.
     */
    mkdir(dirName?: string): boolean; // Boolean

    /**
     * Creates all directories that do not already exist in dirpath.
     * @param dirpath string - The path of the directories to create.
     * @returns boolean true if successful (the path already exists when this function is called), otherwise false.
     */
    mkpath(dirpath?: string): boolean; // Boolean

    /**
     * Moves a file to a new location.
     * @param srcFile string - The path of the source file to move.
     * @param destFile string - The path that the file will be moved to.
     * @returns boolean true if srcFile and destFile are the same or if the operation is successful, otherwise false.
     */
    move(srcFile: string, destFile: string): boolean; // Boolean

    /**
     * @returns any[] The string list set by setNameFilters().
     * @since 4.9.3.35
     */
    nameFilters(): any[]; // Array

    /**
     * @returns string The path of this directory. This may contain symbolic links, but never contains redundant “.”, “..” or multiple separators.
     */
    path(): string; // String

    /**
     * Refreshes the directory information.
     */
    refresh(): void;

    /**
     * @param fileName string
     * @returns string The path to file, relative to the current directory; does not check if the file actually exists.
     */
    relativeFilePath(fileName: string): string; // String

    /**
     * Removes fileName from this directory.
     * @param fileName string - The relative path of the file to remove.
     * @returns boolean true if the file is removed successfully, otherwise false.
     */
    remove(fileName: string): boolean; // Boolean

    /**
     * Renames a file or directory from oldName to newName.
     * @param oldName string - The relative path of the file/folder to rename.
     * @param newName string - The relative path to rename the file/folder to.
     * @returns boolean true if successful, otherwise false.
     */
    rename(oldName: string, newName: string): boolean; // Boolean

    /**
     * Removes a directory.
     * @param dirName string - The relative path of a sub-directory to remove. If empty (default), this directory's absolute path will be used.
     * @returns boolean true if dirName exists when this function is called, the directory is empty and the sub-directory is successfully removed, otherwise false.
     */
    rmdir(dirName?: string): boolean; // Boolean

    /**
     * Removes all directories that exist in dirpath, provided that they are empty. This is the opposite of mkpath().
     * @param dirPath string
     * @returns boolean true if successful, otherwise false.
     */
    rmpath(dirPath?: string): boolean; // Boolean

    /**
     * Sets the current working directory of the application to be this directory.
     * @returns boolean true if the current working directory was changed, otherwise false.
     */
    setCurrent(): boolean; // Boolean

    /**
     * Sets the filter used by entryList() to filters. The filter is used to specify the kind of entries should be returned by entryList().
     * @param filters number
     * @since 4.9.3.35
     */
    setFilter(filters: number): void;

    /**
     * Sets the name filters used by entryList() to the list of filters specified by nameFilters. Each name filter is a wildcard (globbing) filter that understands * and ? wildcards.
     * @param nameFilters any[]
     * @since 4.9.3.35
     */
    setNameFilters(nameFilters: any[]): void;

    /**
     * Sets the path of this directory to newPath.
     * @param path string
     */
    setPath(path: string): void;

    /**
     * Sets the sort order used by entryList(). The sort is specified by OR-ing values from the enum SortFlags.
     * @param sort number
     * @since 4.9.3.35
     */
    setSorting(sort: number): void;

    /**
     * @returns number The value set by setSorting().
     * @since 4.9.3.35
     */
    sorting(): number; // SortFlags

    /**
     * Deprecated
     * @param file string
     * @returns string
     */
    absFilePath(file: string): string; // String

    /**
     * Deprecated
     * @param dirName string
     * @returns boolean
     */
    mkdirs(dirName?: string): boolean; // Boolean

    /**
     * Deprecated
     * @param dirName string
     * @returns boolean
     */
    rmdirs(dirName?: string): boolean; // Boolean

    /**
     * Deprecated
     * @param fileName string
     * @returns boolean
     */
    fileExists(fileName: string): boolean; // Boolean

    /**
     * Deprecated
     * @returns string
     */
    absPath(): string; // String
}
