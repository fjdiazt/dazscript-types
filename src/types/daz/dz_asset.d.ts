/**
 * An abstraction between the presentation of a content file and the file on disk.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/asset_dz
 */
declare class DzAsset extends DzRefCountedItem {

    /* Properties */

    /**
     * Holds the asset identifier for this asset. (Read Only)
     */
    assetID: Object;

    /**
     * Holds the name for this asset. (Read Only)
     */
    assetName: string; // String

    /**
     * Holds the vendor intended audience for this asset.
     * @since 4.8.1.97
     */
    audience: number; // Number

    /**
     * Holds a list of all categories that this asset is in. (Read Only)
     * @since 4.9.0.2
     */
    categories: any[]; // Array

    /**
     * Holds whether the companion file (if any) is a DAZ Script. (Read Only)
     */
    companionIsScript: boolean; // Boolean

    /**
     * Holds the full path to the folder the companion file is in. (Read Only)
     */
    companionPath: string; // String

    /**
     * Holds a list of all compatibility bases that this asset is compatible with. (Read Only)
     * @since 4.9.0.2
     */
    compatibilities: any[]; // Array

    /**
     * Holds the [vendor] compatibility base for this asset.
     * @since 4.8.1.97
     */
    compatibilityBase: string; // String

    /**
     * Holds the [vendor] content type for this asset.
     * @since 4.8.1.97
     */
    contentType: string; // String

    /**
     * Holds the date this asset was created. (Read Only)
     * @since 4.9.0.2
     */
    dateCreated: Date;

    /**
     * Holds the date this asset was last modified. (Read Only)
     * @since 4.9.0.2
     */
    dateLastModified: Date;

    /**
     * Holds the vendor description for this asset.
     * @since 4.8.1.97
     */
    description: string; // String

    /**
     * Holds the name displayed to the user for this asset. (Read Only)
     * @since 4.9.0.20
     */
    displayName: string; // String

    /**
     * Holds the group identifier for this asset. 0 = default, < 0 = app defined, > 0 = user defined.
     * @since 4.9.0.11
     */
    groupId: number; // Number

    /**
     * Holds whether this asset has metadata provided by the cloud. (Read Only)
     * @since 4.9.0.2
     */
    hasCloudMetadata: boolean; // Boolean

    /**
     * Holds whether this asset is a non-native file and a DAZ Script or native file with the same basename exists in the same directory. (Read Only)
     */
    hasCompanion: boolean; // Boolean

    /**
     * Holds whether this asset is a non-native file and a DAZ Script with the same basename exists in the same directory. (Read Only)
     */
    hasCompanionScript: boolean; // Boolean

    /**
     * Holds whether this asset should be hidden in asset views.
     * @since 4.9.0.2
     */
    hidden: boolean; // Boolean

    /**
     * Holds the icon path for this asset. (Read Only)
     */
    icon: Pixmap;

    /**
     * Holds whether this asset can be installed from the cloud. (Read Only)
     * @since 4.9.0.20
     */
    isCloudInstallable: boolean; // Boolean

    /**
     * Holds whether this asset is installed from the cloud. (Read Only)
     * @since 4.9.0.20
     */
    isCloudInstalled: boolean; // Boolean

    /**
     * Holds whether this asset is managed by the cloud. (Read Only)
     * @since 4.9.0.2
     */
    isCloudOwned: boolean; // Boolean

    /**
     * Holds whether this asset is installed in the database. (Read Only)
     * @since 4.9.0.20
     */
    isInstalled: boolean; // Boolean

    /**
     * Holds whether the metadata for this asset is valid. (Read Only)
     * @since 4.8.1.97
     */
    isMetadataValid: boolean; // Boolean

    /**
     * Holds whether this asset is a native file. (Read Only)
     */
    isNative: boolean; // Boolean

    /**
     * Holds whether this asset is a native script file. (Read Only)
     */
    isScript: boolean; // Boolean

    /**
     * Holds whether this asset is a symbolic link. (Read Only)
     */
    isSymLink: boolean; // Boolean

    /**
     * Holds whether this asset is owned by a vendor or by the user. (Read Only)
     * @since 4.9.0.2
     */
    isVendor: boolean; // Boolean

    /**
     * Holds whether this asset needs to be installed from the cloud. (Read Only)
     * @since 4.9.0.20
     */
    needsCloudInstall: boolean; // Boolean

