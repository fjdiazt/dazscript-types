/**
 * A container type that presents assets as content files reside on disk.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/folderassetcontainer_dz
 */
declare class DzFolderAssetContainer extends DzRefCountedItem {

    /* Properties */

    /**
     * Holds the list of folder names to exclude as children of this container.
     */
    excludeFolders: any[]; // Array

    /**
     * Holds the list of file filters for this container.
     */
    fileFilters: any[]; // Array

    /**
     * Holds whether or not this container represents an Import folder. (Read Only)
     * @since 4.11.0.193
     */
    isImport: boolean; // Boolean

    /**
     * Holds whether or not this container is at the top level of the Import folder hierarchy. (Read Only)
     * @since 4.11.0.193
     */
    isImportTopLevel: boolean; // Boolean

    /**
     * Holds whether or not this container represents a native folder. (Read Only)
     * @since 4.11.0.193
     */
    isNative: boolean; // Boolean

    /**
     * Holds whether or not this container is at the top level of the native folder hierarchy. (Read Only)
     * @since 4.11.0.193
     */
    isNativeTopLevel: boolean; // Boolean

    /**
     * Holds whether or not this container represents a Poser folder. (Read Only)
     * @since 4.11.0.193
     */
    isPoser: boolean; // Boolean

    /**
     * Holds whether or not this container is an immediate child of the top level folder in a Poser folder hierarchy. (Read Only)
     * @since 4.11.0.214
     */
    isPoserIntermediate: boolean; // Boolean

    /**
     * Holds whether or not this container is at the top level of the Poser folder hierarchy. (Read Only)
     * @since 4.11.0.193
     */
    isPoserTopLevel: boolean; // Boolean

    /**
     * Holds the list of folder names to allow as children of this container.
     */
    onlyIncludeFolders: any[]; // Array

    /* Methods */

    /**
     * @param shortFileName string
     * @returns boolean true if shortFileName matches the filter for this container, otherwise false.
     */
    fileMatchesFilter(shortFileName: string): boolean; // Boolean

    /**
     * @returns string The full path of the folder that this container represents.
     */
    getFullPath(): string; // String

    /**
     * @returns boolean true if this container has child containers that are directories, otherwise false.
     */
    hasDirectoryChildren(): boolean; // Boolean

    /**
     * @param asset DzAsset
     * @returns boolean true if asset conflicts will create a link when called, otherwise false.
     * @since 4.9.0.47
     */
    insertsAsLink(asset: DzAsset): boolean; // Boolean

    /**
     * Attempts to update the child containers of this container.
     * @returns boolean true if the update was successful, otherwise false.
     */
    updateChildren(): boolean; // Boolean
}
