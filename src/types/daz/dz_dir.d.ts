declare class DzDir extends QObject {

    constructor(path?: QString);

    cd(dir: QString): boolean;
    cdUp(): boolean;
    setPath(path: QString): void;
    relativeFilePath(filePath: QString): QString;
    filePath(fp: QString): QString;
    absFilePath(filePath: QString): QString;
    entryList(filter: QString, filterSpec?: number, sortSpec?: number): QString[];
    entryList(filters: QString[], filterSpec?: number, sortSpec?: number): QString[];
    mkdir(dir?: QString): boolean;
    mkdirs(dirs?: QString): boolean;
    mkpath(path: QString): boolean;
    rmdir(dir?: QString): boolean;
    rmdirs(dirs?: QString): boolean;
    rmpath(path?: QString): boolean;
    remove(path: QString): boolean;
    rename(oldName: QString, newName: QString): boolean;
    copy(srcFile: QString, destFile: QString): boolean;
    move(srcFile: QString, destFile: QString): boolean;
    fileExists(file: QString): boolean;
    setCurrent(): boolean;
    dirName(): QString;
    path(): QString;
    absPath(): QString;
    canonicalPath(): QString;
    isAbsolute(): boolean;
    isReadable(): boolean;
    isRelative(): boolean;
    isRoot(): boolean;
    exists(): boolean;
    refresh(): void;
    /** var files = dir.getFilesFromDir(["*.log"], false); */
    getFilesFromDir(extensions: QString[], recursive?: boolean): QString[];

    static Dirs: number; // 1
    static Files: number; // 2
    static Drives: number; // 4
    static NoSymLinks: number; // 8
    static AllEntries: number; // 7
    static All: number; // 7
    static TypeMask: number; // 15
    static Readable: number; // 16
    static Writable: number; // 32
    static Executable: number; // 64
    static PermissionMask: number; // 112
    static RWEMask: number; // 112
    static Modified: number; // 128
    static Hidden: number; // 256
    static System: number; // 512
    static AccessMask: number; // 1008
    static AllDirs: number; // 1024
    static CaseSensitive: number; // 2048
    static NoDotAndDotDot: number; // 4096
    static NoDot: number; // 8192
    static NoDotDot: number; // 16384
    static NoFilter: number; // -1
    static Name: number; // 0
    static Time: number; // 1
    static Size: number; // 2
    static Unsorted: number; // 3
    static SortByMask: number; // 3
    static DirsFirst: number; // 4
    static Reversed: number; // 8
    static IgnoreCase: number; // 16
    static DirsLast: number; // 32
    static LocaleAware: number; // 64
    static Type: number; // 128
    static NoSort: number; // -1
}