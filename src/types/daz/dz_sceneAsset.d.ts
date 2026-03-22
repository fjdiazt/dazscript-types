declare class DzSceneAsset extends DzRefCountedItem {

    /* Properties */

    /* Methods */
    assetLoaded(): void;
    assetNeedSave(): boolean;
    assetSaved(): void;
    getAssetFileInfo(): DzSceneAssetFileInfo;
    getAssetId(): QString;
    getAssetUri(): DzUri;
    getConstFileInfoData(info: DzSceneAssetFileInfo): any;
    getFallBackOffset(): number;
    getFileInfoData(info: DzSceneAssetFileInfo): DzSceneAssetFileInfoData;
    getSource(): DzUri;
    loadAssetSection(file: DzInFile, sectionID: number): boolean;
    matchesAssetId(assetID: QString, checkSource: boolean): boolean;
    modifyAsset(newUri: DzUri): boolean;
    modifyAsset(): boolean;
    modifyAsset(newUri: DzUri): boolean;
    modifyAsset(): boolean;
    saveAsset(file: DzOutFile): void;
    setAssetId(assetID: QString): void;
    setFallBackOffset(offset: number): void;
    copyDataTo(data: DzSceneAssetFileInfoData): void;
    getContributor(): DzAuthor;
    getModifiedDate(): QDateTime;
    getRevision(): DzVersion;
    getUri(): DzUri;
}