/**
 * Represents a folder in the content library.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/contentfolder_dz
 */
declare class DzContentFolder extends DzRefCountedItem {

    /* Properties */

    /**
     * Holds whether or not a sub folder can be added in this folder. (Read Only)
     */
    canAddSubFolder: boolean; // Boolean

    /**
     * Holds whether or not this folder can be deleted. (Read Only)
     */
    canDelete: boolean; // Boolean

    /**
     * Holds whether or not this folder can be renamed. (Read Only)
     */
    canRename: boolean; // Boolean

    /**
     * Holds whether or not the files of this folder are loaded. (Read Only)
     */
    filesAreLoaded: boolean; // Boolean

    /**
     * Holds the name of the folder on disk. (Read Only)
     */
    folderName: string; // String

    /**
     * Holds whether or not the subfolders of this folder are loaded. (Read Only)
     */
    foldersAreLoaded: boolean; // Boolean

    /**
     * Holds the type of this folder. (Read Only)
     */
    folderType: number; // FolderType

    /**
     * Holds the full path of the folder on disk. (Read Only)
     */
    fullPath: string; // String

    /**
     * Holds whether or not this folder is a built-in content folder. (Read Only)
     */
    isBuiltInContentFolder: boolean; // Boolean

    /**
     * Holds the label of the folder as it is displayed to the user. (Read Only)
     */
    label: string; // String

    /**
     * Holds the thumbnail for this folder. (Read Only)
     * @since 4.21.1.44
     */
    thumbnailPixmap: Pixmap;

    /**
     * Deprecated
     */
    icon: Pixmap;

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of FolderType.
     */
    static NATIVE_TYPE: number;

    /**
     * DAZ enum member of FolderType.
     */
    static POSER_TYPE: number;

    /**
     * DAZ enum member of FolderType.
     */
    static IMPORT_TYPE: number;

    /* Methods */

    /**
     * Adds a new subfolder with the given name to this folder.
     * @param folderName string - The name of the new sub folder.
     * @returns boolean true if the new subfolder was created successfully, otherwise false.
     */
    addSubFolder(folderName: string): boolean; // Boolean

    /**
     * @param file DzContentFile - The file to test for moving.
     * @returns boolean true if the file is a type that can be moved or copied to this folder, otherwise false.
     */
    canMoveFile(file: DzContentFile): boolean; // Boolean

    /**
     * Copies the given content file to this folder.
     * @param file DzContentFile - The file to copy to this folder.
     * @returns boolean true if the file was copied successfully, otherwise false.
     */
    copyFile(file: DzContentFile): boolean; // Boolean

    /**
     * Removes this content folder. The default implementation of this function deletes all files and subfolders in this directory from the disk, so use with care!
     * @returns boolean true if the file was removed successfully, otherwise false.
     */
    deleteFolder(): boolean; // Boolean

    /**
     * @returns DzContentFile The first file in this folder (if any), otherwise null.
     */
    getFirstFile(): DzContentFile;

    /**
     * @returns DzContentFolder The first child folder (if any), otherwise null.
     */
    getFirstFolder(): DzContentFolder;

    /**
     * @returns DzContentFile The first hidden file in this folder (if any), otherwise null.
     */
    getFirstHiddenFile(): DzContentFile;

    /**
     * @returns DzContentFolder The first hidden folder (if any), otherwise null.
     */
    getFirstHiddenFolder(): DzContentFolder;

    /**
     * @returns DzContentFolder The next sibling folder (if any), otherwise null.
     */
    getNext(): DzContentFolder;

    /**
     * @returns DzContentFolder The parent folder of this folder (if any), otherwise null.
     */
    getParent(): DzContentFolder;

    /**
     * @returns boolean true if this folder has subfolders, otherwise false.
     */
    hasSubFolders(): boolean; // Boolean

    /**
     * @returns boolean true if the folder can be modified, otherwise false.
     */
    isModifiable(): boolean; // Boolean

    /**
     * Loads file objects for the files that reside in this folder.
     * @since 4.20.0.3
     */
    loadFiles(): void;

    /**
     * Loads folder objects for the folders that reside in this folder.
     * @since 4.20.0.3
     */
    loadFolders(): void;

    /**
     * Moves the given content file to this folder.
     * @param file DzContentFile - The file to move to this folder.
     * @returns boolean true if the file was moved successfully, otherwise false.
     */
    moveFile(file: DzContentFile): boolean; // Boolean

    /**
     * Checks for changes in sub folders and files (if loaded).
     * @param reloadThumbnails boolean - If true, the thumbnails will be reloaded from disk.
     * @returns boolean true if a change in subfolders was found and the tree needs to be reloaded, otherwise false.
     */
    refresh(reloadThumbnails?: boolean): boolean; // Boolean

    /**
     * Rename the folder to the given name.
     * @param newName string - The new name for the folder.
     * @returns boolean true if the folder was successfully renamed, otherwise false.
     */
    rename(newName: string): boolean; // Boolean

    /**
     * Removes file objects of this folder.
     * @since 4.20.0.3
     */
    unloadFiles(): void;

    /**
     * Removes child folder objects of this folder object.
     * @since 4.20.0.3
     */
    unloadFolders(): void;

    /* Signals */

    /**
     * Emitted when a new folder is added.
     * @param newFolder DzContentFolder - The folder that was added.
     */
    addedFolder: ISignal<DzContentFolder>;

    /**
     * Emitted when the file list has changed.
     */
    fileListChanged: ISignal<void>;

    /**
     * Emitted when a folder is added or removed.
     */
    folderListChanged: ISignal<void>;

    /**
     * Emitted when a folder is removed.
     * @param folder DzContentFolder - The folder that was removed.
     */
    removedFolder: ISignal<DzContentFolder>;

    /* Undocumented Augment Members */

    /** @undocumented */
    canMoveFiles(files: DzContentFilePtr[]): boolean;

    /** @undocumented */
    moveFiles(files: DzContentFilePtr[]): boolean;

    /** @undocumented */
    copyFiles(files: DzContentFilePtr[]): boolean;
}
