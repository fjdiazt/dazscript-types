declare class DzAsset {

    // Enumerations
    User: number; // 0
    Vendor: number; // 1
    UserAndVendor: number; // 2

    // Properties
    objectName: string; //
    isMetadataValid: boolean; // true
    needsCloudInstall: boolean; // false
    needsCloudUpdate: boolean; // false
    hasCloudMetadata: boolean; // false
    isCloudOwned: boolean; // false
    isCloudInstallable: boolean; // false
    isCloudInstalled: boolean; // false
    isInstalled: boolean; // true
    originalPath: string; // People/Genesis 8 Female/Clothing/Angel Secrets
    originalFilename: string; // Angels Secrets Bracelet.duf
    contentType: string; // Follower/Accessory/Arm/Left/Wrist
    vendorKeywords: object; //
    userKeywords: object; //
    autoKeywords: object; // Angels Secrets Bracelet.duf,Angels Secrets Bracelet,duf,Accessories,Arms,Lower,Angels Secrets Lingerie and Poses for Genesis 3 and 8 Female(s),Val3dart
    notes: string; //
    description: string; //
    audience: number; // 0
    compatibilityBase: string; // /Angels Secrets Lingerie and Poses for Genesis 3 and 8 Female(s)/AS8_Bracelet
    groupId: number; // 0
    hidden: boolean; // false
    compatibilities: object; // /Genesis 8/Female
    vendorCompatibilities: object; // /Genesis 8/Female
    userCompatibilities: object; //
    categories: string[]; // /Default/Accessories/Arms/Lower
    vendorCategories: object; // /Default/Accessories/Arms/Lower
    userCategories: object; //
    dateCreated: object; // Sat May 01 2021 01:03:36 GMT-0400 (Pacific SA Standard Time)
    dateLastModified: object; // Sat May 01 2021 01:03:36 GMT-0400 (Pacific SA Standard Time)
    isVendor: boolean; // true
    productGUID: string; // 424978ec-16ed-4564-9a4f-e55c0e6e602a
    productID: string; // 45361
    productName: string; // Angels Secrets Lingerie and Poses for Genesis 3 and 8 Female(s)
    productPath: string; //
    storeID: string; // DAZ 3D
    assetID: undefined; // undefined
    assetName: string; // Angels Secrets Bracelet.duf
    displayName: string; // Angels Secrets Bracelet
    icon: object; // [object Object]
    smallIcon: object; // [object Object]
    url: string; // file:///G:/3D/DazStudio/Libraries/DAZ Content Library/people/genesis 8 female/clothing/angel secrets/angels secrets bracelet.duf
    urlEncoded: object; // [object Object]
    companionPath: string; //
    hasCompanion: boolean; // false
    companionIsScript: boolean; // false
    hasCompanionScript: boolean; // false
    isNative: boolean; // true
    isScript: boolean; // false
    isSymLink: boolean; // false
    symLinkPath: string; //
    name: string; //

    // Methods
    _clone: any;
    _getMethodsNames: any;
    // addCompatibilities(p0:stringList): any;
    // addCompatibilities(p0:stringList, p1:boolean): any;
    // addInstance(p0:DzDBContentInstanceTable): any;
    addToCategories(categories: string[]): any;
    addToCategories(categories: string[], create: boolean): any;
    className: any;
    clearGroup(): any;
    deleteLater(): any;
    destroyed(): any;
    destroyed(p0: QObject): any;
    forceImageReload(): any;
    getAsLocalFile(): any;
    getBaseExtension(): any;
    getConstRelativeFilePath(): any;
    getDSLinkExtension(): any;
    getDSLinkText(): any;
    getInstance(p0: number): any;
    getMetadata(): any;
    getNumInstances(): any;
    getOwner(): DzAbstractAssetContainer;
    getPriorityInstance(): any;
    getProduct(): DzProductAssetContainer;
    getRelativeFilePath(): any;
    inherits: any;
    isGroup(p0: number): any;
    loadDefaultIcon(p0: boolean): any;
    prioritySet(): any;
    readLinkData(p0: string): any;
    // removeCompatibilities(p0:stringList): any;
    // removeCompatibilities(p0:stringList, p1:boolean): any;
    removeFromCategories(categories: string[], isVendor?: boolean): any;
    removeInstance(p0: number): any;
    rename(p0: string): any;
    saveDSLink(p0: string): any;
    setIgnoreExists(p0: boolean): any;
    setPriority(p0: number): any;
    toUri(): any;
    updateFromMetadata(): any;
    updateFromMetadata(p0: string): any;

    // Signals
    assetImageChanged(p0: DzAsset): any;
}