    /**
     * Holds whether this asset needs to be updated from the cloud. (Read Only)
     * @since 4.9.0.2
     */
    needsCloudUpdate: boolean; // Boolean

    /**
     * Holds the user notes for this asset.
     * @since 4.12.2.15
     */
    notes: string; // String

    /**
     * Holds the original filename for this asset. (Read Only)
     * @since 4.8.1.97
     */
    originalFilename: string; // String

    /**
     * Holds the original path for this asset. (Read Only)
     * @since 4.8.1.97
     */
    originalPath: string; // String

    /**
     * Holds the Globally Unique Identifier (GUID) for the product this asset belongs to. (Read Only)
     * @since 4.11.0.193
     */
    productGUID: string; // String

    /**
     * Holds the product identifier for the product that this asset belongs to. (Read Only)
     * @since 4.9.0.55
     */
    productID: string; // String

    /**
     * Holds the name of the product this asset belongs to. (Read Only)
     * @since 4.9.0.55
     */
    productName: string; // String

    /**
     * Holds the base of the product path in the cloud folder for cloud assets. (Read Only)
     * @since 4.9.3.83
     */
    productPath: string; // String

    /**
     * Holds the icon path for this asset. (Read Only)
     */
    smallIcon: Pixmap;

    /**
     * Holds the store identifier for the product that this asset belongs to. (Read Only)
     * @since 4.11.0.193
     */
    storeID: string; // String

    /**
     * Holds the path that the symbolic link is referencing (if any).
     */
    symLinkPath: string; // String

    /**
     * Holds the URL for this asset. (Read Only)
     */
    url: string; // String

    /**
     * Holds the encoded URL for this asset. (Read Only)
     */
    urlEncoded: string; // String

    /**
     * Holds a list of user owned categories that this asset is in. (Read Only)
     * @since 4.9.0.2
     */
    userCategories: any[]; // Array

    /**
     * Holds a list of user owned compatibility bases that this asset is compatible with. (Read Only)
     * @since 4.9.0.2
     */
    userCompatibilities: any[]; // Array

    /**
     * Holds the user keywords for this asset.
     * @since 4.9.0.2
     */
    userKeywords: any[]; // Array

    /**
     * Holds a list of vendor owned categories that this asset is in. (Read Only)
     * @since 4.9.0.2
     */
    vendorCategories: any[]; // Array

    /**
     * Holds a list of vendor owned compatibility bases that this asset is compatible with. (Read Only)
     * @since 4.9.0.2
     */
    vendorCompatibilities: any[]; // Array

    /**
     * Holds the vendor keywords for this asset.
     * @since 4.9.0.2
     */
    vendorKeywords: any[]; // Array

    /* Methods */

    /**
     * Sets the compatibility bases that this asset is compatible with.
     * @param bases any[] - The list of compatibility bases this asset is compatible with.
     * @param create boolean - If true, creates compatibility bases that do not exist. If false, compatibility will only be established for compatibility bases that already exist.
     * @since 4.9.0.2
     */
    addCompatibilities(bases: any[], create?: boolean): void;

    /**
     * Sets the categories for this asset.
     * @param categories any[] - The list of categories to add this asset to.
     * @param create boolean - If true, creates categories that do not exist. If false, only categories that already exist will be assigned.
     * @since 4.9.0.2
     */
    addToCategories(categories: any[], create?: boolean): void;

    /**
     * Sets this asset as belonging to the default group identifier; 0.
     * @since 4.9.0.11
     */
    clearGroup(): void;

    /**
     * Forces the icon for this asset to reload.
     */
    forceImageReload(): void;

    /**
     * @returns string The url of this asset as a local file path.
     */
    getAsLocalFile(): string; // String

    /**
     * @returns string The base file extension for this asset; without any encryption extension.
     */
    getBaseExtension(): string; // String

    /**
     * @returns string The extension to use for DAZ Studio file link.
     * @since 4.9.0.30
     */
    getDSLinkExtension(): string; // String

    /**
     * @returns string The text that is placed inside a DAZ Studio file link.
     * @since 4.9.0.30
     */
    getDSLinkText(): string; // String

    /**
     * @returns DzAbstractAssetContainer The asset container that owns this asset.
     */
    getOwner(): DzAbstractAssetContainer;

