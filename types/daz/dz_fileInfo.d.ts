declare class DzFileInfo extends QObject {
    static ExeGroup: number;	// 16
    static ExeOther: number;	// 1
    static ExeOwner: number;	// 4096
    static ExeUser: number;	// 256
    static ReadGroup: number;	// 64
    static ReadOther: number;	// 4
    static ReadOwner: number;	// 16384
    static ReadUser: number;	// 1024
    static WriteGroup: number;	// 32
    static WriteOther: number;	// 2
    static WriteOwner: number;	// 8192
    static WriteUser: number;	// 512

    constructor(path: string);
    name: string;	//
    objectName: string;	//
    absFileName(): string;
    absoluteDir(): string;
    absoluteFilePath(): string;
    absolutePath(): string;
    baseName(): string;
    bundleName(): string;
    caching(): any;
    canonicalFilePath(): string;
    canonicalPath(): string;
    className(): string;
    completeBaseName(): string;
    completeSuffix(): string;
    created(): DzTime;
    dir(): any;
    exists(): boolean;
    extension(): string;
    fileName(): string;
    filePath(): string;
    isAbsolute(): boolean;
    isBundle(): boolean;
    isDir(): boolean;
    isExecutable(): boolean;
    isFile(): boolean;
    isHidden(): boolean;
    isReadable(): boolean;
    isRelative(): boolean;
    isRoot(): boolean;
    isSymLink(): boolean;
    isWritable(): boolean;
    lastModified(): Date;
    lastRead(): Date;
    makeAbsolute(): any;
    path(): string;
    permission(p0?: number): any;
    refresh(): any;
    remove(): any;
    setCaching(p0: boolean): any;
    //setFile(p0: string): any;
    //setFile(p0: QFile): any;
    //setFile(p0: QDir, p1: string): any;
    size(): number;
    sizeStr(): string;
    suffix(): string;
    symLinkTarget(): any;
}