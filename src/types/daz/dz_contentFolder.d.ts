declare class DzContentFolder extends DzBase {

    /* Properties */
    fullPath: string;
    folderName: string;
    label: string;
    icon: QObject;
    foldersAreLoaded: boolean;
    filesAreLoaded: boolean;
    canAddSubFolder: boolean;
    folderType: number;
    canDelete: boolean;
    canRename: boolean;
    isBuiltInContentFolder: boolean;
    NATIVE_TYPE: number;
    POSER_TYPE: number;
    IMPORT_TYPE: number;

    /* Methods */
    addedFolder(newFolder: DzContentFolder): void;
    removedFolder(folder: DzContentFolder): void;
    folderListChanged(): void;
    fileListChanged(): void;
    getParent(): DzContentFolder;
    refresh(reloadIcons: boolean): boolean;
    refresh(reloadIcons: boolean): boolean;
    getFirstFolder(): DzContentFolder;
    getFirstHiddenFolder(): DzContentFolder;
    getNext(): DzContentFolder;
    getFirstFile(): DzContentFile;
    getFirstHiddenFile(): DzContentFile;
    canMoveFile(file: DzContentFilePtr): boolean;
    canMoveFiles(files: DzContentFilePtr[]): boolean;
    moveFile(file: DzContentFilePtr): boolean;
    moveFiles(files: DzContentFilePtr[]): boolean;
    copyFile(file: DzContentFilePtr): boolean;
    copyFile(srcFilename: QString, tgtFilename: QString): boolean;
    copyFiles(files: DzContentFilePtr[]): boolean;
    hasSubFolders(): boolean;
    addSubFolder(folderName: QString): boolean;
    deleteFolder(): boolean;
    rename(newName: QString): boolean;
    isModifiable(): boolean;
}