    /**
     * @returns DzProductAssetContainer The product that this asset belongs to (if any), otherwise null.
     * @since 4.9.0.2
     */
    getProduct(): DzProductAssetContainer;

    /**
     * @returns string The relative file path for this asset.
     */
    getRelativeFilePath(): string; // String

    /**
     * @param id number
     * @returns boolean true if this asset is a member of group, otherwise false.
     * @since 4.9.0.11
     */
    isGroup(id: number): boolean; // Boolean

    /**
     * Loads the default icon for this asset.
     * @param delayLoad boolean - If true, loading of the icon is delayed.
     * @returns boolean true if the default icon for this asset is successfully loaded, otherwise false.
     */
    loadDefaultIcon(delayLoad: boolean): boolean; // Boolean

    /**
     * @param linkPath string - The path of the file to read from.
     * @returns Object A map of the key value pairs in a DAZ Studio link file.
     * @since 4.9.0.30
     */
    readLinkData(linkPath: string): Object;

    /**
     * Removes the compatibility bases that this asset is compatible with.
     * @param bases any[] - The list of compatibilities to remove from this asset.
     * @param isVender boolean - If true, the compatibilities being looked up are owned by the vendor.
     * @since 4.9.2.53
     */
    removeCompatibilities(bases: any[], isVender?: boolean): void;

    /**
     * Removes this asset from the categories.
     * @param categories any[] - The list of categories to remove this asset from.
     * @param isVender boolean - If true, the categories being looked up are owned by the vendor.
     * @since 4.9.2.53
     */
    removeFromCategories(categories: any[], isVender?: boolean): void;

    /**
     * Changes the name of this asset.
     * @param name string - The new name for this asset.
     * @returns boolean true if the operation is successful, otherwise false.
     */
    rename(name: string): boolean; // Boolean

    /**
     * @param linkSavePath string - The path of the file to save to.
     * @returns boolean true if a DAZ Studio file link to this asset is saved, otherwise false.
     * @since 4.9.0.30
     */
    saveDSLink(linkSavePath: string): boolean; // Boolean

    /**
     * Sets whether existence of this asset should be ignored.
     * @param onOff boolean
     */
    setIgnoreExists(onOff: boolean): void;

    /**
     * @returns DzUri This asset expressed as a DzUri.
     * @since 4.9.0.40
     */
    toUri(): DzUri;

    /**
     * @param guid string - The Globally Unique Identifier (GUID) for the product to update from. Leave empty to update using the current product if an association is already made.
     * @returns boolean true if this asset is updated, otherwise false.
     * @since 4.9.2.69
     */
    updateFromMetadata(guid?: string): boolean; // Boolean

    /* Signals */

    /**
     * Emitted when the image for this asset has changed.
     * @param asset DzAsset - The asset that the image changed on.
     */
    assetImageChanged: ISignal<DzAsset>;

    /* Undocumented Augment Members */

    /** @undocumented */
    User: number; // 0

    /** @undocumented */
    Vendor: number; // 1

    /** @undocumented */
    UserAndVendor: number; // 2

    /** @undocumented */
    objectName: string; //

    /** @undocumented */
    autoKeywords: object; // Angels Secrets Bracelet.duf,Angels Secrets Bracelet,duf,Accessories,Arms,Lower,Angels Secrets Lingerie and Poses for Genesis 3 and 8 Female(s),Val3dart

    /** @undocumented */
    name: string; //

    /** @undocumented */
    _clone: any;

    /** @undocumented */
    _getMethodsNames: any;

    /** @undocumented */
    className: any;

    /** @undocumented */
    deleteLater(): any;

    /** @undocumented */
    destroyed(): any;

    /** @undocumented */
    destroyed(p0: QObject): any;

    /** @undocumented */
    getConstRelativeFilePath(): any;

    /** @undocumented */
    getInstance(p0: number): any;

    /** @undocumented */
    getMetadata(): any;

    /** @undocumented */
    getNumInstances(): any;

    /** @undocumented */
    getPriorityInstance(): any;

    /** @undocumented */
    inherits: any;

    /** @undocumented */
    prioritySet(): any;

    /** @undocumented */
    removeInstance(p0: number): any;

    /** @undocumented */
    setPriority(p0: number): any;
}
