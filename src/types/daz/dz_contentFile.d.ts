/**
 * Represents a file in the content library.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/contentfile_dz
 */
declare class DzContentFile extends DzRefCountedItem {

    /* Properties */

    /**
     * Holds whether or not the file can be deleted. (Read Only)
     */
    canDelete: boolean; // Boolean

    /**
     * Holds whether or not the file can be renamed. (Read Only)
     */
    canRename: boolean; // Boolean

    /**
     * Holds whether or not a companion file is a script file. (Read Only)
     */
    companionIsScript: boolean; // Boolean

    /**
     * Holds the path of the companion script for non-native files. (Read Only)
     */
    companionPath: string; // String

    /**
     * Holds the full path of the file. (Read Only)
     */
    fullPath: string; // String

    /**
     * Holds whether or not a non-native file has a native companion file. (Read Only)
     */
    hasCompanion: boolean; // Boolean

    /**
     * Holds whether or not a non-native file has a companion script file. (Read Only)
     */
    hasCompanionScript: boolean; // Boolean

    /**
     * Holds whether or not the file is a native content file . (Read Only)
     */
    isNative: boolean; // Boolean

    /**
     * Holds whether or not the file is a script file . (Read Only)
     */
    isScript: boolean; // Boolean

    /**
     * Holds the label of the file, as displayed to the user. (Read Only)
     */
    label: string; // String

    /**
     * Holds the name of the file. (Read Only)
     */
    name: string; // String

    /**
     * Holds the thumbnail for this file. (Read Only)
     * @since 4.21.1.44
     */
    thumbnailPixmap: Pixmap;

    /**
     * Holds the small thumbnail for this file. (Read Only)
     * @since 4.21.1.44
     */
    thumbnailSmallPixmap: Pixmap;

    /**
     * Deprecated
     */
    icon: Pixmap;

    /**
     * Deprecated
     */
    smallIcon: Pixmap;

    /* Methods */

    /**
     * Removes this file from its content folder. The default implementation of this function deletes the content file and any associated thumbnail image from the disk, so use with care!
     * @returns boolean true if the file was removed successfully, otherwise false.
     */
    deleteFile(): boolean; // Boolean

    /**
     * @returns DzContentFolder The current parent folder of this file.
     */
    getFolder(): DzContentFolder;

    /**
     * @returns DzContentFile The next sibling of this file.
     */
    getNext(): DzContentFile;

    /**
     * Force the file to reload its icon.
     */
    reloadIcon(): void;

    /**
     * Rename the file to the given name.
     * @param newName string
     * @returns boolean true if the file was successfully renamed, otherwise false.
     */
    rename(newName: string): boolean; // Boolean
}
